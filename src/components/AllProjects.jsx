import React, { useState, useRef, useEffect } from 'react';
import './AllProjects.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';
import bankopolyImage from '../assets/bankopoly.avif';
import betbyheartImage from '../assets/betbyheart.jpg';
import royalChessImage from '../assets/royalchess.jpg';
import nachosNFTImage from '../assets/nachos.jpg';
import chatroomImage from '../assets/chatroom.png';
import lunaiImage from '../assets/lunai.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);

  const projectFilters = [
    { id: 'all', name: 'All' },
    { id: 'websites', name: 'Websites' },
    { id: 'games', name: 'Games' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luna AI',
      description: 'An AI platform where user can create their virtual AI girlfriends / AI influencers, chat with them, create videos with them or advertise their products.',
      category: ['websites'],
      image: lunaiImage,
      url: 'https://github.com/TusharKaw/LUNA-AI'
    },
    {
      id: 2,
      title: 'Bankopoly.io',
      description: 'A blockchain-based NFT WebGL Game on the Cardano network, featuring secure wallet connection, NFT skins, and multiplayer/vsBot gameplays.',
      category: ['games','blockchain'],
      image: bankopolyImage,
      url: 'https://bankopoly.io/'
  },
  {
    id: 3,
    title: 'NachosNFT',
    description: 'A unique web-based platform built on the Cardano blockchain, centered around upgradable NFTs and competitive gameplay mechanics.',
    category: ['websites','blockchain'],
    image: nachosNFTImage,
    url: 'https://www.nachoxyz.com/'
},
{
  id: 4,
  title: 'Bet By Heart',
  description: 'An interactive online betting platform featuring games like Blackjack, Teen Patti, Chess, Ludo, and Derby. Integrated referral and rewards systems to boost user engagement.',
  category: ['websites'],
  image: betbyheartImage,
  url: 'http://beta.betbyheart.in'
},
    {
      id: 5,
      title: 'Royal Chess',
      description: 'A live interactive online chess game with power-ups, transforming traditional chess into a gamified experience with over 500+ active users within the first month.',
      category: ['websites','games','blockchain'],
      image: royalChessImage,
      url: 'https://beta.royalchessclub.io/'
    },
    {
      id: 6,
      title: 'Personal Chatroom',
      description: 'A private discord like chatroom made by Me, I deploy this time to time on TOR browser with variable .onion links, to chat privately.',
      category: ['websites'],
      image: chatroomImage,
      url: 'https://github.com/TusharKaw/Personal-Chatroom'
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