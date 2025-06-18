import React, { useState, useRef, useEffect } from 'react';
import './AllProjects.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';
import bankopolyImage from '../assets/bankopoly.avif';
import voxelImage from '../assets/voxel.png';
import tictactoeImage from '../assets/tictactoe.jpg';
import kitchenImage from '../assets/kitchen.png';
import bouncingBallImage from '../assets/bouncingball.jpg';
import fpsShooterImage from '../assets/fpsshooter.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  const projectFilters = [
    { id: 'all', name: 'All' },
    { id: 'websites', name: 'Websites' },
    { id: 'games', name: 'Games' },
    { id: 'apps', name: 'Apps'},
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Bankopoly.io',
      description: 'A multiplayer dice-based board game with faction battles. Players purchase tiles, pay rent, and engage in strategic zone control. Built with Unity and integrated with Cardano blockchain for NFT skins.',
      category: ['games', 'blockchain'],
      image: bankopolyImage,
      url: 'https://bankopoly.io',
    },
    {
      id: 2,
      title: 'Bouncing Ball Physics Game',
      description: 'A dynamic physics-based game with realistic ball interactions, bounce mechanics, and obstacle courses. Built with Unity’s PhysX engine for accurate collision responses.',
      category: ['games'],
      image: bouncingBallImage,
      url: '#',
    },
    {
      id: 3,
      title: 'Unbounded Racing',
      description: 'Blockchain-integrated voxel-style racing game with PvP/vsBot modes. Players log in via Cardano wallets to unlock NFT-based vehicles and tracks.',
      category: ['games', 'blockchain'],
      image: voxelImage,
      url: 'https://voxel-game.abhiwandemos.com/',
    },
    {
      id: 4,
      title: '3D Kitchen Configurator',
      description: 'Interactive 3D kitchen designer with real-time model/texture swapping, lighting adjustments, and VR-ready ambience. Enables users to visualize custom layouts with realistic materials and lighting.',
      category: ['3d'],
      image: kitchenImage,
      url: 'https://amazing-lebkuchen-k7.netlify.app/',
    },
    {
      id: 5,
      title: 'FPS Shooter (Multiplayer)',
      description: 'First-person shooter with Photon-powered multiplayer, featuring weapon mechanics, kill/death tracking, and customizable maps. Implemented FPS controls using Cinemachine and animation rigging.',
      category: ['games'],
      image: fpsShooterImage,
      url: '#',
    },
    {
      id: 6,
      title: 'Multiplayer Tic-Tac-Toe',
      description: 'Real-time PvP Tic-Tac-Toe using Photon Unity Networking (PUN), featuring synchronized gameplay, raise events for turn management, and cross-platform compatibility.',
      category: ['games'],
      image: tictactoeImage,
      url: '#',
    }
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
          <h2 className="section-title">My All Time <span>Works</span></h2>
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
  <img src={project.image} alt={project.title} />
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