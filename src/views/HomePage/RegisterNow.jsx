import React from 'react'
import Button from '../../components/Button'

function RegisterNow() {
  return (
    <section className='w-full text-center py-16 px-10 md:px-24 bg-secondary-green text-font-color'>
        <h1 className='italic font-regular mb-6 text-xSmall md:text-xSmall text-center'>Look after yourself from within, and your beauty will shine through on your skin.</h1>
        <div className='w-full flex justify-center'>
          <div className='w-[70%] md:w-[50%] lg:w-[20%]'>
            <Button
                btnText={'Register Now'}
                bgColor={'bg-primary-green'}
                fontColor={'text-puti'}
                width={'w-3/4'}
            />
          </div>
        </div>
    </section>
  )
}

export default RegisterNow