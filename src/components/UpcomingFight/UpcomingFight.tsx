import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UpcomingFight.css";

// Import images
import australiaIcon from "../../assets/images/australia-icon.png";
import lionsdenLogo from "../../assets/images/lionsden-logo.png";

const calculateTimeLeft = () => {
  const eventDate = new Date("April 4, 2025 20:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
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

const UpcomingFight: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Initialize AOS with consistent settings
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      mirror: false,
      offset: 50,
      anchorPlacement: "top-bottom",
    });

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="upcoming-fight-container"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* Title and Date */}
      <div className="fight-title-container">
        <h1 className="fight-title" data-aos="fade-up" data-aos-delay="100">
          Australian Title
        </h1>
        <p className="fight-date" data-aos="fade-up" data-aos-delay="200">
          April 4, 2025
        </p>
        <p className="fight-date" data-aos="fade-up" data-aos-delay="300">
          Melbourne Pavilion
        </p>
      </div>

      {/* Fighters Section */}
      <div className="fight-header">
        <div
          className="fighter fighter-main"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="fighter-name">
            <img
              className="australia-icon"
              src={australiaIcon}
              alt="Australia"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <span className="fighter-first">Kha</span>
            <span className="fighter-last">Lu</span>
          </div>
        </div>

        <div className="vs" data-aos="zoom-in" data-aos-delay="500">
          VS
        </div>

        <div
          className="fighter fighter-secondary"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="fighter-name">
            <img
              className="australia-icon"
              src={australiaIcon}
              alt="Australia"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <span className="fighter-first">David</span>
            <span className="fighter-last">Anderson</span>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown" data-aos="fade-up" data-aos-delay="500">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div
            key={unit}
            className="countdown-item"
            data-aos="zoom-in"
            data-aos-delay={600 + index * 100}
          >
            <div className="countdown-number">{timeLeft[unit]}</div>
            <div className="countdown-label">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
          </div>
        ))}
      </div>

      {/* Ticket Button */}
      <div
        className="ticket-button-container"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <a
          href="https://lionsdendelahey.com.au/pages/fight-night-tickets"
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-button"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          Buy Tickets Now
        </a>
      </div>
    </div>
  );
};

export default UpcomingFight;
