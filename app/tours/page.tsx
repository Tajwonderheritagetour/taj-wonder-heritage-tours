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
              marginBottom: "70px",
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
                fontSize: "52px",
                color: "#08142d",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Discover Incredible India
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                color: "#666",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Explore our carefully designed private tours across India with
              professional chauffeurs, experienced local guides and unforgettable
              travel experiences.
            </p>
          </div>

          {/* Tours Grid */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
              gap: "35px",
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
                }}
              >
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
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "15px",
                      color: "#555",
                      fontSize: "15px",
                    }}
                  >
                    <span>
                      ⭐ {tour.rating} ({tour.reviewCount})
                    </span>

                    <span>{tour.duration}</span>
                  </div>

                  <h2
                    style={{
                      color: "#08142d",
                      fontSize: "30px",
                      marginBottom: "15px",
                    }}
                  >
                    {tour.title}
                  </h2>

                  <p
                    style={{
                      color: "#666",
                      lineHeight: "30px",
                      marginBottom: "20px",
                    }}
                  >
                    {tour.shortDescription}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "25px",
                    }}
                  >
                    <span
                      style={{
                        color: "#555",
                        fontWeight: 600,
                      }}
                    >
                      📍 {tour.location}
                    </span>

                    <span
                      style={{
                        color: "#d4af37",
                        fontWeight: "bold",
                        fontSize: "26px",
                      }}
                    >
                     
                    </span>
                  </div>

                  <Link
                    href={`/tours/${tour.slug}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#08142d",
                      color: "#fff",
                      padding: "16px",
                      borderRadius: "35px",
                      textDecoration: "none",
                      fontWeight: "bold",
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