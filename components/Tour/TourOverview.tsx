interface TourOverviewProps {
  overview: string;
  image: string;
  title: string;
}

export default function TourOverview({
  overview,
  image,
  title,
}: TourOverviewProps) {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "70px 20px",
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
            marginBottom: "14px",
            fontSize: "14px",
          }}
        >
          Discover Your Journey
        </span>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: "44px",
            color: "#08142d",
            marginTop: 0,
            marginBottom: "22px",
            lineHeight: "1.15",
            fontWeight: 800,
          }}
        >
          Tour Overview
        </h2>

        {/* Gold Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#d4af37",
            borderRadius: "50px",
            marginBottom: "38px",
          }}
        />

        {/* Image + Overview */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "40px",
            width: "100%",
          }}
        >
          {/* Tour Image */}
          <div
            style={{
              flex: "0 0 46%",
              maxWidth: "46%",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#f4f4f4",
              boxShadow: "0 10px 30px rgba(0,0,0,.10)",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "contain",
                display: "block",
                background: "#f4f4f4",
              }}
            />
          </div>

          {/* Overview Content */}
          <div
            style={{
              flex: "1",
              background: "#f8f9fb",
              borderRadius: "20px",
              padding: "38px",
              boxShadow: "0 10px 30px rgba(0,0,0,.07)",
            }}
          >
            <h3
              style={{
                color: "#08142d",
                fontSize: "28px",
                lineHeight: "1.3",
                marginTop: 0,
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              About This Tour
            </h3>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.85",
                color: "#555",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {overview}
            </p>
          </div>
        </div>

        {/* Bottom Features */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "38px",
            width: "100%",
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
                flex: "1 1 220px",
                minWidth: "200px",
                background: "#08142d",
                color: "#ffffff",
                padding: "18px 15px",
                textAlign: "center",
                borderRadius: "14px",
                fontWeight: 600,
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        style={{
          display: "none",
        }}
      />
    </section>
  );
}