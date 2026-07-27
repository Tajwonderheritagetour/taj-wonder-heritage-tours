export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Williams",
      country: "United Kingdom",
      review:
        "Excellent service! Our Golden Triangle tour was perfectly organized. The driver was punctual, professional and made our trip unforgettable.",
    },
    {
      name: "Michael Anderson",
      country: "Australia",
      review:
        "Highly recommended! Taj Wonder Heritage Tours provided a wonderful Agra experience. Sunrise at the Taj Mahal was absolutely magical.",
    },
    {
      name: "Emma Johnson",
      country: "United States",
      review:
        "Clean vehicle, knowledgeable guide and outstanding hospitality. Everything was smooth from pickup to drop-off.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f8f9fb",
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
            Guest Reviews
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "20px",
            }}
          >
            What Our Guests Say
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "20px auto 0",
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            We are proud to deliver memorable travel experiences across India.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <div
                style={{
                  color: "#d4af37",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "32px",
                  fontSize: "17px",
                  marginBottom: "30px",
                }}
              >
                "{review.review}"
              </p>

              <h3
                style={{
                  color: "#08142d",
                  marginBottom: "5px",
                }}
              >
                {review.name}
              </h3>

              <p
                style={{
                  color: "#888",
                }}
              >
                {review.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}