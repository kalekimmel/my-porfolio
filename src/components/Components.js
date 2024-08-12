import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Create this CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="your-profile-pic-url" alt="Kale Kimmel" />
        <h2>Kale Kimmel</h2>
        <p>Highly Caffeinated</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:kimmelk11@gmail.com">Email</a>
      </div>
    </div>
  );
};

export default Sidebar;