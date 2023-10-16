import React from 'react'
import Navbar from '../components/Navbar'
import ServicesIntro from '../views/ServicesPage/ServicesIntro'
import ServicesOffer from '../views/ServicesPage/ServicesOffer'
import Footer from '.././components/Footer'

function Services() {
  return (
    <main className='services-page'>
      <Navbar/>
      <ServicesIntro/>
      <ServicesOffer/>
      <Footer/>
    </main>
  )
}

export default Services