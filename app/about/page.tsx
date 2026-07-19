import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FounderSection from "@/components/About/FounderSection";
import WhyChooseSection from "@/components/About/WhyChooseSection";
import GuestGallery from "@/components/About/GuestGallery";
import StatsSection from "@/components/About/StatsSection";
import MissionSection from "@/components/About/MissionSection";
import CTASection from "@/components/About/CTASection";

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px" }}>
        {/* ================= HERO ================= */}

        <section
          style={{
            background: "#f8f9fb",
            padding: "170px 20px 100px",
          }}
        >
          <div
            style={{
              maxWidth: "1300px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(450px,1fr))",
              gap: "70px",
              alignItems: "center",
            }}
          >
            {/* Left */}

            <div>
              <span
                style={{
                  color: "#d4af37",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                About Taj Wonder Heritage Tours
              </span>

              <h1
                style={{
                  fontSize: "64px",
                  color: "#08142d",
                  lineHeight: "1.1",
                  marginTop: "20px",
                  marginBottom: "25px",
                  fontWeight: 800,
                }}
              >
                Explore Heritage.
                <br />
                Experience India.
              </h1>

              <p
                style={{
                  color: "#666",
                  fontSize: "20px",
                  lineHeight: "34px",
                  marginBottom: "40px",
                }}
              >
                We create unforgettable private journeys across India's most
                iconic destinations. From the timeless beauty of the Taj Mahal
                to the royal cities of Rajasthan, every experience is
                thoughtfully designed with comfort, authenticity and exceptional
                hospitality.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/tours"
                  style={{
                    background: "#d4af37",
                    color: "#08142d",
                    padding: "18px 38px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Explore Tours
                </Link>

                <Link
                  href="/contact"
                  style={{
                    border: "2px solid #08142d",
                    color: "#08142d",
                    padding: "18px 38px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right */}

            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src="/images/about/founder.jpg"
                alt="Dev Nagar"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "24px",
                  boxShadow: "0 30px 70px rgba(0,0,0,.18)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
                  background: "rgba(255,255,255,.96)",
                  borderRadius: "20px",
                  padding: "22px 28px",
                  boxShadow: "0 15px 40px rgba(0,0,0,.15)",
                  maxWidth: "320px",
                }}
              >
                <div
                  style={{
                    color: "#FFD700",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                >
                  ★★★★★
                </div>

                <h3
                  style={{
                    color: "#08142d",
                    margin: 0,
                    fontSize: "24px",
                    lineHeight: "30px",
                  }}
                >
                  Trusted by
                  <br />
                  International Travelers
                </h3>

                <div
                  style={{
                    marginTop: "16px",
                    color: "#555",
                    lineHeight: "28px",
                  }}
                >
                  <div>📍 Based in Agra, India</div>
                  <div>🚘 Private Luxury Tours</div>
                  <div>🏛 Local Heritage Expert</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Sections */}

        <FounderSection />

        <WhyChooseSection />

        <GuestGallery />

        <StatsSection />

        <MissionSection />

        <CTASection />
      </main>

    </>
  );
}