// import React, { CSSProperties } from 'react'
import { PoiType } from '../../types'
import { cultureIcon, defaultIcon, foodIcon, localProductsIcon, natureIcon } from './icons'

declare var React: any
declare type CSSProperties = any

const buttonTextStyle = {
  margin: '.5rem',
}

const categoryButtonStyle: CSSProperties = {
  margin: '.4rem',
  display: 'inline-flex',
  lineHeight: '1.1rem',
  alignItems: 'center',
  padding: '.2em .4em .2em .2em',
  height: '1.75em',
  background: "#c5dbdb",
  border: "none",
  width: 'auto',
  fontFamily: 'Helvetica-Bold, Helvetica',
  borderRadius: '1.2em',
  borderStyle: 'solid .5rem black',
  fontSize: '1em'
}

const svgIconStyle: CSSProperties = {
  height: '100%',
}

export type FilteCategory = { text: string; type: PoiType; icon: IconType }

export type CategoryButtonProps = { onClick: () => void } & FilteCategory
export enum IconType {
  CULTURE,
  FOOD,
  NATURE,
  LOCAL_PRODUCTS,
  DEFAULT
}

function loadIcon(icon: IconType) {
  switch (icon) {
    case IconType.CULTURE:
      return cultureIcon()
    case IconType.FOOD:
      return foodIcon()
    case IconType.LOCAL_PRODUCTS:
      return localProductsIcon()
    case IconType.NATURE:
      return natureIcon()
    default:
      return defaultIcon()
  }
}

function CategoryButton(props: CategoryButtonProps) {
  const { text, type, icon, onClick } = props

  return (
    <button key={type} style={categoryButtonStyle} onClick={onClick}>
      <svg viewBox='0 0 104 104' style={svgIconStyle}>
        {loadIcon(icon)}
      </svg>
      <span style={buttonTextStyle}>{text}</span>
    </button>
  )
}

export default CategoryButton
