import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ value, suffix = "+", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const target = parseInt(value.toString().replace(/[^0-9]/g, ""));
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const stepTime = Math.max(16, duration / target);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-0.5 md:mb-1">
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
