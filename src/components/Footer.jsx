import React from 'react'
import JcLogo from '../assets/jcslogo.png'

function Footer() {
  return (
    <footer className='flex flex-col bg-semi-black text-puti font-light text-superSmall p-10'>
        
        <div>
            <div className='border-b border-[rgba(255,255,255,0.30)] py-6 leading-7'>
                <div className='mb-4'>
                    <img src={JcLogo} alt="JC LOGO" className='w-[3.5rem] h-[3.5rem]'/>
                </div>
                <p>
                    JC’s Skin Works Dermatology Clinic in Angono, Rizal provides affordable dermatologic and cosmetic services by certified dermatologist.
                </p>
            </div>
            <div className='border-b border-[rgba(255,255,255,0.30)] py-6 leading-7'>
                <div><p>We are welcoming you</p></div>
                <div><h1 className='text-xSmall font-semibold w-[60%]'>Want to visit our clinic?</h1></div>
                <div>
                    <p>Monday - Saturday</p>
                    <p>10am - 6pm</p>
                </div>
            </div>
            <div className='border-b border-[rgba(255,255,255,0.30)] py-6 leading-7'>
                <div className='mb-3'><p>Important Link</p></div>
                <div className='grid grid-cols-2 grid-rows-3'>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                    <a href="">Career</a>
                    <a href="">Support</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
            <div className='py-6 leading-7'>
                <div className='mb-3'>
                    <p>Say hello to us</p>
                    <p>jcmesias@yahoo.com</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>173-D, M.L. Quezon Avenue, Barangay San Isidro 1930 Angono, Rizal</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer