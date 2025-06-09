import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Vipul Dhiman</h1>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="about" smooth duration={500} offset={-60}>About</Link></li>
          <li><Link to="skills" smooth duration={500} offset={-60}>Skills</Link></li>
          <li><Link to="projects" smooth duration={500} offset={-60}>Projects</Link></li>
          <li><Link to="contact" smooth duration={500} offset={-60}>Contact</Link></li>
        </ul>

        {/* ACTIONS */}
        <div className="nav-actions">
  <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
    {darkMode ? '☀️' : '🌙'}
  </button>
  <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
    ☰
  </button>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
