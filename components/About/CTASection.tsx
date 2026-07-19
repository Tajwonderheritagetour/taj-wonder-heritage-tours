import Link from "next/link";

export default function CTASection() {
  return (
    <section
      style={{
        background: "#08142d",
        padding: "100px 20px",
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
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Start Your Journey
        </span>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "54px",
            marginTop: "20px",
            marginBottom: "25px",
            lineHeight: "1.2",
          }}
        >
          Ready to Explore India
          <br />
          With Us?
        </h2>

        <p
          style={{
            color: "#d8d8d8",
            fontSize: "20px",
            lineHeight: "34px",
            marginBottom: "45px",
          }}
        >
          Let us design a private journey that matches your interests,
          schedule and travel style.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "18px 38px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/917830716981"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "18px 38px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}