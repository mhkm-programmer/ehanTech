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
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const QatarDivider = () => (
  <div className="h-1.5 bg-white relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: `repeating-linear-gradient(to right, #8A1538 0px, #8A1538 8px, transparent 8px, transparent 10px)` }} />
  </div>
);

const Construction_Maintenance = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">

      <PageTitle title="Construction & Maintenance Services | Ehan Tech Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Construction & Maintenance Services Qatar"
        subTitle="Quality Builds. Trusted Maintenance. Delivered Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Premier Construction & <span className="text-[#8A1538]">Maintenance Services</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech Construction and Trading Services provides complete construction, renovation, and maintenance solutions in Qatar. We specialize in new builds, villa renovations, office fit-outs, tile & marble works, waterproofing, painting, plumbing, electrical, AC maintenance, and handyman services — all delivered with quality craftsmanship and professional project management.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaHammer size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Construction & Renovation", desc: "New builds, villa renovations, office fit-outs, and structural modifications with premium finishes." },
            { icon: <FaWrench size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Building Maintenance", desc: "Comprehensive maintenance for residential and commercial properties across Qatar." },
            { icon: <FaHome size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Painting Services", desc: "Interior and exterior painting with premium materials and expert finishing." },
            { icon: <FaTint size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Plumbing Services", desc: "Pipe installation, drainage systems, water supply, and repair services." },
            { icon: <FaBolt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Electrical Services", desc: "Wiring, installation, maintenance, and troubleshooting by licensed electricians." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "AC & HVAC Services", desc: "AC installation, repair, coil cleaning, ductwork, and preventive maintenance." },
            { icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Tile & Marble Works", desc: "Premium tile and marble installation for floors, walls, bathrooms, and facades." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Waterproofing", desc: "Terrace, bathroom, basement, and foundation waterproofing solutions." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Handyman Services", desc: "General repairs, maintenance, and handyman services for any property type." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              {icon}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Qatar Divider */}
      <QatarDivider />

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Complete Service List</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Construction Work", "Villa Renovation", "Office Renovation",
              "Tile & Marble Works", "Waterproofing", "Building Maintenance",
              "Painting Services", "Plumbing Services", "Electrical Services",
              "AC Maintenance", "HVAC Services", "Handyman Services",
              "Ceiling Repairs", "Flooring Repairs", "Facade Maintenance",
              "Pool Maintenance", "Carpentry Works", "Masonry Works",
            ].map((service, i) => (
              <div key={i} className="bg-[#f9f5f0] p-5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-gray-100 flex items-center gap-3">
                <FaCheckCircle className="text-[#8A1538] shrink-0" size={18} />
                <span className="font-semibold text-gray-800 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qatar Divider */}
      <QatarDivider />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Why Choose */}
      <section className="bg-[#f9f5f0] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Why Ehan Tech</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">Why Choose Ehan Tech?</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">
            We deliver complete construction and maintenance solutions with quality materials, modern techniques, and professional workmanship — trusted by clients across Qatar.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "MME Licensed", desc: "Approved by Ministry of Municipality & Environment" },
              { title: "Free Site Inspection", desc: "No-cost assessment and detailed quotation" },
              { title: "Quality Materials", desc: "Premium materials from trusted suppliers" },
              { title: "Professional Team", desc: "120+ skilled workers and technicians" },
              { title: "On-Time Delivery", desc: "Projects delivered on schedule, every time" },
              { title: "Competitive Pricing", desc: "Transparent rates with no hidden costs" },
              { title: "Post-Service Support", desc: "Maintenance and after-service support" },
              { title: "Insurance Covered", desc: "Fully insured for your peace of mind" },
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Need Construction or Maintenance in Qatar?
        </h2>
        <p className="text-[#fbe29f] text-lg mb-8 max-w-xl mx-auto">
          Contact Ehan Tech for a free site inspection and competitive quote.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/97450755702"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8A1538] px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#fbe29f] hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-2"
          >
            <FaWhatsapp size={20} className="text-[#25D366]" /> Get a Free Quote
          </a>
          <NavLink
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8A1538] hover:-translate-y-0.5 transition-all"
          >
            Contact Us
          </NavLink>
        </div>
        <p className="mt-6 text-gray-200 text-sm">
          Serving all areas of Doha and Qatar • MME Licensed • ISO Certified
        </p>
      </section>
    </div>
  );
};

export default Construction_Maintenance;
