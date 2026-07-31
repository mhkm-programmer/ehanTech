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
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Villa_Renovation = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Villa Renovation | Ehan Tech Construction & Trading Services Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Villa Renovation Services Qatar"
        subTitle="Transform Your Villa. Premium Quality. Trusted Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Expert Villa Renovation <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech Construction and Trading Services specializes in complete villa renovation in Qatar. From interior remodeling to exterior facades, we transform your villa with premium materials, modern designs, and professional craftsmanship.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaHammer size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Full Villa Renovation", desc: "Complete interior & exterior renovation from floor to ceiling." },
            { icon: <FaHome size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Interior Remodeling", desc: "Living rooms, bedrooms, kitchens, bathrooms — fully remodeled." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Exterior Facades", desc: "Facade renovation, cladding, painting, and exterior finishes." },
            { icon: <FaPaintRoller size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Painting & Finishing", desc: "Premium interior & exterior painting with long-lasting finishes." },
            { icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Flooring & Tiling", desc: "SPC, vinyl, parquet flooring & marble/tile installation." },
            { icon: <FaWrench size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "MEP Renovation", desc: "Complete electrical, plumbing & AC system upgrades." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Kitchen & Bathroom", desc: "Custom kitchen cabinets, countertops & bathroom fittings." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Waterproofing", desc: "Terrace, bathroom & basement waterproofing solutions." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Structural Changes", desc: "Wall removal, extensions, and structural modifications." },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Villa Renovation Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Full Villa Renovation", "Interior Remodeling", "Exterior Facade",
              "Kitchen Renovation", "Bathroom Renovation", "Living Room Makeover",
              "Bedroom Renovation", "Flooring Installation", "Tile & Marble Work",
              "Painting Services", "Wallpaper Installation", "Gypsum Ceiling",
              "Plumbing Upgrade", "Electrical Upgrade", "AC Ducting",
              "Waterproofing", "Pool Renovation", "Landscaping",
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
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">We deliver villa renovation excellence with quality materials, skilled professionals, and proven project management.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "MME Licensed", desc: "Approved by Ministry of Municipality" },
              { title: "Free Site Inspection", desc: "No-cost assessment & quote" },
              { title: "Quality Materials", desc: "Premium materials from trusted suppliers" },
              { title: "Skilled Team", desc: "120+ experienced professionals" },
              { title: "On-Time Delivery", desc: "Projects completed on schedule" },
              { title: "Competitive Pricing", desc: "Transparent rates, no hidden costs" },
              { title: "Post-Renovation Support", desc: "After-service maintenance & care" },
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Villa Renovation in Qatar?</h2>
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

export default Villa_Renovation;
