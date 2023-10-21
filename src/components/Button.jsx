import React from 'react'

function Button( {btnText, bgColor, borderColor, borderStyle, borderWeight, fontColor, width, borderRound, handleClick} ) {
  return (
    <button className={`${borderColor} ${borderStyle} ${borderWeight} font-regular ${bgColor} ${fontColor} text-xxSmall py-2 px-4 md:px-4 md:py-2 lg:px-12 lg:py-3 ${width} hover:opacity-90 ${borderRound}`} onClick={handleClick}>
        {btnText}
    </button>
  )
}

export default Button