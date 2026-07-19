"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(8,20,45,.78), rgba(8,20,45,.78)), url('/images/hero/taj-mahal-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          width: "100%",
          margin: "0 auto",
          padding: "0 30px",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            Luxury Private Tours in India
          </span>

          <div
            style={{
              width: "90px",
              height: "4px",
              background: "#d4af37",
              marginTop: "20px",
              marginBottom: "30px",
              borderRadius: "10px",
            }}
          />

          <h1
            style={{
              color: "#fff",
              fontSize: "76px",
              lineHeight: "1.1",
              fontWeight: 800,
              margin: 0,
              textShadow: "0 5px 25px rgba(0,0,0,.45)",
            }}
          >
            Discover
            <br />
            Incredible India
            <br />
            In Luxury
          </h1>

          <p
            style={{
              color: "#f2f2f2",
              fontSize: "22px",
              lineHeight: "38px",
              marginTop: "35px",
              marginBottom: "45px",
              maxWidth: "700px",
            }}
          >
            Explore the Taj Mahal, Golden Triangle, Rajasthan and India's most
            iconic destinations with professional chauffeurs, expert local
            guides and carefully designed private luxury experiences.
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
                padding: "18px 38px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Explore Tours →
            </Link>

            <Link
              href="/contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                border: "2px solid #fff",
                padding: "18px 38px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Contact Us
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "35px",
              marginTop: "60px",
              color: "#fff",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            <span>⭐ 500+ Happy Travelers</span>

            <span>🏛 10+ Years Experience</span>

            <span>🚘 100% Private Tours</span>

            <span>📞 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}