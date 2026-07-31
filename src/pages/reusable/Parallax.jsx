import { Parallax } from "react-parallax";
import React from "react";
import { FaBuilding } from "react-icons/fa";

const ParallaxSection = ({ imagePath, title, subTitle }) => {
  return (
    <Parallax bgImage={imagePath} strength={400}>
      <div className="h-[300px] md:h-[400px] lg:h-[500px] relative">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-3xl mx-auto">
            {/* Accent badge */}
            <div className="inline-flex items-center gap-2 bg-[#8A1538]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-white/10">
              <FaBuilding size={10} />
              Ehan Tech Qatar
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {title}
            </h1>

            {/* Maroon accent line */}
            <div className="w-16 h-1 bg-[#8A1538] mx-auto mt-4 rounded-full" />

            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
