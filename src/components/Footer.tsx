import React from "react";
import "./Footer.css";
// Import images
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import tiktokIcon from "../assets/images/tiktok.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Kha Lu | Official website of Kha Lu
          | All rights reserved
        </p>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={tiktokIcon} alt="TikTok" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
