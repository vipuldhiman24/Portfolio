import React from 'react';
import './Projects.css';
import {FaGithub } from 'react-icons/fa';

const projectList = [
  { title: 'Springboot and React Authorization', image: '', github: 'https://github.com/vipuldhiman24/auth-service-springboot.git', live: '' },
  { title: 'Employee Management System', image: '', github: 'https://github.com/vipuldhiman24/employee-management-backend.git', live: '' },
  { title: 'Movie Tracker App', image: '', github: '', live: '' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section" data-aos="fade-up">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectList.map(({ title, github, live }, index) => (
            <div key={index} className="project-card">
              <h3>{title}</h3>
              <div className="project-links">
                <a className="btn" href={github || "#"} target="_blank" rel="noreferrer"><FaGithub  size={28} /></a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
