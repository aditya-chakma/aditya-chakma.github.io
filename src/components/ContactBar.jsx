import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-content">
        <h3 className="username">Aditya Chakma</h3>
        <hr />
        <div className="contact-links">
          <div className="contact">
            <a href="https://github.com/aditya-chakma" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/github.png" alt="Github" /> Github
            </a>
          </div>

          <div className="contact">
            <a href="https://www.linkedin.com/in/aditya-chakma/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/linked-in.png" alt="Linked In" /> Linked In
            </a>
          </div>

          <div className="contact">
            <a href="https://www.kaggle.com/adityachakma" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/kaggle.png" alt="Kaggle" /> Kaggle
            </a>
          </div>

          <div className="contact">
            <a href="/Aditya_Chakma_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/cv.png" alt="CV or Resume" /> CV/Resume
            </a>
          </div>

          <div className="contact">
            <a href="/Aditya_Chakma_IELTS.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/toefl.png" alt="IELTS score" /> IELTS
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ContactBar; 