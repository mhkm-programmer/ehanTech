import React, { useState } from "react";
import {
  FaWhatsapp,
  FaStar,
  FaFire,
  FaLeaf,
  FaRulerCombined,
  FaShieldAlt,
  FaLightbulb,
  FaDraftingCompass,
  FaConciergeBell,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const newServices = [
  {
    id: 1,
    name: "Smart Home Automation",
    subtitle: "Integrated smart lighting, AC control, security systems for modern villas & offices.",
    icon: <FaLightbulb size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/electrical-services-qatar",
    rating: 5,
    badge: "New",
  },
  {
    id: 2,
    name: "Eco-Friendly Flooring",
    subtitle: "Sustainable SPC, bamboo, and recycled material flooring options for green buildings.",
    icon: <FaLeaf size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/spc-flooring-qatar",
    rating: 4.5,
    badge: "Eco",
  },
  {
    id: 3,
    name: "Luxury Pergola Designs",
    subtitle: "Custom wooden & aluminium pergolas with integrated lighting, fans, and shading.",
    icon: <FaDraftingCompass size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/pergola-installation-qatar",
    rating: 5,
    badge: "Trending",
  },
  {
    id: 4,
    name: "Emergency Maintenance",
    subtitle: "24/7 emergency plumbing, electrical, and AC repair services across Doha.",
    icon: <FaBolt size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/building-maintenance-qatar",
    rating: 4.5,
    badge: "24/7",
  },
  {
    id: 5,
    name: "Fire Safety Systems",
    subtitle: "Fire alarm installation, sprinkler systems, and civil defence compliance solutions.",
    icon: <FaShieldAlt size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/electrical-services-qatar",
    rating: 5,
    badge: "Safety",
  },
  {
    id: 6,
    name: "Hotel & Hospitality Fit-out",
    subtitle: "Complete interior solutions for hotels, restaurants, and hospitality venues.",
    icon: <FaConciergeBell size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/hotel-curtains-qatar",
    rating: 4.5,
    badge: "Premium",
  },
  {
    id: 7,
    name: "Custom Aluminium Structures",
    subtitle: "Bespoke aluminium facades, cladding, carports, and outdoor structures.",
    icon: <FaRulerCombined size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/aluminium-doors-qatar",
    rating: 5,
    badge: "New",
  },
  {
    id: 8,
    name: "Corporate Event Staging",
    subtitle: "Full event production including stage setup, lighting, sound, and decoration.",
    icon: <FaFire size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/stage-setup-qatar",
    rating: 4.5,
  },
];

const Stars = ({ rating }) => (
  <div className="flex gap-0.5 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={14} className={i < Math.floor(rating) ? "opacity-100" : i === Math.floor(rating) && rating % 1 >= 0.5 ? "opacity-60" : "opacity-20"} />
    ))}
  </div>
);

const NewServices = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = typeof window !== "undefined" ? (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3) : 3;

  const next = () => setStartIndex((prev) => Math.min(prev + 1, newServices.length - itemsPerPage));
  const prev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const visible = newServices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">What's New</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-4">
            Newly Added <span className="text-[#8A1538]">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Expanding our expertise — discover our latest service offerings across Qatar.
          </p>
        </div>

        {/* Service Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((svc) => (
              <div key={svc.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative border border-gray-100">
                {/* Badge */}
                {svc.badge && (
                  <span className={`absolute top-4 left-4 z-10 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg ${
                    svc.badge === "New" ? "bg-green-600" :
                    svc.badge === "Eco" ? "bg-emerald-600" :
                    svc.badge === "Trending" ? "bg-blue-600" :
                    svc.badge === "24/7" ? "bg-orange-600" :
                    svc.badge === "Safety" ? "bg-red-600" :
                    "bg-purple-600"
                  }`}>
                    {svc.badge}
                  </span>
                )}

                {/* Icon Area */}
                <div className={`bg-gradient-to-br ${svc.gradient} h-44 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_60%)]" />
                  <div className="text-white/90">{svc.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{svc.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{svc.subtitle}</p>
                  <Stars rating={svc.rating} />

                  <div className="flex gap-2 mt-5">
                    <Link to={svc.link} className="flex-1 bg-[#8A1538] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6b102b] transition-all text-center">
                      Learn More
                    </Link>
                    <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="bg-[#0b0c10] text-white px-3 py-2.5 rounded-xl hover:bg-gray-800 transition-all flex items-center">
                      <FaWhatsapp size={16} className="text-[#25D366]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} disabled={startIndex === 0} className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:bg-[#8A1538] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <FaChevronLeft size={14} />
            </button>
            <button onClick={next} disabled={startIndex >= newServices.length - itemsPerPage} className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:bg-[#8A1538] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServices;
