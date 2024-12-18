import React from "react";
import "./About.css";
import khaHeadphones from "../../assets/images/kha-about.jpg";
import khaBoxing from "../../assets/images/kha-about2.jpg";
import khaBoxing2 from "../../assets/images/kha-about3.jpg";

const About = () => {
  return (
    <div className="about-page-container">
      {/* Biography Section */}
      <section className="about-section">
        <div className="about-section-content">
          <div className="about-section-image">
            <img src={khaHeadphones} alt="Kha Lu Biography" />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">Biography</h2>
            <p>
              My name is <strong>Kha</strong>, a 24-year-old boxer fighting out
              of Australia. I began my journey in boxing at a young age, driven
              by an unwavering passion for the sport and a dedication to pushing
              myself beyond my limits. Over the years, I have trained under some
              of the best coaches and fought very talented fighters.
            </p>
            <p>
              I proudly represent <strong>LionsDen</strong>, my childhood gym.
              Each day in the ring is a chance to grow, learn, and become a
              better version of myself.
            </p>
          </div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section className="about-section about-alt-bg">
        <div className="about-section-content">
          <div className="about-section-image">
            <img src={khaBoxing} alt="Kha Lu Stats" />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">Stats</h2>
            <ul className="stats-list">
              <li>
                <strong>Name:</strong> Kha Lu
              </li>
              <li>
                <strong>Age:</strong> 24
              </li>
              <li>
                <strong>Country:</strong> Australia
              </li>
              <li>
                <strong>Weight Class:</strong> Minimumweight & Flyweight
              </li>
              <li>
                <strong>Bouts:</strong> 7
              </li>
              <li>
                <strong>Rounds:</strong> 25
              </li>
              <li>
                <strong>KO%:</strong> 42.86%
              </li>
              <li>
                <strong>Gym:</strong> Lionsden
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="about-section">
        <div className="about-section-content">
          <div className="about-section-image">
            <img src={khaBoxing2} alt="Kha Lu Accomplishments" />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">Accomplishments</h2>
            <ul className="accomplishments-list">
              <li>Victorian Gold Light Flyweight Champion</li>
              <li>Victorian Silver Light Flyweight Champion</li>
              <li>
                Fight of the Night - <strong>x 3</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
