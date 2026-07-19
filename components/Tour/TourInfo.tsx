export default function TourInfo() {
  const items = [
    {
      title: "Duration",
      value: "12 Hours",
      icon: "🕒",
    },
    {
      title: "Pickup",
      value: "Hotel / Airport",
      icon: "🚗",
    },
    {
      title: "Tour Type",
      value: "Private Tour",
      icon: "👤",
    },
    {
      title: "Languages",
      value: "English, Hindi",
      icon: "🗣️",
    },
    {
      title: "Cancellation",
      value: "Free Cancellation",
      icon: "✅",
    },
    {
      title: "Confirmation",
      value: "Instant Confirmation",
      icon: "⚡",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 30px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              textAlign: "center",
              borderTop: "4px solid #d4af37",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#08142d",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#666",
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}