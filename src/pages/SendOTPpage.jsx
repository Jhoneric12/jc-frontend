import React from 'react'
import { lazy, Suspense } from 'react'
import Loading from '../Spinners/Loading'
const SendOTP = lazy(() => import('../views/SignUp/SendOTP'))

function SendOTPpage() {
  return (
    <main className='homepage'>
        <Suspense fallback={<Loading/>}>
          <SendOTP/>
        </Suspense>
    </main>
  )
}

export default SendOTPpage