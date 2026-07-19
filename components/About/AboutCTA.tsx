import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#08142d,#12325f)",
        color: "white",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          START YOUR JOURNEY
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "25px",
            lineHeight: 1.2,
          }}
        >
          Ready to Explore Incredible India?
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "34px",
            color: "#e5e5e5",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          Whether you're planning a Taj Mahal day trip, a Golden Triangle
          adventure, or a customized private tour across India, our team is
          ready to help you create unforgettable memories.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <Link
            href="/contact"
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "16px 34px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Book Your Tour
          </Link>

          <Link
            href="https://wa.me/917830716981"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "16px 34px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            WhatsApp Us
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            color: "#ddd",
            fontSize: "16px",
          }}
        >
          <span>⭐ 22+ Five-Star Reviews</span>
          <span>🚘 Private Tours</span>
          <span>📍 Delhi • Agra • Jaipur • Rajasthan</span>
        </div>
      </div>
    </section>
  );
}