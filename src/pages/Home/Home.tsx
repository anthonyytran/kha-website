import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// UpcomingFight component removed
import HomepageVideo from "../../components/HomeVideo/HomeVideo";
import FightHistory from "../../components/FightHistory/FightHistory";
import HomeSponsors from "../../components/HomeSponsors/HomeSponsors";
import HomePT from "../../components/HomePT/HomePT";
import homeData from "./homeData.json";

type HomeData = {
  heroTitle: string;
  heroSubtitle: string;
  findOutMoreButtonText: string;
  scrollText: string;
};

const home: HomeData = homeData as unknown as HomeData;

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
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

      {/* AOS removed: components render without data-aos attributes */}
      <HomepageVideo />
      <FightHistory />
      <HomePT />
      <HomeSponsors />
    </div>
  );
};

export default Home;
