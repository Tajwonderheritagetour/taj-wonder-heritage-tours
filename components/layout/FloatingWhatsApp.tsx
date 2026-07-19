"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917830716981"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,.25)",
        zIndex: 9999,
        transition: "0.3s",
      }}
      title="Chat on WhatsApp"
    >
      💬
    </a>
  );
}