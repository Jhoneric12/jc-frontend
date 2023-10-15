import React from 'react'
import Homepage from './pages/Homepage'
import ServicesPage from './pages/ServicesPage'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
