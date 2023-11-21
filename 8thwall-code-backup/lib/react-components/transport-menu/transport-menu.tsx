// import React, { useState } from 'react'

declare var React

import './transport-menu.css'
import { backIcon, bikeIcon, busIcon, walkIcon } from './icons'
import { TransportMode } from '../../api'

interface Props {
  onTransportModeSelected: (transportType: TransportMode) => void
  selectedTransportMode: TransportMode
  transportTimes: { [key in TransportMode]: string }
  onBackPressed: () => void
}

function TransportMenu({
  onTransportModeSelected,
  transportTimes,
  selectedTransportMode,
  onBackPressed,
}: Props) {
  const handleTransportModeClick = (transportType: TransportMode) => {
    if (selectedTransportMode === transportType) {
      return
    }
    onTransportModeSelected(transportType)
  }

  const renderTransportOption = (
    activeTransportMode: TransportMode,
    transportMode: TransportMode,
    icon: any
  ) => (
    <li>
      <button
        onClick={() => handleTransportModeClick(transportMode)}
        className={activeTransportMode === transportMode ? 'active' : ''}
      >
        {icon()}
        <span className='button-text'>
          {!!transportTimes[transportMode]
            ? `${transportTimes[transportMode]} min`
            : '...'}
        </span>
      </button>
    </li>
  )

  return (
    <div className='transport-menu-wrapper'>
      <ul className='transport-menu'>
        {renderTransportOption(
          selectedTransportMode,
          TransportMode.WALK,
          walkIcon
        )}
        {renderTransportOption(selectedTransportMode, TransportMode.BUS, () =>
          busIcon({ active: selectedTransportMode === TransportMode.BUS })
        )}
        {renderTransportOption(
          selectedTransportMode,
          TransportMode.BIKE,
          bikeIcon
        )}
      </ul>
    </div>
  )
}

export { TransportMenu }
