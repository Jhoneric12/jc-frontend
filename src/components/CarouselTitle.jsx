import React from 'react'

function CarouselTitle( {title, subTitle} ) {
  return (
    <div className='flex flex-col mb-5'>
        <h1 className='text-primary-green text-medium font-bold text-center md:text-medium lg:text-large'>{title}</h1>
        <p className='font-light text-superSmall text-center md:text-xxSmall lg:text-xxSmall '>{subTitle}</p>
    </div>
  )
}

export default CarouselTitle