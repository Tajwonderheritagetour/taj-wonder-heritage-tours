import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Ranthambore Tiger Safari | Wildlife Tours | Taj Wonder Heritage Tours",
  description:
    "Explore Ranthambore National Park with Taj Wonder Heritage Tours. Experience thrilling tiger safaris, wildlife photography and unforgettable nature adventures.",
};

export default function RanthamborePage() {
  return (
    <main>
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Ranthambore" },
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
          src="/images/destinations/ranthambore.jpg"
          alt="Ranthambore National Park"
          fill
          priority
          style={{ objectFit: "cover" }}
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
            Wildlife Adventure
          </span>

         <h1
  style={{
    fontSize: "60px",
    margin: "20px 0",
    color: "#ffffff",
    textShadow: "0 4px 18px rgba(0,0,0,.6)",
  }}
>
            Ranthambore National Park
          </h1>

         <p
  style={{
    fontSize: "20px",
    lineHeight: "34px",
    color: "#f2f2f2",
    textShadow: "0 2px 10px rgba(0,0,0,.5)",
  }}
>
            Discover one of India's best tiger reserves with exciting jungle
            safaris, stunning landscapes and unforgettable wildlife encounters.
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
              Why Visit Ranthambore?
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "34px",
              }}
            >
              Ranthambore National Park is one of India's most famous wildlife
              destinations. It is renowned for its Bengal tigers, ancient
              fort, beautiful lakes and incredible biodiversity, making it a
              dream destination for nature lovers and photographers.
            </p>
          </div>

          <Image
            src="/images/destinations/ranthambore.jpg"
            alt="Tiger Safari"
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
            Highlights
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px",
            }}
          >
            {[
              "🐅 Tiger Safari",
              "🏰 Ranthambore Fort",
              "🦌 Wildlife Photography",
              "🦚 Bird Watching",
              "🌅 Scenic Lakes",
              "🌳 Jungle Adventure",
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
          Experience India's Wildlife
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto 40px",
            fontSize: "19px",
            lineHeight: "34px",
          }}
        >
          Combine the Golden Triangle with an unforgettable tiger safari and
          discover the incredible wildlife of Ranthambore National Park.
        </p>

        <Link
          href="/tours/golden-triangle-ranthambore-tour"
          style={{
            background: "#d4af37",
            color: "#08142d",
            textDecoration: "none",
            padding: "18px 36px",
            borderRadius: "50px",
            fontWeight: 700,
          }}
        >
          Explore Tiger Safari Tour
        </Link>

      </section>

    </main>
  );
}