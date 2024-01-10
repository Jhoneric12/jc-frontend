import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function DateToday() {

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    
  return (
    <section className='flex items-center justify-center gap-4 border border-border-color rounded-[8px] p-4'>
        <div>
            <div className='gap-2'>
                <h1 className='text-border-color text-superSmall'>Today's Date</h1>
                <p className='text-superSmall'>{formattedDate}</p>
            </div>
        </div>
        <div>
           <FaCalendarAlt className='text-primary-green w-[1.5rem] h-[1.5rem]'/>
        </div>
    </section>
  )
}

export default DateToday