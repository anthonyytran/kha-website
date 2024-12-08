import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-container">
        <h1>About</h1>
        <div className="stats-section">
          <h2>Statistics</h2>
          <ul className="stats-list">
            <li>
              <strong>Weight:</strong> TBC
            </li>
            <li>
              <strong>Height:</strong> TBC
            </li>
            <li>
              <strong>Age:</strong> 24
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
