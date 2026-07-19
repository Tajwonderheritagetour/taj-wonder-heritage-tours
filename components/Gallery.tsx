export default function Gallery() {
  const images = [
    "/images/taj-mahal.jpg",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section
      style={{
        padding: "100px 60px",
        background: "#f8f9fb",
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
            letterSpacing: "3px",
            fontWeight: "bold",
          }}
        >
          TRAVEL GALLERY
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "46px",
            color: "#08142d",
            marginBottom: "20px",
          }}
        >
          Explore Incredible India
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "750px",
            margin: "0 auto 60px",
            fontSize: "20px",
          }}
        >
          A glimpse of the unforgettable experiences waiting for you across
          India's most iconic destinations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="India Tour"
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}