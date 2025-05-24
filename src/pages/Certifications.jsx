import React, { useState } from 'react';
import './Certifications.css';
import ContactBar from '../components/ContactBar';
import ImageModal from '../components/ImageModal';

// Import BDMO images
import bdmo2011 from '../assets/images/bdmo/2011.jpg';
import bdmo2010 from '../assets/images/bdmo/2010.jpg';
import bdmo2008 from '../assets/images/bdmo/2008.jpg';

// Import Certification images
import cert1 from '../assets/images/certifications/Coursera 3V3PLW8DS4BT.jpg';
import cert2 from '../assets/images/certifications/Coursera 4L5J5P98KN4J.jpg';
import cert3 from '../assets/images/certifications/Coursera 7XRY4KXYKGLT.jpg';
import cert4 from '../assets/images/certifications/Coursera A92KLND5EJUU.jpg';
import cert5 from '../assets/images/certifications/Coursera DB5U7KES96ND.jpg';
import cert6 from '../assets/images/certifications/Coursera E7QEN7H96DUF.jpg';
import cert7 from '../assets/images/certifications/Coursera EWYYGJM85UPC.jpg';
import cert8 from '../assets/images/certifications/Coursera LQ9ZS9DHHTQ5.jpg';
import cert9 from '../assets/images/certifications/Coursera PGB4AZQ7Q4PT.jpg';
import cert10 from '../assets/images/certifications/Coursera SDJQ3ULKJQ53.jpg';
import cert11 from '../assets/images/certifications/Coursera U4A4B9A53JC7.jpg';
import cert12 from '../assets/images/certifications/Coursera VM8AG2EAQYPT.jpg';
import cert13 from '../assets/images/certifications/Coursera W67A4ZPGD99T.jpg';
import cert14 from '../assets/images/certifications/Coursera XCZPX5XMJ3MU.jpg';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const bdmoImages = [
    { src: bdmo2011, year: '2011', alt: 'BDMO Certificate 2011' },
    { src: bdmo2010, year: '2010', alt: 'BDMO Certificate 2010' },
    { src: bdmo2008, year: '2008', alt: 'BDMO Certificate 2008' }
  ];

  const competitions = [
    'SMIM-ISIC Melanoma Classification',
    'PetFinder.my - Detect specific pets',
    'Bengali.AI - AI for Bangla',
    'Dhaka AI - Dhaka Traffic detection',
    'IUT hackthon 2017'
  ];

  const onlineCertifications = [
    { src: cert1, title: 'Neural Networks and Deep learning' },
    { src: cert2, title: 'Sequence Models' },
    { src: cert3, title: 'Getting And Cleaning Data' },
    { src: cert4, title: 'R Programming' },
    { src: cert5, title: 'Structuring Machine Learning Projects' },
    { src: cert6, title: "The Data Scientist's Toolbox" },
    { src: cert7, title: 'Machine Learning' },
    { src: cert8, title: 'Introduction to Machine Learning' },
    { src: cert9, title: 'Deep Learning Specialization' },
    { src: cert10, title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Normalization' },
    { src: cert11, title: 'Welcome to Game Theory' },
    { src: cert12, title: 'Image Data Augmentation in Keras' },
    { src: cert13, title: 'How to win a data science Competition: Learn from top Kagglers' },
    { src: cert14, title: 'Convolutional Neural Networks' }
  ];

  return (
    <div className="certifications-page">
      <ContactBar />
      <section className="certifications-section">
        <h2>Certifications & Achievements</h2>
        
        <div className="achievement-category">
          <h3>BDMO (Bangladesh Mathematics Olympiad)</h3>
          <div className="certificate-grid">
            {bdmoImages.map((image, index) => (
              <div key={index} className="certificate-card" onClick={() => setSelectedImage(image.src)}>
                <img src={image.src} alt={image.alt} className="certificate-thumbnail" />
                <p className="certificate-year">{image.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievement-category">
          <h3>Competitions (Selective)</h3>
          <div className="competitions-list">
            {competitions.map((competition, index) => (
              <div key={index} className="competition-item">
                {competition}
              </div>
            ))}
          </div>
        </div>

        <div className="achievement-category">
          <h3>Certifications (Online)</h3>
          <div className="certificate-grid">
            {onlineCertifications.map((cert, index) => (
              <div key={index} className="certificate-card" onClick={() => setSelectedImage(cert.src)}>
                <img src={cert.src} alt={cert.title} className="certificate-thumbnail" />
                <p className="certificate-title">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default Certifications; 