import React, { useState } from 'react';
import './Contact.css';
import ContactBar from '../components/ContactBar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = `Name: ${formData.name}\nDescription: ${formData.description}`;
    const mailtoLink = `mailto:adityachakma199@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <ContactBar />
      <section className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Contact"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="10"
                placeholder="Hi, nice to meet you!"
                required
              />
            </div>

            <div className="form-group submit-group">
              <button type="submit" className="submit-button">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact; 