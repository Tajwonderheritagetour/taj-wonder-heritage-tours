export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917830716981?text=Hello%20Taj%20Wonder%20Heritage%20Tours,%20I%20would%20like%20to%20know%20more%20about%20your%20tours."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "65px",
        height: "65px",
        background: "#25D366",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        zIndex: 9999,
      }}
    >
      💬
    </a>
  );
}