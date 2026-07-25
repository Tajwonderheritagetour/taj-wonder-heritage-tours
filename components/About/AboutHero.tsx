"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        height: "85vh",
        overflow: "hidden",
      }}
    >
      <Image
        src="/hero/taj-mahal.jpg"
        alt="Taj Mahal"
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(8,20,45,.72), rgba(8,20,45,.72))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 20px",
          color: "#fff",
        }}
      >
        <span
          style={{
            color: "#d4af37",
            fontSize: "18px",
            letterSpacing: "3px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Taj Wonder Heritage Tours
        </span>

        <h1
          style={{
            fontSize: "68px",
            lineHeight: "78px",
            fontWeight: 800,
            maxWidth: "750px",
            marginBottom: "30px",
          }}
        >
          Discover India Through
          <br />
          Authentic Heritage Experiences
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "22px",
            lineHeight: "38px",
            color: "#f2f2f2",
          }}
        >
          We create unforgettable private journeys across India with
          luxury transportation, professional local guides, and
          personalized itineraries designed especially for international
          travellers.
        </p>
      </div>
    </section>
  );
}