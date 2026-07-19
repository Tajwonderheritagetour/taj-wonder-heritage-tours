"use client";

import Link from "next/link";
import Image from "next/image";

const tours = [
  {
    title: "Same Day Taj Mahal Tour",
    image: "/images/tours/same-day-taj.jpg",
    duration: "Full Day",
    badge: "⭐ Best Seller",
    href: "/tours/same-day-taj-mahal-tour",
  },
  {
    title: "Agra Overnight Tour",
    image: "/images/tours/agra-overnight.jpg",
    duration: "2 Days",
    badge: "🚗 Private Tour",
    href: "/tours/agra-overnight-tour",
  },
  {
    title: "Golden Triangle Tour",
    image: "/images/tours/golden-triangle.jpg",
    duration: "5 Days",
    badge: "🏆 Most Popular",
    href: "/tours/golden-triangle-tour",
  },
  {
    title: "Golden Triangle & Ranthambore",
    image: "/images/tours/ranthambore.jpg",
    duration: "4 Days",
    badge: "🐅 Wildlife Tour",
    href: "/tours/golden-triangle-ranthambore-tour",
  },
];

export default function FeaturedTours() {
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
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "65px",
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
            Our Best Tours
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            Featured Private Tours
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
            Discover India's most iconic destinations with carefully designed
            private tours, experienced local guides and unforgettable travel
            experiences.
          </p>
        </div>

        {/* Tour Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "35px",
          }}
        >
          {tours.map((tour) => (
            <div
              key={tour.title}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <Image
                src={tour.image}
                alt={tour.title}
                width={700}
                height={500}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      color: "#666",
                      fontWeight: 600,
                    }}
                  >
                    🕒 {tour.duration}
                  </span>

                  <span
                    style={{
                      background: "#d4af37",
                      color: "#08142d",
                      padding: "6px 14px",
                      borderRadius: "30px",
                      fontWeight: 700,
                      fontSize: "13px",
                    }}
                  >
                    {tour.badge}
                  </span>
                </div>

                <h3
                  style={{
                    color: "#08142d",
                    fontSize: "28px",
                    marginBottom: "18px",
                    lineHeight: "36px",
                  }}
                >
                  {tour.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    marginBottom: "28px",
                  }}
                >
                  Explore India's heritage with professional chauffeurs,
                  licensed local guides and personalized private experiences
                  designed for international travelers.
                </p>

                <Link
                  href={tour.href}
                  style={{
                    display: "inline-block",
                    background: "#08142d",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "15px 28px",
                    borderRadius: "50px",
                    fontWeight: 700,
                    transition: "0.3s",
                  }}
                >
                  Explore Tour →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}

        <div
          style={{
            textAlign: "center",
            marginTop: "70px",
          }}
        >
          <Link
            href="/tours"
            style={{
              background: "#d4af37",
              color: "#08142d",
              textDecoration: "none",
              padding: "18px 40px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}