"use client";

import Image from "next/image";
import Link from "next/link";
import { tours } from "@/lib/tours";

export default function Tours() {
  const homepageTours = [
    tours.sameDayTajMahal,
    tours.tajMahalSunrise,
    tours.agraOvernight,
    tours.goldenTriangle3,
    tours.goldenTriangle5DayTour,
    tours.goldenTriangleRanthambore,
  ];

  return (
    <section
      style={{
        padding: "110px 20px",
        background: "#f7f8fb",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {/* Section Header */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#d4af37",
              color: "#08142d",
              padding: "10px 24px",
              borderRadius: "50px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Featured Experiences
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#08142d",
              marginTop: "24px",
              marginBottom: "22px",
              fontWeight: 800,
            }}
          >
            Discover India's Most Popular Tours
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "19px",
              lineHeight: "34px",
              color: "#666",
            }}
          >
            Carefully crafted private journeys with professional chauffeurs,
            expert local guides and unforgettable heritage experiences.
          </p>
        </div>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(390px, 1fr))",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          {homepageTours.map((tour) => (
            <div
              key={tour.slug}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(0,0,0,.08)",
                transition: ".35s",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: "700px",
              }}
            >
              {/* Image */}

              <div
                style={{
                  position: "relative",
                  height: "300px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />

                {/* Dark Gradient */}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,0))",
                  }}
                />

                {/* Badge */}

                <div
                  style={{
                    position: "absolute",
                    top: "22px",
                    left: "22px",
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "10px 18px",
                    borderRadius: "40px",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  {tour.tourType}
                </div>

                {/* Rating */}

                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "22px",
                    background: "rgba(255,255,255,.92)",
                    backdropFilter: "blur(10px)",
                    padding: "10px 16px",
                    borderRadius: "40px",
                    fontWeight: 700,
                    color: "#08142d",
                  }}
                >
                  ⭐ {tour.rating} ({tour.reviewCount} Reviews)
                </div>
              </div>

              {/* Content */}

              <div
                style={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Title */}

                <h3
                  style={{
                    fontSize: "27px",
                    color: "#08142d",
                    margin: "0 0 18px",
                    lineHeight: "36px",
                    minHeight: "72px",
                  }}
                >
                  {tour.title}
                </h3>

                {/* Description */}

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    fontSize: "17px",
                    margin: "0 0 25px",
                    minHeight: "90px",
                  }}
                >
                  {tour.shortDescription}
                </p>

                {/* Tour Info */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "30px",
                    minHeight: "78px",
                  }}
                >
                  {/* Location + Duration */}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        color: "#555",
                        fontWeight: 600,
                        lineHeight: "24px",
                      }}
                    >
                      📍 {tour.location}
                    </span>

                    <span
                      style={{
                        color: "#555",
                        fontWeight: 600,
                        lineHeight: "24px",
                      }}
                    >
                      ⏰ {tour.duration}
                    </span>
                  </div>

                  {/* Tour Type */}

                  <div
                    style={{
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background: "#d4af37",
                        color: "#08142d",
                        padding: "8px 18px",
                        borderRadius: "30px",
                        fontWeight: 700,
                        fontSize: "14px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Private Tour
                    </span>
                  </div>
                </div>

                {/* View Tour Button */}

                <Link
                  href={`/tours/${tour.slug}`}
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    marginTop: "auto",
                    textAlign: "center",
                    background: "#08142d",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "17px",
                    borderRadius: "50px",
                    fontWeight: 700,
                    fontSize: "17px",
                    transition: ".3s",
                  }}
                >
                  View Tour →
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
              display: "inline-block",
              background: "#d4af37",
              color: "#08142d",
              padding: "18px 42px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Explore All Tours →
          </Link>
        </div>
      </div>
    </section>
  );
}