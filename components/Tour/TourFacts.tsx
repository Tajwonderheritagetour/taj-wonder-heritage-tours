export default function TourFacts() {
  const facts = [
    {
      title: "Duration",
      value: "12 Hours",
      icon: "⏱️",
    },
    {
      title: "Pickup",
      value: "Delhi / NCR",
      icon: "🚗",
    },
    {
      title: "Tour Type",
      value: "Private Tour",
      icon: "👥",
    },
    {
      title: "Languages",
      value: "English",
      icon: "🗣️",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        marginTop: "-60px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "25px",
            background: "#fff",
            borderRadius: "24px",
            padding: "35px",
            boxShadow: "0 25px 60px rgba(0,0,0,.10)",
          }}
        >
          {facts.map((fact) => (
            <div
              key={fact.title}
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "15px",
                }}
              >
                {fact.icon}
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#08142d",
                  fontSize: "20px",
                }}
              >
                {fact.title}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  color: "#666",
                  fontSize: "18px",
                }}
              >
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}