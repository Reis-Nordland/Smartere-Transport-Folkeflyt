import { Directions } from './apiTypes'
import { Coordinates, PoiType } from './types'

declare let fetch: any
export interface TransportTimePayload {
  startPos: Coordinates
  endPos: Coordinates
  transportMode: TransportMode
}

export enum TransportMode{
  WALK = 'walk',
  BUS = 'publictransport',
  BIKE = 'bike'
}

function requestWithKey(url: string) {
  return fetch(url, {
    headers: {
      'Ocp-Apim-Subscription-Key': '695a3b7a16f94a148a592d11406cc39b',
    },
  })
}
function fetchAllPois() {
  return requestWithKey(
    'https://folkeflyt.azure-api.net/folkeflytpoi/api/poi'
  ).then((response) => response.json())
}

function fetchPoisWithType(poiType: PoiType) {
  return requestWithKey(
    `https://folkeflyt.azure-api.net/folkeflytpoi/api/poi?type=${poiType}`
  ).then((response) => response.json())
}

function fetchTransportTimes(payload: TransportTimePayload): Promise<Directions[]> {
  return requestWithKey(
    `https://folkeflyt.azure-api.net/enturreiseplanlegger/Directions?toLat=${payload.endPos.latitude}&toLon=${payload.endPos.longitude}&fromLon=${payload.startPos.longitude}&fromLat=${payload.startPos.latitude}&transportType=${payload.transportMode}`
  ).then((response) => response.json())
}

export { fetchAllPois, fetchPoisWithType, fetchTransportTimes }
