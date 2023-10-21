import React from 'react'
import Homepage from './pages/Homepage'
import ServicesPage from './pages/ServicesPage'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './pages/LoginPage'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/login' element={<Loginpage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
