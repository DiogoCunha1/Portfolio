import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaFileAlt, FaLock } from 'react-icons/fa';
import { SiHackthebox, SiTryhackme } from 'react-icons/si';
import writeupFiles from '../data/writeups';
import '../styles/Writeups.css';

const Writeups = () => {
  const ref = useScrollAnimation();
  const [writeups, setWriteups] = useState([]);
  const [loadError, setLoadError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const difficultyColors = useMemo(
    () => ({
      Easy: '#22c55e',
      Medium: '#f59e0b',
      Hard: '#ef4444',
    }),
    []
  );

  useEffect(() => {
    const loadWriteups = async () => {
      if (!writeupFiles.length) {
        setWriteups([]);
        setIsLoading(false);
        return;
      }

      try {
        const results = await Promise.all(
          writeupFiles.map(async (filePath, index) => {
            const response = await fetch(filePath);
            if (!response.ok) {
              throw new Error(`Failed to load ${filePath}`);
            }

            const text = await response.text();
            const { data, content } = matter(text);
            const title = data.title || `Write-up ${index + 1}`;
            const platform = data.platform || 'Unknown';
            const difficulty = data.difficulty || 'Unknown';
            const preview = data.preview || `${content.slice(0, 160)}...`;
            const tags = Array.isArray(data.tags) ? data.tags : [];
            const date = data.date || 'Unknown';
            const difficultyColor =
              data.difficultyColor || difficultyColors[difficulty] || 'var(--text-muted)';

            return {
              id: data.id || index + 1,
              title,
              platform,
              difficulty,
              difficultyColor,
              date,
              tags,
              preview,
              content,
            };
          })
        );

        setWriteups(results);
        setLoadError(null);
      } catch (error) {
        setLoadError(error.message);
        setWriteups([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadWriteups();
  }, [difficultyColors]);

  const getPlatformIcon = (platform) => {
    if (platform.toLowerCase() === 'tryhackme') {
      return <SiTryhackme />;
    }

    if (platform.toLowerCase() === 'hackthebox') {
      return <SiHackthebox />;
    }

    return <FaLock />;
  };

  return (
    <section id="writeups" ref={ref} className="writeups fade-in">
      <div className="writeups-container">
        <h2 className="section-title">Write-ups & Walkthroughs</h2>
        <p className="section-subtitle">
          Detailed documentation of solved machines, CTF challenges, and security assessments
        </p>

        {isLoading ? (
          <div className="writeups-empty">
            <div className="empty-icon">
              <FaFileAlt />
            </div>
            <h3>Loading write-ups...</h3>
            <p className="empty-description">
              Fetching the latest markdown write-ups.
            </p>
          </div>
        ) : loadError ? (
          <div className="writeups-empty">
            <div className="empty-icon">
              <FaFileAlt />
            </div>
            <h3>Unable to load write-ups</h3>
            <p className="empty-description">{loadError}</p>
          </div>
        ) : writeups.length === 0 ? (
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
          <div className="writeups-list">
            {writeups.map((writeup) => (
              <article key={writeup.id} className="writeup-item">
                <div className="writeup-card">
                  <div className="writeup-header">
                    <div className="writeup-platform">
                      {getPlatformIcon(writeup.platform)}
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
                      <span key={index} className="writeup-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="writeup-preview">{writeup.preview}</p>
                </div>

                <div className="writeup-content glass">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{writeup.content}</ReactMarkdown>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Writeups;
