import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import dancingPersonAnimation from './Animation.json';
import './About.css';
import basketballPic from './basketball.png'; 
import rateMySchoolPic from './RMS.png'; 
import foodForThoughtPic from './FFT.png'; 

const About = () => {
  return (
    <section className="about-me">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-me-header"
          >
            <div className="header-container">
              <h2>About Me</h2>
              <div className="dancing-person">
                <Lottie animationData={dancingPersonAnimation} loop={true} />
              </div>
            </div>
          </motion.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-me-text"
          >
            <p>
              I'm Kale Kimmel, a rising senior at UW-Madison with a strong passion for development. My professional experience includes internships at Kapco Metal Stamping, Guardian Life Insurance, and Entegral, where I focused on enhancing user experiences through sleek, scalable, and user-friendly designs.
            </p>
            <p>
              Beyond my work, I’m an avid sports enthusiast with a deep love for the Milwaukee Bucks and Green Bay Packers. I recently achieved a long-held college goal by winning an intramural basketball championship and the coveted shirt that comes with it.
            </p>
            <p>
              Feel free to reach out, whether it's to discuss professional opportunities or to chat about sports—I'm always up for both.
            </p>
          </motion.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="recent-projects"
          >
            <h3>Recent Projects</h3>
            <div className="project-list">
              <motion.a
                href="https://github.com/kalekimmel/NBA-Machine-Learning"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="project-item"
              >
                <img src={basketballPic} alt="NBA Machine Learning Model" />
                <div className="project-details">
                  <h4>NBA Machine Learning Model</h4>
                  <p>A predictive analysis model using Python and scikit-learn, optimized model to predict winners with 65% accuracy.</p>
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/kalekimmel/RateMyCollege"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="project-item"
              >
                <img src={rateMySchoolPic} alt="Rate My School" />
                <div className="project-details">
                  <h4>Rate My School</h4>
                  <p>A full-stack web application using React, Node.js, Express.js, and MongoDB. Allows users to review schools, featuring advanced search, filtering, and an interactive map.</p>
                </div>
              </motion.a>
              <motion.a
                href="https://foodforthoughtmadison.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="project-item"
              >
                <img src={foodForThoughtPic} alt="Food for Thought" />
                <div className="project-details">
                  <h4>Food for Thought</h4>
                  <p>As part of my vice president role, I developed this website for UW-Madison club Food For Thought.</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default About;