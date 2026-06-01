import React from "react";
import ContactBar from "@/src/components/ContactBar";
import "@/src/styles/Home.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Aditya::Portfolio',
    description: 'Aditya Chakma - Full-Stack Engineer with 5+ years of experience specializing in systems, DevOps, and agentic AI workflows.',
    openGraph: {
        title: 'Aditya::Portfolio',
        description: 'Full-Stack Engineer with 5+ years of experience in systems, DevOps, and agentic AI workflows.',
        images: ['/assets/images/Aditya.jpg'],
    },
};

const Home = () => {
    return (
        <div className="home">
            <ContactBar />
            <div className="content-container">
                <div className="left-content">
                    <h1>
                        Hi <img src="/assets/images/wh.gif" alt="Wave" className="wave-hand" />
                    </h1>
                    <div className="introduction" style={{ textAlign: "justify" }}>
                        <p>
                            I am Aditya. I am a Full-Stack Engineer specializing in systems, DevOps, and agentic AI workflows,
                            with over 5+ years of experience building scalable, reliable, and secure microservices and applications.
                        </p>

                        <p>
                            During my tenure, I have designed high-throughput architectures, established CI/CD pipelines, containerized
                            complex microservices, and designed secure communication flows. I have led multiple system-critical projects,
                            integrated diverse cloud services, and implemented highly secure systems for HIPAA-compliant PHI data. By optimizing
                            database performance, DB QPS, query indexes, and caching strategies, I have achieved massive latency reductions
                            and maximized system throughput.
                        </p>

                        <p>
                            Furthermore, I specialize in Agentic AI systems—building autonomous, multi-agent orchestrations and development workflows
                            that streamline code generation, testing, security audits, and lifecycle management while maintaining strict safety,
                            autonomy, and human-in-the-loop controls.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <img src="/assets/images/Aditya.jpg" alt="Aditya Chakma" className="profile-picture" />
                </div>

                <div className="right-content">
                    <div className="profile-highlights">
                        <h2>Profile Highlights</h2>
                        <ul>
                            <li>Java, Go, TypeScript, Python</li>
                            <li>Spring Boot, Spring Cloud, Next.js, React</li>
                            <li>Agentic AI Systems & LLM Orchestration</li>
                            <li>DevOps & CI/CD: Docker, Kubernetes, Jenkins</li>
                            <li>Networking: Nginx, WebLogic, Tomcat, CloudFront</li>
                            <li>AWS: IAM, S3, SNS, SQS, RDS, CloudWatch</li>
                            <li>Oracle, PostgreSQL, MySQL, MongoDB, Redis</li>
                            <li>Kafka, JMS, RabbitMQ, Webhooks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
