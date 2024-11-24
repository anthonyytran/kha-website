import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/tiktok.png";
import logoIcon from "../../assets/images/kha-logo2.png";
import lionsdenLogo from "../../assets/images/lionsden-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Set initial animation as done after its duration
    const timer = setTimeout(() => {
      setIsInitialAnimationDone(true);
    }, 1500); // Match this duration to your CSS animation delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialAnimationDone) return;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, isInitialAnimationDone]);

  return (
    <nav
      className={`navbar ${
        isInitialAnimationDone
          ? isScrollingUp
            ? "navbar-visible"
            : "navbar-hidden"
          : "navbar-initial"
      }`}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logoIcon} alt="Kha Lu Logo" className="logo-icon" />
        </Link>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <hr className="nav-divider" />
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
          <hr className="nav-divider" />
          {isOpen && (
            <>
              <li className="lionsden-logo">
                <img
                  src={lionsdenLogo}
                  alt="Lionsden Logo"
                  className="lionsden-logo-icon"
                />
              </li>
              <hr className="nav-divider" />
              <div className="mobile-footer">
                <p className="copyright">
                  &copy; {new Date().getFullYear()} Kha Lu | All rights reserved
                </p>
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
                    <img
                      src={tiktokIcon}
                      alt="TikTok"
                      className="social-icon"
                    />
                  </a>
                </div>
              </div>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
