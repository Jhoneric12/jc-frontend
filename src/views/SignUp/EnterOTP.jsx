import React, { useState, useEffect } from 'react'
import FormTitle from '../../components/FormTitle'
import Label from '../../components/Label'
import Button from '../../components/Button'
import Input from '../../components/Input'
import HeaderLogo from '../../components/HeaderLogo'
import axios from 'axios'
import { useSignUpStore } from '../../hooks/LoginSignUp/usePatientDataStore'
import SignUp from '../../Dialog/SignUp'
import { useNavigate } from 'react-router-dom'

function EnterOTP() {

    const signUpData = useSignUpStore((state) => state.signUpData);
    const clearSignUpData = useSignUpStore((state) => state.clearSignUpData);
    const [otp, setOTP] = useState('');
    const [errors, setErrors] = useState([]);
    const [invalidOTP, setInvalidOTP] = useState('');
    const [showDialog, setShowDialog] = useState(false);

    const handleInputChange = (e) => {
        setOTP(e.target.value);
    }

    // Navigate to Login
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    // Submit OTP to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Verify OTP and store patient data
        try {
            const response = await axios.post('http://localhost:8000/api/enter-mail-otp', 
            {
                otp: otp,
                first_name: signUpData.firstName,
                middle_name: signUpData.middleName,
                last_name: signUpData.lastName,
                birth_date: signUpData.birthDate,
                age: signUpData.age,
                civil_status: signUpData.civilStats,
                gender: signUpData.gender,
                home_address: signUpData.homeAdd,
                contact: signUpData.contact,
                religion: signUpData.religion,
                email_address: signUpData.emailAdd,
                username: signUpData.userName,
                password: signUpData.passWord
            });
            console.log(response);

            // Verify status
            if (response && response.status === 200) {
                clearSignUpData();
                setInvalidOTP(response.data.message);
            }

            if (response.data.message === 'Account Created') {
                setShowDialog(true);
            }
        }
        catch (err) {
            if (err.response && err.response.status === 422) {
                const validationErrors =  err.response.data.errors;
                const errorArray =  Object.values(validationErrors).flat();
                setErrors(errorArray);
            }
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
        <div className='w-full md:w-1/2 lg:w-[40%]'>
            <form action="" className='py-10 px-5 bg-ultra-puti drop-shadow-xl rounded-[8px]  border-t-primary-green border-solid border-t-4'>
            <div className='mb-6'>
                <FormTitle formTitle={'Enter your One-Time Pin (OTP)'} fontWeight={'font-bold'} fontSize={'text-small'}/>
                <p className='text-superSmall md:text-xxSmall font-light text-border-color mt-1'>We have sent the OTP in your email address</p>
            </div>
            <div>
                <Label inputLabel={'Enter OTP'}/>
                <Input placeHolder={'Enter OTP'} inputType={'text'} center={'text-center'} handleInput={handleInputChange} inputValue={otp}/>
                <p className='text-[red] text-superSmall mt-1'>{invalidOTP}</p>
                {
                    errors.map((error, index) => (
                        <li className='text-[red] text-superSmall mt-1' key={index}>{error}</li>
                    ))
                }
                <p className='text-[0.625rem] mt-2 mb-4 md:text-superSmall'>Didn't received a code?</p>
                <p className='text-primary-green text-[0.625rem] mt-1 hover:cursor-pointer md:text-superSmall'>Resend Code</p>
                <p className='text-primary-green text-[0.625rem] mt-1  mb-6 hover:cursor-pointer md:text-superSmall'>Use phone number instead</p>
                <Button btnText={'Submit'} bgColor={'bg-primary-green'} width={'w-full'} fontColor={'text-puti'} handleClick={handleSubmit}/>
                </div>
            </form>
        </div>
        {
            showDialog && (
                <SignUp
                    handleClick={navigateLogin}
                    isOpen={showDialog}
                />
            )
        }
    </section>
  )
}

export default EnterOTP