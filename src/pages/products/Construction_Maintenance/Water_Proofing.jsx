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
  FaWater,
  FaFill,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Water_Proofing = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Waterproofing Services | Ehan Tech Construction & Trading Services Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Waterproofing Services Qatar"
        subTitle="Protect Your Property. Professional Solutions. Delivered Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Professional Waterproofing <span className="text-[#8A1538]">Solutions in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech Construction and Trading Services provides complete waterproofing solutions in Qatar. We specialize in terrace waterproofing, bathroom waterproofing, basement waterproofing, roof coating, and structural water protection for residential and commercial properties.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaHome size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Terrace Waterproofing", desc: "Complete terrace & rooftop waterproofing with UV-protected coatings." },
            { icon: <FaTint size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Bathroom Waterproofing", desc: "Liquid membrane & sheet membrane waterproofing for wet areas." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Basement Waterproofing", desc: "Below-grade waterproofing for basements, parking & foundations." },
            { icon: <FaFill size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Roof Coating", desc: "Elastomeric roof coatings for heat reflection & leak prevention." },
            { icon: <FaWater size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Swimming Pool Waterproofing", desc: "Specialized pool waterproofing with ceramic & epoxy systems." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Crack Injection", desc: "Epoxy & polyurethane injection for structural crack repair." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Joint Sealants", desc: "Expansion joint sealing with high-performance sealants." },
            { icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Drainage Systems", desc: "Surface & subsurface drainage installation for water management." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Inspection & Testing", desc: "Leak detection, moisture testing & quality verification." },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Waterproofing Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Terrace Waterproofing", "Bathroom Waterproofing", "Basement Waterproofing",
              "Roof Coating", "Swimming Pool Waterproofing", "Balcony Waterproofing",
              "Crack Injection Repair", "Expansion Joint Sealing", "Foundation Waterproofing",
              "Retaining Wall Waterproofing", "Water Tank Coating", "Pipe Leak Repair",
              "Liquid Membrane Application", "Sheet Membrane Installation", "Epoxy Floor Coating",
              "Drainage System Installation", "Leak Detection Service", "Moisture Testing",
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
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">We deliver waterproofing excellence with proven systems, quality materials, and guaranteed workmanship.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "MME Licensed", desc: "Approved by Ministry of Municipality" },
              { title: "Free Inspection", desc: "No-cost leak detection & quote" },
              { title: "Premium Materials", desc: "Sika, BASF & global brands" },
              { title: "Skilled Team", desc: "Trained waterproofing specialists" },
              { title: "10-Year Warranty", desc: "Long-term protection guarantee" },
              { title: "Competitive Pricing", desc: "Transparent rates, no hidden costs" },
              { title: "Quick Response", desc: "Emergency leak repair available" },
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Waterproofing in Qatar?</h2>
        <p className="text-[#fbe29f] text-lg mb-8 max-w-xl mx-auto">Contact Ehan Tech for a free inspection and competitive quote.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/97450755702" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2">
            <FaWhatsapp size={20} className="text-[#25D366]" /> Get a Free Quote
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

export default Water_Proofing;
