import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Delhi Tours | Explore India's Historic Capital",
  description:
    "Discover Delhi with Taj Wonder Heritage Tours. Visit India Gate, Qutub Minar, Humayun's Tomb, Lotus Temple, Red Fort and Chandni Chowk with private guided tours.",
};

export default function DelhiPage() {
  return (
    <main>
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Delhi" },
  ]}
/>

      {/* Hero */}

      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/destinations/delhi.jpg"
          alt="Delhi"
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
            color: "#fff",
            textAlign: "center",
            maxWidth: "900px",
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
            Welcome to Delhi
          </span>

          <h1
  style={{
    fontSize: "60px",
    margin: "20px 0",
    color: "#ffffff",
    textShadow: "0 4px 18px rgba(0,0,0,.6)",
  }}
>
            Discover India's Historic Capital
          </h1>

          <p
    style={{
    fontSize: "20px",
    lineHeight: "34px",
    color: "#f2f2f2",
    textShadow: "0 2px 10px rgba(0,0,0,.5)",
  }}
>
            Explore the perfect blend of ancient history and modern India with
            private sightseeing tours and experienced local guides.
          </p>
        </div>
      </section>

      {/* About */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
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
            <h2
              style={{
                fontSize: "42px",
                color: "#08142d",
                marginBottom: "25px",
              }}
            >
              Why Visit Delhi?
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "34px",
              }}
            >
              Delhi is India's capital city and one of the oldest continuously
              inhabited cities in the world. From magnificent Mughal monuments
              to vibrant markets and modern architecture, Delhi offers an
              unforgettable cultural experience.
            </p>
          </div>

          <Image
            src="/images/destinations/delhi.jpg"
            alt="India Gate"
            width={700}
            height={500}
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>

      {/* Attractions */}

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
              marginBottom: "50px",
            }}
          >
            Top Attractions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px",
            }}
          >
            {[
              "🇮🇳 India Gate",
              "🕌 Qutub Minar",
              "🏛 Humayun's Tomb",
              "🌸 Lotus Temple",
              "🏰 Red Fort",
              "🛍 Chandni Chowk",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fff",
                  padding: "35px",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  fontWeight: 700,
                  fontSize: "22px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          padding: "90px 20px",
          background: "#08142d",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            marginBottom: "25px",
          }}
        >
          Explore Delhi with Private Tours
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto 40px",
            fontSize: "19px",
            lineHeight: "34px",
          }}
        >
          Experience Delhi's incredible history, culture and architecture with
          Taj Wonder Heritage Tours and our experienced local team.
        </p>

        <Link
          href="/tours/golden-triangle-tour"
          style={{
            background: "#d4af37",
            color: "#08142d",
            textDecoration: "none",
            padding: "18px 36px",
            borderRadius: "50px",
            fontWeight: 700,
          }}
        >
          Explore Golden Triangle Tour
        </Link>

      </section>

    </main>
  );
}