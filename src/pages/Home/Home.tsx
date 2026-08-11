import React, { useEffect } from "react";
import "./Home.css";

// UpcomingFight component removed
import HomepageVideo from "../../components/HomeVideo/HomeVideo";
import HomeRecord from "../../components/HomeRecord/HomeRecord";
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
      <HomeRecord />
      <HomePT />
      <HomeSponsors />
    </div>
  );
};

export default Home;
