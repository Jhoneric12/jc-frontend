import React from 'react'
import { lazy, Suspense } from 'react'
const LogInForm = lazy(() => import('../views/LogIn/LogInForm'))
import Loading from '../Spinners/Loading'

function LogIn() {
  return (
    <main className='homepage'>
      <Suspense fallback={<Loading/>}>
        <LogInForm/>
      </Suspense>
    </main>
  )
}

export default LogIn