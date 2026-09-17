"use client";

import Link from "next/link";
import Image from "next/image";

const tours = [
  {
    title: "Same Day Taj Mahal Tour",
    image: "/images/tours/same-day-taj.jpg",
    duration: "Full Day",
    destination: "📍 Agra",
    rating: "★★★★★ 4.9",
    badge: "⭐ Best Seller",
    description:
      "Visit the magnificent Taj Mahal, Agra Fort and local heritage sites with a private chauffeur and licensed local guide.",
    href: "/tours/same-day-taj-mahal-tour",
  },

  {
    title: "Agra Overnight Tour",
    image: "/images/tours/agra-overnight.jpg",
    duration: "2 Days",
    destination: "📍 Agra • Fatehpur Sikri",
    rating: "★★★★★ 4.9",
    badge: "🚗 Private Tour",
    description:
      "Enjoy a relaxed overnight experience including sunrise at the Taj Mahal, Agra Fort and Fatehpur Sikri.",
    href: "/tours/agra-overnight-tour",
  },

  {
    title: "Golden Triangle Tour",
    image: "/images/tours/golden-triangle.jpg",
    duration: "5 Days",
    destination: "📍 Delhi • Agra • Jaipur",
    rating: "★★★★★ 5.0",
    badge: "🏆 Most Popular",
    description:
      "Discover India's famous Golden Triangle with private transportation, expert guides and luxury experiences.",
    href: "/tours/golden-triangle-5-day-tour",
  },

  {
    title: "Golden Triangle & Ranthambore",
    image: "/images/tours/ranthambore.jpg",
    duration: "4 Days",
    destination: "📍 Delhi • Agra • Ranthambore • Jaipur",
    rating: "★★★★★ 4.9",
    badge: "🐅 Wildlife Tour",
    description:
      "Combine India's heritage with an unforgettable tiger safari in Ranthambore National Park.",
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
        {/* Section Header */}

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
            Luxury Private Tours
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            Explore India's Most Popular Private Tours
          </h2>

          <p
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Carefully crafted private journeys across India's most iconic
            destinations including the Taj Mahal, Delhi, Jaipur, Rajasthan,
            Ranthambore and many more unforgettable experiences.
          </p>
        </div>

        {/* Tour Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
            alignItems: "stretch",
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
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Tour Image */}

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "240px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Tour Content */}

              <div
                style={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minHeight: "500px",
                  boxSizing: "border-box",
                }}
              >
                {/* Rating */}

                <p
                  style={{
                    color: "#d4af37",
                    fontWeight: 700,
                    margin: "0 0 10px",
                    fontSize: "15px",
                    minHeight: "22px",
                  }}
                >
                  {tour.rating}
                </p>

                {/* Duration + Badge */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                    flexWrap: "wrap",
                    gap: "10px",
                    minHeight: "38px",
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

                {/* Destination */}

                <p
                  style={{
                    color: "#666",
                    fontWeight: 600,
                    margin: "0 0 14px",
                    minHeight: "24px",
                  }}
                >
                  {tour.destination}
                </p>

                {/* Title */}

                <h3
                  style={{
                    color: "#08142d",
                    fontSize: "26px",
                    margin: "0 0 18px",
                    lineHeight: "34px",
                    minHeight: "68px",
                  }}
                >
                  {tour.title}
                </h3>

                {/* Description */}

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    margin: "0",
                    minHeight: "120px",
                  }}
                >
                  {tour.description}
                </p>

                {/* Buttons */}

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "auto",
                    paddingTop: "30px",
                  }}
                >
                  <Link
                    href={tour.href}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "#08142d",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "15px 22px",
                      borderRadius: "50px",
                      fontWeight: 700,
                      minWidth: "140px",
                      boxSizing: "border-box",
                    }}
                  >
                    View Tour Details
                  </Link>

                  <Link
                    href="/contact"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "#d4af37",
                      color: "#08142d",
                      textDecoration: "none",
                      padding: "15px 22px",
                      borderRadius: "50px",
                      fontWeight: 700,
                      minWidth: "140px",
                      boxSizing: "border-box",
                    }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          <h3
            style={{
              color: "#08142d",
              fontSize: "34px",
              marginBottom: "18px",
            }}
          >
            Looking for a Customized India Tour?
          </h3>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "30px",
              maxWidth: "720px",
              margin: "0 auto 35px",
            }}
          >
            Every traveler is different. We create personalized private
            itineraries according to your interests, travel style and schedule.
          </p>

          <Link
            href="/tours"
            style={{
              background: "#d4af37",
              color: "#08142d",
              textDecoration: "none",
              padding: "18px 42px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            Explore All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}