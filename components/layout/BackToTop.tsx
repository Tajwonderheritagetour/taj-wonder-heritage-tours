"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{
        position: "fixed",
        right: "24px",
        bottom: "100px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "#08142d",
        color: "#fff",
        fontSize: "22px",
        boxShadow: "0 8px 18px rgba(0,0,0,.25)",
        zIndex: 9998,
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}