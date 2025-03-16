import React from "react";
import "./Sponsors.css";

// Existing sponsor logos
import GoldSponsor1 from "../../assets/images/elitist.jpg";
import GoldSponsor2 from "../../assets/images/visitint.jpg";
import GoldSponsor3 from "../../assets/images/marsh.jpg";

import SilverSponsor1 from "../../assets/images/theboxinglab.png";
import SilverSponsor2 from "../../assets/images/a1.jpg";
import SilverSponsor3 from "../../assets/images/nimbus.png";
import SilverSponsor4 from "../../assets/images/greeneflicks.png";
import SilverSponsor5 from "../../assets/images/studio25.png";
import SilverSponsor6 from "../../assets/images/rephaze.png";
import SilverSponsor7 from "../../assets/images/dynamic-therapy.png";

// Placeholder for new sponsors
import placeholderLogo from "../../assets/images/tiktok.png";

// Import Instagram icon from lucide-react
import { Instagram } from "lucide-react";

interface SponsorData {
  id: number;
  name: string;
  logo: string;
  type: "gold" | "silver" | "bronze";
}

const Sponsors = () => {
  // Combined sponsor data with names
  const sponsors: SponsorData[] = [
    // Gold sponsors
    { id: 1, name: "Elitist", logo: GoldSponsor1, type: "gold" },
    { id: 2, name: "Visit International", logo: GoldSponsor2, type: "gold" },
    { id: 3, name: "Marsh Industries", logo: GoldSponsor3, type: "gold" },
    { id: 4, name: "Global Fitness", logo: placeholderLogo, type: "gold" },

    // Silver sponsors
    { id: 5, name: "The Boxing Lab", logo: SilverSponsor1, type: "silver" },
    { id: 6, name: "A1 Performance", logo: SilverSponsor2, type: "silver" },
    {
      id: 7,
      name: "Nimbus Technologies",
      logo: SilverSponsor3,
      type: "silver",
    },
    { id: 8, name: "Greene Flicks", logo: SilverSponsor4, type: "silver" },
    { id: 9, name: "Studio 25", logo: SilverSponsor5, type: "silver" },
    { id: 10, name: "Rephaze", logo: SilverSponsor6, type: "silver" },
    { id: 11, name: "Dynamic Therapy", logo: SilverSponsor7, type: "silver" },
    { id: 12, name: "Sports Alliance", logo: placeholderLogo, type: "silver" },
    { id: 13, name: "Power Nutrition", logo: placeholderLogo, type: "silver" },

    // Bronze sponsors (new category with placeholder images)
    { id: 14, name: "Local Fitness", logo: placeholderLogo, type: "bronze" },
    {
      id: 15,
      name: "Community Athletics",
      logo: placeholderLogo,
      type: "bronze",
    },
    { id: 16, name: "Fighter's Edge", logo: placeholderLogo, type: "bronze" },
  ];

  // Filter sponsors by type
  const goldSponsors = sponsors.filter((sponsor) => sponsor.type === "gold");
  const silverSponsors = sponsors.filter(
    (sponsor) => sponsor.type === "silver"
  );
  const bronzeSponsors = sponsors.filter(
    (sponsor) => sponsor.type === "bronze"
  );

  return (
    <div className="sponsors-page-container">
      <div className="sponsors-container">
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p className="sponsors-intro">
          We are incredibly grateful for the generous support of our sponsors
          and partners. Your contributions help us continue striving for
          excellence and achieving new heights.
        </p>

        {/* Gold Sponsors Section */}
        <div className="sponsors-section">
          <h2 className="sponsor-tier-title gold">Gold Sponsors</h2>
          <div className="sponsors-grid gold-grid">
            {goldSponsors.map((sponsor) => (
              <div className="sponsor-card gold" key={sponsor.id}>
                <div className="sponsor-card-content">
                  <div className="sponsor-image-container">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="sponsor-logo"
                    />
                  </div>
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors Section */}
        <div className="sponsors-section">
          <h2 className="sponsor-tier-title silver">Silver Sponsors</h2>
          <div className="sponsors-grid silver-grid">
            {silverSponsors.map((sponsor) => (
              <div className="sponsor-card silver" key={sponsor.id}>
                <div className="sponsor-card-content">
                  <div className="sponsor-image-container">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="sponsor-logo"
                    />
                  </div>
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors Section */}
        <div className="sponsors-section">
          <h2 className="sponsor-tier-title bronze">Bronze Sponsors</h2>
          <div className="sponsors-grid bronze-grid">
            {bronzeSponsors.map((sponsor) => (
              <div className="sponsor-card bronze" key={sponsor.id}>
                <div className="sponsor-card-content">
                  <div className="sponsor-image-container">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="sponsor-logo"
                    />
                  </div>
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="closing-message">
          <p>
            We appreciate every sponsor and supporter who contributes to our
            journey. Your partnership drives us forward, and we couldn't do it
            without you!
          </p>
          <div className="become-sponsor">
            <p>Interested in becoming a sponsor?</p>
            <div className="contact-options">
              <button className="contact-button">Contact Us</button>
              <a
                href="https://www.instagram.com/_khalu/"
                className="instagram-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Message me on</span>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
