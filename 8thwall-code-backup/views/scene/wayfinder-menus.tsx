// import React from 'react'

import { createBusLineOptions } from '../../lib/transport-parser'
import { Coordinates, PoiType } from '../../lib/types'

import {
  Popup,
  RouteDescriptor,
  TransportMenu,
} from '../../lib/react-components'
import { fetchTransportTimes, TransportMode } from '../../lib/api'
import { FilterButton } from '../../lib/react-components/filter-button'
import { getTestTransportTime } from '../../lib/test-transport-times'
import { Directions, Leg, PolyLine } from '../../lib/apiTypes'

declare var React
const { useState, useEffect } = React

export type TransportTimes = { [key in TransportMode]: string }

export type WayfindPoint = {
  name: string
  description: string
  coordinates?: Coordinates
  openingHours?: any
}

interface Props {
  point?: WayfindPoint | null
  currLocation: Coordinates
  onFilterPoints: (poiType: PoiType) => void
  onNewTransportTimes: (transportTimes: TransportTimes) => void
  onViewBusline: (busRouteLegs: Leg[]) => void
  onViewBuslineLeg: (polyline: PolyLine) => void
}

function WayfinderMenus(props: Props) {
  const {
    point,
    currLocation,
    onFilterPoints,
    onNewTransportTimes,
    onViewBusline,
    onViewBuslineLeg,
  } = props

  const [wayFinderState, setWayFinderState] = useState({ active: false })
  const [busRoutes, setBusRoutes] = useState(null) as [Directions[] | null, any]
  const [isViewingBusline, setIsViewingBusline] = useState(false)
  const [transportTimes, setTransportTimes] = useState({}) as [
    TransportTimes,
    any
  ]

  const [showDialog, setShowDialog] = useState(false)
  useEffect(() => {
    if (!point) {
      return
    }
    setShowDialog(true)
  }, [point])

  const fetchAndUpdateTransportTime = async (
    toLocation: Coordinates,
    transportMode: TransportMode
  ) => {
    // TODO: Needs CORS to be set on backend to work
    // const transportTimesRes = await fetchTransportTimes({
    //   startPos: currLocation,
    //   endPos: toLocation,
    //   transportMode,
    // })
    const transportTimesRes = await getTestTransportTime(transportMode)
    setTransportTimes((prevState) => ({
      ...prevState,
      [transportMode]: Math.floor(transportTimesRes[0].duration / 60),
    }))
    if (transportMode === TransportMode.BUS) {
      setBusRoutes(transportTimesRes)
    }
    onNewTransportTimes(transportTimesRes)
  }

  const onNewTransportModeSelected = async (transportMode: TransportMode) => {
    setWayFinderState((prevState) => ({
      ...prevState,
      selectedTransportMode: transportMode,
    }))
    fetchAndUpdateTransportTime(wayFinderState.coordinates, transportMode)
  }

  const startWayFinding = async (toCoordinates: Coordinates) => {
    try {
      await fetchAndUpdateTransportTime(toCoordinates, TransportMode.WALK)
      setWayFinderState({
        active: true,
        coordinates: toCoordinates,
        selectedTransportMode: TransportMode.WALK,
      })
    } catch (error) {
      console.log(error.msg)
    } finally {
      setShowDialog(false)
    }
  }

  const onViewingWholeBusline = (buslineIndex) => {
    onViewBusline(busRoutes[buslineIndex].legs)
  }
  const onViewRoutePart = (buslineIndex: number, legIndex: number) => {
    onViewBuslineLeg(busRoutes[buslineIndex].legs[legIndex].polyLine)
  }

  return (
    <>
      {!!point && (
        <Popup
          onClick={startWayFinding}
          show={showDialog}
          onToggleDialog={() => setShowDialog(!showDialog)}
          name={point.name}
          description={point.description}
          coordinates={point.coordinates}
          currentLocation={currLocation}
          openingHours={point.openingHours}
        />
      )}
      {!wayFinderState.active && <FilterButton onFilter={onFilterPoints} />}
      {wayFinderState.active && (
        <>
          {!isViewingBusline && (
            <TransportMenu
              onBackPressed={() => setWayFinderState({ active: false })}
              transportTimes={transportTimes}
              selectedTransportMode={wayFinderState.selectedTransportMode}
              onTransportModeSelected={(transport: TransportMode) =>
                onNewTransportModeSelected(transport)
              }
            />
          )}
          {wayFinderState.selectedTransportMode === TransportMode.BUS &&
            !!busRoutes && (
              <RouteDescriptor
                busLineOptions={createBusLineOptions(busRoutes)}
                onExitBuslineInstructions={() => setIsViewingBusline(false)}
                onCancelViewRoutePart={onViewingWholeBusline}
                onBuslineSelected={(buslineIndex) => {
                  setIsViewingBusline(true)
                  onViewingWholeBusline(buslineIndex)
                }}
                onViewRoutePart={onViewRoutePart}
              />
            )}
        </>
      )}
    </>
  )
}

export default WayfinderMenus
