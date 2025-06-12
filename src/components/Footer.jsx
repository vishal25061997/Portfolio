import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Tushar<span>Kaw</span></h2>
            <p>Project Manager</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              {/* <li><a href="https://dev.to/winterturtle23/" target="_blank">Blog</a></li> */}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> tusharkaw64@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 8383826599</p>
            <p><i className="fas fa-map-marker-alt"></i> Delhi, India</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tusharkaw//" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/TusharKaw" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/tusharkaw" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="tusharkaw64@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tushar Kaw. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;