import { Link } from "react-router-dom";
import PageTitle from "../reusable/PageTitle";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaHome,
  FaBuilding,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageTitle title="404 Page Not Found | Ehan Tech Qatar" />

      <motion.div
        className="max-w-screen-xl mx-auto px-4 flex items-center justify-start min-h-screen md:px-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Image / Icon Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Large 404 background */}
              <div className="text-[180px] md:text-[250px] font-black text-[#8A1538]/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                404
              </div>
              {/* Icon */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#8A1538]/10 to-[#5a0e24]/10 rounded-full flex items-center justify-center">
                <FaHardHat className="text-[#8A1538] text-8xl md:text-9xl" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Ehan Tech</span>

            <div className="inline-block bg-[#8A1538]/5 text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
              Error 404
            </div>

            <h1 className="text-gray-900 text-3xl md:text-5xl font-black leading-tight">
              Page Not <span className="text-[#8A1538]">Found</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              But don't worry — Ehan Tech is always ready to help you find
              what you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 text-white bg-[#8A1538] hover:bg-[#6b102b] px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-lg"
              >
                <FaHome size={16} />
                Return to Homepage
              </Link>
              <a
                href="https://wa.me/97450755702"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white bg-[#0b0c10] hover:bg-gray-800 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300"
              >
                <FaWhatsapp size={16} className="text-[#25D366]" />
                Get Help
              </a>
            </div>

            <div className="pt-4 flex items-center gap-2 justify-center md:justify-start">
              <FaBuilding className="text-[#8A1538] text-sm" />
              <span className="text-gray-400 text-xs">
                Serving all of Qatar &bull; MME Licensed &bull; ISO Certified
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ErrorPage;
