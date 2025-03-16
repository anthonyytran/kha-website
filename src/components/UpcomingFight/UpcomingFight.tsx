import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UpcomingFight.css";

// Import images
import australiaIcon from "../../assets/images/australia-icon.png";

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

const UpcomingFight = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS with more reliable settings
    AOS.init({
      once: true, // Changed to true - animations only happen once
      duration: 800,
      easing: "ease-out",
      offset: 0, // Lower offset for easier triggering
      disable: false, // Never disable
      startEvent: "DOMContentLoaded", // Earlier start event
    });

    // Force refresh AOS after component mount
    setTimeout(() => {
      AOS.refresh();
      setIsVisible(true); // Set visibility after a short delay
    }, 500);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time numbers to always have two digits
  const formatTimeNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div
      className={`upcoming-fight-container ${isVisible ? "visible" : ""}`}
      data-aos="fade-in"
      data-aos-duration="600"
    >
      {/* Title and Date */}
      <div
        className={`fight-title-container ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
        data-aos-delay="100"
        // Adding inline styles as a fallback
        style={{
          opacity: isVisible ? 1 : null,
          transform: isVisible ? "none" : null,
        }}
      >
        <h1
          className={`fight-title ${isVisible ? "visible" : ""}`}
          style={{
            opacity: isVisible ? 1 : null,
            transform: isVisible ? "none" : null,
          }}
        >
          Australian Title
        </h1>
        <p
          className={`fight-date ${isVisible ? "visible" : ""}`}
          style={{
            opacity: isVisible ? 1 : null,
            transform: isVisible ? "none" : null,
          }}
        >
          April 4, 2025
        </p>
        <p
          className={`fight-date ${isVisible ? "visible" : ""}`}
          data-aos-delay="150"
          style={{
            opacity: isVisible ? 1 : null,
            transform: isVisible ? "none" : null,
          }}
        >
          Melbourne Pavilion
        </p>
      </div>

      {/* Fighters Section */}
      <div className="fight-header">
        <div
          className={`fighter fighter-main ${isVisible ? "visible" : ""}`}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <div className="fighter-name">
            <img
              className={`australia-icon ${isVisible ? "visible" : ""}`}
              src={australiaIcon}
              alt="Australia"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <div className="fighter-name-text">
              <span className="fighter-first">Kha</span>
              <span className="fighter-last">Lu</span>
            </div>
          </div>
        </div>

        <div
          className={`vs ${isVisible ? "visible" : ""}`}
          data-aos="zoom-in"
          data-aos-delay="250"
          data-aos-duration="600"
        >
          VS
        </div>

        <div
          className={`fighter fighter-secondary ${isVisible ? "visible" : ""}`}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <div className="fighter-name">
            <img
              className={`australia-icon ${isVisible ? "visible" : ""}`}
              src={australiaIcon}
              alt="Australia"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <div className="fighter-name-text">
              <span className="fighter-first">David</span>
              <span className="fighter-last">Anderson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div
        className={`countdown ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="600"
      >
        {[
          { unit: "days", value: timeLeft.days },
          { unit: "hours", value: timeLeft.hours },
          { unit: "minutes", value: timeLeft.minutes },
          { unit: "seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={item.unit}
            className={`countdown-item ${isVisible ? "visible" : ""}`}
            data-aos="zoom-in"
            data-aos-delay={350 + index * 50} // Reduced sequential delays
            data-aos-duration="500"
          >
            <div className="countdown-number">
              {formatTimeNumber(item.value)}
            </div>
            <div className="countdown-label">
              {item.unit.charAt(0).toUpperCase() + item.unit.slice(1)}
            </div>
          </div>
        ))}
      </div>

      {/* Ticket Button */}
      <div
        className={`ticket-button-container ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <a
          href="https://lionsdendelahey.com.au/pages/fight-night-tickets"
          target="_blank"
          rel="noopener noreferrer"
          className={`ticket-button ${isVisible ? "visible" : ""}`}
          data-aos="zoom-in"
          data-aos-delay="450"
          data-aos-duration="500"
        >
          Buy Tickets Now
        </a>
      </div>
    </div>
  );
};

export default UpcomingFight;
