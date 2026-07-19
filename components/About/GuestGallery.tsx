import Image from "next/image";

export default function GuestGallery() {
 const images = [
  "/images/about/guest-1.jpg",
  "/images/about/guest-2.jpg",
  "/images/about/guest-3.jpg",
];

  return (
    <section
      style={{
        padding: "110px 20px",
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
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Guest Memories
          </span>

          <h2
            style={{
              fontSize: "52px",
              color: "#08142d",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Every Journey Creates
            <br />
            A Beautiful Story
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#666",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Every smile tells a story. We are proud to welcome travelers from
            around the world and create unforgettable experiences across India's
            most iconic destinations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "24px",
                boxShadow: "0 20px 50px rgba(0,0,0,.12)",
              }}
            >
              <Image
                src={image}
                alt={`Guest ${index + 1}`}
                width={600}
                height={750}
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}