export default function SearchBar() {
  return (
    <section
      style={{
        marginTop: "-50px",
        position: "relative",
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#08142d",
            }}
          >
            📍 Destination
          </label>

          <select
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <option>Agra</option>
            <option>Delhi</option>
            <option>Jaipur</option>
            <option>Ranthambore</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#08142d",
            }}
          >
            🗓 Tour
          </label>

          <select
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <option>Same Day</option>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>5 Days</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#08142d",
            }}
          >
            👥 Travelers
          </label>

          <select
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4+ Persons</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <button
            style={{
              width: "100%",
              background: "#d4af37",
              color: "#08142d",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            🔍 Search Tours
          </button>
        </div>
      </div>
    </section>
  );
}