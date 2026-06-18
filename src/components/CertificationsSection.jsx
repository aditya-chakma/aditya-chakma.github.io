import React, { useState, useEffect, useRef } from "react";
import { onlineCertifications, bdmoImages, competitions, perfectAttendanceImage } from "../data/portfolioData";

export default function CertificationsSection({ onSelectImage }) {
    const [hasRendered, setHasRendered] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setHasRendered(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasRendered(true);
                    observer.disconnect(); // Rendered once, keep loaded
                }
            },
            {
                root: null,
                rootMargin: "250px", // Load 250px before entering viewport for seamless UX
                threshold: 0
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Placeholder Skeletons to avoid initial layout shifts or large image downloads
    const renderSkeletons = () => {
        return Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="cert-interactive-card cert-skeleton-card">
                <div className="cert-card-media skeleton-media skeleton-pulse"></div>
                <div className="cert-card-info">
                    <div className="skeleton-text skeleton-pulse" style={{ width: '85%', height: '1rem', marginBottom: '0.5rem' }}></div>
                    <div className="skeleton-text skeleton-pulse" style={{ width: '50%', height: '0.75rem' }}></div>
                </div>
            </div>
        ));
    };

    return (
        <section id="certifications" className="section-certifications" ref={sectionRef}>
            <div className="section-container">
                <h2 className="section-title">Certifications & Achievements</h2>

                {/* Math Olympiad & Selective Competitions */}
                <div className="competitions-achievements-row">
                    <div className="comp-col">
                        <h3>Olympiad & Competitive Highlights</h3>
                        <ul className="comp-list">
                            {competitions.map((comp, idx) => (
                                <li key={idx} className="comp-item">
                                    <span className="bullet-star">★</span> {comp}
                                </li>
                            ))}
                        </ul>

                        <h3 style={{ marginTop: '2.5rem' }}>BDMO (Bangladesh Mathematics Olympiad)</h3>
                        <p className="bdmo-intro-text">Selected and awarded certificates in BDMO state levels. Click thumbnails to inspect high-resolution credentials:</p>
                        
                        <div className="bdmo-thumbnails-row">
                            {hasRendered ? (
                                bdmoImages.map((image, idx) => (
                                    <div key={idx} className="bdmo-thumb-card" onClick={() => onSelectImage(image.src)}>
                                        <img src={image.src} alt={image.alt} loading="lazy" />
                                        <span>{image.year}</span>
                                    </div>
                                ))
                            ) : (
                                Array.from({ length: 3 }).map((_, idx) => (
                                    <div key={idx} className="bdmo-thumb-card skeleton-pulse" style={{ background: '#e2e8f0' }} />
                                ))
                            )}
                        </div>
                    </div>

                    <div className="perfect-att-col">
                        <h3>Perfect Attendance Recognition</h3>
                        <p className="perfect-att-text">Awarded Therap Services LLC Certificate for perfect commitment and zero missing logs during consecutive evaluation cycles.</p>
                        
                        {hasRendered ? (
                            <div className="attendance-thumb-card" onClick={() => onSelectImage(perfectAttendanceImage)}>
                                <img src={perfectAttendanceImage} alt="Perfect Attendance" loading="lazy" />
                                <div className="overlay-click">Click to Expand Certificate</div>
                            </div>
                        ) : (
                            <div className="attendance-thumb-card skeleton-pulse" style={{ height: '220px', background: '#e2e8f0', border: '1px solid var(--border-color)' }} />
                        )}
                    </div>
                </div>

                {/* Online Certifications */}
                <h3 className="section-sub-header" style={{ marginTop: '4rem' }}>Professional & Deep Learning Credentials</h3>
                <p className="cert-intro-text">Interactive certification list with image validations. Click any card to preview the full verified credential:</p>
                
                <div className="certifications-matrix-grid">
                    {hasRendered ? (
                        onlineCertifications.map((cert, index) => (
                            <div key={index} className="cert-interactive-card" onClick={() => onSelectImage(cert.src)}>
                                <div className="cert-card-media">
                                    <img src={cert.src} alt={cert.title} loading="lazy" />
                                    <div className="card-hover-mask">
                                        <span className="view-text">Verify Credential</span>
                                    </div>
                                </div>
                                <div className="cert-card-info">
                                    <h4>{cert.title}</h4>
                                    <span className="cert-issuer">Coursera Partner Verifications</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        renderSkeletons()
                    )}
                </div>
            </div>
        </section>
    );
}
