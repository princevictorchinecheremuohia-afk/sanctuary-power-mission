import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/reloader";
import HeaderHero from "./components/HeaderHero";
import Home from "./components/Home";
import AboutFullSection from "./components/AboutFullSection";
import EventFullSection from "./components/EventFullSection";
import TestimonyFullSection from "./components/TestimonyFullSection";
import GalleryFullSection from "./components/GalleryFullSection";
import ContactSection from "./components/ContactSection";
import DonateSection from "./components/DonateSection";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <HeaderHero />
          <Routes>
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
    </Router>
  );
}

export default App;
