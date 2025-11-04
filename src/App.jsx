import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Preloader from "./components/preloader";
import Home from "./components/Home";
import HeaderHero from "./components/HeaderHero";
// import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AboutFullSection from "./components/AboutFullSection";
// import TestimonySection from "./components/TestimonySection";
import TestimonyFullSection from "./components/TestimonyFullSection";
import EventSection from "./components/EventSection";
import EventFullSection from "./components/EventFullSection";
import GallerySection from "./components/GallerySection";
import GalleryFullSection from "./components/GalleryFullSection";
import ContactSection from "./components/ContactSection";
import DonateSection from "./components/DonateSection";
// import FooterSection from "./components/FooterSection";
import AOS from "aos";
import "aos/dist/aos.css";

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 4000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <HeaderHero />

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutFullSection />} />
            <Route path="/events" element={<EventFullSection />} />
            <Route path="/testimonies" element={<TestimonyFullSection />} />
            <Route path="/gallery" element={<GalleryFullSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/donate" element={<DonateSection />} />
          </Routes>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
