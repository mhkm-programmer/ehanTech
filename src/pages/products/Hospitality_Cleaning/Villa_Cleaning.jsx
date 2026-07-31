import {
  FaCouch,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaRulerCombined,
  FaCertificate,
  FaBroom,
  FaTint,
  FaTrashAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaHardHat,
  FaSprayCan,
  FaWind,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Villa_Cleaning = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Villa Cleaning | Ehan Tech Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Villa Cleaning Qatar"
        subTitle="Spotless Villas. Premium Service. Delivered Across Qatar."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Professional Villa Cleaning <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides complete villa cleaning services in Qatar. We specialize in full-service villa cleaning, interior & exterior cleaning, window cleaning, pool cleaning, and deep cleaning for luxury villas and residential properties.
        </p>
      </section>

      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaCouch size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Full Villa Cleaning", desc: "Complete interior & exterior villa cleaning." },
            { icon: <FaBroom size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Interior Cleaning", desc: "All rooms, hallways & staircases cleaned." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Exterior Cleaning", desc: "Facade, driveway & outdoor areas." },
            { icon: <FaWind size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Window Cleaning", desc: "All windows inside & out." },
            { icon: <FaTint size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Pool Cleaning", desc: "Pool cleaning & maintenance." },
            { icon: <FaSprayCan size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Deep Cleaning", desc: "Intensive cleaning for entire villa." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Sanitization", desc: "Complete sanitization service." },
            { icon: <FaTrashAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Waste Removal", desc: "Debris & waste removal included." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Scheduled Service", desc: "Weekly, bi-weekly or monthly plans." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100">
              {icon}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Villa Cleaning Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Full Villa Cleaning","Interior Cleaning","Exterior Cleaning","Window Cleaning","Pool Cleaning","Deep Cleaning","Regular Maintenance","Move-In Cleaning","Move-Out Cleaning","Post-Construction","Carpet Cleaning","Upholstery Cleaning","Kitchen Cleaning","Bathroom Cleaning","Facade Cleaning","Garden Cleaning","Sanitization","Pressure Washing"].map((s, i) => (
              <div key={i} className="bg-[#f9f5f0] p-5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 flex items-center gap-3">
                <FaCheckCircle className="text-[#8A1538] shrink-0" size={18} />
                <span className="font-semibold text-gray-800 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews />

      <section className="bg-[#f9f5f0] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Why Ehan Tech</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">Why Choose Ehan Tech?</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">Quality villa cleaning, trained staff and reliable service.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[{title:"Free Quote",desc:"No-cost estimate"},{title:"Full Service",desc:"Interior & exterior"},{title:"Trained Staff",desc:"Professional cleaners"},{title:"Flexible Plans",desc:"Weekly or monthly"},{title:"On-Time",desc:"Punctual service"},{title:"Fair Pricing",desc:"No hidden costs"},{title:"Satisfaction",desc:"100% guaranteed"},{title:"Fully Insured",desc:"Full coverage"}].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <FaHardHat className="text-[#8A1538] text-2xl mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Villa Cleaning in Qatar?</h2>
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

export default Villa_Cleaning;
