import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'

function AboutUs() {
  return (
    <section className='w-full bg-secondary-green flex flex-col items-center p-10'>
        <div className="title">
            <SectionTitle
                title={'About Us'}
                subTitle={'About JC Skin Works'}
            />
        </div>
        <div className='flex justify-center items-center flex-col lg:flex lg:justify-around lg:items-center lg:flex-row lg:lg:px-10 lg:gap-10'>
            <div className="location py-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0689162880844!2d121.14905971088925!3d14.538050578546015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c78a6983a55d%3A0x18f52bb9275add02!2sJC%E2%80%99s%20Skinworks%20Derma%20Clinic!5e0!3m2!1sen!2sph!4v1696985681399!5m2!1sen!2sph" 
                width=""
                height=""
                allowFullScreen=""
                loading="lazy"
                className=' w-[20rem] h-[13rem] border border-solid border-black md:w-[35rem] md:h-[25rem] lg:w-[33rem] lg:h-[20rem]'
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="clinic-description text-center   font-light text-xSmall flex flex-col gap-8 w-full items-center md:w-[70%] lg:w-[50%] lg:text-left lg:items-start">
                <p>
                    Diseases of the skin acquire its actuality with each passing day. JC’s Skin Works Dermatology is a centre of excellence in the diagnosis and treatment of skin conditions.
                </p>
                <p>
                    JC’s Skin Works is located at 173-D, M.L. Quezon Avenue, Barangay San Isidro 1930 Angono, Philippines.
                </p>
                <Button
                    btnText={'Make Appointment'}
                    bgColor={'bg-primary-green'}
                    fontColor={'text-puti'}
                    width={'w-[70%] md:w-[50%] lg:w-[40%]'}
                />
            </div>
        </div>
    </section>
  )
}

export default AboutUs