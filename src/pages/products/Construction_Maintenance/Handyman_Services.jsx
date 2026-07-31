import {
  FaHammer,
  FaBuilding,
  FaHardHat,
  FaShieldAlt,
  FaTools,
  FaRulerCombined,
  FaCertificate,
  FaWrench,
  FaBolt,
  FaTint,
  FaWhatsapp,
  FaCheckCircle,
  FaHome,
  FaPaintRoller,
  FaScrewdriver,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Handyman_Services = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Handyman Services | Ehan Tech Construction & Trading Services Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Handyman Services Qatar"
        subTitle="Fix It Right. Fast & Reliable. Delivered Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Professional Handyman Services <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech Construction and Trading Services provides complete handyman services in Qatar. We specialize in general repairs, maintenance, installation, and fix-it solutions for residential and commercial properties — one call fixes it all.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaWrench size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "General Repairs", desc: "Door, window, furniture & fixture repairs for any property." },
            { icon: <FaHome size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Home Maintenance", desc: "Complete home maintenance from top to bottom." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Assembly Services", desc: "Furniture assembly, shelving, rack & equipment setup." },
            { icon: <FaPaintRoller size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Painting & Touch-ups", desc: "Minor painting, touch-ups & wall repair services." },
            { icon: <FaBolt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Minor Electrical", desc: "Switch, socket, light fixture & fan installation." },
            { icon: <FaTint size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Minor Plumbing", desc: "Faucet repair, drain unclogging & pipe fixes." },
            { icon: <FaScrewdriver size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Installation Services", desc: "TV mounting, curtain rods, shelves & hardware installation." },
            { icon: <FaHammer size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Carpentry Work", desc: "Custom shelving, cabinet repairs & woodwork fixes." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Emergency Fixes", desc: "Same-day emergency repair services for urgent issues." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              {icon}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Handyman Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Door Repairs", "Window Repairs", "Furniture Assembly",
              "Furniture Repair", "TV Mounting", "Curtain Rod Installation",
              "Shelving Installation", "Cabinet Repair", "Drawer Fixing",
              "Painting Touch-ups", "Wall Repair", "Tile Repair",
              "Light Fixture Installation", "Fan Installation", "Socket Repair",
              "Faucet Repair", "Drain Unclogging", "General Maintenance",
            ].map((service, i) => (
              <div key={i} className="bg-[#f9f5f0] p-5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 flex items-center gap-3">
                <FaCheckCircle className="text-[#8A1538] shrink-0" size={18} />
                <span className="font-semibold text-gray-800 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews />

      {/* Why Choose */}
      <section className="bg-[#f9f5f0] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Why Ehan Tech</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">Why Choose Ehan Tech?</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">We deliver handyman excellence with skilled professionals, fast response, and guaranteed work.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "MME Licensed", desc: "Approved by Ministry of Municipality" },
              { title: "Free Estimate", desc: "No-cost assessment & quote" },
              { title: "Same-Day Service", desc: "Fast response for urgent repairs" },
              { title: "Skilled Team", desc: "Multi-trade experienced handymen" },
              { title: "One Call Fixes All", desc: "All trades covered under one roof" },
              { title: "Competitive Pricing", desc: "Transparent rates, no hidden costs" },
              { title: "All of Qatar", desc: "Serving all areas of Doha & beyond" },
              { title: "Fully Insured", desc: "Complete insurance coverage" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <FaHardHat className="text-[#8A1538] text-2xl mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need a Handyman in Qatar?</h2>
        <p className="text-[#fbe29f] text-lg mb-8 max-w-xl mx-auto">Contact Ehan Tech for a free quote — one call fixes it all.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/97450755702" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2">
            <FaWhatsapp size={20} className="text-[#25D366]" /> Book a Handyman
          </a>
          <NavLink to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8A1538] hover:-translate-y-0.5 transition-all">
            Contact Us
          </NavLink>
        </div>
        <p className="mt-6 text-gray-200 text-sm">Serving all of Doha and Qatar • MME Licensed • ISO Certified</p>
      </section>
    </div>
  );
};

export default Handyman_Services;
