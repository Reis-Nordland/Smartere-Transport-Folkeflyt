import { drawDashedLines, removeAllLines } from '../../lib/aframe-lines'
import { TransportMode } from '../../lib/api'
import { Leg, PolyLine } from '../../lib/apiTypes'
import { Coordinates } from '../../lib/types'
import { decode } from '../../lib/utils'

const drawNewMapLines = (coordinates: Coordinates[]) => {
  const map = document.getElementById('place-in-me')
  const aLineEntity = drawDashedLines(coordinates)
  removeAllLines()
  map.appendChild(aLineEntity)
}

const drawTransportOption = async (
  transportTimes: { [key in TransportMode]: string }
) => {
  const routeLegs = transportTimes[0].legs
  const coordinatesInRoute = []
  for (let i = 0; i < routeLegs.length; i++) {
    const pointsPolyline = routeLegs[i].polyLine.code
    const decodedCoordinates = decode(pointsPolyline)
    coordinatesInRoute.push(...decodedCoordinates)
  }
  drawNewMapLines(coordinatesInRoute)
}

const drawWholeBusRoute = (busRouteLegs: Leg[]) => {
  const coordinatesInRoute = []
  for (let i = 0; i < busRouteLegs.length; i++) {
    const pointsPolyline = busRouteLegs[i].polyLine.code
    const decodedCoordinates = decode(pointsPolyline)
    coordinatesInRoute.push(...decodedCoordinates)
  }
  drawNewMapLines(coordinatesInRoute)
}
const drawBusRoutePart = (polyLine: PolyLine) => {
  const polylineCoords = decode(polyLine.code)
  drawNewMapLines(polylineCoords)
}

export { drawWholeBusRoute, drawBusRoutePart, drawTransportOption }
