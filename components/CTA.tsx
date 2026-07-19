export default function CTA() {
  return (
    <section
      style={{
        background: "#d4af37",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          color: "#08142d",
          marginBottom: "20px",
        }}
      >
        Ready to Explore India?
      </h2>

      <p
        style={{
          fontSize: "20px",
          color: "#08142d",
          maxWidth: "700px",
          margin: "0 auto 35px",
        }}
      >
        Contact Taj Wonder Heritage Tours today and let us create your perfect
        private journey across India.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://wa.me/917830716981"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            padding: "16px 35px",
            borderRadius: "35px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 WhatsApp Us
        </a>

        <a
          href="tel:+917830716981"
          style={{
            background: "#08142d",
            color: "white",
            padding: "16px 35px",
            borderRadius: "35px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📞 Call Now
        </a>
      </div>
    </section>
  );
}