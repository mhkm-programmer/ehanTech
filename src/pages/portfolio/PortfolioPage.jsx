import React, { useState } from "react";
import {
  FaBuilding,
  FaHardHat,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaSearch,
  FaTimes,
  FaHammer,
  FaPencilRuler,
  FaWarehouse,
  FaGlassCheers,
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaArrowRight,
  FaLayerGroup,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PageTitle from "../reusable/PageTitle";

// ─── DATA ───────────────────────────────────────────────────────────

const categories = [
  { label: "All Projects", key: "all", icon: <FaLayerGroup size={14} /> },
  { label: "Construction", key: "construction", icon: <FaHammer size={14} /> },
  { label: "Interior Fit-outs", key: "interior", icon: <FaPencilRuler size={14} /> },
  { label: "Aluminium & Glass", key: "aluminium", icon: <FaBuilding size={14} /> },
  { label: "Tents & Outdoor", key: "tents", icon: <FaWarehouse size={14} /> },
  { label: "Events", key: "events", icon: <FaGlassCheers size={14} /> },
];

const projects = [
  {
    title: "Villa Renovation — The Pearl",
    category: "construction",
    location: "The Pearl, Doha",
    desc: "Complete interior & exterior renovation with premium finishes. Scope included structural modifications, MEP works, flooring, and landscaping.",
    image: "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
    client: "Private Client",
    year: "2024",
  },
  {
    title: "Corporate Office Build",
    category: "construction",
    location: "West Bay, Doha",
    desc: "Full commercial office construction from foundation to finishing. 12-story building with basement parking and retail podium.",
    image: "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    client: "Al Faisal Holding",
    year: "2024",
  },
  {
    title: "Luxury Villa Complex",
    category: "construction",
    location: "Lusail, Doha",
    desc: "Multi-villa residential complex with modern infrastructure, private pools, and landscaped gardens.",
    image: "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    client: "Lusail Real Estate",
    year: "2023",
  },
  {
    title: "Executive Office Fit-out",
    category: "interior",
    location: "Msheireb, Doha",
    desc: "Premium office fit-out with gypsum ceilings, SPC flooring, custom furniture, and smart lighting systems.",
    image: "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
    client: "Qatar Design Consortium",
    year: "2024",
  },
  {
    title: "Hotel Suite Interiors",
    category: "interior",
    location: "Katara, Doha",
    desc: "Luxury hotel suite interiors with custom furniture, blackout curtains, wallpaper, and premium finishes.",
    image: "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
    client: "Katara Hospitality",
    year: "2024",
  },
  {
    title: "Showroom Design & Fit-out",
    category: "interior",
    location: "Industrial Area, Doha",
    desc: "Complete showroom fit-out with display systems, branded walls, reception area, and client meeting rooms.",
    image: "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    client: "Al Jaber Engineering",
    year: "2023",
  },
  {
    title: "Glass Partitions — Tower",
    category: "aluminium",
    location: "Lusail, Doha",
    desc: "Floor-to-ceiling tempered glass partitions for 5 floors of a commercial tower. Includes frameless glass doors.",
    image: "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    client: "Msheireb Properties",
    year: "2024",
  },
  {
    title: "Aluminium Doors & Windows",
    category: "aluminium",
    location: "Al Wakrah",
    desc: "Custom aluminium sliding doors, casement windows, and curtain walling for a luxury villa complex.",
    image: "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
    client: "Barwa Real Estate",
    year: "2023",
  },
  {
    title: "Luxury Majlis Tent",
    category: "tents",
    location: "Al Samriya",
    desc: "500m² majlis tent with centralized AC, chandelier lighting, premium carpeting, and custom furnishings.",
    image: "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
    client: "Private Client",
    year: "2024",
  },
  {
    title: "Event Tent — Corporate Gala",
    category: "tents",
    location: "DECC, Doha",
    desc: "Large-scale event tent for 1000+ guests with stage, AV system, catering area, and VIP sections.",
    image: "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    client: "DECC Doha",
    year: "2024",
  },
  {
    title: "Exhibition Booth — QIF 2024",
    category: "events",
    location: "DECC, Doha",
    desc: "Custom-designed 12-booth exhibition stand with interactive displays, LED screens, and branding.",
    image: "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    client: "Qatar Events",
    year: "2024",
  },
  {
    title: "Wedding Decoration",
    category: "events",
    location: "Al Samriya",
    desc: "Complete wedding venue decoration including stage, floral arrangements, lighting, and seating for 500 guests.",
    image: "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
    client: "Private Client",
    year: "2024",
  },
];

const stats = [
  { value: "250+", label: "Projects Delivered", icon: <FaHardHat size={24} /> },
  { value: "15+", label: "Years of Excellence", icon: <FaTrophy size={24} /> },
  { value: "120+", label: "Skilled Team", icon: <FaUsers size={24} /> },
  { value: "98%", label: "Client Satisfaction", icon: <FaHandshake size={24} /> },
];

// ─── ANIMATIONS ─────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── QATAR DIVIDER ──────────────────────────────────────────────────

const QatarDivider = () => (
  <div className="h-1.5 bg-white relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: `repeating-linear-gradient(to right, #8A1538 0px, #8A1538 8px, transparent 8px, transparent 10px)` }} />
  </div>
);

// ─── COMPONENT ──────────────────────────────────────────────────────

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageTitle title="Portfolio | Ehan Tech Construction & Trading Services" />

      {/* ════════════════════════════════════════ */}
      {/*  HERO                                   */}
      {/* ════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#8A1538] to-[#3d0917] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-[#fbe29f] text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Featured <span className="text-[#fbe29f]">Projects</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated showcase of our finest work across Qatar — from luxury villas and commercial towers to exhibitions and events.
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/*  STATS                                  */}
      {/* ════════════════════════════════════════ */}
      <div className="relative z-20 -mt-12 md:-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="p-6 md:p-8 text-center border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors">
                <div className="text-[#8A1538] mb-2 flex justify-center">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/*  FILTERS                                */}
      {/* ════════════════════════════════════════ */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === cat.key
                      ? "bg-[#8A1538] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project, client or location..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#8A1538] focus:ring-1 focus:ring-[#8A1538] bg-gray-50"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center md:text-left">
            Showing {filtered.length} of {projects.length} projects
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/*  PROJECT GRID                           */}
      {/* ════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeFilter + searchQuery}
                variants={stagger}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.title}
                    variants={fadeUp}
                    custom={i}
                    layout
                    onClick={() => setSelectedProject(project)}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group border border-gray-100"
                  >
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                          <FaMapMarkerAlt className="text-[#fbe29f]" size={12} />
                          {project.location}
                        </div>
                        <span className="bg-[#8A1538]/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{project.client}</span>
                        <span className="text-[10px] text-gray-400 font-semibold">{project.year}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 leading-snug">{project.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{project.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <FaHardHat className="text-gray-200 text-7xl mx-auto mb-4" />
                <p className="text-gray-500 font-bold text-lg mb-2">No projects found</p>
                <p className="text-gray-400 text-sm">Try adjusting your search or filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  CTA                                    */}
      {/* ════════════════════════════════════════ */}
      <QatarDivider />
      <div className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-[#fbe29f] mb-8 text-lg">Let's discuss your requirements — free consultation & quote.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2">
              <FaWhatsapp size={20} className="text-[#25D366]" /> Request a Quote
            </a>
            <a href="tel:+97450755702" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8A1538] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <FaBuilding size={16} /> Call Us
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/*  PROJECT MODAL                          */}
      {/* ════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-black/60 absolute inset-0 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 md:h-64 object-cover" />
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#8A1538] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{selectedProject.category}</span>
                  <button onClick={() => setSelectedProject(null)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-all">
                    <FaTimes size={16} />
                  </button>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-[#8A1538]" size={14} /> {selectedProject.location}</span>
                  <span className="flex items-center gap-1.5"><FaBuilding className="text-[#8A1538]" size={14} /> {selectedProject.client}</span>
                  <span className="flex items-center gap-1.5"><FaTrophy className="text-[#8A1538]" size={14} /> {selectedProject.year}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedProject.desc}</p>
                <div className="flex gap-3 mt-8">
                  <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="flex-1 px-6 py-3 bg-[#8A1538] text-white rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] transition-all text-center flex items-center justify-center gap-2">
                    <FaWhatsapp size={16} className="text-[#25D366]" /> Inquire About This Project
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
