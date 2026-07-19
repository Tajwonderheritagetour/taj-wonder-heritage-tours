export default function TourBooking() {
  return (
    <section
      style={{
        padding: "100px 30px",
        background: "#08142d",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            letterSpacing: "2px",
            fontWeight: "bold",
          }}
        >
          BOOK YOUR TOUR TODAY
        </p>

        <h2
          style={{
            fontSize: "46px",
            margin: "20px 0",
          }}
        >
          Ready to Visit the Taj Mahal?
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#ddd",
            lineHeight: "34px",
            marginBottom: "40px",
          }}
        >
          Contact Taj Wonder Heritage Tours today and enjoy a comfortable,
          private and unforgettable journey to the Taj Mahal with our experienced
          team.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/917830716981"
            style={{
              background: "#25D366",
              color: "white",
              padding: "18px 35px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            💬 WhatsApp Now
          </a>

          <a
            href="tel:+917830716981"
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "18px 35px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}