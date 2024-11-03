import React from "react";
import "./Home.css";
import KhaGroupPhoto1 from "../../assets/images/group-photo1.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <img src={KhaGroupPhoto1} alt="Group Photo 1" />
    </div>
  );
};

export default Home;
