export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Local Experts",
      icon: "🏆",
      text: "Our knowledgeable team has years of experience creating unforgettable journeys across India.",
    },
    {
      title: "Private Comfortable Vehicles",
      icon: "🚘",
      text: "Travel in clean, air-conditioned vehicles including Dzire, Innova, Carens, Taisor and Urbania.",
    },
    {
      title: "Flexible Itineraries",
      icon: "🗺️",
      text: "Every tour can be customized to match your interests, schedule and travel style.",
    },
    {
      title: "24/7 Customer Support",
      icon: "📞",
      text: "We're always available on WhatsApp or phone before, during and after your trip.",
    },
  ];

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <p
          style={{
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          WHY CHOOSE US
        </p>

        <h2
          style={{
            textAlign: "center",
            margin: "15px 0 50px",
          }}
        >
          Why Travelers Choose Taj Wonder Heritage Tours
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#f8f9fa",
                padding: "30px",
                borderRadius: "18px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                {item.icon}
              </div>

              <h3 style={{ marginBottom: "15px" }}>
                {item.title}
              </h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}