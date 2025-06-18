import React, { useEffect, useRef } from 'react';
import './Hero.css';
import ParticleBackground from './ParticleBackground';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import gsap from 'gsap';

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
          <h3>Hello, I am Vishal Yadav 👋🏻</h3>
          <h1>Unity <span>Developer</span></h1>
          <p>
          Results-driven Unity Developer with a strong background in building Games and interactive 2D & 3D Applications. Experienced in optimizing performance, implementing gameplay mechanics, and collaborating with artists & designers to deliver polished, high-performance projects. Proficient in C#, shaders, and Unitys scripting API, with a focus on clean code and scalable solutions.
          </p>
          <div className="hero-btns">
            <motion.a 
              //href="#contact"
              href="/Resume.pdf"
              download="Vishal_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <text style={{color:"#fff"}}>Download Resume</text>
            </motion.a>
            <motion.a 
              href="/blogs" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read My Blogs
            </motion.a>
          </div>

          <div className="hero-social">
            <motion.a 
              href="https://linkedin.com/in/vishal-yadav-050b39188/" 
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
              href="https://www.instagram.com/vishalyadav.babina/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
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
          <div className="hero-image-wrapper">
            {/* Placeholder for profile image */}

          </div>
        </div>
      </div>
      
      <ParticleBackground />
      <ScrollDown />
    </section>
  );
};

export default Hero; 