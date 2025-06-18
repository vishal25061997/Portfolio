import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Jr. Unity Developer',
      company: 'Abhiwan Technology Pvt Ltd',
      location: 'Noida, India',
      period: <text style={{color:'#000'}}>March 2024 - Present</text>,
      responsibilities: [
        'Leading and managing teams of developers and designers to successfully deliver 10+ projects, including web apps, games, VR apps, and blockchain-based projects.',
        'Overseeing project lifecycles from planning to deployment, ensuring on-time and on-budget execution.',
        'Communicating technical requirements effectively with stakeholders and leading the creation of detailed API documentation and database schema designs, contributing to a 95% client satisfaction rate.',
        'ontributing to increasing user engagement by 30% on Cardano blockchain based apps and NFT based games.',
        'Collaborated with cross-functional teams to lead project execution, manage timelines, and ensure high-quality deliverables.',
        'Delivering comprehensive client solutions across Risk Management and QA domains, aligning scope, resources, and timelines with Agile/Scrum methodologies.'
      ]
    },
    {
      id: 2,
      position: 'Unity Developer Intern',
      company: 'Bharti Airtel',
      location: 'Gurugram, Haryana',
      period: <text style={{color:'#000'}}>February 2023 - June 2023</text>,
      responsibilities: [
        'Deployed MPLS & SD-WAN for B2B enterprise clients, including IOCL and Maruti Suzuki.',
        'Coordinated with network planning, security, and CX teams to ensure seamless deployment accelerating project timelines by 20%.',
        'Implemented client feedback loops using daily logs and reporting systems, enhancing SLA adherence by 15%.',
        'Integrated productivity tools like Jira into project workflows, leading to a 15% increase in team efficiency.'
      ]
    },
    {
      id: 3,
      position: 'Network Engineer',
      company: 'Excitel Broadbands',
      location: 'Delhi, India',
      period: <text style={{color:'#000'}}>August 2022 - September 2022</text>,
      responsibilities: [
        'Designed and optimized PAN & LAN infrastructures, contributing to a 20% improvement in network stability of internal systems.',
        'Assisted in planning Adhoc networks and enhanced router configurations, resulting in 15% better coverage and reduced latency.',
        'Supported network topology analysis and optimization, helping improve bandwidth distribution efficiency by 25%.',
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