import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FightHistory.css";
import { fights } from "../../data/fightData"; // Adjusted import path assuming fightData is .ts or .js

// Fighter images
import fighter1 from "../../assets/images/buacharoen.jpg";
import fighter2 from "../../assets/images/anderson.jpg";
import fighter3 from "../../assets/images/katsunari.jpg";

// Flag images
import australiaFlag from "../../assets/images/australia-icon.png";
import thailandFlag from "../../assets/images/thailand-icon.png";
import japanFlag from "../../assets/images/japan-icon.png";

// Helper function to format date
const formatDateForDisplay = (dateStr: string): string => {
  if (!dateStr || !dateStr.includes("-")) {
    return "Invalid Date";
  }
  const parts = dateStr.split("-");
  if (parts.length !== 3) {
    return "Invalid Date";
  }
  const [day, month, year] = parts;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = parseInt(month, 10) - 1;
  if (isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return "Invalid Date";
  }
  return `${monthNames[monthIndex]} ${parseInt(day, 10)}, ${year}`;
};

// Maps opponent names to their corresponding flag assets
const opponentFlags: { [key: string]: string } = {
  "Daniel Anderson": australiaFlag,
  "Katsunari Takayama": japanFlag,
  "Watcharin Buacharoen": thailandFlag,
};

// Maps opponent names to their corresponding image assets
const opponentImages: { [key: string]: string } = {
  "Daniel Anderson": fighter2, // Use the imported anderson image
  "Katsunari Takayama": fighter3,
  "Watcharin Buacharoen": fighter1,
};

const FightHistory: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  const displayedFights = fights.slice(0, 3);

  return (
    <div className="fight-history-container">
      <h3 className="fights-title">Past Fights</h3>
      <div className="fight-history">
        {displayedFights.map((fight, index) => {
          const nameParts = fight.opponent.split(" ");
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";

          const flag = opponentFlags[fight.opponent] || placeholderFlag;
          const image = opponentImages[fight.opponent] || placeholderImage;

          const resultClass =
            fight.result === "W"
              ? "win"
              : fight.result === "L"
              ? "loss"
              : "draw";

          return (
            <div
              className="fight-card"
              key={fight.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h4>
                <img
                  src={flag}
                  alt={`${lastName} Flag`}
                  className="flag-icon"
                />
                <div className="name-container">
                  <span className="first-name">{firstName}</span>
                  <span className="last-name">{lastName}</span>
                </div>
              </h4>
              <img src={image} alt={fight.opponent} className="fighter-image" />
              <div className="fight-details">
                <p className="method">{fight.method.toUpperCase()}</p>
                <p className={`result ${resultClass}`}>
                  {fight.result === "W"
                    ? "Win"
                    : fight.result === "L"
                    ? "Loss"
                    : "Draw"}
                </p>
                <p className="date">{formatDateForDisplay(fight.date)}</p>
                <p className="location">{fight.venue}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="view-all-button-container fights-button">
        <Link to="/record" className="view-all-button">
          View All
        </Link>
      </div>
    </div>
  );
};

// Define placeholders for missing assets
const placeholderFlag = ""; // Optional: Path to a default flag
const placeholderImage = ""; // Optional: Path to a default image

export default FightHistory;
