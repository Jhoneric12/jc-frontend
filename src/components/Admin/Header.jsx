import React from 'react'
import jclogo from '../../assets/HomepageImg/jcslogo.png'
import DateToday from './DateToday'

function Header() {
  return (
    <section className='shadow-md w-full p-4 flex justify-between items-center sticky mb-1'>
      <div>
        <img src={jclogo} alt="jclogo" className='w-[4rem] h-[2.5rem]' />
      </div>
      <div>
        <DateToday/>
      </div>
    </section>
  )
}

export default Header