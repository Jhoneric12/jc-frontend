import React from 'react'
import {Card,Typography,List,ListItem,ListItemPrefix,ListItemSuffix,Chip,} from "@material-tailwind/react";
import { useLoginStore } from '../hooks/LoginSignUp/userLoginDataStore';
import { useNavigate } from 'react-router-dom';
// import jclogo from '../../assets/HomepageImg/jcslogo.png'
import user from '../assets/HomepageImg/user-128-32.png'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { LuCalendar } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

function SideBar() {

    const navigate = useNavigate();
    const loginData = useLoginStore();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('first_name');
        localStorage.removeItem('patient_id');
        navigate('/login');
    }

  return (
    <Card className="h-screen w-full max-w-[20rem] p-2 shadow-xl shadow-blue-gray-900/5 border-r border border-border-color rounded-none">
          {/* <div className=" p-4">
            <div>
                <img src={jclogo} alt="" className='w-[5rem] h-[4rem]'/>
            </div>
          </div> */}
          <div className='mb-8 p-6'>
            <div className='flex gap-6 items-center'>
                <img src={user} alt="" className='rounded-full border-2 border-solid border-black w-[4rem] h-[4rem]'/>
            <div>
                <div>
                    <h1 className='text-font-color font-bold' >{localStorage.getItem('first_name')}</h1>
                    <h3 className='text-primary-green'>{localStorage.getItem('patient_id')}</h3>
                </div>
            </div>
            </div>
          </div>
          <List>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                <MdOutlineSpaceDashboard className='h-5 w-5'/>
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <ShoppingBagIcon className="h-5 w-5" /> */}
                <LuCalendar className='h-5 w-5'/>
              </ListItemPrefix>
              My Appointments
            </ListItem>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <InboxIcon className="h-5 w-5" /> */}
                <FaUserDoctor className='h-5 w-5'/>
              </ListItemPrefix>
              Doctors
              <ListItemSuffix>
                {/* <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
              </ListItemSuffix>
            </ListItem>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <UserCircleIcon className="h-5 w-5" /> */}
                <RiHealthBookLine className='h-5 w-5'/> 
              </ListItemPrefix>
              Services
            </ListItem>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                <IoIosSettings className='h-5 w-5'/>
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem onClick={handleLogOut} className='focus:bg-primary-green focus:text-put'>
              <ListItemPrefix>
                {/* <PowerIcon className="h-5 w-5" /> */}
                <BiLogOut className='h-5 w-5'/>
              </ListItemPrefix>
              Sign Out
            </ListItem>
          </List>
        </Card>
  )
}

export default SideBar