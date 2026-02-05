import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import BackgroundParticles from './component/BackgroundParticles'
import Intro from './component/Intro'
import Projects from './sections/Projects'


const App = () => {

  const [intro,setIntro] = useState(false);
  return (

    <div>

  {!intro && <Intro setIntro={setIntro}/>}

   {intro &&  <div className='bg-black'>
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>}

    </div>
   
  )
}

export default App
