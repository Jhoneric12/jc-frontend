import React from 'react'

function Input({inputType, inputName, placeHolder}) {
  return (
    <div>
      <input type={inputType} name={inputName} placeholder={placeHolder} 
      className=' text-border-color border-border-color border-2 px-4 py-2 rounded-[4px] w-full text-xSmall focus:border-border-color focus:outline-none text-border-border-color'/>
    </div>
  )
}

export default Input