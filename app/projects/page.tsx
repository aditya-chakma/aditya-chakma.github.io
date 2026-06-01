import React from 'react';
import ContactBar from '@/src/components/ContactBar';
import "@/src/styles/Projects.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Aditya::Portfolio',
  description: 'Personal, academic, and AI agentic development projects by Aditya Chakma, including Beiong e-commerce, AI workflows, and browser extensions.',
};

const Projects = () => {
  const personalProjects = [
    {
      title: "Beiong",
      liveUrl: "https://www.beiong.com",
      description: `Beiong is a modern, client-facing e-commerce platform designed for global scalability. It is built 
        using a highly scalable microservices architecture on the backend and a mobile-first, TanStack Query-powered Next.js 
        interface on the frontend. The project utilizes containerization and advanced AWS services for secure, high-performance 
        commerce management.`,
      techStack: [
        "Java 21", "Spring Boot", "Spring Cloud", "Hibernate", "PostgreSQL", "AWS RDS",
        "CloudFront", "CloudWatch", "AWS SNS", "S3", "Spring Security", "Docker",
        "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Kafka", "Zod", "TanStack Query"
      ],
      features: {
        admin: [
          "Catalog Control: Full CRUD operations for Products & Categories with type-safe schema validation",
          "Promotion Management: Admin interface for Featured Products & Featured Categories storefront highlights",
          "Order Oversight: Secure order queues to monitor, filter, and track fulfillment status",
          "Advanced Attachment Service: Custom S3 multi-file upload flows via secure, time-limited presigned URLs"
        ],
        customer: [
          "SEO-Optimized Browsing: Fast storefront product discovery and category filtering",
          "Synchronized Cart: LocalStorage shopping cart with event-driven cross-tab browser syncing",
          "Secure Cookie-Based Auth: Automatic JWT attachment via Axios interceptors and typed cookie helpers",
          "Robust Error Boundaries: Multi-tiered error handling using custom BeiongError structures and UI alerts"
        ]
      }
    },
    {
      title: "Online Shop",
      github: "https://github.com/aditya-chakma/Online-Shop",
      description: "An e-commerce online shop website. Users can open their shop and sell products online by posting them. After site admin validates and accepts the products, they will be visible to customers. Customer can place order for the products.",
      techStack: [
        "Spring MVC", "Hibernate", "JDBC", "MySQL", "HTML", "CSS", "JSP"
      ],
      features: {
        admin: [
          "Login",
          "Add Product",
          "Discontinue Product",
          "Update Product",
          "See all Products",
          "Confirm Order",
          "Reject Order",
          "Search Product by name"
        ],
        customer: [
          "Register",
          "See all Products",
          "Add Product to Cart",
          "Checkout Cart",
          "Place Order",
          "Delete Order",
          "View previous Order history",
          "Search product by name"
        ]
      }
    },
    {
      title: "Attention (Google Chrome Extension)",
      github: "https://github.com/aditya-chakma/Attention-Extension",
      description: "Developed a Chrome extension to enhance focus by blocking distracting websites, hiding YouTube shorts and Facebook reels, and bookmarking YouTube timestamps. Built using Vanilla JavaScript, Manifest V3, HTML, and CSS, with planned enhancements for customization and LLM-based content summarization.",
      techStack: [
        "Javascript", "HTML", "CSS", "ManifestV3"
      ],
      features: [
        "Bookmark timestamps of youtube videos",
        "Remove facebook reels from newsfeed",
        "Remove youtube shorts from homepage",
        "Block websites"
      ]
    }
  ];

  const academicProjects = [
    {
      title: "Structured Programming Language: DX-Ball",
      github: "https://github.com/aditya-chakma/DX-Ball",
      description: `The 90's classic DX-Ball game re-created using C++, OpenGL, and iGraphics library. The iGraphics 
        is a graphics library for C++ made by a final year student. This game has 5 different levels, lives system, and scoring system.`,
      techStack: [
        "C++", "iGraphics", "OpenGL/Glut Library"
      ],
      features: [
        "5 levels", "Scoring system", "Lives system"
      ]
    },
    {
      title: "OOP: Blood Bank",
      github: "https://github.com/aditya-chakma/CSE-206-BloodBank-JavaFX",
      description: `Used JavaFx to build a blood donation desktop application. Users and donors can register in the
        system. Upon users request for blood, donors in the corresponding location will get notified.`,
      techStack: [
        "Java", "JavaFx", "CSS"
      ],
      features: [
        "Donor registration",
        "User registration",
        "Location based donor notification",
        "Requester notification on donor confirmation"
      ]
    },
    {
      title: "Software Engineering: Travel Mate",
      github: "https://github.com/aditya-chakma/Travel-Mate/tree/master",
      description: `Travel Mate is a web application designed for managing tour agencies. It caters to two primary user
       groups: business owners and tourists. Business owners can register their businesses and list services such as
        hotel bookings and vehicle rentals. Tourists can sign up to explore and book these services. The platform tracks
         the availability of rooms and vehicles, updating their status in real-time to reflect current occupancy.`,
      techStack: [
        "Laravel", "MySQL"
      ],
      features: [
        "User registration",
        "Client Registration",
        "Product search",
        "Product payment",
        "Room/Vehicle rent, release"
      ]
    },
    {
      title: "Neural Networks: LCU-Net",
      github: "https://github.com/aditya-chakma/LCU-net",
      description: `U-Net is a encoder decoder based CNN architecture primarily designed for EMs(Environmental micro-organisms)
       segmentation. LCU-Net is a version of U-Net using much lower memory and computational power. I implemented the paper
        LCU-Net: A novel low-cost U-Net for environmental microorganism image segmentation from scratch in python.`,
      techStack: [
        "Python", "Tensorflow", "Keras"
      ],
      features: [
        "ARP cache poisoning",
        "Arithmetic Logical Unit (ALU)",
        "4 bit computer",
        "Remote Control Car using ATMega32"
      ]
    }
  ];

  return (
    <div className="projects-page">
      <ContactBar />

      <section className="ai-agentic-development">
        <h2>AI Assisted Coding, Agentic Development and Automation</h2>
        <p className="section-subtitle">
          Pioneering context-aware multi-agent software engineering workflows to orchestrate, automate, and secure the
          software development lifecycle (SDLC) in the Beiong e-commerce project.
        </p>

        <div className="agentic-grid">
          <div className="agentic-card">
            <div className="card-badge badge-orchestration">Orchestration & Workflows</div>
            <h3>Multi-Agent Orchestration</h3>
            <p className="card-intro">
              Orchestrates specialized AI agent personas matching the SDLC phases via custom pipeline commands to automate
              development tasks with maximum quality:
            </p>
            <div className="workflow-steps">
              <div className="step">
                <span className="step-cmd">/plan</span>
                <span className="step-desc">Activates <strong>@product-manager</strong> to digest raw requirements,
                  execute epic-breakdowns, and structure roadmap milestones.</span>
              </div>
              <div className="step">
                <span className="step-cmd">/design</span>
                <span className="step-desc">Activates <strong>@architect</strong> to map out type-safe data flows,
                  draft interface schemas, and generate Mermaid system diagrams.</span>
              </div>
              <div className="step">
                <span className="step-cmd">/implement</span>
                <span className="step-desc">Activates <strong>@senior-dev</strong> to surgically write clean, strongly-typed
                  code adhering to strict project patterns.</span>
              </div>
              <div className="step">
                <span className="step-cmd">/test</span>
                <span className="step-desc">Activates <strong>@sdet</strong> to parse code, auto-generate unit/integration
                  tests, and iterate until the suites pass completely.</span>
              </div>
              <div className="step">
                <span className="step-cmd">/review</span>
                <span className="step-desc">Activates <strong>@security-auditor</strong> to perform OWASP audits and
                  static analysis, flagging optimizations with precise line numbers.</span>
              </div>
            </div>
          </div>

          <div className="agentic-card">
            <div className="card-badge badge-autonomy">Autonomy & Planning</div>
            <h3>Context-Aware Autonomy</h3>
            <p className="card-intro">
              Enables highly autonomous execution by embedding explicit project context schema files within the repository.
              Agents dynamically parse, reference, and synchronize:
            </p>
            <ul className="agentic-list">
              <li><strong>dependency.md:</strong> Prevents version bloating and enforces package restrictions.</li>
              <li><strong>architecture.md:</strong> Outlines state providers, API Axios clients, and data hooks.</li>
              <li><strong>engineering_standards.md:</strong> Dictates custom TypeScript quality rules and formatting principles.</li>
            </ul>
            <div className="agentic-highlights">
              <strong>Impact:</strong> Achieves safe, fully context-aware autonomous execution without standard AI drift.
            </div>
          </div>

          <div className="agentic-card">
            <div className="card-badge badge-safety">HITL & Safety</div>
            <h3>Human-in-the-Loop & Safety</h3>
            <p className="card-intro">
              Ensures absolute system safety and alignment through strictly enforced Human-in-the-Loop (HITL)
              authorization gates and verification.
            </p>
            <ul className="agentic-list">
              <li><strong>Verification Gates:</strong> The agent halts and displays interactive strategies after
                `/plan` and `/design` phases, waiting for human verification before writing code.</li>
              <li><strong>Rigid Success Criteria:</strong> Every implementation is measured against an automated
                <code>validation_checklist.md</code> governing DRY principles, component reuse, mobile-first design,
                and clean compilation.</li>
            </ul>
            <div className="agentic-highlights">
              <strong>Result:</strong> Zero stray modifications, maintaining 100% human control over architecture.
            </div>
          </div>
        </div>
      </section>

      <section className="personal-projects">
        <h2>Personal Projects</h2>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub
                </a>
              ) : (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  Live Site
                </a>
              )}
              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <div className="tech-stack">
                <h4>Tech Stack</h4>
                <div className="tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="features">
                <h4>Features</h4>
                {Array.isArray(project.features) ? (
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="feature-roles">
                    <div className="admin-features">
                      <h5>Admin Features</h5>
                      <ul>
                        {project.features.admin.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="customer-features">
                      <h5>Customer Features</h5>
                      <ul>
                        {project.features.customer.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="academic-projects">
        <h2>Academic Projects</h2>
        <div className="projects-grid">
          {academicProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <div className="tech-stack">
                <h4>Tech Stack</h4>
                <div className="tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="features">
                <h4>Features</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
