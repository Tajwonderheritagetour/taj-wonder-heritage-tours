import FeaturedTours from "@/components/Home/FeaturedTours";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Tours from "@/components/Tours";
import Destinations from "@/components/Destinations";
import Fleet from "@/components/Fleet";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import LatestBlogs from "@/components/Home/LatestBlogs";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      

      <main>
        {/* Hero */}
       <Hero />

<FeaturedTours />

<Stats />

        {/* Trust Bar */}
        <TrustBar />
        
<section
  style={{
    padding: "90px 20px",
    background: "#fff",
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
      Private India Tours
    </span>

    <h2
      style={{
        fontSize: "46px",
        color: "#08142d",
        marginTop: "20px",
        marginBottom: "25px",
      }}
    >
      Explore India with Trusted Local Experts
    </h2>

    <p
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        fontSize: "19px",
        color: "#555",
        lineHeight: "34px",
      }}
    >
      Taj Wonder Heritage Tours offers premium private tours across India,
      including the Taj Mahal, Agra, Delhi, Jaipur, Rajasthan and the famous
      <a
  href="/tours/golden-triangle-tour"
  style={{
    color: "#d4af37",
    fontWeight: 600,
    textDecoration: "none",
  }}
>
  Golden Triangle Tour
</a>
<a
  href="/tours/same-day-taj-mahal-tour"
  style={{
    color: "#d4af37",
    fontWeight: 600,
    textDecoration: "none",
  }}
>
  Same Day Taj Mahal Tour
</a>

      luxury Golden Triangle journey, or a customized India holiday, our
      experienced chauffeurs and local guides ensure a comfortable, authentic
      and unforgettable travel experience.
    </p>
  </div>
</section>

        {/* Statistics */}
      

        {/* Featured Tours */}
       
        <Tours />

       <Destinations />

    {/* Latest Blogs */}
      <LatestBlogs />
      
      {/* Vehicle Fleet */}
        
        <Fleet />


{/* Testimonials */}
<Testimonials />

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
              Why Choose Us
            </span>

            <h2
              style={{
                fontSize: "48px",
                marginTop: "20px",
                marginBottom: "25px",
              }}
            >
              Travel India with Complete Confidence
            </h2>

            <p
              style={{
                maxWidth: "820px",
                margin: "0 auto 60px",
                color: "#d7d7d7",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Taj Wonder Heritage Tour specializes in private luxury journeys
              across India with professional chauffeurs, licensed local guides,
              comfortable vehicles, transparent pricing, and personalized
              service from beginning to end.
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
                "⭐ 5-Star Guest Experience",
                "📞 24/7 WhatsApp Support",
                "💰 No Hidden Charges",
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

        {/* CTA */}
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
              Ready to Explore Incredible India?
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "20px",
                lineHeight: "34px",
                marginBottom: "45px",
              }}
            >
              Book your private India tour today and discover the Taj Mahal,
              Rajasthan, Delhi, Jaipur, Ranthambore, and many more incredible
              destinations with Taj Wonder Heritage Tour.
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

              <a
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
              </a>
            </div>
          </div>
        </section>
      </main>
  ...
  
</>
  );
}