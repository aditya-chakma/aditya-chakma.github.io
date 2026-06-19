'use client';
import HeroSection from "@/src/components/HeroSection"; // Static import as it is above-the-fold
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import below-the-fold components to code-split and defer JavaScript loading
const SkillsSection = dynamic(() => import("@/src/components/SkillsSection"));
const ProjectsSection = dynamic(() => import("@/src/components/ProjectsSection"));
const EducationSection = dynamic(() => import("@/src/components/EducationSection"));
const CertificationsSection = dynamic(() => import("@/src/components/CertificationsSection"));
const ContactSection = dynamic(() => import("@/src/components/ContactSection"));
const ImageModal = dynamic(() => import("@/src/components/ImageModal"), { ssr: false });

// Stylesheets
import "@/src/styles/Certifications.css";
import "@/src/styles/Contact.css";
import "@/src/styles/Education.css";
import "@/src/styles/Home.css";
import "@/src/styles/Projects.css";
import "@/src/styles/Skills.css";

export default function HomeContent({ images }: { images: string[] }) {
    // State for Certifications Image Modal
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="portfolio-single-page">
            <HeroSection images={images} />
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
