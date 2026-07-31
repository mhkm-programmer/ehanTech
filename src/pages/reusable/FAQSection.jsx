import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaQuestionCircle } from "react-icons/fa";

const FaqsCard = ({ faq }) => {
  const answerElRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleToggle = () => {
    const height = answerElRef.current?.childNodes[0]?.offsetHeight || 0;
    setIsOpen(!isOpen);
    setAnswerH(`${height + 20}px`);
  };

  return (
    <div
      className="border-b border-gray-200 mb-4 overflow-hidden cursor-pointer group"
      onClick={handleToggle}
    >
      <h4 className="flex justify-between items-center text-base sm:text-lg font-semibold text-gray-800 py-4 hover:text-[#8A1538] transition-colors duration-300">
        <span className="flex items-center gap-2">
          <FaQuestionCircle className="text-[#8A1538] text-sm shrink-0" />
          {faq.q}
        </span>
        <span className="ml-2 shrink-0">
          {isOpen ? (
            <svg className="w-5 h-5 text-[#8A1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#8A1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </h4>
      <div
        ref={answerElRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={isOpen ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500 pb-4 text-sm sm:text-base leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqCategories = [
    {
      category: "Civil Construction & Fit-Outs",
      faqs: [
        { q: "What types of construction projects do you handle?", a: "Ehan Tech handles villas, offices, commercial buildings, renovations, tile & marble work, gypsum ceilings, partitions, and complete interior fit-outs across Qatar." },
        { q: "Do you provide MME-approved contracting services?", a: "Yes, we are fully licensed by the Ministry of Municipality & Environment (MME) and Civil Defence certified for all contracting work." },
      ]
    },
    {
      category: "Aluminium & Glass Works",
      faqs: [
        { q: "Do you install aluminium doors and windows?", a: "Yes, we supply and install custom aluminium doors, windows, glass partitions, shower glass, mirrors, and curtain walls for residential and commercial properties." },
        { q: "Can you do custom glass partitions for offices?", a: "Absolutely. We design and install framed and frameless glass partitions with various finishing options." },
      ]
    },
    {
      category: "Tents, Pergolas & Outdoor",
      faqs: [
        { q: "What types of tents do you supply?", a: "We supply party tents, Arabic majlis tents, heavy-duty outdoor tents, pergolas, car parking shades, and canopies built to withstand Qatar's climate." },
        { q: "Can I get a custom-sized parking shade?", a: "Yes, we design and install custom parking shade solutions tailored to your space and requirements." },
      ]
    },
    {
      category: "Furniture & Interior",
      faqs: [
        { q: "Do you provide custom furniture?", a: "Yes, we offer tailor-made sofas, beds, wardrobes, majlis seating, office furniture, and home furniture with your choice of fabric, color, and size." },
        { q: "Do you handle both home and office furniture?", a: "Yes, we provide complete furniture solutions for homes, villas, apartments, offices, and commercial spaces." },
      ]
    },
    {
      category: "Cleaning & Maintenance",
      faqs: [
        { q: "What cleaning services do you offer?", a: "We offer housekeeping, office cleaning, deep cleaning, villa cleaning, AC maintenance, sanitization, water tank cleaning, and waste management across Qatar." },
        { q: "Are your cleaning staff trained and insured?", a: "Yes, all our cleaning staff are professionally trained, vetted, and fully insured for your peace of mind." },
      ]
    },
    {
      category: "Manpower Supply",
      faqs: [
        { q: "What types of workers can you supply?", a: "We supply general laborers, skilled workers (carpenters, electricians, plumbers, painters, welders, masons), supervisors, foremen, and event crew." },
        { q: "How quickly can you deploy workers?", a: "We can deploy general laborers within 24 hours and skilled workers within 48 hours depending on availability." },
      ]
    },
    {
      category: "Events & Exhibitions",
      faqs: [
        { q: "Do you provide event setup services?", a: "Yes, we offer stage setup, exhibition booth design & fabrication, wedding decoration, lighting, sound systems, seating, and full event coordination." },
        { q: "Can you build custom exhibition booths?", a: "Yes, we design and fabricate custom exhibition booths, kiosks, and display stands for trade shows and expos in Qatar." },
      ]
    },
    {
      category: "Digital Services",
      faqs: [
        { q: "What digital services do you provide?", a: "We offer web development, graphic design, SEO, social media management, Google Ads, photography, videography, and branding solutions." },
        { q: "Can you build an e-commerce website for my business?", a: "Yes, we develop custom e-commerce websites with payment gateway integration, product management, and SEO optimization." },
      ]
    },
    {
      category: "Warranty & Support",
      faqs: [
        { q: "Do your products come with warranty?", a: "Yes, our products come with warranties ranging from 1 to 5 years depending on the type of work or product." },
        { q: "Do you offer post-installation support?", a: "Yes, we provide maintenance, repair, and after-service support on request for all our projects." },
      ]
    },
    {
      category: "Payment & Booking",
      faqs: [
        { q: "What payment options do you accept?", a: "We accept cash, bank transfer, and card payments. Custom payment plans can be arranged for large projects." },
        { q: "How can I book a service or consultation?", a: "You can contact us via WhatsApp at +974 5075 5702, email info.etcts@gmail.com, or use the contact form on our website." },
      ]
    }
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-3">
          Frequently Asked <span className="text-[#8A1538]">Questions</span>
        </h1>
        <p className="text-gray-500 text-base max-w-2xl mx-auto">
          Get answers about our construction, furniture, cleaning, manpower, events, and digital services across Qatar.
        </p>
      </motion.div>

      {faqCategories.map((cat, index) => (
        <div key={index} className="mb-12 last:mb-0">
          <h2 className="text-xl md:text-2xl font-bold text-[#8A1538] mb-6 text-center border-b border-gray-100 pb-3">
            {cat.category}
          </h2>
          <div className="max-w-3xl mx-auto">
            {cat.faqs.map((faq, i) => (
              <FaqsCard key={i} faq={faq} />
            ))}
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="text-center mt-14 pt-8 border-t border-gray-100">
        <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
        <a
          href="https://wa.me/97450755702"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8A1538] text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all shadow-lg"
        >
          <FaWhatsapp size={18} className="text-[#25D366]" /> Ask Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
