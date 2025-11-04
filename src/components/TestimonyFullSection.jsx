import React, { useState } from "react";
import TestimonyHero from "./TestimonyHero";
import FooterSection from "./FooterSection";

function TestimonySection() {
  const [showMore, setShowMore] = useState(false);

  // First set of testimonies (initial)
  const initialTestimonies = [
    {
      id: 1,
      text: "Praise the Lord! I want to thank God for His mercy and divine protection over my life. Recently, I narrowly escaped a terrible accident. I was meant to be in that vehicle, but traffic delayed me. Shortly after, I heard that the vehicle had been involved in a fatal crash. Truly, God saved me. Again, I thank God for delivering me from the hands of the EFCC during a raid. I was completely innocent, but I found myself caught in the middle of the situation. I called upon the God of SPM, and He showed up for me. Miraculously, I was released without harm or accusation. I give all glory to God for fighting my battles and keeping me safe. Thank You, Jesus!",
      author: "Daniel Sokari",
    },
    {
      id: 2,
      text: "Praise the Lord! I want to thank God for restoring me financially. During one of our Sunday services in the month of October, Daddy called me out and asked when last I received money. I told him it had been a while, and he prayed for me. Immediately after the service, as I got home, a long-time client of mine from my business sent me a good amount of money! Hallelujah!",
      author: "Kingsley Godwill Chizindu",
    },
    {
      id: 3,
      text: "Praise the Lord! I want to thank God for making it possible for me to travel to the village to see my dad, despite how bad and rough the road was He granted me journey mercies. I also want to thank God because after Daddy’s prayers, I received financial help from someone I least expected. I just want to say, thank You Lord for Your goodness and faithfulness!",
      author: "Wisdom",
    },
  ];

  // Second set of testimonies (show when "View More" is clicked)
  const moreTestimonies = [
    {
      id: 4,
      text: "Praise the Lord Church! My name is Happiness Mbonu. I just want to thank the God of this commission for restoring my sales. During one of our Wednesday services, Daddy declared that customers would locate us. I keyed into that declaration, and right there in church, my phone rang it was one of my old-time customers! It had been a while since I made any sales, but God showed up for me. I’ve come to say, thank You Jesus!",
      author: "Happiness M.",
    },
    {
      id: 5,
      text: "Praise the Lord! I’m here to appreciate God for bringing my son back to life. He suddenly fainted and stopped breathing. My husband and I thought we had lost him. But as we prayed and called on God, He answered us, and our boy regained consciousness! I sincerely thank God because if not for Him, my son wouldn’t be here today. Thank You, Jesus!",
      author: "Mrs. HopeKing",
    },
    {
      id: 6,
      text: "My name is Mrs. Eberechi, and I’m here to thank the God of this commission for granting my beloved daughter safe delivery. Before the birth of my grandchild, I went to several places where I was told that my daughter would lose her life and that the baby in her womb was already dead. I also received many fearful prophecies concerning death over my child’s life but God, through our daddy, turned everything around! Today, both my daughter and grandchild are alive and healthy. I am full of joy and gratitude. To God be all the glory! Hallelujah!",
      author: "Mrs. Eberechi",
    },
    {
      id: 7,
      text: "“Praise the Lord! I just want to thank God for His divine intervention in my life. For the past three months, I had been struggling with debt and didn’t know how I was ever going to clear it. But after attending the WWE program, God showed me mercy and turned my situation around. Just yesterday, He blessed me financially. I was not only able to pay off all my debts, but I even had some money left! I’m truly grateful to God for proving Himself faithful in my life. To Him alone be all the glory!",
      author: "Miss Peace Udoka",
    },
  ];

  const displayedTestimonies = showMore
    ? [...initialTestimonies, ...moreTestimonies]
    : initialTestimonies;

  return (
    <>
      <TestimonyHero />
      <section className="TestimonySection px-3 py-10 md:py-20 bg-yellow-900 md:px-16">
        <p
          className="text-lg md:text-xl text-center text-white font-semibold uppercase"
          data-aos="fade-right"
        >
          Testimonies
        </p>
        <h2
          className="text-2xl md:text-4xl text-center font-bold text-white uppercase mb-10"
          data-aos="fade-right"
        >
          Transformed Lives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonies.map((item) => (
            <div
              key={item.id}
              data-aos="fade-right"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-center"
            >
              <p className="text-gray-800 text-sm md:text-base mb-4">
                {item.text}
              </p>
              <p className="text-right text-sm md:text-base font-semibold text-yellow-900">
                {item.author}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-yellow-900 border border-white text-white font-medium rounded-full hover:bg-yellow-800 transition duration-300"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </section>
      <FooterSection />
    </>
  );
}

export default TestimonySection;
