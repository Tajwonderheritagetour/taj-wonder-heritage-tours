interface TourOverviewProps {
  overview: string;
}

export default function TourOverview({
  overview,
}: TourOverviewProps) {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Small Heading */}

        <span
          style={{
            color: "#d4af37",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: "18px",
          }}
        >
          Discover Your Journey
        </span>

        {/* Main Heading */}

        <h2
          style={{
            fontSize: "48px",
            color: "#08142d",
            marginBottom: "25px",
            lineHeight: "60px",
          }}
        >
          Tour Overview
        </h2>

        {/* Gold Divider */}

        <div
          style={{
            width: "90px",
            height: "5px",
            background: "#d4af37",
            borderRadius: "50px",
            marginBottom: "35px",
          }}
        />

        {/* Overview Card */}

        <div
          style={{
            background: "#f8f9fb",
            borderRadius: "24px",
            padding: "45px",
            boxShadow: "0 12px 35px rgba(0,0,0,.08)",
          }}
        >
          <p
            style={{
              fontSize: "19px",
              lineHeight: "36px",
              color: "#555",
              margin: 0,
            }}
          >
            {overview}
          </p>
        </div>

        {/* Bottom Features */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "45px",
          }}
        >
          {[
            "🏛 UNESCO Heritage",
            "🚘 Private Vehicle",
            "⭐ 5-Star Experience",
            "📞 24/7 Support",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#08142d",
                color: "#fff",
                padding: "22px",
                textAlign: "center",
                borderRadius: "18px",
                fontWeight: 600,
                fontSize: "17px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}