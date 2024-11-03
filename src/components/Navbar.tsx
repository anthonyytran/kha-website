import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import tiktokIcon from "../assets/images/tiktok.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Kha Lu</h1>
        {/* Hamburger Menu Icon */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/sponsors"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/sponsors" ? "active" : ""}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="/record"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/record" ? "active" : ""}
            >
              Record
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          {/* Copyright and Social Links */}
          {isOpen && (
            <div className="mobile-footer">
              <p>&copy; {new Date().getFullYear()} Kha Lu</p>
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
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
