import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/tiktok.png";
import logoIcon from "../../assets/images/kha-logo2.png";
import lionsdenLogo from "../../assets/images/kha-logo2.png"; // Assuming same logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const location = useLocation();
  const navLinksRef = useRef<HTMLUListElement>(null);
  const initialLoadTimerRef = useRef<NodeJS.Timeout | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  };

  const toggleMenu = () => {
    const nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);
    document.body.style.overflow = nextIsOpen ? "hidden" : "visible";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".hamburger")
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
      if (scrollTop > lastScrollTop + 10) {
        setIsScrollingUp(false);
      } else if (scrollTop < lastScrollTop - 5 || scrollTop <= 10) {
        setIsScrollingUp(true);
      }
      if (isInitialLoad && scrollTop > 20) {
        if (initialLoadTimerRef.current) {
          clearTimeout(initialLoadTimerRef.current);
        }
        setShowNavbar(true);
        setIsInitialLoad(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (initialLoadTimerRef.current) {
        clearTimeout(initialLoadTimerRef.current);
      }
    };
  }, [lastScrollTop, isInitialLoad]);

  useEffect(() => {
    closeMenu();
    setTimeout(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
      setIsScrollingUp(true);
      setLastScrollTop(scrollTop);
    }, 100);
  }, [location]);

  useEffect(() => {
    if (isInitialLoad) {
      initialLoadTimerRef.current = setTimeout(() => {
        setShowNavbar(true);
        setIsInitialLoad(false);
      }, 800);
    }
    return () => {
      if (initialLoadTimerRef.current && isInitialLoad) {
        clearTimeout(initialLoadTimerRef.current);
      }
    };
  }, [isInitialLoad]);

  const getNavItemStyle = (index: number) => {
    return { "--item-index": index } as React.CSSProperties;
  };

  const navbarClasses = `
    navbar
    ${isInitialLoad ? "navbar-initial-state" : ""}
    ${showNavbar ? "navbar-animated" : ""}
    ${isScrolled ? "scrolled" : "transparent"}
    ${
      isScrollingUp || isOpen || !isScrolled
        ? "navbar-visible"
        : "navbar-hidden"
    }
  `;

  return (
    <nav className={navbarClasses.trim().replace(/\s+/g, " ")}>
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
          aria-expanded={isOpen}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Apply .nav-links class to the UL */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`} ref={navLinksRef}>
          {/* Main Links - Rendered directly inside UL */}
          {/* Conditional divider only needed for mobile menu */}
          {isOpen && <hr className="nav-divider top-divider" />}
          <li style={getNavItemStyle(1)}>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li style={getNavItemStyle(2)}>
            <Link
              to="/about"
              onClick={closeMenu}
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li style={getNavItemStyle(3)}>
            <Link
              to="/record"
              onClick={closeMenu}
              className={location.pathname === "/record" ? "active" : ""}
            >
              Record
            </Link>
          </li>
          <li style={getNavItemStyle(4)}>
            <Link
              to="/sponsors"
              onClick={closeMenu}
              className={location.pathname === "/sponsors" ? "active" : ""}
            >
              Sponsors
            </Link>
          </li>
          <li style={getNavItemStyle(5)}>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          {/* Conditional divider only needed for mobile menu */}
          {isOpen && <hr className="nav-divider bottom-divider" />}

          {/* Footer Elements - Rendered directly inside UL only when menu is open */}
          {isOpen && (
            <>
              <li className="lionsden-logo" style={getNavItemStyle(6)}>
                <img
                  src={lionsdenLogo}
                  alt="Lionsden Logo"
                  className="lionsden-logo-icon"
                />
              </li>
              {/* Wrap footer content in an LI for semantics and animation */}
              <li className="mobile-footer-wrapper" style={getNavItemStyle(7)}>
                <hr className="nav-divider" />
                <div className="mobile-footer-content">
                  <p className="copyright">
                    © {new Date().getFullYear()} Kha Lu | All rights reserved
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
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
