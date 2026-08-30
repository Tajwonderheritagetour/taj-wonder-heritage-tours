import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Khajuraho Tours & Sightseeing | Private Khajuraho Tours",
  description:
    "Explore Khajuraho with Taj Wonder Heritage Tours. Discover the UNESCO World Heritage temples, ancient architecture and intricate stone carvings with private guides and comfortable transportation.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/khajuraho",
  },
  openGraph: {
    title: "Khajuraho Tours & Sightseeing | Taj Wonder Heritage Tours",
    description:
      "Discover Khajuraho's magnificent UNESCO World Heritage temples and ancient Indian architecture with private tours and local guides.",
    url: "https://www.tajwonderheritagetours.com/destinations/khajuraho",
    type: "website",
    images: [
      {
        url: "/images/destinations/khajuraho.jpg",
        width: 1200,
        height: 630,
        alt: "Khajuraho temples and historic architecture",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is Khajuraho famous for?",
    answer:
      "Khajuraho is famous for its magnificent group of ancient Hindu and Jain temples, known for their detailed stone carvings and exceptional architectural design. The Khajuraho Group of Monuments is a UNESCO World Heritage Site.",
  },
  {
    question: "How many days are enough for Khajuraho?",
    answer:
      "One full day is generally enough to explore the main temple groups and important attractions of Khajuraho. Travelers with more time can enjoy the surrounding cultural and historical sites.",
  },
  {
    question: "What are the best places to visit in Khajuraho?",
    answer:
      "The Western Group of Temples, Kandariya Mahadeva Temple, Lakshmana Temple, Devi Jagadambi Temple, Chitragupta Temple and the Eastern Group of Temples are among the most important places to visit in Khajuraho.",
  },
  {
    question: "Can I visit Khajuraho on a private tour?",
    answer:
      "Yes. Private Khajuraho tours can be arranged with comfortable transportation, local guides and flexible sightseeing according to your travel plans.",
  },
  {
    question: "What is the best time to visit Khajuraho?",
    answer:
      "October to March is generally the most comfortable period for sightseeing in Khajuraho, with more pleasant weather for exploring the temples and surrounding attractions.",
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
    title: "Western Group of Temples",
    description:
      "The most famous temple complex in Khajuraho, featuring magnificent architecture, sculptures and beautifully preserved stone carvings.",
  },
  {
    title: "Kandariya Mahadeva Temple",
    description:
      "One of Khajuraho's grandest temples, dedicated to Lord Shiva and renowned for its impressive architecture and intricate sculptures.",
  },
  {
    title: "Lakshmana Temple",
    description:
      "A beautifully preserved temple known for its detailed carvings and elegant Nagara-style architectural design.",
  },
  {
    title: "Devi Jagadambi Temple",
    description:
      "A historic temple within the Western Group featuring remarkable sculptures and detailed artistic work.",
  },
  {
    title: "Eastern Group of Temples",
    description:
      "A fascinating collection of Hindu and Jain temples showcasing the cultural and religious diversity of historic Khajuraho.",
  },
  {
    title: "Chitragupta Temple",
    description:
      "A beautiful temple dedicated to the Sun God, featuring detailed sculptures and traditional temple architecture.",
  },
];

export default function KhajurahoPage() {
  return (
    <main>
      <Script
        id="khajuraho-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Khajuraho" },
        ]}
      />

      {/* Hero */}

      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/destinations/khajuraho.jpg"
          alt="Khajuraho temples and ancient Indian architecture"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8,20,45,.68)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            maxWidth: "950px",
            padding: "30px 20px",
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
            Khajuraho Tours & Sightseeing
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
            Explore the Ancient Temples of Khajuraho
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
            Discover Khajuraho's magnificent temples, extraordinary stone
            carvings and fascinating heritage with private sightseeing tours
            and experienced local guides.
          </p>
        </div>
      </section>

      {/* Introduction */}

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
            gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "42px",
                color: "#08142d",
                marginBottom: "25px",
              }}
            >
              Khajuraho: A World of Ancient Art & Architecture
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Khajuraho is one of India's most remarkable heritage
              destinations, famous for its beautifully preserved temples and
              extraordinary stone sculptures. The monuments represent the
              artistic achievements and architectural traditions of medieval
              India.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              A private Khajuraho sightseeing tour allows you to explore the
              major temple complexes comfortably while learning about their
              history, architecture and cultural significance from a local
              guide.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              Khajuraho can also be combined with other fascinating destinations
              in Central India, including{" "}
              <Link
                href="/destinations/orchha"
                style={{
                  color: "#b08d1e",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Orchha
              </Link>{" "}
              and Varanasi.
            </p>
          </div>

          <Image
            src="/images/destinations/khajuraho.jpg"
            alt="Khajuraho ancient temples"
            width={700}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Attractions */}

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
            <h2
              style={{
                fontSize: "42px",
                color: "#08142d",
                marginBottom: "20px",
              }}
            >
              Top Places to Visit in Khajuraho
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Explore Khajuraho's most important temples, historic monuments
              and architectural masterpieces.
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

      {/* Khajuraho Experience */}

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
            What to Experience on a Khajuraho Tour
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
              marginTop: "35px",
            }}
          >
            {[
              "Explore the magnificent Western Group of Temples",
              "Admire intricate ancient stone carvings",
              "Discover Hindu and Jain temple architecture",
              "Learn about Khajuraho's fascinating history",
              "Visit important temples with a local guide",
              "Enjoy Khajuraho with private transportation",
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

      {/* Private Tour */}

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
            Private Khajuraho Sightseeing Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Explore Khajuraho at your own pace with private transportation and
            experienced local guides. Your sightseeing experience can be
            adjusted according to your interests, available time and preferred
            attractions.
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
              <li>Hotel pickup and drop-off options</li>
              <li>Comfortable transportation between attractions</li>
              <li>Local recommendations and travel assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Orchha Connection */}

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
            Combine Khajuraho with Orchha
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Khajuraho is an excellent destination to combine with Orchha for a
            fascinating Central India heritage journey. Travelers can discover
            ancient temples in Khajuraho and then explore Orchha's magnificent
            palaces, temples and riverside cenotaphs.
          </p>

          <div style={{ marginTop: "35px" }}>
            <Link
              href="/tours/orchha-khajuraho-varanasi-tour"
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
              Explore Orchha, Khajuraho & Varanasi Tour →
            </Link>
          </div>
        </div>
      </section>

      {/* Best Time */}

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
            Best Time to Visit Khajuraho
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            October to March is generally the most comfortable period for
            exploring Khajuraho's temples and outdoor attractions.
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
                Pleasant weather and ideal conditions for exploring the temple
                complexes.
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
                Hot summer weather. Early morning or late afternoon
                sightseeing is recommended.
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

      {/* FAQ */}

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
            Frequently Asked Questions About Khajuraho
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

      {/* Related Guides */}

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
            Explore More India Destinations
          </h2>

          <ul
            style={{
              lineHeight: "38px",
              fontSize: "18px",
            }}
          >
            <li>
              <Link href="/destinations/orchha">
                Explore Orchha
              </Link>
            </li>

            <li>
              <Link href="/destinations/varanasi">
                Explore Varanasi
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

            <li>
              <Link href="/destinations/delhi">
                Explore Delhi
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}

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
            Explore Khajuraho with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover Khajuraho's incredible temples, ancient architecture and
            fascinating history with private transportation, experienced local
            guides and a flexible sightseeing experience from Taj Wonder
            Heritage Tours.
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
              href="/tours/orchha-khajuraho-varanasi-tour"
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
              Explore Khajuraho Tour
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