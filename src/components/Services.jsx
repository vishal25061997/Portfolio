import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Game Development Lifecycle',
      description: 'Full-cycle Unity game development from prototyping to deployment, optimizing performance across platforms (PC, mobile, console) using C# and Unity Engine.',
      icon: 'code'
    },
    {
      id: 2,
      title: 'Gameplay Systems',
      description: 'Implementing core gameplay mechanics, AI behaviors, and physics systems with clean, modular C# code and Unity’s scripting API.',
      icon: 'gamepad'
    },
    {
      id: 3,
      title: 'Code Optimization',
      description: 'Profiling and optimizing games for FPS, memory usage, and asset pipelines (textures, models, animations) for smooth performance.',
      icon: 'microchip'
    },
    {
      id: 4,
      title: 'Cross-Team Collaboration',
      description: 'Working with artists, designers, and QA to implement assets, UI, and gameplay features while maintaining technical constraints.',
      icon: 'users-cog'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">My <span>Expertise</span></h2>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card card">
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 