import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import HeaderHero from "./HeaderHero";

function AboutHero() {
  const slides = [
    {
      id: 1,
      imageUrl: "/heroimage1.jpg",
    },

    {
      id: 2,
      imageUrl: "/heroimage2.jpg",
    },
  ];
  return (
    <section className="relative h-[50vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        <HeaderHero />
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="bg-black/60 w-full h-full flex items-center justify-center flex-col space-y-4">
                <h1
                  className="text-4xl text-red-200 md:text-6xl font-bold text-center px-3 md:px-4 md:max-w-5xl"
                  data-aos="fade-up"
                >
                  Contact Us
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default AboutHero;
