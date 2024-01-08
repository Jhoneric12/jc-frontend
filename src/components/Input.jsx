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
      className= {`mt-2 font-regular text-font-color border-border-color border px-4 py-2 rounded-[8px] w-full text-xxSmall md:text-xSmall hover:border-primary-green focus:border-primary-green focus:bg-white focus:ring focus:ring-primary-green focus:ring-opacity-50 ${center}`}/>
    </div>
  )
}

export default Input