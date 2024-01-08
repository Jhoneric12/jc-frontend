import React from 'react'
import Input from '../../components/Input';
import Services from '../../assets/PatientDashboard/Services.png'
import SideBar from '../../components/SideBar';

function PatientDashboard() {

    return (
        <section className='flex'>
          <div className='w-[20%]'>
            <SideBar/>
          </div>
        <div className='w-[80%] p-10 flex flex-col gap-6'>
          <h1 className='text-font-color text-medium font-semibold'>Home</h1>
          <div className='flex flex-col bg-[#B0E1B6] py-10 px-8 rounded-[15px] gap-1 shadow-sm'>
            <h1 className='text-small font-semibold text-font-color'>Welcome <span>{localStorage.getItem('first_name')}!</span></h1>
            <h3 className='text-small font-regulat text-font-color'>Channel a Doctor here.</h3>
            <div className='w-[40%]'>
              <Input
                placeHolder={'Search a Doctor or Session'}
              />
            </div>
          </div>
          <div>
            <img src={Services} alt="" />
          </div>
        </div>
        </section>
      );
}

export default PatientDashboard