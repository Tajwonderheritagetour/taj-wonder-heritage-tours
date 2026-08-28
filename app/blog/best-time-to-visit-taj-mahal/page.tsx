import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonicalUrl =
  "https://www.tajwonderheritagetours.com/blog/best-time-to-visit-taj-mahal";

export const metadata: Metadata = {
  title: "Best Time to Visit Taj Mahal (2026 Complete Guide)",
  description:
    "Discover the best time to visit the Taj Mahal in 2026, including the best season, sunrise and sunset, weather, crowds, photography tips and travel advice.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Best Time to Visit Taj Mahal (2026 Complete Guide)",
    description:
      "Discover the best season, weather, sunrise, sunset, crowd levels and photography tips for visiting the Taj Mahal.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "/images/blog/best-time-to-visit-taj-mahal.jpg",
        width: 1200,
        height: 630,
        alt: "Best Time to Visit Taj Mahal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Time to Visit Taj Mahal (2026 Guide)",
    description:
      "Everything you need to know about the best time to visit the Taj Mahal, including weather, sunrise, sunset and seasonal travel tips.",
    images: ["/images/blog/best-time-to-visit-taj-mahal.jpg"],
  },
};

const faqs = [
  {
    question: "What is the best month to visit the Taj Mahal?",
    answer:
      "October to March generally offers the most comfortable weather for visiting the Taj Mahal. December and January can have foggy mornings, while February and March are often pleasant for sightseeing.",
  },
  {
    question: "Is sunrise worth visiting at the Taj Mahal?",
    answer:
      "Yes. Sunrise is one of the best times to visit the Taj Mahal because temperatures are cooler, the light is soft and the atmosphere can be more peaceful than later in the day.",
  },
  {
    question: "Which day should I avoid when visiting the Taj Mahal?",
    answer:
      "The Taj Mahal is closed to regular visitors every Friday. Check the official ticketing information and your travel schedule before planning your visit.",
  },
  {
    question: "How much time should I spend at the Taj Mahal?",
    answer:
      "Most visitors spend around two to three hours exploring the Taj Mahal complex, gardens and surrounding areas, although photography and sightseeing preferences can make the visit longer.",
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

export default function BestTimeToVisitTajMahalPage() {
  return (
    <main>
      {/* Hero */}

      <section
        style={{
          background: "#08142d",
          color: "#fff",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Taj Mahal Travel Guide
          </span>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 54px)",
              lineHeight: "1.15",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Best Time to Visit Taj Mahal (2026 Guide)
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "34px",
              color: "#eee",
              margin: 0,
            }}
          >
            Planning your Taj Mahal trip? Discover the best season,
            weather, sunrise timings, crowd levels and expert travel
            tips before visiting India&apos;s most famous monument.
          </p>
        </div>
      </section>

      {/* Article */}

      <section
        style={{
          maxWidth: "1000px",
          margin: "70px auto",
          padding: "0 20px",
        }}
      >
        <Image
          src="/images/blog/best-time-to-visit-taj-mahal.jpg"
          alt="Best Time to Visit Taj Mahal"
          width={1200}
          height={630}
          priority
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "18px",
            marginBottom: "40px",
          }}
        />

        <p
          style={{
            color: "#777",
            fontSize: "16px",
            marginBottom: "35px",
          }}
        >
          Published: July 2026 • Taj Wonder Heritage Tours
        </p>

        {/* Table of Contents */}

        <nav
          aria-label="Table of contents"
          style={{
            background: "#f8f9fb",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "45px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "15px",
              color: "#08142d",
              fontSize: "24px",
            }}
          >
            Table of Contents
          </h2>

          <ul
            style={{
              lineHeight: "32px",
              margin: 0,
              paddingLeft: "22px",
            }}
          >
            <li>
              <a href="#best-season">Best Season to Visit</a>
            </li>
            <li>
              <a href="#sunrise-sunset">Sunrise vs Sunset</a>
            </li>
            <li>
              <a href="#month-guide">Month-by-Month Guide</a>
            </li>
            <li>
              <a href="#photography">Photography Tips</a>
            </li>
            <li>
              <a href="#crowds">Crowd &amp; Entry Tips</a>
            </li>
            <li>
              <a href="#faq">Frequently Asked Questions</a>
            </li>
          </ul>
        </nav>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "34px",
            color: "#444",
          }}
        >
          The Taj Mahal is one of the world&apos;s most famous monuments
          and attracts visitors from around the globe. Choosing the right
          time to visit can make a major difference to your experience,
          especially when it comes to weather, crowds and photography.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "34px",
            color: "#444",
            marginTop: "25px",
          }}
        >
          Whether you are visiting India for the first time or returning
          to Agra, this guide explains the best seasons, months and times
          of day for planning your Taj Mahal visit.
        </p>

        {/* Best Season */}

        <section id="best-season">
          <h2
            style={{
              marginTop: "65px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Best Season to Visit Taj Mahal
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            The most comfortable season to visit the Taj Mahal is
            generally from <strong>October to March</strong>. During
            these months, temperatures are usually more pleasant for
            sightseeing than during the peak summer months.
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "35px",
              marginBottom: "45px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#08142d",
                  color: "#fff",
                }}
              >
                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Season
                </th>

                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Weather
                </th>

                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Recommendation
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "16px" }}>
                  October – March
                </td>

                <td style={{ padding: "16px" }}>
                  Cool &amp; Pleasant
                </td>

                <td style={{ padding: "16px" }}>
                  ⭐ Best Time
                </td>
              </tr>

              <tr
                style={{
                  background: "#f7f7f7",
                }}
              >
                <td style={{ padding: "16px" }}>
                  April – June
                </td>

                <td style={{ padding: "16px" }}>
                  Very Hot
                </td>

                <td style={{ padding: "16px" }}>
                  Visit Early Morning
                </td>
              </tr>

              <tr>
                <td style={{ padding: "16px" }}>
                  July – September
                </td>

                <td style={{ padding: "16px" }}>
                  Monsoon
                </td>

                <td style={{ padding: "16px" }}>
                  Good for Green Landscapes
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Sunrise vs Sunset */}

        <section id="sunrise-sunset">
          <h2
            style={{
              marginTop: "60px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Sunrise or Sunset – Which is Better?
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            The Taj Mahal looks beautiful throughout the day, but sunrise
            and sunset provide different experiences. Sunrise is popular
            for cooler temperatures, softer light and a peaceful
            atmosphere. Sunset offers warmer tones and can be particularly
            attractive for photography.
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "35px",
              marginBottom: "45px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#08142d",
                  color: "#fff",
                }}
              >
                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Feature
                </th>

                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Sunrise
                </th>

                <th
                  style={{
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  Sunset
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "16px" }}>
                  Crowds
                </td>

                <td style={{ padding: "16px" }}>
                  Usually Lower
                </td>

                <td style={{ padding: "16px" }}>
                  Moderate
                </td>
              </tr>

              <tr
                style={{
                  background: "#f7f7f7",
                }}
              >
                <td style={{ padding: "16px" }}>
                  Photography
                </td>

                <td style={{ padding: "16px" }}>
                  Excellent
                </td>

                <td style={{ padding: "16px" }}>
                  Excellent
                </td>
              </tr>

              <tr>
                <td style={{ padding: "16px" }}>
                  Temperature
                </td>

                <td style={{ padding: "16px" }}>
                  Cooler
                </td>

                <td style={{ padding: "16px" }}>
                  Pleasant
                </td>
              </tr>

              <tr
                style={{
                  background: "#f7f7f7",
                }}
              >
                <td style={{ padding: "16px" }}>
                  Best For
                </td>

                <td style={{ padding: "16px" }}>
                  First-time visitors &amp; photographers
                </td>

                <td style={{ padding: "16px" }}>
                  Evening travellers &amp; photographers
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Month Guide */}

        <section id="month-guide">
          <h2
            style={{
              marginTop: "60px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Month-by-Month Guide
          </h2>

          <h3
            style={{
              marginTop: "35px",
              color: "#08142d",
            }}
          >
            October – November
          </h3>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
            }}
          >
            October and November are generally excellent months for
            sightseeing, with more comfortable temperatures than the
            summer season.
          </p>

          <h3
            style={{
              marginTop: "35px",
              color: "#08142d",
            }}
          >
            December – January
          </h3>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
            }}
          >
            Winter mornings can sometimes be foggy, particularly in
            December and January. Afternoons can be comfortable for
            sightseeing. Carry a warm layer for early morning visits.
          </p>

          <h3
            style={{
              marginTop: "35px",
              color: "#08142d",
            }}
          >
            February – March
          </h3>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
            }}
          >
            February and March are popular months for exploring Agra,
            with generally pleasant conditions for visiting outdoor
            monuments.
          </p>

          <h3
            style={{
              marginTop: "35px",
              color: "#08142d",
            }}
          >
            April – June
          </h3>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
            }}
          >
            Summer can be extremely hot in Agra. If you travel during
            these months, early morning sightseeing is recommended to
            avoid the strongest afternoon heat.
          </p>

          <h3
            style={{
              marginTop: "35px",
              color: "#08142d",
            }}
          >
            July – September
          </h3>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
            }}
          >
            The monsoon season can bring rain and humidity, but the
            surrounding landscapes can become greener. Visitor numbers
            may also be lower at some times.
          </p>
        </section>

        {/* Photography */}

        <section id="photography">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "42px",
              color: "#08142d",
            }}
          >
            Taj Mahal Photography Tips
          </h2>

          <ul
            style={{
              lineHeight: "36px",
              fontSize: "18px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            <li>
              Arrive early for softer morning light.
            </li>

            <li>
              Use the central water channel for classic reflection
              photographs.
            </li>

            <li>
              Weekdays can be preferable if you want a quieter experience.
            </li>

            <li>
              Wear comfortable clothing suitable for walking.
            </li>

            <li>
              Keep your camera or phone lens clean for clearer photographs.
            </li>

            <li>
              Explore different viewpoints instead of taking only the
              standard front-facing photograph.
            </li>
          </ul>
        </section>

        {/* Crowd Tips */}

        <section id="crowds">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "42px",
              color: "#08142d",
            }}
          >
            Crowd &amp; Entry Tips
          </h2>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            The Taj Mahal is closed to regular visitors every Friday.
            Weekdays can generally provide a more relaxed sightseeing
            experience than weekends and major holidays.
          </p>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
              marginTop: "20px",
            }}
          >
            Before travelling, check the latest official ticketing and
            visitor information because opening arrangements, entry rules
            and visiting conditions can change.
          </p>
        </section>

        {/* FAQ */}

        <section id="faq">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "42px",
              color: "#08142d",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              marginTop: "35px",
            }}
          >
            {faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  marginBottom: "30px",
                }}
              >
                <h3
                  style={{
                    color: "#08142d",
                    marginBottom: "10px",
                  }}
                >
                  {faq.question}
                </h3>

                <p
                  style={{
                    lineHeight: "32px",
                    color: "#555",
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

        <section id="related-guides">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "42px",
              color: "#08142d",
            }}
          >
            Related Travel Guides
          </h2>

          <ul
            style={{
              marginTop: "25px",
              lineHeight: "34px",
              fontSize: "18px",
            }}
          >
            <li>
              <Link href="/blog/best-places-to-visit-in-agra">
                10 Best Places to Visit in Agra
              </Link>
            </li>

            <li>
              <Link href="/blog/things-to-do-in-agra">
                Top Things to Do in Agra
              </Link>
            </li>

            <li>
              <Link href="/blog/taj-mahal-sunrise-vs-sunset">
                Taj Mahal Sunrise vs Sunset
              </Link>
            </li>

            <li>
              <Link href="/tours/same-day-taj-mahal-tour">
                Same Day Taj Mahal Tour
              </Link>
            </li>

            <li>
              <Link href="/tours/golden-triangle-5-day-tour">
                5-Day Golden Triangle Tour
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA */}

        <section
          style={{
            marginTop: "80px",
            background: "#08142d",
            padding: "50px 30px",
            borderRadius: "18px",
            textAlign: "center",
            color: "#fff",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            Plan Your Taj Mahal Tour With Local Experts
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 35px",
              lineHeight: "32px",
              fontSize: "18px",
              color: "#ddd",
            }}
          >
            Explore the Taj Mahal with Taj Wonder Heritage Tours.
            Enjoy private transportation, professional local guides and
            personalized sightseeing experiences in Agra.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tours/same-day-taj-mahal-tour"
              style={{
                display: "inline-block",
                background: "#d4af37",
                color: "#08142d",
                padding: "15px 30px",
                borderRadius: "40px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Same Day Taj Mahal Tour
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#08142d",
                padding: "15px 30px",
                borderRadius: "40px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </section>

      {/* Breadcrumb */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto 40px",
          padding: "0 20px",
          fontSize: "15px",
          color: "#777",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#08142d",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        {" > "}

        <Link
          href="/blog"
          style={{
            color: "#08142d",
            textDecoration: "none",
          }}
        >
          Blog
        </Link>

        {" > "}

        <span>Best Time to Visit Taj Mahal</span>
      </section>

      {/* FAQ Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}