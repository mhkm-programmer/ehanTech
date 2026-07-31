import {
  FaUserCog,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaRulerCombined,
  FaCertificate,
  FaWrench,
  FaBolt,
  FaTint,
  FaFill,
  FaHardHat,
  FaUsers,
  FaUserTie,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Skilled_Workers = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Skilled Workers | Ehan Tech Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Skilled Workers Qatar"
        subTitle="Qualified Tradesmen. Professional Service. Delivered Across Qatar."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Qualified Skilled Workers <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides skilled workers across Qatar. We specialize in qualified technicians, masons, welders, fabricators, equipment operators, and tradesmen for construction, maintenance, and industrial projects.
        </p>
      </section>

      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaUserCog size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Technicians", desc: "Qualified technicians for all trades." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Masons", desc: "Experienced masons for construction work." },
            { icon: <FaWrench size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Welders", desc: "Certified welders for metal fabrication." },
            { icon: <FaBolt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Electricians", desc: "Licensed electricians for installations." },
            { icon: <FaTint size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Plumbers", desc: "Expert plumbers for water & drainage." },
            { icon: <FaFill size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Painters", desc: "Professional painters for all surfaces." },
            { icon: <FaUsers size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Fabricators", desc: "Skilled metal & steel fabricators." },
            { icon: <FaUserTie size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Equipment Operators", desc: "Operators for heavy machinery." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "HVAC Technicians", desc: "AC & HVAC installation & maintenance." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Our Skilled Worker Categories
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Masons",
              "Carpenters",
              "Electricians",
              "Plumbers",
              "Welders",
              "Fabricators",
              "Painters",
              "HVAC Technicians",
              "Equipment Operators",
              "Heavy Machinery Operators",
              "Scaffolding Workers",
              "Steel Fixers",
              "Tilers",
              "Gypsum Installers",
              "AC Technicians",
              "Generator Technicians",
              "Mechanical Fitters",
              "Maintenance Technicians",
            ].map((service, index) => (
              <div key={index} className="bg-[#f9f5f0] p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaCertificate className="text-[#8A1538] mb-3" size={28} />
                <h3 className="font-semibold text-lg text-gray-900">{service}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Professional skilled workers in Qatar.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews />

      <section className="bg-[#f9f5f0] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Choose Ehan Tech?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 mb-10">
            We provide verified skilled workers with proper certifications and experience.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Qualified Tradesmen",
              "Experience Verified",
              "Quick Deployment",
              "Flexible Contracts",
              "Safety Compliant",
              "MME Approved",
              "Bulk Supply Available",
              "Satisfaction Guaranteed",
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <FaCheckCircle className="text-[#8A1538] mx-auto mb-3" size={28} />
                <h3 className="font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#8A1538] to-[#5a0e24] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Skilled Workers for Your Project in Qatar?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-200">
          Contact Ehan Tech for qualified technicians, tradesmen, and skilled workers across all of Qatar.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/97450755702"
            className="inline-flex items-center gap-2 bg-white text-[#8A1538] font-bold px-8 py-4 rounded-xl uppercase text-sm tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            <FaWhatsapp size={20} className="text-[#25D366]" /> Request Workers
          </a>
          <NavLink
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:text-[#8A1538] transition-all"
          >
            Contact Us
          </NavLink>
        </div>
        <p className="mt-6 text-gray-200 text-sm">Serving all of Qatar • MME Licensed • ISO Certified</p>
      </section>
    </div>
  );
};

export default Skilled_Workers;
