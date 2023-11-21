import { BuslineOption } from './react-components/route-descriptor/route-descriptor'
import { TransportMode } from './api'
import { Directions, Leg } from './apiTypes'
import { BuslineStep } from './react-components/route-descriptor/busline-instructions'
function createBusLineOptions(busRoutes: Directions[]): BuslineOption[] {
  return busRoutes
    .filter((busRoute) =>
      busRoute.legs.some((leg) => leg.transportMode === 'bus')
    )
    .map(createBusLineOption)
}

function createBusLineOption(busRoute: Directions): BuslineOption {
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
  const steps: BuslineStep[] = []
  let legIndex = 0
  legs.forEach((leg) => {
    const type =
      leg.transportMode === 'bus' ? TransportMode.BUS : TransportMode.WALK
    if (type === TransportMode.WALK) {
      if (previousLeg?.transportMode === 'bus') {
        steps.push({
          type: TransportMode.BUS,
          legIndex: legIndex - 1,
          description: `Stig av på ${previousLeg.toPlaceName} `,
          info: `${previousLeg.numStops} stopp`,
        })
      }
      steps.push({
        legIndex,
        type: TransportMode.WALK,
        description: `Gå til ${leg.toPlaceName}`,
        info: `${Math.ceil(leg.duration / 60)} min`,
      })
    } else {
      steps.push({
        type: TransportMode.BUS,
        legIndex,
        description: `Ta buss ${leg.line} mot ${leg.lineDirection}`,
        info: `${Math.ceil(leg.duration / 60)} min`,
      })
    }
    legIndex++
    previousLeg = leg
  })
  return steps
}
export { createBusLineOptions }
