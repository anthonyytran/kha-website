import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

// Import Child Components
import UpcomingFight from "../../components/UpcomingFight/UpcomingFight";
import HomeRecord from "../../components/HomeRecord/HomeRecord";
import HomepageVideo from "../../components/HomeVideo/HomeVideo";
import FightHistory from "../../components/FightHistory/FightHistory";
import HomeSponsors from "../../components/HomeSponsors/HomeSponsors";
import HomePT from "../../components/HomePT/HomePT";

const Home: React.FC = () => {
  useEffect(() => {
    // Initialize AOS for components further down the page
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    // Ensure scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="home-container-1">
        <div className="overlay-text">
          <hr className="divider divider-top" />
          <h1 className="hero-title">KHA LU</h1>
          <hr className="divider divider-bottom" />
          <h2 className="hero-subtitle">Australian Light Flyweight Champion</h2>

          <Link to="/about" className="find-out-more-button">
            Find out more
          </Link>
        </div>
        <div className="scroll-indicator">
          <p className="scroll-text">Scroll Down</p>
          <div className="arrow-down"></div>
        </div>
      </div>

      {/* Child Component Sections */}
      {/* Apply data-aos attributes for scroll animations */}
      <HomeRecord data-aos="fade-up" />
      <HomepageVideo data-aos="fade-up" data-aos-delay="100" />
      <UpcomingFight data-aos="fade-up" />
      <FightHistory data-aos="fade-up" />
      <HomePT data-aos="fade-up" />
      <HomeSponsors data-aos="fade-up" />
    </div>
  );
};

export default Home;
