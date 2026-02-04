import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Writeups.css';

const Writeups = () => {
  const ref = useScrollAnimation();
  const [activeWriteup, setActiveWriteup] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const writeups = [
    {
      id: 1,
      title: 'Pickle Rick',
      room: 'Pickle Rick',
      platform: 'TryHackMe',
      difficulty: 'Easy',
      path: '/write_ups/THM_Pickle_Rick/THM_Pickle_Rick.md',
      cover: null,
      tags: ['Web Enumeration', 'Command Execution', 'Privilege Escalation'],
      summary: 'Basic web enumeration, RCE, and sudo privilege escalation walkthrough.',
    },
  ];

  const handleSelect = async (writeup) => {
    setActiveWriteup(writeup);
    setLoading(true);
    setError('');

    try {
      const response = await fetch(writeup.path);
      if (!response.ok) {
        throw new Error('Unable to load write-up content.');
      }
      const text = await response.text();
      setContent(text);
    } catch (err) {
      setError('Unable to load this write-up right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="writeups" ref={ref} className="writeups fade-in">
      <div className="writeups-container">
        <h2 className="section-title">Write-ups</h2>
        <p className="section-subtitle">
          Hands-on walkthroughs and reports from labs, challenges, and CTF rooms.
        </p>

        <div className="writeups-layout">
          <div className="writeups-list">
            {writeups.map((writeup) => (
              <button
                key={writeup.id}
                type="button"
                className={`writeup-card glass ${activeWriteup?.id === writeup.id ? 'active' : ''}`}
                onClick={() => handleSelect(writeup)}
              >
                <div
                  className="writeup-cover"
                  style={writeup.cover ? { backgroundImage: `url(${writeup.cover})` } : undefined}
                >
                  {!writeup.cover && (
                    <span className="writeup-cover-label">{writeup.platform}</span>
                  )}
                </div>
                <div className="writeup-card-header">
                  <div className="writeup-icon">
                    <FaBookOpen />
                  </div>
                  <div>
                    <h3 className="writeup-title">{writeup.title}</h3>
                    <p className="writeup-meta">
                      {writeup.platform} • {writeup.difficulty}
                    </p>
                  </div>
                </div>
                <p className="writeup-summary">{writeup.summary}</p>
                <div className="writeup-tags">
                  {writeup.tags.map((tag) => (
                    <span key={tag} className="writeup-tag">{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="writeup-viewer glass">
            {!activeWriteup && (
              <div className="writeup-placeholder">
                Select a write-up to view it here.
              </div>
            )}
            {loading && <div className="writeup-loading">Loading write-up...</div>}
            {activeWriteup && !loading && (
              <div className="writeup-viewer-header">
                <div>
                  <h3 className="writeup-viewer-title">{activeWriteup.title}</h3>
                  <p className="writeup-viewer-meta">
                    {activeWriteup.platform} • {activeWriteup.difficulty}
                  </p>
                </div>
                <a
                  className="writeup-viewer-link"
                  href={activeWriteup.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab <FaExternalLinkAlt />
                </a>
              </div>
            )}
            {error && <div className="writeup-error">{error}</div>}
            {!loading && !error && activeWriteup && (
              <article className="writeup-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writeups;