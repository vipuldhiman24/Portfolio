import React from 'react';
import './About.css';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/* Experience Card */}
        <div className="about-card">
          <FaBriefcase className="about-icon" />
          <h3>Experience</h3>
          <p><strong>1 Year 10 Months</strong></p>
          <ul>
            <li><strong>Associate Software Engineer</strong><br />
              Tech Mahindra<br />
              Aug 2023 – Present
            </li>
            <li><strong>React Frontend Developer Intern</strong><br />
              Yamak.ai<br />
              June 2023-August 2023
            </li>
          </ul>
        </div>

        {/* Education Card */}
        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3>Education</h3>
          <p><strong>B.Tech in Computer Science</strong></p>
          <p>PDM University, Bahadurgarh</p>
        </div>
      </div>

      <p className="about-description">
        Passionate developer with experience in full-stack development, cloud databases, and real-world project delivery using technologies like React, Spring Boot, and SQL.
      </p>
    </section>
  );
};

export default About;
