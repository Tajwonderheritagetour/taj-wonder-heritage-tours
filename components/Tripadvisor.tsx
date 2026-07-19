export default function Tripadvisor() {
  return (
    <section
      style={{
        padding: "100px 30px",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
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
          TRUSTED BY TRAVELERS
        </p>

        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#08142d",
          }}
        >
          Rated 5★ on Tripadvisor
        </h2>

        <div
          style={{
            fontSize: "36px",
            color: "#00AA6C",
            marginBottom: "20px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </div>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto 50px",
            color: "#666",
            lineHeight: "34px",
          }}
        >
          Taj Wonder Heritage Tours is proud to be rated <strong>5.0 stars</strong>
          on Tripadvisor with <strong>22 verified traveler reviews</strong>.
          We are committed to delivering private, comfortable and memorable
          experiences across India.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h3 style={{ color: "#00AA6C", fontSize: "42px" }}>5.0★</h3>
            <p>Average Tripadvisor Rating</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h3 style={{ color: "#00AA6C", fontSize: "42px" }}>22</h3>
            <p>Verified Tripadvisor Reviews</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h3 style={{ color: "#00AA6C", fontSize: "42px" }}>100%</h3>
            <p>Private Customized Tours</p>
          </div>
        </div>

        <a
          href="#"
          style={{
            display: "inline-block",
            background: "#00AA6C",
            color: "white",
            padding: "18px 40px",
            borderRadius: "40px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Read Our Tripadvisor Reviews
        </a>
      </div>
    </section>
  );
}