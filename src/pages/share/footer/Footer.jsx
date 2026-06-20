import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaGlobe,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Construction & Interior",
      links: [
        { label: "Construction Work", to: "/construction-work" },
        { label: "Building Maintenance", to: "/building-maintenance" },
        { label: "Painting Services", to: "/painting-services" },
        { label: "Electrical Services", to: "/electrical-services" },
        { label: "Plumbing Services", to: "/plumbing-services" },
        { label: "SPC Flooring", to: "/spc-flooring" },
      ],
    },
    {
      title: "Furniture & Curtains",
      links: [
        { label: "Curtains & Blinds", to: "/curtains-blinds" },
        { label: "Home Furniture", to: "/home-furniture" },
        { label: "Office Furniture", to: "/office-furniture" },
        { label: "Custom Sofa", to: "/sofa" },
        { label: "Wardrobes", to: "/wardrobe" },
        { label: "Dining Tables", to: "/dining-table" },
      ],
    },
    {
      title: "Business Services",
      links: [
        { label: "Manpower Supply", to: "/manpower-supply" },
        { label: "Cleaning Services", to: "/hospitality-cleaning" },
        { label: "Events & Exhibitions", to: "/events-exhibitions" },
        { label: "Digital Marketing", to: "/digital-marketing" },
        { label: "Website Development", to: "/website-development" },
      ],
    },
  ];

  const services = [
    "Construction",
    "Furniture",
    "Curtains",
    "Aluminium",
    "Glass Works",
    "Cleaning",
    "Manpower",
    "Events",
  ];

  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#0b1120] text-gray-300 mt-20">

      {/* WhatsApp CTA */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="bg-orange-500 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need Professional Services in Qatar?
          </h2>

          <p className="text-white/90 mb-6">
            Construction, Furniture, Curtains, Aluminium, Cleaning,
            Events, Manpower Supply & More.
          </p>

          <a
            href="https://wa.me/97466280037"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Footer */}
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://8upload.com/image/6857c8c36af7b/Curtain_Logo.jpeg"
                alt="Logo"
                className="w-14 h-14 bg-white rounded-lg p-1"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  AL-FWZ Trading Contracting & Services
                </h3>

                <p className="text-sm text-orange-400">
                  Complete Solutions Across Qatar
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7 text-sm">
              We provide Construction, Maintenance, Furniture,
              Curtains, Aluminium Works, Glass Works, Cleaning
              Services, Event Management, Exhibition Solutions,
              and Skilled Manpower Supply throughout Qatar.
            </p>

            <div className="mt-6 space-y-3 text-sm">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-400" />
                <span>Doha, Qatar</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400" />
                <a href="tel:+97466280037">
                  +974 6628 0037
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                <a href="mailto:info@yourcompany.com">
                  info@yourcompany.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGlobe className="text-orange-400" />
                <span>www.yourwebsite.com</span>
              </div>

            </div>
          </div>

          {/* Desktop Menus */}
          <div className="hidden md:contents">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold text-lg mb-4">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <NavLink
                        to={link.to}
                        className="hover:text-orange-400 transition"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden mt-10 space-y-3">

          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border border-gray-700 rounded-lg"
            >
              <button
                onClick={() =>
                  setOpenSection(
                    openSection === idx ? null : idx
                  )
                }
                className="w-full flex justify-between items-center p-4"
              >
                <span>{section.title}</span>

                {openSection === idx ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {openSection === idx && (
                <div className="px-4 pb-4">
                  {section.links.map((link, i) => (
                    <NavLink
                      key={i}
                      to={link.to}
                      className="block py-2 text-sm text-gray-400 hover:text-orange-400"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="mt-14">

          <h3 className="text-center text-white text-2xl font-bold mb-8">
            Our Services
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1f2937] border border-gray-700 rounded-xl p-5 text-center hover:border-orange-500 hover:-translate-y-1 transition duration-300"
              >
                <span className="font-medium">
                  {service}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Google Map */}
        <div className="mt-14">

          <h3 className="text-white text-2xl font-bold mb-6 text-center">
            Find Us
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-700 shadow-xl">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Doha,Qatar&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-center md:text-left text-sm">
            © {new Date().getFullYear()} AL-FWZ Trading Contracting &
            Services. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-xl">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/97466280037"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;