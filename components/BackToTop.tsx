"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
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

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      style={{
        position: "fixed",
        bottom: "110px",
        right: "30px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        background: "#08142d",
        color: "#d4af37",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,.25)",
        zIndex: 9998,
        transition: "all 0.3s ease",
      }}
    >
      ↑
    </button>
  );
}