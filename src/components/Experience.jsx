import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Unity Developer',
      company: 'Abhiwan Technology Pvt Ltd',
      location: 'Noida, India',
      period: <text style={{color:'#fff'}}>May 2024 - Present</text>,
      responsibilities: [
        'Developed and shipped 5+ Unity projects (mobile/PC/VR) using C#, optimizing performance for 60+ FPS across devices.',
    'Implemented core gameplay mechanics including character controllers, AI behaviors, and physics interactions using Unity’s scripting API.',
    'Collaborated with 3D artists and designers to integrate assets, animations, and UI while maintaining technical constraints.',
    'Reduced memory usage by 40% through texture optimization, object pooling, and asset bundle management.',
    'Built multiplayer functionality using Photon PUN, synchronizing player actions and game states across networks.',
    'Created VR training simulations with MetaHumans and haptic feedback systems for immersive experiences.',
    'Debugged and fixed critical gameplay bugs, improving overall stability and user retention by 25%.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">My <span>Experience</span></h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content card">
                <div className="timeline-date">
                  <span>{exp.period}</span>
                </div>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <h5>{exp.location}</h5>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;