import React from 'react'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import Button from '../components/Button'

function SignUp({handleClick, isOpen, dialogImg, title, description, subDescription, spanDesc, dialogSize, btnText}) {
  return (

    <Dialog size={dialogSize} open={isOpen}className="bg-transparent bg-puti shadow-none p-4">
        <DialogHeader >
           <p className='text-small font-bold '>{title}</p>
        </DialogHeader>
        <DialogBody>
            <div className='grid place-items-center'>
                <img src={dialogImg} alt=""  className='w-[8rem] h-[8rem] mb-4'/>
                <p className='text-xSmall text-center text-font-color font-semibold'> {description} <span className='text-primary-green'>{spanDesc}</span></p>
                <p className='text-border-color text-xxSmall text-center mt-2'>{subDescription}</p>
            </div>
        </DialogBody>
        <DialogFooter>
          <Button
              btnText={btnText}
              bgColor={'bg-primary-green'}
              fontColor={'text-puti'}
              handleClick={handleClick}
              borderStyle={'outline-none'}
              width={'w-full'}
          />
        </DialogFooter>

    </Dialog>
  )
}

export default SignUp

