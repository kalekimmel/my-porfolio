import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume <a href="/path/to/resume.pdf" download>here</a>.</p>
      <p>Education:</p>
      <ul>
        <li>B.S. in Computer Science, University of Wisconsin-Madison (Expected May 2025)</li>
      </ul>
      <p>Experience:</p>
      <ul>
        <li>Software Engineer Intern at Entegral</li>
        <li>Intern at Guardian Life Insurance</li>
        <li>Intern at Kapco Metal Stamping</li>
      </ul>
      <p>Skills:</p>
      <ul>
        <li>Python, JavaScript, React, Node.js, etc.</li>
      </ul>
    </section>
  );
};

export default Resume;