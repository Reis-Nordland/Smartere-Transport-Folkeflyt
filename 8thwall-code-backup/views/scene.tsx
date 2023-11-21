import { AFrameScene } from '../lib/aframe-components'
import testLocations from '../lib/testLocations'
import {
  ArInstructionsDialog,
  toMapButton as toMapFooter,
  LoaderOverlay,
} from '../lib/react-components'
import { gestureDetectorComponent } from '../lib/gesture-detector'
import { pinchScaleComponent } from '../lib/pinch-scale'
import '../lib/orbit-controls-custom'
import { hasLoadedComponent } from '../lib/aframe-has-loaded'
import placeHolderCurrentLocation from '../lib/placeHolderLocation'
import {
  createMarkers,
  createLocationMarker,
  removeAllMarkers,
} from '../lib/aframe-elements'
import { usePageViews } from '../lib/matomo'
import {
  dynamicMarkerScalingComponent,
  dynamicMarkerScalingSystem,
} from '../lib/dynamic-marker-scaling'

import {
  configTargetsComponent,
  smartTargetComponent,
} from '../lib/config-targets'
import { Coordinates, Poi } from '../lib/types'
import { fetchAllPois, fetchPoisWithType } from '../lib/api'
import { getCurrentLocation, getCurrentDayofWeek } from '../lib/utils'
import WayfinderMenus, { WayfindPoint } from './scene/wayfinder-menus'
import {
  drawBusRoutePart,
  drawTransportOption,
  drawWholeBusRoute,
} from './scene/aframe-map'

declare let React: any
declare let ReactRouterDOM: any
const { withRouter } = ReactRouterDOM
const { useState, useEffect } = React

const modelHtmls = {
  map1: require('./map.html'),
  map2: require('./mapNoAr.html'),
  church: require('./church.html'),
}

const components = [
  { name: 'gesture-detector', val: gestureDetectorComponent() },
  { name: 'pinch-scale', val: pinchScaleComponent() },
  { name: 'config-targets', val: configTargetsComponent() },
  { name: 'dynamic-marker-scaling', val: dynamicMarkerScalingComponent() },
]

const Scene = withRouter(({ match }) => {
  const {
    params: { arId, pointId },
  } = match
  const rotateMarkersBy =
    arId === 'map2' || arId === undefined ? '-45 0 0' : '0 0 0'
  // const shouldDisplayToMapFooter = arId === "church";

  let [point, setPoint] = useState(null) as [WayfindPoint, any]
  function onClick({ name, description, coordinates, openingHours }) {
    setPoint({
      name,
      description,
      coordinates,
      openingHours: openingHours[getCurrentDayofWeek()],
    })
  }

  function updatePoints(jsonResponse: Poi[]) {
    const map = document.getElementById('place-in-me')
    removeAllMarkers()
    createMarkers(jsonResponse, onClick, rotateMarkersBy).forEach((marker) =>
      map.appendChild(marker)
    )
  }

  function loadAllPoints() {
    // updatePoints(testLocations)
    fetchAllPois().then((jsonRes: Poi[]) => updatePoints(jsonRes))
  }

  usePageViews()
  const modelHtml = modelHtmls[arId || 'map2']

  const [currFilter, setCurrFilter] = useState(null)

  useEffect(() => {
    if (currFilter === null) {
      // loadAllPoints()
      return
    }
    fetchPoisWithType(currFilter).then((jsonRes: Poi[]) =>
      updatePoints(jsonRes)
    )
  }, [currFilter])

  const [showArInstructions, setShowArInstructions] = useState(false)
  const listenArReadyComponent = {
    init() {
      this.el.sceneEl.addEventListener('realityready', () =>
        setShowArInstructions(true)
      )
    },
  }

  const [shouldDisplayToMapFooter, setShouldDisplayMapFooter] = useState(false)
  const smartTargetComponentWithEvent = smartTargetComponent(() => {
    setShowArInstructions(false)
    // Image target for church was found, waiting 5 seconds to display to map button
    if (arId === 'church') {
      setTimeout(() => setShouldDisplayMapFooter(true), 5000)
    }
  })

  const [isLoading3dMap, setIsLoading3dMap] = useState(arId === 'map2')

  const listenAsceneLoadedComponent = hasLoadedComponent(() => {
    setIsLoading3dMap(false)
  })

  const [currLocation, setCurrLocation] = useState(
    placeHolderCurrentLocation.coordinates
  ) as [Coordinates, any]
  useEffect(() => {
    if (arId === 'church') {
      return
    }

    loadAllPoints()
    getCurrentLocation().then((location) => {
      if (
        !location ||
        location.latitude > 15 ||
        location.latitude < 14 ||
        location.longitude > 68 ||
        location.longitude < 67
      ) {
        location = placeHolderCurrentLocation.coordinates
      }
      setCurrLocation(location)
      const locationMarker = createLocationMarker(location, rotateMarkersBy)
      const map = document.getElementById('place-in-me')
      map.appendChild(locationMarker)
    })
  }, [arId])
  return (
    <React.Fragment>
      <AFrameScene
        sceneHtml={
          // Use an HTML template, swapping its color for the color of this page.
          modelHtml
        }
        systems={[
          { name: 'dynamic-marker-scaling', val: dynamicMarkerScalingSystem() },
        ]}
        components={[
          ...components,
          { name: 'listen-ar-ready', val: listenArReadyComponent },
          { name: 'smart-target', val: smartTargetComponentWithEvent },
          { name: 'listen-loaded', val: listenAsceneLoadedComponent },
        ]}
      ></AFrameScene>
      <ArInstructionsDialog show={showArInstructions} />
      <WayfinderMenus
        point={point}
        currLocation={currLocation}
        onFilterPoints={setCurrFilter}
        onNewTransportTimes={drawTransportOption}
        onViewBuslineLeg={drawBusRoutePart}
        onViewBusline={drawWholeBusRoute}
      />
      {shouldDisplayToMapFooter && toMapFooter()}
      {isLoading3dMap && LoaderOverlay()}
    </React.Fragment>
  )
})

export { Scene }
