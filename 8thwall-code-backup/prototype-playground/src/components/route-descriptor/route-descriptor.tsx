import React, { useState } from 'react'
import './route-descriptor.css'
import { DrawerIcon } from './icons'
import BusLineOptionsList, { BuslineSummary } from './busline-options-list'
import BuslineIntructions, { BuslineProps } from './busline-instructions'

export type BuslineOptions = {
  summary: BuslineSummary
  steps: Pick<BuslineProps, 'steps'>
}[]
interface RouteDescriptorProps {
  busLineOptions: BuslineOptions
  onViewRoutePart: (routePart: number) => void
}

function RouteDescriptor(props: RouteDescriptorProps) {
  const { busLineOptions, onViewRoutePart } = props
  const [busLineInfo, setbusLineInfo] = useState(null) as [
    BuslineProps | null,
    any
  ]

  return (
    <div className='route-descriptor-wrapper'>
      <div className='route-descriptor'>
        <DrawerIcon />
        {!busLineInfo ? (
          <BusLineOptionsList
            buslineOptions={busLineOptions.map(({ summary }) => summary)}
            onSelect={(id: number) =>
              setbusLineInfo({
                ...busLineOptions.find((option) => option.summary.id === id),
              })
            }
          />
        ) : (
          <BuslineIntructions
            {...busLineInfo}
            onInstructionClick={(id) => onViewRoutePart(id)}
          />
        )}
      </div>
    </div>
  )
}

export { RouteDescriptor }
