import { useState } from "react";
import { PhoneIcon, WhatsAppIcon, MailIcon, GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        description: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const emailBody = `Name: ${formData.name}\nDescription: ${formData.description}`;
        const mailtoLink = `mailto:adityachakma199@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
        if (typeof window !== 'undefined') {
            window.location.href = mailtoLink;
        }
    };

    return (
        <section id="contact" className="section-contact">
            <div className="section-container">
                <h2 className="section-title">Get in Touch</h2>

                <div className="contact-form-layout">
                    <div className="contact-info-column">
                        <h3 className="contact-info-title">Contact Information</h3>
                        <p className="contact-info-desc">
                            Feel free to reach out for collaborations, job opportunities, or just to say hello!
                        </p>
                        
                        <div className="contact-details-list">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <PhoneIcon size={24} />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">Mobile</span>
                                    <a href="tel:+8801610505120" className="contact-detail-value">+8801610-505120</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <WhatsAppIcon size={24} />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">WhatsApp</span>
                                    <a href="https://wa.me/8801610505120" target="_blank" rel="noopener noreferrer" className="contact-detail-value">+8801610-505120</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <MailIcon size={24} />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">Email</span>
                                    <a href="mailto:adityachakma199@gmail.com" className="contact-detail-value">adityachakma199@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <GithubIcon size={24} />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">GitHub</span>
                                    <a href="https://github.com/aditya-chakma" target="_blank" rel="noopener noreferrer" className="contact-detail-value">github.com/aditya-chakma</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <LinkedinIcon size={24} />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">LinkedIn</span>
                                    <a href="https://www.linkedin.com/in/aditya-chakma/" target="_blank" rel="noopener noreferrer" className="contact-detail-value">linkedin.com/in/aditya-chakma</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-column">
                        <form onSubmit={handleFormSubmit} className="interactive-email-form">
                            <div className="form-row-group">
                                <div className="field-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        placeholder="E.g., John Doe"
                                        required
                                    />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        placeholder="E.g., Senior Engineer Role"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field-group textarea-group">
                                <label htmlFor="description">Message Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    rows={8}
                                    placeholder="Write details about the opportunity or inquiry here..."
                                    required
                                />
                            </div>

                            <div className="form-submit-row">
                                <button type="submit" className="btn-send-message">
                                    Send Email Draft 🚀
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
