import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../views/HomePage/Hero';
import RegisterNow from '../views/HomePage/RegisterNow';
import FeaturedProducts from '../views/HomePage/FeaturedProducts';
import Services from '../views/HomePage/Services';
import Dermatologist from '../views/HomePage/Dermatologist';
import AboutUs from '../views/HomePage/AboutUs';
import Testimonials from '../views/HomePage/Testimonials';
import Footer from '../components/Footer';
import '../styles/Homepage.scss';

function Homepage() {
  return (
    <main className='homepage'>
      <Navbar />
      <Hero />
      <FeaturedProducts/>
      <RegisterNow />
      <Services/>
      <Dermatologist/>
      <AboutUs/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}

export default Homepage;
