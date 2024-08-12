import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Kale Kimmel</h1>
      <nav>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Header;