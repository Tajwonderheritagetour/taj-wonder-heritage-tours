export default function ContactHero() {
  return (
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
  );
}