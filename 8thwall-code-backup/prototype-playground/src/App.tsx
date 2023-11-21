import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FilterButton } from '../../lib/filter-button'
import {
  Transport,
  TransportMenu,
} from './components/transport-menu/transport-menu'

import { BuslineOptions, RouteDescriptor } from './components/route-descriptor'
import { TransportMode } from './api'
import { BuslineSummary } from './components/route-descriptor/busline-options-list'
import { getTestTransportTime } from './test-transport-times'
import { createBusLineOptions } from './TransportParser'

const testBusLines: BuslineOptions[] = [
  {
    summary: {
      id: 1,
      leavesAt: 'Går om 4 min og tar 13 min',
      timeInterval: '13:09 - 13:22',
    },
    steps: [
      {
        type: TransportMode.WALK,
        description: 'Gå til [holdeplass]',
        info: '4 min',
      },
      {
        type: TransportMode.BUS,
        description: 'Ta buss 1 eller 4 mot sentrum',
      },
      {
        type: TransportMode.BUS,
        description: 'Stig av på [holdeplass]',
        info: '3 stopp',
      },
      {
        type: TransportMode.WALK,
        description: 'Gå til Larsens',
        info: '3 min',
      },
    ],
  },
  {
    summary: {
      id: 4,
      leavesAt: 'Går om 7 min og tar 13 min',
      timeInterval: '13:14 - 13:27',
    },
    steps: [
      {
        type: TransportMode.WALK,
        description: 'Gå til [holdeplass]',
        info: '4 min',
      },
    ],
  },
]

function App() {
  const [BuslineOptions, setBuslineOptions] = useState(null) as [
    BuslineOptions | null,
    any
  ]
  useEffect(async () => {
    const busTransportTimes = await getTestTransportTime('publictransport')
    const busLineOptions = createBusLineOptions(busTransportTimes)
    setBuslineOptions(busLineOptions, [])
  }, [])

  return (
    <div className='App'>
      <main>
        <h2>Route Descriptor:</h2>
        {!!BuslineOptions && (
          <RouteDescriptor
            busLineOptions={BuslineOptions}
            onViewRoutePart={(id) => console.log('View: ', id)}
          />
        )}
        {/* <TransportMenu
          onTransportSelected={console.log}
          transportTimes={{
            [Transport.WALK]: '10 min',
            [Transport.BUS]: '5 min',
            [Transport.BIKE]: '6 min',
          }}
        /> */}
        {/* <FilterButton onFilter={(type) => console.log(type)}/> */}
      </main>
    </div>
  )
}

export default App
