export default function BookingBanner() {
  return (
    <section
      style={{
        background: "#08142d",
        color: "white",
        padding: "90px 30px",
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
            letterSpacing: "3px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          READY TO EXPLORE INDIA?
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Book Your Dream Tour Today
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "34px",
            color: "#f1f1f1",
            marginBottom: "40px",
          }}
        >
          Discover the Taj Mahal, Golden Triangle, Rajasthan and India's most
          incredible destinations with our private luxury tours.
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
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "white",
              padding: "16px 35px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            💬 WhatsApp Us
          </a>

          <a
            href="/contact"
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "16px 35px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📩 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}