import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sponsors from "./pages/Sponsors/Sponsors";
import Contact from "./pages/Contact/Contact";
import Record from "./pages/Record/Record";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/record" element={<Record />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
