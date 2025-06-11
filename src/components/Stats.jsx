import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h3>10+</h3>
          <p>Projects<br />Delivered</p>
        </div>
        <div className="stat-item">
          <h3>2+</h3>
          <p>Years pf<br />Experience</p>
        </div>
        <div className="stat-item">
          <h3>95+</h3>
          <p>Stakeholder<br />Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>User Engagement<br />Increased</p>
        </div>
      </div>
    </section>
  );
};

export default Stats; 