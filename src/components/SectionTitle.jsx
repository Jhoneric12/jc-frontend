import React from 'react'
import LineTitle from '../assets/TItleLine.png'

function SectionTitle( { title, subTitle } ) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-primary-green font-bold text-medium md:text-medium lg:text-large'>{title}</h1>
        <p className='font-light text-superSmall md:text-xSmall lg:text-xxSmall'>{subTitle}</p>
        <img src={LineTitle} alt="" className='mb-2'/>
    </div>
  )
}

export default SectionTitle