import React, { useEffect, useState } from "react";
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

// Countdown Timer Function
const calculateTimeLeft = () => {
  const eventDate = new Date("December 18, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          <span className="record-separator">-</span>
          <div className="record-number">
            0<div className="record-label loss">Loss</div>
          </div>
          <span className="record-separator">-</span>
          <div className="record-number">
            0<div className="record-label draw">Draw</div>
          </div>
        </div>
      </div>

      {/* Record Details Container */}
      <div className="home-container-2">
        <h3 className="last-three-text">Fights</h3>

        {/* Upcoming Fight Card with Countdown */}
        <div className="fight-card upcoming">
          <h4>Katsunari Takayama</h4>
          <p className="date">December 18, 2024</p>
          <p className="method upcoming-text">Upcoming</p>
          <p className="location">Lagao Gymnasium, Phillipines</p>
          <div className="countdown-timer">
            <span className="countdown red">{timeLeft.days}d</span>{" "}
            <span className="countdown red">{timeLeft.hours}h</span>{" "}
            <span className="countdown red">{timeLeft.minutes}m</span>{" "}
            <span className="countdown red">{timeLeft.seconds}s</span>
          </div>
        </div>

        {/* Past Fights */}
        <div className="fight-history">
          <div className="fight-card">
            <h4>Watcharin Buacharoen</h4>
            <p className="date">March 16, 2024</p>
            <p className="method">UD</p>
            <p className="result win">Win</p>
            <p className="location">Melbourne Pavilion, Australia</p>
          </div>
          <div className="fight-card">
            <h4>Thoedkiad Weerachon</h4>
            <p className="date">December 2, 2023</p>
            <p className="method">TKO</p>
            <p className="result win">Win</p>
            <p className="location">Melbourne Pavilion, Australia</p>
          </div>
          <div className="fight-card">
            <h4>Oatkowit Kamlangcharoey</h4>
            <p className="date">September 16, 2023</p>
            <p className="method">TKO</p>
            <p className="result win">Win</p>
            <p className="location">Melbourne Pavilion, Australia</p>
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
              <img src={sponsor1} alt="Sponsor 1" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor2} alt="Sponsor 2" />
            </div>
            <div className="sponsor-slide">
              <img src={sponsor3} alt="Sponsor 3" />
            </div>
          </Slider>
        </div>
        <div className="sponsor-button-container">
          <Link to="/sponsors" className="view-all-button sponsor-button">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
