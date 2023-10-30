import React from 'react'
import { useState, useEffect} from 'react'
import FormTitle from '../../components/FormTitle'
import HeaderLogo from '../../components/HeaderLogo'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import GenderData from '../../dummyData/GenderData'
import CivilStatusData from '../../dummyData/CivilStatusData'
import { useNavigate } from 'react-router-dom'
import { loadFromLocalStorage, saveToLocalStorage, useSignUpStore } from '../../hooks/LoginSignUp/usePatientDataStore'

function RegisterForm() {
    

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


    // Navigate to Review information page
    const navigate = useNavigate();
    const navigateReviewInformation = () => {
        navigate('/send-otp');
    }
    
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
        <form action="" className='w-full bg-ultra-puti drop-shadow-xl py-10 px-5 rounded-[8px] flex flex-col gap-4 md:w-[80%] lg:w-[40%] border-t-primary-green border-solid border-t-4'>
            <div className='flex items-start flex-col mb-4'>
                <FormTitle formTitle={'Personal Information'} fontWeight={'font-bold'} fontSize={'text-small'}/>
                <p className='text-superSmall md:text-xxSmall font-light text-border-color mt-1'>Provide information that is true and correct for medical purposes.</p>
            </div>
            <div>
                <Label inputLabel={'First Name'}/>
                <Input inputType={'text'} inputName={'fName'} placeHolder={'First Name'} handleInput={handleInputChange} inputValue={signUpData.fName}/>
            </div>
            <div>
                <Label inputLabel={'Last Name'}/>
                <Input inputType={'text'} inputName={'lName'} placeHolder={'Last Name'} handleInput={handleInputChange} inputValue={signUpData.lName}/>
            </div>
            <div>
                <Label inputLabel={'Middle Name (optional)'}/>
                <Input inputType={'text'} inputName={'mName'} placeHolder={'Middle Name'} handleInput={handleInputChange} inputValue={signUpData.mName}/>
            </div>
            <div className='flex justify-around gap-2'>
                <div className='w-[70%]'>
                    <Label inputLabel={'Birthdate'}/>
                    <Input inputType={'date'} inputName={'bDate'} handleInput={handleInputChange} inputValue={signUpData.bDate}/>
                </div>
                <div className='w-[30%]'>
                    <Label inputLabel={'Age'}/>
                    <Input inputType={'number'} inputName={'age'} placeHolder={'Age'} handleInput={handleInputChange} inputValue={signUpData.age}/>
                </div>
            </div>
            <div className='flex justify-around items-center gap-2 flex-col md:flex-row text-xxSmall md:text-xSmall'>
                <div className='w-full'>
                    <Label inputLabel={'Civil Status'}/>
                    <Dropdown select={'-Select Civil Status-'} options={CivilStatusData} dropDownName={'civilStats'} selectedValue={signUpData.civilStats} selectedChange={handleInputChange}/>
                </div>
                <div className='w-full flex flex-col'>
                    <Label inputLabel={'Gender'}/>
                    {/* <Input inputType={'dropdown'} inputName={'gender'} placeHolder={'Gender'}/> */}
                    <Dropdown select={'-Select Gender-'}options={GenderData}  dropDownName={'gender'} selectedValue={signUpData.gender} selectedChange={handleInputChange}/>
                </div>
            </div>
            <div>
                <Label inputLabel={'Home Address'}/>
                <Input inputType={'text'} inputName={'homeAdd'} placeHolder={'Home Address'} handleInput={handleInputChange} inputValue={signUpData.homeAdd}/>
            </div>
            <div>
                <Label inputLabel={'Contact Number'}/>
                <Input inputType={'text'} inputName={'contact'} placeHolder={'Contact Number'} handleInput={handleInputChange} inputValue={signUpData.contact}/>
            </div>
            <div>
                <Label inputLabel={'Religion (optional)'}/>
                <Input inputType={'text'} inputName={'religion'} placeHolder={'Religion'} handleInput={handleInputChange} inputValue={signUpData.religion}/>
            </div>
            <div className='mt-4'>
                <Button btnText={'Next'} bgColor={'bg-primary-green'} width={'w-full'} borderRound={'rounded-[4px]'} fontColor={'text-puti'} handleClick={navigateReviewInformation}/>
            </div>
        </form>
   </section>
  )
}

export default RegisterForm