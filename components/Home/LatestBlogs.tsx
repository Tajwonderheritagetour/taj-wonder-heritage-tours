import Link from "next/link";

const blogs = [
  {
    title: "Best Time to Visit Taj Mahal (2026 Guide)",
    slug: "best-time-to-visit-taj-mahal",
    image: "/images/blog/best-time-to-visit-taj-mahal.jpg",
    category: "Travel Guide",
  },
  {
    title: "10 Best Places to Visit in Agra",
    slug: "best-places-to-visit-in-agra",
    image: "/images/blog/best-places-to-visit-in-agra.jpg",
    category: "Agra",
  },
  {
    title: "Things to Do in Agra",
    slug: "things-to-do-in-agra",
    image: "/images/blog/things-to-do-in-agra.jpg",
    category: "Agra",
  },
];

export default function LatestBlogs() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
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
            Travel Guides
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "20px",
            }}
          >
            Latest Travel Guides
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "20px auto 0",
              color: "#666",
              lineHeight: "32px",
              fontSize: "18px",
            }}
          >
            Expert travel tips, destination guides and helpful articles to plan
            your perfect India holiday.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "13px",
                    marginBottom: "15px",
                  }}
                >
                  {blog.category}
                </span>

                <h3
                  style={{
                    color: "#08142d",
                    fontSize: "30px",
                    lineHeight: "1.3",
                  }}
                >
                  {blog.title}
                </h3>

                <Link
                  href={`/blog/${blog.slug}`}
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    color: "#d4af37",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              background: "#08142d",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            View All Travel Guides
          </Link>
        </div>
      </div>
    </section>
  );
}