
import profilePic from './KalePicture.PNG'; // Correctly import the image
import '@fortawesome/fontawesome-free/css/all.min.css';
import resume from './KaleKimmelResume2024.pdf'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profilePic} alt="Kale Kimmel" />
        <h2>Kale Kimmel</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">Home</Link></li>
          <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>          
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://github.com/kalekimmel" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kale-kimmel" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:kimmelk11@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <button onClick={toggleDarkMode} className="toggle-theme">
          <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;