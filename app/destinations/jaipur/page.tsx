import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Jaipur Tours | Visit the Pink City | Taj Wonder Heritage Tours",
  description:
    "Explore Jaipur with Taj Wonder Heritage Tours. Visit Amber Fort, Hawa Mahal, City Palace, Jantar Mantar and Jal Mahal with private guides and comfortable transportation.",
};

export default function JaipurPage() {
  return (
    <main>

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
          src="/images/destinations/jaipur.jpg"
          alt="Jaipur"
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
            textAlign: "center",
            color: "#fff",
            maxWidth: "900px",
            padding: "20px",
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
            Welcome to Jaipur
          </span>

          <h1
            style={{
              fontSize: "60px",
              margin: "20px 0",
            }}
          >
            Explore the Pink City of India
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "34px",
            }}
          >
            Discover magnificent forts, royal palaces, colorful markets and
            Rajasthan's rich heritage with private guided tours.
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
              Why Visit Jaipur?
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "34px",
              }}
            >
              Jaipur is the capital of Rajasthan and one of India's most
              beautiful heritage cities. Known as the Pink City, it is famous
              for majestic forts, royal palaces, colorful bazaars, traditional
              handicrafts and authentic Rajasthani cuisine.
            </p>
          </div>

          <Image
            src="/images/destinations/jaipur.jpg"
            alt="Amber Fort Jaipur"
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
              "🏰 Amber Fort",
              "🏛 City Palace",
              "🌸 Hawa Mahal",
              "🔭 Jantar Mantar",
              "🌅 Jal Mahal",
              "🐘 Elephant Village",
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
          Discover Jaipur with Private Tours
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto 40px",
            lineHeight: "34px",
            fontSize: "19px",
          }}
        >
          Explore Jaipur comfortably with experienced chauffeurs, licensed
          guides and customized private itineraries.
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