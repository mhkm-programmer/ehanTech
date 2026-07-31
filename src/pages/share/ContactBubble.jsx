import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState, useCallback } from "react";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Screen size detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll visibility detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const showTooltip = useCallback((id) => setActiveTooltip(id), []);
  const hideTooltip = useCallback(() => setActiveTooltip(null), []);

  // Reusable button config for clean code
  const buttons = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/97450755702",
      icon: <FaWhatsapp size={isMobile ? 22 : 28} />,
      target: "_blank",
    },
    {
      id: "phone",
      label: "Call Us",
      href: "tel:+97466280037",
      icon: <FaPhoneAlt size={isMobile ? 22 : 28} />,
    },
    {
      id: "email",
      label: "Email Us",
      href: "mailto:info.etcts@gmail.com",
      icon: <FaEnvelope size={isMobile ? 22 : 28} />,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/qatar.interior.maintenance/",
      icon: <FaInstagram size={isMobile ? 22 : 28} />,
      target: "_blank",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/qatar.interior.maintenence/?ref=PROFILE_EDIT_xav_ig_profile_page_web#",
      icon: <FaFacebook size={isMobile ? 22 : 28} />,
      target: "_blank",
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════ */}
      {/*  FLOATING CONTACT BUTTONS                               */}
      {/* ════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-32 right-5 flex flex-col items-center space-y-3 z-50">
        {buttons.map((btn) => (
          <div key={btn.id} className="relative flex items-center justify-center">
            {/* Tooltip */}
            <div
              className={`absolute right-full mr-4 whitespace-nowrap transition-all duration-200 ${
                activeTooltip === btn.id
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible translate-x-2"
              }`}
            >
              <div className="bg-[#0b0c10] border border-gray-800 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded shadow-xl flex items-center gap-2">
                {/* Colored dot matching the icon */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A1538]" />
                {btn.label}
                {/* Tooltip arrow */}
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0b0c10] border-r border-t border-gray-800 rotate-45" />
              </div>
            </div>

            {/* Button */}
            <a
              href={btn.href}
              target={btn.target || "_self"}
              rel={btn.target === "_blank" ? "noopener noreferrer" : undefined}
              onMouseEnter={() => showTooltip(btn.id)}
              onMouseLeave={hideTooltip}
              onFocus={() => showTooltip(btn.id)}
              onBlur={hideTooltip}
              onClick={hideTooltip}
              className="p-4 rounded-full text-white bg-gradient-to-br from-[#8A1538] to-[#5a0e24] hover:from-[#6b102b] hover:to-[#3d0917] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-700/30"
              aria-label={btn.label}
            >
              {btn.icon}
            </a>
          </div>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/*  SCROLL NAVIGATION BUTTONS                              */}
      {/* ════════════════════════════════════════════════════════ */}
      {showScrollTop && (
        <div className="fixed bottom-16 right-5 z-50">
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute right-full mr-4 whitespace-nowrap transition-all duration-200 ${
                activeTooltip === "scrollTop"
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible translate-x-2"
              }`}
            >
              <div className="bg-[#0b0c10] border border-gray-800 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A1538]" />
                Top
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0b0c10] border-r border-t border-gray-800 rotate-45" />
              </div>
            </div>
            <button
              onMouseEnter={() => showTooltip("scrollTop")}
              onMouseLeave={hideTooltip}
              onFocus={() => showTooltip("scrollTop")}
              onBlur={hideTooltip}
              onClick={() => { scrollToTop(); hideTooltip(); }}
              className="bg-[#0b0c10] border border-gray-800 text-gray-400 p-3 rounded-full shadow-lg hover:bg-[#8A1538] hover:text-white hover:border-[#8A1538] hover:-translate-y-1 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={24} />
            </button>
          </div>
        </div>
      )}

      {showScrollBottom && (
        <div className="fixed bottom-5 right-5 z-50">
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute right-full mr-4 whitespace-nowrap transition-all duration-200 ${
                activeTooltip === "scrollBottom"
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible translate-x-2"
              }`}
            >
              <div className="bg-[#0b0c10] border border-gray-800 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A1538]" />
                Bottom
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0b0c10] border-r border-t border-gray-800 rotate-45" />
              </div>
            </div>
            <button
              onMouseEnter={() => showTooltip("scrollBottom")}
              onMouseLeave={hideTooltip}
              onFocus={() => showTooltip("scrollBottom")}
              onBlur={hideTooltip}
              onClick={() => { scrollToBottom(); hideTooltip(); }}
              className="bg-[#0b0c10] border border-gray-800 text-gray-400 p-3 rounded-full shadow-lg hover:bg-[#8A1538] hover:text-white hover:border-[#8A1538] hover:-translate-y-1 transition-all duration-300"
              aria-label="Scroll to bottom"
            >
              <FaArrowDown size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactBubble;
