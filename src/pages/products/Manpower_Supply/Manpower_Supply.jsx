import {
  FaHardHat,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaRulerCombined,
  FaCertificate,
  FaWrench,
  FaBolt,
  FaTint,
  FaFill,
  FaUsers,
  FaUserTie,
  FaUserCog,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Manpower_Supply = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Manpower Supply | Ehan Tech Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Manpower Supply Qatar"
        subTitle="Reliable Workforce. Professional Service. Delivered Across Qatar."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Reliable Manpower Supply <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides complete manpower supply services in Qatar. We specialize in general laborers, skilled workers, carpenters, electricians, plumbers, painters, supervisors, and event crew for construction, maintenance, and industrial projects across Qatar.
        </p>
      </section>

      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "General Labor Supply", desc: "Reliable laborers for construction & sites." },
            { icon: <FaUserCog size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Skilled Workers", desc: "Technicians, masons & equipment operators." },
            { icon: <FaWrench size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Carpenters", desc: "Experienced carpenters for all woodwork." },
            { icon: <FaBolt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Electricians", desc: "Licensed electricians for wiring & maintenance." },
            { icon: <FaTint size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Plumbers", desc: "Expert plumbers for drainage & water systems." },
            { icon: <FaFill size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Painters", desc: "Professional painters for interior & exterior." },
            { icon: <FaUserTie size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Supervisors & Foremen", desc: "Experienced site supervisors & coordinators." },
            { icon: <FaUsers size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Event Crew", desc: "Setup, stewards & hospitality staff." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Bulk Manpower", desc: "Large teams for projects & shutdowns." },
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
            Our Manpower Supply Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "General Laborers",
              "Skilled Technicians",
              "Carpenters",
              "Electricians",
              "Plumbers",
              "Painters",
              "Masons",
              "Welders",
              "Fabricators",
              "Equipment Operators",
              "Site Supervisors",
              "Foremen",
              "Project Coordinators",
              "Event Staff",
              "Hospitality Crew",
              "Security Guards",
              "Drivers",
              "Cleaners",
            ].map((service, index) => (
              <div key={index} className="bg-[#f9f5f0] p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaCertificate className="text-[#8A1538] mb-3" size={28} />
                <h3 className="font-semibold text-lg text-gray-900">{service}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Professional manpower supply in Qatar.
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
            We provide reliable manpower with professional management, quick deployment, and quality assurance.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Quick Deployment",
              "Trained Workforce",
              "Flexible Contracts",
              "24/7 Support",
              "Safety Compliant",
              "MME Approved",
              "Bulk Supply",
              "Client Satisfaction",
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
          Need Manpower for Your Project in Qatar?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-200">
          Contact Ehan Tech for general laborers, skilled workers, supervisors, and event crew across all of Qatar.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/97450755702"
            className="inline-flex items-center gap-2 bg-white text-[#8A1538] font-bold px-8 py-4 rounded-xl uppercase text-sm tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            <FaWhatsapp size={20} className="text-[#25D366]" /> Request Manpower
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

export default Manpower_Supply;
