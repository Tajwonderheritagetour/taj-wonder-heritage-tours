import Link from "next/link";

export default function TourBooking() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#08142d",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* Left Side */}

          <div>
            <span
              style={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Book With Confidence
            </span>

            <h2
              style={{
                fontSize: "52px",
                color: "#fff",
                marginTop: "18px",
                marginBottom: "20px",
                lineHeight: "62px",
              }}
            >
              Request Your Personalized Tour Quote
            </h2>

            <p
              style={{
                color: "#d9d9d9",
                lineHeight: "34px",
                fontSize: "18px",
                marginBottom: "35px",
              }}
            >
              Every tour is customized according to your travel dates,
              group size, hotel preference and sightseeing interests.
              Contact our travel specialists for a free quotation.
            </p>

            <div
              style={{
                display: "grid",
                gap: "18px",
              }}
            >
              {[
                "✅ Instant Confirmation",
                "✅ Private Air-Conditioned Vehicle",
                "✅ Licensed Local Tour Guide",
                "✅ Flexible Pickup & Drop",
                "✅ 24/7 WhatsApp Assistance",
                "✅ Fully Customizable Itinerary",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "28px",
              padding: "40px",
              boxShadow: "0 25px 60px rgba(0,0,0,.25)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "#d4af37",
                color: "#08142d",
                padding: "8px 18px",
                borderRadius: "30px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              ⭐ Luxury Private Tour
            </span>

            <h2
              style={{
                color: "#08142d",
                fontSize: "42px",
                marginBottom: "20px",
              }}
            >
              Get Your Free Quote
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "30px",
                marginBottom: "30px",
              }}
            >
              Our travel experts will prepare a personalized itinerary and
              quotation based on your travel plans. No hidden charges. No
              obligation.
            </p>

            <div
              style={{
                display: "grid",
                gap: "15px",
                marginBottom: "35px",
              }}
            >
              <div>⭐ 5-Star Rated Experience</div>
              <div>🚘 100% Private Tour</div>
              <div>🛡️ Secure Booking</div>
              <div>🌍 Trusted by International Travelers</div>
            </div>

            <a
              href="https://wa.me/917830716981"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#25D366",
                color: "#fff",
                textAlign: "center",
                padding: "18px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "18px",
                marginBottom: "18px",
              }}
            >
              💬 Chat on WhatsApp
            </a>

            <Link
              href="/contact"
              style={{
                display: "block",
                background: "#d4af37",
                color: "#08142d",
                textAlign: "center",
                padding: "18px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              📩 Request Free Quote
            </Link>

            <p
              style={{
                textAlign: "center",
                marginTop: "25px",
                color: "#777",
                fontSize: "15px",
                lineHeight: "26px",
              }}
            >
              Every itinerary is tailor-made for your requirements. Contact us
              today and receive a personalized quotation within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}