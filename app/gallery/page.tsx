import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const galleryImages = [
  { title: "Taj Mahal", image: "/images/gallery/taj-mahal.jpg" },
  { title: "Agra Fort", image: "/images/gallery/agra-fort.jpg" },
  { title: "Amber Fort", image: "/images/gallery/amber-fort.jpg" },
  { title: "Hawa Mahal", image: "/images/gallery/hawa-mahal.jpg" },
  { title: "Ranthambore Safari", image: "/images/gallery/ranthambore.jpg" },
  { title: "Innova Crysta", image: "/images/gallery/innova-crysta.jpg" },
  { title: "Kia Carens", image: "/images/gallery/kia-carens.jpg" },
  { title: "Tempo Traveller", image: "/images/gallery/tempo-traveller.jpg" },
  { title: "Force Urbania", image: "/images/gallery/force-urbania.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section
          style={{
            background: "#08142d",
            color: "white",
            textAlign: "center",
            padding: "90px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "54px",
              color: "#d4af37",
              marginBottom: "20px",
            }}
          >
            Our Gallery
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: "34px",
            }}
          >
            Explore our destinations, private vehicles and unforgettable travel
            experiences across India.
          </p>
        </section>

        {/* Gallery Grid */}
        <section
          style={{
            maxWidth: "1300px",
            margin: "70px auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {galleryImages.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    color: "#08142d",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </section>
      </main>

    
    </>
  );
}