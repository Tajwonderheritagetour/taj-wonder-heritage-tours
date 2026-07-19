import Link from "next/link";

interface TourHeroProps {
  title: string;
  image: string;
  duration: string;
  location: string;
}

export default function TourHero({
  title,
  image,
  duration,
  location,
}: TourHeroProps) {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(8,20,45,.88), rgba(8,20,45,.82)), url('${image}')`,
       backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
       padding: "190px 20px 150px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
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
          Private Luxury Tour
        </span>
<div
  style={{
    marginTop: "18px",
    color: "#ffffff",
    fontSize: "15px",
    opacity: 0.9,
    letterSpacing: "1px",
  }}
>
  Home / Tours / {title}
</div>

       <h1
  style={{
    fontSize: "68px",
    lineHeight: "1.15",
    margin: "25px 0",
    fontWeight: 800,
    color: "#ffffff",
    textShadow: "0 4px 18px rgba(0,0,0,.65)",
  }}
>
  {title}
</h1>
        <p
          style={{
            fontSize: "22px",
           color: "rgba(255,255,255,.92)",
            marginBottom: "45px",
            maxWidth: "760px",
            marginInline: "auto",
          }}
        >
          Experience India's finest heritage with carefully designed private
          journeys, professional chauffeurs and expert local guides.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.15)",
              padding: "16px 28px",
              borderRadius: "50px",
              backdropFilter: "blur(10px)",
            }}
          >
            🕒 {duration}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.15)",
              padding: "16px 28px",
              borderRadius: "50px",
              backdropFilter: "blur(10px)",
            }}
          >
            📍 {location}
          </div>

          <div
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "16px 28px",
              borderRadius: "50px",
              fontWeight: 700,
            }}
          >
            ⭐ Fully Customizable
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            style={{
              background: "#d4af37",
              color: "#08142d",
              textDecoration: "none",
              padding: "18px 38px",
              borderRadius: "50px",
              fontWeight: 700,
            }}
          >
            Request Free Quote
          </Link>

          <Link
            href="https://wa.me/917830716981"
            target="_blank"
            style={{
              border: "2px solid white",
              color: "#fff",
              textDecoration: "none",
              padding: "18px 38px",
              borderRadius: "50px",
              fontWeight: 700,
            }}
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}