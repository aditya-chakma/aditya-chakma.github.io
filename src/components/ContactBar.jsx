import React from 'react';
import './ContactBar.css';
import githubIcon from '../assets/icons/github.png';
import linkedInIcon from '../assets/icons/linked-in.png';
import kaggleIcon from '../assets/icons/kaggle.png';
import cvIcon from '../assets/icons/cv.png';
import toeflIcon from '../assets/icons/toefl.png';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-content">
        <h3 className="username">Aditya Chakma</h3>
        <hr />
        <div className="contact-links">
          <div className="contact">
            <a href="https://github.com/aditya-chakma" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github" /> Github
            </a>
          </div>

          <div className="contact">
            <a href="https://www.linkedin.com/in/aditya-chakma/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="Linked In" /> Linked In
            </a>
          </div>

          <div className="contact">
            <a href="https://www.kaggle.com/adityachakma" target="_blank" rel="noopener noreferrer">
              <img src={kaggleIcon} alt="Kaggle" /> Kaggle
            </a>
          </div>

          <div className="contact">
            <a href="/resources/Aditya_Chakma_CV.pdf" target="_blank" rel="noopener noreferrer">
              <img src={cvIcon} alt="CV or Resume" /> CV/Resume
            </a>
          </div>

          <div className="contact">
            <a href="/resources/Aditya_Chakma_Toefl.pdf" target="_blank" rel="noopener noreferrer">
              <img src={toeflIcon} alt="TOEFL score" /> TOEFL
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ContactBar; 