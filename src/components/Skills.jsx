import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coreSkills = [
    { name: 'Unity Engine', level: 95 },
    { name: 'C# Programming', level: 90 },
    { name: 'Gameplay Systems', level: 85 },
    { name: 'Physics & Animation', level: 80 },
    { name: 'AI Programming', level: 75 }
  ];

  const technicalSkills = [
    { name: '3D Math/Shaders', level: 85 },
    { name: 'Multiplayer (PUN/Netcode)', level: 80 },
    { name: 'Mobile Optimization', level: 90 },
    { name: 'VR/AR Development', level: 75 },
    { name: 'UI/UX Implementation', level: 85 }
  ];

  const tools = [
    { name: 'Git/Version Control', level: 90 },
    { name: 'Blender/Maya', level: 70 },
    { name: 'Visual Studio/Rider', level: 85 },
    { name: 'Shader Graph', level: 75 },
    { name: 'Unity Addressables', level: 80 }
  ];

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: { 
      scale: 1.1, 
      transition: { 
        type: "spring", 
        stiffness: 300 
      } 
    }
  };

  const renderSkillBars = (skills, delay = 0) => (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-info">
            <h4>{skill.name}</h4>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: delay + index * 0.1 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <div className="skill-bar">
            <motion.div
              className="skill-progress"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : {}}
              transition={{ 
                duration: 0.8, 
                delay: delay + index * 0.1,
                ease: "easeOut" 
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Game Dev <span>Skills</span></h2>
        </AnimatedSection>

        <div className="skills-container">
          <AnimatedSection delay={0.1} className="skills-column">
            <h3><i className="fas fa-gamepad"></i> Core Unity Skills</h3>
            {renderSkillBars(coreSkills, 0.2)}
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="skills-column">
            <h3><i className="fas fa-microchip"></i> Technical Skills</h3>
            {renderSkillBars(technicalSkills, 0.4)}
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="skills-column">
            <h3><i className="fas fa-tools"></i> Tools & Pipeline</h3>
            {renderSkillBars(tools, 0.6)}
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.7}>
          <div className="skill-icons">
            <motion.div
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.2 }}
            >
              <i className="fab fa-unity"></i>
              <span>Unity Engine</span>
            </motion.div>

            <motion.div
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.3 }}
            >
              <i className="fas fa-code"></i>
              <span>C# Scripting</span>
            </motion.div>

            <motion.div
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.4 }}
            >
              <i className="fas fa-network-wired"></i>
              <span>Multiplayer</span>
            </motion.div>

            <motion.div
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.5 }}
            >
              <i className="fas fa-mobile-alt"></i>
              <span>Mobile Optim.</span>
            </motion.div>

            <motion.div
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.6 }}
            >
              <i className="fas fa-vr-cardboard"></i>
              <span>VR/AR</span>
            </motion.div>

            <motion.div
              className="skill-icon"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.7 }}
            >
              <i className="fas fa-robot"></i>
              <span>Game AI</span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;