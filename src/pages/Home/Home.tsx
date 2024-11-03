import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container-1">
        <div className="overlay-text">
          <h1>Kha Lu</h1>
          <p>Undefeated Professional Boxer</p>
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
