import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import homeData from "../../pages/Home/homeData.json";

type HomeData = {
  heroTitle: string;
  heroSubtitle: string;
  findOutMoreButtonText: string;
  scrollText: string;
};

const home: HomeData = homeData as unknown as HomeData;

const HeroSection: React.FC = () => {
  return (
    <div className="home-container-1">
      <div className="overlay-text">
        <hr className="divider divider-top" />
        <h1 className="hero-title">{home.heroTitle}</h1>
        <hr className="divider divider-bottom" />
        <h2 className="hero-subtitle">{home.heroSubtitle}</h2>

        <Link to="/about" className="find-out-more-button">
          {home.findOutMoreButtonText}
        </Link>
      </div>
      <div className="scroll-indicator">
        <p className="scroll-text">{home.scrollText}</p>
        <div className="arrow-down"></div>
      </div>
    </div>
  );
};

export default HeroSection;
