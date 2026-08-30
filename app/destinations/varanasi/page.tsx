import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Varanasi Tours & Sightseeing | Private Varanasi Tour Guide",
  description:
    "Explore Varanasi with private sightseeing tours from Taj Wonder Heritage Tours. Discover the Ganges, ancient ghats, Ganga Aarti, temples and the spiritual heart of India with local experts.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/varanasi",
  },
  openGraph: {
    title: "Varanasi Tours & Sightseeing | Taj Wonder Heritage Tours",
    description:
      "Discover Varanasi with private sightseeing tours, experienced local guides and comfortable transportation.",
    url: "https://www.tajwonderheritagetours.com/destinations/varanasi",
    type: "website",
    images: [
      {
        url: "/images/destinations/varanasi.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi ghats and Ganges River",
      },
    ],
  },
};

const faqs = [
  {
    question: "What are the best places to visit in Varanasi?",
    answer:
      "The best places to visit in Varanasi include the Ganges Ghats, Dashashwamedh Ghat, Assi Ghat, Kashi Vishwanath Temple, Sarnath and the historic streets of the old city.",
  },
  {
    question: "How many days are enough to visit Varanasi?",
    answer:
      "Two days are generally enough to experience the major attractions of Varanasi, including the ghats, Ganga Aarti, temples and a visit to Sarnath.",
  },
  {
    question: "Can I visit Varanasi as part of a Golden Triangle Tour?",
    answer:
      "Yes. Varanasi can be added to a Golden Triangle journey connecting Delhi, Agra and Jaipur, creating a longer India heritage and cultural tour.",
  },
  {
    question: "Are private Varanasi sightseeing tours available?",
    answer:
      "Yes. Taj Wonder Heritage Tours offers private sightseeing experiences in Varanasi with comfortable transportation and local assistance.",
  },
  {
    question: "What is the best time to visit Varanasi?",
    answer:
      "October to March is generally considered a comfortable period for sightseeing in Varanasi, with pleasant conditions for exploring the ghats, temples and surrounding attractions.",
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
    title: "Dashashwamedh Ghat",
    description:
      "One of the most famous ghats in Varanasi and the main setting for the spectacular evening Ganga Aarti ceremony.",
  },
  {
    title: "Ganga Aarti",
    description:
      "Experience Varanasi's famous evening ritual on the banks of the sacred Ganges, filled with lamps, music and devotional ceremonies.",
  },
  {
    title: "Kashi Vishwanath Temple",
    description:
      "One of India's most revered Hindu temples, dedicated to Lord Shiva and located in the heart of Varanasi.",
  },
  {
    title: "Assi Ghat",
    description:
      "A popular riverside ghat known for peaceful mornings, cultural activities and beautiful views of the Ganges.",
  },
  {
    title: "Sarnath",
    description:
      "An important Buddhist pilgrimage site near Varanasi where Buddha is traditionally associated with his first sermon.",
  },
  {
    title: "Varanasi Old City",
    description:
      "Explore narrow lanes, traditional markets, historic buildings, temples and the unique atmosphere of one of India's oldest cities.",
  },
];

export default function VaranasiPage() {
  return (
    <main>
      <Script
        id="varanasi-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Varanasi" },
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
          src="/images/destinations/varanasi.jpg"
          alt="Varanasi Ganges River and historic ghats"
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
            color: "#fff",
            textAlign: "center",
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
            Varanasi Tours & Sightseeing
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
            Discover Varanasi, the Spiritual Heart of India
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
            Experience the sacred Ganges, historic ghats, ancient temples,
            colorful markets and unforgettable Ganga Aarti with private
            sightseeing tours and experienced local guides.
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
              Varanasi Tours: Experience the Soul of India
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Varanasi is one of India's most fascinating and spiritually
              significant cities. Situated along the sacred Ganges River, the
              city is famous for its ancient ghats, temples, religious
              ceremonies and centuries-old cultural traditions.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              A private Varanasi sightseeing tour allows you to experience the
              city's highlights comfortably while discovering its history,
              traditions and local culture with knowledgeable assistance.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              Varanasi can also be combined with Delhi, Agra and Jaipur on a{" "}
              <Link
                href="/tours/golden-triangle-varanasi-tour"
                style={{
                  color: "#b08d1e",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Golden Triangle and Varanasi Tour
              </Link>
              .
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/destinations/varanasi.jpg"
              alt="Varanasi ghats on the Ganges River"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
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
              Top Places to Visit in Varanasi
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover Varanasi's sacred ghats, historic temples, spiritual
              landmarks and important cultural sites.
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

      {/* Varanasi Experience */}

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
            What to Experience on a Varanasi Tour
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
              "Watch the sunrise over the sacred Ganges",
              "Explore Varanasi's historic riverfront ghats",
              "Experience the spectacular evening Ganga Aarti",
              "Visit important temples and spiritual landmarks",
              "Explore the ancient lanes and markets of the old city",
              "Visit Sarnath and discover its Buddhist heritage",
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
            Private Varanasi Sightseeing Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Explore Varanasi with a private sightseeing experience designed
            around your interests and available time. Our local team can help
            you discover the city's major landmarks while making your journey
            comfortable and convenient.
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
              <li>Experienced local assistance</li>
              <li>Hotel and airport pickup options</li>
              <li>Comfortable transportation between attractions</li>
              <li>Local recommendations and travel assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Golden Triangle */}

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
            Varanasi and the Golden Triangle
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Varanasi can be combined with India's famous Golden Triangle
            destinations: Delhi, Agra and Jaipur. This combination creates a
            memorable journey through India's history, architecture, culture
            and spirituality.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Travelers can explore Delhi's historic monuments, visit the Taj
            Mahal in Agra, discover Jaipur's royal heritage and then continue
            to Varanasi to experience the sacred Ganges and ancient traditions.
          </p>

          <div style={{ marginTop: "35px" }}>
            <Link
              href="/tours/golden-triangle-varanasi-tour"
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
              Explore Golden Triangle & Varanasi Tour →
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
            Best Time to Visit Varanasi
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            October to March is generally a comfortable period for visiting
            Varanasi. The cooler weather makes it easier to explore the ghats,
            temples, markets and surrounding attractions.
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
                Pleasant conditions for sightseeing and exploring the
                riverside ghats.
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
                Hot summer weather. Early morning and evening sightseeing can
                be more comfortable.
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
                Monsoon season with occasional rainfall and a different
                atmosphere along the Ganges.
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
            Frequently Asked Questions About Varanasi
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
            Related India Travel Guides
          </h2>

          <ul
            style={{
              lineHeight: "38px",
              fontSize: "18px",
            }}
          >
            <li>
              <Link href="/blog/golden-triangle-india-itinerary">
                Golden Triangle India Itinerary
              </Link>
            </li>

            <li>
              <Link href="/blog/how-to-reach-taj-mahal-from-delhi">
                How to Reach Taj Mahal from Delhi
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
            Explore Varanasi with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover Varanasi's sacred ghats, temples, culture and spiritual
            traditions with private transportation, local assistance and a
            flexible sightseeing experience from Taj Wonder Heritage Tours.
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
              href="/tours/golden-triangle-varanasi-tour"
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
              Explore Varanasi Tour
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