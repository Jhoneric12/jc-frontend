import React from 'react'

function Input({inputType, inputName, placeHolder, handleInput, inputValue, center}) {

  return (
    <div>
      <input 
      type={inputType}
      name={inputName}
      placeholder={placeHolder} 
      onChange={handleInput} 
      value={inputValue}
      className= {`mt-1 font-regular text-font-color border-border-color border px-4 py-2 rounded-[8px] w-full text-xxSmall md:text-xSmall focus:border-primary-green focus:outline-none hover:border-primary-green focus:drop-shadow-md text-border-border-color ${center}`}/>
    </div>
  )
}

export default Input