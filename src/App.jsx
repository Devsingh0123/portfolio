


import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {


  return (


     <div className="bg-[#5DADE2] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>

    </div>
    
  )
}

export default App