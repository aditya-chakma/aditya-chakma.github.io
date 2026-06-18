import React from "react";
import { technicalSkills, workExperience, researchProjects } from "../data/portfolioData";

export default function SkillsSection() {
    // Helper to render bolded text in achievements list
    const renderBoldText = (text) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, idx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={idx}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <section id="experience" className="section-experience">
            <div className="section-container">
                <h2 className="section-title">Skills & Experience</h2>
                
                <div className="experience-skills-layout">
                    {/* Work Experience Column */}
                    <div className="experience-column">
                        <h3 className="sub-section-title">Professional Experience</h3>
                        
                        <div className="company-info-card">
                            <h4 className="company-name">{workExperience.company}</h4>
                            <p className="company-summary">{workExperience.description}</p>
                        </div>

                        <div className="timeline-container">
                            {workExperience.roles.map((role, index) => (
                                <div key={index} className="role-timeline-card">
                                    <div className="role-timeline-header">
                                        <div className="title-dot"></div>
                                        <h4 className="role-title">{role.title}</h4>
                                        <span className="role-period">{role.period}</span>
                                    </div>
                                    <ul className="role-bullet-list">
                                        {role.achievements.map((bullet, idx) => (
                                            <li key={idx}>{renderBoldText(bullet)}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills Column */}
                    <div className="skills-column">
                        <h3 className="sub-section-title">Technical Expertise</h3>
                        
                        <div className="skills-bento-grid">
                            {technicalSkills.map((categoryData, index) => (
                                <div key={index} className="skills-category-card">
                                    <h4>{categoryData.category}</h4>
                                    {categoryData.isTagCloud ? (
                                        <div className="skills-badge-cloud">
                                            {categoryData.skills.map((skill, sIdx) => (
                                                <span key={sIdx} className="skill-badge">{skill}</span>
                                            ))}
                                        </div>
                                    ) : (
                                        <ul className="skills-detailed-list">
                                            {categoryData.skills.map((skill, sIdx) => (
                                                <li key={sIdx}>{skill}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Research Projects Sub-column */}
                        <h3 className="sub-section-title" style={{ marginTop: '3.5rem' }}>Research & Publications</h3>
                        <div className="research-list-container">
                            {researchProjects.map((research, index) => (
                                <div key={index} className="research-item-card">
                                    <h4>{research.title}</h4>
                                    <p>{research.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
