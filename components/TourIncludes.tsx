type TourIncludesProps = {
  included: string[];
  excluded: string[];
};

export default function TourIncludes({
  included,
  excluded,
}: TourIncludesProps) {
  return (
    <section
      style={{
        marginBottom: "70px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        <div
          style={{
            background: "#f8fff8",
            padding: "30px",
            borderRadius: "18px",
          }}
        >
          <h2
            style={{
              color: "#0a8a3d",
              marginBottom: "20px",
            }}
          >
            ✅ Included
          </h2>

          {included.map((item) => (
            <p key={item}>✔ {item}</p>
          ))}
        </div>

        <div
          style={{
            background: "#fff8f8",
            padding: "30px",
            borderRadius: "18px",
          }}
        >
          <h2
            style={{
              color: "#d62828",
              marginBottom: "20px",
            }}
          >
            ❌ Not Included
          </h2>

          {excluded.map((item) => (
            <p key={item}>✖ {item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}