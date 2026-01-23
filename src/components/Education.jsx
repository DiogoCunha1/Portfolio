import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const ref = useScrollAnimation();

  const education = [
    {
      id: 1,
      degree: 'Cybersecurity',
      institution: 'Higher Education Institution',
      period: '2024 - 2026',
      level: 'Level 5 Technician',
      icon: <FaGraduationCap />,
      description: 'Advanced studies in cybersecurity, focusing on penetration testing, network defense, and secure system architecture.',
    },
    {
      id: 2,
      degree: 'Management and Programming of Computer Systems',
      institution: 'Secondary Education',
      period: '2017 - 2020',
      level: 'Level 4 Qualification',
      icon: <FaLaptopCode />,
      description: 'Foundation in computer systems, programming, and IT management.',
    },
  ];

  return (
    <section id="education" ref={ref} className="education fade-in">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic background in cybersecurity and computer systems
        </p>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card glass"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <span className="education-period">{edu.period}</span>
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <span className="education-level">{edu.level}</span>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
