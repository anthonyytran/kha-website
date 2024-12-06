import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Record from "./pages/Record/Record";
import Sponsors from "./pages/Sponsors/Sponsors";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Enhanced transition animations
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    x: -30, // Subtle shift for a polished look
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8, // Slightly longer duration for smoother animation
      ease: [0.25, 0.8, 0.5, 1], // Custom cubic bezier easing for a natural motion
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    x: 30, // Matches the initial movement for consistency
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // Different cubic bezier for a smooth exit
    },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home page without animation */}
        <Route path="/" element={<Home />} />

        {/* Pages with enhanced transitions */}
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/record"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Record />
            </motion.div>
          }
        />
        <Route
          path="/sponsors"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Sponsors />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;
