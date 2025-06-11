import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'PGDCA',
      institution: 'National Board Of Computer Education',
      grade: 'A',
      period: '2023 - 2024'
    },
    {
      id: 2,
      degree: 'B.Tech Mechanical Engineering',
      institution: 'Skyline Institute Of Engg. & Technology , AKTU',
      grade: 'A',
      period: '2015 - 2019'
    },
    {
      id:3,
      degree: 'Intermediate',
      institution: 'Kendriya vidyalaya sangathan',
      grade: 'A',
      period: '2014'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web developer',
      institution: 'Sharpener tech',
      period: '2022 - 2023'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">My <span>Education</span></h2>
        
        <div className="education-container">
          <div className="education-column">
            <h3 className="education-subtitle">Academic Education</h3>
            <div className="education-list">
              {educations.map(edu => (
                <div key={edu.id} className="education-item card">
                  <div className="education-item-header">
                    <span className="education-year">{edu.period}</span>
                    <h4 className="education-degree">{edu.degree}</h4>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-column">
            <h3 className="education-subtitle">Professional Courses</h3>
            <div className="education-list">
              {courses.map(course => (
                <div key={course.id} className="education-item card">
                  <div className="education-item-header">
                    <span className="education-year">{course.period}</span>
                    <h4 className="education-degree">{course.title}</h4>
                  </div>
                  <p className="education-institution">{course.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 