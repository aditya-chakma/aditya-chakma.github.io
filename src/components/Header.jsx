'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

  // Highlight active section based on IntersectionObserver (on the homepage)
  useEffect(() => {
    if (pathname !== '/' || typeof window === 'undefined') return;

    const sections = ['home', 'experience', 'projects', 'education', 'certifications', 'contact'].map(id => 
      document.getElementById(id)
    ).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -45% 0px', // Trigger when section occupies the middle of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    setIsMenuOpen(false);
    
    if (pathname === '/' && typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${sectionId}`);
        setActiveSection(sectionId);
      }
    }
  };

  const isActive = (sectionId) => {
    return pathname === '/' && activeSection === sectionId;
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link href="/#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          Aditya<span>::</span>Portfolio
        </Link>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
        
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="/#home" className={isActive('home') ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'home')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#experience" className={isActive('experience') ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'experience')}>
              Skills & Experience
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={isActive('projects') ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#education" className={isActive('education') ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'education')}>
              Education
            </Link>
          </li>
          <li>
            <Link href="/#certifications" className={isActive('certifications') ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'certifications')}>
              Certifications
            </Link>
          </li>
          <li>
            <Link href="/#contact" className={isActive('contact') ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
