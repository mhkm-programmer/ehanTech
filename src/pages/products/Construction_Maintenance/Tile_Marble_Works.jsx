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
  FaThLarge,
  FaCrop,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Tile_Marble_Works = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Tile & Marble Works | Ehan Tech Construction & Trading Services Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Tile & Marble Works Qatar"
        subTitle="Premium Flooring. Expert Installation. Delivered Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Expert Tile & Marble Works <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech Construction and Trading Services specializes in premium tile and marble installation in Qatar. We provide expert flooring, wall tiling, marble cladding, and stone works for villas, offices, hotels, and commercial spaces.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaThLarge size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Floor Tiling", desc: "Premium ceramic, porcelain & vitrified tile installation for all spaces." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Marble Flooring", desc: "Luxury marble flooring installation for villas, lobbies & showrooms." },
            { icon: <FaCrop size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Wall Tiling", desc: "Bathroom, kitchen & feature wall tiling with precision finishing." },
            { icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Marble Cladding", desc: "Exterior & interior marble cladding for facades and feature walls." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Stone Works", desc: "Granite, limestone & natural stone installation for floors and walls." },
            { icon: <FaHome size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Bathroom Tiling", desc: "Complete bathroom tiling including floors, walls & shower areas." },
            { icon: <FaHammer size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Skirting & Trim", desc: "Custom skirting boards, trim & edge profiling for perfect finishes." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Waterproofing", desc: "Pre-installation waterproofing for bathrooms, terraces & wet areas." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Polishing & Sealing", desc: "Marble polishing, sealing & restoration for long-lasting beauty." },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Tile & Marble Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Ceramic Floor Tiling", "Porcelain Tile Installation", "Vitrified Tiles",
              "Marble Flooring", "Marble Cladding", "Granite Installation",
              "Limestone Flooring", "Bathroom Tiling", "Kitchen Backsplash",
              "Wall Tiling", "Feature Wall Cladding", "Mosaic Tiling",
              "Skirting Installation", "Tile Trim & Edging", "Marble Polishing",
              "Tile Grouting", "Waterproofing", "Stone Restoration",
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
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">We deliver tile and marble excellence with precision, quality materials, and skilled craftsmanship.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "MME Licensed", desc: "Approved by Ministry of Municipality" },
              { title: "Free Site Inspection", desc: "No-cost assessment & quote" },
              { title: "Premium Materials", desc: "Direct from trusted suppliers" },
              { title: "Skilled Team", desc: "Expert tile & marble craftsmen" },
              { title: "On-Time Delivery", desc: "Projects completed on schedule" },
              { title: "Competitive Pricing", desc: "Transparent rates, no hidden costs" },
              { title: "Post-Installation Care", desc: "Polishing, sealing & maintenance" },
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Tile & Marble Work in Qatar?</h2>
        <p className="text-[#fbe29f] text-lg mb-8 max-w-xl mx-auto">Contact Ehan Tech for a free site inspection and competitive quote.</p>
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

export default Tile_Marble_Works;
