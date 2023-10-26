import React from 'react'
import FormTitle from '../../components/FormTitle'
import OTPLogo from '../../assets/LogInAndSignUp/OTPLogo.png'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'

function SendOTP() {
  return (
    <section className='h-screen flex justify-center items-center py-10 px-6'>
        <div className='w-full md:w-[60%]'>
            <div className='flex items-start flex-col mb-6'>
                <FormTitle formTitle={'OTP Verification'} fontWeight={'font-bold'} fontSize={'text-small'}/>
            </div>
            <form action="" className='flex flex-col  bg-ultra-puti px-5 py-10 rounded-[8px] drop-shadow-xl'>
                <div className='flex justify-center mb-6'>
                    <img src={OTPLogo} alt="" />
                </div>
                <div>
                    <Label inputLabel={'Email Address'}/>
                    <Input placeHolder={'Email Address'} inputType={'email'}/>
                    <p className='text-primary-green text-[0.625rem] mt-1  mb-6 hover:cursor-pointer md:text-superSmall'>Use phone number instead</p>
                    <Button btnText={'Next'} bgColor={'bg-primary-green'} width={'w-full'} fontColor={'text-puti'}/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default SendOTP