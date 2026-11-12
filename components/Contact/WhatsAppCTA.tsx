
export default function WhatsAppCTA() {
  const message =
    "Hello Taj Wonder Heritage Tours! I am interested in planning a private tour in India. Please share your tour options and quotation. My travel date and number of travellers are yet to be confirmed.";

  const whatsappLink = `https://wa.me/917830716981?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      style={{
        background: "#08142d",
        color: "#fff",
        textAlign: "center",
        padding: "clamp(60px, 9vw, 90px) 20px",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "clamp(30px, 5vw, 44px)",
          marginBottom: "20px",
        }}
      >
        Need an Instant Reply?
      </h2>

      <p
        style={{
          color: "#ddd",
          fontSize: "18px",
          lineHeight: 1.7,
          maxWidth: "650px",
          margin: "0 auto 35px",
        }}
      >
        Have questions about the Taj Mahal, Golden Triangle tours, private
        transfers or tiger safaris? Chat directly with our team on WhatsApp.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send a travel enquiry to Taj Wonder Heritage Tours on WhatsApp"
        style={{
          display: "inline-block",
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          padding: "18px 36px",
          borderRadius: "40px",
          fontWeight: 700,
          fontSize: "18px",
          transition: "0.3s",
        }}
      >
        💬 Send Your Enquiry on WhatsApp
      </a>

      <p
        style={{
          color: "#bbb",
          fontSize: "14px",
          marginTop: "22px",
        }}
      >
        Personal assistance for your India holiday.
      </p>
    </section>
  );
}
