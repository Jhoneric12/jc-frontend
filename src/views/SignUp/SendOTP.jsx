import React, { useState,useEffect } from 'react'
import FormTitle from '../../components/FormTitle'
import OTPLogo from '../../assets/LogInAndSignUp/OTPLogo.png'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import HeaderLogo from '../../components/HeaderLogo'
import { useNavigate } from 'react-router-dom'
import { useSignUpStore } from '../../hooks/LoginSignUp/usePatientDataStore'
import axios from 'axios'


function SendOTP() {

    const {signUpData, setSignUpData} = useSignUpStore();

    // Store to state
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSignUpData( {...signUpData,
            [name]: value} );
    }

    // Navigate to eneter OTP page and send email
    const navigate = useNavigate();

    const navigateEnterOTP = async (e) => {

        e.preventDefault();
        navigate('/enter-otp');
        // Send Email OTP
        try {
            const response = await axios.post('http://localhost:8000/api/send-mail-otp', {email_address: signUpData.emailAdd});
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
        console.log(signUpData);
    }

  return (
    <section className='h-screen flex flex-col items-center justify-center py-10 px-6 lg:flex-row lg:justify-around'>
        <div className='mb-4 md:mb-6'>
            <FormTitle formTitle={'Welcome to'} fontSize={'text-superSmall md:text-xSmall'} fontWeight={'font-regular'}/>
            <HeaderLogo/>
        </div>
        <div className='w-full md:w-[60%] lg:w-[40%]'>
            <form action="" className='flex flex-col  bg-ultra-puti px-5 py-10 rounded-[8px] drop-shadow-xl  border-t-primary-green border-solid border-t-4'>
                <div className='flex items-start flex-col mb-6'>
                    <FormTitle formTitle={'OTP Verification'} fontWeight={'font-bold'} fontSize={'text-small'}/>
                    <p className='text-superSmall md:text-xxSmall font-light text-border-color mt-1'>Verify your account details.</p>
                </div>
                <div className='flex justify-center mb-6'>
                    <img src={OTPLogo} alt="" />
                </div>
                <div>
                    <Label inputLabel={'Email Address'}/>
                    <Input placeHolder={'Enter Email Address'} inputType={'email'} inputName={'emailAdd'} handleInput={handleInputChange} inputValue={signUpData.emailAdd}/>
                    <p className='text-primary-green text-[0.625rem] mt-2  mb-6 hover:cursor-pointer md:text-superSmall'>Use phone number instead</p>
                    <Button btnText={'Send OTP'} bgColor={'bg-primary-green'} width={'w-full'} fontColor={'text-puti'} handleClick={navigateEnterOTP}/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default SendOTP