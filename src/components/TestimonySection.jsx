import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function TestimonySection() {
  const testimonies = [
    {
      id: 1,
      text1:
        "Praise the Lord! I want to thank God for His mercy and protection. I narrowly escaped a terrible accident — I was meant to be in that vehicle, but traffic delayed me. Truly, God saved me! Again, God delivered me from the hands of the EFCC during a raid. I called on the God of SPM, and He showed up for me. All glory to God for fighting my battles and keeping me safe!",
      text2: "Daniel Sokari",
    },

    {
      id: 2,
      text1:
        "Praise the Lord! I want to thank God for restoring me financially. During one of our Sunday services in October, Daddy called me out and asked when last I received money. I told him it had been a while, and he prayed for me. Immediately after the service, as I got home, a long-time client of mine sent me a good amount of money! Hallelujah!",
      text2: "Kingsley Godwill Chizindu",
    },

    {
      id: 3,
      text1:
        "Praise the Lord! I want to thank God for making it possible for me to travel to the village to see my dad, despite how bad and rough the road was He granted me journey mercies. I also want to thank God because after Daddy’s prayers, I received financial help from someone I least expected. I just want to say, thank You Lord for Your goodness and faithfulness!",
      text2: "Wisdom",
    },

    {
      id: 4,
      text1:
        "Praise the Lord Church! My name is Happiness Mbonu. I just want to thank the God of this commission for restoring my sales. During one of our Wednesday services, Daddy declared that customers would locate us. I keyed into that declaration, and right there in church, my phone rang it was one of my customers! It had been a while since I made any sales, but God showed up for me. I’ve come to say, thank You Jesus!",
      text2: "Happiness .M.",
    },

    {
      id: 5,
      text1:
        "Praise the Lord! I’m here to appreciate God for bringing my son back to life. He suddenly fainted and stopped breathing, my husband and I thought we had lost him. But as we prayed and called on God, He answered us, and our boy regained consciousness! I sincerely thank God because if not for Him, my son wouldn’t be here today. Thank You, Jesus!",
      text2: "Mrs. HopeKing",
    },
  ];
  return (
    <section className="TestimonySection px-3 py-10 md:py-20 mt-10 md:mt-30 md:px-16 bg-yellow-900">
      <p
        className="text-lg md:text-xl text-center text-white font-semibold uppercase pt-10"
        data-aos="fade-right"
      >
        Testimony
      </p>
      <h2
        className="text-2xl md:text-4xl text-center font-bold text-white uppercase mb-10"
        data-aos="fade-right"
      >
        Transform Lives
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        className="w-[90%] md:w-[70%]"
      >
        {testimonies.map((testimony) => (
          <SwiperSlide key={testimony.id}>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-gray-800 h-120 flex flex-col justify-between md:flex md:flex-col md:justify-between md:h-60"
              data-aos="fade-right"
            >
              <p className="leading-relaxed">{testimony.text1}</p>
              {testimony.text2 && (
                <p className="mt-4 font-semibold text-yellow-900">
                  — {testimony.text2}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestimonySection;
