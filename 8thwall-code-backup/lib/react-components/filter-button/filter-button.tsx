// import React, { CSSProperties } from 'react'
import CategoryButton, { FilteCategory, IconType } from './category-button'
import { PoiType } from '../../types'
import { filterIcon } from './icons'

declare var React: any
declare type CSSProperties = any

const { useState } = React
const filterCategories: FilteCategory[] = [
  {
    text: "Lokale produkter",
    type: PoiType.LOCAL_PRODUCTS,
    icon: IconType.LOCAL_PRODUCTS,
  },
  {
    text: "Aktiviteter",
    type: PoiType.ACTIVITIES,
    icon: IconType.DEFAULT
  },
  {
    text: 'Natur',
    type: PoiType.NATURE,
    icon: IconType.NATURE
  },
  {
    text: 'Mat',
    type: PoiType.FOOD,
    icon: IconType.FOOD
  },
  {
    text: 'Kultur',
    type: PoiType.CULTURE,
    icon: IconType.CULTURE
  },
  // {
  //   text: 'Arrangementer',
  //   type: PoiType.,
  //   icon: IconType.CULTURE
  // },
]

interface Props {
  onFilter: (poiType: PoiType) => void
}

const flexColStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
}

const menuWrapperStyle: CSSProperties = {
  position: 'fixed',
  // Force it to be ontop of 3d map
  zIndex: 10,
  bottom: '1rem',
  left: '1rem',
  fontSize: '1.25rem',
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
  fontSize: '1em',
  fontFamily: 'Helvetica-Bold, Helvetica',
  borderRadius: '1.2em',
  borderStyle: 'solid .5rem black',
}

const svgIconStyle: CSSProperties = {
  height: '100%',
}

const closeButtonStyle = {
  margin: categoryButtonStyle.margin,
  width: categoryButtonStyle.height,
  height: categoryButtonStyle.height,
  padding: categoryButtonStyle.padding,
  background: "#d8d8d8",
  border: "none",
  borderRadius: categoryButtonStyle.height,
}

const buttonTextStyle = {
  margin: '.5rem',
}

function FilterButton(props: Props) {
  const { onFilter } = props
  const [open, setOpen] = useState(false)

  return (
    <div style={menuWrapperStyle}>
      {open ? (
        <div style={flexColStyle}>
          <button style={closeButtonStyle} onClick={() => setOpen(false)}>
            <svg viewBox='0 0 24 24' style={svgIconStyle}>
              <path
                d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z'
                fill='#979797'
              ></path>
            </svg>
          </button>
          {filterCategories.map(({ text, type, icon }) => (
           <CategoryButton text={text}  type={type} icon={icon} onClick={() => {setOpen(false); onFilter(type)}} />
          ))}
        </div>
      ) : (
        <button onClick={() => setOpen(true)} style={categoryButtonStyle}>
          <svg
            viewBox='0 0 104 104'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={svgIconStyle}
          >
           {filterIcon()}
          </svg>
          <span style={buttonTextStyle}>Filter</span>
        </button>
      )}
    </div>
  )
}

export { FilterButton }
