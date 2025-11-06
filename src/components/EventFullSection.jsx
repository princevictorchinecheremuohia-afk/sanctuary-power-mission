import React from "react";
import EventHero from "./EventHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faNoteSticky,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import FooterSection from "./FooterSection";

function Event() {
  const events = [
    {
      id: 1,
      ImageUrl: "./image-one.jpeg",
      title: "Image one",
      icon1: faCalendarDays,
      date: "Sundays, 8:45am - 12:30pm",
      actIcon: faClipboardList,
      activity: "Sunday of Divine Encounter",
      icon2: faLocationDot,
      location: "Church Auditorium",
      icon3: faNoteSticky,
      description:
        "Join us every Sunday for a life-transforming encounter in God’s presence. Experience heartfelt worship, inspiring word, and the tangible presence of the Holy Spirit.",
    },

    {
      id: 2,
      ImageUrl: "./image-two.jpeg",
      title: "Image two",
      icon1: faCalendarDays,
      date: "Mondays, 9:00am - 12:00pm",
      icon2: faLocationDot,
      actIcon: faClipboardList,
      activity: "Counselling",
      location: "Church Auditorium",
      icon3: faNoteSticky,
      description:
        "Come see our Man of God on Mondays. Through Spirit-led counselling, lives are guided, hearts are healed, and destinies are redirected in God’s purpose.",
    },

    {
      id: 3,
      ImageUrl: "./image-three.jpeg",
      title: "Image three",
      icon1: faCalendarDays,
      date: "Wednesdays, 9:00am - 2:00pm",
      actIcon: faClipboardList,
      activity: "Prophetic & Deliverance Service",
      icon2: faLocationDot,
      location: "Church Auditorium",
      icon3: faNoteSticky,
      description:
        "Wednesday Prophetic Service, a moment of divine encounter — where God’s power meets His people through prophecy, prayer, and revelation.",
    },

    {
      id: 4,
      ImageUrl: "./image-four.jpeg",
      title: "Image four",
      icon1: faCalendarDays,
      date: "Fridays, 5:30pm - 7:00pm",
      actIcon: faClipboardList,
      activity: "Bible Study",
      icon2: faLocationDot,
      location: "Church Auditorium",
      icon3: faNoteSticky,
      description:
        "Join us on our Friday Bible Study service. A time to sit at the feet of Jesus and be nourished by His Word.",
    },
  ];
  return (
    <>
      <EventHero />
      <section className="EventSection px-3 py-10 md:py-20 md:px-16 bg-gray-100">
        {/* <p
          className="text-lg md:text-xl text-center font-semibold uppercase pt-10"
          data-aos="fade-right"
        >
          Events
        </p>
        <h2
          className="text-2xl md:text-4xl text-center font-bold uppercase mb-10"
          data-aos="fade-right"
        >
          Regular Events
        </h2> */}

        <div
          data-aos="fade-right"
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {events.map((event) => (
            <div
              key={event.id}
              data-aos="fade-right"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={event.ImageUrl}
                alt={event.title}
                className="w-full h-100 object-cover rounded-md mb-4 transition-transform duration-500 ease-in-out hover:scale-102 cursor-pointer"
              />
              <div>
                {/* <h3 className="text-lg font-semibold mb-2">{event.title}</h3> */}
                <div className="flex mb-2">
                  <FontAwesomeIcon icon={event.icon1} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex mb-2">
                  <FontAwesomeIcon icon={event.actIcon} className="mr-2" />
                  <span>{event.activity}</span>
                </div>
                <div className="flex mb-2">
                  <FontAwesomeIcon icon={event.icon2} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex mb-2">
                  <FontAwesomeIcon icon={event.icon3} className="mr-2" />
                  <span>{event.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </>
  );
}
export default Event;
