import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <ul className="footer-links">
          <li><Link to="about" smooth duration={500}>About</Link></li>
          <li><Link to="skills" smooth duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>
        <small>© 2025 Vipul Dhiman. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
