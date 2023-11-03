import React, { useState, useEffect, lazy, Suspense } from 'react'
import FormTitle from '../../components/FormTitle'
import Label from '../../components/Label'
import Button from '../../components/Button'
import Input from '../../components/Input'
import HeaderLogo from '../../components/HeaderLogo'
import axios from 'axios'
import { useSignUpStore } from '../../hooks/LoginSignUp/usePatientDataStore'
const SignUp = lazy(() => import('../../Dialog/Modal'))
import { useNavigate } from 'react-router-dom'
import Unlock from '../../assets/LogInAndSignUp/Unlock.png'
import Loading from '../../Spinners/Loading'

function EnterOTP() {

    const signUpData = useSignUpStore((state) => state.signUpData);
    const clearSignUpData = useSignUpStore((state) => state.clearSignUpData);
    const [otp, setOTP] = useState('');
    const [errors, setErrors] = useState([]);
    const [invalidOTP, setInvalidOTP] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [isLoading, setLoading] = useState(false);

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
        setLoading(true);
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
                setLoading(false);
                setInvalidOTP(response.data.message);
            }

            // Check if account is created
            if (response.data.message === 'Account Created') {
                setShowDialog(true);
            }
        }
        catch (err) {
            // Get validation error messages
            if (err.response && err.response.status === 422) {
                const validationErrors =  err.response.data.errors;
                const errorArray =  Object.values(validationErrors).flat();
                setErrors(errorArray);
                setLoading(false);
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
        <Suspense fallback={<Loading/>}>
        {
            showDialog && (
                <SignUp
                    handleClick={navigateLogin}
                    isOpen={showDialog}
                    dialogImg={Unlock}
                    title={'Account Created!'}
                    description={'You are now registered in '}
                    spanDesc={"Jc's Skin Works"}
                    subDescription={'Explore and enjoy our services'}
                    dialogSize={'sm'}
                    btnText={"Got it"}
                />
            )
        }
        </Suspense>
        {
            isLoading && (
                <div className='flex h-screen justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-50 backdrop-blur-sm'> 
                    <Loading/>
                </div>
            )
        }
    </section>
  )
}

export default EnterOTP