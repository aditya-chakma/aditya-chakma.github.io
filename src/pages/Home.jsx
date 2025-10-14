import React from "react";
import "./Home.css";
import profilePic from "../assets/images/Aditya.jpg";
import waveHand from "../assets/images/wh.gif";
import ContactBar from "../components/ContactBar";

const Home = () => {
    return (
        <div className="home">
            <ContactBar />
            <div className="content-container">
                <div className="left-content">
                    <h1>
                        Hi <img src={waveHand} alt="Wave" className="wave-hand" />
                    </h1>
                    <div className="introduction">
                        <p>
                            I am Aditya. I am a Software Engineer with 5 years of experience building scalable, reliable
                            and secure microservices using Java.
                        </p>

                        <p>
                            During my tenure, I have led multiple system-critical projects and integrated various
                            third-party services, while also developing highly secure systems for protected health
                            information (PHI) data. My work has significantly optimized system performance through
                            frequent cron optimizations, reduced DB QPS, improved system response times, and enhanced
                            data pipelines.
                        </p>

                        <p>
                            Additionally, I have actively participated in cross-team collaborations, conducted pull
                            request reviews, ensured timely project delivery, and mentored junior developers to foster
                            their skill growth.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <img src={profilePic} alt="Aditya Chakma" className="profile-picture" />
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
