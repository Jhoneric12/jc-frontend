import React, { useState } from 'react'
import FormTitle from '../../components/FormTitle'
import Dropdown from '../../components/Dropdown'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Loading from '../../Spinners/Loading'
import axios from 'axios'
import '../../styles/Homepage.scss'
import UserTypes from '../../dummyData/Usertypees'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsetype] = useState('');
    const [loginError, setError] = useState('');
    const [validationError, setValError] = useState([]);
    const [isLoading, setLoading] = useState(false);


    const navigate = useNavigate();

    const navigateAdminDashboard = () => {
        navigate('/admin/dashboard');
    }

    const handleUsertypeChange = (e) => {
        setUsetype(e.target.value);
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/admin-login', {
                username: username,
                password: password,
                usertype: usertype
            });

            // Navigate to Admin Dashboard
            if (response.status === 200) {
                navigateAdminDashboard();
                const adminToken = response.data.admin.token
                localStorage.setItem('admin-token', JSON.stringify(adminToken));
                localStorage.setItem('admin-name', response.data.admin.first_name);
                localStorage.setItem('admin-id', response.data.admin.admin_id);
            }

        }
        catch (err) {
            console.log(err);

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


        }
    }



  return (
    <section className='homepage flex justify-center items-center flex-col px-6 py-10 h-screen lg:flex lg:flex-row lg:justify-around'>
        <form action="" className='w-full bg-ultra-puti drop-shadow-xl py-10 px-5 rounded-[8px]  border-t-primary-green border-solid border-t-4 flex flex-col gap-4 md:w-[80%] lg:w-[35%]'>
            <div className='flex justify-center mb-4'>
                <FormTitle formTitle={'Log In'} fontWeight={'font-bold'} fontSize={'text-small'}/>
            </div>
            <div>
                <Label inputLabel={'Type'}/>
                <Dropdown options={UserTypes} select={'-Select Type-'} dropDownName={'userTypes'} selectedChange={handleUsertypeChange}/>
            </div>
            <div>
                <Label inputLabel={'Username'}/>
                <Input inputType={'text'} inputName={'username'} placeHolder={'Enter Username'} handleInput={handleUsernameChange}/>
            </div>
            <div>
                <Label inputLabel={'Password'}/>
                <Input inputType={'password'} inputName={'password'} placeHolder={'Enter Password'} handleInput={handlePasswordChange}/>
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

export default Login