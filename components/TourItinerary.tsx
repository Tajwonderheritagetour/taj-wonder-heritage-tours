import Link from "next/link";

type TourItineraryProps = {
  itinerary: {
    time?: string;
    title: string;
    description: string;
  }[];
};

function getDestinationLink(title: string) {
  const text = title.toLowerCase();

  if (text.includes("delhi")) {
    return {
      label: "Explore Delhi",
      href: "/destinations/delhi",
    };
  }

  if (text.includes("agra") || text.includes("taj mahal")) {
    return {
      label: "Explore Agra",
      href: "/destinations/agra",
    };
  }

  if (text.includes("jaipur")) {
    return {
      label: "Explore Jaipur",
      href: "/destinations/jaipur",
    };
  }

  return null;
}

export default function TourItinerary({
  itinerary,
}: TourItineraryProps) {
  return (
    <section
      style={{
        marginBottom: "70px",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          color: "#08142d",
          marginBottom: "35px",
        }}
      >
        Tour Itinerary
      </h2>

      {itinerary.map((item, index) => {
        const destination = getDestinationLink(item.title);

        return (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "25px",
              marginBottom: "30px",
              padding: "25px",
              background: "#f8f8f8",
              borderRadius: "18px",
            }}
          >
            {/* Time */}

            {item.time && (
              <div
                style={{
                  minWidth: "120px",
                  color: "#d4af37",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {item.time}
              </div>
            )}

            {/* Content */}

            <div
              style={{
                flex: 1,
              }}
            >
              <h3
                style={{
                  color: "#08142d",
                  marginBottom: "10px",
                  fontSize: "24px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "30px",
                  marginBottom: destination ? "18px" : 0,
                }}
              >
                {item.description}
              </p>

              {/* Destination Internal Link */}

              {destination && (
                <Link
                  href={destination.href}
                  style={{
                    display: "inline-block",
                    color: "#08142d",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderBottom: "2px solid #d4af37",
                    paddingBottom: "3px",
                  }}
                >
                  {destination.label} →
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}