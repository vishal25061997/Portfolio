import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
  <div className="stat-item">
    <h3>5+</h3>
    <p>Games<br />Developed</p>
  </div>
  <div className="stat-item">
    <h3>200k+</h3>
    <p>Total<br />Global Users</p>
  </div>
  <div className="stat-item">
    <h3>4.8★</h3>
    <p>Average<br />Rating</p>
  </div>
  <div className="stat-item">
    <h3>90%</h3>
    <p>Performance<br />Optimized</p>
  </div>
</div>
    </section>
  );
};

export default Stats; 