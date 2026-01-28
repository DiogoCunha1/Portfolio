import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaTerminal, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const ref = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'Blue Team Defense Scripts',
      description:
        'Collection of Python scripts designed for cybersecurity monitoring and defense operations. Automated tools for threat detection, log analysis, and incident response in blue team operations.',
      gradient: 'linear-gradient(135deg, #0066cc 0%, #00ff41 100%)',
      icon: <FaShieldAlt />,
      overlayText: 'Blue Team Defense',
      tags: ['Python', 'Cybersecurity', 'Monitoring', 'Defense Automation', 'Security Operations'],
      github: 'https://github.com/HungerBalls/Blue-Team-Scripts',
      demo: null,
    },
    {
      id: 2,
      title: 'CarapauCracker - Security Analysis Tool',
      description:
        'Advanced Python-based security analysis and testing framework. Developed for penetration testing and vulnerability assessment with automated shell scripting capabilities.',
      gradient: 'linear-gradient(135deg, #ff0041 0%, #00ff41 100%)',
      icon: <FaTerminal />,
      overlayText: 'Security Analysis',
      tags: ['Python', 'Shell Scripting', 'Penetration Testing', 'Security Analysis', 'Automation'],
      github: 'https://github.com/HungerBalls/CarapauCracker',
      demo: null,
    },
    {
      id: 3,
      title: 'Cybersecurity Portfolio',
      description:
        'Modern, responsive portfolio website built with React featuring cybersecurity-themed design, glassmorphism effects, and smooth animations. Showcases professional experience and security projects.',
      gradient: 'linear-gradient(135deg, #0a192f 0%, #64ffda 100%)',
      icon: <FaCode />,
      overlayText: 'Portfolio Website',
      tags: ['React', 'JavaScript', 'HTML5/CSS3', 'Responsive Design', 'UI/UX'],
      github: 'https://github.com/HungerBalls/Portfolio',
      demo: null,
    },
  ];

  return (
    <section id="projects" ref={ref} className="projects fade-in">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Selected security tooling, automation, and engineering work.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container">
                <div 
                  className="project-placeholder"
                  style={{ background: project.gradient }}
                >
                  <div className="project-placeholder-icon">
                    {project.icon}
                  </div>
                  <div className="project-placeholder-text">
                    {project.overlayText}
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View on GitHub"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Live Demo"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
