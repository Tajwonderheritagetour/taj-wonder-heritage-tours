import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
          gap: "70px",
          alignItems: "center",
        }}
      >
        {/* Left Image */}

        <div>
          <Image
           src="/images/about/guest-1.jpg"
            alt="Dev Nagar with Guests"
            width={600}
            height={750}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
              boxShadow: "0 25px 60px rgba(0,0,0,.15)",
            }}
          />
        </div>

        {/* Right Content */}

        <div>
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            The Person Behind Your Journey
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            Hi, I'm Dev Nagar
          </h2>

          <h3
            style={{
              color: "#d4af37",
              marginBottom: "30px",
              fontSize: "24px",
            }}
          >
            Founder of Taj Wonder Heritage Tours
          </h3>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "34px",
              marginBottom: "20px",
            }}
          >
            For over <strong>10 years</strong>, I have had the privilege of
            welcoming travelers from around the world and introducing them to
            the incredible heritage, culture and hospitality of India.
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "34px",
              marginBottom: "20px",
            }}
          >
            In <strong>2025</strong>, I founded Taj Wonder Heritage Tours with
            one simple goal — to provide every guest with a safe, comfortable
            and truly unforgettable travel experience.
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "34px",
              marginBottom: "35px",
            }}
          >
            Having proudly served more than <strong>500 travelers</strong> from
            over <strong>20 countries</strong>, I believe every journey should
            be personal, authentic and filled with lifelong memories.
          </p>

          {/* Statistics */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#f8f9fb",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#d4af37",
                  margin: 0,
                  fontSize: "42px",
                }}
              >
                10+
              </h2>

              <p style={{ color: "#666", marginTop: "10px" }}>
                Years Experience
              </p>
            </div>

            <div
              style={{
                background: "#f8f9fb",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#d4af37",
                  margin: 0,
                  fontSize: "42px",
                }}
              >
                500+
              </h2>

              <p style={{ color: "#666", marginTop: "10px" }}>
                Happy Travelers
              </p>
            </div>

            <div
              style={{
                background: "#f8f9fb",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#d4af37",
                  margin: 0,
                  fontSize: "42px",
                }}
              >
                20+
              </h2>

              <p style={{ color: "#666", marginTop: "10px" }}>
                Countries Served
              </p>
            </div>

            <div
              style={{
                background: "#f8f9fb",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#d4af37",
                  margin: 0,
                  fontSize: "34px",
                }}
              >
                ★★★★★
              </h2>

              <p style={{ color: "#666", marginTop: "10px" }}>
                Trusted Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}