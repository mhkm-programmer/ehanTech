import {
  FaCalendarAlt,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaRulerCombined,
  FaCertificate,
  FaUsers,
  FaMusic,
  FaMicrophone,
  FaBullhorn,
  FaChair,
  FaCouch,
  FaLightbulb,
  FaWhatsapp,
  FaCheckCircle,
  FaHardHat,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Events_Exhibitions = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Events & Exhibitions | Ehan Tech Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Events & Exhibitions Qatar"
        subTitle="Memorable Events. Professional Setup. Delivered Across Qatar."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Professional Events & Exhibitions <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides complete events and exhibitions services in Qatar. We specialize in event setup, exhibition booth installation, stage setup, lighting, sound system, seating arrangement, and event management for corporate events, conferences, and exhibitions.
        </p>
      </section>

      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaCalendarAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Event Setup", desc: "Full event setup & decoration services." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Exhibition Booths", desc: "Custom booth design & installation." },
            { icon: <FaMicrophone size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Stage Setup", desc: "Stage construction & decoration." },
            { icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Lighting Systems", desc: "Event lighting & special effects." },
            { icon: <FaMusic size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Sound Systems", desc: "PA systems & audio equipment." },
            { icon: <FaChair size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Seating Arrangement", desc: "Chair & table setup for events." },
            { icon: <FaBullhorn size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Event Management", desc: "End-to-end event coordination." },
            { icon: <FaUsers size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Conference Setup", desc: "Conference hall preparation." },
            { icon: <FaCouch size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Corporate Events", desc: "Corporate gathering & gala setup." },
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
            Our Events & Exhibitions Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Event Setup & Decoration",
              "Exhibition Booth Installation",
              "Stage Construction",
              "Lighting Systems",
              "Sound System Setup",
              "Seating Arrangement",
              "Conference Setup",
              "Corporate Event Setup",
              "Wedding Decoration",
              "Party Setup",
              "Tent & Canopy Setup",
              "Red Carpet Setup",
              "Backdrop Design",
              "Signage & Banners",
              "AV Equipment Setup",
              "Event Staffing",
              "Event Coordination",
              "Post-Event Cleanup",
            ].map((service, index) => (
              <div key={index} className="bg-[#f9f5f0] p-6 rounded-xl shadow hover:shadow-lg transition">
                <FaCertificate className="text-[#8A1538] mb-3" size={28} />
                <h3 className="font-semibold text-lg text-gray-900">{service}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Professional events services in Qatar.
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
            We provide professional event services with creative design and reliable execution.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Creative Designs",
              "Professional Setup",
              "On-Time Delivery",
              "Quality Equipment",
              "Corporate & Social Events",
              "MME Approved",
              "Full Event Coordination",
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
          Planning an Event or Exhibition in Qatar?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-200">
          Contact Ehan Tech for professional event setup and exhibition services across all of Qatar.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/97450755702"
            className="inline-flex items-center gap-2 bg-white text-[#8A1538] font-bold px-8 py-4 rounded-xl uppercase text-sm tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            <FaWhatsapp size={20} className="text-[#25D366]" /> Plan Your Event
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

export default Events_Exhibitions;
