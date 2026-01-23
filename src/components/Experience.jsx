import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaShieldAlt, FaCheckCircle, FaLaptopCode, FaTools } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const ref = useScrollAnimation();

  const experiences = [
    {
      id: 1,
      title: 'CyberSecurity Specialist',
      company: 'Defense & Security Operations',
      period: '2022 - 2025',
      icon: <FaShieldAlt />,
      responsibilities: [
        'Malware Analysis and Detection',
        'Vulnerability Assessment',
        'Python automation and scripting',
        'Penetration Testing operations',
        'Network security monitoring',
      ],
    },
    {
      id: 2,
      title: 'Compliance & Security Analyst',
      company: 'Technology Corporation',
      period: '2022',
      icon: <FaCheckCircle />,
      responsibilities: [
        'SAP system management',
        'Excel data analysis',
        'Compliance reporting',
      ],
    },
    {
      id: 3,
      title: 'IT Consultant',
      company: 'Technology Services',
      period: '2021 - 2022',
      icon: <FaLaptopCode />,
      responsibilities: [
        'Client support and consulting',
        'System integration',
      ],
    },
    {
      id: 4,
      title: 'IT Technician',
      company: 'Network Solutions',
      period: '2020',
      icon: <FaTools />,
      responsibilities: [
        'IT Equipment Installation',
        'IP Configuration on Printers',
        'Network Computer Configuration',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="experience fade-in">
      <div className="experience-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey through the cybersecurity and IT industry
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content glass">
                <div className="timeline-icon">{exp.icon}</div>
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
