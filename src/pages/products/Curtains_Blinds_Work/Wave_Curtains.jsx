import {
  FaWindowRestore,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaRulerCombined,
  FaCertificate,
  FaStar,
  FaEye,
  FaWhatsapp,
  FaCheckCircle,
  FaHardHat,
  FaWaveSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Wave_Curtains = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Wave Curtains | Ehan Tech Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Wave Curtains Qatar"
        subTitle="Modern Waves. Clean Lines. Delivered Across Qatar."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Premium Wave Curtains <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides complete wave curtain solutions in Qatar. We specialize in modern wave-pleat curtains, wave fold drapes, ripple fold curtains, and custom wave curtains for villas, hotels, offices, and contemporary interiors.
        </p>
      </section>

      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaWaveSquare size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Wave Pleat Curtains", desc: "Modern wave-pleat design for clean architectural lines." },
            { icon: <FaWindowRestore size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Ripple Fold", desc: "Ripple fold curtains for contemporary spaces." },
            { icon: <FaEye size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Sheer Waves", desc: "Light sheer wave curtains for soft elegance." },
            { icon: <FaStar size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Blackout Waves", desc: "Wave curtains with blackout lining." },
            { icon: <FaBuilding size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Commercial Waves", desc: "Wave curtains for hotels & offices." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Custom Made", desc: "Bespoke wave curtains to your size." },
            { icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Free Measurement", desc: "Professional on-site measurement." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Quality Fabrics", desc: "Premium wave curtain materials." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Expert Installation", desc: "Professional fitting by experts." },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Wave Curtain Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Wave Pleat Curtains","Ripple Fold Curtains","Sheer Wave Curtains","Blackout Wave Curtains","Villa Wave Curtains","Hotel Wave Curtains","Office Wave Curtains","Living Room Waves","Bedroom Waves","Custom Wave Curtains","Wave Track System","Wave Repair","Track Installation","Free Measurement","Free Consultation","Wave Curtain Fabrics","Motorized Waves","Wave Solutions"].map((s, i) => (
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
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">Quality wave curtains, expert fitting and professional service.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[{title:"Free Measurement",desc:"No-cost site visit"},{title:"Custom Made",desc:"Made to your size"},{title:"Modern Design",desc:"Contemporary styles"},{title:"Expert Fitting",desc:"Skilled installers"},{title:"On-Time Delivery",desc:"On schedule"},{title:"Fair Pricing",desc:"No hidden costs"},{title:"After-Service",desc:"Warranty support"},{title:"Fully Insured",desc:"Full coverage"}].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Wave Curtains in Qatar?</h2>
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

export default Wave_Curtains;
