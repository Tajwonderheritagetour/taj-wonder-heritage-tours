
interface TourHighlightsProps {
  highlights: string[];
}

export default function TourHighlights({
  highlights,
}: TourHighlightsProps) {
  return (
    <section
      style={{
        padding: "50px 0",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Section Heading */}
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Experience the Best
          </span>

          <h2
            style={{
              color: "#08142d",
              fontSize: "40px",
              lineHeight: "1.2",
              marginTop: "12px",
              marginBottom: "0",
              fontWeight: 800,
            }}
          >
            Tour Highlights
          </h2>

          <div
            style={{
              width: "70px",
              height: "4px",
              background: "#d4af37",
              borderRadius: "10px",
              marginTop: "16px",
            }}
          />
        </div>

        {/* Highlights Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {highlights.map((highlight, index) => (
            <div
              key={`${highlight}-${index}`}
              style={{
                background: "#f8f9fb",
                borderRadius: "18px",
                borderTop: "4px solid #d4af37",
                padding: "24px 26px",
                minHeight: "150px",
                boxShadow: "0 8px 22px rgba(8,20,45,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#08142d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "23px",
                  marginBottom: "18px",
                }}
              >
                ⭐
              </div>

              {/* Highlight Number */}
              <div
                style={{
                  color: "#08142d",
                  fontWeight: 800,
                  fontSize: "18px",
                  marginBottom: "8px",
                }}
              >
                Highlight {index + 1}
              </div>

              {/* Highlight Text */}
              <p
                style={{
                  color: "#555",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 40px 0 !important;
          }

          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }

          h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
