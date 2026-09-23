import { useState } from 'react'

// =========import pages====================

import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Post from './Pages/Post'
import About from './Pages/About'
// =========import pages====================
import ScrollToTop from './Pages/ScrollToTop'

import { Route,Routes } from 'react-router-dom'




function App() {
 




   

  return (
    <>
    <ScrollToTop/>

  

    <Routes>

      <Route path='/'            element={<Signup/>}   />
      <Route path='/Login'       element={<Login/>}    />
      <Route path='/Register'    element={<Register/>} />  
      <Route path='/Home'        element={<Home/>}     />
      <Route path="/profile/:id" element={<Profile/>}  />  
      <Route path='/Post'        element={<Post/>}     />
      <Route path='/about'       element={<About/>}    />
      

    </Routes>
    

  
    </>
  )
}

export default App
