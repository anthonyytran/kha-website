import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import australianFlag from "../../assets/images/flag-icon.png";

// Sponsor images
import sponsor1 from "../../assets/images/rephaze.png";
import sponsor2 from "../../assets/images/sponsor2.png";
import sponsor3 from "../../assets/images/theboxinglab.png";

const Home = () => {
  const sponsorSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="home-container-1">
        <div className="overlay-text">
          <h1>
            Kha{" "}
            <img
              src={australianFlag}
              alt="Australian Flag"
              className="flag-icon"
            />{" "}
            Lu
          </h1>
          <h2>PROFESSIONAL BOXER</h2>
          <h3 className="subtext">Victorian Light Flyweight Champion</h3>
          <Link to="/about" className="find-out-more-button">
            Find out more
          </Link>
        </div>
      </div>

      {/* Record Title Container */}
      <div className="record-title-container">
        <h2>Record</h2>
        <div className="record-summary">
          <div className="record-number">
            7<div className="record-label win">Win</div>
          </div>
          <div className="record-number">
            0<div className="record-label loss">Loss</div>
          </div>
          <div className="record-number">
            0<div className="record-label draw">Draw</div>
          </div>
        </div>
      </div>

      {/* Record Details Container */}
      <div className="home-container-2">
        <h3 className="last-three-text">Last 3 Fights</h3>
        <div className="fight-history">
          <div className="fight-card">
            <p>
              <strong>Opponent:</strong> John Doe
            </p>
            <p>
              <strong>Date:</strong> June 12, 2023
            </p>
            <p className="win">
              <strong>Result:</strong> Win
            </p>
          </div>
          <div className="fight-card">
            <p>
              <strong>Opponent:</strong> Mark Smith
            </p>
            <p>
              <strong>Date:</strong> March 9, 2023
            </p>
            <p className="win">
              <strong>Result:</strong> Win
            </p>
          </div>
          <div className="fight-card">
            <p>
              <strong>Opponent:</strong> Alex Brown
            </p>
            <p>
              <strong>Date:</strong> January 15, 2023
            </p>
            <p className="win">
              <strong>Result:</strong> Win
            </p>
          </div>
        </div>
        <div className="view-all-button-container">
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
              <img src={sponsor1} alt="Sponsor 1" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor2} alt="Sponsor 2" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor3} alt="Sponsor 3" />
            </div>
            {/* Add more sponsors as needed */}
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
