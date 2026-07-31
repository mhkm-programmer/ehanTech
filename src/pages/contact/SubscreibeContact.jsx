import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaClock, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const SubscribeContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_7b92lcx',
        'template_k6p49ij',
        e.target,
        'wqQwMjjepKRfJ6ah-'
      )
      .then(
        () => {
          setStatus('Thank you for contacting Ehan Tech. We will respond within 24 hours.');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Something went wrong. Please try again or call us directly.');
        }
      );
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Get In Touch</span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
          Let’s Discuss Your <span className="text-[#8A1538]">Project</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          From civil construction and interior fit-outs to manpower supply and event solutions —
          <strong className="text-[#8A1538]"> Ehan Tech</strong> is your trusted partner across Qatar.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-[#f9f5f0] rounded-2xl shadow-lg border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded-xl flex items-center justify-center shadow-md">
              <FaBuilding className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Ehan Tech</h3>
              <p className="text-[#8A1538] text-[10px] font-bold uppercase tracking-[0.15em]">Construction & Trading Services</p>
            </div>
          </div>

          <div className="space-y-5 text-gray-700 text-sm">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                <FaMapMarkerAlt className="text-[#8A1538]" size={14} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Office Address</p>
                <p className="text-gray-500">Building 30, Street 850, Zone 26<br />Al Mansoura, Doha, State of Qatar</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                <FaEnvelope className="text-[#8A1538]" size={14} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Email</p>
                <a href="mailto:info.etcts@gmail.com" className="text-[#8A1538] hover:text-[#6b102b] transition-colors font-medium">
                  info.etcts@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                <FaPhoneAlt className="text-[#8A1538]" size={14} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Phone</p>
                <a href="tel:+97450755702" className="text-[#8A1538] hover:text-[#6b102b] transition-colors font-medium">
                  +974 5075 5702
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                <FaClock className="text-[#8A1538]" size={14} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Working Hours</p>
                <p className="text-gray-500">Saturday – Thursday: 8:00 AM – 6:00 PM<br />Friday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Connect With Us</p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/97450755702" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm">
                <FaWhatsapp size={18} />
              </a>
              <a href="tel:+97450755702" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#8A1538] hover:bg-[#8A1538] hover:text-white hover:border-[#8A1538] transition-all duration-300 shadow-sm">
                <FaPhoneAlt size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 shadow-sm">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 shadow-sm">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 shadow-sm">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-400 text-sm mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] bg-gray-50 text-gray-800 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] bg-gray-50 text-gray-800 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-600">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] bg-gray-50 text-gray-800 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8A1538] text-white py-3.5 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              <FaEnvelope className="inline mr-2" size={14} />
              Send Message
            </button>
          </form>

          {status && (
            <div className={`text-center text-sm font-semibold mt-4 p-3 rounded-xl ${status.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
              {status}
            </div>
          )}
        </motion.div>
      </section>

      {/* Bottom Bar */}
      <div className="text-center mt-12 text-xs text-gray-400 font-semibold uppercase tracking-wider">
        <span className="inline-flex items-center gap-2">
          <FaBuilding className="text-[#8A1538]" size={12} />
          Ehan Tech Construction and Trading Services W.L.L. — Doha, Qatar
        </span>
      </div>
    </div>
  );
};

export default SubscribeContact;
