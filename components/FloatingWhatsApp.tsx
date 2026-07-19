"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917830716981"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "#25D366",
        color: "#ffffff",
        padding: "14px 18px",
        borderRadius: "60px",
        textDecoration: "none",
        boxShadow: "0 15px 35px rgba(0,0,0,.25)",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#ffffff",
          color: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        💬
      </div>

      <div>
        <div
          style={{
            fontSize: "12px",
            opacity: 0.9,
          }}
        >
          Need Help?
        </div>

        <div
          style={{
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          Chat on WhatsApp
        </div>
      </div>
    </a>
  );
}