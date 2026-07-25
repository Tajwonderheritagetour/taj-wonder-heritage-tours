export default function WhyChoose() {
  const features = [
    {
      title: "Local Expertise",
      description:
        "Our experienced local guides provide authentic insights into India's history, culture, and traditions.",
    },
    {
      title: "Private Tours",
      description:
        "Enjoy personalized itineraries designed according to your interests, schedule, and travel style.",
    },
    {
      title: "24/7 Support",
      description:
        "Our team is always available to assist you before, during, and after your journey.",
    },
    {
      title: "Comfort & Safety",
      description:
        "Travel in clean, comfortable vehicles with professional drivers for a safe experience.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#08142d",
          marginBottom: "50px",
        }}
      >
        Why Choose Us
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "28px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}