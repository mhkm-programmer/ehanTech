// Scroll-to-top button with Ehan Tech corporate styling
// Appears when user scrolls down, smooth scrolls to top on click

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={backToTop}
      aria-label="Scroll to top"
      className="fixed z-50 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      style={{
        height: 48,
        width: 48,
        borderRadius: 14,
        right: 30,
        bottom: 30,
        display: showScroll ? "flex" : "none",
        backgroundColor: "#8A1538",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FiChevronUp size={24} strokeWidth={3} />
    </button>
  );
};

export default useScrollToTop;
