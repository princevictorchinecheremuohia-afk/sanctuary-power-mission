import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

function FooterSection() {
  const footerLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Events", href: "/events" },
    { id: 4, name: "Testimonies", href: "/testimonies" },
    { id: 5, name: "Gallery", href: "/gallery" },
    { id: 6, name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: faFacebook,
      hoverColor: "text-blue-500",
      link: "https://www.facebook.com/profile.php?id=61575700037436",
    },
    {
      id: 2,
      icon: faTiktok,
      hoverColor: "text-white",
      link: "https://www.tiktok.com/@sanctuarypowermission",
    },
  ];

  const gmail = [
    {
      id: 3,
      icon: faEnvelope,
      hoverColor: "text-red-700",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sanctuarypowermissionchurch@gmail.com&su=Enquiry%20from%20Website&body=Hello%20Sanctuary%20Power%20Mission%20Church%2C%0A%0AI%20would%20like%20to%20make%20an%20inquiry%20regarding...",
    },
  ];

  return (
    <footer className="FooterSection bg-black text-white py-10 md:px-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 md:place-items-center px-1.5 gap-8 mb-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-4">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
            32 Airport Rd, John Lion Company, Umuodukwu, River State.
          </p>
          <p className="mb-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-1 break-words max-w-2xl"
            />
            Email: sanctuarypowermissionchurch@gmail.com
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            Phone: +234 70 3503 2704
          </p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="list-inside mb-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-white hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center">
            {socialLinks.map((link) => (
              <a href={link.link}>
                <FontAwesomeIcon
                  key={link.id}
                  icon={link.icon}
                  className={`mx-2 cursor-pointer ${link.hoverColor}`}
                />
              </a>
            ))}

            {gmail.map((link) => (
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  key={link.id}
                  icon={link.icon}
                  className={`mx-2 cursor-pionter ${link.hoverColor}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Sanctuary Power Mission. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
