import { education } from "../data/portfolioData";

export default function EducationSection() {
    return (
        <section id="education" className="section-education">
            <div className="section-container">
                <h2 className="section-title">Education</h2>
                <div className="education-timeline-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card-box">
                            <div className="edu-header">
                                <h3>{edu.degree}</h3>
                                <span className="edu-period">{edu.period}</span>
                            </div>
                            <p className="edu-institution">{edu.institution}</p>
                            {edu.cgpa && <div className="edu-cgpa">CGPA: <strong>{edu.cgpa}</strong></div>}

                            {edu.courses && (
                                <div className="edu-courses">
                                    <h5>Key Focus Courses</h5>
                                    <div className="edu-course-badges">
                                        {edu.courses.map((course, cIdx) => (
                                            <span key={cIdx} className="course-badge-item">{course}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {edu.thesis && (
                                <div className="edu-thesis">
                                    <h5>Thesis Topic</h5>
                                    <p className="thesis-title">{edu.thesis.title}</p>
                                    <span className="thesis-status-badge">{edu.thesis.status}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
