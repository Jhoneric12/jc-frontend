import React from 'react'
import { lazy, Suspense } from 'react'
import Loading from '../Spinners/Loading'
const EnterOTP = lazy(() => import('../views/SignUp/EnterOTP'))

function EnterOTPpage() {
  return (
    <main className='homepage'>
        <Suspense fallback={<Loading/>}>
          <EnterOTP/>
        </Suspense>
    </main>
  )
}

export default EnterOTPpage