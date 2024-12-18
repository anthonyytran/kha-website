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

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    x: -30,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    x: 30,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Motion wrapper component for consistent transitions
const MotionWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MotionWrapper>
              <Home />
            </MotionWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <MotionWrapper>
              <About />
            </MotionWrapper>
          }
        />
        <Route
          path="/record"
          element={
            <MotionWrapper>
              <Record />
            </MotionWrapper>
          }
        />
        <Route
          path="/sponsors"
          element={
            <MotionWrapper>
              <Sponsors />
            </MotionWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <MotionWrapper>
              <Contact />
            </MotionWrapper>
          }
        />
        <Route
          path="*"
          element={
            <MotionWrapper>
              <Home />
            </MotionWrapper>
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
