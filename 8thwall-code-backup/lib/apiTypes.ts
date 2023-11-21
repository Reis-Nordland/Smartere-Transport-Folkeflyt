export interface Directions {
  startTime: Date
  duration: number
  walkDistance: number
  legs: Leg[]
}

export interface Leg {
  transportMode: string
  duration: number
  distance: number
  startTime: string
  line: null
  lineDirection: null
  numStops: number
  fromPlaceName: string
  toPlaceName: string
  polyLine: PolyLine
}

export interface PolyLine {
  length: number
  code: string
}
