import React from 'react'
import {lazy, Suspense} from 'react'
const Homepage = lazy(() => import('./pages/Homepage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import RegisterPage from './pages/RegisterPage'
import ReviewInformation from './pages/ReviewInformation'
import SendOTPpage from './pages/SendOTPpage'
import EnterOTPpage from './pages/EnterOTPpage'
import Loading from './Spinners/Loading'

function App() {

  return (
    <div>
      <Router>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/services' element={<ServicesPage/>}/>
          </Routes>
        </Suspense>
        <Routes>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/review-information' element={<ReviewInformation/>}/>
          <Route path='/send-otp' element={<SendOTPpage/>}/>
          <Route path='/enter-otp' element={<EnterOTPpage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
