import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { goldenTriangleRishikesh } from "@/lib/tours/golden-triangle-rishikesh";

export const metadata: Metadata = {
  title: goldenTriangleRishikesh.seoTitle,
  description: goldenTriangleRishikesh.seoDescription,
  keywords: goldenTriangleRishikesh.keywords,
  alternates: {
    canonical: goldenTriangleRishikesh.canonical,
  },
};

export default function GoldenTriangleRishikeshTourPage() {
  const tour = goldenTriangleRishikesh;

  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#f7f8fa",
          minHeight: "100vh",
        }}
      >
        {/* Hero Section */}

        <section
          style={{
            position: "relative",
            height: "650px",
            overflow: "hidden",
          }}
        >
          <Image
            src={tour.image}
            alt={tour.title}
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
                "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.60))",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                width: "100%",
                padding: "0 20px",
                color: "#fff",
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
                Private Luxury Tour
              </span>

              <h1
                style={{
                  fontSize: "58px",
                  marginTop: "18px",
                  marginBottom: "22px",
                  maxWidth: "900px",
                  lineHeight: "70px",
                }}
              >
                {tour.title}
              </h1>

              <p
                style={{
                  maxWidth: "760px",
                  fontSize: "20px",
                  lineHeight: "34px",
                  marginBottom: "35px",
                }}
              >
                {tour.shortDescription}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "16px 34px",
                    borderRadius: "40px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Book This Tour
                </Link>

                <a
                  href="https://wa.me/917830716981"
                  target="_blank"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    padding: "16px 34px",
                    borderRadius: "40px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>
                {/* Tour Information */}

        <section
          style={{
            maxWidth: "1200px",
            margin: "60px auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>📍 Destination</h3>
              <p>{tour.location}</p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>🕒 Duration</h3>
              <p>{tour.duration}</p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>⭐ Rating</h3>
              <p>
                {tour.rating} ({tour.reviewCount} Reviews)
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>💬 Tour Type</h3>
              <p>{tour.tourType}</p>
            </div>
          </div>

          {/* Overview */}

          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "45px",
              boxShadow: "0 10px 35px rgba(0,0,0,.08)",
              marginBottom: "50px",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                color: "#08142d",
                marginBottom: "25px",
              }}
            >
              Tour Overview
            </h2>

            <p
              style={{
                color: "#555",
                lineHeight: "34px",
                whiteSpace: "pre-line",
                fontSize: "18px",
              }}
            >
              {tour.overview}
            </p>
          </div>

          {/* Highlights */}

          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "45px",
              boxShadow: "0 10px 35px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                color: "#08142d",
                marginBottom: "30px",
              }}
            >
              Tour Highlights
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: "18px",
              }}
            >
              {tour.highlights.map((highlight) => (
                <div
                  key={highlight}
                  style={{
                    background: "#f9f9f9",
                    padding: "18px",
                    borderRadius: "14px",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#d4af37",
                      fontWeight: "bold",
                      fontSize: "22px",
                    }}
                  >
                    ✓
                  </span>

                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ITINERARY */}

<section
  style={{
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "0 20px",
  }}
>
  <div
    style={{
      background: "#fff",
      padding: "45px",
      borderRadius: "22px",
      boxShadow: "0 10px 35px rgba(0,0,0,.08)",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        color: "#08142d",
        marginBottom: "35px",
      }}
    >
      Detailed Itinerary
    </h2>

    {tour.itinerary.map((day, index) => (
      <div
        key={day.title}
        style={{
          display: "flex",
          gap: "25px",
          marginBottom: "35px",
          borderBottom:
            index === tour.itinerary.length - 1
              ? "none"
              : "1px solid #ececec",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#d4af37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#08142d",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {index + 1}
        </div>

        <div>
          <h3
            style={{
              fontSize: "28px",
              color: "#08142d",
              marginBottom: "15px",
            }}
          >
            {day.title}
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              fontSize: "18px",
            }}
          >
            {day.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
{/* INCLUDES / EXCLUDES */}

<section
  style={{
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "0 20px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(450px,1fr))",
      gap: "30px",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "22px",
        padding: "40px",
        boxShadow: "0 10px 35px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          color: "#08142d",
          fontSize: "34px",
          marginBottom: "25px",
        }}
      >
        ✔ What's Included
      </h2>

      <ul style={{ lineHeight: "34px", color: "#555", fontSize: "18px" }}>
        {tour.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

    <div
      style={{
        background: "#fff",
        borderRadius: "22px",
        padding: "40px",
        boxShadow: "0 10px 35px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          color: "#08142d",
          fontSize: "34px",
          marginBottom: "25px",
        }}
      >
        ✖ What's Excluded
      </h2>

      <ul style={{ lineHeight: "34px", color: "#555", fontSize: "18px" }}>
        {tour.excludes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </div>

  <div
    style={{
      marginTop: "40px",
      background: "#fff",
      borderRadius: "22px",
      padding: "40px",
      boxShadow: "0 10px 35px rgba(0,0,0,.08)",
    }}
  >
    <h2
      style={{
        color: "#08142d",
        fontSize: "36px",
        marginBottom: "25px",
      }}
    >
      Know Before You Go
    </h2>

    <ul style={{ lineHeight: "36px", color: "#555", fontSize: "18px" }}>
      {tour.knowBefore.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
</section>
        {/* FAQ */}

        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto 80px",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "45px",
              boxShadow: "0 10px 35px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                color: "#08142d",
                marginBottom: "35px",
              }}
            >
              Frequently Asked Questions
            </h2>

            {tour.faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  marginBottom: "28px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <h3
                  style={{
                    color: "#08142d",
                    marginBottom: "10px",
                    fontSize: "22px",
                  }}
                >
                  {faq.question}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "30px",
                    fontSize: "17px",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        <section
          style={{
            background: "#08142d",
            color: "#fff",
            textAlign: "center",
            padding: "70px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                marginBottom: "20px",
              }}
            >
              Ready to Explore Incredible India?
            </h2>

            <p
              style={{
                color: "#ddd",
                fontSize: "20px",
                lineHeight: "34px",
                marginBottom: "35px",
              }}
            >
              Contact Taj Wonder Heritage Tours today and let us create your
              perfect private holiday across India.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  background: "#d4af37",
                  color: "#08142d",
                  padding: "18px 36px",
                  borderRadius: "40px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Book This Tour
              </Link>

              <a
                href="https://wa.me/917830716981"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "18px 36px",
                  borderRadius: "40px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>

  
    </>
  );
}