import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import HeaderHero from "./HeaderHero";

function Hero() {
  const slides = [
    {
      id: 1,
      imageUrl: "/heroimage1.jpg",
      caption1: "Welcome to Sanctuary Power Mission",
      caption2:
        "A place where hearts are lifted, lives are transformed, and Jesus is glorified.",
      text: "Encounter the power of the Holy Spirit and be transformed by His love.",
    },

    {
      id: 2,
      imageUrl: "/heroimage2.jpg",
      caption1: "Join Us in Worship",
      caption2:
        "Experience God’s presence, connect with loving people, and grow in faith together.",
      text: "Join us for a life-changing time of praise, worship, and the Word.",
    },
  ];
  return (
    <section className="relative h-[100vh] w-full">
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
              <div
                className="bg-black/60 w-full h-full flex items-center justify-center flex-col space-y-4"
                data-aos="fade-up"
              >
                <p
                  className="text-lg text-red-200 md:text-xl text-center font-bold px-4"
                  data-aos="fade-up"
                >
                  {slide.caption1}
                </p>
                <h1
                  className="text-4xl text-white md:text-6xl font-bold text-center px-3 md:px-4 md:max-w-5xl"
                  data-aos="fade-up"
                >
                  {slide.caption2}
                </h1>
                <p
                  className="text-lg text-white md:text-xl text-center px-4"
                  data-aos="fade-up"
                >
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
