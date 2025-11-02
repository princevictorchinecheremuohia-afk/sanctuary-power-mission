import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  const navBarLinks = link || [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Events",
      href: "/events",
    },
    {
      id: 4,
      name: "Testimonies",
      href: "/testimonies",
    },
    {
      id: 5,
      name: "Gallery",
      href: "/gallery",
    },
    {
      id: 6,
      name: "Contact",
      href: "/contact",
    },
  ];
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-[9999] text-white">
      <div className="px-16 border-b-2 border-solid border-gray-900 py-2 md:flex md:justify-between md:items-center bg-black/40 hidden">
        <p className="text-sm md:text-base font-medium">
          <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
          32 Airport Rd, John Lion Company, Umuodukwu, River State.
        </p>
        <div>
          <a href="https://www.facebook.com/profile.php?id=61575700037436">
            <FontAwesomeIcon
              icon={faFacebook}
              className="mx-2 cursor-pointer hover:text-blue-500"
            />
          </a>

          <a href="https://www.tiktok.com/@sanctuarypowermission">
            <FontAwesomeIcon
              icon={faTiktok}
              className="mx-2 cursor-pointer hover:text-black"
            />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanctuarypowermissionchurch@gmail.com&su=Enquiry%20from%20Website&body=Hello%20Sanctuary%20Power%20Mission%20Church%2C%0A%0AI%20would%20like%20to%20make%20an%20inquiry%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              className="mx-2 cursor-pointer hover:text-red-500"
            />
          </a>
        </div>
      </div>

      {/* Navigation Bar or Logo */}
      <div className="px-6 md:px-16 py-4 flex justify-between items-center bg-black/60  md:bg-black/0">
        <h1 className="text-xl font-bold md:text-2xl text-white">
          <img
            src="churchlogo.jpg"
            alt="Church Logo"
            className="inline-block mr-2 w-10 h-10 object-cover rounded-full"
          />
          SPM
        </h1>
        <nav>
          <ul className="hidden md:flex items-center space-x-4">
            {navBarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className="hover:text-red-200 text-sm md:text-sm font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <button className="px-5 py-2 bg-yellow-900 text-white font-medium rounded-4xl hover:bg-yellow-800 transition duration-300 cursor-pointer">
              <Link to="/donate">DONATE</Link>
            </button>
          </ul>
        </nav>

        <button className="md:hidden focus:outline-none" onClick={toggle}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <nav
        className={`md:hidden bg-black/60 backdrop-blur-sm z-30 overflow-hidden transition-all duration-500 ease-in-out pl-6 ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 pb-4">
          {navBarLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="hover:text-red-200 cursor-pointer text-sm md:text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link to="/donate">
            <button className="px-5 py-2 text-left md:text-center bg-yellow-900 text-white font-medium rounded-4xl hover:bg-yellow-800 transition duration-300 cursor-pointer">
              DONATE
            </button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
