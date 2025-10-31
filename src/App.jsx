import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
