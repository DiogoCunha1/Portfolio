import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaExternalLinkAlt, FaTrophy, FaAward, FaFlag } from 'react-icons/fa';
import { SiTryhackme, SiHackthebox } from 'react-icons/si';
import '../styles/CTFPlatforms.css';

const CTFPlatforms = () => {
  const ref = useScrollAnimation();

  const platforms = [
    {
      id: 1,
      name: 'TryHackMe',
      username: 'HungerBalls',
      icon: <SiTryhackme />,
      color: '#00D9FF',
      stats: [
        { label: 'Rank', value: '469,990', icon: <FaTrophy /> },
        { label: 'Completed Rooms', value: '17', icon: <FaFlag /> },
        { label: 'Badges', value: '1', icon: <FaAward /> },
      ],
      link: 'https://tryhackme.com/p/HungerBalls',
    },
    {
      id: 2,
      name: 'HackTheBox',
      username: 'HELLNABOY',
      icon: <SiHackthebox />,
      color: '#9FEF00',
      stats: [
        { label: 'Rank', value: 'Hacker', icon: <FaTrophy /> },
        { label: 'Global Ranking', value: '#905', icon: <FaAward /> },
        { label: 'Points', value: '19', icon: <FaFlag /> },
        { label: 'Machines', value: '16', icon: <FaFlag /> },
        { label: 'Flags', value: '37', icon: <FaFlag /> },
      ],
      link: 'https://app.hackthebox.com/users/2122156',
    },
  ];

  return (
    <section id="ctf" ref={ref} className="ctf-platforms fade-in">
      <div className="ctf-container">
        <h2 className="section-title">Capture The Flag Platforms</h2>
        <p className="section-subtitle">
          Active participation in cybersecurity challenges and skill development
        </p>

        <div className="ctf-grid">
          {platforms.map((platform, index) => (
            <div
              key={platform.id}
              className="ctf-card glass"
              style={{
                animationDelay: `${index * 0.2}s`,
                '--accent-color': platform.color,
              }}
            >
              <div className="ctf-header">
                <div className="ctf-icon" style={{ color: platform.color }}>
                  {platform.icon}
                </div>
                <div className="ctf-platform-info">
                  <h3 className="ctf-platform-name">{platform.name}</h3>
                  <p className="ctf-username">@{platform.username}</p>
                </div>
              </div>

              <div className="ctf-divider"></div>

              <div className="ctf-stats">
                {platform.stats.map((stat, idx) => (
                  <div key={idx} className="ctf-stat-item">
                    <div className="ctf-stat-icon">{stat.icon}</div>
                    <div className="ctf-stat-content">
                      <span className="ctf-stat-label">{stat.label}</span>
                      <span className="ctf-stat-value">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ctf-divider"></div>

              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ctf-button"
              >
                View Profile
                <FaExternalLinkAlt className="button-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFPlatforms;
