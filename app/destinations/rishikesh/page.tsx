import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Rishikesh Tours | Yoga, Ganges & Himalayan Experience | Taj Wonder Heritage Tours",
  description:
    "Explore Rishikesh with private tours from Taj Wonder Heritage Tours. Experience the Ganges, ancient temples, yoga, ashrams, Himalayan scenery and Ganga Aarti.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/rishikesh",
  },
  openGraph: {
    title:
      "Rishikesh Tours | Yoga, Ganges & Himalayan Experience",
    description:
      "Discover Rishikesh with private sightseeing tours, comfortable transportation and local travel assistance.",
    url:
      "https://www.tajwonderheritagetours.com/destinations/rishikesh",
    type: "website",
    images: [
      {
        url: "/images/destinations/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Rishikesh Ganges River and Himalayan scenery",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is Rishikesh famous for?",
    answer:
      "Rishikesh is famous for the sacred Ganges River, yoga and meditation, ashrams, temples, spiritual experiences and beautiful Himalayan surroundings.",
  },
  {
    question: "What are the best places to visit in Rishikesh?",
    answer:
      "Popular places include Ram Jhula, Laxman Jhula area, Triveni Ghat, Parmarth Niketan, Ganga Aarti locations, Beatles Ashram and the riverside ghats.",
  },
  {
    question: "How many days are enough for Rishikesh?",
    answer:
      "Two to three days are ideal for experiencing Rishikesh's major attractions, spiritual sites, Ganga Aarti, yoga experiences and nearby natural landscapes.",
  },
  {
    question: "Can Rishikesh be combined with a Golden Triangle Tour?",
    answer:
      "Yes. Rishikesh can be combined with Delhi, Agra and Jaipur to create a longer private India journey combining heritage, culture and Himalayan experiences.",
  },
  {
    question: "What is the best time to visit Rishikesh?",
    answer:
      "October to March is generally comfortable for sightseeing, while spring and early summer can also be suitable for outdoor activities depending on weather conditions.",
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

const experiences = [
  {
    title: "Ganga Aarti",
    description:
      "Experience the beautiful evening Ganga Aarti beside the sacred Ganges and witness one of Rishikesh's most memorable spiritual traditions.",
  },
  {
    title: "Yoga & Meditation",
    description:
      "Discover the spiritual side of Rishikesh through yoga, meditation and peaceful riverside experiences.",
  },
  {
    title: "Ram Jhula",
    description:
      "Walk across the famous suspension bridge and explore the temples, ashrams and lively streets surrounding the Ganges.",
  },
  {
    title: "Laxman Jhula Area",
    description:
      "Explore the riverside area, local markets, temples and spiritual atmosphere around one of Rishikesh's best-known landmarks.",
  },
  {
    title: "Beatles Ashram",
    description:
      "Visit the historic ashram complex known for its connection with the Beatles and its distinctive meditation spaces and artwork.",
  },
  {
    title: "Himalayan Scenery",
    description:
      "Enjoy beautiful views of the Ganges and surrounding Himalayan foothills while experiencing the peaceful atmosphere of Rishikesh.",
  },
];

export default function RishikeshPage() {
  return (
    <main>
      <Script
        id="rishikesh-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Rishikesh" },
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
          src="/images/destinations/rishikesh.jpg"
          alt="Rishikesh Ganges River and Himalayan scenery"
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
            Rishikesh Tours & Experiences
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
            Discover Rishikesh, the Gateway to the Himalayas
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
            Experience the sacred Ganges, yoga and meditation, ancient
            temples, peaceful ashrams and beautiful Himalayan landscapes
            with private tours and local travel assistance.
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
            Rishikesh Tours: Discover India's Spiritual Side
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Rishikesh is one of India's most fascinating destinations,
            surrounded by the Himalayan foothills and situated along the
            sacred Ganges River. The city is known around the world for yoga,
            meditation and spiritual traditions.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Visitors can explore riverside ghats, temples, ashrams, suspension
            bridges and colorful local markets while enjoying the peaceful
            atmosphere of the Ganges.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Rishikesh can also be combined with Delhi, Agra and Jaipur for a
            memorable private journey through India's heritage and Himalayan
            landscapes.
          </p>
        </div>
      </section>

      {/* Experiences */}

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
              Top Experiences in Rishikesh
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover the spiritual, cultural and natural experiences that
              make Rishikesh one of India's most special destinations.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >
            {experiences.map((experience) => (
              <div
                key={experience.title}
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
                  {experience.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                    margin: 0,
                  }}
                >
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Experience */}

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
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(420px,1fr))",
            gap: "55px",
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
              Experience the Ganges and Himalayan Foothills
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              A private Rishikesh tour allows you to explore the city's
              spiritual and cultural attractions at a comfortable pace.
              Discover peaceful riverside locations, ancient temples and
              vibrant local areas with flexible sightseeing.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              From watching the evening Ganga Aarti to enjoying the peaceful
              surroundings of the Himalayas, Rishikesh offers a refreshing
              contrast to India's busy heritage cities.
            </p>
          </div>

          <Image
            src="/images/destinations/rishikesh.jpg"
            alt="Rishikesh Ganges River and Himalayan landscape"
            width={700}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
            }}
          />
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
            Private Rishikesh Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Explore Rishikesh with a flexible private itinerary designed
            around your interests. Whether you want to discover spiritual
            landmarks, enjoy the Ganges or simply experience the Himalayan
            atmosphere, our team can help plan your journey.
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
              <li>Private air-conditioned transportation</li>
              <li>Flexible sightseeing itinerary</li>
              <li>Hotel pickup and drop-off options</li>
              <li>Local travel assistance</li>
              <li>Comfortable sightseeing experience</li>
              <li>Customized India travel itineraries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Golden Triangle Connection */}

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
            Combine Rishikesh with the Golden Triangle
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Travelers looking for a longer India experience can combine
            Rishikesh with the famous Golden Triangle route connecting Delhi,
            Agra and Jaipur.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            This combination brings together India's Mughal and Rajput
            heritage, the Taj Mahal and the spiritual atmosphere of the
            Ganges and Himalayan foothills.
          </p>

          <div style={{ marginTop: "35px" }}>
            <Link
              href="/tours/golden-triangle-rishikesh-tour"
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
              Explore Golden Triangle & Rishikesh Tour →
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
            Best Time to Visit Rishikesh
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Rishikesh can be visited throughout much of the year, although
            weather conditions vary by season. The cooler months are
            generally comfortable for sightseeing and outdoor exploration.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
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
              <h3 style={{ color: "#08142d" }}>
                October – March
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Pleasant conditions for sightseeing, spiritual experiences
                and exploring the riverside areas.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <h3 style={{ color: "#08142d" }}>
                April – June
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Warmer weather. Early morning and evening sightseeing can be
                more comfortable.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <h3 style={{ color: "#08142d" }}>
                July – September
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Monsoon season can bring rainfall and changing river
                conditions, so outdoor activities should be planned carefully.
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
            Frequently Asked Questions About Rishikesh
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
            Discover Rishikesh with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Experience the Ganges, spiritual traditions and Himalayan scenery
            with a comfortable private journey from Taj Wonder Heritage Tours.
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
              href="/tours/golden-triangle-rishikesh-tour"
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
              Explore Rishikesh Tour
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