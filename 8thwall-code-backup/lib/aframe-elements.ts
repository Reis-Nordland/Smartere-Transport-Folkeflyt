import {convertGeoToPixel} from './utils'
import {Poi, PoiType} from './types'

//  NB! NB!
// @deprecated Quick fix to display different markers, do not continue with this logic!!!!
const getPoiTypeMarker = (type: PoiType) => {
  switch (type) {
    case PoiType.CULTURE:
      return 'marker-art'
    case PoiType.BUS_STOP:
      return 'marker-history'
    case PoiType.SHOPPING_MALL:
      return 'marker-food'
    case PoiType.NATURE:
      return 'marker-nature'
    case PoiType.PORT:
      return 'marker-nature'
    // NB!! Only Bodø Torg has this now
    case PoiType.BIKE_STAND:
      return 'marker-food'
    case PoiType.FOOD:
      return 'marker-food'
    default:
      return 'marker'
  }
}

const MARKER_CLASS = 'marker'

const textRotationAR = '0 0 0'
const textPos = '0 4.5 .5'

const createTextElement = (
  text,
  {pos = textPos, textRotation = textRotationAR} = {}
) => `<a-text class="cantap" negate="false" value="${text}" font="https://raw.githubusercontent.com/Oddpod/custom-font/master/custom-msdf.json" color="white" scale="5 5 5" position="${pos}" align="center" rotation="${textRotation}"></a-text>`

const displaceOriginX = 0
const displaceOriginZ = 0

const createLocationMarker = (location, rotateMarker = '0 0 0') => {
  const {x, y} = convertGeoToPixel(
    (location as any).latitude,
    (location as any).longitude
  )
  const tempDiv = document.createElement('div')
  const posString = `${x + displaceOriginX} ${0} ${y + displaceOriginZ}`
  const aEnitityString = `<a-entity dynamic-marker-scaling class="cantap" scale="0.4 0.4 0.4" position="${posString}" rotation="${rotateMarker}">
    <a-entity gltf-model="#locationMarker" scale="5 5 5" material="color: red">
    </a-entity>
      ${createTextElement('Du er her', {pos: '0 7 0'})}
    </a-entity>`
  tempDiv.innerHTML = aEnitityString

  return tempDiv.getElementsByTagName('a-entity')[0]
}
const createMarkers = (positions: Poi[], onClickHandler, rotation = '0 0 0') => positions.map(
  ({name, description, type, coordinates, id, openingHours}) => {
    const tempDiv = document.createElement('div')
    const {x, y} = convertGeoToPixel(
      coordinates.latitude,
      coordinates.longitude
    )
    const posString = `${x + displaceOriginX} ${0.4} ${y + displaceOriginZ}`
    const aEnitityString = `<a-entity dynamic-marker-scaling class="cantap ${MARKER_CLASS}" scale=".4 .4 .4" rotation="${rotation}" position="${posString}">
        <a-entity gltf-model="#${getPoiTypeMarker(
    type
  )}" scale="2 2 2" shadow class="cantap">
        </a-entity>
        ${createTextElement(name)}
      </a-entity>`
    tempDiv.innerHTML = aEnitityString

    const aEntity = tempDiv.getElementsByTagName('a-entity')[0]
    aEntity.addEventListener('click', ev => onClickHandler({name, description, coordinates, id, openingHours}))
    return aEntity
  }
)

function removeAllMarkers() {
  const markers = document.getElementsByClassName(MARKER_CLASS)
  while (markers[0]) {
    markers[0].parentNode.removeChild(markers[0])
  }
}
export {createLocationMarker, createMarkers, createTextElement, removeAllMarkers}