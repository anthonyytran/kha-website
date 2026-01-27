import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// UpcomingFight component removed
import HomepageVideo from "../../components/HomeVideo/HomeVideo";
import FightHistory from "../../components/FightHistory/FightHistory";
import HomeSponsors from "../../components/HomeSponsors/HomeSponsors";
import HomePT from "../../components/HomePT/HomePT";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* AOS removed: components render without data-aos attributes */}
      <HomepageVideo />
      <FightHistory />
      <HomePT />
      <HomeSponsors />
    </div>
  );
};

export default Home;
