import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://github.com/HungerBalls"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:diogortcunha@gmail.com"
            className="footer-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        
        <div className="footer-text">
          <p>
            Built with React | Cybersecurity Portfolio © 2026
          </p>
          <p className="footer-subtitle">
            Cybersecurity Specialist | Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
