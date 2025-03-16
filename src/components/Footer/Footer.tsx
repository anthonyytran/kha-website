import React from "react";
import "./Footer.css";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/tiktok.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="site-map">
          <div className="social-links">
            <a
              href="https://www.instagram.com/_khalu/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
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
              aria-label="TikTok"
            >
              <img src={tiktokIcon} alt="TikTok" className="social-icon" />
            </a>
          </div>

          <nav aria-label="Footer Navigation">
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
          </nav>
        </div>

        <p className="copyright">
          &copy; {currentYear} Kha Lu | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
