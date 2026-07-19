export default function MeetTeam() {
  const team = [
    {
      name: "Dev Nagar",
      role: "Founder & Travel Expert",
      icon: "👨‍💼",
      description:
        "Passionate about creating memorable travel experiences with honest service, local knowledge and personalized tour planning.",
    },
    {
      name: "Professional Drivers",
      role: "Experienced Chauffeurs",
      icon: "🚘",
      description:
        "Our courteous drivers ensure safe, comfortable and stress-free journeys across Delhi, Agra, Jaipur, Rajasthan and North India.",
    },
    {
      name: "Local Tour Guides",
      role: "Licensed Guides",
      icon: "🏛️",
      description:
        "Friendly and knowledgeable local guides help you discover India's history, culture and heritage in an engaging way.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#08142d",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            OUR TEAM
          </p>

          <h2
            style={{
              fontSize: "42px",
              margin: "20px 0",
            }}
          >
            Meet The People Behind Your Journey
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#ddd",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            Our dedicated team works together to provide every traveler
            with a safe, comfortable and unforgettable experience across India.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "35px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "#d4af37",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                  margin: "0 auto 25px",
                }}
              >
                {member.icon}
              </div>

              <h3
                style={{
                  fontSize: "26px",
                  marginBottom: "10px",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  color: "#d4af37",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                {member.role}
              </p>

              <p
                style={{
                  color: "#ddd",
                  lineHeight: "28px",
                }}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}