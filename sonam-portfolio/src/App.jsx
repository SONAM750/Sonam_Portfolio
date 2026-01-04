import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/heropage/HeroSection';
import Aboutsec from './components/About/Aboutsec';
import Projectsec from './components/Project/Projectsec';
import './styles/style.css';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/experience/Experience';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Aboutsec/>
  
   <Skills/>
    <Experience/>
   <Projectsec/>
   <Contact />
   <Footer />
    </>
  )
}

export default App
