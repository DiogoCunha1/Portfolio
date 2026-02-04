import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  FaShieldAlt,
  FaPython,
  FaReact,
  FaDatabase,
  FaNetworkWired,
  FaCode,
  FaBug,
} from 'react-icons/fa';
import { SiKalilinux } from 'react-icons/si';
import '../styles/About.css';

const About = () => {
  const ref = useScrollAnimation();

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '12+', label: 'Certifications' },
    { value: '10+', label: 'Security Projects' },
    { value: '2', label: 'CTF Platforms' },
  ];

  const skillCategories = [
    {
      category: 'Security & Penetration Testing',
      skills: [
        { name: 'Cybersecurity', level: 95, icon: <FaShieldAlt /> },
        { name: 'Penetration Testing', level: 85, icon: <SiKalilinux /> },
        { name: 'Malware Analysis', level: 88, icon: <FaBug /> },
        { name: 'Network Security', level: 92, icon: <FaNetworkWired /> },
      ],
    },
    {
      category: 'Development & Automation',
      skills: [
        { name: 'Python', level: 90, icon: <FaPython /> },
        { name: 'JavaScript/React', level: 80, icon: <FaReact /> },
        { name: 'Linux Systems', level: 85, icon: <FaCode /> },
        { name: 'SQL Databases', level: 75, icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section id="about" ref={ref} className="about fade-in">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              <div className="image-placeholder">DC</div>
            </div>
          </div>
          
          <div className="about-text-content">
            <p className="about-text">
              Cybersecurity specialist with 2+ years in defense operations, focused on penetration testing,
              malware analysis, and security automation. Strong in Python development and network security,
              building resilient systems and practical tooling.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Skills</h3>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h4 className="skill-category-title">{category.category}</h4>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
