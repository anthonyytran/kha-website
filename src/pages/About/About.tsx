import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-container">
        <h1>About</h1>
        <p>
          Kha Lu is a dedicated professional boxer known for his hard work,
          discipline, and passion for the sport. With a strong commitment to his
          craft, he has earned recognition as a Victorian Light Flyweight
          Champion.
        </p>
        <div className="stats-section">
          <h2>Statistics</h2>
          <ul className="stats-list">
            <li>
              <strong>Weight:</strong> 49 kg
            </li>
            <li>
              <strong>Height:</strong> 165 cm
            </li>
            <li>
              <strong>Age:</strong> 25 years
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
