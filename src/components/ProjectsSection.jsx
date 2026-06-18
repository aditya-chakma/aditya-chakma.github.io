import { academicProjects, personalProjects } from "../data/portfolioData";

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-projects">
            <div className="section-container">
                <h2 className="section-title">Selected Projects</h2>

                {/* AI & Agentic Development Callout */}
                <div className="ai-development-callout">
                    <div className="callout-header">
                        <span className="callout-icon">🤖</span>
                        <div>
                            <h3>Agentic Coding and Agentic SDLC Automation</h3>
                        </div>
                    </div>
                    <div className="ai-agentic-grid">
                        <div className="ai-agentic-card">
                            <span className="ai-card-tag">Orchestration & Workflows</span>
                            <h4>Multi-Agent Pipelines</h4>
                            <p>Orchestrates specialized, context-aware AI agents across the software development lifecycle using secure command sets:</p>
                            <div className="cmd-list">
                                <div className="cmd-item"><code>/plan</code> <span>PM persona break down epic roadmap requirements</span></div>
                                <div className="cmd-item"><code>/design</code> <span>Architect maps out interfaces and system diagrams</span></div>
                                <div className="cmd-item"><code>/implement</code> <span>Dev designs clean, strongly-typed component blocks</span></div>
                                <div className="cmd-item"><code>/test</code> <span>SDET codes extensive automated unit/integration suites</span></div>
                                <div className="cmd-item"><code>/review</code> <span>Auditor audits static code for safety and optimization</span></div>
                            </div>
                        </div>
                        <div className="ai-agentic-card">
                            <span className="ai-card-tag">Autonomy & Planning</span>
                            <h4>Repository Context Maps</h4>
                            <p>Enables reliable autonomous tasks by locking down state dependencies, schemas, and lint standards directly in the codebase:</p>
                            <ul className="bullet-accent-list">
                                <li><strong>dependency.md:</strong> Explicitly constraints dependency bloatedness</li>
                                <li><strong>architecture.md:</strong> Outlines state trees and network client schemas</li>
                                <li><strong>standards.md:</strong> Strict lint standards and quality guardrails</li>
                            </ul>
                        </div>
                        <div className="ai-agentic-card">
                            <span className="ai-card-tag">HITL & Safety</span>
                            <h4>Human-in-the-Loop Safeguards</h4>
                            <p>Enforces architectural alignment through active, manual sign-off checks combined with strict verification checkers:</p>
                            <ul className="bullet-accent-list">
                                <li><strong>Verification Gates:</strong> Pause execution after plan/design phases</li>
                                <li><strong>Dry-Checks:</strong> Automated checklist verification across DRY compliance</li>
                            </ul>
                        </div>
                        <div className="ai-agentic-card">
                            <span className="ai-card-tag">Production Systems</span>
                            <h4>Enterprise RAG & Tool-Calling</h4>
                            <p>Designed and deployed secure, production-grade agentic architectures with advanced capabilities:</p>
                            <ul className="bullet-accent-list">
                                <li><strong>End-to-End RAG Pipelines:</strong> Engineered semantic search using Python, LangChain, and <strong>Vector Databases</strong> over a 10,000+ document enterprise repository.</li>
                                <li><strong>Autonomous Tool-Calling:</strong> Built specialized Agents equipped with custom APIs, executing dynamic real-time permission and access-control checks.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Featured/Personal Projects */}
                <h3 className="project-category-header">Featured & Personal Systems</h3>
                <div className="projects-grid-layout">
                    {personalProjects.map((project, index) => (
                        <div key={index} className="project-item-card">
                            <div className="project-item-header">
                                <h4>{project.title}</h4>
                                <span className="project-item-type">Featured Full-Stack</span>
                            </div>
                            <p className="project-item-desc">{project.description}</p>

                            <div className="project-item-tech">
                                <h5>Technologies</h5>
                                <div className="tech-badge-row">
                                    {project.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-item-features">
                                <h5>Key Capabilities</h5>
                                <ul className="project-features-bullets">
                                    {project.features.slice(0, 4).map((feat, fIdx) => (
                                        <li key={fIdx}>{feat}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-actions">
                                {project.github ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                                        <img src="/assets/icons/github.png" alt="GitHub" /> View on GitHub
                                    </a>
                                ) : (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                                        Visit Live Site
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Academic Projects */}
                <h3 className="project-category-header" style={{ marginTop: '4rem' }}>Academic & Structural Systems</h3>
                <div className="projects-grid-layout academic-grid-layout">
                    {academicProjects.map((project, index) => (
                        <div key={index} className="project-item-card academic-card">
                            <div className="project-item-header">
                                <h4>{project.title}</h4>
                                <span className="project-item-type">Academic System</span>
                            </div>
                            <p className="project-item-desc">{project.description}</p>

                            <div className="project-item-tech">
                                <div className="tech-badge-row">
                                    {project.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-actions">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                                    <img src="/assets/icons/github.png" alt="GitHub" /> View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
