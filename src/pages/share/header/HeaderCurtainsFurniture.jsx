import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const HeaderCurtainsFurniture = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const dropdownTimeout = useRef(null);

  
const menuItems = [
  { label: "Home", to: "/" },

  {
    label: "Construction & Maintenance",
    to: "/construction-maintenance",
    submenu: [
      { label: "Construction Work", to: "/construction-work" },
      { label: "Building Maintenance", to: "/building-maintenance" },
      { label: "Villa Renovation", to: "/villa-renovation" },
      { label: "Office Renovation", to: "/office-renovation" },
      { label: "Painting Services", to: "/painting-services" },
      { label: "Plumbing Services", to: "/plumbing-services" },
      { label: "Electrical Services", to: "/electrical-services" },
      { label: "Handyman Services", to: "/handyman-services" },
      { label: "AC Maintenance", to: "/ac-maintenance" },
      { label: "HVAC Services", to: "/hvac-services" },
      { label: "Tile & Marble Works", to: "/tile-marble-works" },
      { label: "Waterproofing", to: "/waterproofing" },
    ],
  },

  {
    label: "Aluminium, Glass & Metal Works",
    to: "/aluminium-glass-metal",
    submenu: [
      { label: "Aluminium Doors", to: "/aluminium-doors" },
      { label: "Aluminium Windows", to: "/aluminium-windows" },
      { label: "Glass Partitions", to: "/glass-partitions" },
      { label: "Glass Doors", to: "/glass-doors" },
      { label: "Shower Glass", to: "/shower-glass" },
      { label: "Mirror Works", to: "/mirror-installation" },
      { label: "Steel Gates", to: "/steel-gates" },
      { label: "Sliding Gates", to: "/sliding-gates" },
      { label: "Automatic Gates", to: "/automatic-gates" },
      { label: "Stair Railings", to: "/stair-railings" },
      { label: "Pergola Works", to: "/pergola-works" },
      { label: "Car Parking Shades", to: "/car-parking-shades" },
      { label: "Balustrades", to: "/balustrades" },
    ],
  },

  {
    label: "Tents & Outdoor Works",
    to: "/tents-outdoor",
    submenu: [
      { label: "Tent Making & Installation", to: "/tent-making-installation" },
      { label: "Majlis Tents", to: "/majlis-tents" },
      { label: "Event Tents", to: "/event-tents" },
      { label: "Warehouse Tents", to: "/warehouse-tents" },
      { label: "Car Parking Shades", to: "/parking-shades" },
      { label: "Pergola Installation", to: "/pergola-installation" },
      { label: "Outdoor Seating", to: "/outdoor-seating" },
    ],
  },

  {
    label: "Flooring & Interior Finishing",
    to: "/flooring-interior",
    submenu: [
      { label: "SPC Flooring", to: "/spc-flooring" },
      { label: "Vinyl Flooring", to: "/vinyl-flooring" },
      { label: "Parquet Flooring", to: "/parquet-flooring" },
      { label: "Carpet Installation", to: "/carpet-installation" },
      { label: "Wallpaper Installation", to: "/wallpaper-installation" },
      { label: "Gypsum Ceiling", to: "/gypsum-ceiling" },
      { label: "Gypsum Partition", to: "/gypsum-partition" },
      { label: "False Ceiling", to: "/false-ceiling" },
      { label: "Wall Panels", to: "/wall-panels" },
    ],
  },

  {
    label: "Curtains & Blinds",
    to: "/curtains-blinds",
    submenu: [
      { label: "Blackout Curtains", to: "/curtains/blackout" },
      { label: "Bedroom Curtains", to: "/curtains/bedroom" },
      { label: "Living Room Curtains", to: "/curtains/livingroom" },
      { label: "Office Curtains", to: "/curtains/office" },
      { label: "Hotel Curtains", to: "/curtains/hotel" },
      { label: "Wave Curtains", to: "/curtains/wave" },
      { label: "Roller Curtains", to: "/curtains/roller" },
      { label: "Blackout Blinds", to: "/blinds/blackout" },
      { label: "Roller Blinds", to: "/blinds/roller" },
      { label: "Venetian Blinds", to: "/blinds/venetian" },
      { label: "Vertical Blinds", to: "/blinds/vertical" },
    ],
  },

  {
    label: "Furniture",
    to: "/furniture",
    submenu: [
      {
        label: "Home Furniture",
        to: "/home-furniture",
        submenu: [
          { label: "Sofa Sets", to: "/sofa" },
          { label: "Beds & Custom Beds", to: "/bed" },
          { label: "Wardrobes & Cabinets", to: "/wardrobe" },
          { label: "Dining Tables", to: "/dining-table" },
          { label: "TV Units", to: "/tv-unit" },
          { label: "Dressing Tables", to: "/dressing-table" },
          { label: "Arabic Coffee Tables", to: "/arabic-coffee-table" },
          { label: "Kids Furniture", to: "/kids-furniture" },
          { label: "Outdoor Furniture", to: "/outdoor-furniture" },
        ],
      },

      {
        label: "Office Furniture",
        to: "/office-furniture",
        submenu: [
          { label: "Office Tables", to: "/office-table" },
          { label: "Office Chairs", to: "/office-chair" },
          { label: "Executive Desks", to: "/executive-desk" },
          { label: "Office Sofas", to: "/office-sofa" },
          { label: "Workstations", to: "/office-workstation" },
          { label: "Office Partitions", to: "/office-partition" },
          { label: "Reception Counters", to: "/office-reception" },
          { label: "Conference Tables", to: "/office-conference-table" },
          { label: "Storage Cabinets", to: "/office-storage" },
        ],
      },
    ],
  },

  {
    label: "Hospitality & Cleaning",
    to: "/hospitality-cleaning",
    submenu: [
      { label: "Hospitality Staffing", to: "/hospitality-staffing" },
      { label: "Housekeeping Services", to: "/housekeeping" },
      { label: "Office Cleaning", to: "/office-cleaning" },
      { label: "Deep Cleaning", to: "/deep-cleaning" },
      { label: "Villa Cleaning", to: "/villa-cleaning" },
      { label: "Post Construction Cleaning", to: "/post-construction-cleaning" },
    ],
  },

  {
    label: "Manpower Supply",
    to: "/manpower-supply",
    submenu: [
      { label: "General Labor Supply", to: "/general-labor" },
      { label: "Skilled Workers", to: "/skilled-workers" },
      { label: "Carpenters", to: "/carpenters" },
      { label: "Electricians", to: "/electricians" },
      { label: "Plumbers", to: "/plumbers" },
      { label: "Masons", to: "/masons" },
      { label: "Painters", to: "/painters" },
      { label: "Drivers", to: "/drivers" },
      { label: "Office Staff", to: "/office-staff" },
      { label: "Security Guards", to: "/security-guards" },
    ],
  },

  {
    label: "Events & Exhibitions",
    to: "/events-exhibitions",
    submenu: [
      { label: "Exhibition Booth Design", to: "/exhibition-booth-design" },
      { label: "Exhibition Stall Fabrication", to: "/exhibition-stall" },
      { label: "Kiosk Fabrication", to: "/kiosk-fabrication" },
      { label: "Wedding Decoration", to: "/wedding-decoration" },
      { label: "Stage Setup", to: "/stage-setup" },
      { label: "Corporate Events", to: "/corporate-events" },
      { label: "Event Furniture Rental", to: "/event-furniture-rental" },
      { label: "Event Staffing", to: "/event-staffing" },
    ],
  },

  {
    label: "Digital Services",
    to: "/digital-services",
    submenu: [
      { label: "Website Development", to: "/website-development" },
      { label: "Digital Marketing", to: "/digital-marketing" },
      { label: "SEO Services", to: "/seo-services" },
      { label: "Google Ads", to: "/google-ads" },
      { label: "Social Media Marketing", to: "/social-media-marketing" },
      { label: "Typing Center Services", to: "/typing-center" },
    ],
  },

  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact" },
];


  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const matches = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a")
    ).filter((el) =>
      el.textContent?.toLowerCase().includes(query)
    );

    if (matches.length) {
      matches.forEach((el, i) => {
        el.id = `search-${i}`;
        el.style.backgroundColor = "#fffa8b";
        setTimeout(() => (el.style.backgroundColor = ""), 2000);
      });

      setSearchResults(
        matches.map((el, i) => ({
          text: el.textContent,
          id: `search-${i}`,
        }))
      );
    } else {
      alert("No results found");
    }

    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1b1f24] text-white shadow-lg">

      {/* Banner */}
      <div className="bg-[#ff6a00] text-center text-sm md:text-base font-semibold py-1">
        <Typed
          strings={[
            "Welcome to Curtains Furniture Qatar",
            "Premium Curtains & Blinds Solutions",
            "Custom Design & Installation",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2">

        {/* Logo */}
        <NavLink to="/">
          <img
            src="https://8upload.com/image/6857c8c36af7b/Curtain_Logo.jpeg"
            alt="Logo"
            className="h-10 rounded-md"
          />
        </NavLink>

        {/* Search */}
        <div className="flex-1 mx-4 relative max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search..."
            className="w-full px-4 py-2 text-black rounded-md"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-10 top-2 text-gray-500"
            >
              <FaTimes />
            </button>
          )}

          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 bottom-0 px-3 bg-orange-500"
          >
            🔍
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center gap-6 py-2 text-sm">

        {menuItems.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setActiveMenu(i);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setActiveMenu(null), 150);
            }}
          >

            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "hover:text-orange-300"
              }
            >
              {item.label}
            </NavLink>

            {/* Level 1 */}
            {item.submenu && activeMenu === i && (
              <div className="absolute left-0 top-full bg-[#2b2f34] w-60 shadow-lg">

                {item.submenu.map((sub, j) => (
                  <div key={j} className="relative group/sub">

                    <NavLink
                      to={sub.to}
                      className="block px-4 py-2 hover:bg-orange-500"
                    >
                      {sub.label}
                    </NavLink>

                    {/* Level 2 */}
                    {sub.submenu && (
                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-[#2b2f34] w-60 shadow-lg">

                        {sub.submenu.map((child, k) => (
                          <NavLink
                            key={k}
                            to={child.to}
                            className="block px-4 py-2 hover:bg-orange-500"
                          >
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

      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2b2f34] p-3">

          {menuItems.map((item, i) => (
            <details key={i} className="mb-2">

              <summary className="cursor-pointer py-2">
                {item.label}
              </summary>

              {item.submenu && (
                <div className="pl-4">

                  {item.submenu.map((sub, j) => (
                    <details key={j} className="mb-1">

                      <summary className="cursor-pointer py-1">
                        {sub.label}
                      </summary>

                      {sub.submenu && (
                        <div className="pl-4">

                          {sub.submenu.map((child, k) => (
                            <NavLink
                              key={k}
                              to={child.to}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1 text-sm hover:text-orange-300"
                            >
                              {child.label}
                            </NavLink>
                          ))}

                        </div>
                      )}

                    </details>
                  ))}

                </div>
              )}

            </details>
          ))}

        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white text-black p-3">
          <ul>
            {searchResults.map((r, i) => (
              <li key={i}>
                <a
                  href={`#${r.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(r.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setSearchResults([]);
                  }}
                  className="text-blue-600"
                >
                  {r.text}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSearchResults([])}
            className="text-red-500 mt-2"
          >
            Close
          </button>
        </div>
      )}

    </header>
  );
};

export default HeaderCurtainsFurniture;