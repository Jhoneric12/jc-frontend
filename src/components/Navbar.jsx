import React, { useState } from 'react';
import JcLogo from '../assets/HomepageImg/jcslogo.png';
import JcsLogo from '../assets/HomepageImg/jcslogo.png'
import { TbMenuDeep } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
import { Drawer } from '@material-tailwind/react';
import '../styles/Navbar.scss';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);    
  const [isfix, setFix] = useState(false);

  const handleFix = () => {
    if (window.scrollY >= 500) {
      setFix(true);
    }
    else {
      setFix(false);
    }
  }

  window.addEventListener('scroll', handleFix)
  
  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
    document.body.style.overflow = 'auto'
  };

  // Navigate to Login page
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  }

  const navigateSignUp = () => {
    navigate('/signup');
  }

  return (
    <nav className={ isfix ? 'nav-bar z-50 bg-puti w-full px-6 py-4 md:flex md:justify-around md:w-[full] lg:px-12 flex flex-row items-center justify-between lg:justify-around fixed top-0 duration-300 ' : 
    'nav-bar z-50 bg-puti w-full px-6 py-3 md:flex md:justify-around md:w-[full] lg:px-12 flex flex-row items-center justify-between lg:justify-around relative'}>
        <div className="logo lg:w-[25%]">
            <img
            src={JcLogo}
            alt="JC's Skin Logo"
            className='w-[2.5rem] h-[2rem] md:w-[5.5rem] md:h-[3.5rem]'
            />
        </div>
        <ul className='nav-links hidden md:flex md:w-[50%] md:justify-around md:text-xxSmall lg:flex lg:justify-around lg:text-sm lg:w-[40%]'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link>Featured</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link>Products</Link></li>
            <li><Link>About</Link></li>
        </ul>
        <div className="buttons hidden md:flex md:justify-around md:w-[25%] lg:flex lg:justify-around lg:w-[25%]">
            <Button
            handleClick={navigateSignUp}
            btnText='Sign Up'
            bgColor='bg-puti'
            borderStyle='border-solid'
            borderColor='border-[#494949]'
            borderWeight='border'
            />
            <Button
            handleClick={navigateLogin}
            btnText={'Log In'}
            bgColor={'bg-primary-green'}
            borderColor={'bg-primary-green'}
            fontColor={'text-puti'}
            />
        </div> 

        <div className="burger-container lg:hidden md:hidden">
            <TbMenuDeep
            className='burger text-primary-green font-extrabold'
            onClick={openDrawer}
            />
        </div>

        {open && (
            <Drawer
            open={open}
            onClose={closeDrawer}
            placement='left'
            overlay={true}
            className='fixed top-0 h-screen md:hidden w-2/3 flex flex-col justify-between rounded-[8px] left-0 bg-blue-gray-200'
            style={{
              overflow: 'hidden',
              left: '0',
              right: 'unset',
            }}
            >
            <div className="sidebar-container bg-[#232323] py-4 px-6 min-h-screen md:hidden lg:hidden w-full">
                    <div className="close flex justify-end">
                        <MdClose onClick={closeDrawer} className='text-puti'/>
                    </div>
                    <img
                    src={JcsLogo}
                    alt="JC's Skin Logo"
                    className='w-[3.5rem] h-[3rem] md:w-[5.5rem] md:h-[5.5rem] mx-auto my-4 mb-16'
                    />
                    <ul className='flex flex-col items-center gap-4 text-xxSmall text-puti'>
                      <li><Link to={'/'}>Home</Link></li>
                      <li><Link>Featured</Link></li>
                      <li><Link to={'/services'}>Services</Link></li>
                      <li><Link>Products</Link></li>
                      <li><Link>About</Link></li>
                    </ul>

                    <div>
                        <div className="buttons flex flex-col items-center mt-6 md:mt-48 gap-6 w-full">
                            <Button
                             handleClick={navigateSignUp}
                            btnText='Sign Up'
                            bgColor='bg-puti'
                            borderStyle='border-solid'
                            borderColor='border-[#494949]'
                            borderWeight='border'
                            width={'w-3/4'}
                            />
                            <Button
                            handleClick={navigateLogin}
                            btnText={'Log In'}
                            bgColor={'bg-primary-green'}
                            borderColor={'bg-primary-green'}
                            fontColor={'text-puti'}
                            width={'w-3/4'}
                            />
                        </div> 
                    </div>
            </div>
            </Drawer>
        )}
    </nav>
  );
} 

export default Navbar;