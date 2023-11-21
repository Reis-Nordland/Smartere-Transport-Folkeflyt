import React, { useState } from 'react'
import {
  BusIcon,
  DashedLine,
  GreenBusIcon,
  NumberedCircleIcon,
  WalkIcon,
} from './icons'
import './busline-instructions.css'
import Button from '../Button'
import { TransportMode } from '../../api'
import { BuslineSummary } from './busline-options-list'

type BuslineStep = {
  type: TransportMode.BUS | TransportMode.WALK
  description: string
  info?: string
}
export interface BuslineProps {
  summary: BuslineSummary
  steps: BuslineStep[]
  onInstructionClick: (stepIndex: number) => void
}

function BuslineIntructions(props: BuslineProps) {
  const { summary, steps = [], onInstructionClick } = props
  const [chosenInstruction, setChosenInstruction] = useState(null) as [
    BuslineStep | null,
    any
  ]

  const onChooseInstruction = (index: number) => {
    setChosenInstruction(steps[index])
    onInstructionClick(index)
  }

  const resetChosenInstruction = () => setChosenInstruction(null)

  return (
    <div
      className='busline-instructions-container'
      style={{
        marginTop: '-1rem',
        paddingTop: '1rem',
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
              <li
                key={step.description}
                onClick={() => onChooseInstruction(index)}
              >
                {step.type === TransportMode.WALK ? (
                  <WalkIcon />
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
              <WalkIcon />
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
