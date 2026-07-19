import Image from "next/image";
import Link from "next/link";

export default function FleetPreview() {
  const fleet = [
    {
      name: "Maruti Suzuki Dzire",
      image: "/images/fleet/dzire.jpg",
      capacity: "1–3 Guests",
    },
    {
      name: "Toyota Taisor",
      image: "/images/fleet/toyota-taisor.jpg",
      capacity: "1–4 Guests",
    },
    {
      name: "Toyota Innova Crysta",
      image: "/images/fleet/innova-crysta.jpg",
      capacity: "4–6 Guests",
      popular: true,
    },
    {
      name: "Kia Carens",
      image: "/images/fleet/kia-carens.jpg",
      capacity: "4–6 Guests",
    },
    {
      name: "Force Urbania",
      image: "/images/fleet/force-urbania.jpg",
      capacity: "8–17 Guests",
    },
    {
      name: "Tempo Traveller",
      image: "/images/fleet/tempo-traveller.jpg",
      capacity: "9–26 Guests",
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
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            OUR FLEET
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              margin: "20px 0",
            }}
          >
            Travel in Comfort & Style
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#666",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            From comfortable sedans to spacious group vehicles, our modern fleet
            ensures a safe and enjoyable journey for every traveler.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {fleet.map((car) => (
            <div
              key={car.name}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ position: "relative", height: "230px" }}>
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />

                {car.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "#d4af37",
                      color: "#08142d",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Most Popular
                  </div>
                )}
              </div>

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#08142d",
                    marginBottom: "10px",
                    fontSize: "24px",
                  }}
                >
                  {car.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  Capacity: {car.capacity}
                </p>

                <Link
                  href="/fleet"
                  style={{
                    display: "inline-block",
                    background: "#08142d",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Fleet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}