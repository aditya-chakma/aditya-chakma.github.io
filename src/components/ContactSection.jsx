import { useState } from "react";

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
                <p className="contact-subtitle">Have a project, job opening, or opportunity? Drop a secure message directly using the mailto: constructor below.</p>

                <div className="contact-form-layout">
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
        </section>
    );
}
