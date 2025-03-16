import React from "react";
import { Instagram } from "lucide-react";
import "./HomePT.css";

const HomePT: React.FC = () => {
  return (
    <div className="home-pt-container">
      <div className="pt-content">
        <h2 className="pt-title">Personal Training</h2>
        <div className="pt-description">
          <p>
            Take your boxing skills to the next level with personalised
            one-on-one training sessions.
          </p>
          <p>
            Whether you're a beginner looking to learn the fundamentals or an
            experienced boxer aiming to refine your technique, I offer tailored
            sessions to help you achieve your goals.
          </p>
        </div>

        <div className="schedule-container">
          <h3 className="schedule-title">Available Time Slots</h3>
          <div className="schedule-grid">
            <div className="schedule-day">
              <h4>Monday</h4>
              <ul>
                <li>5:00 AM</li>
                <li>6:00 AM</li>
                <li>7:00 AM</li>
                <li>8:00 AM</li>
              </ul>
            </div>
            <div className="schedule-day">
              <h4>Tuesday</h4>
              <ul>
                <li>5:00 AM</li>
                <li>6:00 AM</li>
                <li>7:00 AM</li>
                <li>8:00 AM</li>
                <li>8:00 PM</li>
                <li>9:00 PM</li>
              </ul>
            </div>
            <div className="schedule-day">
              <h4>Wednesday</h4>
              <ul>
                <li>5:00 AM</li>
                <li>6:00 AM</li>
                <li>7:00 AM</li>
                <li>8:00 AM</li>
              </ul>
            </div>
            <div className="schedule-day">
              <h4>Thursday</h4>
              <ul>
                <li>5:00 AM</li>
                <li>6:00 AM</li>
                <li>7:00 AM</li>
                <li>8:00 AM</li>
                <li>8:00 PM</li>
                <li>9:00 PM</li>
              </ul>
            </div>
            <div className="schedule-day">
              <h4>Friday</h4>
              <ul>
                <li>5:00 AM</li>
                <li>6:00 AM</li>
                <li>7:00 AM</li>
                <li>8:00 AM</li>
              </ul>
            </div>
          </div>
          <p className="availability-note">* Subject to availability</p>
        </div>

        <div className="booking-info">
          <h3>Booking Information</h3>
          <p>For enquiries and to secure your booking:</p>
          <a
            href="https://www.instagram.com/_khalu/"
            className="instagram-booking-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
            <span>Message me on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePT;
