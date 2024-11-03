import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import instagramIcon from "../assets/images/instagram.png";
import tiktokIcon from "../assets/images/tiktok.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll direction to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScrollingUp(false); // Scrolling down, hide navbar
      } else {
        setIsScrollingUp(true); // Scrolling up, show navbar
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Reset scroll position at top of page
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`navbar ${isScrollingUp ? "navbar-visible" : "navbar-hidden"}`}
    >
      <div className="navbar-container">
        <h1 className="logo">Kha Lu</h1>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
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
              to="/record"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/record" ? "active" : ""}
            >
              Record
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
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
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
