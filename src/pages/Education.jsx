import React from 'react';
import './Education.css';
import ContactBar from '../components/ContactBar';

const Education = () => {
  const education = [
    {
      degree: "M.Sc. in Computer Science and Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      period: "July 2021 - Present",
      cgpa: "3.75/4.00",
      courses: [
        "Computer Security",
        "Neural Networks",
        "Advanced Digital Image Processing",
        "Programming Languages and Systems",
        "Bioinformatics",
        "Wireless Ad-hoc Networks"
      ],
      thesis: {
        title: "Chakma Handwritten Characters Recognition and Multipurpose Dataset",
        status: "Ongoing"
      }
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      period: "February 2016 - February 2021",
      cgpa: "3.30/4.00",
      courses: [
        "Pattern Recognition",
        "Artificial Intelligence",
        "Fault Tolerant Systems",
        "High Performance Database",
        "Data Structure and Algorithms I",
        "Data Structure and Algorithms II",
        "Concrete Mathematics",
        "Discrete Mathematics",
        "Software Engineering",
        "Database"
      ],
      thesis: {
        title: "Study of Spanning Tree with Maximum Number of Leaves",
        status: "Completed"
      }
    }
  ];

  return (
    <div className="education-page">
      <ContactBar />
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="period">{edu.period}</span>
              </div>
              
              <div className="institution-info">
                <p className="institution">{edu.institution}</p>
                <p className="cgpa">CGPA: {edu.cgpa}</p>
              </div>

              <div className="courses">
                <h4>Key Courses</h4>
                <div className="course-tags">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>

              <div className="thesis">
                <h4>Thesis</h4>
                <p className="thesis-title">{edu.thesis.title}</p>
                <span className="thesis-status">{edu.thesis.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education; 