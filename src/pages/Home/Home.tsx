import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import australianFlag from "../../assets/images/flag-icon.png";

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
          <h2>PROFESSIONAL BOXER</h2>
          <h3 className="subtext">
            Victorian Gold & Silver Light Flyweight Champion
          </h3>
          <Link to="/about" className="find-out-more-button">
            Find out more
          </Link>
        </div>
      </div>

      <div className="home-container-2">
        <div className="record-text">
          <h2>Record</h2>
          <p className="record-summary">7-0-0</p>
          <h3 className="last-three-text">Last 3 Fights</h3>
          <div className="fight-history">
            <div className="fight-card">
              <p>
                <strong>Opponent:</strong> John Doe
              </p>
              <p>
                <strong>Date:</strong> June 12, 2023
              </p>
              <p className="win">
                <strong>Result:</strong> Win
              </p>
            </div>
            <div className="fight-card">
              <p>
                <strong>Opponent:</strong> Mark Smith
              </p>
              <p>
                <strong>Date:</strong> March 9, 2023
              </p>
              <p className="win">
                <strong>Result:</strong> Win
              </p>
            </div>
            <div className="fight-card">
              <p>
                <strong>Opponent:</strong> Alex Brown
              </p>
              <p>
                <strong>Date:</strong> January 15, 2023
              </p>
              <p className="win">
                <strong>Result:</strong> Win
              </p>
            </div>
          </div>
          <div className="view-all-button-container">
            <Link to="/record" className="view-all-button">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
