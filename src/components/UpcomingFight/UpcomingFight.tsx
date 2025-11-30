import React, { useEffect, useState } from "react";
import "./UpcomingFight.css"; // Ensure CSS file is linked

// Import images
import australiaIcon from "../../assets/images/australia-icon.png";
// import fightBackground from "../../assets/images/kha-vs-david.png"; // Optional background import

const UpcomingFight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // AOS removed; keep a small timer to trigger "visible" classes for CSS-based animations
    const visibilityTimer = setTimeout(() => {
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
    >
      {/* Title and Date */}
      <div className={`fight-title-container ${isVisible ? "visible" : ""}`}>
        <h1 className={`fight-title ${isVisible ? "visible" : ""}`}>
          Australian Light Flyweight Champion
        </h1>
        <p className={`fight-date ${isVisible ? "visible" : ""}`}>
          April 4, 2025
        </p>
        <p className={`fight-date fight-venue ${isVisible ? "visible" : ""}`}>
          Melbourne Pavilion
        </p>
      </div>

      {/* Fighters Section */}
      <div className="fight-header">
        {/* Fighter 1 */}
        <div className={`fighter fighter-main ${isVisible ? "visible" : ""}`}>
          <div className="fighter-name">
            <img
              className={`australia-icon ${isVisible ? "visible" : ""}`}
              src={australiaIcon}
              alt="Australia"
            />
            <div className="fighter-name-text">
              <span className="fighter-first">Kha</span>
              <span className="fighter-last">Lu</span>
            </div>
          </div>
        </div>

        {/* VS Indicator - Restored */}
        <div className={`vs ${isVisible ? "visible" : ""}`}>VS</div>

        {/* Fighter 2 */}
        <div
          className={`fighter fighter-secondary ${isVisible ? "visible" : ""}`}
        >
          <div className="fighter-name">
            <img
              className={`australia-icon ${isVisible ? "visible" : ""}`}
              src={australiaIcon}
              alt="Australia"
            />
            <div className="fighter-name-text">
              <span className="fighter-first">Daniel</span>
              <span className="fighter-last">Anderson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fight Outcome Section (Replaces Ticket Button) */}
      <div className={`fight-outcome-container ${isVisible ? "visible" : ""}`}>
        <h2 className={`outcome-title ${isVisible ? "visible" : ""}`}>
          VICTORY
        </h2>
      </div>
    </div>
  );
};

export default UpcomingFight;
