import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import australianFlag from "../../assets/images/flag-icon.png"; // Import the flag image

const Home = () => {
  return (
    <div>
      <div className="home-container-1">
        <div className="overlay-text">
          <h1>
            Kha{" "}
            <img
              src={australianFlag}
              alt="Australian Flag"
              className="flag-icon"
            />{" "}
            Lu
          </h1>
          <p>Undefeated Professional Boxer</p>
          <p className="subtext">
            Victorian Gold + Silver Light Flyweight Champion
          </p>
          <Link to="/about" className="find-out-more-button">
            Find out more
          </Link>
        </div>
      </div>

      <div className="home-container-2">
        <div className="record-text">
          <h2>Record</h2>
          <p>7-0-0</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
