import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  const projectFilters = [
    { id: 'all', name: 'All' },
    { id: 'pc', name: 'PC' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'real estate', name: 'Real Estate' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Bankopoly.io',
      description: 'A blockchain-based NFT marketplace on the Cardano network, featuring secure wallet integration, NFT minting capabilities, and auction functionality.',
      category: ['pc', 'blockchain'],
      image: '/images/project-placeholder-1.jpg',
      url: 'https://VishalYadav23.artstation.com/projects/K3aOqG'
    },
    {
      id: 2,
      title: 'Unbounded Racing',
      description: 'An Architectural Visualization VR experience, deployed internationally, featuring high-detail real-time rendering and interactive walkthroughs.',
      category: ['pc', 'blockchain'],
      image: '/images/project-placeholder-2.jpg',
      url: 'https://VishalYadav23.artstation.com/projects/P6n9Qn'
    },
    {
        id: 3,
        title: 'Kitchen Configurator',
        description: 'A cooperative multiplayer game with combat and puzzle-solving challenges, optimized for both PC and mobile platforms.',
        category: ['real estate'],
        image: '/images/project-placeholder-2.jpg',
        url: 'https://VishalYadav23.artstation.com/projects/RKll3X'
    },
    {
      id: 4,
      title: 'Mystic Motors',
      description: 'A Harry Potter-inspired strategic game where players utilize diverse magic spells, each with distinct mechanics and tactical advantages.',
      category: ['mobile'],
      image: '/images/project-placeholder-4.jpg',
      url: 'https://VishalYadav23.artstation.com/projects/EzVvN4'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  useEffect(() => {
    // Animate projects when filter changes
    const projectCards = projectsRef.current.querySelectorAll('.project-card');
    
    gsap.fromTo(
      projectCards,
      { 
        scale: 0.8, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    );
  }, [filteredProjects]);

  const handleTilt = (e, cardElement) => {
    if (window.innerWidth <= 768) return;
    
    const card = cardElement;
    const cardBounds = card.getBoundingClientRect();
    const centerX = cardBounds.left + cardBounds.width / 2;
    const centerY = cardBounds.top + cardBounds.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateY = ((mouseX - centerX) / (cardBounds.width / 2)) * 5;
    const rotateX = ((centerY - mouseY) / (cardBounds.height / 2)) * 5;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleTiltExit = (cardElement) => {
    gsap.to(cardElement, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">My Recent <span>Works</span></h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="project-filters">
            {projectFilters.map(filter => (
              <motion.button 
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              onMouseMove={(e) => handleTilt(e, e.currentTarget)}
              onMouseLeave={(e) => handleTiltExit(e.currentTarget)}
            >
              <div className="project-img">
                <div className="project-img-placeholder">
                  {project.category.includes('vr') && (
                    <i className="fas fa-vr-cardboard project-icon"></i>
                  )}
                  {project.category.includes('pc') && !project.category.includes('vr') && (
                    <i className="fas fa-laptop project-icon"></i>
                  )}
                  {project.category.includes('mobile') && !project.category.includes('pc') && (
                    <i className="fas fa-mobile-alt project-icon"></i>
                  )}
                </div>
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.category.map(cat => (
                      <span key={cat} className="project-tag">
                        {projectFilters.find(f => f.id === cat)?.name}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.url || "#"} 
                    className="project-link"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </motion.a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 