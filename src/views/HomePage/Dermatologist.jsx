import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import DermImage from '../../assets/Mesias.png'

function Dermatologist() {
  return (
    <section className='dermatologist w-full flex flex-col gap-10 py-10 md:items-center'>
        <div>
            <SectionTitle
                title={'Dermatologist'}
                subTitle={'Meet our Dermatologist'}
            />
        </div>
        <div>
            <img src={DermImage} alt="Dermatologist" className='h-[20rem]'/>
        </div>
    </section>
  )
}

export default Dermatologist