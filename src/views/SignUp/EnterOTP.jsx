import React from 'react'
import FormTitle from '../../components/FormTitle'
import Label from '../../components/Label'
import Button from '../../components/Button'
import Input from '../../components/Input'
import HeaderLogo from '../../components/HeaderLogo'

function EnterOTP() {
  return (
    <section className='h-screen flex flex-col items-center justify-center py-10 px-6 lg:flex-row lg:justify-around'>   
        <div className='mb-4 md:mb-6'>
            <FormTitle formTitle={'Welcome to'} fontSize={'text-superSmall md:text-xSmall'} fontWeight={'font-regular'}/>
            <HeaderLogo/>
        </div>
        <div className='w-full md:w-1/2 lg:w-[40%]'>
            <form action="" className='py-10 px-5 bg-ultra-puti drop-shadow-xl rounded-[8px]'>
            <div className='mb-6'>
                <FormTitle formTitle={'Enter your One-Time Pin (OTP)'} fontWeight={'font-bold'} fontSize={'text-small'}/>
                <p className='text-superSmall md:text-xxSmall font-light text-border-color mt-1'>We have sent the OTP in your email address</p>
            </div>
            <div>
                <Label inputLabel={'Enter OTP'}/>
                <Input placeHolder={'Enter OTP'} inputType={'text'} center={'text-center'}/>
                <p className='text-[0.625rem] mt-2 mb-4 md:text-superSmall'>Didn't received a code?</p>
                <p className='text-primary-green text-[0.625rem] mt-1 hover:cursor-pointer md:text-superSmall'>Resend Code</p>
                <p className='text-primary-green text-[0.625rem] mt-1  mb-6 hover:cursor-pointer md:text-superSmall'>Use phone number instead</p>
                <Button btnText={'Submit'} bgColor={'bg-primary-green'} width={'w-full'} fontColor={'text-puti'}/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default EnterOTP