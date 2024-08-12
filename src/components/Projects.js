import React from 'react';
import './Projects.css';
import basketballPic from './basketball.png'; 
import rateMySchoolPic from './RMS.png'; 
import foodForThoughtPic from './FFT.png'; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src={basketballPic} alt="NBA Machine Learning Model" />
        <div className="project-details">
          <h3>NBA Machine Learning Model</h3>
          <p>A predictive analysis model using Python and scikit-learn, optimized to predict NBA game outcomes with 65% accuracy. I'm a passionate basketball fan and thought using machine learning to predict game outcomes would be a cool project to make.</p>
          <div className="project-buttons">
            <a href="https://github.com/kalekimmel/NBA-Machine-Learning" target="_blank" rel="noopener noreferrer">
              <button className="btn github-btn">GitHub</button>
            </a>
            <a href="https://github.com/kalekimmel/NBA-MachineLearning-Chatbot" target="_blank" rel="noopener noreferrer">
              <button className="btn demo-btn">Demo</button>
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src={rateMySchoolPic} alt="Rate My School" />
        <div className="project-details">
          <h3>Rate My School</h3>
          <p>A full-stack web application using React, Node.js, and MongoDB. Users can review and rate schools with features like advanced search and filtering.</p>
          <div className="project-buttons">
            <a href="https://github.com/kalekimmel/RateMyCollege" target="_blank" rel="noopener noreferrer">
              <button className="btn github-btn">GitHub</button>
            </a>
            <a href="https://drive.google.com/file/d/1DTxzVc8wlvzw4CZ83_B0lyCyiFUxnfkX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="btn demo-btn">Demo</button>
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src={foodForThoughtPic} alt="Food for Thought" />
        <div className="project-details">
          <h3>Food for Thought</h3>
          <p>A website I built for UW-Madison's Food for Thought club, built with React. It helped increase membership and funding for the club.</p>
          <div className="project-buttons">
            <a href="https://github.com/kalekimmel/food-for-thought" target="_blank" rel="noopener noreferrer">
              <button className="btn github-btn">GitHub</button>
            </a>
            <a href="https://foodforthoughtmadison.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="btn demo-btn">Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;