import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UpcomingFight.css"; // Ensure CSS file is linked

// Import images
import australiaIcon from "../../assets/images/australia-icon.png";
// import fightBackground from "../../assets/images/kha-vs-david.png"; // Optional background import

const UpcomingFight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out",
      offset: 50,
      disable: false,
      startEvent: "DOMContentLoaded",
    });

    const visibilityTimer = setTimeout(() => {
      AOS.refresh();
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(visibilityTimer);
  }, []);

  return (
    <div
      // Added 'fight-result-display' for semantic clarity, kept upcoming for potential reuse
      className={`upcoming-fight-container fight-result-display ${
        isVisible ? "visible" : ""
      }`}
      data-aos="fade-in"
      data-aos-duration="600"
    >
      {/* Title and Date */}
      <div
        className={`fight-title-container ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className={`fight-title ${isVisible ? "visible" : ""}`}>
          Australian Light Flyweight Champion
        </h1>
        <p
          className={`fight-date ${isVisible ? "visible" : ""}`}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          April 4, 2025
        </p>
        <p
          className={`fight-date fight-venue ${isVisible ? "visible" : ""}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Melbourne Pavilion
        </p>
      </div>

      {/* Fighters Section */}
      <div className="fight-header">
        {/* Fighter 1 */}
        <div
          className={`fighter fighter-main ${isVisible ? "visible" : ""}`}
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-duration="600"
        >
          <div className="fighter-name">
            <img
              className={`australia-icon ${isVisible ? "visible" : ""}`}
              src={australiaIcon}
              alt="Australia"
              data-aos="zoom-in"
              data-aos-delay="350"
            />
            <div className="fighter-name-text">
              <span className="fighter-first">Kha</span>
              <span className="fighter-last">Lu</span>
            </div>
          </div>
        </div>

        {/* VS Indicator - Restored */}
        <div
          className={`vs ${isVisible ? "visible" : ""}`}
          data-aos="zoom-in"
          data-aos-delay="300" // Original delay timing might need adjustment
          data-aos-duration="600"
        >
          VS
        </div>

        {/* Fighter 2 */}
        <div
          className={`fighter fighter-secondary ${isVisible ? "visible" : ""}`}
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="600"
        >
          <div className="fighter-name">
            <img
              className={`australia-icon ${isVisible ? "visible" : ""}`}
              src={australiaIcon}
              alt="Australia"
              data-aos="zoom-in"
              data-aos-delay="350"
            />
            <div className="fighter-name-text">
              <span className="fighter-first">Daniel</span>
              <span className="fighter-last">Anderson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fight Outcome Section (Replaces Ticket Button) */}
      <div
        className={`fight-outcome-container ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
        data-aos-delay="400" // Delay after fighters/VS have animated
        data-aos-duration="600"
      >
        <h2
          className={`outcome-title ${isVisible ? "visible" : ""}`}
          data-aos="zoom-in"
          data-aos-delay="500" // Staggered delay
          data-aos-duration="500"
        >
          VICTORY
        </h2>
      </div>
    </div>
  );
};

export default UpcomingFight;
