import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#08142d",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            color: "#d4af37",
            margin: 0,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "42px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Oops! Page Not Found
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#ddd",
            lineHeight: "34px",
            marginBottom: "40px",
          }}
        >
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring incredible India.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              background: "#d4af37",
              color: "#08142d",
              padding: "16px 34px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ← Back to Home
          </Link>

          <Link
            href="/tours"
            style={{
              background: "#fff",
              color: "#08142d",
              padding: "16px 34px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Explore Tours
          </Link>
        </div>
      </div>
    </main>
  );
}