import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App