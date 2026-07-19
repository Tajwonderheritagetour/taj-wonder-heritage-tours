import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(rgba(8,20,45,.82), rgba(8,20,45,.82)), url('/images/about/founder.jpg') center/cover",
        color: "white",
        padding: "170px 20px 140px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            color: "#d4af37",
            letterSpacing: "3px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          About Taj Wonder Heritage Tours
        </span>

        <h1
          style={{
            fontSize: "60px",
            marginTop: "25px",
            marginBottom: "25px",
            lineHeight: 1.2,
          }}
        >
          Creating Unforgettable Journeys Across Incredible India
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "34px",
            color: "#ddd",
            maxWidth: "760px",
            margin: "0 auto 40px",
          }}
        >
          We believe every traveler deserves a personal, authentic and
          unforgettable experience. From the iconic Taj Mahal to the royal
          palaces of Rajasthan, we help visitors discover the real beauty of
          India with comfort, safety and local expertise.
        </p>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "#d4af37",
            color: "#08142d",
            padding: "18px 40px",
            borderRadius: "40px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Plan Your Journey
        </Link>
      </div>
    </section>
  );
}