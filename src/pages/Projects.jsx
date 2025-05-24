import React from 'react';
import './Projects.css';
import ContactBar from '../components/ContactBar';

const Projects = () => {
  const personalProjects = [
    {
      title: "Jumghor",
      github: "https://github.com/aditya-chakma/Jumghor",
      description: "Jumghor is an experimental, privacy-centric social media application built with a microservices architecture. The current implementation includes core functionalities such as user registration, creating posts, viewing user profiles, commenting on posts, and managing friend requests.",
      techStack: [
        "Java 21", "Node.js", "Spring Boot", "Spring Security", "Eureka", "Open Feign", 
        "WebSocket", "Kafka", "Zookeeper", "PostgreSQL", "React", "Typescript", 
        "Tailwind CSS", "Microservices", "Restful APIs", "Docker", "Maven"
      ],
      features: [
        "User registration", "User friend request", "Post", "Comment", "View profiles"
      ]
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

  const courseProjects = [
    {
      title: "Structured Programming Language: DX-Ball",
      github: "https://github.com/aditya-chakma/DX-Ball",
      description: "The 90's classic DX-Ball game re-created using C++, OpenGL, and iGraphics library. The iGraphics is a graphics library for C++ made by a final year student. This game has 5 different levels, lives system, and scoring system.",
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
      description: "Used JavaFx to build a blood donation desktop application. Users and donors can register in the system. Upon users request for blood, donors in the corresponding location will get notified.",
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
      description: "Travel Mate is a web application designed for managing tour agencies. It caters to two primary user groups: business owners and tourists. Business owners can register their businesses and list services such as hotel bookings and vehicle rentals. Tourists can sign up to explore and book these services. The platform tracks the availability of rooms and vehicles, updating their status in real-time to reflect current occupancy.",
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
      description: "U-Net is a encoder decoder based CNN architecture primarily designed for EMs(Environmental micro-organisms) segmentation. LCU-Net is a version of U-Net using much lower memory and computational power. I implemented the paper LCU-Net: A novel low-cost U-Net for environmental microorganism image segmentation from scratch in python.",
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
      <section className="personal-projects">
        <h2>Personal Projects</h2>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
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

      <section className="course-projects">
        <h2>Course Projects (Selective)</h2>
        <div className="projects-grid">
          {courseProjects.map((project, index) => (
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