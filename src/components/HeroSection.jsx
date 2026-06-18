import React from "react";
import ContactBar from "./ContactBar";

export default function HeroSection() {
    return (
        <section id="home" className="section-hero">
            <div className="hero-container">
                <div className="hero-text-side">
                    <h1>
                        Hi, I am Aditya <img src="/assets/images/wh.gif" alt="Wave" className="wave-hand" />
                    </h1>
                    <h2 className="hero-subtitle">Senior Software Engineer</h2>
                    <div className="introduction-text">
                        <p>
                            I am a <strong>Full-Stack Software Engineer</strong> (expertise in backend) with over <strong> around 5.5 years of professional experience</strong> specializing in high-throughput backend systems, modern DevOps practices, and autonomous agentic AI workflows.
                        </p>
                        <p>
                            I design and scale systems serving over <strong>1,000,000+ users</strong>, leading critical infrastructural upgrades (Kafka, JDK, and Spring migration) and building secure, enterprise-grade AI automation pipelines.
                        </p>
                    </div>
                    <ContactBar />

                    {/* HERO SPOTLIGHT CARD */}
                    <div className="hero-spotlight-card">
                        <div className="spotlight-tag">
                            <span className="spotlight-fire">🔥</span> Featured System Spotlight
                        </div>
                        <h3>Beiong E-Commerce</h3>
                        <p>
                            Looking for my latest work? Explore <strong>Beiong</strong>, a modern, client-facing e-commerce platform built with <strong>Java 21, Spring Cloud, AWS, and Next.js</strong>.
                        </p>
                        <div className="spotlight-actions">
                            <a href="https://www.beiong.com" target="_blank" rel="noopener noreferrer" className="spotlight-btn-live">
                                Visit Live Site 🌐
                            </a>
                            <a href="#projects" className="spotlight-btn-details" onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById('projects');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth' });
                                    window.history.pushState(null, '', '/#projects');
                                }
                            }}>
                                See Architectural Details ⬇️
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-image-side">
                    <div className="avatar-frame">
                        <img src="/assets/images/Aditya.jpg" alt="Aditya Chakma" className="avatar-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
