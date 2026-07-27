import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <footer
      style={{
        background: "#08142d",
        color: "#fff",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "45px 20px 25px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        {/* Company */}
        <div>
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginBottom: "18px",
            }}
          >
            <Image
              src="/images/footer-logo-icon.png"
              alt="Taj Wonder Heritage Tours"
              width={140}
              height={140}
              priority
              style={{
                width: "140px",
                height: "auto",
              }}
            />
          </Link>

          <p
            style={{
              color: "#d7d7d7",
              lineHeight: "28px",
              fontSize: "15px",
              marginBottom: "22px",
            }}
          >
            Discover India's rich heritage through trusted private tours,
            experienced chauffeurs and licensed local guides. We create
            unforgettable luxury travel experiences across Incredible India.
          </p>

          <a
            href="https://wa.me/917830716981"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 22px",
              borderRadius: "40px",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              color: "#d4af37",
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Quick Links
          </h3>

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Tours", "/tours"],
            ["Destinations", "/destinations"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([name, href]) => (
            <div key={name} style={{ marginBottom: "12px" }}>
              <Link
                href={href}
                style={{
                  color: "#d7d7d7",
                  textDecoration: "none",
                }}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>

        {/* Popular Tours */}
        <div>
          <h3
            style={{
              color: "#d4af37",
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Popular Tours
          </h3>

          {[
            "Same Day Taj Mahal Tour",
            "Taj Mahal Sunrise Tour",
            "Golden Triangle Tour",
            "Rajasthan Heritage Tour",
            "Ranthambore Tiger Safari",
          ].map((tour) => (
            <p
              key={tour}
              style={{
                color: "#d7d7d7",
                marginBottom: "12px",
                lineHeight: "26px",
              }}
            >
              {tour}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              color: "#d4af37",
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Contact Us
          </h3>

          <p
            style={{
              color: "#d7d7d7",
              lineHeight: "28px",
              marginBottom: "16px",
            }}
          >
            📍 Building No. 9
            <br />
            Deepika Vihar
            <br />
            Tajganj, Agra 282001
          </p>

          <p
            style={{
              color: "#d7d7d7",
              marginBottom: "12px",
            }}
          >
            📞 +91 7830716981
          </p>

          <p
            style={{
              color: "#d7d7d7",
              marginBottom: "12px",
              wordBreak: "break-word",
            }}
          >
            ✉ info@tajwonderheritagetours.com
          </p>

          <p
            style={{
              color: "#d7d7d7",
            }}
          >
            🕒 Available 24/7
          </p>
        </div>
      </div>

      {/* Bottom Footer */}

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          padding: "18px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            color: "#bdbdbd",
            fontSize: "14px",
          }}
        >
          <div>
            © {new Date().getFullYear()} Taj Wonder Heritage Tours. All Rights
            Reserved.
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/privacy-policy"
              style={{
                color: "#bdbdbd",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>

            <Link
             href="/terms-and-conditions"
              style={{
                color: "#bdbdbd",
                textDecoration: "none",
              }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}