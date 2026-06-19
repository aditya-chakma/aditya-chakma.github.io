"use client";

import { useEffect, useState } from "react";
import ContactBar from "./ContactBar";

export default function HeroSection({ images = ['/assets/images/dp/Aditya_1.jpg'] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentSrc = images[currentIndex];
    const nextSrc = nextIndex !== null ? images[nextIndex] : null;

    // Background preloader to ensure smooth caching of the next slide
    useEffect(() => {
        if (images.length > 1) {
            const nextIdx = (currentIndex + 1) % images.length;
            const img = new Image();
            img.src = images[nextIdx];
        }
    }, [currentIndex, images]);

    useEffect(() => {
        if (images.length <= 1) return;

        let active = true;
        let transitionTimeout;
        let slideTimeout;

        const runSlider = (currIdx) => {
            const nextIdx = (currIdx + 1) % images.length;

            setNextIndex(nextIdx);
            setIsAnimating(true);

            transitionTimeout = setTimeout(() => {
                if (!active) return;
                setCurrentIndex(nextIdx);
                setNextIndex(null);
                setIsAnimating(false);

                // Schedule next slide 2s after animation finishes
                slideTimeout = setTimeout(() => runSlider(nextIdx), 2000);
            }, 600);
        };

        slideTimeout = setTimeout(() => runSlider(0), 2000);

        return () => {
            active = false;
            clearTimeout(slideTimeout);
            clearTimeout(transitionTimeout);
        };
    }, [images]);

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
                        <div className="avatar-slider">
                            <img 
                                src={currentSrc} 
                                alt="Aditya Chakma" 
                                className={`avatar-img ${isAnimating ? 'slide-out' : ''}`} 
                            />
                            {nextSrc && (
                                <img 
                                    src={nextSrc} 
                                    alt="Aditya Chakma" 
                                    className="avatar-img slide-in" 
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
