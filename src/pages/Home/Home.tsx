import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

// Flag images
import australiaFlag from "../../assets/images/australia-icon.png";
import japanFlag from "../../assets/images/japan-icon.png";

// Fighter images
import fighter1 from "../../assets/images/buacharoen.jpg";
import fighter2 from "../../assets/images/weerachon.jpg";
import fighter3 from "../../assets/images/kamlangcharoey.jpg";

// Sponsor images
import sponsor1 from "../../assets/images/rephaze.png";
import sponsor2 from "../../assets/images/sponsor2.png";
import sponsor3 from "../../assets/images/theboxinglab.png";
import sponsor4 from "../../assets/images/dynamic-therapy.png";
import sponsor5 from "../../assets/images/greeneflicks.png";

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
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });

    window.scrollTo(0, 0);
  }, []);

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

      <hr className="separator" />

      {/* Upcoming Fight Container */}
      <div className="upcoming-fight-container">
        <h1 className="upcoming-fight-title">Upcoming</h1>
        <div className="upcoming-fight-details" data-aos="fade-up">
          <div className="fighter-layout">
            <div className="fighter">
              <span className="fighter-name">KHA LU</span>
              <img
                src={australiaFlag}
                alt="Australian Flag"
                className="flag-icon"
              />
            </div>
            <div className="versus">vs</div>
            <div className="fighter">
              <span className="fighter-name">KATSUNARI TAKAYAMA</span>
              <img src={japanFlag} alt="Japanese Flag" className="flag-icon" />
            </div>
          </div>
          <p className="fight-title">IBO Minimum Weight Title</p>
          <p className="fight-date">December 18, 2024</p>
          <p className="fight-location">Bula Gymnasium, Philippines</p>
          <div className="countdown-timer">
            <span className="countdown red">{timeLeft.days}d</span>{" "}
            <span className="countdown red">{timeLeft.hours}h</span>{" "}
            <span className="countdown red">{timeLeft.minutes}m</span>{" "}
            <span className="countdown red">{timeLeft.seconds}s</span>
          </div>
        </div>
      </div>

      <div className="home-container-2">
        <h3 className="fights-title">Past Fights</h3>
        <div className="fight-history">
          {/* Fight card for Watcharin Buacharoen */}
          <div className="fight-card" data-aos="fade-up">
            <h4>
              <span className="first-name">Watcharin</span>
              <span className="last-name">Buacharoen</span>
            </h4>
            <img
              src={fighter1}
              alt="Watcharin Buacharoen"
              className="fighter-image"
            />
            <div className="fight-details">
              <p className="date">March 16, 2024</p>
              <p className="method">UD</p>
              <p className="location">Melbourne Pavilion, Australia</p>
              <p className="result win">Win</p>
            </div>
          </div>

          {/* Fight card for Thoedkiad Weerachon */}
          <div className="fight-card" data-aos="fade-up" data-aos-delay="100">
            <h4>
              <span className="first-name">Thoedkiad</span>
              <span className="last-name">Weerachon</span>
            </h4>
            <img
              src={fighter2}
              alt="Thoedkiad Weerachon"
              className="fighter-image"
            />
            <div className="fight-details">
              <p className="date">December 2, 2023</p>
              <p className="method">TKO</p>
              <p className="location">Melbourne Pavilion, Australia</p>
              <p className="result win">Win</p>
            </div>
          </div>

          {/* Fight card for Oatkowit Kamlangcharoey */}
          <div className="fight-card" data-aos="fade-up" data-aos-delay="200">
            <h4>
              <span className="first-name">Oatkowit</span>
              <span className="last-name">Kamlangcharoey</span>
            </h4>
            <img
              src={fighter3}
              alt="Oatkowit Kamlangcharoey"
              className="fighter-image"
            />
            <div className="fight-details">
              <p className="date">September 16, 2023</p>
              <p className="method">TKO</p>
              <p className="location">Melbourne Pavilion, Australia</p>
              <p className="result win">Win</p>
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
          <Link to="/sponsors" className="view-all-button sponsor-button">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
