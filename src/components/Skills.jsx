import React from 'react';
import './Skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <section id="skills" className="skills section" data-aos="fade-up">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-boxes">
          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>HTML</h4><small>Experienced</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>CSS</h4><small>Experienced</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>JavaScript</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>ReactJS</h4><small>Intermediate</small></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>Spring Boot</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>JPA</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>Maven</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>MongoDB</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>PostgreSQL</h4><small>Intermediate</small></div>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>Git</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>Azure</h4><small>begginer(Az-900)</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>SnowflakeDB</h4><small>Intermediate</small></div>
            </div>
            <div className="skill-item">
              <BsPatchCheckFill className="icon" />
              <div><h4>Linux</h4><small>Intermediate</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
