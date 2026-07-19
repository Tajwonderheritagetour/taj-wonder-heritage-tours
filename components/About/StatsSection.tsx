export default function StatsSection() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "500+",
      title: "Happy Travelers",
    },
    {
      number: "20+",
      title: "Countries Served",
    },
    {
      number: "★★★★★",
      title: "Trusted Service",
    },
  ];

  return (
    <section
      style={{
        background: "#08142d",
        padding: "110px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
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
            Trusted Worldwide
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#ffffff",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Experience That
            <br />
            Speaks for Itself
          </h2>

          <p
            style={{
              color: "#d8d8d8",
              fontSize: "18px",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: "32px",
            }}
          >
            Every journey we organize reflects our passion for hospitality,
            professionalism and unforgettable travel experiences.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "30px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: "22px",
                padding: "45px 30px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#d4af37",
                  fontSize: "56px",
                  fontWeight: 800,
                  marginBottom: "15px",
                }}
              >
                {item.number}
              </div>

              <div
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}