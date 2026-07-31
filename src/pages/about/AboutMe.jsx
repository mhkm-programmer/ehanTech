import {
  FaBuilding, FaHardHat, FaTools, FaEnvelope, FaFacebook,
  FaInstagram, FaPhone, FaWhatsapp, FaHandshake, FaTrophy,
  FaEye, FaBullseye, FaHammer, FaPencilRuler, FaUsers,
  FaLinkedinIn, FaMapMarkerAlt, FaCheckCircle, FaCouch,
  FaShieldAlt, FaQuoteLeft, FaStar, FaArrowRight, FaAward,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageTitle from "../reusable/PageTitle";

// ─── ANIMATED COUNTER HOOK ──────────────────────────────────────────

const useCountUp = (target, duration = 2000, start = true) => {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    if (!start) return;
    startTime.current = null;
    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
};

const AnimatedStat = ({ value, label }) => {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(num, 2000, visible);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div ref={setRef} className="p-6 md:p-8 text-center border-r border-gray-100 last:border-r-0">
      <div className="text-3xl md:text-4xl font-black text-[#8A1538] mb-1">
        {visible ? count : 0}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</div>
    </div>
  );
};

// ─── DATA ───────────────────────────────────────────────────────────

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Years of Excellence" },
  { value: "120+", label: "Skilled Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const certifications = [
  { label: "MME Approved", desc: "Ministry of Municipality", icon: <FaCheckCircle size={28} /> },
  { label: "Civil Defence Certified", desc: "Safety approved", icon: <FaHardHat size={28} /> },
  { label: "ISO 9001:2015", desc: "Quality management", icon: <FaTrophy size={28} /> },
  { label: "ISO 45001:2018", desc: "Health & safety", icon: <FaShieldAlt size={28} /> },
];

const services = [
  { icon: <FaHammer size={24} />, title: "Civil Construction", desc: "Villas, offices, tile & marble." },
  { icon: <FaBuilding size={24} />, title: "Aluminium & Glass", desc: "Doors, windows, partitions." },
  { icon: <FaHardHat size={24} />, title: "Tents & Outdoor", desc: "Majlis, pergolas, shades." },
  { icon: <FaPencilRuler size={24} />, title: "Interior Fit-outs", desc: "Flooring, gypsum, wallpaper." },
  { icon: <FaCouch size={24} />, title: "Furniture & Curtains", desc: "Sofas, beds, curtains & blinds." },
  { icon: <FaTools size={24} />, title: "Cleaning & Maintenance", desc: "Plumbing, electrical, AC." },
  { icon: <FaUsers size={24} />, title: "Manpower Supply", desc: "Skilled laborers, carpenters." },
  { icon: <FaHandshake size={24} />, title: "Events & Digital", desc: "Booths, web, SEO." },
];

const timeline = [
  { year: "2009", event: "Company Founded", desc: "Ehan Tech established in Doha, Qatar with a vision to deliver quality contracting services." },
  { year: "2012", event: "MME License Acquired", desc: "Full licensing from Ministry of Municipality & Environment for civil contracting." },
  { year: "2015", event: "Expanded to 8 Divisions", desc: "Grew from construction to interiors, aluminium, tents, furniture, and more." },
  { year: "2018", event: "ISO Certification", desc: "Achieved ISO 9001:2015 and ISO 45001:2018 certifications." },
  { year: "2021", event: "250+ Projects Milestone", desc: "Completed over 250 projects across Qatar for government and private clients." },
  { year: "2025", event: "Continued Growth", desc: "120+ team members, serving clients across all sectors in Qatar." },
];

const team = [
  { name: "Eng. Ahmed Al-Mansouri", role: "Managing Director", initials: "AA" },
  { name: "Mohammed Hassan", role: "Projects Director", initials: "MH" },
  { name: "Sarah Khalid", role: "Head of Interiors", initials: "SK" },
  { name: "Rashid Al-Thani", role: "Operations Manager", initials: "RT" },
];

const testimonials = [
  { text: "Ehan Tech delivered our villa renovation on time and exceeded expectations. Their craftsmanship is outstanding.", name: "Abdullah Al-Sulaiti", role: "The Pearl, Doha" },
  { text: "Professional, reliable, and high-quality work. Our office fit-out was seamless.", name: "Faisal Al-Kuwari", role: "Al Faisal Holding" },
  { text: "The exhibition booth they built was stunning. Best in Doha for event fabrication.", name: "Noora Al-Sayed", role: "QIF 2024" },
];

const companyImages = [
  "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
  "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
  "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
  "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
];

// ─── COMPONENT ──────────────────────────────────────────────────────

const AboutMe = () => {
  return (
    <div>
      <PageTitle title="About Us | Ehan Tech Construction & Trading Services" />

      {/* HERO BANNER */}
      <div className="bg-gradient-to-br from-[#8A1538] to-[#3d0917] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <FaBuilding className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Corporate <span className="text-[#fbe29f]">Portfolio</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ehan Tech Construction and Trading Services — a premier Qatari enterprise delivering excellence across 8 specialized divisions since 2009.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <a href="https://wa.me/97450755702" className="bg-white text-[#8A1538] px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#fbe29f] transition-all shadow-xl">
              Download Portfolio PDF
            </a>
            <NavLink to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-[#8A1538] transition-all">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* STATS COUNTER — AUTO ANIMATED */}
      <div className="relative z-20 -mt-12 md:-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {stats.map((s, i) => (
              <AnimatedStat key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT + CERTIFICATIONS */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Company Profile</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6 leading-tight">
                Premier Contracting & Trading<br />
                <span className="text-[#8A1538]">Enterprise in Qatar</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Ehan Tech Construction and Trading Services W.L.L.</strong> is a Doha-based multi-disciplinary company delivering end-to-end solutions across civil engineering, interior fit-outs, aluminium & glass works, tentage, furniture, cleaning, manpower supply, events, and digital services.</p>
                <p>Since 2009, we have built a reputation for reliability, quality craftsmanship, and on-time delivery. Our team of over 120 skilled professionals serves clients from government entities, private corporations, and individual homeowners across Qatar.</p>
                <p>Fully licensed by the <strong>Ministry of Municipality & Environment (MME)</strong>, Qatar Civil Defence certified, and committed to ISO quality & safety standards.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((item, i) => (
                <div key={i} className="bg-[#f9f5f0] rounded-xl p-5 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="text-[#8A1538] mb-3 flex justify-center">{item.icon}</div>
                  <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaBullseye className="text-[#8A1538]" size={36} />, title: "Mission", desc: "To deliver world-class contracting and business solutions across Qatar with precision and quality." },
              { icon: <FaEye className="text-[#8A1538]" size={36} />, title: "Vision", desc: "To be Qatar's most trusted multi-disciplinary contractor — recognized for excellence and innovation." },
              { icon: <FaHandshake className="text-[#8A1538]" size={36} />, title: "Values", desc: "Integrity, quality, safety, on-time delivery, transparency, and long-term partnerships." },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#8A1538]/10 rounded-xl flex items-center justify-center mx-auto mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Company History</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 pb-10 relative last:pb-0">
                {i < timeline.length - 1 && <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />}
                <div className="w-10 h-10 bg-[#8A1538] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md">
                  {item.year.slice(2)}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex-1 hover:shadow-md transition-shadow">
                  <span className="text-[#8A1538] text-xs font-bold">{item.year}</span>
                  <h3 className="font-bold text-gray-900 mt-1">{item.event}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">8 Core Divisions</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">End-to-end solutions under one roof — from foundation to finishing.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#8A1538]/10 rounded-lg flex items-center justify-center text-[#8A1538] mb-4 group-hover:bg-[#8A1538] group-hover:text-white transition-all">
                  {svc.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{svc.title}</h3>
                <p className="text-gray-500 text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <h4 className="font-bold text-gray-900">{member.name}</h4>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0b0c10] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_80%_20%,_white_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-12">What <span className="text-[#fbe29f]">Clients Say</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left">
                <FaQuoteLeft className="text-[#8A1538]/50 text-2xl mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8A1538] rounded-full" />
                  <div>
                    <p className="text-white font-bold text-xs">{t.name}</p>
                    <p className="text-gray-500 text-[10px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyImages.map((image, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl">
                <img src={image} alt={`Project ${i + 1}`} className="w-full h-52 object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink to="/gallery" className="inline-flex items-center gap-2 bg-[#8A1538] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all shadow-lg">
              View Full Gallery <FaArrowRight size={12} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Contact <span className="text-[#8A1538]">Ehan Tech</span></h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5">
                {[
                  { icon: <FaMapMarkerAlt className="text-[#8A1538]" />, label: "Address", value: "Building 30, Street 850, Zone 26, Al Mansoura, Doha" },
                  { icon: <FaEnvelope className="text-[#8A1538]" />, label: "Email", value: "info.etcts@gmail.com", href: "mailto:info.etcts@gmail.com" },
                  { icon: <FaPhone className="text-[#8A1538]" />, label: "Phone", value: "+974 5075 5702", href: "tel:+97450755702" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#f9f5f0] rounded-xl flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? <a href={item.href} className="text-gray-500 text-sm hover:text-[#8A1538]">{item.value}</a> : <p className="text-gray-500 text-sm">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-5">
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Connect With Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/97450755702", color: "hover:bg-[#25D366] hover:border-[#25D366]" },
                    { icon: <FaFacebook size={20} />, href: "https://facebook.com", color: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                    { icon: <FaInstagram size={20} />, href: "https://instagram.com", color: "hover:bg-[#E4405F] hover:border-[#E4405F]" },
                    { icon: <FaLinkedinIn size={20} />, href: "https://linkedin.com", color: "hover:bg-[#0077b5] hover:border-[#0077b5]" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noreferrer" className={`w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 ${social.color} hover:text-white transition-all shadow-sm`}>
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider pt-4 border-t border-gray-100">
                  <FaAward className="inline mr-1 text-[#8A1538]" size={12} />
                  Free consultations across Qatar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
