import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState, useEffect } from "react";
import {
  FaTimes, FaSearch, FaBars, FaChevronDown, FaChevronRight,
  FaPhoneAlt, FaEnvelope, FaClock, FaLinkedinIn, FaFacebookF,
  FaInstagram, FaWhatsapp, FaBuilding, FaHome, FaImages,
  FaInfoCircle, FaPhone, FaGlobe
} from "react-icons/fa";

const menuItems = [
  { label: "Home", to: "/" },
  {
    label: "Construction & Maintenance",
    to: "/construction-maintenance-qatar",
    submenu: [
      {
        label: "Construction & Renovation",
        to: "#",
        submenu: [
          { label: "Construction Work", to: "/construction-work-qatar" },
          { label: "Villa Renovation", to: "/villa-renovation-qatar" },
          { label: "Office Renovation", to: "/office-renovation-qatar" },
          { label: "Tile & Marble Works", to: "/tile-marble-works-qatar" },
          { label: "Waterproofing", to: "/waterproofing-qatar" },
        ],
      },
      {
        label: "Maintenance & Repairs",
        to: "#",
        submenu: [
          { label: "Building Maintenance", to: "/building-maintenance-qatar" },
          { label: "Painting Services", to: "/painting-services-qatar" },
          { label: "Plumbing Services", to: "/plumbing-services-qatar" },
          { label: "Electrical Services", to: "/electrical-services-qatar" },
          { label: "Handyman Services", to: "/handyman-services-qatar" },
        ],
      },
      {
        label: "Cooling & AC",
        to: "#",
        submenu: [
          { label: "AC Maintenance", to: "/ac-maintenance-qatar" },
          { label: "HVAC Services", to: "/hvac-services-qatar" },
        ],
      },
    ],
  },
  {
    label: "Aluminium, Glass & Metal Works",
    to: "/aluminium-glass-metal-works-qatar",
    submenu: [
      {
        label: "Aluminium & Glass",
        to: "#",
        submenu: [
          { label: "Aluminium Doors", to: "/aluminium-doors-qatar" },
          { label: "Aluminium Windows", to: "/aluminium-windows-qatar" },
          { label: "Glass Partitions", to: "/glass-partitions-qatar" },
          { label: "Glass Doors", to: "/glass-doors-qatar" },
          { label: "Shower Glass", to: "/shower-glass-qatar" },
          { label: "Mirror Works", to: "/mirror-installation-qatar" },
        ],
      },
      {
        label: "Metal Works & Gates",
        to: "#",
        submenu: [
          { label: "Steel Gates", to: "/steel-gates-qatar" },
          { label: "Sliding Gates", to: "/sliding-gates-qatar" },
          { label: "Automatic Gates", to: "/automatic-gates-qatar" },
          { label: "Stair Railings", to: "/stair-railings-qatar" },
          { label: "Balustrades", to: "/balustrades-qatar" },
        ],
      },
      {
        label: "Outdoor Structures",
        to: "#",
        submenu: [
          { label: "Pergola Works", to: "/pergola-works-qatar" },
          { label: "Car Parking Shades", to: "/car-parking-shades-qatar" },
        ],
      },
    ],
  },
  {
    label: "Tents & Outdoor Works",
    to: "/tents-outdoor-works-qatar",
    submenu: [
      {
        label: "Tents & Canopies",
        to: "#",
        submenu: [
          { label: "Tent Making & Installation", to: "/tent-making-installation-qatar" },
          { label: "Majlis Tents", to: "/majlis-tents-qatar" },
          { label: "Event Tents", to: "/event-tents-qatar" },
          { label: "Warehouse Tents", to: "/warehouse-tents-qatar" },
        ],
      },
      {
        label: "Outdoor Additions",
        to: "#",
        submenu: [
          { label: "Parking Shades", to: "/parking-shades-qatar" },
          { label: "Pergola Installation", to: "/pergola-installation-qatar" },
          { label: "Outdoor Seating", to: "/outdoor-seating-qatar" },
        ],
      },
    ],
  },
  {
    label: "Flooring & Interior",
    to: "/flooring-interior-qatar",
    submenu: [
      {
        label: "Flooring Solutions",
        to: "#",
        submenu: [
          { label: "SPC Flooring", to: "/spc-flooring-qatar" },
          { label: "Vinyl Flooring", to: "/vinyl-flooring-qatar" },
          { label: "Parquet Flooring", to: "/parquet-flooring-qatar" },
          { label: "Carpet Installation", to: "/carpet-installation-qatar" },
        ],
      },
      {
        label: "Walls & Ceilings",
        to: "#",
        submenu: [
          { label: "Wallpaper Installation", to: "/wallpaper-installation-qatar" },
          { label: "Gypsum Ceiling", to: "/gypsum-ceiling-qatar" },
          { label: "Gypsum Partition", to: "/gypsum-partition-qatar" },
          { label: "False Ceiling", to: "/false-ceiling-qatar" },
          { label: "Wall Panels", to: "/wall-panels-qatar" },
        ],
      },
    ],
  },
  {
    label: "Curtains & Blinds",
    to: "/curtains-blinds-qatar",
    submenu: [
      {
        label: "Premium Curtains",
        to: "#",
        submenu: [
          { label: "Blackout Curtains", to: "/blackout-curtains-qatar" },
          { label: "Bedroom Curtains", to: "/bedroom-curtains-qatar" },
          { label: "Living Room Curtains", to: "/living-room-curtains-qatar" },
          { label: "Office Curtains", to: "/office-curtains-qatar" },
          { label: "Hotel Curtains", to: "/hotel-curtains-qatar" },
          { label: "Wave Curtains", to: "/wave-curtains-qatar" },
        ],
      },
      {
        label: "Window Blinds",
        to: "#",
        submenu: [
          { label: "Roller Blinds", to: "/roller-blinds-qatar" },
          { label: "Vertical Blinds", to: "/vertical-blinds-qatar" },
          { label: "Venetian Blinds", to: "/venetian-blinds-qatar" },
        ],
      },
    ],
  },
  {
    label: "Furniture",
    to: "/furniture-qatar",
    submenu: [
      {
        label: "Home & Custom Furniture",
        to: "#",
        submenu: [
          { label: "Home Furniture", to: "/home-furniture-qatar" },
          { label: "Sofa Sets", to: "/sofa-sets-qatar" },
          { label: "Custom Beds", to: "/custom-beds-qatar" },
          { label: "Wardrobes & Cabinets", to: "/wardrobes-cabinets-qatar" },
        ],
      },
      {
        label: "Office Furniture",
        to: "#",
        submenu: [
          { label: "Office Furniture", to: "/office-furniture-qatar" },
          { label: "Office Tables", to: "/office-tables-qatar" },
          { label: "Office Chairs", to: "/office-chairs-qatar" },
        ],
      },
    ],
  },
  {
    label: "Hospitality & Cleaning",
    to: "/hospitality-cleaning-qatar",
    submenu: [
      {
        label: "Cleaning Services",
        to: "#",
        submenu: [
          { label: "Housekeeping Services", to: "/housekeeping-services-qatar" },
          { label: "Office Cleaning", to: "/office-cleaning-qatar" },
          { label: "Deep Cleaning", to: "/deep-cleaning-qatar" },
          { label: "Villa Cleaning", to: "/villa-cleaning-qatar" },
        ],
      },
    ],
  },
  {
    label: "Manpower Supply",
    to: "/manpower-supply-qatar",
    submenu: [
      {
        label: "Labor & Skilled Workers",
        to: "#",
        submenu: [
          { label: "General Labor Supply", to: "/general-labor-supply-qatar" },
          { label: "Skilled Workers", to: "/skilled-workers-qatar" },
          { label: "Carpenters", to: "/carpenters-qatar" },
          { label: "Electricians", to: "/electricians-qatar" },
          { label: "Plumbers", to: "/plumbers-qatar" },
          { label: "Painters", to: "/painters-qatar" },
        ],
      },
    ],
  },
  {
    label: "Events & Exhibitions",
    to: "/events-exhibitions-qatar",
    submenu: [
      {
        label: "Exhibitions & Kiosks",
        to: "#",
        submenu: [
          { label: "Exhibition Booth Design", to: "/exhibition-booth-design-qatar" },
          { label: "Exhibition Stall Fabrication", to: "/exhibition-stall-fabrication-qatar" },
          { label: "Kiosk Fabrication", to: "/kiosk-fabrication-qatar" },
        ],
      },
      {
        label: "Events & Stages",
        to: "#",
        submenu: [
          { label: "Wedding Decoration", to: "/wedding-decoration-qatar" },
          { label: "Stage Setup", to: "/stage-setup-qatar" },
        ],
      },
    ],
  },
  {
    label: "Digital Services",
    to: "/digital-services-qatar",
    submenu: [
      {
        label: "Web & Marketing",
        to: "#",
        submenu: [
          { label: "Website Development", to: "/website-development-qatar" },
          { label: "Digital Marketing", to: "/digital-marketing-qatar" },
          { label: "SEO Services", to: "/seo-services-qatar" },
          { label: "Online Ads Services", to: "/online-ads-services-qatar" },
        ],
      },
    ],
  },

  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact" },
];

const HeaderCurtainsFurniture = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  const toggleMobileMenu = (key) => {
    setOpenMobileMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const matches = Array.from(document.querySelectorAll("h1, h2, h3, p, a")).filter(
      (el) => el.textContent?.toLowerCase().includes(query)
    );

    if (matches.length) {
      matches.forEach((el, i) => {
        el.id = `search-res-${i}`;
        el.style.backgroundColor = "#fbe29f";
        el.style.color = "#8A1538";
        el.style.transition = "all 0.5s ease";
        setTimeout(() => {
          el.style.backgroundColor = "transparent";
          el.style.color = "";
        }, 3000);
      });

      setSearchResults(
        matches.map((el, i) => ({
          text: el.textContent.substring(0, 50) + "...",
          id: `search-res-${i}`,
        }))
      );
    } else {
      alert("No results found on this page.");
    }
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-900 shadow-xl">
      {/* ══════════════════════════════════════════════════════════ */}
      {/*  1. EXECUTIVE TOP BAR (Desktop Only)                      */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block bg-[#0b0c10] text-gray-400 border-b border-gray-800 text-[11px] font-semibold tracking-wider uppercase">
        <div className="max-w-[1500px] mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+97450755702" className="flex items-center gap-2 hover:text-[#fbe29f] transition-colors">
              <FaPhoneAlt className="text-[#8A1538]" /> +974 5075 5702
            </a>
            <a href="mailto:info.etcts@gmail.com" className="flex items-center gap-2 hover:text-[#fbe29f] transition-colors">
              <FaEnvelope className="text-[#8A1538]" /> info.etcts@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <FaClock className="text-[#8A1538]" /> Sat - Thu: 8:00 AM - 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 mr-2">Connect:</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedinIn size={14} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaFacebookF size={14} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaInstagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  2. BRAND & ACTION BAR                                    */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-white">
        <div className={`max-w-[1500px] mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
          <NavLink to="/" onClick={scrollToTop} className="flex items-center gap-3 shrink-0 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow border border-gray-100">
              <FaBuilding className="text-white text-xl md:text-2xl" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-none uppercase">
                Ehan Tech
              </h1>
              <p className="text-[#8A1538] text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">
                Trading & Contracting
              </p>
            </div>
          </NavLink>

          <div className="hidden xl:flex flex-col items-center justify-center flex-1 px-8 text-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Delivering Excellence</span>
            <div className="text-sm font-bold text-[#8A1538]">
              <Typed
                strings={[
                  "Civil Engineering & General Contracting",
                  "Premium Interior Fit-outs & Furnishing",
                  "Facility Management & Manpower Supply",
                  "Comprehensive Digital & Event Solutions",
                ]}
                typeSpeed={40}
                backSpeed={20}
                loop
              />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6 w-full lg:w-auto justify-end">
            <div className="hidden md:flex relative w-64 lg:w-80 group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search divisions..."
                className="w-full pl-4 pr-12 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#8A1538] focus:ring-2 focus:ring-[#8A1538]/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500">
                  <FaTimes size={12} />
                </button>
              )}
              <button
                onClick={handleSearch}
                className="absolute right-1 top-1 bottom-1 w-10 bg-[#8A1538] hover:bg-[#6b102b] transition-colors rounded-full text-white flex items-center justify-center shadow-md"
              >
                <FaSearch size={14} />
              </button>
            </div>

            <a
              href="https://wa.me/97450755702"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-[#8A1538] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-[#25D366] text-lg" /> Get Quote
            </a>

            <button
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 text-[#8A1538] border border-gray-200 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  3. DESKTOP NAVIGATION                                    */}
      {/* ══════════════════════════════════════════════════════════ */}
      <nav className="hidden lg:flex justify-center items-center bg-[#8A1538] border-t border-[#6b102b]">
        <div className="flex flex-wrap justify-center max-w-[1500px] mx-auto text-[13px] xl:text-[14px] font-semibold tracking-wide">
          {menuItems.map((item, i) => (
            <div key={i} className="group/level1 relative">
              <NavLink
                to={item.to}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 xl:px-4 py-3.5 transition-colors duration-200 ${
                    isActive
                      ? "text-[#fbe29f] bg-[#6b102b]"
                      : "text-white hover:text-[#fbe29f] hover:bg-[#6b102b]"
                  }`
                }
              >
                {item.label}
                {item.submenu && <FaChevronDown className="text-[10px] opacity-80" />}
              </NavLink>

              {item.submenu && (
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover/level1:opacity-100 group-hover/level1:visible transition-all duration-300 z-50">
                  <div className="bg-white min-w-[260px] shadow-2xl border-t-[3px] border-[#8A1538]">
                    {item.submenu.map((sub, j) => (
                      <div key={j} className="group/level2 relative">
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 text-gray-800 cursor-default hover:bg-gray-50 hover:text-[#8A1538] transition-colors font-semibold">
                          {sub.label}
                          {sub.submenu && <FaChevronRight className="text-[10px] text-[#8A1538]" />}
                        </div>

                        {sub.submenu && (
                          <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/level2:opacity-100 group-hover/level2:visible transition-all duration-300 z-50">
                            <div className="bg-white min-w-[260px] shadow-2xl border-l-[3px] border-[#8A1538]">
                              {sub.submenu.map((child, k) => (
                                <NavLink
                                  key={k}
                                  to={child.to}
                                  onClick={scrollToTop}
                                  className="block px-6 py-3 border-b border-gray-100 text-gray-700 hover:bg-[#8A1538] hover:text-white transition-colors font-medium whitespace-nowrap"
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  4. MOBILE NAVIGATION — CORPORATE REDESIGN                */}
      {/* ══════════════════════════════════════════════════════════ */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto shadow-2xl">

          {/* Mobile Search + Contact Strip */}
          <div className="bg-[#fafafa] border-b border-gray-200">
            <div className="p-4 flex relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-4 pr-12 py-3 text-gray-900 border border-gray-200 rounded-lg focus:border-[#8A1538] focus:outline-none text-sm bg-white"
              />
              <button onClick={handleSearch} className="absolute right-7 top-1/2 -translate-y-1/2 text-[#8A1538] hover:text-[#6b102b]">
                <FaSearch size={16} />
              </button>
            </div>
            {/* Quick contact strip */}
            <div className="flex items-center justify-around px-4 pb-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
              <a href="tel:+97450755702" className="flex items-center gap-1.5 hover:text-[#8A1538] transition-colors">
                <FaPhoneAlt size={10} className="text-[#8A1538]" /> Call
              </a>
              <a href="mailto:info.etcts@gmail.com" className="flex items-center gap-1.5 hover:text-[#8A1538] transition-colors">
                <FaEnvelope size={10} className="text-[#8A1538]" /> Email
              </a>
              <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#8A1538] transition-colors">
                <FaWhatsapp size={10} className="text-green-500" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation Accordion */}
          <div className="flex flex-col">
            {menuItems.map((item, i) => (
              <div key={i} className="border-b border-gray-100">
                {/* Level 1 Row */}
                <div className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                  {item.submenu ? (
                    <button
                      onClick={() => toggleMobileMenu(`menu-${i}`)}
                      className={`flex-1 text-left bg-transparent border-none cursor-pointer focus:outline-none font-bold text-sm tracking-wide ${
                        openMobileMenus[`menu-${i}`] ? "text-[#8A1538]" : "text-gray-800"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-[#8A1538] rounded-full" />
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={() => {
                        scrollToTop();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex-1 text-gray-800 font-bold text-sm tracking-wide"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        {item.label}
                      </span>
                    </NavLink>
                  )}
                  {item.submenu && (
                    <button
                      onClick={() => toggleMobileMenu(`menu-${i}`)}
                      className="p-2 -mr-2 text-gray-400 hover:text-[#8A1538] transition-colors focus:outline-none"
                    >
                      {openMobileMenus[`menu-${i}`] ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                    </button>
                  )}
                </div>

                {/* Level 2 Submenu */}
                {item.submenu && openMobileMenus[`menu-${i}`] && (
                  <div className="bg-gray-50 border-t border-gray-100 animate-fadeIn">
                    {item.submenu.map((sub, j) => (
                      <div key={j}>
                        <div className="flex items-center justify-between pl-10 pr-5 py-3 border-b border-gray-100/80">
                          {sub.submenu ? (
                            <button
                              onClick={() => toggleMobileMenu(`sub-${i}-${j}`)}
                              className={`flex-1 text-left bg-transparent border-none cursor-pointer focus:outline-none text-xs font-bold uppercase tracking-wider ${
                                openMobileMenus[`sub-${i}-${j}`] ? "text-[#8A1538]" : "text-gray-600"
                              }`}
                            >
                              {sub.label}
                            </button>
                          ) : (
                            <span className="flex-1 text-xs font-bold uppercase tracking-wider text-gray-600">
                              {sub.label}
                            </span>
                          )}
                          {sub.submenu && (
                            <button
                              onClick={() => toggleMobileMenu(`sub-${i}-${j}`)}
                              className="p-1.5 -mr-2 text-gray-400 hover:text-[#8A1538] transition-colors focus:outline-none"
                            >
                              {openMobileMenus[`sub-${i}-${j}`] ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
                            </button>
                          )}
                        </div>

                        {/* Level 3 Children */}
                        {sub.submenu && openMobileMenus[`sub-${i}-${j}`] && (
                          <div className="bg-white border-l-[3px] border-[#8A1538] ml-10 mr-4 mb-2 rounded-r-md shadow-sm overflow-hidden">
                            {sub.submenu.map((child, k) => (
                              <NavLink
                                key={k}
                                to={child.to}
                                onClick={() => {
                                  scrollToTop();
                                  setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:text-[#8A1538] hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors font-medium"
                              >
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Corporate Footer in Drawer */}
          <div className="bg-[#0b0c10] px-5 py-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded flex items-center justify-center">
                <FaBuilding className="text-white text-sm" />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">Ehan Tech</p>
                <p className="text-gray-500 text-[9px] uppercase tracking-[0.15em]">Trading & Contracting</p>
              </div>
            </div>
            <div className="flex gap-4 text-gray-500">
              <NavLink to="/about-us" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="text-[10px] font-semibold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1">
                <FaInfoCircle size={10} /> About
              </NavLink>
              <NavLink to="/gallery" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="text-[10px] font-semibold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1">
                <FaImages size={10} /> Gallery
              </NavLink>
              <NavLink to="/contact" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="text-[10px] font-semibold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1">
                <FaPhone size={10} /> Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  5. SEARCH RESULTS OVERLAY                                */}
      {/* ══════════════════════════════════════════════════════════ */}
      {searchResults.length > 0 && (
        <div className="absolute top-full right-4 mt-2 w-[90%] md:w-96 max-w-sm bg-white shadow-[0_10px_40px_rgba(138,21,56,0.15)] rounded-lg overflow-hidden border-2 border-[#8A1538] z-[60]">
          <div className="flex justify-between items-center bg-[#8A1538] text-white px-5 py-3 border-b">
            <span className="font-bold text-sm tracking-wide">Search Results ({searchResults.length})</span>
            <button onClick={() => setSearchResults([])} className="text-white hover:text-[#fbe29f] transition-colors">
              <FaTimes size={18} />
            </button>
          </div>
          <ul className="max-h-72 overflow-y-auto">
            {searchResults.map((r, i) => (
              <li key={i} className="border-b border-gray-100 last:border-b-0 hover:bg-red-50 transition-colors">
                <a
                  href={`#${r.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(r.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                    setSearchResults([]);
                  }}
                  className="block px-5 py-3.5 text-sm text-gray-700 font-medium"
                >
                  {r.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add animation keyframes — add this to your global CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default HeaderCurtainsFurniture;
