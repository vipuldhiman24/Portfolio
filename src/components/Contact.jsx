import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="contact section" data-aos="fade-up">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/vipul-d24" target="_blank" rel="noreferrer"><FaLinkedin size={24}/> LinkedIn</a>
          <a href="https://github.com/vipuldhiman24" target="_blank" rel="noreferrer"><FaGithub size={24}/> GitHub</a>
          <a href='tel:7042857001'>
            <FaPhone size ={24}/>    7042857001
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
