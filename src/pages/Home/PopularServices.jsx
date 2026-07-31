import React, { useState } from "react";
import {
  FaWhatsapp,
  FaStar,
  FaHardHat,
  FaBuilding,
  FaCouch,
  FaTools,
  FaHammer,
  FaWarehouse,
  FaIndustry,
  FaWrench,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Civil Construction",
    subtitle: "Villa renovations, office fit-outs, tile & marble, waterproofing.",
    icon: <FaHammer size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/construction-work-qatar",
    rating: 5,
    badge: "Most Requested",
  },
  {
    id: 2,
    name: "Aluminium & Glass",
    subtitle: "Doors, windows, partitions, shower glass, mirror works.",
    icon: <FaBuilding size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/aluminium-doors-qatar",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Tents & Outdoor",
    subtitle: "Majlis tents, event tents, pergolas, parking shades.",
    icon: <FaWarehouse size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/tent-making-installation-qatar",
    rating: 5,
    badge: "Popular",
  },
  {
    id: 4,
    name: "Interior Fit-outs",
    subtitle: "Gypsum, SPC flooring, wallpaper, wall panels, false ceilings.",
    icon: <FaWrench size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/gypsum-ceiling-qatar",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Furniture & Curtains",
    subtitle: "Sofas, beds, wardrobes, office furniture, curtains & blinds.",
    icon: <FaCouch size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/furniture-qatar",
    rating: 5,
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Maintenance & Cleaning",
    subtitle: "Plumbing, electrical, AC, deep cleaning, villa cleaning.",
    icon: <FaTools size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/building-maintenance-qatar",
    rating: 4,
  },
  {
    id: 7,
    name: "Manpower Supply",
    subtitle: "Skilled laborers, carpenters, electricians, plumbers.",
    icon: <FaHardHat size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/skilled-workers-qatar",
    rating: 4.5,
    badge: "Fast",
  },
  {
    id: 8,
    name: "Events & Exhibitions",
    subtitle: "Booths, kiosks, wedding décor, stage setup, web & SEO.",
    icon: <FaIndustry size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/exhibition-booth-design-qatar",
    rating: 5,
  },
];

const Stars = ({ rating }) => (
  <div className="flex gap-0.5 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={14} className={i < Math.floor(rating) ? "opacity-100" : i === Math.floor(rating) && rating % 1 >= 0.5 ? "opacity-60" : "opacity-20"} />
    ))}
  </div>
);

const PopularServices = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const next = () => setStartIndex((prev) => Math.min(prev + 1, services.length - itemsPerPage));
  const prev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const visible = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-4">
            Most Popular <span className="text-[#8A1538]">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">Trusted by clients across Qatar — from government projects to luxury villas.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((svc) => (
              <div key={svc.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                {svc.badge && (
                  <span className="absolute top-4 left-4 bg-[#8A1538] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg z-10">
                    {svc.badge}
                  </span>
                )}
                <div className={`bg-gradient-to-br ${svc.gradient} h-44 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_60%)]" />
                  <div className="text-white/90">{svc.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{svc.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{svc.subtitle}</p>
                  <Stars rating={svc.rating} />
                  <div className="flex gap-2 mt-5">
                    <Link to={svc.link} className="flex-1 bg-[#8A1538] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6b102b] transition-all text-center">
                      Details
                    </Link>
                    <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="bg-[#0b0c10] text-white px-3 py-2.5 rounded-xl hover:bg-gray-800 transition-all flex items-center">
                      <FaWhatsapp size={16} className="text-[#25D366]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} disabled={startIndex === 0} className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:bg-[#8A1538] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <FaChevronLeft size={14} />
            </button>
            <button onClick={next} disabled={startIndex >= services.length - itemsPerPage} className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:bg-[#8A1538] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
