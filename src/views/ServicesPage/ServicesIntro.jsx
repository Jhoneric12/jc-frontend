import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function ServicesIntro() {
  return (
    <section className='bg-secondary-green p-10 w-full'>
         <div className='flex flex-col items-center justify-center w-full text-center'>
            {/* <div className=' md:w-[70%] lg:w-[60%]'>
                <h1 className='text-small font-semibold mb-2 text-primary-green'>Our Services</h1>
                <p className='text-xSmall font-light'>Lorem ipsum dolor sit amet. Est minima laudantium aut quae ratione non harum galisum qui voluptatem voluptatem?</p>
            </div> */}
            <SectionTitle
              title={'Our Services'}
              subTitle={'Working together to bring out the beauty within'}
            />
         </div>
    </section>
  )
}

export default ServicesIntro