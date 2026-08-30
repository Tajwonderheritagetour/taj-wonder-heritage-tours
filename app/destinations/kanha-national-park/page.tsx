import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Kanha National Park Tours | Tiger Safari & Wildlife Tours | Taj Wonder Heritage Tours",
  description:
    "Explore Kanha National Park with private tiger safari tours. Experience thrilling wildlife safaris, beautiful forests and India's famous Bengal tigers with Taj Wonder Heritage Tours.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/kanha-national-park",
  },
  openGraph: {
    title:
      "Kanha National Park Tours | Tiger Safari & Wildlife Tours",
    description:
      "Discover Kanha National Park with private wildlife tours, exciting tiger safaris and comfortable transportation.",
    url:
      "https://www.tajwonderheritagetours.com/destinations/kanha-national-park",
    type: "website",
    images: [
      {
        url: "/images/destinations/kanha.jpg",
        width: 1200,
        height: 630,
        alt: "Kanha National Park wildlife safari",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is Kanha National Park famous for?",
    answer:
      "Kanha National Park is famous for its Bengal tigers, diverse wildlife, beautiful forests and rich natural landscapes. It is one of India's well-known destinations for wildlife safaris.",
  },
  {
    question: "Can I take a tiger safari in Kanha National Park?",
    answer:
      "Yes. Visitors can experience guided jeep safaris in Kanha National Park to explore its forests and look for Bengal tigers, leopards, deer and other wildlife.",
  },
  {
    question: "How many days are recommended for Kanha National Park?",
    answer:
      "A 2 to 3 day stay is ideal for enjoying multiple safari drives and experiencing the natural beauty and wildlife of Kanha National Park.",
  },
  {
    question: "What wildlife can I see in Kanha National Park?",
    answer:
      "Kanha is home to Bengal tigers, leopards, barasingha, spotted deer, gaur, wild dogs, sloth bears and many species of birds.",
  },
  {
    question: "Can Kanha be combined with a heritage tour?",
    answer:
      "Yes. Kanha can be combined with heritage destinations such as Khajuraho and Orchha to create a memorable Central India heritage and wildlife journey.",
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
    title: "Bengal Tiger Safari",
    description:
      "Explore the forest on a guided jeep safari with opportunities to encounter India's magnificent Bengal tigers.",
  },
  {
    title: "Kanha Wildlife",
    description:
      "Look for deer, gaur, barasingha, wild dogs, leopards, sloth bears and many other fascinating species.",
  },
  {
    title: "Beautiful Forests",
    description:
      "Experience Kanha's peaceful sal forests, grasslands and scenic landscapes away from the busy cities.",
  },
  {
    title: "Bird Watching",
    description:
      "Discover the rich birdlife of Kanha, making the park an excellent destination for nature and photography enthusiasts.",
  },
  {
    title: "Private Safari Experience",
    description:
      "Enjoy a comfortable and personalized wildlife experience with private transportation and assistance.",
  },
  {
    title: "Central India Adventure",
    description:
      "Combine Kanha with destinations such as Khajuraho and Orchha for a unique heritage and wildlife itinerary.",
  },
];

export default function KanhaNationalParkPage() {
  return (
    <main>
      <Script
        id="kanha-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Kanha National Park" },
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
          src="/images/destinations/kanha.jpg"
          alt="Kanha National Park wildlife safari"
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
            Kanha National Park Tours
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
            Discover the Wild Heart of Central India
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
            Experience thrilling tiger safaris, beautiful forests and
            unforgettable wildlife encounters in Kanha National Park with
            private tours and experienced local assistance.
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
            Kanha National Park: A Wildlife Paradise
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Kanha National Park is one of India's most celebrated wildlife
            destinations. Located in Madhya Pradesh, the park is known for
            its beautiful forests, open grasslands and incredible variety of
            wildlife.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            A Kanha safari offers travelers the chance to explore the natural
            landscape while looking for Bengal tigers, leopards, deer, gaur,
            barasingha and many other animals. The park is also a wonderful
            destination for bird watchers and wildlife photographers.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Kanha can also be combined with nearby heritage destinations such
            as{" "}
            <Link
              href="/destinations/khajuraho"
              style={{
                color: "#b08d1e",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Khajuraho
            </Link>{" "}
            and{" "}
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
            for a memorable Central India heritage and wildlife journey.
          </p>
        </div>
      </section>

      {/* Safari Experience */}

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
              Things to Experience in Kanha
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover the wildlife, landscapes and unforgettable experiences
              that make Kanha National Park special.
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

      {/* Kanha Image */}

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
              Experience Kanha on a Private Wildlife Tour
            </h2>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Explore Kanha National Park at a comfortable pace with a
              carefully planned private itinerary. Our team can assist with
              transportation, accommodation planning and safari arrangements.
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "34px",
                color: "#555",
                marginTop: "22px",
              }}
            >
              Whether you are a first-time wildlife traveler, a photographer
              or a family looking for an exciting Indian adventure, Kanha
              offers an unforgettable experience surrounded by nature.
            </p>
          </div>

          <Image
            src="/images/destinations/kanha.jpg"
            alt="Wildlife safari in Kanha National Park"
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

      {/* Private Tour Benefits */}

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
            Private Kanha Safari Tour Benefits
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            A private wildlife journey gives you greater flexibility while
            exploring Central India. Plan your itinerary around your interests
            and combine wildlife experiences with India's remarkable heritage.
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
              Tour Benefits
            </h3>

            <ul
              style={{
                lineHeight: "36px",
                color: "#555",
                fontSize: "18px",
                paddingLeft: "22px",
              }}
            >
              <li>Private transportation</li>
              <li>Flexible travel itinerary</li>
              <li>Safari planning assistance</li>
              <li>Comfortable accommodation options</li>
              <li>Local travel assistance</li>
              <li>Opportunity to combine wildlife and heritage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Central India Tour */}

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
            Combine Kanha with Central India's Heritage
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Kanha can be part of a fascinating Central India journey combining
            wildlife and UNESCO World Heritage attractions. Travelers can
            explore the ancient temples of Khajuraho, the historic palaces of
            Orchha and then continue into the forests of Kanha.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            This combination creates a unique Indian travel experience that
            brings together architecture, history, culture and wildlife.
          </p>

          <div style={{ marginTop: "35px" }}>
            <Link
              href="/tours/central-india-heritage-tiger-safari"
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
              Explore Central India Wildlife Tour →
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
            Best Time to Visit Kanha National Park
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            The ideal time for visiting Kanha is generally during the cooler
            months when wildlife viewing and outdoor activities are more
            comfortable.
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
                Comfortable weather and excellent conditions for wildlife
                safaris and exploring the park.
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
                April – May
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Warmer weather but often good opportunities for wildlife
                sightings around water sources.
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
                Monsoon Season
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Park access and safari availability can be affected by
                seasonal conditions, so check current arrangements before
                planning your trip.
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
            Frequently Asked Questions About Kanha
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
            Explore Kanha National Park
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Experience the forests of Central India, thrilling tiger safaris
            and unforgettable wildlife adventures with Taj Wonder Heritage
            Tours.
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
              href="/tours/central-india-heritage-tiger-safari"
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
              Explore Wildlife Tour
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