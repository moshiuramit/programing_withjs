import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Rnd from './pages/Rnd'
import Stateandprops from './pages/Stateandprops'
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/rnd' element={<Rnd />} />
        <Route path='/stateandprops' element={<Stateandprops />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App