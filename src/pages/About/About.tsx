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
            <div className="biography-content">
              <p>
                <strong>Kha Lu</strong> is a 24-year-old boxer fighting out of
                Australia. His boxing journey begun at a young age, driven by an
                unwavering passion for the sport and a dedication to pushing
                himself beyond his limits. Over the years, <strong>Kha</strong>{" "}
                has trained under some of the best coaches and fought very
                talented fighters both domestically and internationally.
              </p>
              <p>
                <strong>Kha</strong> proudly represents{" "}
                <strong>LionsDens</strong> - his childhood gym.
              </p>
            </div>
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
            <div className="stats-container">
              <ul className="stats-list">
                <li>
                  <span className="stat-label">Name:</span>
                  <span className="stat-value">Kha Lu</span>
                </li>
                <li>
                  <span className="stat-label">Age:</span>
                  <span className="stat-value">24</span>
                </li>
                <li>
                  <span className="stat-label">Country:</span>
                  <span className="stat-value">Australia</span>
                </li>
                <li>
                  <span className="stat-label">Weight Class:</span>
                  <span className="stat-value">Minimumweight & Flyweight</span>
                </li>
                <li>
                  <span className="stat-label">Bouts:</span>
                  <span className="stat-value">8</span>
                </li>
                <li>
                  <span className="stat-label">Rounds:</span>
                  <span className="stat-value">25</span>
                </li>
                <li>
                  <span className="stat-label">KO%:</span>
                  <span className="stat-value">42.86%</span>
                </li>
                <li>
                  <span className="stat-label">Gym:</span>
                  <span className="stat-value">Lionsden</span>
                </li>
              </ul>
            </div>
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
