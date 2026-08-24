"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero/taj-mahal-hero.jpg",
    label: "Luxury Private India Tours",
    title: "Discover India Your Way",
    description:
      "Experience the Taj Mahal, Golden Triangle, Rajasthan and India's most iconic destinations with private vehicles, local guides and personalized itineraries.",
  },
  {
    image: "/images/hero/amber-fort.jpg",
    label: "Rajasthan Heritage Tours",
    title: "Explore the Royal Heritage of Rajasthan",
    description:
      "Discover magnificent forts, royal palaces and colorful cities with a private Rajasthan journey designed around your interests.",
  },
  {
    image: "/images/hero/hawa-mahal.jpg",
    label: "Golden Triangle Tours",
    title: "Delhi • Agra • Jaipur",
    description:
      "Experience India's famous Golden Triangle with private transportation, professional local guides and carefully planned sightseeing.",
  },
  {
    image: "/images/hero/ranthambore.jpg",
    label: "Wildlife & Adventure",
    title: "Discover the Wild Side of India",
    description:
      "Combine India's heritage with an unforgettable wildlife adventure in Ranthambore National Park.",
  },
  {
    image: "/images/hero/guest-amber-1.jpg",
    label: "Travel With Us",
    title: "Create Memories That Last a Lifetime",
    description:
      "Enjoy personalized experiences, comfortable private transportation and genuine hospitality throughout your India journey.",
  },
  {
    image: "/images/hero/guest-amber-2.jpg",
    label: "Guest Experiences",
    title: "Travel India With Confidence",
    description:
      "From the Taj Mahal to Rajasthan, we take care of the journey so you can enjoy every moment of your India adventure.",
  },
  {
    image: "/images/hero/guest-amber-3.jpg",
    label: "Private India Tours",
    title: "Your Journey. Your Pace. Your India.",
    description:
      "Private sightseeing, flexible itineraries and local expertise for travelers looking for a more personal India experience.",
  },
  {
    image: "/images/hero/guest-restaurant.jpg",
    label: "Authentic Experiences",
    title: "Experience More Than the Monuments",
    description:
      "Discover India's culture, cuisine and local experiences alongside its world-famous heritage sites.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      style={{
        position: "relative",
        height: "720px",
        minHeight: "720px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Images */}

      {slides.map((item, index) => (
        <div
          key={item.image}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${item.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(8,20,45,0.82) 0%, rgba(8,20,45,0.62) 45%, rgba(8,20,45,0.30) 100%)",
          zIndex: 1,
        }}
      />

      {/* Hero Content */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
          }}
        >
          {/* Label */}

          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            {slide.label}
          </span>

          {/* H1 */}

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.12",
              color: "#fff",
              marginTop: "20px",
              marginBottom: "22px",
              fontWeight: 800,
              maxWidth: "700px",
            }}
          >
            {slide.title}
          </h1>

          {/* Description */}

          <p
            style={{
              color: "#eeeeee",
              fontSize: "18px",
              lineHeight: "32px",
              marginBottom: "35px",
              maxWidth: "680px",
            }}
          >
            {slide.description}
          </p>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tours"
              style={{
                background: "#d4af37",
                color: "#08142d",
                textDecoration: "none",
                padding: "17px 34px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "17px",
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
                padding: "15px 34px",
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
              marginTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              color: "#eeeeee",
              fontSize: "15px",
            }}
          >
            <span>⭐ 5-Star Guest Experience</span>
            <span>🚘 100% Private Tours</span>
            <span>🏛 Local Guides</span>
            <span>📞 WhatsApp Support</span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}

      <div
        style={{
          position: "absolute",
          zIndex: 3,
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentSlide ? "30px" : "9px",
              height: "9px",
              borderRadius: "20px",
              border: "none",
              padding: 0,
              cursor: "pointer",
              background:
                index === currentSlide
                  ? "#d4af37"
                  : "rgba(255,255,255,0.65)",
              transition: "all .3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}