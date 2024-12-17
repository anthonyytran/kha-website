import React from "react";
import "./Sponsors.css";

// Temporary import statements for sponsor logos
import GoldSponsor1 from "../../assets/images/elitist.jpg";
import GoldSponsor2 from "../../assets/images/visitint.jpg";
import GoldSponsor3 from "../../assets/images/marsh.jpg";

import SilverSponsor1 from "../../assets/images/theboxinglab.png";
import SilverSponsor2 from "../../assets/images/a1.jpg";

const Sponsors = () => {
  return (
    <div className="sponsors-page-container">
      {/* Sponsors Header */}
      <div className="sponsors-container">
        <h1>Our Sponsors</h1>
        <p>
          We are incredibly grateful for the generous support of our sponsors
          and partners. Their contributions help us continue striving for
          excellence and achieving new heights.
        </p>

        {/* Gold Sponsors Section */}
        <div className="gold-sponsors-section">
          <div className="gold-sponsors-grid">
            <img
              src={GoldSponsor1}
              alt="Gold Sponsor 1"
              className="sponsor-logo"
            />
            <img
              src={GoldSponsor2}
              alt="Gold Sponsor 2"
              className="sponsor-logo"
            />
            <img
              src={GoldSponsor3}
              alt="Gold Sponsor 3"
              className="sponsor-logo"
            />
          </div>
        </div>

        {/* Silver Sponsors Section */}
        <div className="silver-sponsors-section">
          <div className="silver-sponsors-grid">
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 1"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor2}
              alt="Silver Sponsor 2"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 3"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 4"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 5"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 6"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 7"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 8"
              className="sponsor-logo"
            />
          </div>
        </div>

        {/* Closing Message */}
        <div className="closing-message">
          <p>
            We appreciate every sponsor and supporter who contributes to our
            journey. Your partnership drives us forward, and we couldn't do it
            without you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
