import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHardHat,
  FaWrench,
  FaBolt,
  FaTint,
  FaPaintRoller,
  FaUsers,
  FaUserTie,
  FaUserCog,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";

Modal.setAppElement("#root");

const services = [
  {
    id: 1,
    name: "General Labor Supply",
    subtitle: "Reliable general laborers for construction sites, warehouses, events & facilities.",
    icon: <FaHardHat size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/general-labor-supply-qatar",
    rating: 5,
    badge: "Most Requested",
  },
  {
    id: 2,
    name: "Skilled Workers",
    subtitle: "Qualified technicians, masons, welders, fabricators & equipment operators.",
    icon: <FaUserCog size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/skilled-workers-qatar",
    rating: 4.5,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Carpenters",
    subtitle: "Experienced carpenters for furniture, joinery, formwork & finishing work.",
    icon: <FaWrench size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/carpenters-qatar",
    rating: 5,
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Electricians",
    subtitle: "Licensed electricians for installation, wiring, maintenance & troubleshooting.",
    icon: <FaBolt size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/electricians-qatar",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Plumbers",
    subtitle: "Expert plumbers for pipe installation, drainage, water systems & repairs.",
    icon: <FaTint size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/plumbers-qatar",
    rating: 5,
    badge: "Premium",
  },
  {
    id: 6,
    name: "Painters",
    subtitle: "Professional painters for interior, exterior, decorative & industrial painting.",
    icon: <FaPaintRoller size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/painters-qatar",
    rating: 4.5,
    badge: "Trending",
  },
  {
    id: 7,
    name: "Supervisors & Foremen",
    subtitle: "Experienced site supervisors, foremen & project coordinators for your team.",
    icon: <FaUserTie size={40} />,
    gradient: "from-[#8A1538] to-[#5a0e24]",
    link: "/manpower-supply-qatar",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Crew for Events",
    subtitle: "Full event crew — setup, breakdown, stewards & hospitality staff.",
    icon: <FaUsers size={40} />,
    gradient: "from-[#0b0c10] to-gray-800",
    link: "/manpower-supply-qatar",
    rating: 4.5,
    badge: "New",
  },
];

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl cursor-pointer transition-all">
    <FaArrowRight className="text-[#8A1538]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl cursor-pointer transition-all">
    <FaArrowLeft className="text-[#8A1538]" />
  </div>
);

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-1 text-amber-400 text-sm mt-2">
      {[...Array(full)].map((_, i) => <FaStar key={`full-${i}`} />)}
      {half && <FaStarHalfAlt />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`empty-${i}`} />)}
    </div>
  );
};

const Manpower_Supply = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState(null);

  const openModal = (service) => {
    setModalService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalService(null);
    setModalOpen(false);
  };

  const settings = {
    dots: false, infinite: true, autoplay: true, autoplaySpeed: 3500,
    speed: 1000, slidesToShow: 3, slidesToScroll: 1, arrows: true,
    nextArrow: <NextArrow />, prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Manpower Supply</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-4">
            Manpower <span className="text-[#8A1538]">Supply</span> Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Skilled & general labor supply for construction, maintenance, events, and industrial projects across Qatar. Quick deployment, reliable workforce.
          </p>
        </div>

        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-4">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 relative group">
                {service.badge && (
                  <span className="absolute top-4 left-4 bg-[#8A1538] text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider z-10 shadow-lg">
                    {service.badge}
                  </span>
                )}
                <div className={`bg-gradient-to-br ${service.gradient} h-52 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_60%)]" />
                  <div className="text-white/90 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <div onClick={() => openModal(service)} className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="bg-white text-[#8A1538] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">Quick View</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-56 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500 mt-2">{service.subtitle}</p>
                    {renderStars(service.rating)}
                  </div>
                  <div className="flex justify-between items-center mt-4 gap-2">
                    <Link to={service.link} className="flex-1 px-5 py-2.5 text-sm rounded-xl font-bold bg-[#8A1538] text-white hover:bg-[#6b102b] transition-all text-center uppercase tracking-wider">Learn More</Link>
                    <a href="https://wa.me/97450755702" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-5 py-2.5 text-sm rounded-xl font-bold bg-[#0b0c10] text-white hover:bg-gray-800 transition-all min-w-[48px]">
                      <FaWhatsapp size={18} className="text-[#25D366]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        <Modal isOpen={modalOpen} onRequestClose={closeModal} overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" className="relative bg-white rounded-2xl max-w-lg w-full mx-auto shadow-2xl outline-none overflow-hidden">
          {modalService && (
            <>
              <div className={`bg-gradient-to-br ${modalService.gradient} p-8 text-center`}>
                <div className="text-white mb-4 flex justify-center">{modalService.icon}</div>
                <h3 className="text-2xl font-bold text-white">{modalService.name}</h3>
                {modalService.badge && <span className="inline-block mt-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{modalService.badge}</span>}
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">{modalService.subtitle}</p>
                <div className="mb-6">{renderStars(modalService.rating)}</div>
                <div className="flex gap-3">
                  <Link to={modalService.link} onClick={closeModal} className="flex-1 px-6 py-3 bg-[#8A1538] text-white rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] transition-all text-center">View Details</Link>
                  <a href="https://wa.me/97450755702" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#0b0c10] text-white rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2">
                    <FaWhatsapp size={16} className="text-[#25D366]" /> Quote
                  </a>
                </div>
              </div>
              <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all text-lg font-bold">&times;</button>
            </>
          )}
        </Modal>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4 text-sm">Need workers for your project?</p>
          <a href="https://wa.me/97450755702" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#8A1538] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all shadow-lg">
            <FaWhatsapp size={18} className="text-[#25D366]" /> Request Manpower
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manpower_Supply;
