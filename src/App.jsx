


import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'

const App = () => {


  return (


     <div className="bg-[#5DADE2] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About/>

    </div>
    
  )
}

export default App