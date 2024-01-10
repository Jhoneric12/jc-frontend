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
import { ProtectedRoutes } from './Route/ProtectedRoute'
import {AdminRoutes} from './Route/AdminRoute'
import PatientDashboard from './views/Dashboard/PatientDashboard'
import AdminLogin from './views/Admin/Login'
import AdminDashboard from './views/Admin/Dashboard'
import Patients from './views/Admin/Patients'

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
          <Route path='/admin-login' element={<AdminLogin/>}/>
        </Routes>
        
        {/* Protected Routes */}
        <Routes>
          <Route element={<ProtectedRoutes/>} >
            <Route path='/patient/dashboard' element={<PatientDashboard/>}/>
          </Route>
        </Routes>

        
        {/* Protected Admin Routes  */}
        <Routes>
          <Route element={<AdminRoutes/>}>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
            <Route path='/admin/patients' element={<Patients/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
