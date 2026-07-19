export default function Stats() {
  const stats = [
    {
      number: "8+",
      title: "Years Experience",
      text: "Serving travelers with trusted private tours across India.",
    },
    {
      number: "5000+",
      title: "Happy Travelers",
      text: "Guests from around the world have explored India with us.",
    },
    {
      number: "250+",
      title: "Five-Star Reviews",
      text: "Excellent service and unforgettable travel experiences.",
    },
    {
      number: "24/7",
      title: "Customer Support",
      text: "Quick assistance before and throughout your journey.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 40px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              borderTop: "5px solid #d4af37",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                color: "#d4af37",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h2>

            <h3
              style={{
                color: "#08142d",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "28px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}