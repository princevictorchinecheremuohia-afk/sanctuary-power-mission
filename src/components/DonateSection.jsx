import React from "react";
import DonateHero from "./DonateHero";
import FooterSection from "./FooterSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

function DonateSection() {
  return (
    <>
      <DonateHero />
      <section className="bg-yellow-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-right">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-yellow-800 text-white rounded-full flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="text-3xl" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-yellow-900 mb-4">
            Support God’s Work
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Your giving helps us reach more souls, support community outreach,
            and sustain the work of God in Sanctuary Power Mission. Every seed
            you sow makes an eternal impact.
          </p>

          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-yellow-900 mb-3">
              Church Bank Details
            </h3>
            <p className="text-gray-800">
              <strong>Account Name:</strong> Sanctuary Power Mission Acct 1
              <br />
              <strong>Bank:</strong> United Bank For Africa (UBA)
              <br />
              <strong>Account Number:</strong> 1027702579
            </p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanctuarypowermissionchurch@gmail.com&su=Donation%20Support&body=God%20bless%20you%20for%20supporting%20the%20work%20of%20God%20at%20Sanctuary%20Power%20Mission."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-800 text-white py-3 px-8 rounded-full font-semibold hover:bg-yellow-900 transition duration-300"
          >
            Give Now
          </a>

          <p className="text-gray-600 mt-8 italic">
            “Give, and it shall be given unto you...” — Luke 6:38
          </p>

          <p className="text-gray-700 mt-4">
            For donation enquiries, contact us at <br />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sanctuarypowermissionchurch@gmail.com&su=Donation%20Support&body=God%20bless%20you%20for%20supporting%20the%20work%20of%20God%20at%20Sanctuary%20Power%20Mission."
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-800 font-medium underline"
            >
              sanctuarypowermissionchurch@gmail.com
            </a>{" "}
            or call <strong>+234 703 503 2704</strong>.
          </p>
        </div>
      </section>
      <FooterSection />
    </>
  );
}

export default DonateSection;
