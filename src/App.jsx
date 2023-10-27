import React from 'react'
import Homepage from './pages/Homepage'
import ServicesPage from './pages/ServicesPage'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import RegisterPage from './pages/RegisterPage'
import ReviewInformation from './pages/ReviewInformation'
import SendOTPpage from './pages/SendOTPpage'
import EnterOTPpage from './pages/EnterOTPpage'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
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
