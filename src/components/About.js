import React from 'react';
import Lottie from 'lottie-react';
import dancingPersonAnimation from './Animation.json'; // Replace with your Lottie JSON file
import './About.css';

const About = () => {
  return (
    <section className="about-me">
      <div className="about-me-header">
        <h2>About Me</h2>
        <div className="dancing-person">
          <Lottie animationData={dancingPersonAnimation} loop={true} />
        </div>
      </div>
      <p>
        I'm Kale Kimmel, a rising senior at UW-Madison with a strong passion for development. My professional experience includes internships at Kapco Metal Stamping, Guardian Life Insurance, and Entegral, where I focused on enhancing user experiences through sleek, scalable, and user-friendly designs.
      </p>
      <p>
        Beyond my work, I’m an avid sports enthusiast with a deep love for the Milwaukee Bucks and Green Bay Packers. I recently achieved a long-held college goal by winning an intramural basketball championship and the coveted shirt that comes with it.
      </p>
      <p>
        Feel free to reach out, whether it's to discuss professional opportunities or to chat about sports—I'm always up for both.
      </p>

      <div className="recent-projects">
        <h3>Recent Projects</h3>
        <div className="project-list">
          <div className="project-item">
            <h4>NBA Machine Learning Model</h4>
            <p>A predictive analysis model using Python and scikit-learn.</p>
          </div>
          <div className="project-item">
            <h4>Rate My School</h4>
            <p>A full-stack web application using React, Node.js, and MongoDB.</p>
          </div>
          <div className="project-item">
            <h4>Club Website Development</h4>
            <p>Increased membership and funding through a sleek React-based design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;