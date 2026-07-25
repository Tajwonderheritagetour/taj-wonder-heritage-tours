import Image from "next/image";

export default function AboutStory() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center",
      }}
    >
      <div>
        <Image
          src="/images/about/guest-1.jpg"
          alt="Taj Wonder Heritage Tours"
          width={600}
          height={450}
          style={{
            width: "100%",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 20px 50px rgba(0,0,0,.15)",
          }}
        />
      </div>

      <div>
        <span
          style={{
            color: "#d4af37",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          OUR STORY
        </span>

        <h2
          style={{
            fontSize: "42px",
            margin: "15px 0",
            color: "#08142d",
          }}
        >
          Creating Luxury Experiences Across India
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Taj Wonder Heritage Tours was founded with one mission —
          to provide authentic, comfortable and unforgettable journeys
          across India's most iconic destinations.
        </p>

        <br />

        <p
          style={{
            color: "#555",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          From the timeless beauty of the Taj Mahal to Rajasthan's
          royal palaces and India's hidden cultural gems, we carefully
          craft every itinerary with personal attention and local expertise.
        </p>
      </div>
    </section>
  );
}