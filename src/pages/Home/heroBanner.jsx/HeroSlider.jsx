import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import React, { useRef } from "react";

const HeroSlider = () => {
  const sliderRef = useRef(null);

  const slides = [
    {
      bg: "bg-gradient-to-br from-[#8A1538] to-[#3d0917]",
      tag: "Qatar's Trusted Contractor",
      title: "Engineering & Construction Excellence",
      subtitle: "Civil works | Interior Fit-outs | Aluminium & Glass | Tents & Outdoor | Furniture | Cleaning | Manpower | Events",
      buttonText: "Get a Free Quote",
      link: "https://wa.me/97450755702",
    },
    {
      bg: "bg-gradient-to-br from-[#0b0c10] to-[#1a1c23]",
      tag: "Premium Interior Solutions",
      title: "Interior Fit-outs & Furnishing",
      subtitle: "Gypsum Ceilings | SPC Flooring | Wallpaper | Curtains & Blinds | Custom Furniture",
      buttonText: "Explore Services",
      link: "/furniture-qatar",
    },
    {
      bg: "bg-gradient-to-br from-[#5a0e24] to-[#8A1538]",
      tag: "End-to-End Contracting",
      title: "From Foundation to Finishing",
      subtitle: "One contractor. Zero compromises. Quality craftsmanship across the State of Qatar.",
      buttonText: "Contact Us",
      link: "/contact",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: false,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ul className="flex gap-3 m-0">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300" />
    ),
  };

  return (
    <div className="w-full relative">
      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative min-h-[70vh] md:min-h-[85vh] w-full">
            {/* Background */}
            <div className={`absolute inset-0 ${slide.bg}`}>
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_60%)]" />
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[70vh] md:min-h-[85vh] flex items-center">
              <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="max-w-3xl">
                  {/* Tag */}
                  <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-[#fbe29f] text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6">
                    {slide.tag}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 flex-wrap">
                    {slide.link.startsWith("http") ? (
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] hover:-translate-y-0.5 transition-all duration-300 shadow-2xl flex items-center gap-2"
                      >
                        <FaWhatsapp size={20} className="text-[#25D366]" />
                        {slide.buttonText}
                      </a>
                    ) : (
                      <a
                        href={slide.link}
                        className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] hover:-translate-y-0.5 transition-all duration-300 shadow-2xl"
                      >
                        {slide.buttonText}
                      </a>
                    )}
                    <a
                      href="tel:+97450755702"
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8A1538] transition-all duration-300 flex items-center gap-2"
                    >
                      <FaPhoneAlt size={16} /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Bottom CTA Strip */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://g.co/kgs/s1RK9fh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b0c10] text-white rounded-xl hover:bg-[#8A1538] transition-all duration-300 font-bold text-xs uppercase tracking-wider"
          >
            <FaMapMarkerAlt /> Visit Our Office
          </a>
          <a
            href="https://wa.me/97450755702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8A1538] text-white rounded-xl hover:bg-[#6b102b] transition-all duration-300 font-bold text-xs uppercase tracking-wider"
          >
            <FaWhatsapp size={16} /> Chat on WhatsApp
          </a>
          <a
            href="mailto:info.etcts@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all duration-300 font-bold text-xs uppercase tracking-wider"
          >
            <FaEnvelope /> info.etcts@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
