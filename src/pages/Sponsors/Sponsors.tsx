import React from "react";
import "./Sponsors.css";

// Temporary import statements for sponsor logos
import GoldSponsor1 from "../../assets/images/elitist.png";
// import GoldSponsor2 from "../assets/gold-sponsor2.png";
// import GoldSponsor3 from "../assets/gold-sponsor3.png";

import SilverSponsor1 from "../../assets/images/theboxinglab.png";
// import SilverSponsor2 from "../assets/silver-sponsor2.png";
// import SilverSponsor3 from "../assets/silver-sponsor3.png";
// import SilverSponsor4 from "../assets/silver-sponsor4.png";
// import SilverSponsor5 from "../assets/silver-sponsor5.png";
// import SilverSponsor6 from "../assets/silver-sponsor6.png";
// import SilverSponsor7 from "../assets/silver-sponsor7.png";
// import SilverSponsor8 from "../assets/silver-sponsor8.png";

const Sponsors = () => {
  return (
    <div className="sponsors-page-container">
      <div className="sponsors-container">
        <h1>Sponsors</h1>
        <p>Learn more about our sponsors and partners here.</p>

        <div className="gold-sponsors-section">
          <h2>Gold Sponsors</h2>
          <div className="gold-sponsors-grid">
            <img
              src={GoldSponsor1}
              alt="Gold Sponsor 1"
              className="sponsor-logo"
            />
            <img
              src={GoldSponsor1}
              alt="Gold Sponsor 2"
              className="sponsor-logo"
            />
            <img
              src={GoldSponsor1}
              alt="Gold Sponsor 3"
              className="sponsor-logo"
            />
          </div>
        </div>

        <div className="silver-sponsors-section">
          <h2>Silver Sponsors</h2>
          <div className="silver-sponsors-grid">
            <img
              src={SilverSponsor1}
              alt="Silver Sponsor 1"
              className="sponsor-logo"
            />
            <img
              src={SilverSponsor1}
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
      </div>
    </div>
  );
};

export default Sponsors;
