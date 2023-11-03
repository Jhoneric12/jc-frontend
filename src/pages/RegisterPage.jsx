import React from 'react'
import { lazy, Suspense } from 'react'
import Loading from '../Spinners/Loading'
const RegisterForm = lazy(() => import('../views/SignUp/RegisterForm'))

function RegisterPage() {
  return (
    <main className='homepage'>
        <Suspense fallback={<Loading/>}>
          <RegisterForm/>
        </Suspense>
    </main>
  )
}

export default RegisterPage