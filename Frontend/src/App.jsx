import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Booksforfree from './Components/Booksforfree'
import Home from './home/Home'
import Course from './Components/Course'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './Components/Signup'






function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}>

      </Route>
      <Route path='/course' element={<Courses></Courses>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
    </>
  )
}

export default App
