interface ItineraryDay {
  title: string;
  description: string;
}

interface TourItineraryProps {
  itinerary: ItineraryDay[];
}

export default function TourItinerary({
  itinerary,
}: TourItineraryProps) {
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
            Your Journey
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            Tour Itinerary
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

        {/* Timeline */}

        <div
          style={{
            position: "relative",
          }}
        >
          {/* Vertical Line */}

          <div
            style={{
              position: "absolute",
              left: "35px",
              top: 0,
              bottom: 0,
              width: "4px",
              background: "#d4af37",
              borderRadius: "50px",
            }}
          />

          {itinerary.map((day, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "30px",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              {/* Circle */}

              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#08142d",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 700,
                  zIndex: 2,
                  border: "5px solid #d4af37",
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </div>

              {/* Card */}

              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: "22px",
                  padding: "30px",
                  boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                }}
              >
                <span
                  style={{
                    color: "#d4af37",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    fontSize: "14px",
                  }}
                >
                  Stop {index + 1}
                </span>

                <h3
                  style={{
                    color: "#08142d",
                    fontSize: "28px",
                    marginTop: "10px",
                    marginBottom: "18px",
                  }}
                >
                  {day.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "32px",
                    fontSize: "17px",
                    margin: 0,
                  }}
                >
                  {day.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}