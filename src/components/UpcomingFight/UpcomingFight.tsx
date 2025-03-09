import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./UpcomingFight.css";

// Flag image
import australiaFlag from "../../assets/images/australia-icon.png";

const calculateTimeLeft = () => {
  const eventDate = new Date("April 4, 2025 20:00:00").getTime();
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

const UpcomingFight: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.refresh();
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="upcoming-fight-container">
      <div className="upcoming-fight-details" data-aos="fade-up">
        <div className="fighter-layout">
          <div className="fighter">
            <img
              src={australiaFlag}
              alt="Australian Flag"
              className="flag-icon"
            />
            <div className="fighter-name-container">
              <span className="fighter-name-first">Kha</span>
              <span className="fighter-name-last">Lu</span>
            </div>
          </div>
          <div className="versus">Vs</div>
          <div className="fighter">
            <img
              src={australiaFlag}
              alt="Japanese Flag"
              className="flag-icon"
            />
            <div className="fighter-name-container">
              <span className="fighter-name-first">Daniel</span>
              <span className="fighter-name-last">Anderson</span>
            </div>
          </div>
        </div>
      </div>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-value red">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value red">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value red">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value red">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <div className="countdown-title">
        <h3>Australian Title</h3>
      </div>
      <div className="fight-info">
        <p className="fight-date">December 18, 2024</p>
        <p className="fight-location">Melbourne Pavillion, Australia</p>
      </div>
    </div>
  );
};

export default UpcomingFight;
