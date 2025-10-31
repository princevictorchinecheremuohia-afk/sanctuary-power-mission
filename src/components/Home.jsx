import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import EventSection from "../components/EventSection";
import TestimonySection from "../components/TestimonySection";
import GallerySection from "../components/GallerySection";
import FooterSection from "../components/FooterSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EventSection />
      <TestimonySection />
      <GallerySection />
      <FooterSection />
    </>
  );
}

export default Home;
