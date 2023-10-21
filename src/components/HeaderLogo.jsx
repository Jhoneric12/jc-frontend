import React from 'react'
import jclogo from '../assets/HomepageImg/jcslogo.png'

function HeaderLogo() {
  return (
    <img src={jclogo} alt="jc's logo" className='w-[5rem] h-[3.5rem] lg:w-[30rem] lg:h-[23rem]'/>
  )
}

export default HeaderLogo