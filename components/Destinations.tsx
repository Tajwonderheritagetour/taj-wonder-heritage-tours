import Link from "next/link";

const destinations = [
  {
    name: "Agra",
    image: "/images/destinations/agra.jpg",
    description: "Home of the magnificent Taj Mahal and Agra Fort.",
    link: "/destinations/agra",
  },
  {
    name: "Jaipur",
    image: "/images/destinations/jaipur.jpg",
    description: "Discover forts, palaces and the Pink City.",
    link: "/destinations/jaipur",
  },
  {
    name: "Delhi",
    image: "/images/destinations/delhi.jpg",
    description: "Experience India's capital with its rich heritage.",
    link: "/destinations/delhi",
  },
  {
    name: "Ranthambore",
    image: "/images/destinations/ranthambore.jpg",
    description: "Enjoy exciting tiger safaris in the national park.",
    link: "/destinations/ranthambore",
  },
];

export default function Destinations() {
  return (
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
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          DISCOVER INDIA
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "44px",
            margin: "15px 0",
          }}
        >
          Featured Destinations
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 60px",
            color: "#666",
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          Explore India's most iconic destinations with private guided tours,
          comfortable transportation and unforgettable experiences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {destinations.map((place) => (
            <div
              key={place.name}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src={place.image}
                alt={place.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "26px",
                    marginBottom: "15px",
                  }}
                >
                  {place.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "28px",
                    marginBottom: "25px",
                  }}
                >
                  {place.description}
                </p>

                <Link
                  href={place.link}
                  style={{
                    color: "#d4af37",
                    fontWeight: "bold",
                  }}
                >
                  Explore Destination →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}