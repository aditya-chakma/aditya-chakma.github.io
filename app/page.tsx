import React from "react";
import ContactBar from "@/src/components/ContactBar";
import "@/src/styles/Home.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aditya::Portfolio',
  description: 'Aditya Chakma - Software Engineer with 5 years of experience building scalable, reliable and secure microservices using Java.',
  openGraph: {
    title: 'Aditya::Portfolio',
    description: 'Software Engineer with 5 years of experience in Java, Go, and Microservices.',
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
                            I am Aditya. I am a Software Engineer with 5 years of experience building scalable, reliable
                            and secure microservices using Java.
                        </p>

                        <p>
                            During my tenure, I have led multiple system-critical projects and integrated various
                            third-party services, while also developing highly secure systems for protected health
                            information (PHI) data. In my work, I have optimized system performance by reduced DB QPS,
                            reducing latency, and increasing system throughput.
                        </p>

                        <p>
                            Additionally, I have actively participated in cross-team collaborations, conducted pull
                            request reviews, ensured timely project delivery, and mentored junior developers to foster
                            their skill growth.
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
                            <li>Java, Go, C++</li>
                            <li>Spring Boot, Spring Cloud, Spring Security</li>
                            <li>Oracl DBMS, MySql, PostgreSQL, MongoDB</li>
                            <li>Docker, Kubernetes</li>
                            <li>AWS IAM, S3, SNS, SQS, Lambda</li>
                            <li>Kafka, JMS, RabbitMQ, Redis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
