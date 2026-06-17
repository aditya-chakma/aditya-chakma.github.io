import React from "react";
import ContactBar from "@/src/components/ContactBar";
import "@/src/styles/Skills.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills | Aditya::Portfolio",
    description:
        "Technical skills and work experience of Aditya Chakma, Senior Software Engineer at Therap Services LLC.",
};

const Skills = () => {
    const technicalSkills = [
        {
            category: "Programming Languages & Runtimes",
            skills: ["Java", "Python", "C++", "Go", "Rust", "Node.js", "TypeScript", "JavaScript", "SQL", "C#"],
            isTagCloud: true,
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                "Spring Boot",
                "Spring Cloud",
                "Spring Security",
                "Java EE/Jakarta EE",
                "JSF",
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "Shadcn/UI",
                "Zod",
                "TanStack Query",
                "REST API",
                "SOAP",
                "Swagger",
                "gRPC",
                "Protobuf",
            ],
            isTagCloud: true,
        },
        {
            category: "Cloud, DevOps & Infrastructure",
            skills: [
                "AWS (IAM, EC2, S3, Lambda, RDS, SNS, SQS, App Runner, CloudFront, CloudWatch, Route 53)",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "GitHub Actions",
                "Nginx",
                "Maven",
                "Apache Zookeeper",
                "WebLogic",
                "Tomcat",
            ],
            isTagCloud: true,
        },
        {
            category: "Agentic AI & Automation",
            skills: [
                "Autonomous Development Workflows (/plan, /design, /implement, /test, /review)",
                "AI Agent Persona Orchestration (Product Manager, Architect, Senior Dev, SDET, Security Auditor)",
                "Context-aware planning, HITL (Human-in-the-Loop) guardrails, validation checklists",
            ],
            isTagCloud: false,
        },
        {
            category: "Databases & Caching",
            skills: ["Oracle DBMS", "PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS RDS"],
            isTagCloud: true,
        },
        {
            category: "Data Streaming & Middleware",
            skills: ["Apache Kafka", "JMS", "Redis", "Webhooks"],
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
                "CatBoost",
                "LightGBM",
                "Random Forest",
                "Computer Vision (CNN, GAN, Visual Transformers for character recognition)",
            ],
            isTagCloud: true,
        },
        {
            category: "Testing & Tools",
            skills: ["JUnit", "Cypress", "Playwright", "Gatling", "Postman", "Linux", "Git"],
            isTagCloud: true,
        },
        {
            category: "Data Analysis & Visualization",
            skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
            isTagCloud: true,
        },
    ];

    const workExperience = {
        company: "Therap Services LLC",
        description: `5+ years of Software Engineering experience, specialized in developing and managing complex projects. Led core projects, delivering high-quality results. Strong experience in code review, cross-team development, mentoring, requirements gathering, ensuring compliance with accessibility, agentic development, and automation in an agile environment using Scrum practices. Focused on building secure, reliable, scalable, and robust systems.`,
        roles: [
            {
                title: "Sr. Software Engineer",
                period: "April 2026 - Present",
                achievements: [
                    "Architected an end-to-end RAG pipeline for Support agents using Python and LangChain, engineering autonomous Agents equipped with custom Tool-calling capabilities—including real-time user access and permission checks—to enable secure, compliant querying across a 10,000+ document enterprise knowledge base.",
                    "Migrated core legacy messaging infrastructure from ActiveMQ to Apache Kafka, introducing a phased migration strategy with a custom synchronization bridge ensuring zero message loss (outbox pattern), resulting in a 70% throughput gain and 40% latency reduction.",
                    "Steadfastly managed the JDK 8 to JDK 21 upgrade of a large legacy codebase, planning and managing in-app and service dependencies, leveraging OpenRewrite and custom recipes for efficient execution.",
                ],
            },
            {
                title: "Software Engineer II",
                period: "April 2024 - March 2026",
                achievements: [
                    "Worked in a team of 50+ members to maintain core system functionalities, including login, EVV (Electronic Visit Validation), Scheduling (Google Calendar-like), and Secure Messaging (Gmail-like secure messaging feature).",
                    "Architected and developed Webhook for Therap's aggregator application, enabling system-to-system communication with Therap suite efficiently and improving data integration.",
                    "Re-engineered high-volume cron jobs and data access patterns using Oracle Coherence, advanced query optimization, and intelligent indexing, reducing database QPS and achieving a 20% reduction in latency.",
                    "Load-tested API endpoints with Gatling and JMeter, identified a bottleneck in the legacy UUID generator, and replaced it with Twitter's Snowflake UUID, achieving 5x insert/update operations per second.",
                    "Dockerized multiple legacy services, including the authentication server, and developed a single-click deployment tool, streamlining DEV and QA deployment, cutting deployment time by 50%, and reducing developer hardware requirements by 33%.",
                    "Designed data-integration pipeline and fully automated manual workflows for data integration (SFTP and REST APIs), enabling Therap to secure Kentucky state project.",
                    "Rearchitected data import pipeline, enabling 20x faster processing and improved latency for large imports (150K+ rows) by using queue and batching techniques.",
                    "Mentored junior developers in multiple projects and participated in multiple tech-sessions.",
                ],
            },
            {
                title: "Software Engineer",
                period: "April 2022 - March 2024",
                achievements: [
                    "Integrated Salesforce and MaestroQA APIs into the Therap system to enable real-time synchronization of client data, automated QA reporting, and Live Chat, streamlining customer support workflows and reducing manual intervention by up to 80%.",
                    "Contributed to implementing an in-house authentication module, RBAC, and ABAC using Spring Security featuring MFA, OAuth2, JWT, IP whitelisting, rate-limiting, CAPTCHA, etc., replacing third-party IDPs and reducing authentication-related operational costs to zero.",
                    "Worked on HIPAA-compliant healthcare projects handling PHI data. Delivered state-specific solutions for Kentucky and Tennessee, implemented rollup-dashboard, and contributed to meeting the 21st Century Cures Act mandated by the Federal Government of the USA, which helped Therap to secure multi-million dollar state contracts.",
                    "Develop data-feed and dashboard for high-traffic, high-volume data, processing over 1 million records per day using Spring Batch, JDBC Template, and Redis with asynchronous processing, multithreading, and caching for data-driven decision-making, reporting, and compliance monitoring, enabling real-time insights.",
                    "Architected and redesigned third-party API endpoints, reducing API calls overhead by 50%. Developed several RESTful APIs for multiple existing modules to support cross-platform development, including mobile platforms and IoT.",
                    "Optimized the most frequent database queries for cron jobs, improving throughput by up to 5x.",
                    "Involved in development and QA-side server deployment using Weblogic, Nginx, Tomcat ensuring high performance and stability.",
                ],
            },
            {
                title: "Associate Software Engineer",
                period: "March 2021 - March 2022",
                achievements: [
                    "Developed and maintained a large-scale customer-facing B2B SaaS application (therapservices.net) with 20+ state contracts. The application has 40,000+ Daily CCU (Concurrent Users) and serves over 1,000,000+ individuals.",
                    "Developed and maintained several state projects and contributed to core modules, including Therap's T-log with millions of forms submitted every week.",
                    "Optimized on-demand loading of resources across the system, cached static resources, and integrated CDNs, reducing network bandwidth by 20% and improving page load time with overall responsiveness.",
                    "Fixed bugs for existing APIs and developed RESTful APIs for third-party consumers.",
                    "Developed an in-house message translation tracker for localization of the application.",
                ],
            },
        ],
    };

    const researchProjects = [
        {
            title: "Study of Spanning tree with Maximum number of leaves",
            description: `Spanning Tree of a graph is a tree where all nodes are connected. A graph might have multiple spanning tree. A maximum leaves spanning tree (MLST) is a tree whose number of leaves is maximum. Finding MLST of a graph is a NP-hard problem. It is also APX-hard, which means it's approximation ratio is bounded by a constant. By finding the MLST of a network, we can find the backbone of the network, which can be used to refuce cost of the network. In this work, we tried to find an approximate algorithm for the MLST of a graph. We provide a heuristic algorithm following bottom-up approach.`,
        },
        {
            title: "Chakma Handwritten Characters recognition and Multipurpose Dataset",
            description: `The Chakma language is a endangered language spoken by the Chakma people from Bangladesh. Not so many resources are available in Chakma language.
            Here we introduce a novel multilabel dataset for the Chakma language. The dataset contains 111,382 handwritten character images. We also introduce 
            a novel data collection method and provide a baseline model and provide statistics, comparing with the state-of-the-art models. We provide a novel
            pipeline for handwritten character recognition. First we convert handwritten characters to font type images using GAN, then we use a Visual
            Transformer based model for classification.`,
        },
        {
            title: "Multilingual machine translation for Chakma",
            description: `In this work we introduce a novel bilingual and monolingual corpus for the Chakma language. The dataset consists of 13,000 sentences, collected from
            various ources including online crowd sourcing. We then expriment with NMT and SMT.`,
        },
        {
            title: "Android malware detection",
            description: `In this work we have curated a dataset from various sources. Then reverse engineered the APKs to for source code analysing using APKtool for
            decompiling. We made a code parser and extracted import, method invocation and parameter based features from the source code. Afterwords,
            recursive feature enimilation and PCA was used for feature reduction. Then we ran tree based models for classification of benign and
            malicious apps. We ran feature importance on the collected dataset and found that, method invocation based featuers are the most important features.`,
        },
    ];

    return (
        <div className="skills-page">
            <ContactBar />
            
            <section className="work-experience">
                <h2>Work Experience</h2>
                <div className="company-info">
                    <h3>{workExperience.company}</h3>
                    <p className="company-description">{workExperience.description}</p>
                </div>
                <div className="experience-timeline">
                    {workExperience.roles.map((role, index) => (
                        <div key={index} className="role-card">
                            <div className="role-header">
                                <h4>{role.title}</h4>
                                <span className="period">{role.period}</span>
                            </div>
                            <ul className="achievements">
                                {role.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="technical-skills">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {technicalSkills.map(({ category, skills, isTagCloud }) => (
                        <div
                            key={category}
                            className={`skill-category ${isTagCloud ? "tag-cloud-category" : "list-category"}`}
                        >
                            <h3>{category}</h3>
                            {isTagCloud ? (
                                <div className="skills-tags">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <ul>
                                    {skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="research-experience">
                <h2>Research Experience</h2>
                <div className="research-grid">
                    {researchProjects.map((project, index) => (
                        <div key={index} className="research-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
