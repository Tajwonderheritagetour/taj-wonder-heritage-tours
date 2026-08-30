import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Orchha Tours & Sightseeing | Private Orchha Tour",
  description:
    "Explore Orchha with Taj Wonder Heritage Tours. Discover Orchha Fort, Jahangir Mahal, Ram Raja Temple, Chaturbhuj Temple and riverside cenotaphs with private tours and local guides.",
  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/destinations/orchha",
  },
  openGraph: {
    title: "Orchha Tours & Sightseeing | Taj Wonder Heritage Tours",
    description:
      "Discover Orchha's magnificent palaces, temples and riverside cenotaphs with private sightseeing tours and experienced local guides.",
    url: "https://www.tajwonderheritagetours.com/destinations/orchha",
    type: "website",
    images: [
      {
        url: "/images/destinations/orchha.jpg",
        width: 1200,
        height: 630,
        alt: "Orchha Fort and historic heritage monuments",
      },
    ],
  },
};

const faqs = [
  {
    question: "What are the best places to visit in Orchha?",
    answer:
      "The best places to visit in Orchha include Orchha Fort, Jahangir Mahal, Raj Mahal, Ram Raja Temple, Chaturbhuj Temple, Lakshmi Narayan Temple and the famous riverside cenotaphs.",
  },
  {
    question: "How many days are enough to visit Orchha?",
    answer:
      "One full day is enough to explore the major monuments and temples of Orchha. An overnight stay allows you to experience the town at a more relaxed pace.",
  },
  {
    question: "Is Orchha worth visiting?",
    answer:
      "Yes. Orchha is an excellent destination for travelers interested in Indian history, architecture, temples and cultural heritage. Its peaceful atmosphere makes it a wonderful addition to a Central India itinerary.",
  },
  {
    question: "Can I visit Orchha with a private tour?",
    answer:
      "Yes. Taj Wonder Heritage Tours offers private sightseeing experiences with comfortable transportation and local guides.",
  },
  {
    question: "What is the best time to visit Orchha?",
    answer:
      "October to March is generally the most comfortable period for sightseeing in Orchha, with pleasant weather for exploring the historic monuments and temples.",
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
    title: "Orchha Fort",
    description:
      "Explore the magnificent historic fort complex overlooking the Betwa River and discover the royal architecture of the Bundela rulers.",
  },
  {
    title: "Jahangir Mahal",
    description:
      "A spectacular palace built in honor of Mughal emperor Jahangir, known for its impressive domes, balconies and detailed architecture.",
  },
  {
    title: "Raj Mahal",
    description:
      "One of Orchha's most important royal buildings, featuring historic interiors and beautiful architectural details.",
  },
  {
    title: "Ram Raja Temple",
    description:
      "A unique temple where Lord Rama is worshipped as a king and one of the most important spiritual attractions in Orchha.",
  },
  {
    title: "Chaturbhuj Temple",
    description:
      "A remarkable historic temple known for its impressive structure, towering architecture and peaceful surroundings.",
  },
  {
    title: "Orchha Cenotaphs",
    description:
      "Visit the beautiful riverside memorials dedicated to the Bundela rulers, especially atmospheric around sunrise and sunset.",
  },
];

export default function OrchhaPage() {
  return (
    <main>
      {/* FAQ Schema */}
      <Script
        id="orchha-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: "Orchha" },
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
          src="/images/destinations/orchha.jpg"
          alt="Orchha Fort and historic heritage monuments"
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
            Orchha Tours & Sightseeing
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
            Discover the Historic Heritage of Orchha
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
            Explore magnificent palaces, ancient temples, historic forts and
            beautiful riverside cenotaphs in the peaceful heritage town of
            Orchha with private sightseeing tours.
          </p>
        </div>
      </section>

     {/* INTRODUCTION WITH IMAGE */}
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
        Discover Orchha's Heritage
      </span>

      <h2
        style={{
          fontSize: "42px",
          lineHeight: "1.2",
          color: "#08142d",
          margin: "15px 0 25px",
        }}
      >
        Orchha Tours: Discover a Hidden Heritage Gem
      </h2>

      <p
        style={{
          fontSize: "19px",
          lineHeight: "34px",
          color: "#555",
        }}
      >
        Orchha is a beautiful historic town in Madhya Pradesh, known for
        its magnificent Bundela architecture, ancient temples and peaceful
        location along the Betwa River. The town offers travelers a chance
        to experience a quieter side of India's rich cultural heritage.
      </p>

      <p
        style={{
          fontSize: "19px",
          lineHeight: "34px",
          color: "#555",
          marginTop: "22px",
        }}
      >
        A private Orchha sightseeing tour allows you to explore the town's
        most important monuments comfortably while learning about its
        fascinating history, royal families and religious traditions from
        a local guide.
      </p>

      <p
        style={{
          fontSize: "19px",
          lineHeight: "34px",
          color: "#555",
          marginTop: "22px",
        }}
      >
        Orchha can also be combined with other Central India destinations
        such as Khajuraho and Varanasi for a longer heritage journey.
      </p>
    </div>

    {/* Orchha Image */}
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
        src="/images/destinations/orchha.jpg"
        alt="Orchha Fort and historic heritage monuments"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
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
              Top Places to Visit in Orchha
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                color: "#666",
              }}
            >
              Discover Orchha's magnificent palaces, temples, forts and
              riverside monuments.
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

      {/* ORCHHA EXPERIENCE */}
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
            What to Experience in Orchha
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
              "Explore the magnificent Orchha Fort complex",
              "Discover Jahangir Mahal and Raj Mahal",
              "Visit the unique Ram Raja Temple",
              "Admire the architecture of Chaturbhuj Temple",
              "See the riverside Bundela cenotaphs",
              "Experience Orchha with a private local guide",
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
                <strong style={{ color: "#d4af37" }}>✓</strong> {item}
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
            Private Orchha Sightseeing Tours
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Explore Orchha at your own pace with private transportation and
            local sightseeing assistance. A private tour gives you more
            flexibility to spend time at the monuments and discover the
            history behind Orchha's royal heritage.
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
              Explore Our Tours →
            </Link>
          </div>
        </div>
      </section>

      {/* CENTRAL INDIA TOUR */}
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
            Combine Orchha with Khajuraho and Varanasi
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Orchha is an excellent destination to include in a Central India
            heritage itinerary. Travelers can combine Orchha with Khajuraho's
            famous temples and continue to Varanasi for its ancient ghats,
            temples and spiritual traditions.
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
              Explore Varanasi Tour →
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
            Best Time to Visit Orchha
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            October to March is generally the most comfortable period for
            exploring Orchha's historic monuments and temples.
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

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                Pleasant weather and ideal conditions for exploring Orchha's
                outdoor monuments.
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
              <h3 style={{ color: "#08142d" }}>July – September</h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
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
            Frequently Asked Questions About Orchha
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
            Explore More Indian Destinations
          </h2>

          <ul
            style={{
              lineHeight: "38px",
              fontSize: "18px",
            }}
          >
            <li>
              <Link href="/destinations/khajuraho">
                Explore Khajuraho
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

            <li>
              <Link href="/destinations/rajasthan">
                Explore Rajasthan
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
            Explore Orchha with Local Experts
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#ddd",
              marginBottom: "40px",
            }}
          >
            Discover Orchha's royal heritage, ancient temples and magnificent
            architecture with private transportation, experienced local
            guides and a flexible sightseeing experience.
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