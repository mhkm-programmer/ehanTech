import { Link } from 'react-router-dom';
import PageTitle from '../reusable/PageTitle';
import React from 'react';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageTitle title="Al-FWZ Furniture | 404 Page Not Found" />

      <motion.div
        className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.ibb.co/r03Pv6N/6342464-min.jpg"
              alt="Furniture Page Not Found"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <h1 className="text-[#6B4226] text-3xl font-bold sm:text-4xl">404 - Page Not Found</h1>
            <p className="text-gray-700 text-lg">
              Looks like the page you're searching for doesn’t exist or has been moved.
              But don’t worry — we’ve got plenty of beautiful furniture to explore!
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white bg-[#6B4226] hover:bg-[#8B5A2B] px-6 py-2 rounded-lg font-medium transition duration-200"
            >
              Return to Homepage
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ErrorPage;
