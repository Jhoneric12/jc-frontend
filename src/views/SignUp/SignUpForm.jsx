import React from 'react'
import FormTitle from '../../components/FormTitle'
import HeaderLogo from '../../components/HeaderLogo'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { loadFromLocalStorage, saveToLocalStorage, useSignUpStore } from '../../hooks/LoginSignUp/usePatientDataStore'

function SignUpForm() {

    const signUpData = useSignUpStore((state) => state.signUpData);
    const setSignUpData = useSignUpStore((state) => state.setSignUpData);
    
    // Load data drom local storage
    useEffect(() => {
        const storedData = loadFromLocalStorage('signUpData');
        if (storedData) {
            setSignUpData(storedData);
          }
    }, [setSignUpData]);

    // Save data from local storage
    useEffect(() => {
        saveToLocalStorage('signUpData', signUpData);
    }, [signUpData]);


    // Save to state management
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({ ...signUpData, [name]: value });
    };

    // Navigate to Register Page
    const navigate = useNavigate();

    const navigateRegister = (e) => {
        e.preventDefault();
        navigate('/register');
        saveToLocalStorage('signUpData', signUpData);
    }

  return (
    <section className='flex flex-col items-center py-10 px-6 md:h-screen md:justify-center lg:flex-row lg:justify-around'> 
        <div>
            <div>
                <FormTitle formTitle={'Welcome to'} fontSize={'text-superSmall md:text-xSmall'} fontWeight={'font-regular'}/>
            </div>
            <div className='mb-4 py-5'>
                <HeaderLogo />
            </div>
        </div>
        <form action="" className='w-full bg-ultra-puti drop-shadow-xl py-10 px-5 rounded-[8px] flex flex-col gap-4 md:w-[80%] lg:w-[35%]  border-t-primary-green border-solid border-t-4'>
            <div className='flex justify-center mb-4'>
                <FormTitle formTitle={'Create an Account'} fontWeight={'font-bold'} fontSize={'text-small'}/>
            </div>
            <div>
                <Label inputLabel={'Email Address'}/>
                <Input inputType={'email'} inputName={'emailAddress'} placeHolder={'Email Address'} handleInput={handleInputChange} inputValue={signUpData.emailAddress}/>
            </div>
            <div>
                <Label inputLabel={'Username'}/>
                <Input inputType={'text'} inputName={'username'} placeHolder={'Username'} handleInput={handleInputChange} inputValue={signUpData.username}/>
            </div>
            <div>
                <Label inputLabel={'Password'}/>
                <Input inputType={'password'} inputName={'password'} placeHolder={'Password'} handleInput={handleInputChange} inputValue={signUpData.password}/>
            </div>
            <div>
                <Label inputLabel={'Confirm Password'}/>
                <Input inputType={'password'} inputName={'confirmPass'} placeHolder={'Confirm Password'} handleInput={handleInputChange} inputValue={signUpData.confirmPass}/>
            </div>
            <div className='mt-4'>
                <Button btnText={'Sign Up'} bgColor={'bg-primary-green'} width={'w-full'} borderRound={'rounded-[4px]'} fontColor={'text-puti'} handleClick={navigateRegister}/>
            </div>
            <div>
                <li className='text-superSmall list-none'>Already Have an Account? <span className='text-primary-green'><Link to={'/login'}>Login</Link></span></li>
            </div>
        </form>
    </section>
  )
}

export default SignUpForm