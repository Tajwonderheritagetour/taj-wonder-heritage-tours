interface TourHighlightsProps {
  highlights: string[];
}

export default function TourHighlights({
  highlights,
}: TourHighlightsProps) {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Heading */}

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
            Why You'll Love This Tour
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            Tour Highlights
          </h2>

          <div
            style={{
              width: "90px",
              height: "5px",
              background: "#d4af37",
              margin: "0 auto",
              borderRadius: "50px",
            }}
          />
        </div>

        {/* Highlight Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#f8f9fb",
                borderRadius: "22px",
                padding: "35px",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                transition: "0.3s ease",
                borderTop: "5px solid #d4af37",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "50%",
                  background: "#08142d",
                  color: "#d4af37",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "28px",
                  marginBottom: "25px",
                }}
              >
                ⭐
              </div>

              <h3
                style={{
                  color: "#08142d",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                Highlight {index + 1}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "17px",
                  lineHeight: "30px",
                  margin: 0,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}