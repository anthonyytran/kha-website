import React, { useEffect, useState } from "react";
import AOS from "aos";
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

const UpcomingFight: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.init({ once: true });
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="upcoming-fight-container">
      {/* Title and Date */}
      <div className="fight-title-container" data-aos="fade-up">
        <h1 className="fight-title">Australian Title</h1>
        <p className="fight-date">April 4, 2025</p>
        <p className="fight-date">Melbourne Pavilion</p>
      </div>

      {/* Fighters Section */}
      <div className="fight-header" data-aos="fade-up" data-aos-delay="200">
        <div className="fighter fighter-main">
          <div className="fighter-name">
            <img
              className="australia-icon"
              src={australiaIcon}
              alt="Australia"
            />
            <span className="fighter-first">Kha Lu</span>
          </div>
        </div>

        <div className="vs">VS</div>

        <div className="fighter fighter-secondary">
          <div className="fighter-name">
            <img
              className="australia-icon"
              src={australiaIcon}
              alt="Australia"
            />
            <span className="fighter-first">David Anderson</span>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown" data-aos="fade-up" data-aos-delay="400">
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>

      {/* Location */}
      <div
        className="fight-location"
        data-aos="fade-up"
        data-aos-delay="600"
      ></div>

      {/* Ticket Button */}
      <div
        className="ticket-button-container"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <a
          href="https://lionsdendelahey.com.au/pages/fight-night-tickets"
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-button"
        >
          Buy Tickets Now
        </a>
      </div>
    </div>
  );
};

export default UpcomingFight;
