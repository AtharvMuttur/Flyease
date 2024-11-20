import React from 'react';
import './styles.css';
import flyeaseIcon from './flyease-icon.png';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-card">
        <img src={flyeaseIcon} alt="Flyease Icon" className="about-icon" />
        <h2>About Flyease</h2>
        <p className="about-description">
          Welcome to Flyease, your reliable platform designed to simplify and enhance your flying experience. At Flyease, we prioritize user convenience, offering easy access to essential flight information, seamless booking experiences, and personalized service recommendations.
        </p>
        
        <h3>Our Team</h3>
        <p><strong>Founder:</strong> Atharv</p>
        <p><strong>Co-Founders:</strong> Arijeet and Charan</p>
        
        <p className="about-mission">
          Our team is dedicated to building a platform that brings efficiency, transparency, and ease to travelers everywhere. Flyease aims to provide a user-friendly interface that caters to all aspects of travel, from booking to real-time updates and everything in between.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
