import React from "react";
import "./Footer.css";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/tiktok.png";
import lionsdenLogo from "../../assets/images/lionsden-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="site-map">
          <div className="top-row">
            <div className="social-links">
              <a
                href="https://www.instagram.com/_khalu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.tiktok.com/@_kha.lu?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              </a>
            </div>
          </div>
          <ul className="site-map-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/record">Record</Link>
            </li>
            <li>
              <Link to="/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Kha Lu | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
