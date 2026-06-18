'use client';
import React, { useState, useEffect } from "react";
import ContactBar from "@/src/components/ContactBar";
import ImageModal from "@/src/components/ImageModal";
import "@/src/styles/Home.css";
import "@/src/styles/Skills.css";
import "@/src/styles/Projects.css";
import "@/src/styles/Education.css";
import "@/src/styles/Certifications.css";
import "@/src/styles/Contact.css";

export default function Home() {
    // State for Certifications Image Modal
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // State for Contact Form
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        description: ''
    });

    // Form Change Handler
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Form Submit Handler
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailBody = `Name: ${formData.name}\nDescription: ${formData.description}`;
        const mailtoLink = `mailto:adityachakma199@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
        if (typeof window !== 'undefined') {
            window.location.href = mailtoLink;
        }
    };

    // Technical Skills Data
    const technicalSkills = [
        {
            category: "Programming Languages",
            skills: ["Java", "Python", "Go", "TypeScript", "JavaScript", "C++", "Rust", "SQL", "C#"],
            isTagCloud: true,
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                "Spring Boot",
                "Spring Cloud",
                "Spring Security",
                "Java EE",
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "Shadcn/UI",
                "Zod",
                "TanStack Query",
                "REST API",
                "SOAP",
                "gRPC",
                "Protobuf",
                "Hibernate"
            ],
            isTagCloud: true,
        },
        {
            category: "Cloud, DevOps & Infrastructure",
            skills: [
                "AWS (IAM, EC2, S3, Lambda, RDS, SNS, SQS, App Runner, CloudFront, CloudWatch)",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "GitHub Actions",
                "Nginx",
                "Tomcat"
            ],
            isTagCloud: true,
        },
        {
            category: "Databases & Caching",
            skills: ["Oracle DBMS", "PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS RDS"],
            isTagCloud: true,
        },
        {
            category: "Data Streaming & Middleware",
            skills: ["Apache Kafka", "JMS"],
            isTagCloud: true,
        },
        {
            category: "Machine Learning & AI",
            skills: [
                "TensorFlow",
                "Keras",
                "PyTorch",
                "Scikit-Learn",
                "XGBoost",
                "CNN",
                "GAN",
                "Visual Transformers"
            ],
            isTagCloud: true,
        },
        {
            category: "Agentic AI Systems",
            skills: [
                "Autonomous Development Workflows (/plan, /design, /implement, /test, /review)",
                "AI Agent Persona Orchestration (Product Manager, Architect, Senior Dev, SDET, Security Auditor)",
                "Context-aware planning, HITL (Human-in-the-Loop) guardrails, validation checklists",
            ],
            isTagCloud: false,
        }
    ];

    // Work Experience Data
    const workExperience = {
        company: "Therap Services LLC",
        description: `5+ years of Software Engineering experience, specialized in developing and managing complex enterprise systems. Led core projects, delivering high-quality, high-throughput systems. Strong expertise in code review, cross-team collaboration, mentoring, and automation in an agile environment using Scrum practices. Focused on building highly secure, reliable, scalable, and robust systems compliant with strict US federal guidelines.`,
        roles: [
            {
                title: "Sr. Software Engineer",
                period: "April 2026 - Present",
                achievements: [
                    "Architected an end-to-end **RAG pipeline** using Python and LangChain, engineering autonomous **Agents** with custom **Tool-calling** capabilities—including real-time user access and permission checks—to enable secure querying across a **10,000+ document** enterprise knowledge base.",
                    "Migrated core legacy messaging infrastructure from ActiveMQ to **Apache Kafka**, introducing a phased migration strategy with a custom synchronization bridge ensuring zero message loss (outbox pattern), resulting in a **70% throughput gain** and **40% latency reduction**.",
                    "Managed the **JDK 8 to JDK 21 upgrade** of a large legacy codebase, planning and managing in-app and service dependencies, leveraging OpenRewrite and custom recipes for efficient execution."
                ],
            },
            {
                title: "Software Engineer II",
                period: "April 2024 - March 2026",
                achievements: [
                    "Worked in a team of 50+ members to maintain core system functionalities, including login, **EVV (Electronic Visit Validation)**, Scheduling (Google Calendar-like), and Secure Messaging (Gmail-like secure feature).",
                    "Architected and developed **Webhooks** for Therap's aggregator application, enabling efficient system-to-system communication and data integration.",
                    "Re-engineered high-volume cron jobs and data access patterns using Oracle Coherence, advanced query optimization, and intelligent indexing, reducing database QPS and achieving a **20% reduction in latency**.",
                    "Load-tested API endpoints with Gatling and JMeter, identifying bottlenecks in the legacy UUID generator, and replaced it with **Twitter Snowflake UUID**, achieving **5x insert/update operations per second**.",
                    "Dockerized multiple legacy services, including the authentication server, and developed a single-click deployment tool, cutting deployment time by **50%** and reducing developer hardware requirements by **33%**.",
                    "Designed data-integration pipelines and automated manual workflows for SFTP and REST APIs, enabling Therap to secure a multi-million dollar **Kentucky state project**.",
                    "Rearchitected data import pipelines, enabling **20x faster processing** for large imports (**150K+ rows**) using queue and batching techniques.",
                    "Mentored junior developers and led technical sharing sessions."
                ],
            },
            {
                title: "Software Engineer",
                period: "April 2022 - March 2024",
                achievements: [
                    "Integrated Salesforce and MaestroQA APIs, streamlining customer support workflows and reducing manual intervention by up to **80%**.",
                    "Contributed to implementing an in-house authentication module, RBAC, and ABAC using **Spring Security** featuring **MFA, OAuth2, JWT**, and rate-limiting, reducing operational licensing costs to zero.",
                    "Delivered state-specific HIPAA-compliant solutions for Kentucky and Tennessee, implementing rollup-dashboards and meeting the federal **21st Century Cures Act** mandate, securing multi-million dollar state contracts.",
                    "Developed data-feed dashboards processing over **1 million records per day** using **Spring Batch, JDBC, and Redis** with asynchronous multithreading for real-time monitoring.",
                    "Architected and developed high-performant **data integration pipeline** with multiple Giant health care providers like **HHA, RHA, Sandata**, and **Federal States (TN, KY)** leveraging REST APIs, and adhering to **OAS 3.0**.",
                    "Involved in Developer and QA-side **On-premise server deployments** using **WebLogic, Tomcat, Nginx Proxies and Reverse Proxies**, and **Kafka Zookeeper** ensuring high performance and stability."
                ],
            },
            {
                title: "Associate Software Engineer",
                period: "March 2021 - March 2022",
                achievements: [
                    "Developed and maintained a large-scale customer-facing B2B SaaS application with **40,000+ Daily CCU** (Concurrent Users) serving over **1,000,000+ individuals**.",
                    "Optimized on-demand loading of resources and integrated CDNs, reducing network bandwidth by **20%** and improving page load times.",
                    "Developed an in-house **message translation tracker** for localization of the application, fully eliminating **manual intervention**."
                ],
            }
        ],
    };

    // Research Projects Data
    const researchProjects = [
        {
            title: "Study of Spanning tree with Maximum number of leaves",
            description: `Spanning Tree of a graph is a tree where all nodes are connected. A graph might have multiple spanning trees. A maximum leaves spanning tree (MLST) is a tree whose number of leaves is maximum. Finding MLST of a graph is a NP-hard problem. It is also APX-hard, which means its approximation ratio is bounded by a constant. By finding the MLST of a network, we can find the backbone of the network, which can be used to reduce the cost of the network. In this work, we tried to find an approximate algorithm for the MLST of a graph. We provide a heuristic algorithm following a bottom-up approach.`,
        },
        {
            title: "Chakma Handwritten Characters recognition and Multipurpose Dataset",
            description: `The Chakma language is an endangered language spoken by the Chakma people. Not so many resources are available in the Chakma language. Here we introduce a novel multilabel dataset for the Chakma language. The dataset contains 111,382 handwritten character images. We also introduce a novel data collection method and provide a baseline model, comparing with state-of-the-art models. We provide a novel pipeline for handwritten character recognition. First we convert handwritten characters to font type images using GAN, then we use a Visual Transformer based model for classification.`,
        },
        {
            title: "Multilingual machine translation for Chakma",
            description: `In this work we introduce a novel bilingual and monolingual corpus for the Chakma language. The dataset consists of 13,000 sentences, collected from various sources including online crowd sourcing. We then experiment with Neural Machine Translation (NMT) and Statistical Machine Translation (SMT).`,
        },
        {
            title: "Android malware detection",
            description: `In this work we curated a dataset from various sources. Then reverse engineered the APKs to form source code analyzing using APKtool for decompiling. We made a code parser and extracted import, method invocation, and parameter-based features from the source code. Afterwards, recursive feature elimination and PCA was used for feature reduction. Then we ran tree-based models for classification of benign and malicious apps. We ran feature importance on the collected dataset and found that, method invocation based features are the most important features.`,
        }
    ];

    // Personal Projects Data
    const personalProjects = [
        {
            title: "Beiong",
            liveUrl: "https://www.beiong.com",
            description: `Beiong is a modern, client-facing e-commerce platform designed for global scalability. It is built using a highly scalable microservices architecture on the backend and a mobile-first, TanStack Query-powered Next.js interface on the frontend. The project utilizes containerization and advanced AWS services for secure, high-performance commerce management.`,
            techStack: [
                "Java 21", "Spring Boot", "Spring Cloud", "Hibernate", "PostgreSQL", "AWS RDS", 
                "CloudFront", "CloudWatch", "AWS SNS", "S3", "AWS Lambda", "Spring Security", 
                "Docker", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Kafka", "Zod", "TanStack Query"
            ],
            features: [
                "Catalog Control: Full CRUD operations for Products & Categories with type-safe schema validation",
                "Promotion Management: Admin interface for Featured Products & Featured Categories storefront highlights",
                "Order Oversight: Secure order queues to monitor, filter, and track fulfillment status",
                "Advanced Attachment Service: Custom S3 multi-file upload flows via secure, time-limited presigned URLs",
                "SEO-Optimized Browsing: Fast storefront product discovery and category filtering",
                "Synchronized Cart: LocalStorage shopping cart with event-driven cross-tab browser syncing",
                "Secure Cookie-Based Auth: Automatic JWT attachment via Axios interceptors and typed cookie helpers",
                "Robust Error Boundaries: Multi-tiered error handling using custom BeiongError structures and UI alerts"
            ],
        },
        {
            title: "Online Shop",
            github: "https://github.com/aditya-chakma/Online-Shop",
            description: `An e-commerce online shop website. Users can open their shop and sell products online by posting them. After site admin validates and accepts the products, they will be visible to customers. Customer can place order for the products.`,
            techStack: ["Spring MVC", "Hibernate", "JDBC", "MySQL", "HTML", "CSS", "JSP"],
            features: [
                "Secure Admin Control: Dashboard for administrators to login, add, update, and discontinue products",
                "Fulfillment Pipeline: Admin order management queues to confirm or reject pending customer requests",
                "Product Catalog: Searchable public index allowing customers to discover and filter products by name",
                "Shopping Cart System: Interactive client-side cart allowing users to add products and proceed to checkout",
                "Order Management: Seamless checkout flows allowing customers to place, track, and view their order history",
                "User Registration: Secure customer signup and profile registration system"
            ],
        },
        {
            title: "Attention (Google Chrome Extension)",
            github: "https://github.com/aditya-chakma/Attention-Extension",
            description: `Developed a Chrome extension to enhance focus by blocking distracting websites, hiding YouTube shorts and Facebook reels, and bookmarking YouTube timestamps. Built using Vanilla JavaScript, Manifest V3, HTML, and CSS, with planned enhancements for customization and LLM-based content summarization.`,
            techStack: ["Javascript", "HTML", "CSS", "ManifestV3"],
            features: [
                "Timestamp Bookmarking: Custom bookmarking module to save specific playback moments in YouTube videos",
                "Reel Filtering: Content scripts to dynamically block and hide Facebook Reels from the homepage newsfeed",
                "Shorts Removal: DOM injection styles to filter and hide YouTube Shorts from homepages and suggestions",
                "Website Blocking: Customizable distraction blocker to restrict access to user-specified domains"
            ],
        }
    ];

    // Academic Projects Data
    const academicProjects = [
        {
            title: "Structured Programming Language: DX-Ball",
            github: "https://github.com/aditya-chakma/DX-Ball",
            description: `The 90's classic DX-Ball game re-created using C++, OpenGL, and iGraphics library. The iGraphics is a graphics library for C++ made by a final year student. This game has 5 different levels, lives system, and scoring system.`,
            techStack: ["C++", "iGraphics", "OpenGL/Glut Library"],
            features: [
                "Five Challenging Levels: Classically designed game tiers featuring custom block configurations and layout maps",
                "Real-Time Scoring: In-game scoring system that calculates points for broken bricks and acquired bonuses",
                "Lives & State Management: Interactive player health tracker that manages respawns and game-over scenarios"
            ],
        },
        {
            title: "OOP: Blood Bank",
            github: "https://github.com/aditya-chakma/CSE-206-BloodBank-JavaFX",
            description: `Used JavaFx to build a blood donation desktop application. Users and donors can register in the system. Upon users request for blood, donors in the corresponding location will get notified.`,
            techStack: ["Java", "JavaFx", "CSS"],
            features: [
                "Dual-User Registration: Dedicated JavaFX flows for both blood seekers and active donors to register profiles",
                "Spatial Routing: Proximity-based matching engine to identify and notify donors close to a requested location",
                "Donor Alerting: Real-time confirmation notifications sent automatically to requesters when a donor accepts",
                "Secure Records Management: Centralized system to manage donor eligibility history and blood groups"
            ],
        },
        {
            title: "Software Engineering: Travel Mate",
            github: "https://github.com/aditya-chakma/Travel-Mate/tree/master",
            description: `Travel Mate is a web application designed for managing tour agencies. It caters to two primary user groups: business owners and tourists. Business owners can register their businesses and list services such as hotel bookings and vehicle rentals. Tourists can sign up to explore and book these services. The platform tracks the availability of rooms and vehicles, updating their status in real-time to reflect current occupancy.`,
            techStack: ["Laravel", "MySQL"],
            features: [
                "Multi-Tenant Registration: Independent portals for tourist signups and business service client onboarding",
                "Unified Search Interface: Comprehensive filters to discover hotel listings, tour packages, and vehicle rentals",
                "Real-Time Availability: Live database tracking of room occupancies and vehicle availability states",
                "Payment Simulation: Virtual checkout pipeline simulating card payments for quick tour booking validation"
            ],
        },
        {
            title: "Neural Networks: LCU-Net",
            github: "https://github.com/aditya-chakma/LCU-net",
            description: `U-Net is an encoder-decoder based CNN architecture primarily designed for EMs (Environmental micro-organisms) segmentation. LCU-Net is a version of U-Net using much lower memory and computational power. I implemented the paper 'LCU-Net: A novel low-cost U-Net for environmental microorganism image segmentation' from scratch in python.`,
            techStack: ["Python", "Tensorflow", "Keras"],
            features: [
                "Low-Cost U-Net Model: Resource-efficient CNN implementation optimized for low-memory environments",
                "Microorganism Segmentation: Semantic segmentation pipeline to identify environmental microorganisms in images",
                "Scratch Implementation: Fully built custom model architecture using TensorFlow and Keras APIs in Python",
                "Model Evaluation: Automated verification using Dice Coefficient and Intersection over Union (IoU) metrics"
            ],
        }
    ];

    // Education Data
    const education = [
        {
            degree: "Master of Cyber Security",
            institution: "University of Newcastle Australia",
            period: "January 2026 - December 2027",
        },
        {
            degree: "M.Sc. in Computer Science and Engineering",
            institution: "Bangladesh University of Engineering and Technology (BUET)",
            period: "July 2021 - 2023",
            cgpa: "3.75/4.00",
            courses: [
                "Computer Security", "Neural Networks", "Advanced Digital Image Processing", 
                "Programming Languages and Systems", "Bioinformatics", "Wireless Ad-hoc Networks"
            ],
            thesis: {
                title: "Chakma Handwritten Characters Recognition and Multipurpose Dataset",
                status: "Ongoing",
            },
        },
        {
            degree: "B.Sc. in Computer Science and Engineering",
            institution: "Bangladesh University of Engineering and Technology (BUET)",
            period: "February 2016 - February 2021",
            cgpa: "3.30/4.00",
            courses: [
                "Pattern Recognition", "Artificial Intelligence", "Fault Tolerant Systems", 
                "High Performance Database", "Data Structure and Algorithms I", "Data Structure and Algorithms II", 
                "Concrete Mathematics", "Discrete Mathematics", "Software Engineering", "Database"
            ],
            thesis: {
                title: "Study of Spanning Tree with Maximum Number of Leaves",
                status: "Completed",
            },
        }
    ];

    // Certifications Data
    const onlineCertifications = [
        { src: "/assets/images/certifications/Coursera PGB4AZQ7Q4PT.jpg", title: "Deep Learning Specialization" },
        { src: "/assets/images/certifications/Coursera EWYYGJM85UPC.jpg", title: "Machine Learning (Stanford)" },
        { src: "/assets/images/certifications/Coursera 3V3PLW8DS4BT.jpg", title: "Neural Networks and Deep Learning" },
        { src: "/assets/images/certifications/Coursera 4L5J5P98KN4J.jpg", title: "Sequence Models" },
        { src: "/assets/images/certifications/Coursera XCZPX5XMJ3MU.jpg", title: "Convolutional Neural Networks" },
        { src: "/assets/images/certifications/Coursera SDJQ3ULKJQ53.jpg", title: "Improving Deep Neural Networks" },
        { src: "/assets/images/certifications/Coursera DB5U7KES96ND.jpg", title: "Structuring Machine Learning Projects" },
        { src: "/assets/images/certifications/Coursera LQ9ZS9DHHTQ5.jpg", title: "Introduction to Machine Learning" },
        { src: "/assets/images/certifications/Coursera W67A4ZPGD99T.jpg", title: "Winning Data Science Competitions" },
        { src: "/assets/images/certifications/Coursera VM8AG2EAQYPT.jpg", title: "Image Data Augmentation in Keras" },
        { src: "/assets/images/certifications/Coursera U4A4B9A53JC7.jpg", title: "Welcome to Game Theory" },
        { src: "/assets/images/certifications/Coursera 7XRY4KXYKGLT.jpg", title: "Getting And Cleaning Data" },
        { src: "/assets/images/certifications/Coursera A92KLND5EJUU.jpg", title: "R Programming" },
        { src: "/assets/images/certifications/Coursera E7QEN7H96DUF.jpg", title: "The Data Scientist's Toolbox" }
    ];

    const bdmoImages = [
        { src: "/assets/images/bdmo/2011.jpg", year: "2011", alt: "BDMO Certificate 2011" },
        { src: "/assets/images/bdmo/2010.jpg", year: "2010", alt: "BDMO Certificate 2010" },
        { src: "/assets/images/bdmo/2008.jpg", year: "2008", alt: "BDMO Certificate 2008" },
    ];

    const competitions = [
        "SIIM-ISIC Melanoma Classification (Kaggle)",
        "PetFinder.my - Cuteness Predictor (Kaggle)",
        "Bengali.AI - Grapheme Classification (Kaggle)",
        "Dhaka AI - Traffic Detection Challenge",
        "IUT National ICT Fest Hackathon 2017"
    ];

    const perfectAttendanceImage = "/assets/perfect_attendance.jpeg";

    // Helper to render bolded text in achievements list
    const renderBoldText = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, idx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={idx}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <div className="portfolio-single-page">
            
            {/* HERO SECTION */}
            <section id="home" className="section-hero">
                <div className="hero-container">
                    <div className="hero-text-side">
                        <h1>
                            Hi, I am Aditya <img src="/assets/images/wh.gif" alt="Wave" className="wave-hand" />
                        </h1>
                        <h2 className="hero-subtitle">Senior Full-Stack & Systems Engineer</h2>
                        <div className="introduction-text">
                            <p>
                                I am a <strong>Full-Stack Software Engineer</strong> with over <strong>5+ years of professional experience</strong> specializing in high-throughput backend systems, modern DevOps practices, and autonomous agentic AI workflows.
                            </p>
                            <p>
                                At Therap Services, I design and scale systems serving over <strong>1,000,000+ users</strong>, leading critical infrastructural upgrades (ActiveMQ to Kafka, JDK 8 to 21) and building secure, enterprise-grade AI automation pipelines.
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

            {/* EXPERIENCE & SKILLS SECTION */}
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

            {/* PROJECTS SECTION */}
            <section id="projects" className="section-projects">
                <div className="section-container">
                    <h2 className="section-title">Selected Projects</h2>

                    {/* AI & Agentic Development Callout */}
                    <div className="ai-development-callout">
                        <div className="callout-header">
                            <span className="callout-icon">🤖</span>
                            <div>
                                <h3>Agentic Coding and Agentic SDLC Automation</h3>
                                <p>Pioneering context-aware multi-agent development pipelines in professional software workflows.</p>
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

            {/* EDUCATION SECTION */}
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

            {/* CERTIFICATIONS SECTION */}
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
                            <p className="bdmo-intro-text">Selected and awarded certificates in BDMO state levels. Click thumbnails to inspect high-resolution credentials:</p>
                            <div className="bdmo-thumbnails-row">
                                {bdmoImages.map((image, idx) => (
                                    <div key={idx} className="bdmo-thumb-card" onClick={() => setSelectedImage(image.src)}>
                                        <img src={image.src} alt={image.alt} />
                                        <span>{image.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="perfect-att-col">
                            <h3>Perfect Attendance Recognition</h3>
                            <p className="perfect-att-text">Awarded Therap Services LLC Certificate for perfect commitment and zero missing logs during consecutive evaluation cycles.</p>
                            <div className="attendance-thumb-card" onClick={() => setSelectedImage(perfectAttendanceImage)}>
                                <img src={perfectAttendanceImage} alt="Perfect Attendance" />
                                <div className="overlay-click">Click to Expand Certificate</div>
                            </div>
                        </div>
                    </div>

                    {/* Online Certifications */}
                    <h3 className="section-sub-header" style={{ marginTop: '4rem' }}>Professional & Deep Learning Credentials</h3>
                    <p className="cert-intro-text">Interactive certification list with image validations. Click any card to preview the full verified credential:</p>
                    
                    <div className="certifications-matrix-grid">
                        {onlineCertifications.map((cert, index) => (
                            <div key={index} className="cert-interactive-card" onClick={() => setSelectedImage(cert.src)}>
                                <div className="cert-card-media">
                                    <img src={cert.src} alt={cert.title} />
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

            {/* CONTACT SECTION */}
            <section id="contact" className="section-contact">
                <div className="section-container">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="contact-subtitle">Have a project, job opening, or opportunity? Drop a secure message directly using the mailto: constructor below.</p>
                    
                    <div className="contact-form-layout">
                        <form onSubmit={handleFormSubmit} className="interactive-email-form">
                            <div className="form-row-group">
                                <div className="field-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        placeholder="E.g., John Doe"
                                        required
                                    />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        placeholder="E.g., Senior Engineer Role"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field-group textarea-group">
                                <label htmlFor="description">Message Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    rows={8}
                                    placeholder="Write details about the opportunity or inquiry here..."
                                    required
                                />
                            </div>

                            <div className="form-submit-row">
                                <button type="submit" className="btn-send-message">
                                    Send Email Draft 🚀
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* IMAGE MODAL PREVIEW FOR CERTIFICATIONS */}
            <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage} />
        </div>
    );
}
