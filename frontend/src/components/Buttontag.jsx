import React from 'react'
import "../styles/button.css"

export const Buttontag = ({value,onclk}) => {
  return (
   <>
   <button className='button' onClick={onclk}>{value}</button>
   </>
  )
}
