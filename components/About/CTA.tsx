export default function CTA() {
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
          fontSize: "46px",
          marginBottom: "25px",
        }}
      >
        Ready to Explore India?
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px",
          fontSize: "20px",
          lineHeight: "34px",
          color: "#ddd",
        }}
      >
        Let Taj Wonder Heritage Tours create a personalized journey
        filled with history, culture, luxury, and unforgettable
        memories.
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
          href="/contact"
          style={{
            background: "#d4af37",
            color: "#08142d",
            padding: "18px 38px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          Contact Us
        </a>

        <a
          href="/tours"
          style={{
            background: "#ffffff",
            color: "#08142d",
            padding: "18px 38px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          View Tours
        </a>
      </div>
    </section>
  );
}