import { useState } from "react";
import PageTitle from "./reusable/PageTitle";
import ParallaxSection from "./reusable/Parallax";
import { motion } from "framer-motion";
import Modal from "react-modal";
import {
  FaHardHat, FaBuilding, FaWhatsapp, FaMapMarkerAlt, FaPlay, FaTimes,
  FaWarehouse, FaCouch, FaBroom, FaUsers, FaTools, FaHammer,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const galleryData = [
  {
    sectionTitle: "Civil Construction",
    icon: <FaHammer size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/vxmk9y", alt: "Villa Construction", caption: "Villa Renovation — The Pearl, Doha" },
      { type: "video", src: "https://streamable.com/e/kzz0wm", alt: "Office Building", caption: "Corporate Office Fit-out — West Bay" },
    ],
  },
  {
    sectionTitle: "Aluminium & Glass Works",
    icon: <FaBuilding size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/arzc60", alt: "Glass Partitions", caption: "Glass Partitions — Commercial Tower, Lusail" },
      { type: "video", src: "https://streamable.com/e/xxdfpy", alt: "Aluminium Doors", caption: "Custom Aluminium Doors — Al Wakrah" },
    ],
  },
  {
    sectionTitle: "Tents & Outdoor Structures",
    icon: <FaWarehouse size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/t18u31", alt: "Majlis Tent", caption: "Luxury Majlis Tent — Al Samriya" },
      { type: "video", src: "https://streamable.com/e/9ufdow", alt: "Event Tent", caption: "Event Tent Setup — DECC Doha" },
    ],
  },
  {
    sectionTitle: "Interior Fit-outs",
    icon: <FaTools size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/dtgquo", alt: "Gypsum Ceiling", caption: "Gypsum Ceiling & Lighting — Msheireb" },
      { type: "video", src: "https://streamable.com/e/h5f0lv", alt: "Flooring Works", caption: "SPC Flooring Installation — West Bay" },
    ],
  },
  {
    sectionTitle: "Furniture & Curtains",
    icon: <FaCouch size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/1n20es", alt: "Custom Furniture", caption: "Custom Sofa Sets & Wardrobes — Doha" },
      { type: "video", src: "https://streamable.com/e/vxmk9y", alt: "Curtains Installation", caption: "Premium Curtains & Blinds — The Pearl" },
    ],
  },
  {
    sectionTitle: "Cleaning & Maintenance",
    icon: <FaBroom size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/kzz0wm", alt: "Deep Cleaning", caption: "Villa Deep Cleaning Service — Al Wakrah" },
      { type: "video", src: "https://streamable.com/e/arzc60", alt: "AC Maintenance", caption: "AC Maintenance & Repair — Lusail" },
    ],
  },
  {
    sectionTitle: "Manpower Supply",
    icon: <FaUsers size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/xxdfpy", alt: "Skilled Workers", caption: "Skilled Labor Supply — Al Jaber Engineering" },
      { type: "video", src: "https://streamable.com/e/t18u31", alt: "Construction Crew", caption: "Construction Crew — The Pearl Project" },
    ],
  },
  {
    sectionTitle: "Events & Exhibitions",
    icon: <FaHardHat size={20} />,
    items: [
      { type: "video", src: "https://streamable.com/e/9ufdow", alt: "Exhibition Booth", caption: "Exhibition Booth — QIF 2024, DECC" },
      { type: "video", src: "https://streamable.com/e/dtgquo", alt: "Stage Setup", caption: "Corporate Stage Setup — Doha" },
      { type: "video", src: "https://streamable.com/e/h5f0lv", alt: "Wedding Decoration", caption: "Wedding Decoration — Al Samriya" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

Modal.setAppElement("#root");

const Gallery = () => {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <>
      <PageTitle title="Project Gallery | Ehan Tech Construction & Trading Services" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685f3a03586ad/Gallery_Curtains.jpg"
        title="Our Project Gallery"
        subTitle="Showcasing Excellence Across All 8 Divisions"
      />

      <section className="bg-white">
        {/* Intro */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
              Project <span className="text-[#8A1538]">Gallery</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              A comprehensive showcase of our work across all 8 divisions — from construction and interiors to events and manpower. Delivered with quality and precision across Qatar.
            </p>
          </div>
        </div>

        {/* Gallery Sections */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {galleryData.map(({ sectionTitle, icon, items }, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#8A1538]/10 rounded-lg flex items-center justify-center text-[#8A1538]">
                  {icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {sectionTitle}
                </h2>
                <div className="flex-1 h-px bg-gray-200 ml-4" />
              </div>

              <motion.div
                className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {items.map(({ src, alt, caption }, idx) => (
                  <motion.figure
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer border border-gray-100"
                    variants={itemVariants}
                    onClick={() => setModalVideo({ src, alt })}
                  >
                    <div className="relative h-52 bg-gray-900 overflow-hidden">
                      <iframe
                        src={src}
                        title={alt}
                        allowFullScreen
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                          <FaPlay className="text-[#8A1538] ml-1" size={20} />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-[10px] font-semibold flex items-center gap-1">
                          <FaMapMarkerAlt className="text-[#fbe29f]" size={10} /> Qatar
                        </span>
                      </div>
                    </div>
                    <figcaption className="p-5">
                      <p className="text-gray-800 font-bold text-sm">{caption}</p>
                      <p className="text-gray-400 text-xs mt-1">Click to preview</p>
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-12 md:py-16 mx-6 rounded-2xl mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Qatar's Trusted <span className="text-[#fbe29f]">Contracting Partner</span>
            </h2>
            <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
              8 divisions. One contractor. Zero compromises. From foundation to finishing — we deliver across Qatar.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="bg-white text-[#8A1538] px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#fbe29f] transition-all shadow-xl flex items-center gap-2">
                <FaWhatsapp size={18} className="text-[#25D366]" /> Get a Quote
              </a>
              <NavLink to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-[#8A1538] transition-all">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Need a Contractor in Qatar?
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-lg">
            From construction and interiors to events and manpower — get a free consultation and quote from Ehan Tech.
          </p>
          <a
            href="https://wa.me/97450755702"
            className="inline-flex items-center gap-2 bg-[#8A1538] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all duration-300 uppercase text-sm tracking-wider"
          >
            <FaWhatsapp size={20} className="text-[#25D366]" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={!!modalVideo}
        onRequestClose={() => setModalVideo(null)}
        contentLabel="Video Preview"
        className="fixed inset-0 flex items-center justify-center p-4 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-40"
      >
        <div className="bg-white rounded-2xl p-2 max-w-5xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl">
          <button
            onClick={() => setModalVideo(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          >
            <FaTimes size={18} />
          </button>
          {modalVideo && (
            <iframe
              src={modalVideo.src}
              title={modalVideo.alt}
              allowFullScreen
              className="w-full aspect-video rounded-xl"
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Gallery;
