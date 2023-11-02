import React from 'react'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import Button from '../components/Button'
import Unlock from '../assets/LogInAndSignUp/Unlock.png'

function SignUp({handleClick, isOpen, }) {
  return (

    <Dialog
    size="sm"
    open={isOpen}
    className="bg-transparent bg-puti shadow-none p-4"
    >
        <DialogHeader >
           <p className='text-small font-bold '>Account Created!</p>
        </DialogHeader>
        <DialogBody>
            <div className='grid place-items-center'>
                <img src={Unlock} alt=""  className='w-[8rem] h-[8rem] mb-4'/>
                <p className='text-xSmall text-center text-font-color font-semibold'> You are now registered to <span className='text-primary-green'>Jc's Skin Works</span></p>
                <p className='text-border-color text-xxSmall text-center mt-2'>Explore and enjoy our Services</p>
            </div>
        </DialogBody>
        <DialogFooter>
        <Button
            btnText={'Got it, Lets go'}
            bgColor={'bg-primary-green'}
            fontColor={'text-puti'}
            handleClick={handleClick}
            borderStyle={'border-none'}
        />
        </DialogFooter>

    </Dialog>
  )
}

export default SignUp

