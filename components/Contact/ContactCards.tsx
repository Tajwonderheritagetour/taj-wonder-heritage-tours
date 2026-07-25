export default function ContactCards() {
  const cards = [
    {
      icon: "📞",
      title: "Call Us",
      text: "+91 7830716981",
      link: "tel:+917830716981",
    },
    {
      icon: "✉️",
      title: "Email",
      text: "info@tajwonderheritagetour.com",
      link: "mailto:info@tajwonderheritagetour.com",
    },
    {
      icon: "📍",
      title: "Office",
      text: "Building No. 9, Deepika Vihar, Tajganj, Agra",
    },
    {
      icon: "🕒",
      title: "Available",
      text: "24 Hours • 7 Days",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "70px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
        gap: "30px",
      }}
    >
      {cards.map((item) => (
        <div
          key={item.title}
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 15px 35px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              fontSize: "46px",
            }}
          >
            {item.icon}
          </div>

          <h3
            style={{
              color: "#08142d",
              marginTop: "20px",
              marginBottom: "15px",
            }}
          >
            {item.title}
          </h3>

          {item.link ? (
            <a
              href={item.link}
              style={{
                color: "#666",
                textDecoration: "none",
                lineHeight: "28px",
                fontSize: "17px",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              {item.text}
            </a>
          ) : (
            <p
              style={{
                color: "#666",
                lineHeight: "28px",
                fontSize: "17px",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
                margin: 0,
              }}
            >
              {item.text}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}