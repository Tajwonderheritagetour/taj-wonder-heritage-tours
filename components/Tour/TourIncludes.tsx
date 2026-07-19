interface TourIncludesProps {
  includes: string[];
  excludes: string[];
}

export default function TourIncludes({
  includes,
  excludes,
}: TourIncludesProps) {
  return (
    <section
      style={{
        background: "#f8f9fb",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

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
            Tour Information
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            What's Included
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
            gap: "35px",
          }}
        >
          {/* Includes */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 15px 35px rgba(0,0,0,.08)",
              borderTop: "6px solid #28a745",
            }}
          >
            <h3
              style={{
                color: "#28a745",
                fontSize: "30px",
                marginBottom: "30px",
              }}
            >
              ✅ Included
            </h3>

            <div
              style={{
                display: "grid",
                gap: "18px",
              }}
            >
              {includes.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                    color: "#444",
                    lineHeight: "28px",
                    fontSize: "17px",
                  }}
                >
                  <span
                    style={{
                      color: "#28a745",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    ✔
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Excludes */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 15px 35px rgba(0,0,0,.08)",
              borderTop: "6px solid #dc3545",
            }}
          >
            <h3
              style={{
                color: "#dc3545",
                fontSize: "30px",
                marginBottom: "30px",
              }}
            >
              ❌ Not Included
            </h3>

            <div
              style={{
                display: "grid",
                gap: "18px",
              }}
            >
              {excludes.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                    color: "#444",
                    lineHeight: "28px",
                    fontSize: "17px",
                  }}
                >
                  <span
                    style={{
                      color: "#dc3545",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    ✖
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}