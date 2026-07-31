import React, { memo } from "react";
import {
  FaHardHat, FaTrophy, FaUsers, FaHandshake,
  FaBuilding, FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import PopularServices from "./PopularServices";
import NewServices from "./newServices";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscribeContact from "../contact/SubscreibeContact";
import AnimatedCounter from "../reusable/AnimatedCounter";


const Home = () => {
  return (
    <>
      <PageTitle title="Ehan Tech Construction and Trading Services | Home" />

      {/* ════════════════════════════════════════ */}
      {/*  1. HERO                                */}
      {/* ════════════════════════════════════════ */}
      <section>
        <HeroSlider />
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  2. LIVE STATS COUNTER                  */}
      {/* ════════════════════════════════════════ */}
      <section className="relative z-20 -mt-12 md:-mt-16 mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-5 sm:p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-[#8A1538] mb-1 md:mb-2 flex justify-center"><FaHardHat size={24} /></div>
              <AnimatedCounter value="250" suffix="+" />
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">Projects Completed</div>
            </div>
            <div className="p-5 sm:p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-[#8A1538] mb-1 md:mb-2 flex justify-center"><FaTrophy size={24} /></div>
              <AnimatedCounter value="15" suffix="+" />
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">Years of Excellence</div>
            </div>
            <div className="p-5 sm:p-6 md:p-8 text-center border-b md:border-b-0 md:border-r border-gray-100 md:border-r-0">
              <div className="text-[#8A1538] mb-1 md:mb-2 flex justify-center"><FaUsers size={24} /></div>
              <AnimatedCounter value="120" suffix="+" />
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">Skilled Workforce</div>
            </div>
            <div className="p-5 sm:p-6 md:p-8 text-center">
              <div className="text-[#8A1538] mb-1 md:mb-2 flex justify-center"><FaHandshake size={24} /></div>
              <AnimatedCounter value="98" suffix="%" />
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  3. ABOUT BRIEF                         */}
      {/* ════════════════════════════════════════ */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#8A1538] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">About Ehan Tech</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 md:mt-4 mb-3 md:mb-4 leading-tight">
              Premier Contracting & Trading <span className="text-[#8A1538]">Enterprise in Qatar</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed px-2">
              A Doha-based multi-disciplinary company delivering end-to-end solutions across civil engineering,
              interior fit-outs, aluminium & glass works, tentage, furniture, cleaning, manpower supply,
              events, and digital services. Licensed by <strong className="text-gray-700">MME</strong>, Qatar Civil Defence, and ISO certified.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  4. POPULAR SERVICES                    */}
      {/* ════════════════════════════════════════ */}
      <section>
        <PopularServices />
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  5. NEW SERVICES                        */}
      {/* ════════════════════════════════════════ */}
      <section>
        <NewServices />
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  6. WHY CHOOSE US                       */}
      {/* ════════════════════════════════════════ */}
      <section>
        <WhyChoose />
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  7. OUR CLIENTS                         */}
      {/* ════════════════════════════════════════ */}
      <section>
        <OurClient />
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  8. CUSTOMER REVIEWS                    */}
      {/* ════════════════════════════════════════ */}
      <section>
        <CustomerReviews />
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  9. CONTACT / SUBSCRIBE                 */}
      {/* ════════════════════════════════════════ */}
      <section>
        <SubscribeContact />
      </section>


    </>
  );
};

export default memo(Home);
