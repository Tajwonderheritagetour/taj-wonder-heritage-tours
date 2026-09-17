import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import { tours } from "@/lib/tours";

export default function ToursPage() {
  const allTours = Object.values(tours);

  return (
    <>
      <Navbar />

      <main
        style={{
          padding: "120px 20px 80px",
          background: "#f8f9fb",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {/* Header */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
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
              Our Tours
            </span>

            <h1
              style={{
                fontSize: "48px",
                color: "#08142d",
                marginTop: "18px",
                marginBottom: "18px",
              }}
            >
              Discover Incredible India
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                color: "#666",
                fontSize: "17px",
                lineHeight: "30px",
              }}
            >
              Explore our carefully designed private tours across India with
              professional chauffeurs, experienced local guides and
              unforgettable travel experiences.
            </p>
          </div>

          {/* Tours Grid */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {allTours.map((tour) => (
              <div
                key={tour.slug}
                style={{
                  background: "#fff",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "0 12px 35px rgba(0,0,0,.08)",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  height: "95%",
                }}
              >
                {/* Tour Image */}

                <div
                  style={{
                    position: "relative",
                    height: "240px",
                  }}
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    style={{
  background: "#f1f1f1",
}}
                  />
                </div>

                {/* Tour Content */}

                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {/* Rating & Duration */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    <span>
                      ⭐ {tour.rating} ({tour.reviewCount})
                    </span>

                    <span>{tour.duration}</span>
                  </div>

                  {/* Tour Title */}

                  <h2
                    style={{
                      color: "#08142d",
                      fontSize: "22px",
                      lineHeight: "30px",
                      margin: "0 0 12px",
                    }}
                  >
                    {tour.title}
                  </h2>

                  {/* Short Description */}

                  <p
                    style={{
                      color: "orange",
                      lineHeight: "26px",
                      margin: "0 0 18px",
                      fontSize: "16px",
                    }}
                  >
                    {tour.shortDescription}
                  </p>

                  {/* Location */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "22px",
                    }}
                  >
                    <span
                      style={{
                        color: "#555",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      📍 {tour.location}
                    </span>

                    <span
                      style={{
                        color: "#d4af37",
                        fontWeight: "bold",
                        fontSize: "22px",
                      }}
                    ></span>
                  </div>

                  {/* View Tour Button */}

                  <Link
                    href={`/tours/${tour.slug}`}
                    style={{
                      display: "block",
                      marginTop: "auto",
                      textAlign: "center",
                      background: "#08142d",
                      color: "#fff",
                      padding: "14px",
                      borderRadius: "35px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    View Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}