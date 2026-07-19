export default function WhyChooseUs() {
  const features = [
    {
      icon: "🌍",
      title: "Local Travel Experts",
      text: "Our experienced team knows India's most iconic destinations and hidden gems.",
    },
    {
      icon: "🚘",
      title: "Premium Fleet",
      text: "Travel in clean, comfortable, air-conditioned vehicles with professional drivers.",
    },
    {
      icon: "🧳",
      title: "Private Tours",
      text: "Every itinerary is personalized to match your travel style and preferences.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      text: "No hidden charges. Honest prices with premium service from start to finish.",
    },
    {
      icon: "⭐",
      title: "Trusted by Travelers",
      text: "Highly rated by international guests for reliability, comfort and hospitality.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      text: "We're always available before, during and after your journey.",
    },
  ];

  return (
    <section
      style={{
        background: "#f8f8f8",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            WHY CHOOSE US
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "20px",
            }}
          >
            Why Travelers Love Taj Wonder Heritage Tour
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            We combine local expertise, premium transportation and personalized
            service to create unforgettable travel experiences across India.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "35px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#d4af37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                  marginBottom: "25px",
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  color: "#08142d",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                  fontSize: "17px",
                }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}