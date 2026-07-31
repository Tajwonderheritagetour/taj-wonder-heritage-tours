import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { rajasthanHeritageFromDelhi } from "@/lib/tours/rajasthan-heritage-tour-from-delhi";

export const metadata: Metadata = {
  title: rajasthanHeritageFromDelhi.seoTitle,
  description: rajasthanHeritageFromDelhi.seoDescription,
  keywords: rajasthanHeritageFromDelhi.keywords,
  alternates: {
    canonical: rajasthanHeritageFromDelhi.canonical,
  },
};

export default function RajasthanHeritageTourPage() {
  const tour = rajasthanHeritageFromDelhi;

  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#f7f8fa",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}

        <section
          style={{
            position: "relative",
            height: "680px",
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
                "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.65))",
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
                Luxury Private Rajasthan Tour
              </span>

              <h1
                style={{
                  fontSize: "58px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  maxWidth: "900px",
                  lineHeight: "72px",
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
                    padding: "18px 34px",
                    borderRadius: "50px",
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
                    padding: "18px 34px",
                    borderRadius: "50px",
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
                {/* TOUR INFO */}

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
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>📍 Route</h3>
              <p>{tour.location}</p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
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
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
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
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>🚗 Tour Type</h3>
              <p>{tour.tourType}</p>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "45px",
              boxShadow: "0 12px 35px rgba(0,0,0,.08)",
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
        </section>
                {/* HIGHLIGHTS */}

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
              borderRadius: "22px",
              padding: "45px",
              boxShadow: "0 12px 35px rgba(0,0,0,.08)",
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
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    background: "#fafafa",
                    padding: "18px",
                    borderRadius: "14px",
                  }}
                >
                  <span
                    style={{
                      color: "#d4af37",
                      fontSize: "22px",
                      fontWeight: "bold",
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
              borderRadius: "22px",
              padding: "45px",
              boxShadow: "0 12px 35px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                color: "#08142d",
                marginBottom: "40px",
              }}
            >
              13-Day Detailed Itinerary
            </h2>

            {tour.itinerary.map((day, index) => (
              <div
                key={day.title}
                style={{
                  display: "flex",
                  gap: "25px",
                  marginBottom: "35px",
                  paddingBottom: "30px",
                  borderBottom:
                    index === tour.itinerary.length - 1
                      ? "none"
                      : "1px solid #ececec",
                }}
              >
                <div
                  style={{
                    minWidth: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#d4af37",
                    color: "#08142d",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
                boxShadow: "0 12px 35px rgba(0,0,0,.08)",
              }}
            >
              <h2 style={{ color: "#08142d", marginBottom: "20px" }}>
                ✔ What's Included
              </h2>

              <ul style={{ lineHeight: "34px" }}>
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
                boxShadow: "0 12px 35px rgba(0,0,0,.08)",
              }}
            >
              <h2 style={{ color: "#08142d", marginBottom: "20px" }}>
                ✖ What's Excluded
              </h2>

              <ul style={{ lineHeight: "34px" }}>
                {tour.excludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: "35px",
              background: "#fff",
              borderRadius: "22px",
              padding: "40px",
              boxShadow: "0 12px 35px rgba(0,0,0,.08)",
            }}
          >
            <h2 style={{ color: "#08142d", marginBottom: "20px" }}>
              Know Before You Go
            </h2>

            <ul style={{ lineHeight: "34px" }}>
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
            margin: "60px auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "40px",
              boxShadow: "0 12px 35px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                fontSize: "38px",
                color: "#08142d",
                marginBottom: "30px",
              }}
            >
              Frequently Asked Questions
            </h2>

            {tour.faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  marginBottom: "25px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "18px",
                }}
              >
                <h3 style={{ color: "#08142d" }}>{faq.question}</h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "30px",
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
            padding: "80px 20px",
          }}
        >
          <h2
            style={{
              fontSize: "44px",
              marginBottom: "20px",
            }}
          >
            Ready to Explore Rajasthan?
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto 35px",
              fontSize: "20px",
              lineHeight: "34px",
            }}
          >
            Contact Taj Wonder Heritage Tours today and enjoy an unforgettable
            private Rajasthan holiday.
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
                borderRadius: "50px",
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
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </section>

      </main>

      
    </>
  );
}