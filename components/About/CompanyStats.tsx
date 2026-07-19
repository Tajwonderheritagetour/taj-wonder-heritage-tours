export default function CompanyStats() {
  const stats = [
    {
      number: "500+",
      title: "Happy Travelers",
    },
    {
      number: "22+",
      title: "Five-Star Reviews",
    },
    {
      number: "8+",
      title: "Years Experience",
    },
    {
      number: "100%",
      title: "Private Tours",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#f8f8f8",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              padding: "40px",
              textAlign: "center",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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

            <p
              style={{
                fontSize: "18px",
                color: "#08142d",
                fontWeight: "600",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}