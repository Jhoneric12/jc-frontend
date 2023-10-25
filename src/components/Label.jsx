import React from 'react'

function Label({inputLabel}) {
  return (
    <label htmlFor="" className='font-semibold text-font-color text-xxSmall md:text-xSmall'>{inputLabel}</label>
  )
}

export default Label