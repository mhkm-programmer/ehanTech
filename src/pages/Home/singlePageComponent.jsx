// App.jsx
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaCouch,
  FaTools,
  FaBuilding,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaQuoteLeft,
  FaChevronDown,
} from "react-icons/fa";

/*
  Single-file React (JSX) one-page site using Tailwind CSS and react-icons.
  - Replace placeholder images / video URLs / contact details as needed.
  - No other npm packages required (just react-icons + Tailwind).
*/

/* -------------------------
   Replace these with your real assets & contacts
   ------------------------- */
const LOGO_URL = "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=128&q=60";
const WHATSAPP_NUMBER = "97450755702"; // for wa.me links (no +)
const DISPLAY_WHATSAPP = "+974 5075 5702";
const CONTACT_PHONE = "+974 7037 3588";
const CONTACT_EMAIL = "info@qatarservices.example";
/* ------------------------- */

/* Hero images (placeholders) */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1529634895631-2c4c214a6d86?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1600&q=60",
];

/* Service submenu entries (image + icon + label) */
const SERVICE_SUBMENU = [
  { id: "furniture", name: "Furniture & Curtains", icon: <FaCouch />, image: "https://images.unsplash.com/photo-1616627980486-9d2df1a9c65e?auto=format&fit=crop&w=400&q=60" },
  { id: "appliances", name: "AC & Appliances", icon: <FaTools />, image: "https://images.unsplash.com/photo-1598300053650-0cf36b22e367?auto=format&fit=crop&w=400&q=60" },
  { id: "construction", name: "Construction & Fit-Out", icon: <FaBuilding />, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=60" },
  { id: "events", name: "Events & Hospitality", icon: <FaUsers />, image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=400&q=60" },
];

/* Services with gallery (images & optional mp4 sample) */
const SERVICES = [
  {
    id: "furniture",
    title: "Home & Furniture",
    desc: "Custom furniture, curtains, wardrobes, and flooring supply & installation.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=60" },
      { type: "image", src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=60" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
  {
    id: "appliances",
    title: "AC & Appliances",
    desc: "AC installation & repair, refrigerators, washing machines, and maintenance.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1581579183127-3f7f0be0f1d0?auto=format&fit=crop&w=1200&q=60" },
      { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    ],
  },
  {
    id: "construction",
    title: "Construction & Renovation",
    desc: "Complete renovation, fit-outs, gypsum ceilings, tiles, and MEP works.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60" },
      { type: "image", src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60" },
    ],
  },
  {
    id: "events",
    title: "Events & Hospitality",
    desc: "Marquees, staging, lighting, sound, catering and professional event teams.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=60" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
];

/* Products gallery placeholders */
const PRODUCTS = [
  { id: 1, src: "https://images.unsplash.com/photo-1578894381163-e72c17f2d08a?auto=format&fit=crop&w=1000&q=60", title: "Solid Wood Table" },
  { id: 2, src: "https://images.unsplash.com/photo-1598300056394-1c6b4e22d1c2?auto=format&fit=crop&w=1000&q=60", title: "Office Workstation" },
  { id: 3, src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=60", title: "Outdoor Tent Setup" },
  { id: 4, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=60", title: "Modern Sofa Set" },
];

/* Client logos (placeholder SVGs/URLs) */
const CLIENT_LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Qatar_Airways_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ooredoo_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vodafone_2017_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Lusail_logo.svg",
];

/* Testimonials */
const TESTIMONIALS = [
  { name: "Aisha Al-Mansouri", title: "Event Manager", text: "Outstanding — professional, creative and punctual. Highly recommended." },
  { name: "Khalid Bin Omar", title: "Office Admin", text: "Our office fit-out was executed on time and with great finish quality." },
  { name: "Sara H.", title: "Homeowner", text: "Fast AC repair with friendly technicians. Excellent service." },
];

/* ---------------------------
   Helper component: simple icon used in Why-choose list
   --------------------------- */
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-500">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------
   Main App Component
   --------------------------- */
export default function App() {
  // header / mobile menu / submenu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // hero slider index
  const [heroIndex, setHeroIndex] = useState(0);

  // services modal gallery
  const [openService, setOpenService] = useState(null); // service object or null
  const [galleryIndex, setGalleryIndex] = useState(0);

  // testimonials index
  const [testIndex, setTestIndex] = useState(0);

  // basic search for services in header
  const [searchQuery, setSearchQuery] = useState("");

  // contact form
  const [contact, setContact] = useState({ name: "", phone: "", email: "", message: "" });

  // hero auto-advance
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 4500);
    return () => clearInterval(t);
  }, []);

  // auto-testimonial
  useEffect(() => {
    const t = setInterval(() => setTestIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  // modal keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (!openService) return;
      if (e.key === "ArrowRight") nextGallery();
      if (e.key === "ArrowLeft") prevGallery();
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openService]);

  // open/close modal
  function openModal(service) {
    setOpenService(service);
    setGalleryIndex(0);
    document.body.style.overflow = "hidden"; // prevent background scroll
  }
  function closeModal() {
    setOpenService(null);
    setGalleryIndex(0);
    document.body.style.overflow = "";
  }

  function nextGallery() {
    if (!openService || !openService.media || openService.media.length === 0) return;
    setGalleryIndex((i) => (i + 1) % openService.media.length);
  }
  function prevGallery() {
    if (!openService || !openService.media || openService.media.length === 0) return;
    setGalleryIndex((i) => (i - 1 + openService.media.length) % openService.media.length);
  }

  // simple form handler (placeholder)
  function handleContactSubmit(e) {
    e.preventDefault();
    // integrate real API / email sending here
    alert(`Thanks ${contact.name || "Customer"} — we received your request. We'll contact you soon.`);
    setContact({ name: "", phone: "", email: "", message: "" });
  }

  // filtered services by search query
  const filteredServices = SERVICES.filter(
    (s) =>
      searchQuery.trim() === "" ||
      s.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="antialiased text-gray-800 bg-gray-50">
      {/* ================= Header ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-md object-cover shadow-sm" />
            <div>
              <div className="text-indigo-700 font-bold">Qatar Services</div>
              <div className="text-xs text-gray-500">Trusted • Local • Professional</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm font-medium">
              <a href="#home" className="hover:text-indigo-700">Home</a>

              {/* Services dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setSubmenuOpen(true)}
                  onMouseLeave={() => setSubmenuOpen(false)}
                  onClick={() => setSubmenuOpen((s) => !s)}
                  className="flex items-center gap-1 hover:text-indigo-700"
                >
                  Services <FaChevronDown className="text-xs mt-1" />
                </button>

                {submenuOpen && (
                  <div
                    onMouseEnter={() => setSubmenuOpen(true)}
                    onMouseLeave={() => setSubmenuOpen(false)}
                    className="absolute left-0 top-8 w-72 bg-white rounded-lg shadow-lg p-3"
                  >
                    {SERVICE_SUBMENU.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
                      >
                        <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                        <div className="text-sm">{item.icon} <span className="ml-2">{item.name}</span></div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#products" className="hover:text-indigo-700">Products</a>
              <a href="#clients" className="hover:text-indigo-700">Clients</a>
              <a href="#testimonials" className="hover:text-indigo-700">Testimonials</a>
              <a href="#contact" className="hover:text-indigo-700">Contact</a>
            </nav>

            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="pl-10 pr-3 py-2 rounded-md border w-64 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-semibold"
            >
              <FaWhatsapp /> {DISPLAY_WHATSAPP}
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-3">
              <div className="relative mb-3">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="pl-10 pr-3 py-2 rounded-md border w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <nav className="flex flex-col gap-2">
                <a href="#home" onClick={() => setMobileOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Home</a>
                {/* Show submenu items in mobile menu */}
                <details className="group bg-white rounded">
                  <summary className="py-2 px-2 cursor-pointer flex items-center justify-between">Services</summary>
                  <div className="px-2 py-2 space-y-2">
                    {SERVICE_SUBMENU.map((s) => (
                      <a key={s.id} href={`#${s.id}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-100">
                        <img src={s.image} alt={s.name} className="w-8 h-8 rounded object-cover" />
                        <span className="text-sm">{s.name}</span>
                      </a>
                    ))}
                  </div>
                </details>

                <a href="#products" onClick={() => setMobileOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Products</a>
                <a href="#clients" onClick={() => setMobileOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Clients</a>
                <a href="#testimonials" onClick={() => setMobileOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Testimonials</a>
                <a href="#contact" onClick={() => setMobileOpen(false)} className="py-2 px-2 rounded hover:bg-gray-100">Contact</a>

                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-3 bg-green-500 text-white px-3 py-2 rounded-md font-semibold">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* ================= Hero ================= */}
      <section id="home" className="mt-16 relative h-[70vh] sm:h-[78vh]">
        {HERO_IMAGES.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === heroIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">All Qatar Services — One Trusted Platform</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl">Home, construction, events — licensed teams, transparent quotes, on-time delivery across Qatar.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 bg-yellow-400 text-indigo-900 rounded font-semibold hover:bg-yellow-300">Request Quote</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="px-5 py-3 border rounded">Chat on WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Manual dots */}
        <div className="absolute right-6 bottom-6 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setHeroIndex(i)} className={`w-3 h-3 rounded-full ${i === heroIndex ? "bg-yellow-400" : "bg-white/60"}`} />
          ))}
        </div>
      </section>

      {/* ================= Services ================= */}
      <main id="services" className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-indigo-700">Our Services</h2>
          <div className="text-sm text-gray-600">Professional teams across Doha & Qatar</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((s) => (
            <article key={s.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <div className="h-44 bg-gray-100 overflow-hidden">
                {s.media && s.media[0] && s.media[0].type === "image" ? (
                  <img src={s.media[0].src} alt={s.title} className="w-full h-full object-cover transform hover:scale-105 transition"/>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">No preview</div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>

                <div className="mt-4 flex gap-3">
                  <button onClick={() => openModal(s)} className="flex-1 text-center py-2 bg-indigo-700 text-white rounded-md font-semibold">View Gallery</button>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20a%20quote%20for%20${encodeURIComponent(s.title)}`} target="_blank" rel="noopener noreferrer" className="px-3 py-2 border rounded-md flex items-center gap-2">
                    <FaWhatsapp className="text-green-500" /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ================= Products Gallery ================= */}
      <section id="products" className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Products Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="rounded-lg overflow-hidden shadow bg-white">
                <img src={p.src} alt={p.title} className="w-full h-44 object-cover hover:scale-105 transition" />
                <div className="p-3">
                  <div className="font-semibold text-sm">{p.title}</div>
                  <div className="mt-2 flex gap-2">
                    <a href="#contact" className="text-sm px-3 py-2 bg-indigo-700 text-white rounded">Order</a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(p.title)}`} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-2 border rounded">WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Clients ================= */}
      <section id="clients" className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-8">Our Clients & Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
            {CLIENT_LOGOS.map((c, i) => (
              <img key={i} src={c} alt={`Client ${i}`} className="h-10 sm:h-16 object-contain grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us ================= */}
      <section id="why" className="bg-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Why Choose Us</h2>
            <p className="text-gray-700">Local expertise with a professional approach — licensed teams, transparent pricing and on-time delivery.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-lg shadow flex gap-3 items-start"><CheckIcon /><div><div className="font-semibold">Licensed Teams</div><div className="text-sm text-gray-600">All crews are verified & licensed.</div></div></li>
              <li className="bg-white p-4 rounded-lg shadow flex gap-3 items-start"><CheckIcon /><div><div className="font-semibold">Transparent Pricing</div><div className="text-sm text-gray-600">Clear quotations — no hidden fees.</div></div></li>
              <li className="bg-white p-4 rounded-lg shadow flex gap-3 items-start"><CheckIcon /><div><div className="font-semibold">Fast Response</div><div className="text-sm text-gray-600">Quick site visits & 24/7 support.</div></div></li>
              <li className="bg-white p-4 rounded-lg shadow flex gap-3 items-start"><CheckIcon /><div><div className="font-semibold">Quality Guarantee</div><div className="text-sm text-gray-600">Work inspected before handover.</div></div></li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=60" alt="Why choose us" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section id="testimonials" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Client Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 relative">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-indigo-200"><FaQuoteLeft /></div>
            <div>
              <p className="text-lg text-gray-700">{TESTIMONIALS[testIndex].text}</p>
              <div className="mt-3 text-sm font-medium text-indigo-700">{TESTIMONIALS[testIndex].name} — {TESTIMONIALS[testIndex].title}</div>
            </div>
          </div>

          <div className="absolute right-4 bottom-4 flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setTestIndex(i)} className={`w-3 h-3 rounded-full ${i === testIndex ? "bg-indigo-700" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section id="contact" className="bg-indigo-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Get a Free Quote</h2>
            <p className="text-gray-200 mb-5">Fill out the form or contact us directly via WhatsApp or phone for fast response.</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><FaPhoneAlt /> {CONTACT_PHONE}</div>
              <div className="flex items-center gap-3"><FaWhatsapp /> {DISPLAY_WHATSAPP}</div>
              <div className="flex items-center gap-3"><FaEnvelope /> {CONTACT_EMAIL}</div>
              <div className="flex items-center gap-3"><FaMapMarkerAlt /> Najma, Doha — Serving all Qatar</div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-white text-gray-900 p-6 rounded-lg shadow space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder="Full name" className="w-full border px-3 py-2 rounded" />
              <input required value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="Phone / WhatsApp" className="w-full border px-3 py-2 rounded" />
            </div>
            <input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="Email (optional)" className="w-full border px-3 py-2 rounded" />
            <textarea required value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} placeholder="Describe your request" className="w-full border px-3 py-2 rounded h-28" />
            <div className="flex gap-3 items-center">
              <button type="submit" className="px-4 py-2 bg-yellow-400 text-indigo-900 rounded font-semibold">Send Request</button>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded">Chat on WhatsApp</a>
              <a href={`tel:${CONTACT_PHONE}`} className="px-4 py-2 border rounded">Call</a>
            </div>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="fixed right-5 bottom-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2">
        <FaWhatsapp className="text-xl" /><span className="hidden sm:inline-block font-semibold">WhatsApp</span>
      </a>

      {/* ================= Footer ================= */}
      <footer className="bg-gray-100 text-sm text-gray-700 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-md object-cover" />
              <div>
                <div className="font-bold text-indigo-700">Qatar Services</div>
                <div className="text-xs">Trusted • Local • Professional</div>
              </div>
            </div>
            <p className="mt-4 text-sm">Comprehensive services for homes, businesses and events across Qatar.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#services" className="hover:text-indigo-700">Services</a></li>
              <li><a href="#products" className="hover:text-indigo-700">Products</a></li>
              <li><a href="#clients" className="hover:text-indigo-700">Clients</a></li>
              <li><a href="#contact" className="hover:text-indigo-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <div className="text-sm space-y-2">
              <div>Phone: {CONTACT_PHONE}</div>
              <div>WhatsApp: {DISPLAY_WHATSAPP}</div>
              <div>Email: {CONTACT_EMAIL}</div>
              <div className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} Qatar Services. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= Service Gallery Modal ================= */}
      {openService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold">{openService.title}</h3>
                <p className="text-sm text-gray-600">{openService.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prevGallery} className="p-2 rounded hover:bg-gray-100"><FaChevronLeft /></button>
                <button onClick={nextGallery} className="p-2 rounded hover:bg-gray-100"><FaChevronRight /></button>
                <button onClick={closeModal} className="p-2 rounded hover:bg-gray-100 text-gray-600"><FaTimes /></button>
              </div>
            </div>

            <div className="bg-gray-900/90 p-4">
              <div className="relative w-full pb-[56.25%] bg-black rounded overflow-hidden">
                {openService.media && openService.media[galleryIndex] && openService.media[galleryIndex].type === "image" ? (
                  <img src={openService.media[galleryIndex].src} alt="gallery" className="absolute inset-0 w-full h-full object-contain" />
                ) : openService.media && openService.media[galleryIndex] && openService.media[galleryIndex].type === "video" ? (
                  <video controls className="absolute inset-0 w-full h-full object-contain bg-black">
                    <source src={openService.media[galleryIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white">No media</div>
                )}
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto p-1">
                {openService.media && openService.media.map((m, idx) => (
                  <button key={idx} onClick={() => setGalleryIndex(idx)} className={`flex-shrink-0 rounded ${idx === galleryIndex ? "ring-2 ring-indigo-500" : ""}`} aria-label={`Thumbnail ${idx + 1}`}>
                    {m.type === "image" ? (
                      <img src={m.src} alt={`thumb-${idx}`} className="w-24 h-16 object-cover rounded" />
                    ) : (
                      <div className="w-24 h-16 bg-black/80 rounded flex items-center justify-center text-white"><FaPlay /></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <a href="#contact" onClick={() => { closeModal(); }} className="px-4 py-2 bg-yellow-400 text-indigo-900 rounded font-semibold">Request Quote</a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20a%20quote%20for%20${encodeURIComponent(openService.title)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded">Chat WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
