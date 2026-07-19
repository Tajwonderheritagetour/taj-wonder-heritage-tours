export default function Founder() {
  return (
    <section
      style={{
        padding: "90px 60px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <img
          src="/images/dev-nagar.jpg"
          alt="Dev Nagar - Founder"
          style={{
            width: "100%",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />

        <div>
          <p
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            MEET YOUR TOUR EXPERT
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginTop: "10px",
            }}
          >
            Dev Nagar
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            I began my journey in tourism more than 8 years ago, welcoming
            travelers from around the world and helping them discover the beauty
            of India.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Tourism has always been a part of my family. Inspired by my father's
            experience, I founded Taj Wonder Heritage Tours to provide private,
            comfortable and unforgettable travel experiences across India.
          </p>

          <ul
            style={{
              lineHeight: "36px",
              fontSize: "18px",
              color: "#08142d",
            }}
          >
            <li>✔ 8+ Years Tourism Experience</li>
            <li>✔ Golden Triangle Specialist</li>
            <li>✔ Rajasthan Expert</li>
            <li>✔ Personalized Private Tours</li>
            <li>✔ Honest & Reliable Service</li>
          </ul>
        </div>
      </div>
    </section>
  );
}