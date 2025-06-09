import React from 'react';
import './Projects.css';

const projectList = [
  { title: 'Quiz App Backend', image: '', github: '', live: '' },
  { title: 'Employee Management System', image: '', github: '', live: '' },
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
                <a className="btn" href={github || "#"} target="_blank" rel="noreferrer">Code</a>
                <a className="btn" href={live || "#"} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
