import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure 'Routes' is used instead of 'Switch'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Record from "./pages/Record/Record";
import Sponsors from "./pages/Sponsors/Sponsors";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {" "}
        {/* Replaces Switch */}
        <Route path="/" element={<Home />} />{" "}
        {/* element prop replaces component */}
        <Route path="/about" element={<About />} />
        <Route path="/record" element={<Record />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
