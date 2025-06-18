import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Vishal<span>Yadav</span></h2>
            <p>Unity Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/allprojects"><text style={{color:'var(--primary-green)'}}>Projects</text></a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="/blogs"><text style={{color:'var(--primary-green)'}}>Blogs</text></a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> VishalYadav64@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 8383826599</p>
            <p><i className="fas fa-map-marker-alt"></i> Delhi, India</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/VishalYadav//" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/VishalYadav" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/VishalYadav" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="VishalYadav64@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vishal Yadav. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;