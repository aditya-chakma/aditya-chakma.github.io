'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Reset menu state and overflow when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }, [pathname]);

  // Handle menu toggle
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return pathname === path;
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
          <li><Link href="/" className={isActive('/') ? 'active' : ''} onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/skills" className={isActive('/skills') ? 'active' : ''} onClick={toggleMenu}>Skills/Experience</Link></li>
          <li><Link href="/projects" className={isActive('/projects') ? 'active' : ''} onClick={toggleMenu}>Projects</Link></li>
          <li><Link href="/education" className={isActive('/education') ? 'active' : ''} onClick={toggleMenu}>Education</Link></li>
          <li><Link href="/certifications" className={isActive('/certifications') ? 'active' : ''} onClick={toggleMenu}>Certifications & Achievements</Link></li>
          <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 