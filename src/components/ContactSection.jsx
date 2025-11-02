import React from "react";
import ContactHero from "./ContactHero";
import FooterSection from "./FooterSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

function ContactSection() {
  const socialLinks = [
    {
      id: 1,
      icon: faLocationDot,
      title: "Adress:",
      text: "32 Airport Rd, John Lion Company, Umuodukwu, River State.",
    },
    {
      id: 2,
      icon: faPhone,
      title: "Phone:",
      text: "+234 70 3503 2704",
    },
    {
      id: 3,
      icon: faEnvelope,
      title: "Email:",
      text: "sanctuarypowermissionchurch@gmail.com",
    },
    // {
    //   id: 4,
    //   icon: faEarthAmericas,
    //   title: "Website:",
    //   text: "sanctuarypowermission.com",
    // },
  ];

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = React.useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in name, email and message.";
    }
    // simple email check
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) return "Please enter a valid email address.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const err = validate();
    if (err) {
      setStatus({ loading: false, success: null, error: err });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", "84dbee74-581b-4b85-84f4-56601ead862f");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
      formData.append("message", form.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: "Message sent successfully! We'll get back to you soon.",
          error: null,
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: null,
          error: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (e) {
      setStatus({
        loading: false,
        success: null,
        error: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <>
      <ContactHero />
      <section className="mt-10 md:mt-30 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className="sociallinks text-center"
              data-aos="fade-right"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-900 flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="text-3xl text-white"
                />
              </div>
              <h3 className="font-bold text-xl mt-5">{link.title}</h3>
              <p className="mt-2">{link.text}</p>
            </div>
          ))}

          {socialLinks.length < 3 &&
            Array.from({ length: 3 - socialLinks.length }).map((_, i) => (
              <div key={`ph-${i}`} />
            ))}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-16" data-aos="fade-right">
        <div className="bg-yellow-900 p-6 rounded-md mb-10">
          <h1 className="text-white md:text-2xl text-3xl font-semibold">
            Contact Us
          </h1>
          <p className="text-yellow-100 mt-2">
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          {status.error && (
            <div className="mb-4 text-red-600">{status.error}</div>
          )}
          {status.success && (
            <div className="mb-4 text-green-600">{status.success}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-900"
                  placeholder="Your name"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-900"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium">Subject (optional)</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-900"
                placeholder="Subject"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-900"
                placeholder="Write your message..."
              />
            </label>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={status.loading}
                className="bg-yellow-900 text-white px-6 py-2 rounded-md hover:opacity-95 disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default ContactSection;
