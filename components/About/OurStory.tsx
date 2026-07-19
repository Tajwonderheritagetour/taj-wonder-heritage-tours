export default function OurStory() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div>
          <p
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            OUR STORY
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Your Trusted Travel Partner in India
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Taj Wonder Heritage Tour was founded with one simple goal —
            to provide international travelers with safe, comfortable,
            and unforgettable private journeys across India.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Based in Agra, we specialize in the Golden Triangle,
            Taj Mahal tours, Rajasthan, wildlife safaris, and
            customized private holidays designed around your interests.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              fontSize: "18px",
            }}
          >
            Every tour is carefully planned with professional drivers,
            comfortable vehicles, flexible itineraries, and genuine
            Indian hospitality to ensure every guest enjoys a memorable experience.
          </p>
        </div>

        {/* Right Side */}
        <div
          style={{
            background: "#08142d",
            color: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        >
          <h3
            style={{
              color: "#d4af37",
              marginBottom: "30px",
              fontSize: "28px",
            }}
          >
            Why Travelers Choose Us
          </h3>

          <div style={{ display: "grid", gap: "18px" }}>
            <div>✅ Private & Personalized Tours</div>

            <div>✅ Professional English Speaking Drivers</div>

            <div>✅ Clean & Comfortable Vehicles</div>

            <div>✅ Transparent Pricing</div>

            <div>✅ 24/7 Customer Support</div>

            <div>✅ Trusted by Travelers Worldwide</div>
          </div>
        </div>
      </div>
    </section>
  );
}