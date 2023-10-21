import React from 'react'

function FormTitle({formTitle, fontSize, fontWeight}) {
  return (
    <h1 className={`text-semi-black ${fontWeight} ${fontSize} `}>{formTitle}</h1>
  )
}

export default FormTitle