import {
  FaBorderAll,
  FaBuilding,
  FaPaintRoller,
  FaShieldAlt,
  FaTools,
  FaRulerCombined,
  FaCertificate,
  FaHammer,
  FaLayerGroup,
  FaWhatsapp,
  FaCheckCircle,
  FaHardHat,
  FaThLarge,
  FaImage,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Flooring_Interior_Finishing = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <PageTitle title="Flooring & Interior Finishing | Ehan Tech Qatar" />

      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Flooring & Interior Finishing Qatar"
        subTitle="Beautiful Floors. Perfect Finishes. Delivered Across Qatar."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
          Premium Flooring & Interior Finishing <span className="text-[#8A1538]">in Qatar</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Ehan Tech provides complete flooring and interior finishing solutions in Qatar. We specialize in SPC flooring, vinyl flooring, parquet flooring, carpet installation, wallpaper, gypsum ceilings, wall panels, and partitions for residential and commercial properties.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f9f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaBorderAll size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "SPC Flooring", desc: "Stone Plastic Composite — waterproof, durable & stylish." },
            { icon: <FaLayerGroup size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Vinyl Flooring", desc: "Luxury vinyl tiles & planks for any space." },
            { icon: <FaThLarge size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Parquet Flooring", desc: "Premium wooden parquet for elegant interiors." },
            { icon: <FaHammer size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Carpet Installation", desc: "Broadloom & modular carpet for hotels & offices." },
            { icon: <FaImage size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Wallpaper Installation", desc: "Premium wallpaper & wall coverings for any room." },
            { icon: <FaPaintRoller size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Gypsum Ceilings", desc: "Decorative false ceilings with LED lighting." },
            { icon: <FaTools size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Gypsum Partitions", desc: "Lightweight partition walls for offices." },
            { icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Wall Panels", desc: "3D wall panels & feature wall installations." },
            { icon: <FaHardHat size={36} className="mx-auto mb-4 text-[#8A1538]" />, title: "Interior Finishing", desc: "Complete interior finishing for new builds & renovations." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100">
              {icon}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Flooring & Interior Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["SPC Flooring","Vinyl Flooring","Parquet Flooring","Carpet Installation","Wallpaper Installation","Gypsum Ceiling","Gypsum Partition","False Ceiling","Wall Panels","3D Wall Panels","Feature Walls","Skirting Installation","Floor Preparation","Underlayment","Ceiling Repair","Flooring Repair","Wall Repair","Interior Consultation"].map((s, i) => (
              <div key={i} className="bg-[#f9f5f0] p-5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 flex items-center gap-3">
                <FaCheckCircle className="text-[#8A1538] shrink-0" size={18} />
                <span className="font-semibold text-gray-800 text-sm">{s}</span>
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
          <p className="text-gray-500 max-w-3xl mx-auto mb-10">Quality flooring, expert installation and professional finishing.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[{title:"Free Inspection",desc:"No-cost site visit"},{title:"Premium Materials",desc:"Top brand flooring"},{title:"Expert Installation",desc:"Skilled craftsmen"},{title:"Wide Selection",desc:"SPC, vinyl, parquet & more"},{title:"On-Time Delivery",desc:"On schedule"},{title:"Fair Pricing",desc:"No hidden costs"},{title:"After-Service",desc:"Warranty support"},{title:"Fully Insured",desc:"Full coverage"}].map((item, i) => (
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
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Flooring or Interior Finishing in Qatar?</h2>
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

export default Flooring_Interior_Finishing;
