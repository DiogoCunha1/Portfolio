import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaFileAlt, FaArrowRight, FaLock } from 'react-icons/fa';
import { SiHackthebox, SiTryhackme } from 'react-icons/si';
import '../styles/Writeups.css';

const Writeups = () => {
  const ref = useScrollAnimation();

  // Initially empty array - add write-ups here in the future
  const writeups = [];
  
  // Example structure for when adding write-ups:
  /*
  const writeups = [
    {
      id: 1,
      title: 'Machine Name',
      platform: 'HackTheBox',
      platformIcon: <SiHackthebox />,
      difficulty: 'Medium',
      difficultyColor: '#f59e0b', // Easy: #22c55e, Medium: #f59e0b, Hard: #ef4444
      date: 'January 2026',
      tags: ['Linux', 'Web', 'PrivEsc', 'SQLi'],
      preview: 'This machine involves web exploitation and privilege escalation...',
      link: '/writeups/machine-name', // or external link
      completed: true
    },
    // ... more write-ups
  ];
  */

  return (
    <section id="writeups" ref={ref} className="writeups fade-in">
      <div className="writeups-container">
        <h2 className="section-title">Write-ups & Walkthroughs</h2>
        <p className="section-subtitle">
          Detailed documentation of solved machines, CTF challenges, and security assessments
        </p>

        {writeups.length === 0 ? (
          // Empty state - Coming Soon
          <div className="writeups-empty">
            <div className="empty-icon">
              <FaFileAlt />
            </div>
            <h3>Coming Soon!</h3>
            <p className="empty-description">
              Detailed walkthroughs and write-ups will be published here soon.
            </p>
            <div className="empty-features">
              <div className="empty-feature">
                <SiHackthebox />
                <span>HackTheBox Machines</span>
              </div>
              <div className="empty-feature">
                <SiTryhackme />
                <span>TryHackMe Rooms</span>
              </div>
              <div className="empty-feature">
                <FaLock />
                <span>CTF Challenges</span>
              </div>
            </div>
            <button className="btn-coming-soon" disabled>
              Check Back Soon
            </button>
          </div>
        ) : (
          // Write-ups grid (when content is available)
          <div className="writeups-grid">
            {writeups.map((writeup) => (
              <div key={writeup.id} className="writeup-card">
                <div className="writeup-header">
                  <div className="writeup-platform">
                    {writeup.platformIcon}
                    <span>{writeup.platform}</span>
                  </div>
                  <span 
                    className="writeup-difficulty"
                    style={{ color: writeup.difficultyColor }}
                  >
                    {writeup.difficulty}
                  </span>
                </div>

                <h3 className="writeup-title">{writeup.title}</h3>
                <p className="writeup-date">{writeup.date}</p>

                <div className="writeup-tags">
                  {writeup.tags.map((tag, index) => (
                    <span key={index} className="writeup-tag">{tag}</span>
                  ))}
                </div>

                <p className="writeup-preview">{writeup.preview}</p>

                <a 
                  href={writeup.link}
                  className="writeup-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Write-up <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Writeups;
