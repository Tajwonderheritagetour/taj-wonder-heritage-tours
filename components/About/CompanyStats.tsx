export default function CompanyStats() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "5000+",
      title: "Happy Guests",
    },
    {
      number: "100%",
      title: "Private Tours",
    },
    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section
      style={{
        background: "#08142d",
        padding: "90px 20px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "40px",
          textAlign: "center",
        }}
      >
        {stats.map((item, index) => (
          <div key={index}>
            <h2
              style={{
                color: "#d4af37",
                fontSize: "55px",
                marginBottom: "15px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#fff",
                fontSize: "20px",
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