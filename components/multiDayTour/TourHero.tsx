import Link from "next/link";

type TourHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  destinations: string;
  price: string;
};

export default function TourHero({
  title,
  subtitle,
  image,
  duration,
  destinations,
  price,
}: TourHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        height: "80vh",
        minHeight: "650px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,20,45,.72)",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          PRIVATE INDIA TOUR
        </p>

        <h1
          style={{
            color: "white",
            fontSize: "58px",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "22px",
            lineHeight: "36px",
            marginBottom: "40px",
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,.15)",
              padding: "12px 20px",
              borderRadius: "30px",
            }}
          >
            ⏳ {duration}
          </span>

          <span
            style={{
              background: "rgba(255,255,255,.15)",
              padding: "12px 20px",
              borderRadius: "30px",
            }}
          >
            📍 {destinations}
          </span>

          <span
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "12px 20px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            {price}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/917830716981"
            style={{
              background: "#25D366",
              color: "white",
              padding: "16px 35px",
              borderRadius: "40px",
              fontWeight: "bold",
            }}
          >
            💬 WhatsApp Now
          </a>

          <Link
            href="/contact"
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "16px 35px",
              borderRadius: "40px",
              fontWeight: "bold",
            }}
          >
            Book This Tour
          </Link>
        </div>
      </div>
    </section>
  );
}