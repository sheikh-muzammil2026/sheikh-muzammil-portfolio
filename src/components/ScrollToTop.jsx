"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-500 text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:scale-110 transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
