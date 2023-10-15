import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ServicesData from '../../dummyData/ServicesData'
import '../../styles/Services.scss'

function Services() {
  return (
    <div className='py-10 bg-puti'>
        <div className="title">
            <SectionTitle
                title={'Services'}
                subTitle={'What we can do for you'}
            />
        </div>
        <div className='flex justify-center items-center py-20 lg:px-10'>
            <div className="treatments flex justify-center flex-col items-center gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:place-items-center lg:flex lg:flex-row lg:justify-around w-full ">
                {
                    ServicesData.map((treatment) => (
                        <div className="card flex flex-col items-center w-[90%] lg:w-[30%] p-4 lg:p-10" key={treatment.id}>
                            <img src={treatment.treatImage} alt="" className='mb-5 lg:w-[4.375rem] lg:h-[4.375rem]'/>
                            <h1 className='text-primary-green font-semibold text-small text-center md:text-small lg:text-small'>{treatment.treatmentName}</h1>
                            <img src={treatment.titleLine} alt="" className='mb-2 lg:mb-6'/>
                            <p className='text-xSmall text-center font-light md:text-xSmall lg:text-xSmall'>{treatment.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services