import Image from "next/image";

export default function FounderMessage() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "100px auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Founder Image */}

        <div
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/images/about/founder.jpg"
            alt="Founder"
            width={550}
            height={650}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "25px",
              objectFit: "cover",
              boxShadow: "0 20px 50px rgba(0,0,0,.18)",
            }}
          />
        </div>

        {/* Founder Text */}

        <div>
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            FOUNDER'S MESSAGE
          </span>

          <h2
            style={{
              fontSize: "42px",
              margin: "20px 0",
              color: "#08142d",
            }}
          >
            Welcome to Taj Wonder Heritage Tours
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              marginBottom: "25px",
            }}
          >
            My name is <strong>Dev Nagar</strong>, and I have spent many years
            helping travelers discover the beauty, history, and culture of
            India.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              marginBottom: "25px",
            }}
          >
            Our goal is not simply to provide transportation—we create memorable
            travel experiences. Every itinerary is carefully planned with
            personal attention, trusted local knowledge, and professional
            service.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              marginBottom: "35px",
            }}
          >
            Whether you're visiting the Taj Mahal, exploring Rajasthan, or
            taking a complete Golden Triangle tour, we promise honest service,
            comfortable travel, and unforgettable memories.
          </p>

          <h3
            style={{
              color: "#d4af37",
              fontSize: "26px",
            }}
          >
            Dev Nagar
          </h3>

          <p
            style={{
              color: "#888",
            }}
          >
            Founder & Tour Director
          </p>
        </div>
      </div>
    </section>
  );
}