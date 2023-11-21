import React from 'react'
import './Button.css'

interface Props {
  text: string
  outlined?: boolean
}

function Button(props: Props) {
  const { text, outlined = false } = props

  return (
    <button
      className={`button${outlined ? ' button-outlined' : ' button-regular'}`}
    >
      {text}
    </button>
  )
}

export default Button
