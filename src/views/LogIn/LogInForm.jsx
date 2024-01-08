import React, { useState } from 'react'
import '../../styles/Homepage.scss'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import FormTitle from '../../components/FormTitle'
import HeaderLogo from '../../components/HeaderLogo'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../Spinners/Loading'
import { useNavigate } from 'react-router-dom'
import { useLoginStore } from '../../hooks/LoginSignUp/userLoginDataStore'

function LogInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [validationError, setValError] = useState([]);

    const loginData = useLoginStore();

    const navigate = useNavigate();
    const navigateDashboard = () => {
        navigate('/patient/dashboard');
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                username: email,
                password: password
            });

            // Navigate to Login form, when credentials are correct
            if (response.status === 200) {
                setLoading(false);
                navigateDashboard();
                loginData.patient_id = response.data.patient.patient_id;
                loginData.username = response.data.patient.username;
                loginData.first_name = response.data.patient.first_name;
                const token = response.data.patient.token;
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('first_name', response.data.patient.first_name);
                localStorage.setItem('username', response.data.patient.username);
                localStorage.setItem('patient_id', response.data.patient.patient_id);
            }
            console.log(response);
            console.log(loginData);

        }
        catch (err) {

            if (err.response && err.response.status === 401) {
                setLoading(false);
                const lgError = err.response.data.message;
                setError(lgError);
                setValError([]);
            }
            if (err.response && err.response.status === 422) {
                const validationErrors = err.response.data.errors
                const errorArray = Object.values(validationErrors).flat();
                setValError(errorArray);
                setLoading(false);
                setError([]);
            }
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
                <Input inputType={'text'} inputName={'username'} placeHolder={'Enter Username'} handleInput={handleEmailChange}/>
            </div>
            <div>
                <Label inputLabel={'Password'}/>
                <Input inputType={'password'} inputName={'password'} placeHolder={'Enter Password'} handleInput={handlePassChange}/>
            </div>
            {
                validationError.map((error, index) => (
                    <li className='text-[red] text-superSmall mt-0' key={index}>{error}</li>
                ))
            }
            <p className='text-[red] text-superSmall mt-0'>{loginError}</p>
            <div className='mt-4'>
                <Button btnText={'Log In'} bgColor={'bg-primary-green'} width={'w-full'} borderRound={'rounded-[4px]'} fontColor={'text-puti'} handleClick={handleSubmit}/>
            </div>
            <div>
                <li className='text-superSmall list-none'>Don't Have an Account? <span className='text-primary-green'><Link to={'/signup'}>Resigster</Link></span></li>
            </div>
        </form>
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

export default LogInForm