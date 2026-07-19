export default function Testimonials() {
  const reviews = [
    {
      name: "Michael & Sarah",
      country: "United Kingdom 🇬🇧",
      review:
        "An unforgettable Golden Triangle tour. Everything was perfectly organized, our driver was punctual, professional and very friendly. Highly recommended!",
    },
    {
      name: "James Wilson",
      country: "Australia 🇦🇺",
      review:
        "The Taj Mahal sunrise was breathtaking. The guide was knowledgeable and the entire trip was smooth from beginning to end.",
    },
    {
      name: "Anna Müller",
      country: "Germany 🇩🇪",
      review:
        "Excellent service with a clean vehicle, safe driving and great local recommendations. We felt like VIP guests throughout the journey.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 60px",
        background: "#f8f8f8",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#08142d",
          marginBottom: "15px",
        }}
      >
        What Our Guests Say
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "60px",
        }}
      >
        Trusted by travelers from around the world.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                color: "#d4af37",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              ⭐⭐⭐⭐⭐
            </div>

            <p
              style={{
                color: "#555",
                lineHeight: "30px",
                fontStyle: "italic",
              }}
            >
              "{review.review}"
            </p>

            <h3
              style={{
                marginTop: "25px",
                color: "#08142d",
              }}
            >
              {review.name}
            </h3>

            <p style={{ color: "#888" }}>{review.country}</p>
          </div>
        ))}
      </div>
    </section>
  );
}