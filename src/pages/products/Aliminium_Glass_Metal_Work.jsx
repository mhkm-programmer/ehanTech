import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

Modal.setAppElement("#root");

/* =========================
   SERVICES DATA (UPDATED)
========================= */
const products = [
  {
    id: 1,
    name: "Aluminium Doors & Windows",
    subtitle: "Premium sliding & fixed aluminium systems for modern buildings in Qatar.",
    image: "https://8upload.com/image/685c9a9757638/IMG-20250625-WA0039.jpg",
    link: "/aluminium-doors",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Glass Partitions & Doors",
    subtitle: "Office & home glass partitions with modern elegant finishing.",
    image: "https://8upload.com/image/685c9a9817093/IMG-20250625-WA0047.jpg",
    link: "/glass-partitions",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Steel Gates & Railings",
    subtitle: "Strong, stylish and secure steel gates, stairs & railings.",
    image: "https://8upload.com/image/685c9a9765f0a/IMG-20250625-WA0040.jpg",
    link: "/steel-gates",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Pergola & Outdoor Works",
    subtitle: "Custom pergolas, outdoor seating & luxury shading solutions.",
    image: "https://8upload.com/image/685c9a97d9c22/IMG-20250625-WA0045.jpg",
    link: "/pergola-works",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Car Parking Shades",
    subtitle: "Durable waterproof parking shade structures for Qatar weather.",
    image: "https://8upload.com/image/685c9a9757638/IMG-20250625-WA0039.jpg",
    link: "/car-parking-shades",
    rating: 4.6,
  },
];

/* =========================
   ARROWS
========================= */
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow cursor-pointer"
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow cursor-pointer"
  >
    <FaArrowLeft />
  </div>
);

/* =========================
   STARS
========================= */
const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-500 text-sm mt-2">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={i} />
      ))}
      {half && <FaStarHalfAlt />}
      {Array.from({ length: empty }).map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const Aluminium_Glass_Metal_Work = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Aluminium, Glass & Metal Works in Qatar
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Complete fabrication & installation services for aluminium, glass, steel, gates, pergolas, and outdoor structures.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover cursor-pointer"
                  onClick={() => {
                    setModalImage(item.image);
                    setModalOpen(true);
                  }}
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.subtitle}
                  </p>

                  {renderStars(item.rating)}

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <Link
                      to={item.link}
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full"
                    >
                      View
                    </Link>

                    <a
                      href="https://wa.me/97470373588"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-green-600 text-white text-sm rounded-full flex items-center gap-2"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          className="bg-white max-w-3xl mx-auto mt-20 p-4 rounded-lg outline-none"
          overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start z-50"
        >
          <button
            onClick={() => setModalOpen(false)}
            className="text-black text-xl float-right"
          >
            ✕
          </button>

          <img
            src={modalImage}
            alt="Preview"
            className="w-full h-auto rounded"
          />
        </Modal>
      </div>
    </section>
  );
};

export default Aluminium_Glass_Metal_Work;