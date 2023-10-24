import React from 'react'

function FormTitle({formTitle, fontSize, fontWeight}) {
  return (
    <h1 className={`text-font-color ${fontWeight} ${fontSize} `}>{formTitle}</h1>
  )
}

export default FormTitle