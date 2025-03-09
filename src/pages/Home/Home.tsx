import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

import UpcomingFight from "../../components/UpcomingFight/UpcomingFight";
import HomeRecord from "../../components/HomeRecord/HomeRecord";
import HomepageVideo from "../../components/HomepageVideo/HomepageVideo";

// Fighter images
import fighter1 from "../../assets/images/buacharoen.jpg";
import fighter2 from "../../assets/images/weerachon.jpg";
import fighter3 from "../../assets/images/kamlangcharoey.jpg";

// Flag image
import thailandFlag from "../../assets/images/thailand-icon.png";

// Sponsor images
import sponsor1 from "../../assets/images/rephaze.png";
import sponsor2 from "../../assets/images/studio25.png";
import sponsor3 from "../../assets/images/theboxinglab.png";
import sponsor4 from "../../assets/images/dynamic-therapy.png";
import sponsor5 from "../../assets/images/greeneflicks.png";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
    window.scrollTo(0, 0);
  }, []);

  const sponsorSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="home-container-1">
        <div className="overlay-text">
          <hr className="divider divider-top" />
          <h2 className="fade-in-text" data-aos="fade-in">
            PROFESSIONAL BOXER
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
      <div className="home-container-2">
        <h3 className="fights-title">Past Fights</h3>
        <div className="fight-history">
          <div className="fight-card" data-aos="fade-up">
            <h4>
              <img
                src={thailandFlag}
                alt="Thailand Flag"
                className="flag-icon"
              />
              <div className="name-container">
                <span className="first-name">Watcharin</span>
                <span className="last-name">Buacharoen</span>
              </div>
            </h4>
            <img
              src={fighter1}
              alt="Watcharin Buacharoen"
              className="fighter-image"
            />
            <div className="fight-details">
              <p className="method">UNANIMOUS DECISION</p>
              <p className="result win">Win</p>
              <p className="date">March 16, 2024</p>
              <p className="location">Melbourne Pavilion, Australia</p>
            </div>
          </div>
          <div className="fight-card" data-aos="fade-up" data-aos-delay="100">
            <h4>
              <img
                src={thailandFlag}
                alt="Thailand Flag"
                className="flag-icon"
              />
              <div className="name-container">
                <span className="first-name">Thoedkiad</span>
                <span className="last-name">Weerachon</span>
              </div>
            </h4>
            <img
              src={fighter2}
              alt="Thoedkiad Weerachon"
              className="fighter-image"
            />
            <div className="fight-details">
              <p className="method">TECHNICAL KNOCKOUT</p>
              <p className="result win">Win</p>
              <p className="date">December 2, 2023</p>
              <p className="location">Melbourne Pavilion, Australia</p>
            </div>
          </div>
          <div className="fight-card" data-aos="fade-up" data-aos-delay="200">
            <h4>
              <img
                src={thailandFlag}
                alt="Thailand Flag"
                className="flag-icon"
              />
              <div className="name-container">
                <span className="first-name">Oatkowit</span>
                <span className="last-name">Kamlangcharoey</span>
              </div>
            </h4>
            <img
              src={fighter3}
              alt="Oatkowit Kamlangcharoey"
              className="fighter-image"
            />
            <div className="fight-details">
              <p className="method">TECHNICAL KNOCKOUT</p>
              <p className="result win">Win</p>
              <p className="date">September 16, 2023</p>
              <p className="location">Melbourne Pavilion, Australia</p>
            </div>
          </div>
        </div>

        <div className="view-all-button-container fights-button">
          <Link to="/record" className="view-all-button">
            View All
          </Link>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="home-container-3">
        <h2 className="sponsors-title">Our Sponsors</h2>
        <div className="sponsor-carousel">
          <Slider {...sponsorSettings}>
            <div className="sponsor-slide">
              <img src={sponsor1} alt="Rephaze" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor2} alt="Sponsor 2" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor3} alt="The Boxing Lab" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor4} alt="Dynamic Therapy" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor5} alt="Greene Flicks" />
            </div>
          </Slider>
        </div>
        <div className="sponsor-button-container">
          <Link to="/sponsors" className="sponsor-button">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
