interface TourKnowBeforeProps {
  items: string[];
}

export default function TourKnowBefore({
  items,
}: TourKnowBeforeProps) {
  return (
    <section
      style={{
        padding: "90px 30px",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          KNOW BEFORE YOU GO
        </p>

        <h2
          style={{
            fontSize: "42px",
            color: "#08142d",
            margin: "15px 0 40px",
          }}
        >
          Helpful Information
        </h2>

        {items.map((tip, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              marginBottom: "18px",
              padding: "22px",
              borderRadius: "15px",
              borderLeft: "5px solid #d4af37",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            }}
          >
            ⭐ {tip}
          </div>
        ))}
      </div>
    </section>
  );
}