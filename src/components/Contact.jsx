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
          <a href="mailto:vipuldhiman24@gmail.com"><MdEmail size={24}/> vipuldhiman24@gmail.com</a>
          <a href="https://www.linkedin.com/in/vipul-dhiman-56019a231/" target="_blank" rel="noreferrer"><FaLinkedin size={24}/> LinkedIn</a>
          <a href="https://github.com/vipuldhiman24" target="_blank" rel="noreferrer"><FaGithub size={24}/> GitHub</a>
          <p>
            <FaPhone size ={24}/>    7042857001
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
