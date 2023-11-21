import { Coordinates } from './types'
import { convertGeoToPixel } from './utils'

export type MapPoint = { x: number; y: number }
const lineHeightPos = 0.4
const LINE_CLASS = 'wayfind-line'
function createAframeLine(
  index: number,
  startPoint: MapPoint,
  endPoint: MapPoint
) {
  const lineId = index === 0 ? 'line' : `line__${index}`
  return `${lineId}="start: ${startPoint.x} ${lineHeightPos} ${startPoint.y}; end: ${endPoint.x} ${lineHeightPos} ${endPoint.y}; color: yellow; opacity: 0.5"`
}

/**
 * 
 * @param routeCoordinates Coordinates to make lines between
 * @returns a-entity element with line components
 * @example <a-entity line="start: 0 1 0; end: 2 0 -5; color: red"
          line__2="start: -2 4 5; end: 0 4 -3; color: green"></a-entity>
 */

function drawDashedLines(routeCoordinates: Coordinates[]) {
  const tempDiv = document.createElement('div')
  const lines = []
  let startPoint = convertGeoToPixel(
    routeCoordinates[0].latitude,
    routeCoordinates[0].longitude
  )
  for (let i = 1; i < routeCoordinates.length; i++) {
    const coords = routeCoordinates[i]
    const endPoint = convertGeoToPixel(coords.latitude, coords.longitude)
    const aframeLine = createAframeLine(i - 1, startPoint, endPoint)
    lines.push(aframeLine)
    startPoint = endPoint
  }
  tempDiv.innerHTML = `<a-entity class="${LINE_CLASS}" ${lines.join(
    ' '
  )} ></a-entity>`
  const aEntity = tempDiv.getElementsByTagName('a-entity')[0]
  return aEntity
}

function removeAllLines() {
  const lines = document.getElementsByClassName(LINE_CLASS)
  while (lines[0]) {
    lines[0].parentNode.removeChild(lines[0])
  }
}

export { drawDashedLines, removeAllLines }
