import { bdmoImages, competitions, onlineCertifications, perfectAttendanceImage } from "../data/portfolioData";

export default function CertificationsSection({ onSelectImage }) {
    return (
        <section id="certifications" className="section-certifications">
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

                        <div className="bdmo-thumbnails-row">
                            {bdmoImages.map((image, idx) => (
                                <div key={idx} className="bdmo-thumb-card" onClick={() => onSelectImage(image.src)}>
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                    <span>{image.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="perfect-att-col">
                        <h3>Perfect Attendance Certificate</h3>
                        <p className="perfect-att-text">Awarded Perfect Attendance Certificate at Notre Dame College, Dhaka.</p>

                        <div className="attendance-thumb-card" onClick={() => onSelectImage(perfectAttendanceImage)}>
                            <img src={perfectAttendanceImage} alt="Perfect Attendance" loading="lazy" />
                            <div className="overlay-click">Click to Expand Certificate</div>
                        </div>
                    </div>
                </div>

                {/* Online Certifications */}
                <h3 className="section-sub-header" style={{ marginTop: '4rem' }}>Certifications</h3>

                <div className="certifications-matrix-grid">
                    {onlineCertifications.map((cert, index) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
}
