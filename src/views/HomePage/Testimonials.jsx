import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import TestimonialsData from '../../dummyData/TestimonialsData'
import { Carousel } from '@material-tailwind/react'

function Testimonials() {

  const [isMobile, setMobile] = useState(false);

  // Show carousel if the vieport is mobile

  useEffect(() => {
    if(window.innerWidth < 767) {
      setMobile(true);
    }
    else {
      setMobile(false);
    }

  },[])

  return (
    <section className='bg-puti p-10  '>
        <div className="title mb-10">
            <SectionTitle
                title={'Testimonials'}
                subTitle={'What our clients say about us'}
            />
        </div>
        <div className="testimonials">
          {
            isMobile

            ? 

            <Carousel
              autoplay = {true}
              loop = {true}
              className='relative z-40'
            >
              {
                TestimonialsData.map((feedback) => (
                  <div className='flex flex-col items-center justify-center h-full  p-7 bg-[#FFFFFF] rounded-[8px]' key={feedback.id}>
                    <img src={feedback.image} alt="Image" className='mb-4 w-[5rem] h-[5rem]'/>
                    <p className='italic text-xSmall text-center mb-8'>{feedback.message}</p>
                    <h1 className='text-xxSmall text-primary-green font-bold'>{feedback.name}</h1>
                    <p className='text-superSmall'>{feedback.address}</p>
                  </div>
                ))
              }
            </Carousel>

            :
            
            <div className='flex gap-6 flex-wrap justify-center lg:justify-around lg:flex-nowrap'>
              {
                TestimonialsData.map((feedback) => (
                  <div className='drop-shadow-lg md:bg-[#ffffff] md:p-7 w-[47%] md:rounded-[8px] lg:w-[30%] lg:p-10' key={feedback.id}>
                    <div className='md:flex md:gap-6'>
                      <img src={feedback.image} alt="Image" className='w-[3.5rem] h-[3.5rem]'/>
                      <p className='md:text-xSmall md:italic'>{feedback.message}</p>
                    </div>
                    <div className='text-center mt-8'>
                      <h1 className='text-xxSmall text-primary-green font-bold'>{feedback.name}</h1>
                      <p className='text-superSmall'>{feedback.address}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          }
        </div>
    </section>
  )
}

export default Testimonials