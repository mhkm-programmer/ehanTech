import { FaBuilding, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaUserSecret, FaCookieBite, FaDatabase, FaGavel } from "react-icons/fa";

import PageTitle from "../reusable/PageTitle";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const sections = [
    {
      icon: <FaUserSecret size={18} />,
      title: "Information We Collect",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details provided via contact forms, quote requests, or service inquiries.</li>
          <li><strong>Project Details:</strong> Information about your project scope, location, and requirements shared during consultations.</li>
          <li><strong>Usage Data:</strong> Browsing behavior, pages visited, and interaction patterns on our website collected through cookies and analytics tools.</li>
          <li><strong>Communication Records:</strong> Correspondence via email, phone calls, WhatsApp, or other channels for service delivery and support.</li>
        </ul>
      ),
    },
    {
      icon: <FaDatabase size={18} />,
      title: "How We Use Your Information",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>To provide, maintain, and improve our construction, maintenance, and contracting services.</li>
          <li>To respond to your inquiries, quote requests, and service bookings.</li>
          <li>To send project updates, invoices, and service-related communications.</li>
          <li>To comply with legal obligations under Qatar laws and regulations.</li>
          <li>To improve website functionality and user experience through analytics.</li>
          <li>To send marketing communications (only with your explicit consent).</li>
        </ul>
      ),
    },
    {
      icon: <FaCookieBite size={18} />,
      title: "Cookies & Tracking Technologies",
      content: (
        <p className="text-gray-700">
          Our website uses cookies and similar tracking technologies to enhance your browsing experience,
          analyze website traffic, and understand where our visitors come from. You can control cookie
          preferences through your browser settings. Disabling certain cookies may affect website functionality.
          We do not use cookies to collect personal information without your consent.
        </p>
      ),
    },
    {
      icon: <FaShieldAlt size={18} />,
      title: "Data Protection & Security",
      content: (
        <p className="text-gray-700">
          We implement industry-standard security measures to protect your personal information,
          including SSL encryption, secure servers, access controls, and regular security audits.
          Your data is stored securely and accessed only by authorized personnel who need it to
          perform their duties. Despite our best efforts, no method of electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
      ),
    },
    {
      icon: <FaBuilding size={18} />,
      title: "Third-Party Disclosure",
      content: (
        <p className="text-gray-700">
          We do not sell, trade, or transfer your personal information to third parties without your
          consent, except in the following cases:
        </p>
      ),
      extra: (
        <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
          <li>To trusted service providers who assist us in operating our website and business (e.g., hosting, payment processing) — subject to confidentiality agreements.</li>
          <li>When required by law, court order, or governmental regulation in the State of Qatar.</li>
          <li>To protect the rights, property, or safety of Ehan Tech, our clients, or others.</li>
        </ul>
      ),
    },
    {
      icon: <FaGavel size={18} />,
      title: "Your Rights Under Qatar Law",
      content: (
        <p className="text-gray-700">
          In accordance with the <strong>Qatar Personal Data Privacy Law (Law No. 13 of 2016)</strong> and
          other applicable regulations, you have the following rights regarding your personal data:
        </p>
      ),
      extra: (
        <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
          <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Deletion:</strong> Request deletion of your data, subject to legal retention requirements.</li>
          <li><strong>Right to Restrict Processing:</strong> Request limited use of your data under certain circumstances.</li>
          <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider.</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent for processing.</li>
        </ul>
      ),
    },
    {
      icon: <FaDatabase size={18} />,
      title: "Data Retention",
      content: (
        <p className="text-gray-700">
          We retain your personal information only for as long as necessary to fulfill the purposes
          outlined in this policy, or as required by Qatar law. Typically, we retain project-related
          data for <strong>5 years</strong> after project completion to comply with contractual and
          legal obligations. After this period, data is securely deleted or anonymized.
        </p>
      ),
    },
  ];

  return (
    <div>
      <PageTitle title="Ehan Tech Construction & Trading Services | Privacy Policy" />

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  HERO BANNER                                              */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#8A1538] to-[#5a0e24] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <FaShieldAlt className="text-white text-3xl" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#fbe29f] text-sm md:text-base font-medium max-w-2xl mx-auto">
            Ehan Tech Construction and Trading Services W.L.L. — Protecting your privacy and
            safeguarding your personal data in compliance with the laws of the State of Qatar.
          </p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <span className="text-white text-xs font-semibold tracking-wider">
              Last Updated: January 2025
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/*  MAIN CONTENT                                             */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 shadow-lg mb-10"
            variants={sectionVariants}
            custom={0}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8A1538] to-[#5a0e24] rounded-lg flex items-center justify-center shadow-md">
                <FaBuilding className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                  Ehan Tech
                </h2>
                <p className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.15em]">
                  Construction & Trading Services
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Ehan Tech Construction and Trading Services W.L.L.</strong> ("we," "our," or "us")
              is committed to protecting the privacy and confidentiality of your personal information.
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when
              you visit our website or engage our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you consent to the practices described in this policy.
              If you do not agree with any part of this policy, please refrain from using our website
              or providing your personal information.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={sectionVariants}
                custom={index + 1}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8A1538]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#8A1538]">{section.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                      {section.title}
                    </h3>
                    <div className="leading-relaxed">{section.content}</div>
                    {section.extra && <div className="leading-relaxed">{section.extra}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-br from-[#0b0c10] to-[#1a1c23] rounded-xl p-8 md:p-10 mt-10 shadow-xl border border-gray-800"
            variants={sectionVariants}
            custom={sections.length + 1}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#8A1538] rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Us
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              how we handle your personal data, please contact our Data Protection Officer:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#8A1538] shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Building 30, Street 850, Zone 26<br />
                    Al Mansoura, Doha, State of Qatar
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#8A1538] shrink-0" />
                  <a href="tel:+97450755702" className="text-gray-300 text-sm hover:text-[#fbe29f] transition-colors">
                    +974 5075 5702
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#8A1538] shrink-0" />
                  <a href="mailto:info.etcts@gmail.com" className="text-gray-300 text-sm hover:text-[#fbe29f] transition-colors">
                    info.etcts@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-[#8A1538] shrink-0" />
                  <span className="text-gray-300 text-sm">Ehan Tech Construction & Trading Services W.L.L.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider text-center">
                We are committed to resolving any privacy concerns promptly and transparently.
              </p>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="text-center mt-10 text-gray-500 text-xs font-semibold uppercase tracking-wider"
            variants={sectionVariants}
            custom={sections.length + 2}
          >
            <span className="inline-flex items-center gap-2">
              <FaShieldAlt className="text-[#8A1538]" />
              © {new Date().getFullYear()} Ehan Tech Construction and Trading Services W.L.L. — All Rights Reserved.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
