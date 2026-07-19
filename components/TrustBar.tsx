export default function TrustBar() {
  const items = [
    "⭐ 5.0 Rated on Tripadvisor",
    "🚘 100% Private Tours",
    "👨‍✈️ Professional Chauffeurs",
    "🏛️ Licensed Tour Guides",
    "📞 24/7 WhatsApp Support",
    "💰 Transparent Pricing",
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "28px 20px",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "#f8f9fb",
              fontWeight: 600,
              color: "#08142d",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}