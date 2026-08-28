import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonicalUrl =
  "https://www.tajwonderheritagetours.com/blog/best-time-to-visit-taj-mahal";

export const metadata: Metadata = {
  title: "Best Time to Visit Taj Mahal (2026 Complete Guide)",
  description:
    "Discover the best time to visit the Taj Mahal in 2026. Learn about sunrise, sunset, weather, seasons, photography tips, crowd levels and travel advice from local experts.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Best Time to Visit Taj Mahal (2026 Guide)",
    description:
      "Everything you need to know before visiting the Taj Mahal including weather, sunrise, sunset and seasonal travel tips.",
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
      "Everything you need to know before visiting the Taj Mahal including weather, sunrise, sunset and seasonal travel tips.",
    images: ["/images/blog/best-time-to-visit-taj-mahal.jpg"],
  },
};

const faqs = [
  {
    question: "What is the best month to visit the Taj Mahal?",
    answer:
      "October to March generally offers the most comfortable weather for visiting the Taj Mahal. February and March are especially pleasant for sightseeing.",
  },
  {
    question: "Is sunrise worth visiting?",
    answer:
      "Absolutely. Sunrise offers cooler temperatures, softer light for photography and a peaceful atmosphere compared with the busiest parts of the day.",
  },
  {
    question: "Which day should I avoid?",
    answer:
      "The Taj Mahal is closed to regular visitors on Fridays. It is also a good idea to avoid major public holidays if you prefer smaller crowds.",
  },
  {
    question: "How much time should I spend at the Taj Mahal?",
    answer:
      "Most visitors spend around two to three hours exploring the monument, gardens and surrounding areas.",
  },
  {
    question: "Can I visit the Taj Mahal in summer?",
    answer:
      "Yes. Summer visits are possible, but temperatures can become very hot. Early morning is strongly recommended during April, May and June.",
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
            }}
          >
            Taj Mahal Travel Guide
          </span>

          <h1
            style={{
              fontSize: "52px",
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
            }}
          >
            Planning your Taj Mahal trip? Discover the best season, weather,
            sunrise timings, crowd levels and expert travel tips before
            visiting India&apos;s most famous monument.
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

        <span>Best Time to Visit Taj Mahal</span>
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
          src="/images/blog/best-time-to-visit-taj-mahal.jpg"
          alt="Best Time to Visit Taj Mahal"
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
              <a href="#crowds">Crowd & Entry Tips</a>
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
          The Taj Mahal is one of the world&apos;s most famous monuments and
          attracts visitors from around the globe throughout the year.
          Choosing the right time to visit can make a major difference to your
          experience, especially when it comes to weather, crowds and
          photography.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "34px",
            color: "#444",
            marginTop: "25px",
          }}
        >
          Whether you are visiting India for the first time or returning to
          experience the monument again, this guide explains the best months,
          seasons and times of day to help you plan your Taj Mahal visit.
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
            The ideal season to visit the Taj Mahal is generally from{" "}
            <strong>October to March</strong>. During these months, Agra
            usually has more comfortable temperatures for sightseeing.
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
                  Season
                </th>
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Weather
                </th>
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Recommendation
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "16px" }}>October – March</td>
                <td style={{ padding: "16px" }}>Cool & Pleasant</td>
                <td style={{ padding: "16px" }}>★★★★★ Best Time</td>
              </tr>

              <tr style={{ background: "#f7f7f7" }}>
                <td style={{ padding: "16px" }}>April – June</td>
                <td style={{ padding: "16px" }}>Very Hot</td>
                <td style={{ padding: "16px" }}>Visit Early Morning</td>
              </tr>

              <tr>
                <td style={{ padding: "16px" }}>July – September</td>
                <td style={{ padding: "16px" }}>Monsoon</td>
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
              marginTop: "65px",
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
            The Taj Mahal looks beautiful throughout the day, but sunrise and
            sunset offer different experiences. Sunrise is especially popular
            for its cooler temperatures, peaceful atmosphere and soft morning
            light. Sunset provides warmer tones and a beautiful evening
            atmosphere.
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
                  Feature
                </th>
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Sunrise
                </th>
                <th style={{ padding: "16px", textAlign: "left" }}>
                  Sunset
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "16px" }}>Crowds</td>
                <td style={{ padding: "16px" }}>Usually Lower</td>
                <td style={{ padding: "16px" }}>Usually Moderate</td>
              </tr>

              <tr style={{ background: "#f7f7f7" }}>
                <td style={{ padding: "16px" }}>Photography</td>
                <td style={{ padding: "16px" }}>★★★★★</td>
                <td style={{ padding: "16px" }}>★★★★☆</td>
              </tr>

              <tr>
                <td style={{ padding: "16px" }}>Temperature</td>
                <td style={{ padding: "16px" }}>Cooler</td>
                <td style={{ padding: "16px" }}>Warmer</td>
              </tr>

              <tr style={{ background: "#f7f7f7" }}>
                <td style={{ padding: "16px" }}>Best For</td>
                <td style={{ padding: "16px" }}>
                  First-time visitors & photographers
                </td>
                <td style={{ padding: "16px" }}>
                  Evening visitors & photographers
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Month Guide */}
        <section id="month-guide">
          <h2
            style={{
              marginTop: "65px",
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
            These months are generally comfortable for sightseeing, with
            pleasant daytime conditions. They are excellent months for exploring
            Agra and photographing the Taj Mahal.
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
            Winter mornings can sometimes be foggy, which may affect visibility
            around sunrise. Afternoons are often more comfortable. Carry warm
            clothing for early mornings.
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
            February and March are among the most pleasant months for visiting
            Agra. Temperatures are generally comfortable and sightseeing
            conditions are favorable.
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
            Summer can be extremely hot, particularly during the middle of the
            day. If you travel during these months, plan your Taj Mahal visit
            as early as possible and carry water and sun protection.
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
            Monsoon brings occasional rain and higher humidity. The gardens and
            surrounding landscape can look lush and green, while visitor
            numbers may be lower on some days.
          </p>
        </section>

        {/* Photography */}
        <section id="photography">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
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
            <li>📸 Arrive early for softer morning light.</li>
            <li>
              📸 Capture the Taj Mahal and its reflection from the central
              water channel.
            </li>
            <li>
              📸 Weekdays can be preferable if you want a quieter experience.
            </li>
            <li>
              📸 Wear comfortable clothing and shoes for walking around the
              complex.
            </li>
            <li>📸 Keep your camera or phone lens clean.</li>
            <li>
              📸 Take both wide-angle photographs and closer architectural
              details.
            </li>
          </ul>
        </section>

        {/* Crowd Tips */}
        <section id="crowds">
          <h2
            style={{
              marginTop: "70px",
              fontSize: "40px",
              color: "#08142d",
            }}
          >
            Crowd & Entry Tips
          </h2>

          <p
            style={{
              lineHeight: "34px",
              color: "#444",
              marginTop: "25px",
            }}
          >
            The Taj Mahal is closed to regular visitors on Fridays. Weekdays
            can provide a more comfortable sightseeing experience than busy
            weekends and public holidays. Check official ticket information
            before your visit and plan to arrive early.
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
            <strong>Local Tip:</strong> If you want to see the Taj Mahal at
            sunrise, plan your transportation and entry arrangements in
            advance so you can reach the monument early.
          </div>
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

            <li>
              <Link href="/tours/golden-triangle-tour">
                Golden Triangle Tour
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
            Taj Wonder Heritage Tours offers private Taj Mahal tours,
            professional local guides and comfortable transportation to make
            your Agra experience unforgettable.
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