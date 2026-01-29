import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import Project from './Pages/Project'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About'element={<About/>}/>
        <Route path='Skills'element={<Skills/>}/>
        <Route path='Experience'element={<Experience/>}/>
        <Route path='Contact'element={<Contact/>}/>
     <Route path='Project'element={<Project/>}/>
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
