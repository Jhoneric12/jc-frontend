import React from 'react'

function Label({inputLabel}) {
  return (
    <label htmlFor="" className='font-semibold text-font-color text-xxSmall md:text-xxSmall'>{inputLabel}</label>
  )
}

export default Label