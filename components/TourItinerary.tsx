type TourItineraryProps = {
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
};

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

      {itinerary.map((item, index) => (
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

          <div>
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
                color: "#555",
                lineHeight: "30px",
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}