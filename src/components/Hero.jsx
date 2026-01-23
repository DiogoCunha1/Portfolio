import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Cybersecurity Specialist', 'Full Stack Developer', 'Ethical Hacker'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Cybersecurity Professional</p>
          <h1 className="hero-title">
            <span className="highlight">Diogo Cunha</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-animation">{titles[titleIndex]}</span>
          </h2>
          <p className="hero-description">
            Specialized in Penetration Testing, Security Automation & Threat Defense
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/cv.pdf" className="btn btn-secondary" download>
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/HungerBalls"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:diogortcunha@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
