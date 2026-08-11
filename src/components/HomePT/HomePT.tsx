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

        <div className="booking-info">
          <a
            href="https://www.instagram.com/_khalu/"
            className="instagram-booking-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
            <span>Message me for booking enquiries</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePT;
