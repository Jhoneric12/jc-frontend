import React from 'react'
import FormTitle from '../../components/FormTitle'
import Dropdown from '../../components/Dropdown'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import '../../styles/Homepage.scss'
import UserTypes from '../../dummyData/Usertypees'

function Login() {
  return (
    <section className='homepage flex justify-center items-center flex-col px-6 py-10 h-screen lg:flex lg:flex-row lg:justify-around'>
        <form action="" className='w-full bg-ultra-puti drop-shadow-xl py-10 px-5 rounded-[8px]  border-t-primary-green border-solid border-t-4 flex flex-col gap-4 md:w-[80%] lg:w-[35%]'>
            <div className='flex justify-center mb-4'>
                <FormTitle formTitle={'Log In'} fontWeight={'font-bold'} fontSize={'text-small'}/>
            </div>
            <div>
                <Label inputLabel={'Type'}/>
                <Dropdown options={UserTypes} select={'-Select Type-'} dropDownName={'userTypes'}/>
            </div>
            <div>
                <Label inputLabel={'Username'}/>
                <Input inputType={'text'} inputName={'username'} placeHolder={'Enter Username'}/>
            </div>
            <div>
                <Label inputLabel={'Password'}/>
                <Input inputType={'password'} inputName={'password'} placeHolder={'Enter Password'}/>
            </div>
            <div className='mt-4'>
                <Button btnText={'Log In'} bgColor={'bg-primary-green'} width={'w-full'} borderRound={'rounded-[4px]'} fontColor={'text-puti'}/>
            </div>
        </form>
    </section>
  )
}

export default Login