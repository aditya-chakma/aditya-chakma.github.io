import React from 'react';
import './Skills.css';
import ContactBar from '../components/ContactBar';

const Skills = () => {
  const technicalSkills = {
    'Programming languages': [
      'Java(expert), C (fluent), C++ (fluent), C# (experienced)',
      'Python (expert), Javascript (fluent), R (experienced), Matlab (experienced)'
    ],
    'Database': [
      'Oracle DBMS, MySql, PostgreSQL'
    ],
    'Dev-Ops': [
      'Nginx, Weblogic, Tomcat, Docker, Apache Zookeeper, Jenkins (CI/CD)'
    ],
    'Project Management': [
      'Jira, Trello, Slack'
    ],
    'Web Frameworks and technologies': [
      'Spring boot, Spring MVC, Spring Cloud',
      'Hibernate, Java EE',
      'REACT, JSP, JSF, Primefaces, Thymeleaf, XHTML, HTML, CSS',
      'REST API, SOAP, Sweager',
      'JSON, Protobuf'
    ],
    'Load Testing': [
      'Gatling, Postman, JUnit'
    ],
    'Machine Learning frameworks': [
      'Tensorflow 2.0, Keras, Pytorch',
      'XGBoost, Sklearn, CatBoost, Light GBM, Random Forest',
      'Sklearn linear models'
    ],
    'Data analysis': [
      'Pandas, Matplotlib, Sklearn, Seaborn'
    ]
  };

  const workExperience = {
    company: "Therap Services LLC",
    description: "4+ years of Software Engineering experience and specialized in developing and managing complex projects, especially in healthcare and EVV (Electronic Visit Validation) systems. Built and maintained a B2B cursomer facing enterprise application. Worked in a team of 50+ members and led some core projects, delivering high-quality results. Strong experience in code review, cross-team development, mentoring, ensuring compliance with accessibility, and efficient project delivery using Scrum practices. I aim to build secure, reliable, scalable, and robust systems.",
    roles: [
      {
        title: "Software Engineer II",
        period: "April 2024-Present",
        achievements: [
          "Developed and maintained a large-scale customer facing B2B SaaS application (therapservices.net) with 20+ state contracts. The application has 40,000+ Daily CCU (Concurrent users) and serves over 1,000,000+ individuals.",
          "Worked on a team of 50+ members and maintained core system functionalities, including login, EVV (Electronic Visit Validation), Scheduling (Google calendar-like), and Secure messaging (Gmail-like secure messaging feature).",
          "Architected and developed Webhook for Therap's aggregator application, enabling system-to-system communication with Therap suite efficiently and improving data integration",
          "Mentored junior developers in multiple projects and participated in multiple tech-sessions.",
          "Load tested API's using Gatling and Postman and optimized endpoints improving performance by a factor of 10x to handle over thousands of requests per second.",
          "Designed a UUID and client secret generator for Therap applicaitons in distributed environment.",
          "Reduced DB QPS by a factor of 25x for a featue related to most frequently used module (IDF) by system users, using Oracle coherence and write-back method from second level cache",
          "Containerized multiple services including Therap's authentication server for consistent app deploymnet across multiple production and development environments.",
          "Designed and developed dashboard and data-feed for Tennessee and Kentucky for data-driven decision-making, report- ing, and compliance monitoring, enabling real-time insights.",
          "Worked on jdk and spring version upgrade for Theraps aggregator application.",
          "Designed data-integration pipeline and fully automated manual workflows for data integration (SFTP and REST APIs), enabling Therap to secure Kentucky state project.",
          "Rearchitected data import pipeline, enabling 100x faster processing and improved latency for large imports (150K+ rows) by using queue and batching techniques.",
          "Architected and developed AI-ChatBot for enhanced user interaction and support using ollama, reducing operational cost of Service Agents."
        ]
      },
      {
        title: "Software Engineer",
        period: "March 2022-April 2024",
        achievements: [
          "Led critical projects such as Salesforce live chat integration in Therap System and automated chat import process from a third-party system using RestAPI.",
          "Architected and redesigned third-party API endpoints, reducing API calls overhead by 50%. Developed several RestAPIs for multiple existing modules to support cross-platform development, including mobile platforms and IoT.",
          "Worked on HIPAA-compliant healthcare projects handling PHI data. Delivered state-specific solutions for Kentucky and Tennessee, implemented rollup-dashboard, and contributed to meeting the 21st Century Cures Act mandated by the Federal Government of the USA, which helped Therap to secure multi-million dollar state contracts.",
          "Optimized on-demand loading for JavaScript scripts across the system, reducing network consumption by 20%.",
          "Optimized the most frequent database queries for cron jobs, improving performance by up to 5x.",
          "Involved in development and QA-side server deployment using Weblogic, Nginx, Tomcat ensuring high performance and stability."
        ]
      },
      {
        title: "Associate Software Engineer",
        period: "March 2021-March 2022",
        achievements: [
          "Developed and maintained several state projects and contributed to core modules",
          "Optimized and fixed bugs for core modules, such as Therap's T-log with millions of forms submitted every week.",
          "Fixed bugs for existing API's and developed RestAPIs for third party consumers.",
          "Developed an in-house message translation tracker for localization of the application",
          "Worked on Webhook, Message Queue, Push notifications, RESTful APIs, Spring Security, REACT, Spring MVC, Spring Boot, Servlet, Hibernate, JDBC, MySQL, Git, Java, JavaScript, and jQuery."
        ]
      }
    ]
  };

  const researchProjects = [
    {
      title: "Study of Spanning tree with Maximum number of leaves",
      description: "Spanning Tree of a graph is a tree where all nodes are connected. A graph might have multiple spanning tree. A maximum leaves spanning tree (MLST) is a tree whose number of leaves is maximum. Finding MLST of a graph is a NP-hard problem. It is also APX-hard, which means it's approximation ratio is bounded by a constant. By finding the MLST of a network, we can find the backbone of the network, which can be used to refuce cost of the network. In this work, we tried to find an approximate algorithm for the MLST of a graph. We provide a heuristic algorithm following bottom-up approach."
    },
    {
      title: "Chakma Handwritten Characters recognition and Multipurpose Dataset",
      description: "The Chakma language is a endangered language spoken by the Chakma people from Bangladesh. Not so many resources are available in Chakma language. Here we introduce a novel multilabel dataset for the Chakma language. The dataset contains 111,382 handwritten character images. We also introduce a novel data collection method and provide a baseline model and provide statistics, comparing with the state-of-the-art models. We provide a novel pipeline for handwritten character recognition. First we convert handwritten characters to font type images using GAN, then we use a Visual Transformer based model for classification."
    },
    {
      title: "Multilingual machine translation for Chakma",
      description: "In this work we introduce a novel bilingual and monolingual corpus for the Chakma language. The dataset consists of 13,000 sentences, collected from various ources including online crowd sourcing. We then expriment with NMT and SMT."
    },
    {
      title: "Android malware detection",
      description: "In this work we have curated a dataset from various sources. Then reverse engineered the APKs to for source code analysing using APKtool for decompiling. We made a code parser and extracted import, method invocation and parameter based features from the source code. Afterwords, recursive feature enimilation and PCA was used for feature reduction. Then we ran tree based models for classification of benign and malicious apps. We ran feature importance on the collected dataset and found that, method invocation based featuers are the most important features."
    }
  ];

  return (
    <div className="skills-page">
      <ContactBar />
      <section className="technical-skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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