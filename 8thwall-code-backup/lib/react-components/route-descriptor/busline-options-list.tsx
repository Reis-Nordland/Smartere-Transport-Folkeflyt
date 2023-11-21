// import React from 'react'
import { BusIcon, NumberedCircleIcon } from './icons'
import './busline-options-list.css'

declare var React

export type BuslineSummary = {
  id: number
  leavesAt: string
  timeInterval: string
}
interface Props {
  onSelect: (id: number) => void
  buslineOptions: BuslineSummary[]
}

function BusLineOptionsList(props: Props) {
  const { onSelect, buslineOptions = [] } = props

  return (
    <ul className='busline-options-list'>
      <li>
        <BusIcon />
        <h3>Neste buss</h3>
      </li>
      {buslineOptions.map((option, index) => (
        <li key={option.id} onClick={() => onSelect(option.id)}>
          {index === 0 ? (
            <NumberedCircleIcon number={option.id} />
          ) : (
            <NumberedCircleIcon
              number={option.id}
              fill='black'
              stroke='white'
            />
          )}
          <p>
            {option.leavesAt} <br />
            {option.timeInterval}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default BusLineOptionsList
