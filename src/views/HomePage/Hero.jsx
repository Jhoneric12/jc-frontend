import React from 'react'
import {FaRegCalendarDays} from 'react-icons/fa6'
import {ImAidKit} from 'react-icons/im'
import Button from '../../components/Button'
import Doctor from '../../assets/doctor.png'

function Hero() {

  return (
    <section className='hero w-full h-screen px-7 flex items-center justify-center pb-16'>
        <div className="desc-container flex justify-center items-center">
            <div className="hero-title lg:w-[80%]">
                <h1 className='font-extrabold text-large text-center mb-6 md:text-xLarge lg:text-left'>Working together to bring out the beauty within.</h1>
                <div>
                    <div className="hero-first mb-10">
                        <div className='hero-description flex justify-between px-2 md:justify-around lg:w-[75%] lg:px-0 lg:justify-between'>
                            <div className="first-desc flex">
                                <div className="icon">
                                    <FaRegCalendarDays className='text-primary-green mr-2  w-[0.5rem] h-[0.5rem] md:w-[1rem] md:h-[1rem]'/>
                                </div>
                                <div className="info">
                                    <div className="info-first">
                                        <div className="info-title">
                                            <h1 className='font-regular text-[0.5rem] md:text-[0.875rem]'>Easy Online Booking Here</h1>
                                        </div>
                                        <div className="info-sub">
                                            <p className='text-[0.375rem] md:text-[0.75rem] font-light'>Make appointment with your doctor anywhere.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="second-desc flex">
                                <div className="icon">
                                    <ImAidKit className='text-primary-green mr-2 w-[0.5rem] h-[0.5rem] md:w-[1rem] md:h-[1rem]'/>
                                </div>
                                <div className="info">
                                    <div className="info-first">
                                        <div className="info-title">
                                            <h1 className='font-regular text-[0.5rem] md:text-[0.875rem]'>Meet Certified Dermatologist</h1>
                                        </div>
                                        <div className="info-sub">
                                            <p className='text-[0.375rem] md:text-[0.75rem] font-light'>We always provide what's best for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button flex justify-center w-full lg:justify-start lg:w-[50%] ">
                     <Button 
                        btnText={'Make Appointment'}
                        bgColor={'bg-primary-green'}
                        fontColor={'text-puti'}
                        width={'w-3/4 md:w-[35%] lg:w-3/4'}
                    />
                </div>
            </div>
        </div>
        <div className="hidden mt-8 lg:block">
            <img src={Doctor} alt="Doctor" />
        </div>
    </section>
  )
}

export default Hero