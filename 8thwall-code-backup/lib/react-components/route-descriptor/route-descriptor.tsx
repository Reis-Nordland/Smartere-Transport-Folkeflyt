// import React, { useState } from 'react'
import './route-descriptor.css'
import { DrawerIcon } from './icons'
import BusLineOptionsList, { BuslineSummary } from './busline-options-list'
import BuslineIntructions, {
  BuslineProps,
  BuslineStep,
} from './busline-instructions'

import { backIcon } from '../transport-menu/icons'

declare var React
const { useState } = React

export type BuslineOption = {
  summary: BuslineSummary
  steps: BuslineStep[]
}

interface RouteDescriptorProps {
  busLineOptions: BuslineOption[]
  onViewRoutePart: (routeIndex: number, routePart: number) => void
  onCancelViewRoutePart: (buslineIndex: number) => void
  onBuslineSelected: (buslineIndex: number) => void
  onExitBuslineInstructions: () => void
}

function RouteDescriptor(props: RouteDescriptorProps) {
  const {
    busLineOptions,
    onViewRoutePart,
    onBuslineSelected,
    onCancelViewRoutePart,
    onExitBuslineInstructions,
  } = props
  const [collapsed, setCollapsed] = useState(false)
  const [selectedBusLineIndex, setSelectedBusLineIndex] = useState(-1)
  const [chosenInstruction, setChosenInstruction] = useState(null) as [
    BuslineStep | null,
    any
  ]
  const [busLineInfo, setbusLineInfo] = useState(null) as [
    BuslineProps | null,
    any
  ]
  const onSelectBusline = (buslineId: number) => {
    const buslineIndex = busLineOptions.findIndex(
      (option) => option.summary.id === buslineId
    )
    setSelectedBusLineIndex(buslineIndex)
    setbusLineInfo({
      ...busLineOptions.find((option) => option.summary.id === buslineId),
    })
    onBuslineSelected(buslineIndex)
  }

  const onInstructionClick = (stepIndex: number, legIndex: number) => {
    if (!!chosenInstruction) {
      setChosenInstruction(null)
      onCancelViewRoutePart(selectedBusLineIndex)
      return
    }
    setChosenInstruction(busLineInfo?.steps[stepIndex])
    onViewRoutePart(selectedBusLineIndex, legIndex)
  }

  const exitViewRoutePart = () => {
    setChosenInstruction(null)
    onCancelViewRoutePart(selectedBusLineIndex)
  }

  const onBackPressed = () => {
    if (!!chosenInstruction) {
      exitViewRoutePart()
      return
    }
    setbusLineInfo(null)
    setSelectedBusLineIndex(-1)
    onExitBuslineInstructions()
  }

  return (
    <>
      {selectedBusLineIndex !== -1 && (
        <button
          className='route-descriptor-back-button'
          onClick={onBackPressed}
        >
          <svg
            width='40'
            height='41'
            viewBox='0 0 40 41'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='19.9029' cy='20.4078' r='19.8248' fill='#EFEFEF' />
            <path
              d='M24.8584 10.4951L14.0449 21.3086L24.8584 32.1222'
              stroke='black'
              stroke-width='3.15394'
            />
          </svg>
        </button>
      )}
      <div className='route-descriptor-wrapper'>
        <div className='route-descriptor'>
          <button
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          >
            <DrawerIcon />
          </button>
          {!collapsed &&
            (!busLineInfo ? (
              <BusLineOptionsList
                buslineOptions={busLineOptions.map(({ summary }) => summary)}
                onSelect={onSelectBusline}
              />
            ) : (
              <BuslineIntructions
                {...busLineInfo}
                onGoBack={exitViewRoutePart}
                chosenInstruction={chosenInstruction}
                onInstructionClick={onInstructionClick}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export { RouteDescriptor }
