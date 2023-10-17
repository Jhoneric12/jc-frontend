import React from 'react'
import ServicesOfferData from '../../dummyData/ServicesOfferData'
import Button from '../../components/Button'

function ServicesOffer() {
  return (
    <section className='flex justify-center py-10'>
      <div className='container p-6 gap-16 md:grid md:grid-cols-2 md:grid-rows-2 md:w-[90%] lg:grid-cols-3  '>
        {
          ServicesOfferData.map((services) => (
            <div key={services.id} className='bg-puti p-10 rounded-[8px] drop-shadow-lg flex flex-col'>
                <img src={services.serviceImg} alt="" className='image mb-5 w-full'/>
                <h1 className='text-xSmall font-semibold mb-2'>{services.serviceName}</h1>
                <h1 className='text-small font-bold text-primary-green mb-2'>{services.price}</h1>
                <p className='text-xxSmall font-light mb-4 '>{services.description}</p>
                <div className='mt-auto'>
                  <Button
                  btnText={'Book Appointment'}
                  fontColor={'text-puti'}
                  bgColor={'bg-primary-green'}
                  width={'w-[100%]'}
                  />
                </div>
            </div>
             
          ))
        }
      </div>
    </section>
  )
}

export default ServicesOffer