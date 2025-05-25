import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Reset menu state and overflow when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  // Handle menu toggle
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={toggleMenu}>Skills/Experience</Link></li>
          <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/education" className={isActive('/education') ? 'active' : ''} onClick={toggleMenu}>Education</Link></li>
          <li><Link to="/certifications" className={isActive('/certifications') ? 'active' : ''} onClick={toggleMenu}>Certifications & Achievements</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 