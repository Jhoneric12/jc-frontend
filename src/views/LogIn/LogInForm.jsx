import React, { useState } from 'react'
import '../../styles/Homepage.scss'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import FormTitle from '../../components/FormTitle'
import HeaderLogo from '../../components/HeaderLogo'
import { Link } from 'react-router-dom'
import axios from 'axios'

function LogInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password
            });

            const token = response.data.token;

        }
        catch (err) {
            console.log(err)
        }
    }


  return (
    <section className='flex justify-center items-center flex-col px-6 py-10 h-screen lg:flex lg:flex-row lg:justify-around'>
        <div>
            <div>
                <FormTitle formTitle={'Welcome to'} fontSize={'text-superSmall md:text-xSmall'} fontWeight={'font-regular'}/>
            </div>
            <div className='mb-4 py-5'>
                <HeaderLogo />
            </div>
        </div>
        <form action="" className='w-full bg-ultra-puti drop-shadow-xl py-10 px-5 rounded-[8px]  border-t-primary-green border-solid border-t-4 flex flex-col gap-4 md:w-[80%] lg:w-[35%]'>
            <div className='flex justify-center mb-4'>
                <FormTitle formTitle={'Log In'} fontWeight={'font-bold'} fontSize={'text-small'}/>
            </div>
            <div>
                <Label inputLabel={'Username'}/>
                <Input inputType={'text'} inputName={'username'} placeHolder={'Username'} handleInput={handleEmailChange}/>
            </div>
            <div>
                <Label inputLabel={'Password'}/>
                <Input inputType={'password'} inputName={'password'} placeHolder={'Password'} handleInput={handlePassChange}/>
            </div>
            <div className='mt-4'>
                <Button btnText={'Log In'} bgColor={'bg-primary-green'} width={'w-full'} borderRound={'rounded-[4px]'} fontColor={'text-puti'}/>
            </div>
            <div>
                <li className='text-superSmall list-none'>Don't Have an Account? <span className='text-primary-green'><Link to={'/signup'}>Resigster</Link></span></li>
            </div>
        </form>
    </section>
  )
}

export default LogInForm