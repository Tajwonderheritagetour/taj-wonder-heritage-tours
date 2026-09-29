import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonicalUrl =
  "https://www.tajwonderheritagetours.com/blog/how-to-reach-taj-mahal-from-delhi";

export const metadata: Metadata = {
  title: "How to Reach Taj Mahal from Delhi (2026 Guide)",
  description:
    "Complete guide to travelling from Delhi to the Taj Mahal by private car, train, bus and other options. Learn travel times, routes, tips and the easiest ways to visit Agra.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "How to Reach Taj Mahal from Delhi (2026 Guide)",
    description:
      "Complete guide to travelling from Delhi to the Taj Mahal by private car, train, bus and other options.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "/images/blog/how-to-reach-taj-mahal-from-delhi.jpg",
        width: 1200,
        height: 630,
        alt: "How to Reach Taj Mahal from Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reach Taj Mahal from Delhi (2026 Guide)",
    description:
      "Complete guide to travelling from Delhi to the Taj Mahal by car, train and bus.",
    images: ["/images/blog/how-to-reach-taj-mahal-from-delhi.jpg"],
  },
};

const faqs = [
  {
    question: "How far is the Taj Mahal from Delhi?",
    answer:
      "The Taj Mahal is approximately 230 kilometres from central Delhi by road. The journey time depends on traffic, route and transportation method.",
  },
  {
    question: "What is the fastest way to reach the Taj Mahal from Delhi?",
    answer:
      "A fast train can provide a convenient connection between Delhi and Agra, while a private car offers door-to-door travel and greater flexibility for sightseeing.",
  },
  {
    question: "Can I visit the Taj Mahal from Delhi in one day?",
    answer:
      "Yes. A same-day Delhi to Agra tour is possible. Many travellers leave Delhi early, visit the Taj Mahal and Agra Fort, and return to Delhi the same evening.",
  },
  {
    question: "Is it better to travel from Delhi to Agra by car or train?",
    answer:
      "Both options can work well. A private car provides flexibility and door-to-door service, while a train can be convenient for travellers who prefer rail transport.",
  },
  {
    question: "What is the best time to leave Delhi for the Taj Mahal?",
    answer:
      "For a same-day visit, leaving Delhi early in the morning allows more time for sightseeing in Agra and can help you avoid some daytime traffic.",
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

export default function HowToReachTajMahalFromDelhiPage() {
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
            }}
          >
            Delhi to Agra Travel Guide
          </span>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.15",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            How to Reach Taj Mahal from Delhi (2026 Guide)
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "34px",
              color: "#eee",
            }}
          >
            Planning a trip from Delhi to the Taj Mahal? Discover the easiest
            ways to travel to Agra by private car, train and bus, along with
            travel times and practical tips.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "25px auto 0",
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

        <span>How to Reach Taj Mahal from Delhi</span>
      </section>

      {/* Article */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "50px auto 80px",
          padding: "0 20px",
        }}
      >
        <Image
          src="/images/blog/how-to-reach-taj-mahal-from-delhi.jpg"
          alt="How to Reach Taj Mahal from Delhi"
          width={1536}
          height={1024}
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
          Published: August 2026 • Taj Wonder Heritage Tours
        </p>

        {/* Table of Contents */}
        <nav
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
              fontSize: "26px",
            }}
          >
            Table of Contents
          </h2>

          <ul
            style={{
              lineHeight: "32px",
              margin: 0,
            }}
          >
            <li>
              <a href="#distance">Distance from Delhi to Taj Mahal</a>
            </li>
            <li>
              <a href="#car">Delhi to Agra by Private Car</a>
            </li>
            <li>
              <a href="#train">Delhi to Agra by Train</a>
            </li>
            <li>
              <a href="#bus">Delhi to Agra by Bus</a>
            </li>
            <li>
              <a href="#same-day">Can You Visit the Taj Mahal in One Day?</a>
            </li>
            <li>
              <a href="#tips">Travel Tips</a>
            </li>
            <li>
              <a href="#faq">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#related-guides">Related Travel Guides</a>
            </li>
          </ul>
        </nav>

        {/* Introduction */}
        <p
          style={{
            fontSize: "19px",
            lineHeight: "34px",
            color: "#444",
          }}
        >
          The Taj Mahal in Agra is one of the most popular attractions for
          travellers visiting Delhi. Because Agra is well connected with the
          capital, it is possible to visit the Taj Mahal as a day trip or stay
          overnight in Agra.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "34px",
            color: "#444",
            marginTop: "25px",
          }}
        >
          The best way to travel depends on your schedule, budget and whether
          you want the convenience of door-to-door transportation or prefer
          travelling by public transport.
        </p>

        {/* Distance */}
        <section id="distance">
          <h2
            style={{
              marginTop: "65px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            How Far Is the Taj Mahal from Delhi?
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            The Taj Mahal is approximately 230 kilometres from central Delhi
            by road. The actual travel time can vary depending on traffic,
            departure point and transportation method.
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
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Transport
                </th>
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Approx. Journey
                </th>
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Main Advantage
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "16px" }}>Private Car</td>
                <td style={{ padding: "16px" }}>Around 3–4 hours</td>
                <td style={{ padding: "16px" }}>
                  Door-to-door convenience
                </td>
              </tr>

              <tr style={{ background: "#f7f7f7" }}>
                <td style={{ padding: "16px" }}>Train</td>
                <td style={{ padding: "16px" }}>Varies by service</td>
                <td style={{ padding: "16px" }}>
                  Fast rail connection
                </td>
              </tr>

              <tr>
                <td style={{ padding: "16px" }}>Bus</td>
                <td style={{ padding: "16px" }}>Usually longer</td>
                <td style={{ padding: "16px" }}>
                  Multiple departure options
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Car */}
        <section id="car">
          <h2
            style={{
              marginTop: "65px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Delhi to Taj Mahal by Private Car
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            Travelling by private car is a convenient option for visitors who
            want a flexible Delhi to Agra journey. You can be picked up from
            your hotel, airport or another location in Delhi and travel
            directly to Agra.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            A private vehicle also makes it easier to combine the Taj Mahal
            with other Agra attractions such as Agra Fort, Mehtab Bagh and
            Itmad-ud-Daulah.
          </p>

          <div
            style={{
              background: "#f8f8f8",
              borderLeft: "6px solid #d4af37",
              padding: "25px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <strong>Local Tip:</strong> If you are planning a same-day trip,
            leaving Delhi early gives you more time for sightseeing in Agra.
          </div>
        </section>

        {/* Train */}
        <section id="train">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Delhi to Agra by Train
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            Train travel is another popular way to reach Agra from Delhi.
            Several rail services connect Delhi with Agra, and journey times
            vary depending on the train and schedule.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            If you choose the train, check the current timetable and ticket
            availability before travelling because schedules can change.
          </p>
        </section>

        {/* Bus */}
        <section id="bus">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Delhi to Agra by Bus
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            Buses also connect Delhi and Agra. This can be an option for
            travellers who prefer road transport and want to use public
            transportation.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            Journey times depend on traffic, the type of bus and the departure
            point. Check the current operator schedule before booking.
          </p>
        </section>

        {/* Same Day */}
        <section id="same-day">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Can You Visit the Taj Mahal from Delhi in One Day?
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            Yes. A Delhi to Agra same-day trip is possible and is a popular
            choice for travellers with limited time in India.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            A typical private day trip can include the Taj Mahal, Agra Fort
            and another Agra attraction before returning to Delhi in the
            evening.
          </p>

          <ul
            style={{
              lineHeight: "36px",
              fontSize: "18px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            <li>Early morning pickup from Delhi</li>
            <li>Travel to Agra</li>
            <li>Visit the Taj Mahal</li>
            <li>Explore Agra Fort</li>
            <li>Optional visit to another Agra attraction</li>
            <li>Return to Delhi</li>
          </ul>
        </section>

        {/* Travel Tips */}
        <section id="tips">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Delhi to Taj Mahal Travel Tips
          </h2>

          <ul
            style={{
              lineHeight: "36px",
              fontSize: "18px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            <li>Start early if you are planning a same-day visit.</li>
            <li>Check the current Taj Mahal opening information before travelling.</li>
            <li>Check train or bus schedules before your departure.</li>
            <li>Keep your travel documents and tickets easily accessible.</li>
            <li>Wear comfortable shoes because sightseeing involves walking.</li>
            <li>Allow extra time for traffic when returning to Delhi.</li>
            <li>Consider staying overnight in Agra if you want a more relaxed trip.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ marginTop: "35px" }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ marginBottom: "30px" }}>
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
              fontSize: "40px",
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
              <Link href="/blog/best-time-to-visit-taj-mahal">
                Best Time to Visit Taj Mahal
              </Link>
            </li>

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
              <Link href="/blog/golden-triangle-india-itinerary">
                Golden Triangle India Itinerary
              </Link>
            </li>

            <li>
              <Link href="/tours/same-day-taj-mahal-tour">
                Same Day Taj Mahal Tour
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "80px",
            background: "#08142d",
            color: "#fff",
            borderRadius: "20px",
            padding: "55px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              marginBottom: "20px",
            }}
          >
            Plan Your Taj Mahal Trip From Delhi
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
            Taj Wonder Heritage Tours offers private Delhi to Agra tours,
            professional local guides and comfortable transportation for your
            Taj Mahal visit.
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
                textDecoration: "none",
                padding: "16px 32px",
                borderRadius: "50px",
                fontWeight: "bold",
              }}
            >
              Same Day Taj Mahal Tour →
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#08142d",
                textDecoration: "none",
                padding: "16px 32px",
                borderRadius: "50px",
                fontWeight: "bold",
              }}
            >
              Contact Us →
            </Link>
          </div>
        </section>
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