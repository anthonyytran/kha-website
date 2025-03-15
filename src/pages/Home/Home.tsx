import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import UpcomingFight from "../../components/UpcomingFight/UpcomingFight";
import HomeRecord from "../../components/HomeRecord/HomeRecord";
import HomepageVideo from "../../components/HomepageVideo/HomepageVideo";
import FightHistory from "../../components/FightHistory/FightHistory";
import HomeSponsors from "../../components/HomeSponsors/HomeSponsors";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="home-container-1">
        <div className="overlay-text">
          <hr className="divider divider-top" />
          <h2 className="fade-in-text" data-aos="fade-in">
            KHA LU
          </h2>
          <hr className="divider divider-bottom" />
          <h3 className="fade-in-champion subtext">
            Victorian Light Flyweight Champion
          </h3>
          <Link to="/about" className="find-out-more-button">
            Find out more
          </Link>
        </div>
        <div className="scroll-indicator">
          <p className="scroll-text">Scroll Down</p>
          <div className="arrow-down"></div>
        </div>
      </div>

      {/* Record Title Container */}
      <HomeRecord />

      {/* Video */}
      <HomepageVideo />

      {/* Upcoming Fight Section */}
      <UpcomingFight />

      {/* Fight History Section */}
      <FightHistory />

      {/* Sponsors Section */}
      <HomeSponsors />
    </div>
  );
};

export default Home;
