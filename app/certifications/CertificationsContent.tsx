'use client';
import React, { useState } from "react";
import ContactBar from "@/src/components/ContactBar";
import ImageModal from "@/src/components/ImageModal";
import "@/src/styles/Certifications.css";

// Note: In Next.js App Router, metadata is defined in a separate export for Server Components.
// Since this is a Client Component, we can either:
// 1. Move the metadata to a parent layout or a wrapper server component.
// 2. Use a separate file or a layout to define the metadata.
// I'll create a parent layout or use the page.tsx as a server component and import the client logic.
// But for simplicity in this migration, I'll put the metadata in a separate 'layout.tsx' if needed,
// or just make this a client component and accept that metadata won't be here.
// Actually, the best way is to have page.tsx be a server component and the content be a client component.

export default function CertificationsPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const bdmoImages = [
        { src: "/assets/images/bdmo/2011.jpg", year: "2011", alt: "BDMO Certificate 2011" },
        { src: "/assets/images/bdmo/2010.jpg", year: "2010", alt: "BDMO Certificate 2010" },
        { src: "/assets/images/bdmo/2008.jpg", year: "2008", alt: "BDMO Certificate 2008" },
    ];

    const competitions = [
        "SMIM-ISIC Melanoma Classification",
        "PetFinder.my - Detect specific pets",
        "Bengali.AI - AI for Bangla",
        "Dhaka AI - Dhaka Traffic detection",
        "IUT hackthon 2017",
    ];

    const onlineCertifications = [
        { src: "/assets/images/certifications/Coursera 3V3PLW8DS4BT.jpg", title: "Neural Networks and Deep learning" },
        { src: "/assets/images/certifications/Coursera 4L5J5P98KN4J.jpg", title: "Sequence Models" },
        { src: "/assets/images/certifications/Coursera 7XRY4KXYKGLT.jpg", title: "Getting And Cleaning Data" },
        { src: "/assets/images/certifications/Coursera A92KLND5EJUU.jpg", title: "R Programming" },
        { src: "/assets/images/certifications/Coursera DB5U7KES96ND.jpg", title: "Structuring Machine Learning Projects" },
        { src: "/assets/images/certifications/Coursera E7QEN7H96DUF.jpg", title: "The Data Scientist's Toolbox" },
        { src: "/assets/images/certifications/Coursera EWYYGJM85UPC.jpg", title: "Machine Learning" },
        { src: "/assets/images/certifications/Coursera LQ9ZS9DHHTQ5.jpg", title: "Introduction to Machine Learning" },
        { src: "/assets/images/certifications/Coursera PGB4AZQ7Q4PT.jpg", title: "Deep Learning Specialization" },
        {
            src: "/assets/images/certifications/Coursera SDJQ3ULKJQ53.jpg",
            title: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Normalization",
        },
        { src: "/assets/images/certifications/Coursera U4A4B9A53JC7.jpg", title: "Welcome to Game Theory" },
        { src: "/assets/images/certifications/Coursera VM8AG2EAQYPT.jpg", title: "Image Data Augmentation in Keras" },
        { src: "/assets/images/certifications/Coursera W67A4ZPGD99T.jpg", title: "How to win a data science Competition: Learn from top Kagglers" },
        { src: "/assets/images/certifications/Coursera XCZPX5XMJ3MU.jpg", title: "Convolutional Neural Networks" },
    ];

    const perfect_attendance = "/assets/perfect_attendance.jpeg";

    return (
        <div className="certifications-page">
            <ContactBar />
            <section className="certifications-section">
                <h2>Certifications & Achievements</h2>

                <div className="achievement-category">
                    <h3>Competitions (Selective)</h3>
                    <div className="competitions-list">
                        {competitions.map((competition, index) => (
                            <div key={index} className="competition-item">
                                {competition}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="achievement-category">
                    <h3>Certifications (Online)</h3>
                    <div className="certificate-grid">
                        {onlineCertifications.map((cert, index) => (
                            <div key={index} className="certificate-card" onClick={() => setSelectedImage(cert.src)}>
                                <img src={cert.src} alt={cert.title} className="certificate-thumbnail" />
                                <p className="certificate-title">{cert.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="achievement-category">
                    <h3>BDMO (Bangladesh Mathematics Olympiad)</h3>
                    <div className="certificate-grid">
                        {bdmoImages.map((image, index) => (
                            <div key={index} className="certificate-card" onClick={() => setSelectedImage(image.src)}>
                                <img src={image.src} alt={image.alt} className="certificate-thumbnail" />
                                <p className="certificate-year">{image.year}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="achievement-category">
                    <h3>Perfect Attendance Certificate</h3>
                    <div className="certificate-grid">
                        <div className="certificate-card" onClick={() => setSelectedImage(perfect_attendance)}>
                            <img src={perfect_attendance} className="certificate-thumbnail" />
                        </div>
                    </div>
                </div>
            </section>

            <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage} />
        </div>
    );
}
