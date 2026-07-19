type TourHighlightsProps = {
  highlights: string[];
};

export default function TourHighlights({
  highlights,
}: TourHighlightsProps) {
  return (
    <section
      style={{
        marginBottom: "60px",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          color: "#08142d",
          marginBottom: "25px",
        }}
      >
        Tour Highlights
      </h2>

      <ul
        style={{
          lineHeight: "40px",
          fontSize: "19px",
          color: "#555",
        }}
      >
        {highlights.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
    </section>
  );
}