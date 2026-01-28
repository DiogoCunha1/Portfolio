import React, { useState, useEffect } from 'react';
import '../styles/SectionIndicators.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'ctf', label: 'CTF' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SectionIndicators = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px',
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-indicators">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`indicator ${activeSection === id ? 'active' : ''}`}
          onClick={() => scrollToSection(id)}
          aria-label={`Scroll to ${label}`}
          title={label}
        >
          <span className="indicator-tooltip">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SectionIndicators;
