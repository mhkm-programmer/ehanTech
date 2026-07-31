import React from "react";
import {
  FaBuilding, FaHardHat, FaHospital, FaUniversity,
  FaHotel, FaIndustry, FaOilCan, FaShoppingCart,
  FaSchool, FaWarehouse, FaHome, FaCity,
} from "react-icons/fa";

const OurClient = () => {
  const clients = [
    { name: "Al Faisal Holding", icon: <FaBuilding size={24} /> },
    { name: "Al Jaber Engineering", icon: <FaIndustry size={24} /> },
    { name: "Msheireb Properties", icon: <FaCity size={24} /> },
    { name: "Hamad Medical Corp.", icon: <FaHospital size={24} /> },
    { name: "Qatar University", icon: <FaUniversity size={24} /> },
    { name: "Katara Hospitality", icon: <FaHotel size={24} /> },
    { name: "Qatar Petroleum", icon: <FaOilCan size={24} /> },
    { name: "Qatar Foundation", icon: <FaSchool size={24} /> },
    { name: "Ashghal (PWA)", icon: <FaWarehouse size={24} /> },
    { name: "Barwa Real Estate", icon: <FaHome size={24} /> },
    { name: "Lusail Real Estate", icon: <FaHome size={24} /> },
    { name: "DECC Doha", icon: <FaShoppingCart size={24} /> },
    { name: "Al Asmakh Realty", icon: <FaBuilding size={24} /> },
    { name: "Qatar Diar", icon: <FaCity size={24} /> },
    { name: "Ezdan Holding", icon: <FaBuilding size={24} /> },
    { name: "Sidra Medicine", icon: <FaHospital size={24} /> },
    { name: "Aspire Zone", icon: <FaHardHat size={24} /> },
    { name: "Qatar Tourism", icon: <FaShoppingCart size={24} /> },
  ];

  // Duplicate for seamless infinite scroll
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 lg:py-20 bg-[#f9f5f0]">
      <div className="container px-6 mx-auto text-center max-w-7xl">
        {/* Header */}
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Trusted By Leaders</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-4">
          Our Esteemed <span className="text-[#8A1538]">Clients</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Proudly serving leading organizations across Qatar — from government authorities and energy giants to luxury hotels and healthcare institutions.
        </p>

        {/* CSS Auto-Scroll Carousel (No external library needed) */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {allClients.map((client, index) => (
              <div key={index} className="flex flex-col items-center justify-center min-w-[100px] shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#8A1538]/10 to-[#5a0e24]/10 rounded-xl flex items-center justify-center text-[#8A1538] mb-2 shadow-sm border border-gray-100 hover:bg-gradient-to-br hover:from-[#8A1538] hover:to-[#5a0e24] hover:text-white transition-all duration-300">
                  {client.icon}
                </div>
                <p className="text-[10px] font-bold text-gray-600 text-center leading-tight max-w-[80px]">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 font-semibold uppercase tracking-wider">
          ...and many more across the State of Qatar
        </p>
      </div>

      {/* Add this CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurClient;
