'use client';
import React, { useState } from "react";
import HeroSection from "@/src/components/HeroSection";
import SkillsSection from "@/src/components/SkillsSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import EducationSection from "@/src/components/EducationSection";
import CertificationsSection from "@/src/components/CertificationsSection";
import ContactSection from "@/src/components/ContactSection";
import ImageModal from "@/src/components/ImageModal";

// Stylesheets
import "@/src/styles/Home.css";
import "@/src/styles/Skills.css";
import "@/src/styles/Projects.css";
import "@/src/styles/Education.css";
import "@/src/styles/Certifications.css";
import "@/src/styles/Contact.css";

export default function HomeContent() {
    // State for Certifications Image Modal
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="portfolio-single-page">
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <CertificationsSection onSelectImage={setSelectedImage} />
            <ContactSection />

            {/* IMAGE MODAL PREVIEW FOR CERTIFICATIONS */}
            <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage} />
        </div>
    );
}
