import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-container">
        {/* Left: Image */}
        <div className="header-img"></div>

        {/* Right: Content */}
        <div className="header-content">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Vipul Dhiman</h1>
          <h3 className="role">Associate Software Engineer</h3>

          <div className="header-buttons">
            <a href="/Vipul_Dhiman24.pdf" className="btn primary" download>
              Download Resume
            </a>
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
          </div>

          <div className="social-links">
                        <a
              href="https://www.linkedin.com/in/vipul-d24"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vipuldhiman24"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
