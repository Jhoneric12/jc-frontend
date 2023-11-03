import React from 'react'
import { lazy, Suspense } from 'react'
import Loading from '../Spinners/Loading'
const SignUpForm = lazy(() => import('../views/SignUp/SignUpForm'))

function SignUpPage() {
  return (
    <main className='homepage'>
        <Suspense fallback={<Loading/>}>
          <SignUpForm/>
        </Suspense>
    </main>
  )
}

export default SignUpPage