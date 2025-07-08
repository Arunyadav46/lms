import React from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Dashboard1 from './Components/Dashboard1'
import Adminlogin from './Components/Adminlogin'
import Sidebar from './Components/Sidebar'
import { Toaster } from 'react-hot-toast';


function App() {
  
  const location = useLocation();

  // Show Sidebar only when path contains "/dashboard"
  const shouldShowSidebar = location.pathname.includes("/dashboard");

  return (
    <div className='flex'>
        {shouldShowSidebar&& <Sidebar/>}
         <Toaster position="top-center" reverseOrder={false} />
      
   

      <div className='w-full  bg-gray-100'>
        <nav className='flex h-[10vh] mt-10 justify-center gap-10 text-xl'>
    <Link to="/registration">Home</Link>
    <Link to="/registration">Registration</Link>
    <Link to="/login">Admin Login</Link>
   </nav>
      <Routes>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/dashboard' element={<Dashboard1/>}/>
        <Route path='/dashboard/course' element={<Dashboard/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App