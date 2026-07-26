import Link from "next/link";

export const metadata = {
  title: "India Travel Guide | Taj Wonder Heritage Tours",
  description:
    "Expert travel guides for the Taj Mahal, Agra, Delhi, Jaipur, Rajasthan and Golden Triangle tours.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}

      <section
        style={{
          background: "#08142d",
          color: "#fff",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
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
            Travel Guides
          </span>

          <h1
            style={{
              fontSize: "56px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            India Travel Guide
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "34px",
              color: "#f2f2f2",
            }}
          >
            Discover expert travel tips, destination guides, sightseeing advice
            and inspiration for exploring India with confidence.
          </p>
        </div>
      </section>

      {/* Coming Soon */}

      <section
        style={{
          padding: "100px 20px",
          background: "#fff",
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
              fontSize: "40px",
              color: "#08142d",
              marginBottom: "20px",
            }}
          >
            Travel Articles Coming Soon
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
              marginBottom: "40px",
            }}
          >
            We are preparing detailed travel guides covering the Taj Mahal,
            Agra, Delhi, Jaipur, Rajasthan, wildlife safaris and complete
            Golden Triangle itineraries.
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#d4af37",
              color: "#08142d",
              padding: "16px 34px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Plan Your India Tour
          </Link>
        </div>
      </section>
    </main>
  );
}