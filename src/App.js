import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="coming-soon-container">
      <div className="profile-section">
        <img
          src="your-profile-picture-url.jpg" // Replace with your profile picture URL
          alt="Ruben Rodrigues"
          className="profile-picture"
        />
        <h1 className="name">Rúben Rodrigues</h1>
        <p className="role">Digital Product Designer</p>
      </div>

      <div className="social-links">
        <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer">
          Dribbble
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default App;
