import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaWhatsapp, FaBuilding, FaHardHat } from "react-icons/fa";

const serviceOptions = [
  "Civil Construction",
  "Aluminium & Glass Works",
  "Tents & Outdoor Structures",
  "Interior Fit-outs & Flooring",
  "Furniture & Curtains",
  "Cleaning & Maintenance",
  "Manpower Supply",
  "Events & Exhibitions",
  "Digital & Marketing Services",
  "General Inquiry / Other",
];

const HireMeModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-sans fixed inset-0 z-[100] transition-all duration-500"
    >
      {/* Backdrop */}
      <div className="bg-black bg-opacity-60 fixed inset-0 w-full h-full z-[101] backdrop-blur-sm"></div>

      {/* Modal */}
      <main className="flex flex-col items-center justify-center h-full w-full px-4 relative z-[102]">
        <div className="modal-wrapper flex items-center w-full max-w-lg">
          <div className="bg-white max-h-screen shadow-2xl rounded-2xl relative w-full overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaBuilding className="text-white/80 text-xl" />
                    <h5 className="text-white font-bold text-lg">Request a Quote</h5>
                  </div>
                  <p className="text-gray-200 text-xs">Fill in your details and we'll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all shrink-0"
                  aria-label="Close modal"
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">
                    Full Name <span className="text-[#8A1538]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] transition-all"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">
                    Email Address <span className="text-[#8A1538]">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] transition-all"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">Phone Number</label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] transition-all"
                    name="phone"
                    type="tel"
                    placeholder="+974 XXXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">
                    Service Required <span className="text-[#8A1538]">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] transition-all"
                    name="service"
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">Project Details</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] transition-all resize-none"
                    name="message"
                    rows="4"
                    placeholder="Describe your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#8A1538] text-white rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <FaHardHat size={14} />
                    Send Request
                  </button>
                  <a
                    href="https://wa.me/97450755702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-[#0b0c10] text-white rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2"
                    title="Contact via WhatsApp"
                  >
                    <FaWhatsapp size={16} className="text-[#25D366]" />
                  </a>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex justify-between items-center">
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                <FaBuilding className="inline mr-1 text-[#8A1538]" size={10} />
                Ehan Tech Qatar &bull; MME Licensed
              </p>
              <button
                onClick={onClose}
                className="text-[10px] text-gray-400 hover:text-gray-600 font-semibold uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
