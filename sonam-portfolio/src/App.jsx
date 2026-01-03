import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/heropage/HeroSection';
import Aboutsec from './components/About/Aboutsec';
import Projectsec from './components/Project/Projectsec';
import './styles/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Aboutsec/>
   <Projectsec/>
    </>
  )
}

export default App
