import {
  FaLaptop,
  FaCode,
  FaGlobe,
  FaShieldAlt,
  FaTools,
  FaRulerCombined,
  FaCertificate,
  FaMobileAlt,
  FaShoppingCart,
  FaPaintBrush,
  FaSearch,
  FaCog,
  FaWhatsapp,
  FaCheckCircle,
  FaHardHat,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Website_Development = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Website Development | Ehan Tech Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Website Development Qatar"
        subTitle="Modern Websites. Powerful Solutions. Delivered Across Qatar."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Professional Website Development <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides website development services in Qatar. We specialize in custom website design, e-commerce development, responsive web development, CMS solutions, and web applications for businesses across Qatar.
        </p>
      </section>

      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaLaptop size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Custom Websites", desc: "Bespoke website design & development." },
            { icon: <FaShoppingCart size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "E-Commerce Sites", desc: "Online stores & shopping platforms." },
            { icon: <FaMobileAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Responsive Design", desc: "Mobile-friendly & responsive websites." },
            { icon: <FaPaintBrush size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "UI/UX Design", desc: "User-friendly interface & experience." },
            { icon: <FaCog size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "CMS Development", desc: "WordPress, Shopify & custom CMS." },
            { icon: <FaCode size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Web Applications", desc: "Custom web apps & portals." },
            { icon: <FaSearch size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "SEO Optimization", desc: "Search engine friendly websites." },
            { icon: <FaGlobe size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Domain & Hosting", desc: "Domain registration & hosting setup." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Maintenance & Support", desc: "Website updates & technical support." },
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
            Our Website Development Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Custom Website Design",
              "Responsive Websites",
              "E-Commerce Development",
              "WordPress Development",
              "Shopify Development",
              "Web Application Development",
              "Landing Page Design",
              "Business Websites",
              "Portfolio Websites",
              "Corporate Websites",
              "CMS Integration",
              "Payment Gateway Integration",
              "API Integration",
              "Website Redesign",
              "SEO Optimization",
              "Website Maintenance",
              "Domain Registration",
              "Web Hosting Setup",
            ].map((service, index) => (
              <div key={index} className="bg-[#f9f5f0] p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaCertificate className="text-[#8A1538] mb-3" size={28} />
                <h3 className="font-semibold text-lg text-gray-900">{service}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Professional web development in Qatar.
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
            We deliver modern, responsive websites with clean code and professional design.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Modern Design",
              "Responsive Layouts",
              "Clean Code",
              "SEO Friendly",
              "E-Commerce Ready",
              "MME Approved",
              "Ongoing Support",
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
          Need a Website in Qatar?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-200">
          Contact Ehan Tech for professional website development across all of Qatar.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/97450755702"
            className="inline-flex items-center gap-2 bg-white text-[#8A1538] font-bold px-8 py-4 rounded-xl uppercase text-sm tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            <FaWhatsapp size={20} className="text-[#25D366]" /> Start Your Website
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

export default Website_Development;
