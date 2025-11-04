import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/churchlogo.jpg";

function Preloader() {
  const preLoader = [
    {
      id: 1,
      imageURL: logo,
      imageTitle: "logo",
      text: "Be still, and know that I am God - Psalms 46:10",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
        {preLoader.map((loader) => (
          <div key={loader.id} className="preLoader flex flex-col items-center">
            {/* Spinner wrapping around the logo */}
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute w-24 h-24 border-4 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
              <img
                src={loader.imageURL}
                alt={loader.imageTitle}
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>

            <h1 className="text-lg font-semibold text-gray-700 max-w-xs px-4">
              {loader.text}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Preloader;
