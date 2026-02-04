import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaCertificate, FaShieldAlt, FaBug, FaNetworkWired, FaDocker, FaLinux } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
  const ref = useScrollAnimation();

  const certifications = [
    { id: 1, name: 'Certified Information Technology Principles (C)ITP', icon: <FaCertificate />, issuer: 'ITI', year: '2023' },
    { id: 2, name: 'OWASP Top 10 for Docker, Containers and Kubernetes Security', icon: <FaDocker />, issuer: 'Udemy', year: '2024' },
    { id: 3, name: 'Hands-on Penetration Testing with Netcat', icon: <FaBug />, issuer: 'Udemy', year: '2024' },
    { id: 4, name: 'Network Defense', icon: <FaNetworkWired />, issuer: 'Cybrary', year: '2023' },
    { id: 5, name: 'Practical Bug Bounty Hunting for Hackers and Pentesters', icon: <FaBug />, issuer: 'Udemy', year: '2024' },
    { id: 6, name: 'Master Wi-Fi Ethical Hacking - Evil Twin Attacks', icon: <FaNetworkWired />, issuer: 'Udemy', year: '2023' },
    { id: 7, name: 'Cyber Threat Management', icon: <FaShieldAlt />, issuer: 'Cybrary', year: '2023' },
    { id: 8, name: 'Black Hat C++: C++ For Pentesters', icon: <FaLinux />, issuer: 'Udemy', year: '2023' },
    { id: 9, name: 'Ethical Hacker', icon: <FaShieldAlt />, issuer: 'EC-Council', year: '2022' },
    { id: 10, name: 'Endpoint Security', icon: <FaShieldAlt />, issuer: 'Cybrary', year: '2023' },
    { id: 11, name: 'Digital Forensics Essentials (DFE)', icon: <FaCertificate />, issuer: 'EC-Council', year: '2023' },
    { id: 12, name: 'Additional Security Certifications', icon: <FaCertificate />, issuer: 'Various', year: '2022-2024' },
  ];

  return (
    <section id="certifications" ref={ref} className="certifications fade-in">
      <div className="certifications-container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Certifications across offensive, defensive, and infrastructure security.
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="cert-card glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </div>
              <div className="cert-badge">
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
