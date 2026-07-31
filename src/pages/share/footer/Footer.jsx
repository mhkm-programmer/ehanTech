import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaAngleRight,
  FaBuilding,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const corporateDivisions = [
    {
      title: "Engineering & Build",
      links: [
        { label: "Construction & Renovation", to: "/construction-work-qatar" },
        { label: "Building Maintenance", to: "/building-maintenance-qatar" },
        { label: "HVAC & AC Services", to: "/hvac-services-qatar" },
        { label: "Plumbing & Electrical", to: "/electrical-services-qatar" },
        { label: "Aluminium Doors & Windows", to: "/aluminium-doors-qatar" },
        { label: "Steel & Automatic Gates", to: "/automatic-gates-qatar" },
      ],
    },
    {
      title: "Interior & Fit-outs",
      links: [
        { label: "Gypsum & False Ceilings", to: "/gypsum-ceiling-qatar" },
        { label: "SPC, Vinyl & Parquet Flooring", to: "/spc-flooring-qatar" },
        { label: "Glass Partitions & Doors", to: "/glass-partitions-qatar" },
        { label: "Premium Curtains & Blinds", to: "/curtains-blinds-qatar" },
        { label: "Custom Home Furniture", to: "/home-furniture-qatar" },
        { label: "Office & Corporate Furniture", to: "/office-furniture-qatar" },
      ],
    },
    {
      title: "Outdoor & Events",
      links: [
        { label: "Majlis & Warehouse Tents", to: "/majlis-tents-qatar" },
        { label: "Pergolas & Parking Shades", to: "/pergola-works-qatar" },
        { label: "Exhibition Booth Design", to: "/exhibition-booth-design-qatar" },
        { label: "Kiosk & Stall Fabrication", to: "/kiosk-fabrication-qatar" },
        { label: "Stage Setup & Weddings", to: "/wedding-decoration-qatar" },
        { label: "Outdoor Seating", to: "/outdoor-seating-qatar" },
      ],
    },
    {
      title: "Business Solutions",
      links: [
        { label: "Skilled Manpower Supply", to: "/skilled-workers-qatar" },
        { label: "General Labor Supply", to: "/general-labor-supply-qatar" },
        { label: "Corporate Office Cleaning", to: "/office-cleaning-qatar" },
        { label: "Deep & Villa Cleaning", to: "/deep-cleaning-qatar" },
        { label: "Enterprise Web Development", to: "/website-development-qatar" },
        { label: "Digital Marketing & SEO", to: "/digital-marketing-qatar" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0b0c10] text-gray-400 mt-20 font-sans border-t-[8px] border-[#8A1538]">

      {/* MAIN MEGA FOOTER */}
      <div className="max-w-[1500px] mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-gray-800/80 pb-16">

          {/* COLUMN 1: CORPORATE IDENTITY */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded flex items-center justify-center shadow-lg border border-gray-700">
                <FaBuilding className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-wide uppercase">
                  EHAN TECH
                </h3>
                <p className="text-[#fbe29f] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  Construction & Trading Services
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm font-medium mb-8">
              A premier enterprise in Qatar delivering world-class Engineering, Civil Construction,
              Fit-outs, General Trading, and Business Support Services. We build the future with
              precision, quality, and unyielding dedication.
            </p>

            <div className="space-y-5 text-sm font-semibold text-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center shrink-0 border border-gray-800">
                  <FaMapMarkerAlt className="text-[#8A1538]" />
                </div>
                <span className="pt-1.5 leading-snug hover:text-white transition-colors cursor-default">
                  Building 30, Street 850<br />
                  Zone 26, Al Mansoura<br />
                  Doha, State of Qatar
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center shrink-0 border border-gray-800">
                  <FaPhoneAlt className="text-[#8A1538]" />
                </div>
                <a href="tel:+97450755702" className="hover:text-[#fbe29f] transition-colors pt-1">
                  +974 5075 5702
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center shrink-0 border border-gray-800">
                  <FaEnvelope className="text-[#8A1538]" />
                </div>
                <a href="mailto:info.etcts@gmail.com" className="hover:text-[#fbe29f] transition-colors pt-1">
                  info.etcts@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP MEGA MENUS */}
          <div className="hidden lg:grid grid-cols-4 col-span-8 gap-6">
            {corporateDivisions.map((division, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold text-[13px] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8A1538] rounded-sm"></span>
                  {division.title}
                </h4>
                <ul className="space-y-4">
                  {division.links.map((link, i) => (
                    <li key={i} className="group">
                      <NavLink
                        to={link.to}
                        onClick={scrollToTop}
                        className="text-[13px] font-medium text-gray-500 hover:text-white flex items-center gap-2 transition-all duration-300"
                      >
                        <FaAngleRight className="text-gray-700 group-hover:text-[#8A1538] transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MOBILE ACCORDION MENUS */}
          <div className="lg:hidden col-span-1 space-y-3 mt-4">
            {corporateDivisions.map((division, idx) => (
              <div key={idx} className="border border-gray-800 rounded bg-[#111317]">
                <button
                  onClick={() => setOpenSection(openSection === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-[13px] uppercase tracking-wider">
                    {division.title}
                  </span>
                  {openSection === idx ? (
                    <FaChevronUp className="text-[#8A1538]" />
                  ) : (
                    <FaChevronDown className="text-gray-600" />
                  )}
                </button>
                {openSection === idx && (
                  <div className="px-5 pb-5 bg-[#0b0c10] pt-2 border-t border-gray-800">
                    {division.links.map((link, i) => (
                      <NavLink
                        key={i}
                        to={link.to}
                        onClick={scrollToTop}
                        className="block py-3 text-sm text-gray-400 hover:text-[#fbe29f] border-b border-gray-800/50 last:border-0 flex items-center gap-2"
                      >
                        <FaAngleRight className="text-[#8A1538] text-[10px]" /> {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* MAP & SOCIAL STRIP */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[13px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#8A1538] rounded-sm"></span> Corporate Headquarters Map
            </h4>
            <div className="h-32 w-full rounded border border-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100">
              <iframe
                title="Ehan Tech Map"
                src="https://www.google.com/maps?q=Al+Mansoura,+Street+850,+Zone+26,+Doha,+Qatar&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col lg:items-end">
            <h4 className="text-white font-bold text-[13px] uppercase tracking-widest mb-4 flex items-center gap-2">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="bg-[#050608] border-t border-gray-900">
        <div className="max-w-[1500px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-wide text-gray-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} EHAN TECH CONSTRUCTION AND TRADING SERVICES W.L.L. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 uppercase">
            <NavLink to="/about-us" onClick={scrollToTop} className="hover:text-white transition-colors">
              About Us
            </NavLink>
            <NavLink to="/gallery" onClick={scrollToTop} className="hover:text-white transition-colors">
              Gallery
            </NavLink>
            <NavLink to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">
              Contact
            </NavLink>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
