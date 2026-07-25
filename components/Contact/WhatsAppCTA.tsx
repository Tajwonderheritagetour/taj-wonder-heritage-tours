export default function WhatsAppCTA() {
  return (
    <section
      style={{
        background: "#08142d",
        color: "#fff",
        textAlign: "center",
        padding: "90px 20px",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "44px",
          marginBottom: "20px",
        }}
      >
        Need an Instant Reply?
      </h2>

      <p
        style={{
          color: "#ddd",
          fontSize: "18px",
          marginBottom: "35px",
        }}
      >
        Chat with us directly on WhatsApp for immediate assistance.
      </p>

      <a
        href="https://wa.me/917830716981"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          padding: "18px 36px",
          borderRadius: "40px",
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        💬 Chat on WhatsApp
      </a>
    </section>
  );
}