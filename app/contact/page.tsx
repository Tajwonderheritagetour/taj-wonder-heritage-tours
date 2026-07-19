import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: "90px",
          background: "#f8f9fb",
          minHeight: "100vh",
        }}
      >
        {/* ================= HERO ================= */}

<section
  style={{
    background:
      "linear-gradient(rgba(8,20,45,.82), rgba(8,20,45,.82)), url('/images/contact/contact-banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    padding: "170px 20px 140px",
  }}
>
  <span
    style={{
      color: "#d4af37",
      letterSpacing: "4px",
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "18px",
    }}
  >
    Contact Taj Wonder Heritage Tours
  </span>

  <h1
    style={{
      fontSize: "72px",
      lineHeight: "1.15",
      marginTop: "25px",
      marginBottom: "30px",
      fontWeight: 800,
    }}
  >
    Let's Plan Your
    <br />
    Dream Journey to India
  </h1>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "24px",
      lineHeight: "40px",
      color: "#f1f1f1",
    }}
  >
    Whether you're planning your first visit to the Taj Mahal,
    exploring Rajasthan's royal palaces, or creating a customized
    private tour across India, we're here to help every step of
    the way.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "50px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="tel:+917830716981"
      style={{
        background: "#d4af37",
        color: "#08142d",
        textDecoration: "none",
        padding: "18px 38px",
        borderRadius: "50px",
        fontWeight: 700,
        fontSize: "18px",
      }}
    >
      📞 Call Now
    </a>

    <a
      href="https://wa.me/917830716981"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#25D366",
        color: "#fff",
        textDecoration: "none",
        padding: "18px 38px",
        borderRadius: "50px",
        fontWeight: 700,
        fontSize: "18px",
      }}
    >
      💬 WhatsApp
    </a>
  </div>
</section>

        {/* Contact Cards */}

        <section
          style={{
            maxWidth: "1200px",
            margin: "70px auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: "📞",
              title: "Call Us",
              text: "+91 7830716981",
            },
            {
              icon: "✉️",
              title: "Email",
              text: "info@tajwonderheritagetour.com",
            },
            {
              icon: "📍",
              title: "Office",
              text: "Building No. 9, Deepika Vihar, Tajganj, Agra",
            },
            {
              icon: "🕒",
              title: "Available",
              text: "24 Hours • 7 Days",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
              }}
            >
              <div style={{ fontSize: "46px" }}>{item.icon}</div>

              <h3
                style={{
                  color: "#08142d",
                  marginTop: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* Contact Form */}

        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto 80px",
            padding: "45px",
            background: "#fff",
            borderRadius: "22px",
            boxShadow: "0 20px 45px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#08142d",
              marginBottom: "35px",
              fontSize: "38px",
            }}
          >
            Send Us Your Travel Inquiry
          </h2>

          <form
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <textarea
              rows={6}
              placeholder="Tell us about your travel plans..."
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#d4af37",
                color: "#08142d",
                border: "none",
                padding: "18px",
                borderRadius: "40px",
                fontWeight: 700,
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Send Inquiry
            </button>
          </form>
        </section>

        {/* WhatsApp CTA */}

        <section
          style={{
            background: "#08142d",
            color: "#fff",
            textAlign: "center",
            padding: "90px 20px",
          }}
        >
          <h2
            style={{
              color: "#d4af37",
              fontSize: "44px",
              marginBottom: "20px",
            }}
          >
            Need an Instant Reply?
          </h2>

          <p
            style={{
              color: "#ddd",
              fontSize: "18px",
              marginBottom: "35px",
            }}
          >
            Chat with us directly on WhatsApp for immediate assistance.
          </p>

          <a
            href="https://wa.me/917830716981"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              padding: "18px 36px",
              borderRadius: "40px",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </section>
      </main>

    </>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box" as const,
};