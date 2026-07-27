import Link from "next/link";

export const metadata = {
  title: "India Travel Blog | Taj Wonder Heritage Tours",
  description:
    "Travel guides, Taj Mahal tips, Golden Triangle itineraries, Agra travel advice and expert India tour information.",
};

const posts = [
  {
    slug: "best-time-to-visit-taj-mahal",
    title: "Best Time to Visit Taj Mahal (2026 Guide)",
    description:
      "Discover the best season, weather, sunrise timings and travel tips before visiting the Taj Mahal.",
    image: "/images/blog/best-time-to-visit-taj-mahal.jpg",
    date: "July 2026",
    category: "Travel Guide",
    readTime: "7 min read",
  },
  {
    slug: "best-places-to-visit-in-agra",
    title: "10 Best Places to Visit in Agra",
    description:
      "Explore Agra's most famous attractions including the Taj Mahal, Agra Fort, Fatehpur Sikri and more.",
    image: "/images/blog/best-places-to-visit-in-agra.jpg",
    date: "July 2026",
    category: "Agra",
    readTime: "8 min read",
  },
  {
    slug: "things-to-do-in-agra",
    title: "Top Things to Do in Agra",
    description:
      "Discover unforgettable experiences in Agra beyond the Taj Mahal including local food, markets and hidden gems.",
    image: "/images/blog/things-to-do-in-agra.jpg",
    date: "July 2026",
    category: "Agra",
    readTime: "6 min read",
  },
  {
    slug: "taj-mahal-sunrise-vs-sunset",
    title: "Taj Mahal Sunrise vs Sunset",
    description:
      "Compare sunrise and sunset visits to the Taj Mahal and discover which experience is best for your trip.",
    image: "/images/blog/taj-mahal-sunrise-vs-sunset.jpg",
    date: "July 2026",
    category: "Taj Mahal",
    readTime: "7 min read",
  },
  {
    slug: "golden-triangle-india-itinerary",
    title: "Golden Triangle India Itinerary (3, 5 & 7 Days)",
    description:
      "Complete travel itinerary covering Delhi, Agra and Jaipur with expert travel tips and suggested routes.",
    image: "/images/blog/golden-triangle-itinerary.jpg",
    date: "July 2026",
    category: "Golden Triangle",
    readTime: "10 min read",
  },
];

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
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            India Travel Blog
          </span>

          <h1
            style={{
              fontSize: "54px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Expert India Travel Guides
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#eee",
              lineHeight: "34px",
            }}
          >
            Helpful travel guides, destination advice, Taj Mahal tips,
            Golden Triangle itineraries and local recommendations from
            Taj Wonder Heritage Tours.
          </p>
        </div>
      </section>

      {/* Articles */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "70px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            color: "#08142d",
            marginBottom: "40px",
          }}
        >
          Latest Articles
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "35px",
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                transition: "all .3s ease",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      background: "#d4af37",
                      color: "#08142d",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {post.category}
                  </span>

                  <span
                    style={{
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    {post.date}
                  </span>

                  <span
                    style={{
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    • {post.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "30px",
                    color: "#08142d",
                    marginBottom: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    marginBottom: "25px",
                  }}
                >
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-block",
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "14px 30px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}