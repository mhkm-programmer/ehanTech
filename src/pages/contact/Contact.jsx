import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaLinkedinIn, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import PageTitle from '../reusable/PageTitle';

const Contact = () => {
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
      .then(() => {
        setStatus('Your message has been sent successfully. We will respond within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send. Please call us directly at +974 5075 5702.');
      });
  };

  return (
    <div>
      <PageTitle title="Ehan Tech Construction & Trading Services | Contact Us" />

      {/* ════════════════════════════════════════ */}
      {/*  HERO BANNER                            */}
      {/* ════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <FaBuilding className="text-white text-3xl" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Contact <span className="text-[#fbe29f]">Us</span>
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Reach out to Ehan Tech — we're ready to serve you across Qatar.
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/*  MAIN CONTENT                           */}
      {/* ════════════════════════════════════════ */}
      <div className="container mx-auto py-12 md:py-16 px-4 lg:px-8">
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ═══ MAP + INFO ═══ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-6"
          >
            {/* Map */}
            <div className="h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Ehan Tech Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.123456!2d51.5400557!3d25.2696943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzEwLjkiTiA1McKwMzInMjQuMiJF!5e0!3m2!1sen!2sqa!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              />
            </div>

            {/* Company Info Cards */}
            <div className="bg-[#f9f5f0] rounded-2xl p-6 md:p-8 border border-gray-200 space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded-lg flex items-center justify-center shadow-md">
                  <FaBuilding className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 uppercase tracking-tight">Ehan Tech</h3>
                  <p className="text-[#8A1538] text-[10px] font-bold uppercase tracking-[0.15em]">Construction & Trading Services</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#8A1538] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Office Address</p>
                    <p className="text-gray-500">Building 30, Street 850, Zone 26<br />Al Mansoura, Doha, State of Qatar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-[#8A1538] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Email</p>
                    <a href="mailto:info.etcts@gmail.com" className="text-[#8A1538] hover:text-[#6b102b] transition-colors font-medium">info.etcts@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-[#8A1538] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Phone</p>
                    <a href="tel:+97450755702" className="text-[#8A1538] hover:text-[#6b102b] transition-colors font-medium">+974 5075 5702</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-[#8A1538] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Working Hours</p>
                    <p className="text-gray-500">Saturday – Thursday: 8:00 AM – 6:00 PM<br />Friday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Connect With Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/97450755702", color: "hover:bg-[#25D366] hover:border-[#25D366]" },
                    { icon: <FaPhoneAlt size={18} />, href: "tel:+97450755702", color: "hover:bg-[#8A1538] hover:border-[#8A1538]" },
                    { icon: <FaFacebook size={20} />, href: "https://facebook.com", color: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                    { icon: <FaInstagram size={20} />, href: "https://instagram.com", color: "hover:bg-[#E4405F] hover:border-[#E4405F]" },
                    { icon: <FaLinkedinIn size={20} />, href: "https://linkedin.com", color: "hover:bg-[#0077b5] hover:border-[#0077b5]" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-sm`}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══ CONTACT FORM ═══ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-400 text-sm mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5 flex-1" noValidate>
              <div>
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] bg-gray-50 text-gray-800 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] bg-gray-50 text-gray-800 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A1538]/20 focus:border-[#8A1538] bg-gray-50 text-gray-800 transition-all text-sm resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8A1538] text-white py-3.5 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#6b102b] hover:-translate-y-0.5 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <FaEnvelope size={14} />
                Send Message
              </button>
            </form>

            {status && (
              <div className={`text-center text-sm font-semibold mt-4 p-3 rounded-xl ${status.includes('successfully') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                {status}
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
