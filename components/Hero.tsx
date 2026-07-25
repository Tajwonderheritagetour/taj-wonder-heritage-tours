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
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,20,45,.72)",
        }}
      />

      {/* Hero Content */}
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
        <div
          style={{
            maxWidth: "760px",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Luxury Private India Tours
          </span>

         <h1
  style={{
    fontSize: "56px",
    lineHeight: "1.2",
    color: "#fff",
    marginTop: "20px",
    marginBottom: "24px",
    fontWeight: 700,
    maxWidth: "700px",
  }}
>
            Private India Tours | Taj Mahal, Golden Triangle & Rajasthan Tours
          </h1>

          <p
  style={{
    color: "#e5e5e5",
    fontSize: "18px",
    lineHeight: "32px",
    marginBottom: "35px",
    maxWidth: "680px",
  }}
>
            Experience India's most iconic destinations with fully private
            luxury tours. Explore the Taj Mahal, Agra, Delhi, Jaipur,
            Rajasthan and the famous Golden Triangle with licensed local
            guides, professional chauffeurs, luxury vehicles and customized
            itineraries designed just for you.
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
                padding: "18px 36px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "17px",
                transition: ".3s",
              }}
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                textDecoration: "none",
                padding: "18px 36px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "17px",
              }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Trust Line */}
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              color: "#d9d9d9",
              fontSize: "16px",
            }}
          >
            <span>⭐ 5-Star Guest Experience</span>
            <span>🚘 100% Private Tours</span>
            <span>🏛 Licensed Local Guides</span>
            <span>📞 24/7 WhatsApp Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}