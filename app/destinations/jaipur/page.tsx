import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jaipur Tours & Sightseeing | Private Jaipur Tours",
  description:
    "Explore Jaipur with Taj Wonder Heritage Tours. Visit Amber Fort, Hawa Mahal, City Palace, Jantar Mantar and Jal Mahal with private guides, comfortable transportation and flexible sightseeing.",
  alternates: {
    canonical: "https://www.tajwonderheritagetours.com/destinations/jaipur",
  },
  openGraph: {
    title: "Jaipur Tours & Sightseeing | Taj Wonder Heritage Tours",
    description:
      "Discover Jaipur, the Pink City of India, with private sightseeing tours, local guides and comfortable transportation.",
    url: "https://www.tajwonderheritagetours.com/destinations/jaipur",
    type: "website",
    images: [
      {
        url: "/images/destinations/jaipur.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Pink City sightseeing and historic monuments",
      },
    ],
  },
};

const faqs = [
  {
    question: "What are the best places to visit in Jaipur?",
    answer:
      "The best places to visit in Jaipur include Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal and the colorful markets of the Pink City.",
  },
  {
    question: "How many days are enough for Jaipur?",
    answer:
      "One full day is enough to visit many of Jaipur's major attractions. Two days allow more time for forts, palaces, markets, local experiences and nearby attractions.",
  },
  {
    question: "Can I visit Jaipur as part of a Golden Triangle Tour?",
    answer:
      "Yes. Jaipur is one of the three destinations on India's famous Golden Triangle route connecting Delhi, Agra and Jaipur.",
  },
  {
    question: "Are private Jaipur sightseeing tours available?",
    answer:
      "Yes. Taj Wonder Heritage Tours offers private Jaipur sightseeing experiences with comfortable transportation, local guides and flexible itineraries.",
  },
  {
    question: "What is the best time to visit Jaipur?",
    answer:
      "October to March is generally the most comfortable period for sightseeing in Jaipur because temperatures are more pleasant for visiting forts, palaces and outdoor attractions.",
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
    title: "Amber Fort",
    description:
      "A magnificent hilltop fort known for its grand courtyards, palaces, artistic details and spectacular views over the surrounding landscape.",
  },
  {
    title: "Hawa Mahal",
    description:
      "Jaipur's iconic Palace of Winds, famous for its distinctive pink sandstone façade and hundreds of decorative windows.",
  },
  {
    title: "City Palace",
    description:
      "A beautiful royal complex combining courtyards, palaces, museums and traditional Rajasthani and Mughal architectural influences.",
  },
  {
    title: "Jantar Mantar",
    description:
      "A remarkable astronomical observatory containing large-scale instruments built to study celestial movements.",
  },
  {
    title: "Jal Mahal",
    description:
      "The elegant Water Palace appears to float in the middle of Man Sagar Lake and is one of Jaipur's most photographed landmarks.",
  },
  {
    title: "Jaipur Markets",
    description:
      "Explore colorful bazaars offering traditional textiles, jewelry, handicrafts, souvenirs and authentic Rajasthani products.",
  },
];

export default function JaipurPage() {
  return (
    <main>
      <Script
        id="jaipur-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Jaipur" },
        ]}
      />

      {/* HERO */}

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
          src="/images/destinations/jaipur.jpg"
          alt="Jaipur Pink City and historic Rajasthan architecture"
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
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Jaipur Tours & Sightseeing
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
            Explore Jaipur, the Pink City of India
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
            Discover magnificent forts, royal palaces, colorful markets and
            Rajasthan's rich heritage with private sightseeing tours and
            experienced local guides.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}

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
            Jaipur Tours: Discover the Royal Heritage of Rajasthan
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Jaipur, known as the Pink City, is one of India's most fascinating
            heritage destinations. The capital of Rajasthan is famous for its
            magnificent forts, royal palaces, historic observatories,
            colorful markets and traditional culture.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            A private Jaipur sightseeing tour allows you to explore the city
            comfortably with a private vehicle and experienced local guide.
            You can enjoy a flexible itinerary based on your interests,
            available time and preferred attractions.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Jaipur is also one of the three destinations on India's famous{" "}
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
            , connecting Delhi, Agra and Jaipur.
          </p>
        </div>
      </section>

      {/* OVERVIEW IMAGE */}

      <section
        style={{
          padding: "20px 20px 90px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Image
            src="/images/destinations/jaipur.jpg"
            alt="Jaipur heritage architecture and Pink City sightseeing"
            width={1200}
            height={700}
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "22px",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ATTRACTIONS */}

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
              Top Places to Visit in Jaipur
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover Jaipur's most famous forts, palaces, monuments and
              traditional markets.
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

      {/* JAIPUR EXPERIENCE */}

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
            What to Experience on a Jaipur Tour
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
              "Explore the magnificent Amber Fort",
              "See the iconic Hawa Mahal",
              "Discover Jaipur's royal City Palace",
              "Visit the historic Jantar Mantar observatory",
              "Enjoy views of Jal Mahal",
              "Shop for traditional Rajasthani handicrafts",
              "Explore colorful local markets",
              "Taste authentic Rajasthani cuisine",
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

      {/* PRIVATE TOUR */}

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
            Private Jaipur Sightseeing Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Traveling with a private vehicle gives you the freedom to explore
            Jaipur at your own pace. Our local team can help you plan your
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

      {/* GOLDEN TRIANGLE */}

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
            Jaipur on the Golden Triangle Tour
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Jaipur is the final destination on the classic Golden Triangle
            route for many travelers. The journey connects India's capital
            Delhi with Agra, home of the Taj Mahal, and Jaipur, the royal
            capital of Rajasthan.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Combining Delhi, Agra and Jaipur in one private itinerary is an
            excellent way to experience India's history, architecture, culture
            and royal heritage.
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

      {/* BEST TIME */}

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
            Best Time to Visit Jaipur
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            October to March is generally the most comfortable period for
            Jaipur sightseeing. The weather is usually more pleasant for
            exploring forts, palaces, markets and outdoor attractions.
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
                Pleasant weather and ideal conditions for sightseeing and
                exploring Jaipur's heritage attractions.
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
                Hot summer weather. Early morning and late afternoon
                sightseeing can be more comfortable.
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
            Frequently Asked Questions About Jaipur
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

      {/* RELATED GUIDES */}

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
            Explore Jaipur with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover Jaipur's forts, palaces, markets and royal heritage with
            private transportation, experienced local guides and a flexible
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