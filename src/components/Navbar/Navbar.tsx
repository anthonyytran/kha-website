import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/tiktok.png";
import logoIcon from "../../assets/images/kha-logo2.png";
import lionsdenLogo from "../../assets/images/kha-logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const location = useLocation();
  const navLinksRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // When menu opens, prevent scrolling on the body
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target) &&
        !event.target.closest(".hamburger")
      ) {
        setIsOpen(false);
        document.body.style.overflow = "visible";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll direction
      if (scrollTop > lastScrollTop + 10) {
        setIsScrollingUp(false);
      } else if (scrollTop < lastScrollTop - 10) {
        setIsScrollingUp(true);
      }

      // Set transparency based on scroll position
      setIsTransparent(scrollTop <= 20);

      // Update last scroll position
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  }, [location]);

  // Trigger navbar animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
      setIsInitialLoad(false);
    }, 1500); // Delay of 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Set animation delay for each nav item in mobile menu
  const getNavItemStyle = (index) => {
    return {
      "--item-index": index,
    };
  };

  return (
    <nav
      className={`navbar 
        ${isInitialLoad ? "navbar-initial" : ""} 
        ${!showNavbar ? "navbar-hidden" : "navbar-visible"} 
        ${isTransparent ? "transparent" : "scrolled"} 
        ${isScrollingUp || isOpen ? "" : "navbar-hidden"}`}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logoIcon} alt="Kha Lu Logo" className="logo-icon" />
        </Link>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`} ref={navLinksRef}>
          {isOpen && <hr className="nav-divider" />}
          <li style={getNavItemStyle(1)}>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li style={getNavItemStyle(2)}>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li style={getNavItemStyle(3)}>
            <Link
              to="/record"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/record" ? "active" : ""}
            >
              Record
            </Link>
          </li>
          <li style={getNavItemStyle(4)}>
            <Link
              to="/sponsors"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/sponsors" ? "active" : ""}
            >
              Sponsors
            </Link>
          </li>
          <li style={getNavItemStyle(5)}>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          {isOpen && <hr className="nav-divider" />}
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
