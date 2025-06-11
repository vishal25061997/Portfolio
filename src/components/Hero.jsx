import React, { useEffect, useRef } from 'react';
import './Hero.css';
import ParticleBackground from './ParticleBackground';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import vishalImage from '../assets/vishalyadav.jpeg';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      contentRef.current.querySelectorAll('h3, h1, p, .hero-btns, .hero-social'),
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        ease: 'power3.out'
      }
    ).fromTo(
      imageRef.current,
      { 
        scale: 0.8, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        ease: 'power3.out'
      },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content" ref={contentRef}>
          <h3>Hello, I'm Vishal Yadav</h3>
          <h1>Unity <span>Game Developer</span></h1>
          <p>
          As a passionate and dedicated individual aspiring to establish a career in Unity development. I bring a fresh perspective, coupled with a strong foundation in programming fundamentals.I am excited about the prospect of contributing my skills and learning from seasoned professionals to make meaning full contribution in the realm of Unity development.
          </p>
          <div className="hero-btns">
            <motion.a 
              //href="#contact"
              href="/VISHAL_Unity-2.pdf"
              download="VISHAL_Unity-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </div>

          <div className="hero-social">
            <motion.a 
              href="https://www.linkedin.com/in/Vishal-Yadav-675848207/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a 
              href="https://github.com/vishal25061997" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://VishalYadav23.artstation.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-artstation"></i>
            </motion.a>
            <motion.a 
              href="mailto:vishalyadav.unique@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
          </div>
        </div>

        <div className="hero-image" ref={imageRef}>
        <div className="hero-image" ref={imageRef}>
  <div className="hero-image-wrapper">
    {/* Profile Image */}
    <div className="profile-image-placeholder">
      <img src={vishalImage} alt="Profile" className="profile-image" />
    </div>
  </div>
</div>
</div>
      </div>
      
      <ParticleBackground />
      <ScrollDown />
    </section>
  );
};

export default Hero; 