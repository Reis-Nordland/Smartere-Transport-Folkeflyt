import React, { useState } from 'react'
import './transport-menu.css'
import { bikeIcon, busIcon, walkIcon } from './icons'

interface Props {
  onTransportSelected: (transportType: Transport) => void
  transportTimes: { [key in Transport]: string }
}

export enum Transport {
  BUS,
  WALK,
  BIKE,
}
function TransportMenu(props: Props) {
  const { onTransportSelected, transportTimes } = props

  const [selectedTransport, setSelectedTransport] = useState<Transport>(
    Transport.BUS
  )
  const handleTransportClick = (transportType: Transport) => {
    if (selectedTransport === transportType) {
      return
    }
    onTransportSelected(transportType)
    setSelectedTransport(transportType)
  }
  return (
    <div className="transport-menu-wrapper">
      <ul className='transport-menu'>
        <li>
          <button
            onClick={() => handleTransportClick(Transport.WALK)}
            className={selectedTransport === Transport.WALK ? 'active' : ''}
          >
            {walkIcon()}
            <span className='button-text'>{transportTimes[Transport.WALK]}</span>
          </button>
        </li>
        <li>
          <button
            className={selectedTransport === Transport.BUS ? 'active' : ''}
            onClick={() => handleTransportClick(Transport.BUS)}
          >
            {busIcon({ active: selectedTransport === Transport.BUS })}
            <span className='button-text'>{transportTimes[Transport.BUS]}</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTransportClick(Transport.BIKE)}
            className={selectedTransport === Transport.BIKE ? 'active' : ''}
          >
            {bikeIcon()}
            <span className='button-text'>{transportTimes[Transport.BIKE]}</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export { TransportMenu }
