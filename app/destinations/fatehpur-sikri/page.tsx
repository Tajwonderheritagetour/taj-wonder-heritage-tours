import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fatehpur Sikri Tours | UNESCO Heritage Site Near Agra",
  description:
    "Explore Fatehpur Sikri near Agra with private tours from Taj Wonder Heritage Tours. Discover the Mughal city, Buland Darwaza, Jama Masjid and Panch Mahal.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/fatehpur-sikri",
  },
  openGraph: {
    title: "Fatehpur Sikri Tours | Taj Wonder Heritage Tours",
    description:
      "Discover the magnificent Mughal city of Fatehpur Sikri near Agra with private transportation and experienced local guides.",
    url: "https://www.tajwonderheritagetours.com/destinations/fatehpur-sikri",
    type: "website",
    images: [
      {
        url: "/images/destinations/fatehpur-sikri.jpg",
        width: 1200,
        height: 630,
        alt: "Fatehpur Sikri Mughal architecture near Agra",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is Fatehpur Sikri famous for?",
    answer:
      "Fatehpur Sikri is famous for its magnificent Mughal architecture, historic palaces, courtyards, mosques and the impressive Buland Darwaza.",
  },
  {
    question: "How far is Fatehpur Sikri from Agra?",
    answer:
      "Fatehpur Sikri is approximately 40 kilometers from Agra and is commonly visited as part of an Agra sightseeing or Golden Triangle itinerary.",
  },
  {
    question: "How much time is needed to visit Fatehpur Sikri?",
    answer:
      "Most visitors can explore the main monuments of Fatehpur Sikri in around two to three hours, depending on their interests and pace.",
  },
  {
    question: "Can I visit Fatehpur Sikri from Agra?",
    answer:
      "Yes. Fatehpur Sikri is an excellent day-trip destination from Agra and can easily be included in a private Agra sightseeing itinerary.",
  },
  {
    question: "Can I visit Fatehpur Sikri on a Golden Triangle Tour?",
    answer:
      "Yes. Fatehpur Sikri can be included while traveling between Agra and Jaipur on a Golden Triangle Tour.",
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
    title: "Buland Darwaza",
    description:
      "The monumental gateway of Fatehpur Sikri and one of the most impressive examples of Mughal architecture.",
  },
  {
    title: "Jama Masjid",
    description:
      "A magnificent historic mosque forming an important part of the architectural complex at Fatehpur Sikri.",
  },
  {
    title: "Panch Mahal",
    description:
      "A five-storey palace structure with open terraces and elegant Mughal-era architectural details.",
  },
  {
    title: "Diwan-i-Khas",
    description:
      "A famous Mughal audience hall known for its distinctive central pillar and intricate architectural design.",
  },
  {
    title: "Jodha Bai Palace",
    description:
      "One of the largest residential structures within the Fatehpur Sikri complex, showcasing a blend of architectural styles.",
  },
  {
    title: "Tomb of Salim Chishti",
    description:
      "A beautiful white marble tomb located within the Jama Masjid complex and an important spiritual site.",
  },
];

export default function FatehpurSikriPage() {
  return (
    <main>
      <Script
        id="fatehpur-sikri-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Fatehpur Sikri" },
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
          src="/images/destinations/fatehpur-sikri.jpg"
          alt="Fatehpur Sikri Mughal city near Agra"
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
            background: "rgba(8,20,45,.65)",
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
            Fatehpur Sikri Tours
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
            Discover the Mughal City of Fatehpur Sikri
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
            Explore one of India's most remarkable Mughal-era heritage sites
            with magnificent palaces, grand gateways, historic mosques and
            beautiful architectural details.
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
            Fatehpur Sikri: A Timeless Mughal Heritage City
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Fatehpur Sikri is one of the most fascinating historical
            destinations near Agra. Built during the reign of Mughal Emperor
            Akbar, the magnificent city is known for its grand courtyards,
            palaces, mosques and distinctive red sandstone architecture.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            A visit to Fatehpur Sikri offers travelers an opportunity to step
            into India's Mughal past and explore some of the finest examples
            of imperial architecture in the region.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            The destination is particularly convenient for travelers visiting
            Agra and can also be included in a{" "}
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
              Top Places to See in Fatehpur Sikri
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover the historic monuments and architectural highlights of
              this remarkable Mughal city.
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

      {/* Experience */}

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
            What to Experience at Fatehpur Sikri
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
              "Explore magnificent Mughal architecture",
              "See the impressive Buland Darwaza",
              "Visit the historic Jama Masjid",
              "Discover the beautiful Panch Mahal",
              "Explore royal palaces and courtyards",
              "Learn about Emperor Akbar's historic capital",
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

      {/* From Agra */}

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
            Fatehpur Sikri from Agra
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Fatehpur Sikri is an excellent addition to an Agra sightseeing
            itinerary. Travelers can combine the historic city with other
            major attractions in the Agra region while enjoying private
            transportation and a flexible schedule.
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
              <li>Hotel pickup options</li>
              <li>Comfortable transportation</li>
              <li>Local travel assistance</li>
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
            Fatehpur Sikri on the Golden Triangle Route
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Fatehpur Sikri is conveniently located on the route between Agra
            and Jaipur, making it a popular heritage stop for travelers
            exploring India's Golden Triangle.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Travelers can visit Fatehpur Sikri after exploring the Taj Mahal
            and Agra, before continuing toward Jaipur and Rajasthan.
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

      {/* FAQ */}

      <section
        style={{
          padding: "90px 20px",
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
              fontSize: "42px",
              color: "#08142d",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions About Fatehpur Sikri
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

      {/* Related Destinations */}

      <section
        style={{
          padding: "70px 20px",
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
              fontSize: "38px",
              color: "#08142d",
              marginBottom: "25px",
            }}
          >
            Explore Nearby Destinations
          </h2>

          <ul
            style={{
              lineHeight: "38px",
              fontSize: "18px",
            }}
          >
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

            <li>
              <Link href="/destinations/ranthambore">
                Explore Ranthambore
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
            Explore Fatehpur Sikri with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover the history and architecture of Fatehpur Sikri with
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
              Explore Our Tours
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