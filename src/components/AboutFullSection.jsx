import React, { useState } from "react";
import AboutHero from "./AboutHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faHandsPraying,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import FooterSection from "./FooterSection";

function AboutFullSection() {
  // Separate states for each "Read More" section
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreOverseer, setShowMoreOverseer] = useState(false);

  const features = [
    {
      id: 1,
      icon: faChurch,
      title: "Our Mission",
      description:
        "Our mission is to reach the world with the love and power of Jesus Christ, transforming lives through the teaching of God’s Word, fervent prayer, and compassionate service. We are committed to raising a generation of believers who walk in holiness, purpose, and power. To spread love and kindness through community service.",
    },
    {
      id: 2,
      icon: faHandsPraying,
      title: "Prayer Groups",
      description:
        "Our Prayer Group is the heartbeat of Sanctuary Power Mission. A place where intercessors rise daily to stand in the gap for the church, our nation, and the world. We believe that prayer changes things, revives hearts, and releases divine power. Join our prayer groups to connect with others and grow spiritually.",
    },
    {
      id: 3,
      icon: faHeart,
      title: "Charity Work",
      description:
        "Our charity ministry is a channel of God’s mercy to the world. We believe that ministry goes beyond the pulpit. It’s about touching lives, restoring hope, and being the hands and feet of Jesus. Every act of kindness is a seed of transformation, planted to heal hearts and rebuild lives through the power of love. Participate in our charity events to help those in need.",
    },
  ];

  const aboutGeneralOverseer = [
    {
      id: 1,
      aboutHeader: "About Our General Overseer",
      imageURL: "./aboutimage.jpeg",
      text: "Our General Overseer, Rev'd Timothy Thompson, is a devoted servant of God with a burning passion to see lives transformed through the power of the Holy Spirit. Called by God to raise a people of purpose, purity, and power, he has faithfully dedicated his life to the ministry of the Gospel, teaching sound doctrine and demonstrating the love of Christ to all.",
    },
  ];

  const secondParagraph = [
    {
      id: 2,
      text: "Under his visionary leadership, Sanctuary Power Mission Church has continued to grow in grace. His commitment to prayer, the Word, and soul-winning has inspired many to walk closer with God and fulfill their divine destinies.",
    },
  ];

  const thirdParagraph = [
    {
      id: 3,
      text: "Through his ministry, countless souls have encountered the transforming power of God. His life remains a testament to humility, excellence, and unwavering faith in God’s promises.",
    },
  ];

  return (
    <>
      <AboutHero />
      <section className="AboutSection px-3 py-10 md:py-20 md:px-16 bg-gray-100">
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature" data-aos="fade-right">
              <FontAwesomeIcon icon={feature.icon} className="text-4xl" />
              <h3 className="text-xl font-semibold uppercase text-yellow-900 mt-4">
                {feature.title}
              </h3>
              <p className="pt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="HomePageSection px-3 py-10 md:py-20 md:px-16 bg-gray-100">
        <div
          className="feature2 grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-right"
        >
          <img
            src="/churchlogo.jpg"
            alt="Our Vision"
            className="w-full h-auto rounded-lg"
          />

          <div>
            <p className="text-lg md:text-xl font-semibold text-yellow-900 mt-4">
              Welcome to Sanctuary Power Mission
            </p>
            <h3 className="pt-3 text-2xl md:text-4xl font-bold uppercase">
              connect, grow and serve with us
            </h3>
            <p className="pt-3">
              At Sanctuary Power Mission, we believe that no one is meant to
              walk alone. We're a family of faith where you can connect with God
              and with others who share your journey. Growth happens when we
              stay rooted in God's Word and surrounded by His people.
            </p>

            {showMoreMission && (
              <p className="text-gray-700 leading-relaxed mt-3 transition-all duration-500 ease-in-out">
                Here, you'll have opportunities to grow spiritually through
                Bible studies, mentorship, and prayer sessions that strengthen
                your faith and deepen your relationship with Christ. God has
                placed unique gifts in every one of us. At Sanctuary Power
                Mission, we encourage you to use your talents to serve others.
                In the church, the community, and beyond. Whether through
                outreach, music, or helping hands, serving is our act of love
                and worship to God.
              </p>
            )}

            <button
              onClick={() => setShowMoreMission(!showMoreMission)}
              className="mt-4 px-5 py-2 bg-yellow-900 text-white font-medium rounded-4xl hover:bg-yellow-800 transition duration-300"
            >
              {showMoreMission ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-16 md:pt-20 bg-gray-100">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-right"
        >
          <div>
            {aboutGeneralOverseer.map((about) => (
              <React.Fragment key={about.id}>
                <h3 className="pt-3 text-2xl md:text-4xl font-bold uppercase">
                  {about.aboutHeader}
                </h3>
                <p className="pt-3">{about.text}</p>
              </React.Fragment>
            ))}

            {showMoreOverseer &&
              secondParagraph.map((p) => (
                <p key={p.id} className="pt-3">
                  {p.text}
                </p>
              ))}

            {showMoreOverseer &&
              thirdParagraph.map((p) => (
                <p key={p.id} className="pt-3">
                  {p.text}
                </p>
              ))}

            <button
              onClick={() => setShowMoreOverseer(!showMoreOverseer)}
              className="mt-4 px-5 py-2 bg-yellow-900 text-white font-medium rounded-4xl hover:bg-yellow-800 transition duration-300"
            >
              {showMoreOverseer ? "Read Less" : "Read More"}
            </button>
          </div>

          {aboutGeneralOverseer.map((about) => (
            <img
              key={about.id}
              src={about.imageURL}
              alt={about.aboutHeader}
              className="w-full h-auto rounded-lg mb-10 px:mb-20"
            />
          ))}
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default AboutFullSection;
