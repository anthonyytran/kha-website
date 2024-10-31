import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Boxer Name's Official Website</h1>
          <p>Your one-stop destination for all things related to boxing.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
      <section className="highlights">
        <h2>Highlights</h2>
        <p>Check out the latest fights, training videos, and news.</p>
        {/* You can add more content here, like featured videos or stats */}
      </section>
      <Footer /> {/* Include footer if you have one */}
    </div>
  );
};

export default Home;
