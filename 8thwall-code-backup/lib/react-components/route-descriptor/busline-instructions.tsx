// import React, { useState } from 'react'

declare var React
const { useState } = React

import { GreenBusIcon, NumberedCircleIcon, GreenWalkIcon } from './icons'
import './busline-instructions.css'
import Button from '../button'
import { TransportMode } from '../../api'
import { BuslineSummary } from './busline-options-list'

export type BuslineStep = {
  legIndex: number
  type: TransportMode.BUS | TransportMode.WALK
  description: string
  info?: string
}
export interface BuslineProps {
  summary: BuslineSummary
  steps: BuslineStep[]
  onInstructionClick: (stepIndex: number, legIndex: number) => void
  onGoBack: () => void
  chosenInstruction: BuslineStep |null
}

function BuslineIntructions(props: BuslineProps) {
  const { summary, steps = [], onInstructionClick, onGoBack, chosenInstruction } = props


  const onChooseInstruction = (index: number) => {
    onInstructionClick(index, steps[index].legIndex)
  }

  const resetChosenInstruction = () => {
    onGoBack()
  }

  return (
    <div
      className='busline-instructions-container'
      style={{
        backgroundPosition: !chosenInstruction ? '2.6rem 5rem' : '2.6rem',
      }}
    >
      {/* <DashedLine className='dashed-line' /> */}
      <ul>
        {!chosenInstruction ? (
          <>
            <li className='summary-li'>
              <NumberedCircleIcon number={summary.id} />
              <div>
                <h2>Buslinje {summary.id}</h2>
                <p>
                  {summary.leavesAt} <br />
                  {summary.timeInterval}
                </p>
                <div className='busline-instructions-actions'>
                  <Button text='Kjøp billett' />
                  <Button text='mer info' outlined />
                </div>
              </div>
            </li>
            {steps.map((step, index) => (
              <li key={index} onClick={() => onChooseInstruction(index)}>
                {step.type === TransportMode.WALK ? (
                  <GreenWalkIcon />
                ) : (
                  <GreenBusIcon />
                )}
                <h3>{step.description}</h3>
                <p className='busline-instructions-item-info'>{step.info}</p>
              </li>
            ))}
          </>
        ) : (
          <li
            className='chosen-instruction'
            key={chosenInstruction.description}
            onClick={() => resetChosenInstruction()}
          >
            {chosenInstruction.type === TransportMode.WALK ? (
              <GreenWalkIcon />
            ) : (
              <GreenBusIcon />
            )}
            <h3>{chosenInstruction.description}</h3>
            <p className='busline-instructions-item-info'>
              {chosenInstruction.info}
            </p>
          </li>
        )}
      </ul>
      {!chosenInstruction && <div className='bottom-overlay'></div>}
    </div>
  )
}

export default BuslineIntructions
