import React from 'react'
import FormTitle from '../../components/FormTitle'
import Button from '../../components/Button'
import { useNavigate, Link } from 'react-router-dom'

function ReviewInfo() {

    // Navigate to send OTP
    const navigate = useNavigate();
    const navigateSendOTP = () => {
        navigate('/send-otp');
    }
  return (
    <section className='flex flex-col justify-center md:items-center md:justify-center md:h-screen text-xxSmall md:text-xxSmall  py-10 px-6'>
       <div>
            <div className='flex items-start flex-col mb-6'>
                <FormTitle formTitle={'Review your personal information'} fontWeight={'font-bold'} fontSize={'text-small'}/>
                <p className='text-superSmall md:text-xxSmall font-light text-border-color mt-1'>Provide information that is true and correct for medical purposes.</p>
            </div>
            <div className='container flex flex-col gap-2 py-10 px-5 bg-ultra-puti drop-shadow-xl rounded-[8px]'>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>First Name</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>Jhon Eric</p> 
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Middle Name</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>Dormido</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Last Name</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>Aton</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Birth Date</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>06 / 15 / 2001</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Civil Status</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>Single</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Gender</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>Male</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Home Address</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>0047 Gen. Luna St. Brgy. San Antipolo, City</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Contact Number</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>09683268687</p>
                    </div>
                </div>
                <div className='flex justify-between items-center border-b border-b-border-color py-2'>
                    <div className='w-[50%]'>
                        <p>Religion</p>
                    </div>
                    <div className='font-medium w-[50%] flex justify-end'>
                        <p>Roman Catholic</p>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <Button btnText={'Submit'} bgColor={'bg-primary-green'} width={'w-full'} fontColor={'text-puti'} handleClick={navigateSendOTP}/>
                <Link to={'/register'}><p className='text-center text-xxSmall text-primary-green mt-4 font-semibold hover:cursor-pointer'>Go back and Edit</p></Link>
            </div>
       </div>
    </section>
  )
}

export default ReviewInfo