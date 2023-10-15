import React from 'react'
import Navbar from '../components/Navbar'
import ServicesIntro from '../views/ServicesPage/ServicesIntro'
import ServicesOffer from '../views/ServicesPage/ServicesOffer'

function Services() {
  return (
    <main className='services-page'>
      <Navbar/>
      <ServicesIntro/>
      <ServicesOffer/>
    </main>
  )
}

export default Services