import {
  FaBuilding, FaHardHat, FaTrophy, FaUsers, FaCheckCircle,
  FaHandshake, FaTools, FaHammer, FaPencilRuler, FaSolarPanel,
  FaWarehouse, FaCouch, FaBroom, FaHardHat as FaHelmet,
  FaAward, FaQuoteLeft, FaArrowRight, FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import PageTitle from "../reusable/PageTitle";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// ─── DATA ───────────────────────────────────────────────────────────
const stats = [
  { value: "250+", label: "Projects Completed", icon: <FaHardHat size={28} /> },
  { value: "15+", label: "Years of Excellence", icon: <FaTrophy size={28} /> },
  { value: "120+", label: "Skilled Workforce", icon: <FaUsers size={28} /> },
  { value: "98%", label: "Client Satisfaction", icon: <FaHandshake size={28} /> },
];

const services = [
  {
    title: "Civil Construction",
    desc: "New builds, villa renovations, office fit-outs, tile & marble works, waterproofing.",
    icon: <FaHammer size={24} />,
    link: "/construction-work-qatar",
  },
  {
    title: "Aluminium & Glass",
    desc: "Doors, windows, glass partitions, shower glass, mirror works, and custom aluminium structures.",
    icon: <FaSolarPanel size={24} />,
    link: "/aluminium-doors-qatar",
  },
  {
    title: "Tents & Outdoor",
    desc: "Majlis tents, event tents, warehouse tents, pergolas, parking shades, outdoor seating.",
    icon: <FaWarehouse size={24} />,
    link: "/tent-making-installation-qatar",
  },
  {
    title: "Interior Fit-outs",
    desc: "SPC/vinyl/parquet flooring, gypsum ceilings, wallpaper, wall panels, false ceilings.",
    icon: <FaPencilRuler size={24} />,
    link: "/gypsum-ceiling-qatar",
  },
  {
    title: "Furniture & Curtains",
    desc: "Custom beds, wardrobes, sofa sets, office furniture, blackout curtains, blinds.",
    icon: <FaCouch size={24} />,
    link: "/furniture-qatar",
  },
  {
    title: "Maintenance & Cleaning",
    desc: "Building maintenance, plumbing, electrical, AC, housekeeping, deep & villa cleaning.",
    icon: <FaBroom size={24} />,
    link: "/building-maintenance-qatar",
  },
  {
    title: "Manpower Supply",
    desc: "Skilled & general laborers, carpenters, electricians, plumbers, painters for short/long-term.",
    icon: <FaHelmet size={24} />,
    link: "/skilled-workers-qatar",
  },
  {
    title: "Events & Digital",
    desc: "Exhibition booths, kiosk fabrication, wedding décor, stage setup, web dev & SEO.",
    icon: <FaTools size={24} />,
    link: "/exhibition-booth-design-qatar",
  },
];

const projectCategories = [
  { label: "All", key: "all" },
  { label: "Construction", key: "construction" },
  { label: "Interior", key: "interior" },
  { label: "Outdoor", key: "outdoor" },
  { label: "Events", key: "events" },
];

const projects = [
  { title: "Villa Renovation — The Pearl", category: "construction", image: null, location: "The Pearl, Doha" },
  { title: "Corporate Office Fit-out", category: "interior", image: null, location: "West Bay, Doha" },
  { title: "Luxury Majlis Tent", category: "outdoor", image: null, location: "Al Wakrah" },
  { title: "Exhibition Booth — QIF 2024", category: "events", image: null, location: "DECC, Doha" },
  { title: "Aluminium Glass Partitions", category: "construction", image: null, location: "Lusail" },
  { title: "Hotel Curtains & Blinds", category: "interior", image: null, location: "Msheireb, Doha" },
];

const clients = [
  { name: "Al Faisal Holding", sector: "Real Estate" },
  { name: "Qatar Design Consortium", sector: "Architecture" },
  { name: "Al Jaber Engineering", sector: "Construction" },
  { name: "Msheireb Properties", sector: "Real Estate" },
  { name: "DECC (Doha Exhibition)", sector: "Events" },
  { name: "Hamad Medical Corp.", sector: "Healthcare" },
];

const team = [
  { name: "Eng. Ahmed Al-Mansouri", role: "Managing Director", initials: "AA" },
  { name: "Mohammed Hassan", role: "Projects Director", initials: "MH" },
  { name: "Sarah Khalid", role: "Head of Interiors", initials: "SK" },
  { name: "Rashid Al-Thani", role: "Operations Manager", initials: "RT" },
];

const certifications = [
  "MME (Ministry of Municipality & Environment) Approved",
  "Qatar Civil Defence Certified",
  "ISO 9001:2015 — Quality Management",
  "ISO 45001:2018 — Health & Safety",
];

const testimonials = [
  { text: "Ehan Tech delivered our villa renovation on time and exceeded our expectations. Their attention to detail is unmatched.", client: "Abdullah Al-Sulaiti", project: "Villa Owner, The Pearl" },
  { text: "Professional, reliable, and high-quality work. Our office fit-out was completed seamlessly with minimal disruption.", client: "Faisal Al-Kuwari", project: "CEO, Al Faisal Holding" },
  { text: "The exhibition booth they built for us was stunning. Highly recommended for any event or exhibition work in Qatar.", client: "Noora Al-Sayed", project: "Marketing Director, QIF 2024" },
];

// ─── COMPONENT ──────────────────────────────────────────────────────
const CompanyPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div>
      <PageTitle title="Ehan Tech Construction & Trading | Company Portfolio" />

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  HERO BANNER                                              */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#8A1538] to-[#3d0917] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <FaBuilding className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Company Portfolio
          </h1>
          <p className="text-[#fbe29f] text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of Ehan Tech Construction and Trading Services — our projects,
            expertise, team, and commitment to excellence across Qatar.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="bg-white text-[#8A1538] px-8 py-3.5 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] transition-all duration-300 shadow-xl hover:-translate-y-0.5">
              Request Portfolio PDF
            </a>
            <NavLink to="/contact" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8A1538] transition-all duration-300">
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  STATS COUNTER                                            */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-gray-200 -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden shadow-xl">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 md:p-8 text-center hover:bg-gray-50 transition-colors">
                <div className="text-[#8A1538] mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  ABOUT SECTION                                            */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.2em]">About Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                A Premier Qatari <br />
                <span className="text-[#8A1538]">Contracting Enterprise</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Ehan Tech Construction and Trading Services W.L.L.</strong> is a Doha-based
                  multi-disciplinary contracting company delivering end-to-end solutions across civil
                  engineering, interior fit-outs, aluminium & glass works, tentage, furniture, cleaning,
                  manpower supply, events, and digital services.
                </p>
                <p>
                  Since our establishment, we have built a reputation for reliability, quality
                  craftsmanship, and on-time delivery. Our team of over 120 skilled professionals
                  serves clients from government entities, private corporations, and individual
                  homeowners across the State of Qatar.
                </p>
                <p>
                  We are fully licensed by the <strong>Ministry of Municipality & Environment (MME)</strong>,
                  Qatar Civil Defence certified, and committed to international quality and safety standards.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <NavLink to="/about-us" className="bg-[#8A1538] text-white px-6 py-3 rounded-lg font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] transition-all flex items-center gap-2">
                  More About Us <FaArrowRight size={12} />
                </NavLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <FaAward className="text-[#8A1538] text-2xl mb-3" />
                  <p className="text-xs font-bold text-gray-800 leading-snug">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  SERVICES GRID                                            */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
              Our Core <span className="text-[#8A1538]">Services</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Comprehensive contracting solutions under one roof — from foundation to finishing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                variants={staggerItem}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#8A1538]/10 rounded-lg flex items-center justify-center text-[#8A1538] mb-4 group-hover:bg-[#8A1538] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <NavLink to={service.link} className="text-[#8A1538] text-xs font-bold uppercase tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1">
                  Learn More <FaArrowRight size={10} />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  PROJECT FILTER GALLERY                                   */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.2em]">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
              Featured <span className="text-[#8A1538]">Projects</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              A selection of completed projects showcasing our expertise across sectors.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat.key
                    ? "bg-[#8A1538] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <FaMapMarkerAlt className="inline mr-1 text-[#fbe29f]" size={12} />
                    <span className="text-xs font-semibold">{project.location}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#8A1538] bg-[#8A1538]/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink to="/gallery" className="inline-flex items-center gap-2 bg-[#8A1538] text-white px-8 py-3.5 rounded-lg font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] transition-all">
              View Full Gallery <FaArrowRight size={12} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  TESTIMONIALS                                             */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-[#0b0c10] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_80%_20%,_white_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.2em]">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-10">
            What Our <span className="text-[#fbe29f]">Clients Say</span>
          </h2>

          <div className="relative">
            <FaQuoteLeft className="text-[#8A1538]/30 text-6xl absolute -top-4 -left-4" />
            <motion.p
              key={activeTestimonial}
              className="text-gray-300 text-lg leading-relaxed italic mb-8 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              "{testimonials[activeTestimonial].text}"
            </motion.p>

            <div className="flex items-center justify-center gap-2 mb-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? "bg-[#8A1538] w-8" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <p className="text-white font-bold">{testimonials[activeTestimonial].client}</p>
            <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].project}</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  CLIENTS / PARTNERS                                       */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.2em]">Trusted Partners</span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-3 mb-10">
            Our Valued <span className="text-[#8A1538]">Clients</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#8A1538]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaBuilding className="text-[#8A1538] text-xl" />
                </div>
                <p className="font-bold text-gray-800 text-sm">{client.name}</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold mt-1">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  TEAM                                                     */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.2em]">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
              Meet Our <span className="text-[#8A1538]">Team</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                variants={staggerItem}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <h4 className="font-bold text-gray-900">{member.name}</h4>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  CTA BANNER                                               */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-[#fbe29f] mb-8 max-w-2xl mx-auto">
            From concept to completion — let Ehan Tech bring your vision to life with quality craftsmanship
            and professional project management.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="bg-white text-[#8A1538] px-8 py-3.5 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] transition-all duration-300 shadow-xl">
              Request a Quote
            </a>
            <NavLink to="/contact" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8A1538] transition-all duration-300">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPortfolio;
