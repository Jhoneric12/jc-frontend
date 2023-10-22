import React from 'react'
import Homepage from './pages/Homepage'
import ServicesPage from './pages/ServicesPage'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import RegisterPage from './pages/RegisterPage'

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
        </Routes>
      </Router>
    </div>
  )
}

export default App
