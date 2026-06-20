import { useRef, useState } from "react";
import { motion } from "framer-motion";

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
      className="border-b border-gray-300 mb-4 overflow-hidden cursor-pointer"
      onClick={handleToggle}
    >
      <h4 className="flex justify-between items-center text-lg font-semibold text-gray-800 py-4 hover:text-blue-600 transition-colors duration-300">
        {faq.q}
        <span className="ml-2">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </h4>
      <div
        ref={answerElRef}
        className="transition-all duration-500 ease-in-out"
        style={isOpen ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-600 pb-4">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqCategories = [
    {
      category: "Curtains & Carpets",
      faqs: [
        { q: "Do you provide custom-made curtains?", a: "Yes, we offer tailor-made curtains based on your measurements, fabric selection, and desired design style." },
        { q: "What types of carpets are available?", a: "We offer Persian, shaggy, wall-to-wall, office, prayer, and custom logo carpets." },
        { q: "Is installation included for carpets and curtains?", a: "Yes, we offer free fitting and installation for most curtain and carpet orders within Qatar." }
      ]
    },
    {
      category: "UPVC & Vinyl Flooring",
      faqs: [
        { q: "Is UPVC flooring water-resistant?", a: "Yes, UPVC flooring is highly water-resistant, making it ideal for kitchens, bathrooms, and commercial areas." },
        { q: "Do you offer both supply and installation?", a: "Yes, our team handles full delivery and professional installation for all types of flooring solutions." }
      ]
    },
    {
      category: "Sofas, Beds & Majlis",
      faqs: [
        { q: "Can I customize the size and color of my sofa or majlis?", a: "Absolutely. You can choose fabric, color, foam type, and size to match your room style perfectly." },
        { q: "Do you offer traditional Arabic majlis designs?", a: "Yes, we specialize in custom Arabic majlis with luxurious fabrics, embroidery, and premium foam." }
      ]
    },
    {
      category: "Office & Home Furniture",
      faqs: [
        { q: "What kind of office furniture do you provide?", a: "We provide desks, workstations, executive chairs, meeting tables, partitions, and storage units." },
        { q: "Can I request space-saving furniture for small rooms?", a: "Yes, we design compact and multi-functional furniture for apartments and small spaces." }
      ]
    },
    {
      category: "Tents, Cabinets & Outdoor Items",
      faqs: [
        { q: "What types of tents do you supply?", a: "We supply party tents, majlis tents, and heavy-duty weatherproof outdoor tents." },
        { q: "Do you make wooden and aluminum cabinets?", a: "Yes, we offer customized cabinets in wood, MDF, and aluminum for kitchens, offices, and wardrobes." }
      ]
    },
    {
      category: "Parking Shades & Canopies",
      faqs: [
        { q: "Are your parking shades durable in harsh weather?", a: "Yes, we use UV-blocking HDPE/PVC fabrics and strong steel structures built to withstand Qatar's climate." },
        { q: "Can I get a custom size or design for parking shades?", a: "Yes, we design and install parking solutions tailored to your space and aesthetic." }
      ]
    },
    {
      category: "Customization & Design",
      faqs: [
        { q: "Can I submit a photo or sketch for a custom order?", a: "Yes, you can send us references and our team will evaluate and replicate your desired design." },
        { q: "Do you offer 3D design services?", a: "Yes, for large or premium orders, we offer 2D/3D design previews before production." }
      ]
    },
    {
      category: "Delivery & Installation",
      faqs: [
        { q: "Do you deliver across Qatar?", a: "Yes, we deliver to all areas. Free delivery is available for large orders, while a small fee applies to smaller ones." },
        { q: "Is fitting and installation included?", a: "Yes, most of our items come with free fitting and professional installation services." }
      ]
    },
    {
      category: "Warranty, Maintenance & Support",
      faqs: [
        { q: "Do your products come with warranty?", a: "Yes, our products come with warranties ranging from 1 to 5 years depending on the item." },
        { q: "Do you offer post-installation maintenance?", a: "Yes, we provide repair and maintenance services on request, including sofa reupholstery and fixture adjustments." }
      ]
    },
    {
      category: "Payment & Returns",
      faqs: [
        { q: "What payment options do you support?", a: "We accept cash, card, bank transfer, and mobile payment apps such as QPay." },
        { q: "Can I return or exchange items?", a: "Returns are accepted for unused, non-custom items within 7 days. Custom-made orders are non-returnable unless defective." }
      ]
    }
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mt-2">Get answers about our products, services, installation & policies.</p>
      </motion.div>

      {faqCategories.map((cat, index) => (
        <div key={index} className="mb-14">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">{cat.category}</h2>
          <div className="max-w-3xl mx-auto">
            {cat.faqs.map((faq, i) => (
              <FaqsCard key={i} faq={faq} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
