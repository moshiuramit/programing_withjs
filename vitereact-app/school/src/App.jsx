import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Rnd from './pages/Rnd'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/rnd' element={<Rnd />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App