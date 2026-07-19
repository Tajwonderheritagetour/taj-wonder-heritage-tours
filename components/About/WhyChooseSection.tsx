export default function WhyChooseSection() {
  const features = [
    {
      icon: "🏛",
      title: "Local Heritage Experts",
      text: "Explore India's iconic landmarks with knowledgeable local experts who bring history and culture to life.",
    },
    {
      icon: "🚘",
      title: "Private Luxury Tours",
      text: "Enjoy comfortable private transportation and flexible itineraries tailored to your travel style.",
    },
    {
      icon: "⭐",
      title: "Trusted by Travelers",
      text: "Over 500 happy guests from more than 20 countries have trusted us for unforgettable journeys.",
    },
    {
      icon: "❤️",
      title: "Personalized Experiences",
      text: "Every itinerary is customized to match your interests, pace and travel preferences.",
    },
    {
      icon: "🌍",
      title: "Authentic India",
      text: "Discover famous attractions together with hidden gems and authentic local experiences.",
    },
    {
      icon: "🕒",
      title: "24/7 Assistance",
      text: "From your first inquiry until your journey ends, we're always available to help.",
    },
  ];

  return (
    <section
      style={{
        padding: "110px 20px",
        background: "#f8f9fb",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Why Choose Us
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#08142d",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Why Travelers Choose
            <br />
            Taj Wonder Heritage Tours
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            We believe every traveler deserves a memorable journey filled with
            comfort, authenticity and exceptional service.
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
                padding: "35px",
                borderRadius: "22px",
                boxShadow: "0 15px 40px rgba(0,0,0,.08)",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
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
                  lineHeight: "30px",
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