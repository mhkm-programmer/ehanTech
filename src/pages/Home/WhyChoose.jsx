import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaHardHat, FaBuilding, FaHandshake, FaClock,
  FaAward, FaCheckCircle, FaUsers, FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "MME Licensed & Approved",
    description: "Fully licensed by the Ministry of Municipality & Environment (MME) and Qatar Civil Defence for all contracting activities.",
    icon: <FaAward size={36} />,
    color: "from-[#8A1538] to-[#5a0e24]",
  },
  {
    title: "End-to-End Contracting",
    description: "From civil construction to interior fit-outs, tents, furniture, cleaning, manpower, and events — all under one roof.",
    icon: <FaBuilding size={36} />,
    color: "from-[#0b0c10] to-gray-800",
  },
  {
    title: "120+ Skilled Professionals",
    description: "A dedicated team of engineers, technicians, craftsmen, and support staff committed to excellence.",
    icon: <FaUsers size={36} />,
    color: "from-[#8A1538] to-[#5a0e24]",
  },
  {
    title: "On-Time Project Delivery",
    description: "We respect your schedule. Every project is planned, managed, and delivered on time and within budget.",
    icon: <FaClock size={36} />,
    color: "from-[#0b0c10] to-gray-800",
  },
  {
    title: "Quality Craftsmanship",
    description: "Superior workmanship backed by ISO-quality processes and rigorous site supervision.",
    icon: <FaHardHat size={36} />,
    color: "from-[#8A1538] to-[#5a0e24]",
  },
  {
    title: "Competitive & Transparent Pricing",
    description: "Premium quality services at market-competitive rates with clear, no-hidden-cost quotations.",
    icon: <FaCheckCircle size={36} />,
    color: "from-[#0b0c10] to-gray-800",
  },
  {
    title: "Health & Safety Compliant",
    description: "ISO 45001:2018 certified with strict adherence to Qatar's workplace safety regulations.",
    icon: <FaShieldAlt size={36} />,
    color: "from-[#8A1538] to-[#5a0e24]",
  },
  {
    title: "Post-Project Support",
    description: "Comprehensive after-service maintenance and support to ensure long-term satisfaction.",
    icon: <FaHandshake size={36} />,
    color: "from-[#0b0c10] to-gray-800",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const WhyChoose = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-[#f9f5f0]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Why Ehan Tech</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-6">
          Why Choose <span className="text-[#8A1538]">Ehan Tech</span> in Qatar?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          A premier Qatari contracting enterprise delivering excellence across civil engineering,
          interior fit-outs, aluminium works, tentage, furniture, cleaning, manpower, events, and digital services.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                {/* Top colored bar */}
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />

                <div className="p-8 text-center">
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-14">
        <a
          href="https://wa.me/97450755702"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8A1538] text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
        >
          <FaHandshake size={18} /> Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default WhyChoose;
