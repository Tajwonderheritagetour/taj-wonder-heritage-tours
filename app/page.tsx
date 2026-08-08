import FeaturedTours from "@/components/Home/FeaturedTours";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Tours from "@/components/Tours";
import Destinations from "@/components/Destinations";
import Fleet from "@/components/Fleet";
import FAQ from "@/components/FAQ";
import LatestBlogs from "@/components/Home/LatestBlogs";
import Testimonials from "@/components/Home/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <Hero />

      {/* Featured Tours */}
      <FeaturedTours />

      {/* Statistics */}
      <Stats />

      {/* Trust Bar */}
      <TrustBar />

      {/* =========================
          About Taj Wonder Heritage Tours
      ========================== */}

      <section
        style={{
          padding: "90px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            textAlign: "center",
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
            Private India Tours
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "25px",
            }}
          >
            Explore Incredible India with Trusted Local Experts
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Welcome to <strong>Taj Wonder Heritage Tours</strong>, your trusted
            travel partner for unforgettable private India tours. We specialize
            in luxury travel experiences across India's most iconic destinations,
            including the Taj Mahal, Agra, Delhi, Jaipur, Rajasthan and many
            more.

            Whether you're planning a romantic getaway, a family vacation,
            a cultural holiday or a luxury journey through India, our expert
            team ensures every detail is carefully arranged.

            Explore our{" "}
            <Link
              href="/tours/golden-triangle-tour"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Golden Triangle Tour
            </Link>
            {" "}or experience our{" "}
            <Link
              href="/tours/same-day-taj-mahal-tour"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Same Day Taj Mahal Tour
            </Link>
            {" "}with professional chauffeurs, licensed local guides and
            comfortable air-conditioned vehicles.
          </p>

          <div
            style={{
              marginTop: "45px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "25px",
            }}
          >
            <div
              style={{
                background: "#fafafa",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h3>Private Tours</h3>
              <p>
                Every itinerary is completely private and personalized to your
                interests.
              </p>
            </div>

            <div
              style={{
                background: "#fafafa",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h3>Luxury Vehicles</h3>
              <p>
                Modern air-conditioned vehicles driven by experienced
                professional chauffeurs.
              </p>
            </div>

            <div
              style={{
                background: "#fafafa",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h3>Local Guides</h3>
              <p>
                Licensed local guides helping you discover India's rich history,
                culture and heritage.
              </p>
            </div>

            <div
              style={{
                background: "#fafafa",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h3>24/7 Support</h3>
              <p>
                Our travel team is always available before, during and after
                your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <Tours />

      {/* ======= PART 2 STARTS HERE ======= */}
            {/* Destinations */}
      <Destinations />

      {/* =========================
          Why Travel with Us
      ========================== */}

      <section
        style={{
          padding: "90px 20px",
          background: "#f8f9fb",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Discover India
          </span>

          <h2
            style={{
              fontSize: "46px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "25px",
            }}
          >
            Private India Tour Packages Designed Around You
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Every traveler is different, which is why we create personalized
            private India tours that match your interests, travel pace and
            budget. Whether you dream of watching the sunrise over the Taj
            Mahal, exploring Jaipur's royal palaces, discovering Delhi's
            historical monuments or enjoying a wildlife safari in Ranthambore,
            we help create unforgettable experiences across India.
          </p>

          <div
            style={{
              marginTop: "45px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "25px",
            }}
          >
            {[
              "🏛 Taj Mahal Tours",
              "🏰 Golden Triangle Tours",
              "🐅 Ranthambore Safari",
              "🏜 Rajasthan Tours",
              "🚘 Private Chauffeur Service",
              "✈ Airport Transfers",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "0 5px 20px rgba(0,0,0,.06)",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <LatestBlogs />

      {/* Fleet */}
      <Fleet />

      {/* Testimonials */}
      <Testimonials />

      {/* =========================
          Popular Destinations
      ========================== */}

      <section
        style={{
          padding: "90px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "44px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Explore India's Most Popular Destinations
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#555",
              fontSize: "18px",
              lineHeight: "34px",
            }}
          >
            Discover world-famous destinations including Agra, Delhi, Jaipur,
            Rajasthan, Fatehpur Sikri, Ranthambore National Park and many
            hidden gems across India. Every journey is carefully planned to
            provide authentic cultural experiences, comfortable travel and
            unforgettable memories.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/destinations/agra"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Agra
            </Link>

            <Link
              href="/destinations/delhi"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Delhi
            </Link>

            <Link
              href="/destinations/jaipur"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Jaipur
            </Link>

            <Link
              href="/destinations/rajasthan"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Rajasthan
            </Link>
          </div>
        </div>
      </section>

      {/* ======= PART 3 STARTS HERE ======= */}
            {/* Why Choose Us */}
      <section
        style={{
          padding: "100px 20px",
          background: "#08142d",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Why Choose Taj Wonder Heritage Tours
          </span>

          <h2
            style={{
              fontSize: "48px",
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            Your Trusted Private Tour Partner in India
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto 60px",
              color: "#d7d7d7",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            We believe every journey should be comfortable, safe and memorable.
            From your first inquiry until the end of your trip, our team is
            committed to providing exceptional service and authentic travel
            experiences across India.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "25px",
            }}
          >
            {[
              "🚘 100% Private Tours",
              "🏛 Licensed Local Guides",
              "👨‍✈️ Professional Chauffeurs",
              "⭐ Excellent Guest Reviews",
              "📞 24/7 WhatsApp Assistance",
              "💰 Transparent Pricing",
              "🛡 Safe & Comfortable Travel",
              "📍 Customized Itineraries",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,.08)",
                  padding: "30px",
                  borderRadius: "18px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <section
        style={{
          padding: "100px 20px",
          background: "#f8f8f8",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Ready to Discover Incredible India?
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "20px",
              lineHeight: "34px",
              marginBottom: "45px",
            }}
          >
            Contact Taj Wonder Heritage Tours today and let us create your
            perfect India holiday. Whether you're planning a Taj Mahal tour,
            Golden Triangle adventure or a custom private itinerary, we're here
            to help.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/917830716981"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                padding: "18px 36px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              WhatsApp Now
            </a>

            <Link
              href="/contact"
              style={{
                background: "#d4af37",
                color: "#08142d",
                textDecoration: "none",
                padding: "18px 36px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}