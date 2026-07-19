type TourOverviewProps = {
  overview: string;
};

export default function TourOverview({
  overview,
}: TourOverviewProps) {
  return (
    <section
      style={{
        marginTop: "60px",
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
        Tour Overview
      </h2>

      <p
        style={{
          fontSize: "19px",
          lineHeight: "34px",
          color: "#555",
        }}
      >
        {overview}
      </p>
    </section>
  );
}