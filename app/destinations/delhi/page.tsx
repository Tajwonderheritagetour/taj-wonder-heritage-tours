import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Delhi Tours & Sightseeing | Private Delhi Tour Guide",
  description:
    "Explore Delhi with private sightseeing tours from Taj Wonder Heritage Tours. Visit India Gate, Red Fort, Qutub Minar, Humayun's Tomb, Lotus Temple and Chandni Chowk with local experts.",
  alternates: {
    canonical: "https://www.tajwonderheritagetours.com/destinations/delhi",
  },
  openGraph: {
    title: "Delhi Tours & Sightseeing | Taj Wonder Heritage Tours",
    description:
      "Discover the best of Delhi with private sightseeing tours, experienced local guides and comfortable transportation.",
    url: "https://www.tajwonderheritagetours.com/destinations/delhi",
    type: "website",
    images: [
      {
        url: "/images/destinations/delhi.jpg",
        width: 1200,
        height: 630,
        alt: "Delhi sightseeing and historic monuments",
      },
    ],
  },
};

const faqs = [
  {
    question: "What are the best places to visit in Delhi?",
    answer:
      "The best places to visit in Delhi include India Gate, Qutub Minar, Humayun's Tomb, Red Fort, Lotus Temple, Jama Masjid, Rashtrapati Bhavan and Chandni Chowk.",
  },
  {
    question: "How many days are enough to visit Delhi?",
    answer:
      "One full day is enough to see many of Delhi's major attractions. Two days allow more time for Old Delhi, museums, markets and additional historical sites.",
  },
  {
    question: "Can I visit Delhi as part of a Golden Triangle Tour?",
    answer:
      "Yes. Delhi is the traditional starting point for the Golden Triangle route connecting Delhi, Agra and Jaipur.",
  },
  {
    question: "Are private Delhi sightseeing tours available?",
    answer:
      "Yes. Taj Wonder Heritage Tours offers private Delhi sightseeing experiences with comfortable transportation and local guides.",
  },
  {
    question: "What is the best time to visit Delhi?",
    answer:
      "October to March is generally the most comfortable period for sightseeing in Delhi because temperatures are more pleasant than during the summer months.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const attractions = [
  {
    title: "India Gate",
    description:
      "One of Delhi's most recognizable landmarks and an important national war memorial.",
  },
  {
    title: "Qutub Minar",
    description:
      "A spectacular UNESCO World Heritage Site featuring one of India's most famous historic minarets.",
  },
  {
    title: "Humayun's Tomb",
    description:
      "A magnificent Mughal monument and an important architectural predecessor to the Taj Mahal.",
  },
  {
    title: "Red Fort",
    description:
      "A grand Mughal-era fort in Old Delhi and a UNESCO World Heritage Site.",
  },
  {
    title: "Lotus Temple",
    description:
      "A distinctive modern architectural landmark famous for its lotus-shaped design.",
  },
  {
    title: "Chandni Chowk",
    description:
      "A lively historic market area where visitors can experience Old Delhi's food, shopping and culture.",
  },
];

export default function DelhiPage() {
  return (
    <main>
      <Script
        id="delhi-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Delhi" },
        ]}
      />

      {/* Hero */}

<section
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "1290px",
    height: "660px",
    margin: "0 auto",
    overflow: "hidden",
  }}
>
  <Image
    src="/images/destinations/delhi.jpg"
    alt="Delhi India Gate and historic Delhi sightseeing"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 1290px"
    style={{
      objectFit: "cover",
      objectPosition: "center",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(8,20,45,.45)",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#fff",
      padding: "30px 20px",
    }}
  >
    <div
      style={{
        maxWidth: "950px",
      }}
    >
      <span
        style={{
          color: "#d4af37",
          letterSpacing: "3px",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: "18px",
        }}
      >
        Delhi Tours & Sightseeing
      </span>

      <h1
        style={{
          fontSize: "60px",
          lineHeight: "1.12",
          margin: "20px 0",
          color: "#fff",
          textShadow: "0 4px 18px rgba(0,0,0,.65)",
        }}
      >
        Explore Delhi, India's Historic Capital
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "34px",
          color: "#f2f2f2",
          maxWidth: "820px",
          margin: "0 auto",
          textShadow: "0 2px 10px rgba(0,0,0,.5)",
        }}
      >
        Discover Delhi's magnificent monuments, Mughal heritage,
        vibrant markets and modern landmarks with private sightseeing
        tours and experienced local guides.
      </p>
    </div>
  </div>
</section>

      {/* ================= INTRODUCTION WITH IMAGE ================= */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Text */}

          <div>
            <span
              style={{
                color: "#b08d1e",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Discover India's Capital
            </span>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.2",
                color: "#08142d",
                margin: "15px 0 25px",
              }}
            >
              Delhi Tours: Discover the Heart of India
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Delhi is a fascinating city where centuries of history meet
              modern India. From ancient monuments and Mughal architecture
              to colorful markets, impressive government buildings and
              lively neighborhoods, India's capital offers an incredible
              variety of experiences for travelers.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              A private Delhi sightseeing tour is an excellent way to explore
              the city's major attractions comfortably. With a private vehicle
              and local guide, you can enjoy a flexible itinerary and learn
              more about Delhi's history, culture and architecture.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              Delhi is also the perfect starting point for travelers continuing
              to Agra and Jaipur on a{" "}
              <Link
                href="/tours/golden-triangle-5-day-tour"
                style={{
                  color: "#b08d1e",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Golden Triangle Tour
              </Link>
              .
            </p>
          </div>

          {/* Delhi Image */}

          <div
            style={{
              position: "relative",
              minHeight: "450px",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 18px 45px rgba(0,0,0,.12)",
            }}
          >
            <Image
              src="/images/destinations/delhi.jpg"
              alt="Delhi India Gate and historic landmarks"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= ATTRACTIONS ================= */}

      <section
        style={{
          padding: "90px 20px",
          background: "#f8f9fb",
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
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 55px",
            }}
          >
            <span
              style={{
                color: "#b08d1e",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Delhi Sightseeing
            </span>

            <h2
              style={{
                fontSize: "42px",
                color: "#08142d",
                margin: "15px 0 20px",
              }}
            >
              Top Places to Visit in Delhi
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Explore Delhi's most famous historical monuments, cultural
              attractions and traditional markets.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >
            {attractions.map((attraction) => (
              <div
                key={attraction.title}
                style={{
                  background: "#fff",
                  padding: "35px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,.07)",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#08142d",
                    color: "#d4af37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  ✓
                </div>

                <h3
                  style={{
                    color: "#08142d",
                    fontSize: "24px",
                    marginBottom: "15px",
                  }}
                >
                  {attraction.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    margin: 0,
                  }}
                >
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELHI EXPERIENCE ================= */}

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
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            What to Experience on a Delhi Tour
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              maxWidth: "900px",
            }}
          >
            A private Delhi tour allows you to experience the city's
            historical landmarks, local culture and vibrant streets at a
            comfortable pace.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
              marginTop: "35px",
            }}
          >
            {[
              "Explore magnificent Mughal monuments",
              "Visit India's famous national landmarks",
              "Discover the historic streets of Old Delhi",
              "Experience Chandni Chowk and local markets",
              "See the contrast between Old and New Delhi",
              "Enjoy Delhi with a private vehicle and local guide",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "25px",
                  background: "#f8f9fb",
                  borderRadius: "14px",
                  fontSize: "18px",
                  color: "#444",
                  lineHeight: "28px",
                }}
              >
                <strong style={{ color: "#d4af37" }}>✓</strong>{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRIVATE TOUR ================= */}

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
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Private Delhi Sightseeing Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Traveling with a private vehicle gives you the freedom to explore
            Delhi at your own pace. Our local team can help you plan your
            sightseeing according to your interests, available time and
            preferred attractions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "35px",
              marginTop: "35px",
              boxShadow: "0 8px 25px rgba(0,0,0,.06)",
            }}
          >
            <h3
              style={{
                color: "#08142d",
                fontSize: "26px",
                marginBottom: "20px",
              }}
            >
              Private Tour Benefits
            </h3>

            <ul
              style={{
                lineHeight: "36px",
                color: "#555",
                fontSize: "18px",
                paddingLeft: "22px",
              }}
            >
              <li>Private air-conditioned vehicle</li>
              <li>Flexible sightseeing itinerary</li>
              <li>Professional local guides</li>
              <li>Hotel and airport pickup options</li>
              <li>Comfortable transportation between attractions</li>
              <li>Local recommendations and travel assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= GOLDEN TRIANGLE ================= */}

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
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Delhi as the Starting Point for the Golden Triangle
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Delhi is traditionally the starting point for India's famous
            Golden Triangle route. The journey connects three major
            destinations: Delhi, Agra and Jaipur.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Travelers can begin with Delhi sightseeing, continue to Agra to
            see the Taj Mahal and then travel onward to Jaipur to discover
            Rajasthan's royal heritage.
          </p>

          <div style={{ marginTop: "35px" }}>
            <Link
              href="/tours/golden-triangle-5-day-tour"
              style={{
                display: "inline-block",
                background: "#d4af37",
                color: "#08142d",
                padding: "16px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Explore Golden Triangle Tour →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BEST TIME ================= */}

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
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Best Time to Visit Delhi
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            October to March is generally the most comfortable period for
            Delhi sightseeing. The weather is usually more pleasant for
            visiting outdoor monuments and exploring the city.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
              marginTop: "35px",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <h3 style={{ color: "#08142d" }}>October – March</h3>
              <p style={{ color: "#666", lineHeight: "28px" }}>
                Pleasant sightseeing conditions and ideal for exploring
                Delhi's outdoor attractions.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <h3 style={{ color: "#08142d" }}>April – June</h3>
              <p style={{ color: "#666", lineHeight: "28px" }}>
                Hot summer weather. Early morning sightseeing is recommended.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <h3 style={{ color: "#08142d" }}>July – September</h3>
              <p style={{ color: "#666", lineHeight: "28px" }}>
                Monsoon season with occasional rainfall and greener
                surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section
        style={{
          padding: "90px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions About Delhi
          </h2>

          {faqs.map((faq) => (
            <div
              key={faq.question}
              style={{
                marginBottom: "35px",
              }}
            >
              <h3
                style={{
                  color: "#08142d",
                  fontSize: "24px",
                  marginBottom: "12px",
                }}
              >
                {faq.question}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "18px",
                  lineHeight: "32px",
                  margin: 0,
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RELATED GUIDES ================= */}

      <section
        style={{
          padding: "70px 20px",
          background: "#f8f9fb",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Related India Travel Guides
          </h2>

          <ul
            style={{
              lineHeight: "38px",
              fontSize: "18px",
            }}
          >
            <li>
              <Link href="/blog/how-to-reach-taj-mahal-from-delhi">
                How to Reach Taj Mahal from Delhi
              </Link>
            </li>

            <li>
              <Link href="/blog/golden-triangle-india-itinerary">
                Golden Triangle India Itinerary
              </Link>
            </li>

            <li>
              <Link href="/blog/best-places-to-visit-in-agra">
                Best Places to Visit in Agra
              </Link>
            </li>

            <li>
              <Link href="/destinations/agra">
                Explore Agra
              </Link>
            </li>

            <li>
              <Link href="/destinations/jaipur">
                Explore Jaipur
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        style={{
          padding: "90px 20px",
          background: "#08142d",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "44px",
              marginBottom: "25px",
            }}
          >
            Explore Delhi with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover Delhi's history, culture and architecture with private
            transportation, experienced local guides and a flexible
            sightseeing experience from Taj Wonder Heritage Tours.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tours/golden-triangle-5-day-tour"
              style={{
                display: "inline-block",
                background: "#d4af37",
                color: "#08142d",
                padding: "17px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Explore Golden Triangle Tour
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#08142d",
                padding: "17px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
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