import Link from "next/link";
import BlogFilter from "@/components/Blog/BlogFilter";

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
{
  slug: "how-to-reach-taj-mahal-from-delhi",
  title: "How to Reach Taj Mahal from Delhi (2026 Guide)",
  description:
    "Complete guide to travelling from Delhi to the Taj Mahal by private car, train, bus and more.",
  image: "/images/blog/how-to-reach-taj-mahal-from-delhi.jpg",
  date: "August 2026",
  category: "Travel Guide",
  readTime: "9 min read",
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

{/* Featured Article */}

<section
  style={{
    maxWidth: "1200px",
    margin: "70px auto",
    padding: "0 20px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "40px",
      background: "#fff",
      borderRadius: "22px",
      overflow: "hidden",
      boxShadow: "0 15px 40px rgba(0,0,0,.08)",
    }}
  >
    <img
      src="/images/blog/best-time-to-visit-taj-mahal.jpg"
      alt="Best Time to Visit Taj Mahal"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        background: "#f5f5f5",
        minHeight: "420px",
      }}
    />

    <div
      style={{
        padding: "45px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: "#d4af37",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Featured Guide
      </span>

      <h2
        style={{
          fontSize: "46px",
          color: "#08142d",
          lineHeight: "1.2",
          marginBottom: "25px",
        }}
      >
        Best Time to Visit the Taj Mahal (2026 Guide)
      </h2>

      <p
        style={{
          color: "#666",
          lineHeight: "34px",
          fontSize: "18px",
          marginBottom: "35px",
        }}
      >
        Discover the perfect season, sunrise timings,
        weather conditions, photography tips and expert
        travel advice before visiting the world's most
        beautiful monument.
      </p>

      <Link
        href="/blog/best-time-to-visit-taj-mahal"
        style={{
          display: "inline-block",
          width: "fit-content",
          background: "#08142d",
          color: "#fff",
          textDecoration: "none",
          padding: "16px 34px",
          borderRadius: "40px",
          fontWeight: 700,
        }}
      >
        Read Complete Guide →
      </Link>
    </div>
  </div>
</section>
{/* Popular Articles */}

<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto 70px",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      fontSize: "38px",
      color: "#08142d",
      marginBottom: "35px",
      textAlign: "center",
    }}
  >
    Most Popular Travel Guides
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    }}
  >
    {posts.slice(0, 3).map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        style={{
          textDecoration: "none",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          color: "#08142d",
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "190px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "22px",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            {post.category}
          </span>

          <h3
            style={{
              marginTop: "12px",
              fontSize: "24px",
              lineHeight: "1.35",
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              color: "#666",
              marginTop: "12px",
              lineHeight: "28px",
            }}
          >
            {post.readTime}
          </p>
        </div>
      </Link>
    ))}
  </div>
</section>

{/* Blog Cards */}

<BlogFilter posts={posts} />
{/* Newsletter */}

<section
  style={{
    background: "#08142d",
    color: "#fff",
    marginTop: "90px",
    padding: "80px 20px",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "850px",
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
      Stay Updated
    </span>

    <h2
      style={{
        fontSize: "48px",
        margin: "20px 0",
      }}
    >
      Get the Latest India Travel Tips
    </h2>

    <p
      style={{
        color: "#ddd",
        fontSize: "20px",
        lineHeight: "34px",
        marginBottom: "35px",
      }}
    >
      Receive expert travel advice, destination guides,
      seasonal offers and exclusive private tour updates
      from Taj Wonder Heritage Tours.
    </p>

    <Link
      href="/contact"
      style={{
        display: "inline-block",
        background: "#d4af37",
        color: "#08142d",
        padding: "18px 42px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "18px",
      }}
    >
      Contact Our Travel Experts →
    </Link>
  </div>
</section>

</main>
  );
}