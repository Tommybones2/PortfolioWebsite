import React from 'react';
import './AboutPage.css';
 
function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-me-section">
        <h1>About Me</h1>
        <p>
          I am Thomas Bonagura, a computer science student at Binghamton University.
        </p>
      </div>
      <div className="favorites-section">
        <h1>My Favorites</h1>
        <ul>
          <li>Activity: Hiking</li>
          <li>Book: The Alchemist</li>
          <li>Movie: Inception</li>
        </ul>
      </div>
    </div>
  );
}
 
export default AboutPage;

