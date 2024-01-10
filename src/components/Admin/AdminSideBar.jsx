import React from 'react'
import {Card,Typography,List,ListItem,ListItemPrefix,ListItemSuffix,Chip,} from "@material-tailwind/react";
// import jclogo from '../../assets/HomepageImg/jcslogo.png'
import user from '../../assets/HomepageImg/user-128-32.png'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { LuCalendar } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { Link } from 'react-router-dom';

function SideBar({firstName, id, handleLogOut}) {

  return (
    <Card className="overflow-y-auto sticky top-0 h-screen  max-w-[20rem] shadow-xl shadow-blue-gray-900/5 border-r border border-border-color rounded-none">
          <div className=' mb-4 px-8 py-10 border-b border-solid border-[#C1C1C1]'>
            <div className='flex gap-6 items-center'>
                <img src={user} alt="" className='rounded-full border-2 border-solid border-black w-[4rem] h-[4rem]'/>
            <div>
                <div>
                    <h1 className='text-font-color font-bold' >{firstName}</h1>
                    <h3 className='text-primary-green'>{id}</h3>
                </div>
            </div>
            </div>
          </div>
          <List className='px-2'>
            <Link to={'/admin/dashboard'}>
                <ListItem className='focus:bg-primary-green focus:text-puti'>
                <ListItemPrefix>
                    {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                    <MdOutlineSpaceDashboard className='h-5 w-5'/>
                </ListItemPrefix>
                Dashboard
                </ListItem>
            </Link>
            <Link to={'/admin/patients'}>
                <ListItem className='focus:bg-primary-green focus:text-puti'>
                <ListItemPrefix>
                    {/* <ShoppingBagIcon className="h-5 w-5" /> */}
                    <FaUserDoctor className='h-5 w-5'/>
                </ListItemPrefix>
                Patients
                </ListItem>
            </Link>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <InboxIcon className="h-5 w-5" /> */}
                <LuCalendar className='h-5 w-5'/>
              </ListItemPrefix>
              Appointments
              <ListItemSuffix>
                {/* <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
              </ListItemSuffix>
            </ListItem>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <UserCircleIcon className="h-5 w-5" /> */}
                <RiHealthBookLine className='h-5 w-5'/> 
              </ListItemPrefix>
              Transactions
            </ListItem>
            <ListItem className='focus:bg-primary-green focus:text-puti'>
              <ListItemPrefix>
                {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                <MdOutlineInventory2 className='h-5 w-5'/>
              </ListItemPrefix>
              Inventory
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