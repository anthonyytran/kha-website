import React from "react";
import { Link } from "react-router-dom";
import "./FightHistory.css";

// Fighter images
import fighter1 from "../../assets/images/buacharoen.jpg";
import fighter2 from "../../assets/images/weerachon.jpg";
import fighter3 from "../../assets/images/kamlangcharoey.jpg";

// Flag image
import thailandFlag from "../../assets/images/thailand-icon.png";

const FightHistory: React.FC = () => {
  return (
    <div className="fight-history-container">
      <h3 className="fights-title">Past Fights</h3>
      <div className="fight-history">
        <div className="fight-card" data-aos="fade-up">
          <h4>
            <img src={thailandFlag} alt="Thailand Flag" className="flag-icon" />
            <div className="name-container">
              <span className="first-name">Watcharin</span>
              <span className="last-name">Buacharoen</span>
            </div>
          </h4>
          <img
            src={fighter1}
            alt="Watcharin Buacharoen"
            className="fighter-image"
          />
          <div className="fight-details">
            <p className="method">UNANIMOUS DECISION</p>
            <p className="result win">Win</p>
            <p className="date">March 16, 2024</p>
            <p className="location">Melbourne Pavilion, Australia</p>
          </div>
        </div>
        <div className="fight-card" data-aos="fade-up" data-aos-delay="100">
          <h4>
            <img src={thailandFlag} alt="Thailand Flag" className="flag-icon" />
            <div className="name-container">
              <span className="first-name">Thoedkiad</span>
              <span className="last-name">Weerachon</span>
            </div>
          </h4>
          <img
            src={fighter2}
            alt="Thoedkiad Weerachon"
            className="fighter-image"
          />
          <div className="fight-details">
            <p className="method">TECHNICAL KNOCKOUT</p>
            <p className="result win">Win</p>
            <p className="date">December 2, 2023</p>
            <p className="location">Melbourne Pavilion, Australia</p>
          </div>
        </div>
        <div className="fight-card" data-aos="fade-up" data-aos-delay="200">
          <h4>
            <img src={thailandFlag} alt="Thailand Flag" className="flag-icon" />
            <div className="name-container">
              <span className="first-name">Oatkowit</span>
              <span className="last-name">Kamlangcharoey</span>
            </div>
          </h4>
          <img
            src={fighter3}
            alt="Oatkowit Kamlangcharoey"
            className="fighter-image"
          />
          <div className="fight-details">
            <p className="method">TECHNICAL KNOCKOUT</p>
            <p className="result win">Win</p>
            <p className="date">September 16, 2023</p>
            <p className="location">Melbourne Pavilion, Australia</p>
          </div>
        </div>
      </div>

      <div className="view-all-button-container fights-button">
        <Link to="/record" className="view-all-button">
          View All
        </Link>
      </div>
    </div>
  );
};

export default FightHistory;
