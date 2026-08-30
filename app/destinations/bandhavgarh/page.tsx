import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Bandhavgarh National Park Tours | Tiger Safari | Taj Wonder Heritage Tours",
  description:
    "Explore Bandhavgarh National Park with private tiger safari tours. Experience thrilling wildlife safaris, beautiful forests and India's famous Bengal tiger habitat with Taj Wonder Heritage Tours.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/bandhavgarh",
  },
  openGraph: {
    title:
      "Bandhavgarh National Park Tours | Tiger Safari",
    description:
      "Discover Bandhavgarh National Park with private wildlife tours and thrilling tiger safari experiences.",
    url:
      "https://www.tajwonderheritagetours.com/destinations/bandhavgarh",
    type: "website",
    images: [
      {
        url: "/images/destinations/bandhavgarh.jpg",
        width: 1200,
        height: 630,
        alt: "Bandhavgarh National Park tiger safari",
      },
    ],
  },
};

const attractions = [
  {
    title: "Bandhavgarh Tiger Safari",
    description:
      "Experience exciting jeep safaris through the national park and explore one of India's renowned tiger habitats.",
  },
  {
    title: "Bandhavgarh Fort",
    description:
      "Discover the historic fort located within the landscape of Bandhavgarh and learn about the region's fascinating heritage.",
  },
  {
    title: "Bengal Tigers",
    description:
      "Bandhavgarh is famous for its tiger sightings and offers excellent opportunities for wildlife enthusiasts and photographers.",
  },
  {
    title: "Wildlife & Birdlife",
    description:
      "Look for leopards, deer, langurs, sloth bears and a variety of beautiful birds during your safari.",
  },
  {
    title: "Forest Landscapes",
    description:
      "Enjoy the peaceful scenery of forests, grasslands, hills and natural landscapes surrounding the national park.",
  },
  {
    title: "Wildlife Photography",
    description:
      "Capture unforgettable moments of India's wildlife with opportunities for nature and wildlife photography.",
  },
];

const faqs = [
  {
    question: "What is Bandhavgarh National Park famous for?",
    answer:
      "Bandhavgarh National Park is particularly famous for its Bengal tiger population and exciting wildlife safari experiences.",
  },
  {
    question: "How many days are enough for Bandhavgarh?",
    answer:
      "A two to three day stay is a good option for enjoying multiple safari drives and exploring the surrounding area at a relaxed pace.",
  },
  {
    question: "Can I book a private Bandhavgarh tiger safari tour?",
    answer:
      "Yes. Private wildlife tours can be arranged with comfortable transportation and assistance with your Bandhavgarh safari itinerary.",
  },
  {
    question: "What animals can I see in Bandhavgarh?",
    answer:
      "Depending on the season and conditions, visitors may see Bengal tigers, leopards, deer, langurs, sloth bears, wild boars and many species of birds.",
  },
  {
    question: "What is the best time to visit Bandhavgarh?",
    answer:
      "The park is generally most suitable for wildlife safaris during the cooler and drier months, although conditions and park opening periods can vary.",
  },
];

export default function BandhavgarhPage() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Bandhavgarh" },
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
          src="/images/destinations/bandhavgarh.jpg"
          alt="Bandhavgarh National Park tiger safari"
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
            Bandhavgarh Tiger Safari
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
            Explore Bandhavgarh National Park
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
            unforgettable wildlife encounters in one of India's most famous
            national parks.
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
            Bandhavgarh Tours: Discover India's Tiger Country
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Bandhavgarh National Park is one of India's best-known wildlife
            destinations. Surrounded by forests, hills and grasslands, the
            park offers travelers the opportunity to experience India's
            incredible wildlife in a natural setting.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            A private Bandhavgarh wildlife tour is an excellent choice for
            travelers who want to combine comfortable transportation,
            carefully planned sightseeing and exciting safari experiences.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Bandhavgarh can also be combined with other destinations in
            Central India, including{" "}
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
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TOP EXPERIENCES */}

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
              Top Experiences in Bandhavgarh
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover the wildlife, landscapes and heritage that make
              Bandhavgarh a memorable destination.
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

      {/* WILDLIFE EXPERIENCE */}

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
            What to Experience on a Bandhavgarh Safari
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
              "Enjoy thrilling jeep safari drives",
              "Look for Bengal tigers in their natural habitat",
              "Explore beautiful forest landscapes",
              "Discover Bandhavgarh's wildlife and birdlife",
              "Enjoy opportunities for wildlife photography",
              "Experience Central India's natural beauty",
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
            Private Bandhavgarh Wildlife Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Travel comfortably with a private vehicle and enjoy a flexible
            itinerary designed around your interests. Our team can assist
            with transportation, sightseeing and planning your wildlife
            experience.
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
              <li>Flexible travel itinerary</li>
              <li>Assistance with safari planning</li>
              <li>Hotel pickup and drop-off options</li>
              <li>Comfortable transportation between destinations</li>
              <li>Local travel assistance and recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CENTRAL INDIA */}

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
            Combine Bandhavgarh with Central India
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Bandhavgarh can be combined with a wider Central India journey
            covering some of the region's most fascinating heritage and
            wildlife destinations.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
              marginTop: "22px",
            }}
          >
            Travelers can combine wildlife experiences in Bandhavgarh with
            the magnificent temples of Khajuraho and the historic heritage
            of Orchha.
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
              Explore Central India Tiger Safari →
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
            Best Time to Visit Bandhavgarh
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            The cooler and drier months are generally popular for wildlife
            safaris because the weather is more comfortable and wildlife
            viewing conditions can be favorable.
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
                October – February
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Comfortable weather for safari drives and exploring the
                surrounding region.
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
                March – May
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Warmer conditions, with wildlife viewing often remaining a
                major attraction.
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
                Park opening schedules and safari availability can vary, so
                check current conditions when planning your trip.
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
            Frequently Asked Questions About Bandhavgarh
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
            Experience Bandhavgarh with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover India's wildlife with comfortable private
            transportation, carefully planned journeys and local travel
            assistance from Taj Wonder Heritage Tours.
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
              Explore Tiger Safari Tour
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