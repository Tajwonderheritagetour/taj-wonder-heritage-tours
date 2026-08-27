import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Agra Tours | Visit the Taj Mahal & Agra Fort",
  description:
    "Discover Agra with private guided tours. Visit the Taj Mahal, Agra Fort, Mehtab Bagh, Fatehpur Sikri and enjoy luxury travel with Taj Wonder Heritage Tours.",
};

export default function AgraPage() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Agra" },
        ]}
      />

      {/* Hero */}

      <section
        style={{
          position: "relative",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/destinations/agra.jpg"
          alt="Agra Taj Mahal"
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
            background: "rgba(8,20,45,.65)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Welcome to Agra
          </span>

          <h1
            style={{
              fontSize: "60px",
              margin: "20px 0",
              color: "#ffffff",
              textShadow: "0 4px 18px rgba(0,0,0,.6)",
            }}
          >
            Explore the City of the Taj Mahal
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "36px",
              color: "#f2f2f2",
            }}
          >
            Experience India's most famous UNESCO World Heritage Sites with
            private tours, professional chauffeurs and expert local guides.
          </p>
        </div>
      </section>

      {/* About Agra */}

      <section
        style={{
          padding: "90px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              About Agra
            </span>

            <h2
              style={{
                fontSize: "44px",
                color: "#08142d",
                marginTop: "20px",
                marginBottom: "25px",
              }}
            >
              One of India's Most Iconic Heritage Cities
            </h2>

            <p
              style={{
                color: "#555",
                lineHeight: "34px",
                fontSize: "18px",
                marginBottom: "25px",
              }}
            >
              Agra is home to the world-famous Taj Mahal, one of the Seven
              Wonders of the World and a UNESCO World Heritage Site. The city
              showcases magnificent Mughal architecture, beautiful gardens,
              historic forts and vibrant local markets.
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "34px",
                fontSize: "18px",
              }}
            >
              Whether you visit for a day or stay overnight, Agra offers an
              unforgettable experience filled with history, culture, cuisine
              and breathtaking monuments.
            </p>
          </div>

          <div>
            <Image
              src="/images/gallery/taj-mahal.jpg"
              alt="Taj Mahal in Agra"
              width={700}
              height={500}
              style={{
                width: "100%",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
            {/* Top Attractions */}

      <section
        style={{
          padding: "90px 20px",
          background: "#f8f9fb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "60px",
            }}
          >
            Top Attractions in Agra
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px",
            }}
          >
            {[
              "🕌 Taj Mahal",
              "🏰 Agra Fort",
              "🌅 Mehtab Bagh",
              "🏛 Itmad-ud-Daulah",
              "🚗 Fatehpur Sikri",
              "🛍 Sadar Bazaar",
            ].map((place) => (
              <div
                key={place}
                style={{
                  background: "#fff",
                  padding: "35px",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#08142d",
                }}
              >
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Agra Tours */}

      <section
        style={{
          padding: "90px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
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

          <h2
            style={{
              fontSize: "44px",
              color: "#08142d",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Explore Agra with Our Private Tours
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto 50px",
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Choose a private Agra experience designed around your schedule,
            interests and preferred sightseeing pace.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "Same Day Taj Mahal Tour",
                description:
                  "Visit the Taj Mahal and Agra's famous heritage sites on a convenient private day tour.",
                link: "/tours/same-day-taj-mahal-tour",
              },
              {
                title: "Agra Overnight Tour",
                description:
                  "Stay overnight in Agra and experience the Taj Mahal, Agra Fort and other historic attractions at a relaxed pace.",
                link: "/tours/agra-overnight-tour",
              },
              {
                title: "Golden Triangle Tour",
                description:
                  "Explore Delhi, Agra and Jaipur on a private journey through India's famous Golden Triangle.",
                link: "/tours/golden-triangle-5-day-tour",
              },
            ].map((tour) => (
              <div
                key={tour.title}
                style={{
                  background: "#f8f9fb",
                  padding: "35px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    color: "#08142d",
                    fontSize: "24px",
                    marginBottom: "18px",
                  }}
                >
                  {tour.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    fontSize: "16px",
                    lineHeight: "28px",
                    marginBottom: "25px",
                  }}
                >
                  {tour.description}
                </p>

                <Link
                  href={tour.link}
                  style={{
                    background: "#08142d",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "14px 28px",
                    borderRadius: "50px",
                    fontWeight: 700,
                    display: "inline-block",
                  }}
                >
                  Explore Tour →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Agra Travel Guide */}

      <section
        style={{
          padding: "90px 20px",
          background: "#f8f9fb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
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
            Travel Guide
          </span>

          <h2
            style={{
              fontSize: "44px",
              color: "#08142d",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Plan Your Agra Visit
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto 45px",
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Read our Agra travel guides to plan your visit to the Taj Mahal
            and discover the city's best attractions and experiences.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                title: "Best Places to Visit in Agra",
                link: "/blog/best-places-to-visit-in-agra",
              },
              {
                title: "Things to Do in Agra",
                link: "/blog/things-to-do-in-agra",
              },
              {
                title: "Best Time to Visit the Taj Mahal",
                link: "/blog/best-time-to-visit-taj-mahal",
              },
              {
                title: "Taj Mahal Sunrise vs Sunset",
                link: "/blog/taj-mahal-sunrise-vs-sunset",
              },
            ].map((article) => (
              <Link
                key={article.title}
                href={article.link}
                style={{
                  background: "#ffffff",
                  color: "#08142d",
                  textDecoration: "none",
                  padding: "28px 22px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,.07)",
                  fontSize: "19px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  transition: "transform .2s ease",
                }}
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          padding: "100px 20px",
          background: "#08142d",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "25px",
            }}
          >
            Ready to Visit Agra?
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "34px",
              color: "#f2f2f2",
              textShadow: "0 2px 10px rgba(0,0,0,.5)",
              marginBottom: "40px",
            }}
          >
            Let Taj Wonder Heritage Tours create your perfect Agra experience
            with private transportation, knowledgeable local guides and
            personalized service.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
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
              }}
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              style={{
                border: "2px solid white",
                color: "#fff",
                textDecoration: "none",
                padding: "18px 36px",
                borderRadius: "50px",
                fontWeight: 700,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
          </main>
  );
}