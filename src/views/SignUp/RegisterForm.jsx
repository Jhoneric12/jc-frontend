import React from 'react'
import FormTitle from '../../components/FormTitle'
import HeaderLogo from '../../components/HeaderLogo'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'

function RegisterForm() {
  return (
   <section className='flex justify-center items-center flex-col py-10 px-6 lg:flex-row lg:justify-around'>
         <div>
            <div>
                <FormTitle formTitle={'Welcome to'} fontSize={'text-superSmall md:text-xSmall'} fontWeight={'font-regular'}/>
            </div>
            <div className='mb-4 py-5'>
                <HeaderLogo />
            </div>
        </div>
        <form action="" className='w-full bg-ultra-puti drop-shadow-xl py-10 px-5 rounded-[8px] flex flex-col gap-4 md:w-[80%] lg:w-[40%]'>
            <div className='flex items-start flex-col mb-4'>
                <FormTitle formTitle={'Personal Information'} fontWeight={'font-bold'} fontSize={'text-small'}/>
                <p className='text-superSmall md:text-xxSmall font-light text-border-color mt-1'>Provide information that is true and correct for medical purposes.</p>
            </div>
            <div>
                <Label inputLabel={'First Name'}/>
                <Input inputType={'text'} inputName={'fName'} placeHolder={'First Name'}/>
            </div>
            <div>
                <Label inputLabel={'Last Name'}/>
                <Input inputType={'text'} inputName={'lName'} placeHolder={'Last Name'}/>
            </div>
            <div>
                <Label inputLabel={'Middle Name (optional)'}/>
                <Input inputType={'text'} inputName={'mName'} placeHolder={'Middle Name'}/>
            </div>
            <div className='flex justify-around gap-2'>
                <div className='w-[70%]'>
                    <Label inputLabel={'Birthdate'}/>
                    <Input inputType={'date'} inputName={'bDate'}/>
                </div>
                <div className='w-[70%]'>
                    <Label inputLabel={'Age'}/>
                    <Input inputType={'text'} inputName={'age'} placeHolder={'Age'}/>
                </div>
            </div>
            <div className='flex justify-around gap-2'>
                <div className='w-[70%]'>
                    <Label inputLabel={'Civil Status'}/>
                    <Input inputType={'dropdown'} inputName={'civiStatus'} placeHolder={'Civil Status'}/>
                </div>
                <div className='w-[70%]'>
                    <Label inputLabel={'Gender'}/>
                    <Input inputType={'dropdown'} inputName={'gender'} placeHolder={'Gender'}/>
                </div>
            </div>
            <div>
                <Label inputLabel={'Home Address'}/>
                <Input inputType={'text'} inputName={'homeAdd'} placeHolder={'Home Address'}/>
            </div>
            <div className='flex justify-around gap-2'>
                <div className='w-[70%]'>
                    <Label inputLabel={'Contact Number'}/>
                    <Input inputType={'text'} inputName={'contact'} placeHolder={'Contact Number'}/>
                </div>
                <div className='w-[70%]'>
                    <Label inputLabel={'Religion (optional)'}/>
                    <Input inputType={'text'} inputName={'religion'} placeHolder={'Religion'}/>
                </div>
            </div>
            <div className='mt-4'>
                <Button btnText={'Next'} bgColor={'bg-primary-green'} width={'w-full'} borderRound={'rounded-[4px]'} fontColor={'text-puti'}/>
            </div>
        </form>
   </section>
  )
}

export default RegisterForm