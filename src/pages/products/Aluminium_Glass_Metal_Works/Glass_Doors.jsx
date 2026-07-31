import {
  FaDoorOpen,
  FaBuilding,
  FaGlassMartini,
  FaShieldAlt,
  FaTools,
  FaRulerCombined,
  FaCertificate,
  FaEye,
  FaLock,
  FaWhatsapp,
  FaCheckCircle,
  FaHardHat,
  FaWindowRestore,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Glass_Doors = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Glass Doors | Ehan Tech Construction & Trading Services Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Glass Doors Qatar"
        subTitle="Elegant Design. Premium Quality. Delivered Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Premium Glass Doors <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides complete glass door solutions in Qatar. We specialize in sliding glass doors, swing glass doors, framed & frameless glass doors for villas, offices, shops, and commercial properties.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaDoorOpen size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Sliding Glass Doors", desc: "Smooth-glide glass doors for patios, balconies & entrances." },
            { icon: <FaGlassMartini size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Swing Glass Doors", desc: "Elegant hinged glass doors for interiors & exteriors." },
            { icon: <FaEye size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Frameless Glass Doors", desc: "Sleek frameless glass doors for a modern minimalist look." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Commercial Glass Doors", desc: "Heavy-duty glass doors for shops, offices & hotels." },
            { icon: <FaLock size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Automatic Glass Doors", desc: "Sensor-activated automatic glass doors for commercial use." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Custom Glass Doors", desc: "Bespoke glass doors made to your exact specifications." },
            { icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Precision Fitting", desc: "Accurate measurement and professional installation." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Safety Glass", desc: "Tempered & laminated safety glass for all doors." },
            { icon: <FaWindowRestore size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Door Repair", desc: "Expert repair & replacement for all glass door types." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100">
              {icon}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Glass Door Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Sliding Glass Doors","Swing Glass Doors","Frameless Glass Doors","Framed Glass Doors","Automatic Glass Doors","Commercial Glass Doors","French Glass Doors","Patio Glass Doors","Balcony Glass Doors","Glass Entrance Doors","Interior Glass Doors","Shower Glass Doors","Custom Glass Doors","Glass Door Repair","Glass Replacement","Hardware Replacement","Door Track Repair","Glass Door Installation"].map((s, i) => (
              <div key={i} className="bg-[#f9f5f0] p-5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 flex items-center gap-3">
                <FaCheckCircle className="text-[#8A1538] shrink-0" size={18} />
                <span className="font-semibold text-gray-800 text-sm">{s}</span>
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
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">Quality glass doors, modern designs and professional installation.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[{title:"Free Inspection",desc:"No-cost assessment"},{title:"Custom Design",desc:"Made to your specs"},{title:"Safety Glass",desc:"Tempered & laminated"},{title:"Professional Team",desc:"Skilled installers"},{title:"On-Time Delivery",desc:"On schedule"},{title:"Fair Pricing",desc:"No hidden costs"},{title:"After-Service",desc:"Warranty support"},{title:"Fully Insured",desc:"Full coverage"}].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Glass Doors in Qatar?</h2>
        <p className="text-[#fbe29f] text-lg mb-8 max-w-xl mx-auto">Contact Ehan Tech for a free quote.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/97450755702" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] transition-all shadow-xl flex items-center gap-2">
            <FaWhatsapp size={20} className="text-[#25D366]" /> Get a Free Quote
          </a>
          <NavLink to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:text-[#8A1538] transition-all">
            Contact Us
          </NavLink>
        </div>
        <p className="mt-6 text-gray-200 text-sm">Serving all of Qatar • MME Licensed • ISO Certified</p>
      </section>
    </div>
  );
};

export default Glass_Doors;
