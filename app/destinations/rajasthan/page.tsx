import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rajasthan Tours & Sightseeing | Private Rajasthan Tours",
  description:
    "Explore Rajasthan with Taj Wonder Heritage Tours. Discover Jaipur, Jodhpur, Udaipur, majestic forts, royal palaces and colorful markets with private tours and local guides.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/rajasthan",
  },
  openGraph: {
    title: "Rajasthan Tours & Sightseeing | Taj Wonder Heritage Tours",
    description:
      "Discover Rajasthan's royal heritage, magnificent forts, palaces and colorful cities with private tours and experienced local guides.",
    url: "https://www.tajwonderheritagetours.com/destinations/rajasthan",
    type: "website",
    images: [
      {
        url: "/images/destinations/rajasthan.jpg",
        width: 1200,
        height: 630,
        alt: "Rajasthan royal heritage and historic forts",
      },
    ],
  },
};

const faqs = [
  {
    question: "What are the best places to visit in Rajasthan?",
    answer:
      "Popular places to visit in Rajasthan include Jaipur, Jodhpur, Udaipur, Jaisalmer, Pushkar, Ranthambore and Bikaner. Each destination offers its own forts, palaces, markets, temples and cultural experiences.",
  },
  {
    question: "How many days are enough for a Rajasthan tour?",
    answer:
      "A Rajasthan tour can take anywhere from 5 to 14 days depending on the destinations you want to visit. Shorter itineraries can focus on Jaipur and nearby heritage attractions, while longer journeys can include Jodhpur, Udaipur, Jaisalmer and Ranthambore.",
  },
  {
    question: "Can Rajasthan be combined with the Golden Triangle?",
    answer:
      "Yes. Rajasthan can easily be combined with Delhi and Agra on a private India tour. Jaipur is one of the three destinations of the famous Golden Triangle route.",
  },
  {
    question: "Are private Rajasthan tours available?",
    answer:
      "Yes. Taj Wonder Heritage Tours offers private Rajasthan journeys with comfortable transportation, experienced drivers, local guides and flexible sightseeing itineraries.",
  },
  {
    question: "What is the best time to visit Rajasthan?",
    answer:
      "October to March is generally the most comfortable period for sightseeing in Rajasthan. The cooler weather is particularly suitable for visiting forts, palaces, markets and outdoor attractions.",
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
    title: "Jaipur",
    description:
      "Discover the Pink City's magnificent Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and colorful traditional markets.",
  },
  {
    title: "Jodhpur",
    description:
      "Explore the Blue City and its spectacular Mehrangarh Fort, historic streets and traditional Rajasthani culture.",
  },
  {
    title: "Udaipur",
    description:
      "Experience the romantic City of Lakes with beautiful palaces, lakeside views and the magnificent City Palace.",
  },
  {
    title: "Jaisalmer",
    description:
      "Discover the Golden City, famous for its sandstone fort, heritage havelis and desert experiences.",
  },
  {
    title: "Pushkar",
    description:
      "Visit the sacred town of Pushkar, known for its holy lake, temples and colorful local markets.",
  },
  {
    title: "Ranthambore",
    description:
      "Combine Rajasthan's royal heritage with exciting wildlife safaris in one of India's famous tiger reserves.",
  },
];

export default function RajasthanPage() {
  return (
    <>
      <Script
        id="rajasthan-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Rajasthan" },
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
            src="/images/destinations/rajasthan.jpg"
            alt="Rajasthan royal heritage and historic forts"
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
              Rajasthan Tours & Sightseeing
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
              Discover the Royal Heritage of Rajasthan
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
              Explore majestic forts, magnificent palaces, colorful cities,
              desert landscapes and rich Rajasthani culture with private tours
              and experienced local guides.
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
              Rajasthan Tours: Experience India's Royal State
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Rajasthan is one of India's most fascinating travel
              destinations, famous for its royal palaces, magnificent forts,
              colorful markets, historic cities and timeless traditions. From
              the Pink City of Jaipur to the blue streets of Jodhpur and the
              romantic lakes of Udaipur, Rajasthan offers an unforgettable
              journey through India's royal heritage.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              A private Rajasthan tour allows you to explore the region at
              your own pace with comfortable transportation and local
              expertise. Whether you are interested in history, architecture,
              culture, food, shopping or wildlife, Rajasthan offers
              experiences for every type of traveler.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              Rajasthan can also be combined with Delhi and Agra on a{" "}
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
              , creating a memorable journey through India's most iconic
              heritage destinations.
            </p>
          </div>
        </section>

        {/* TOP DESTINATIONS */}
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
                Top Places to Visit in Rajasthan
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "#666",
                }}
              >
                Discover Rajasthan's most famous heritage cities, royal
                landmarks, spiritual destinations and wildlife experiences.
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
                      fontSize: "25px",
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

        {/* RAJASTHAN EXPERIENCE */}
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
              What to Experience in Rajasthan
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(280px,1fr))",
                gap: "25px",
                marginTop: "35px",
              }}
            >
              {[
                "Explore magnificent Rajput forts and royal palaces",
                "Discover Jaipur, Jodhpur and Udaipur",
                "Experience colorful Rajasthani markets and handicrafts",
                "Enjoy traditional Rajasthani cuisine",
                "Experience desert landscapes and cultural traditions",
                "Combine heritage sightseeing with a Ranthambore safari",
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
              Private Rajasthan Tours
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Discover Rajasthan comfortably with a private vehicle,
              experienced chauffeur and local guides. Your itinerary can be
              customized around the destinations, attractions and experiences
              that interest you most.
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
                <li>Experienced local guides</li>
                <li>Hotel pickup and drop-off options</li>
                <li>Comfortable transportation between destinations</li>
                <li>Local recommendations and travel assistance</li>
              </ul>
            </div>

            <div style={{ marginTop: "35px" }}>
              <Link
                href="/tours"
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
                Explore Rajasthan Tours →
              </Link>
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
              Rajasthan and the Golden Triangle
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Rajasthan is an excellent extension to India's famous Golden
              Triangle route connecting Delhi, Agra and Jaipur. Travelers can
              begin with Delhi, visit the Taj Mahal in Agra and then continue
              into Rajasthan to experience the royal heritage of Jaipur and
              other historic cities.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              Combining these destinations creates a diverse Indian journey
              covering Mughal architecture, Rajput heritage, royal palaces,
              colorful markets and unforgettable cultural experiences.
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
              Best Time to Visit Rajasthan
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              October to March is generally the most comfortable period for
              exploring Rajasthan. The cooler temperatures make it easier to
              visit forts, palaces, markets and outdoor attractions.
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
                  Pleasant weather and ideal conditions for sightseeing and
                  exploring Rajasthan's heritage attractions.
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
                  Hot summer weather. Early morning and late afternoon
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
                <h3 style={{ color: "#08142d" }}>
                  July – September
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "28px",
                  }}
                >
                  Monsoon season with occasional rainfall and greener
                  landscapes across parts of Rajasthan.
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
              Frequently Asked Questions About Rajasthan
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

        {/* RELATED DESTINATIONS */}
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
              Explore More Destinations
            </h2>

            <ul
              style={{
                lineHeight: "38px",
                fontSize: "18px",
              }}
            >
              <li>
                <Link href="/destinations/jaipur">
                  Explore Jaipur
                </Link>
              </li>

              <li>
                <Link href="/destinations/ranthambore">
                  Explore Ranthambore
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

              <li>
                <Link href="/tours">
                  View All Tours
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
              Explore Rajasthan with Local Experts
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#ddd",
                marginBottom: "40px",
              }}
            >
              Discover Rajasthan's royal heritage, magnificent architecture
              and vibrant culture with private transportation, experienced
              local guides and flexible sightseeing experiences from Taj
              Wonder Heritage Tours.
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
                href="/tours"
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
                Explore Rajasthan Tours
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
    </>
  );
}