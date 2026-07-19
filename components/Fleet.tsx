import Link from "next/link";

export default function Fleet() {
  const vehicles = [
    {
      name: "Maruti Dzire",
      capacity: "1–3 Travelers",
      image: "/images/fleet/dzire.jpg",
      best: "Perfect for Couples",
      description:
        "Comfortable air-conditioned sedan ideal for airport transfers, Taj Mahal tours and private day trips.",
    },
    {
      name: "Toyota Innova Crysta",
      capacity: "1–6 Travelers",
      image: "/images/fleet/innova-crysta.jpg",
      best: "Best for Families",
      description:
        "Premium MPV offering spacious seating and exceptional comfort for Golden Triangle and Rajasthan tours.",
    },
    {
      name: "Kia Carens",
      capacity: "1–5 Travelers",
      image: "/images/fleet/kia-carens.jpg",
      best: "Family Comfort",
      description:
        "Modern and stylish vehicle with generous luggage space, perfect for sightseeing and multi-day trips.",
    },
    {
      name: "Toyota Taisor",
      capacity: "1–4 Travelers",
      image: "/images/fleet/toyota-taisor.jpg",
      best: "City Explorer",
      description:
        "Comfortable compact SUV ideal for Delhi, Agra and Jaipur city tours.",
    },
    {
      name: "Force Urbania",
      capacity: "7–17 Travelers",
      image: "/images/fleet/force-urbania.jpg",
      best: "Luxury Groups",
      description:
        "Luxury minibus with premium seating, perfect for families, corporate groups and private India tours.",
    },
    {
      name: "Tempo Traveller",
      capacity: "9–26 Travelers",
      image: "/images/fleet/tempo-traveller.jpg",
      best: "Large Groups",
      description:
        "Comfortable group vehicle for educational trips, family vacations and customized tours across India.",
    },
  ];

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
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          PREMIUM TRANSPORT
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "44px",
            color: "#08142d",
            marginBottom: "20px",
          }}
        >
          Travel in Comfort & Style
        </h2>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto 60px",
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          Our private air-conditioned vehicles are professionally maintained,
          driven by experienced chauffeurs, and designed to make every journey
          across India comfortable and memorable.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "30px",
          }}
        >
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "28px" }}>
                <span
                  style={{
                    background: "#08142d",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: "30px",
                    fontSize: "13px",
                    display: "inline-block",
                    marginBottom: "16px",
                  }}
                >
                  {vehicle.best}
                </span>

                <h3
                  style={{
                    fontSize: "26px",
                    color: "#08142d",
                    marginBottom: "10px",
                  }}
                >
                  {vehicle.name}
                </h3>

                <p
                  style={{
                    color: "#d4af37",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  👥 {vehicle.capacity}
                </p>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "28px",
                    marginBottom: "25px",
                  }}
                >
                  {vehicle.description}
                </p>

                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "14px",
                    borderRadius: "40px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Book This Vehicle
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}