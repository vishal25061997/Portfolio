import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Game Developer',
      company: 'Abhiwan Technology Pvt Ltd',
      location: 'Noida, India',
      period: 'May 2024 - Present',
      responsibilities: [
        'Spearheaded the development of multiplayer systems, VR simulations, and game optimization for PC, mobile, and VR platforms.',
        'Led and successfully deployed multiple projects internationally.',
        'Developed and optimized Android and PC multiplayer games, ensuring seamless LAN and Steam networking with high-performance gameplay.',
        'Optimized game performance, reducing memory usage by 30% and increasing FPS by 25% for a smoother experience.',
        'Collaborated with cross-functional teams to lead project execution, manage timelines, and ensure high-quality deliverables.',
        'Provided technical mentorship to junior developers, enhancing team efficiency and project outcomes.'
      ]
    },
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