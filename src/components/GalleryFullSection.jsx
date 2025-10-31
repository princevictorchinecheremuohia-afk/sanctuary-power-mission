import React from "react";
import GalleryHero from "./GalleryHero";
import FooterSection from "./FooterSection";

function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      imageUrl: "./Gallery-One.jpeg",
      title: "Image One",
    },
    {
      id: 2,
      imageUrl: "./Gallery-Two.jpeg",
      title: "Image Two",
    },
    {
      id: 3,
      imageUrl: "./Gallery-Three.jpeg",
      title: "Image Three",
    },
    {
      id: 4,
      imageUrl: "./Gallery-Four.jpeg",
      title: "Image Four",
    },
    {
      id: 5,
      imageUrl: "./Gallery-Five.jpeg",
      title: "Image Five",
    },
    {
      id: 6,
      imageUrl: "./Gallery-Six.jpeg",
      title: "Image Six",
    },
  ];
  return (
    <>
      <GalleryHero />
      <section className="GallerySection px-3 md:px-0 py-0 md:py-0 bg-gray-100 overflow-hidden">
        <h2 className="text-2xl md:text-4xl mt-0 md:mt-0 text-center font-bold uppercase"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item" data-aos="fade-right">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-100 object-cover transition-transform duration-500 ease-in-out hover:scale-102 cursor-crosshair"
              />
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </>
  );
}
export default GallerySection;
