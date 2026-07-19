type TourHeroProps = {
  title: string;
  image: string;
  price: string;
  duration: string;
  location: string;
};

export default function TourHero({
  title,
  image,
  price,
  duration,
  location,
}: TourHeroProps) {
  return (
    <section
      style={{
        marginBottom: "50px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ⭐⭐⭐⭐⭐ 4.9 (245 Reviews)
          </div>

          <h1
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginBottom: "15px",
            }}
          >
            {title}
          </h1>

          <p style={{ fontSize: "18px", color: "#555" }}>
            📍 {location} &nbsp;&nbsp; | &nbsp;&nbsp; 🕒 {duration} &nbsp;&nbsp; |
            &nbsp;&nbsp; 🚗 Private Tour
          </p>
        </div>

        <div
          style={{
            background: "#08142d",
            color: "white",
            padding: "30px",
            borderRadius: "20px",
            minWidth: "260px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d4af37", marginBottom: "15px" }}>
            {price}
          </h2>

          <a
            href="https://wa.me/917830716981"
            style={{
              display: "block",
              background: "#25D366",
              color: "white",
              padding: "14px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            💬 WhatsApp Now
          </a>

          <a
            href="tel:+917830716981"
            style={{
              display: "block",
              background: "#d4af37",
              color: "#08142d",
              padding: "14px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}