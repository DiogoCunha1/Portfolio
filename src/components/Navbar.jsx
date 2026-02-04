import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}` }>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          Diogo Cunha
        </a>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}` }>
          <li className="nav-item">
            <a href="#hero" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#writeups" className="nav-link" onClick={closeMenu}>
              Write-ups
            </a>
          </li>
          <li className="nav-item">
            <a href="#certifications" className="nav-link" onClick={closeMenu}>
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="nav-icon"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;