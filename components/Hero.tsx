"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/images/hero/taj-mahal-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,20,45,.72)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Luxury Private Tours in India
          </span>

          <h1
            style={{
              fontSize: "68px",
              lineHeight: "1.1",
              color: "#fff",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            Discover Incredible India with Private Luxury Tours
          </h1>

          <p
            style={{
              color: "#e4e4e4",
              fontSize: "20px",
              lineHeight: "36px",
              marginBottom: "40px",
            }}
          >
            Explore the Taj Mahal, Golden Triangle, Rajasthan and India's
            finest destinations with professional chauffeurs, expert guides
            and unforgettable private experiences.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tours"
              style={{
                background: "#d4af37",
                color: "#08142d",
                textDecoration: "none",
                padding: "18px 34px",
                borderRadius: "50px",
                fontWeight: 700,
              }}
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              style={{
                border: "2px solid white",
                color: "#fff",
                textDecoration: "none",
                padding: "18px 34px",
                borderRadius: "50px",
                fontWeight: 700,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}