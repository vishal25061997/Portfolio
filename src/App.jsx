import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { motion } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
    },
  };

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h2>Tushar<span>Kaw</span></h2>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="app"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App
