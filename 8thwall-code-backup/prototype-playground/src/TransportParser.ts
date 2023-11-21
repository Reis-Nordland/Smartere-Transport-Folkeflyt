import { TransportMode } from './api'
import { BuslineStep } from './../../lib/react-components/route-descriptor/busline-instructions'
import { BuslineProps } from './components/route-descriptor/busline-instructions'
import { BuslineOptions } from './../../lib/react-components/route-descriptor/route-descriptor'
import { Directions, Leg } from './../../lib/apiTypes'
function createBusLineOptions(busRoutes: Directions[]): BuslineOptions[] {
  return busRoutes
    .filter((busRoute) =>
      busRoute.legs.some((leg) => leg.transportMode === 'bus')
    )
    .map(createBusLineOption)
}

function createBusLineOption(busRoute: Directions): BuslineOptions {
  const firstBusInRoute = busRoute.legs.find(
    (leg) => leg.transportMode === 'bus' && !!leg
  )
  let timeInterval = ''
  let leavesAt = ''
  if (!!firstBusInRoute?.startTime) {
    const startDate = new Date(firstBusInRoute?.startTime)
    timeInterval = `${startDate.getHours()}:${startDate.getMinutes()} - ${startDate.getHours()}:${
      startDate.getMinutes() + Math.ceil(firstBusInRoute.duration / 60)
    }`
    leavesAt = `Går om ${Math.floor(
      Math.abs(startDate.getMinutes() - new Date().getMinutes())
    )} min og tar ${Math.ceil(firstBusInRoute.duration / 60)} min`
  }
  return {
    summary: {
      id: firstBusInRoute?.line,
      leavesAt,
      timeInterval,
    },
    steps: createSteps(busRoute.legs),
  }
}

function createSteps(legs: Leg[]): BuslineStep[] {
  let previousLeg: Leg | null = null
  return legs.flatMap((leg) => {
    const type =
      leg.transportMode === 'bus' ? TransportMode.BUS : TransportMode.WALK
    const steps: BuslineStep[] = []
    if (type === TransportMode.WALK) {
      if (previousLeg?.transportMode === 'bus') {
        steps.push({
          type: TransportMode.BUS,
          description: `Stig av på ${previousLeg.toPlaceName} `,
          info: `${previousLeg.numStops} stopp`,
        })
      }
      steps.push({
        type: TransportMode.WALK,
        description: `Gå til ${leg.toPlaceName}`,
        info: `${Math.ceil(leg.duration / 60)} min`,
      })
    } else {
      steps.push({
        type: TransportMode.BUS,
        description: `Ta buss ${leg.line} mot ${leg.lineDirection}`,
        info: `${Math.ceil(leg.duration / 60)} min`,
      })
    }
    previousLeg = leg
    return steps
  })
}
export { createBusLineOptions }
