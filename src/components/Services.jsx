import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Project Lifecycle Management',
      description: 'End-to-end project lifecycle management using Agile/Scrum methodologies, ensuring on-time and on-budget project delivery with clear documentation and tracking.',
      icon: 'tasks'
    },
    {
      id: 2,
      title: 'Team Leadership',
      description: 'Leading cross-functional teams of developers, designers, and QA specialists to execute complex projects with clear communication and goal alignment.',
      icon: 'users'
    },
    {
      id: 3,
      title: 'Technical Planning',
      description: 'Creating detailed API documentation, database schema designs, and technical specifications that align business requirements with technical implementation.',
      icon: 'clipboard-list'
    },
    {
      id: 4,
      title: 'Stakeholder Management',
      description: 'Effective communication with clients and stakeholders to gather requirements, provide updates, and ensure project success with high satisfaction rates.',
      icon: 'comments'
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