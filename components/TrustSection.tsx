export default function TrustSection() {
  const items = [
    {
      title: "Local Travel Experts",
      text: "More than 8 years of experience creating unforgettable journeys across India.",
      icon: "🧭",
    },
    {
      title: "Private Tours Only",
      text: "Enjoy personalized experiences with private vehicles and flexible itineraries.",
      icon: "🚘",
    },
    {
      title: "Instant Support",
      text: "Quick assistance before, during and after your trip via WhatsApp and Email.",
      icon: "💬",
    },
    {
      title: "Transparent Pricing",
      text: "No hidden charges. Honest prices with excellent service.",
      icon: "💰",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 60px",
        background: "#f8f8f8",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#08142d",
        }}
      >
        Why Travelers Choose Us
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginTop: "15px",
          marginBottom: "60px",
        }}
      >
        Trusted private tours with local knowledge and personalized service.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p
              style={{
                color: "#666",
                lineHeight: "28px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}