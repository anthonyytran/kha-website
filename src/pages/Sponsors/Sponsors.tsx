import React from "react";
import { Link } from "react-router-dom";
import "./Sponsors.css";

// Gold sponsor logos (mono treatment)
import GoldSponsor1 from "../../assets/images/sponsors-mono/elitist.png";
import GoldSponsor2 from "../../assets/images/sponsors-mono/visitint.png";
import GoldSponsor3 from "../../assets/images/sponsors-mono/marsh.png";
import GoldSponsor4 from "../../assets/images/sponsors-mono/bosker.png";

// Silver sponsor logos (mono treatment)
import SilverSponsor1 from "../../assets/images/sponsors-mono/a1.png";
import SilverSponsor2 from "../../assets/images/sponsors-mono/northernboxing.png";
import SilverSponsor3 from "../../assets/images/sponsors-mono/nimbus.png";
import SilverSponsor4 from "../../assets/images/sponsors-mono/greeneflicks.png";
import SilverSponsor5 from "../../assets/images/sponsors-mono/studio25.png";
import SilverSponsor6 from "../../assets/images/sponsors-mono/rephaze.png";
import SilverSponsor7 from "../../assets/images/sponsors-mono/dynamictherapy.png";
import SilverSponsor8 from "../../assets/images/sponsors-mono/ait.png";
import SilverSponsor9 from "../../assets/images/sponsors-mono/jig.png";
import SilverSponsor10 from "../../assets/images/sponsors-mono/mtk.png";
import SilverSponsor11 from "../../assets/images/sponsors-mono/zone22.png";

import { Instagram } from "lucide-react";

interface SponsorData {
  id: number;
  name: string;
  logo: string | null;
  type: "gold" | "silver";
}

const Sponsors: React.FC = () => {
  const sponsors: SponsorData[] = [
    // Gold sponsors
    { id: 1, name: "Elitist", logo: GoldSponsor1, type: "gold" },
    { id: 2, name: "VisiTint", logo: GoldSponsor2, type: "gold" },
    { id: 3, name: "Marsh", logo: GoldSponsor3, type: "gold" },
    { id: 4, name: "Bosker", logo: GoldSponsor4, type: "gold" },

    // Silver sponsors
    { id: 5, name: "A1 Sideloader Service", logo: SilverSponsor1, type: "silver" },
    { id: 6, name: "Northern Boxing Academy", logo: SilverSponsor2, type: "silver" },
    { id: 7, name: "Nimbus Studios", logo: SilverSponsor3, type: "silver" },
    { id: 8, name: "Greene Agency", logo: SilverSponsor4, type: "silver" },
    { id: 9, name: "Studio 25", logo: SilverSponsor5, type: "silver" },
    { id: 10, name: "Re:Phaze", logo: SilverSponsor6, type: "silver" },
    { id: 11, name: "Dynamic Therapy", logo: SilverSponsor7, type: "silver" },
    { id: 12, name: "Australian IT Group", logo: SilverSponsor8, type: "silver" },
    // No clean logo available yet — rendered as a text wordmark below.
    { id: 13, name: "Westend Construction & Renovation", logo: null, type: "silver" },
    { id: 14, name: "JIG Construction Group", logo: SilverSponsor9, type: "silver" },
    { id: 15, name: "MTK Sons", logo: SilverSponsor10, type: "silver" },
    { id: 16, name: "Zone 22 Recovery", logo: SilverSponsor11, type: "silver" },
  ];

  const goldSponsors = sponsors.filter((sponsor) => sponsor.type === "gold");
  const silverSponsors = sponsors.filter((sponsor) => sponsor.type === "silver");

  return (
    <div className="sponsors-page-container">
      <div className="sponsors-glow" aria-hidden="true" />

      <div className="sponsors-container">
        <div className="sponsors-header">
          <span className="sponsors-eyebrow">Partners &amp; Supporters</span>
          <h1 className="sponsors-title">Sponsors</h1>
          <div className="sponsors-title-underline" />
          <p className="sponsors-intro">
            Sixteen businesses back this campaign. Their support covers camps,
            medicals, travel and everything else it takes to fight at
            national level.
          </p>
        </div>

        {/* Gold Sponsors Section */}
        <div className="sponsors-section">
          <div className="tier-header gold">
            <h2 className="sponsor-tier-title gold">Gold Partners</h2>
            <span className="tier-line gold" aria-hidden="true" />
            <span className="tier-count">
              {String(goldSponsors.length).padStart(2, "0")}
            </span>
          </div>
          <div className="sponsors-grid gold-grid">
            {goldSponsors.map((sponsor) => (
              <div className="partner-card gold" key={sponsor.id}>
                <div className="sponsor-logo-box gold">
                  <img
                    src={sponsor.logo ?? undefined}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </div>
                <span className="partner-name gold">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors Section */}
        <div className="sponsors-section">
          <div className="tier-header silver">
            <h2 className="sponsor-tier-title silver">Silver Partners</h2>
            <span className="tier-line silver" aria-hidden="true" />
            <span className="tier-count">
              {String(silverSponsors.length).padStart(2, "0")}
            </span>
          </div>
          <div className="sponsors-grid silver-grid">
            {silverSponsors.map((sponsor) => (
              <div className="partner-card silver" key={sponsor.id}>
                <div className="sponsor-logo-box silver">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="sponsor-logo silver"
                    />
                  ) : (
                    <span className="sponsor-wordmark">
                      Westend
                      <br />
                      Construction
                    </span>
                  )}
                </div>
                <span className="partner-name silver">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="sponsors-cta-panel">
          <div className="sponsors-cta-text">
            <h2>Become a sponsor</h2>
            <p>
              Gold and Silver packages are available for the next campaign.
              Get in touch for the partnership deck and tier details.
            </p>
          </div>
          <div className="sponsors-cta-actions">
            <a
              href="https://www.instagram.com/_khalu/"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsors-cta-button secondary"
            >
              <Instagram size={18} aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <Link to="/contact" className="sponsors-cta-button primary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
