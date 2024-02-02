// About.js

import React from 'react';
import './Navbar.css'

const About = () => {
  return (
    <div className="container about mt-5">
      <h2>About Simple Interest App</h2>
      <p>
        Welcome to the Simple Interest App, created by Pranav Jain. This application is designed to help you quickly calculate simple interest for your financial calculations.
      </p>

      <h3>About the Developer</h3>
      <p>
        Pranav Jain is a passionate developer with a keen interest in creating user-friendly applications. With a background in software development, Pranav aims to simplify complex financial calculations through intuitive and accessible applications.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Calculate simple interest with ease.</li>
        <li>User-friendly interface for a seamless experience.</li>
        {/* Add more features as needed */}
      </ul>

      <h3>Connect with Pranav Jain</h3>
      <p>
        Feel free to connect with Pranav Jain for any questions, suggestions, or collaborations:
      </p>
      <ul>
        <li>Email: masterpranavjain2@gmail.com</li>
        <li>LinkedIn: [Pranav Jain's LinkedIn Profile]</li>
        {/* Add more contact details as needed */}
      </ul>

      <h3>Contribute to the Project</h3>
      <p>
        This Simple Interest App is an open-source project. You can contribute to its development by checking out the code on GitHub and submitting pull requests.
      </p>
      <a href="[Your GitHub Repository URL]" target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>

      <p>
        Thank you for using the Simple Interest App!
      </p>
    </div>
  );
};

export default About;
