
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonicalUrl =
  "https://www.tajwonderheritagetours.com/blog/best-time-to-visit-taj-mahal";

const title =
  "Best Time to Visit the Taj Mahal: Months, Weather & Tips";

const description =
  "Find the best time to visit the Taj Mahal in Agra. Compare seasons, monthly weather, sunrise and sunset, crowds, photography tips and visitor advice.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "/images/blog/best-time-to-visit-taj-mahal.jpg",
        width: 1200,
        height: 630,
        alt: "The Taj Mahal in Agra, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/blog/best-time-to-visit-taj-mahal.jpg"],
  },
};

const faqs = [
  {
    question: "What is the best month to visit the Taj Mahal?",
    answer:
      "October, November, February and March are often comfortable months for sightseeing in Agra. December and January can bring cold, foggy mornings, while April to June is usually very hot. Conditions vary each year.",
  },
  {
    question: "What is the best time of day to visit the Taj Mahal?",
    answer:
      "Early morning is a popular choice because temperatures are generally cooler and the light is softer. Arriving early can also help you enjoy the monument before the busiest part of the day.",
  },
  {
    question: "Is sunrise or sunset better at the Taj Mahal?",
    answer:
      "Sunrise is ideal for early-morning light and cooler temperatures. Sunset can provide warm colours for photography. Your best option depends on the weather, visibility, crowd levels and your travel schedule.",
  },
  {
    question: "Is the Taj Mahal open every day?",
    answer:
      "The Taj Mahal is closed to regular visitors on Fridays. Check official visitor information and ticket availability before finalising your travel plans.",
  },
  {
    question: "How many hours do I need at the Taj Mahal?",
    answer:
      "Allow around two to three hours for a typical visit to explore the monument and gardens at a comfortable pace. You may need more time if you enjoy photography or want a relaxed visit.",
  },
  {
    question: "Is summer a good time to visit the Taj Mahal?",
    answer:
      "Summer visits are possible, but Agra can become extremely hot from April to June. Choose an early visit, carry drinking water, wear comfortable clothing and follow the site's current entry rules.",
  },
  {
    question: "Can I visit the Taj Mahal during the monsoon?",
    answer:
      "Yes. Visits are possible during the monsoon season, generally July to September. Expect possible rain, humidity and cloudy skies, and allow flexibility in your schedule.",
  },
  {
    question: "Can I visit the Taj Mahal on a same-day trip from Delhi?",
    answer:
      "Yes. A same-day trip from Delhi to Agra is possible with an early departure and careful planning. Travel time depends on your pickup location, traffic and transport arrangements.",
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

const sectionStyle = {
  marginTop: "54px",
  scrollMarginTop: "30px",
};

const headingStyle = {
  color: "#08142d",
  lineHeight: 1.25,
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: 1.85,
  color: "#444",
  marginTop: "18px",
};

const tableStyle = {
  width: "100%",
  minWidth: "540px",
  borderCollapse: "collapse" as const,
  fontSize: "16px",
};

const cellStyle = {
  padding: "14px",
  textAlign: "left" as const,
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top" as const,
};

const tocLinks = [
  ["#quick-answer", "Quick answer: when should you visit?"],
  ["#best-season", "Best season to visit"],
  ["#sunrise-sunset", "Sunrise vs sunset"],
  ["#month-guide", "Month-by-month guide"],
  ["#crowds", "Crowds, opening days and entry tips"],
  ["#photography", "Photography tips"],
  ["#planning", "How to plan your Agra visit"],
  ["#faq", "Frequently asked questions"],
];

export default function BestTimeToVisitTajMahalPage() {
  return (
    <main>
      <header
        style={{
          background: "#08142d",
          color: "#fff",
          padding: "76px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "2px",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "13px",
            }}
          >
            Taj Mahal Travel Guide
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.18,
              margin: "18px 0",
            }}
          >
            Best Time to Visit the Taj Mahal
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#e5e7eb",
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            Find the best season, month and time of day for your
            visit, with practical advice on Agra&apos;s weather,
            photography, crowds and travel planning.
          </p>
        </div>
      </header>

      <article
        style={{
          maxWidth: "960px",
          margin: "48px auto",
          padding: "0 20px",
          color: "#333",
        }}
      >
        <Image
          src="/images/blog/best-time-to-visit-taj-mahal.jpg"
          alt="The white marble Taj Mahal in Agra, India"
          width={1200}
          height={630}
          priority
          sizes="(max-width: 768px) 100vw, 920px"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "16px",
          }}
        />

        <p style={{ color: "#666", fontSize: "14px", marginTop: "14px" }}>
          Travel guide by Taj Wonder Heritage Tours
        </p>

        <section id="quick-answer" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "30px" }}>
            Quick Answer: When Should You Visit?
          </h2>

          <p style={paragraphStyle}>
            For many travellers, <strong>October to March</strong> is
            a comfortable period to visit the Taj Mahal in Agra.
            October and November often bring more comfortable
            sightseeing weather, while February and March can also
            be pleasant. Winter mornings may be cold or foggy,
            particularly in December and January.
          </p>

          <p style={paragraphStyle}>
            If you want cooler temperatures and soft morning light,
            consider an early visit. If you are travelling in summer,
            plan around the heat. There is no single perfect time for
            everyone: weather, visibility, crowd levels and your
            itinerary all matter.
          </p>

          <div
            style={{
              background: "#f8f9fb",
              borderLeft: "4px solid #d4af37",
              padding: "20px",
              borderRadius: "8px",
              marginTop: "24px",
            }}
          >
            <strong style={{ color: "#08142d" }}>
              Planning tip
            </strong>
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              The Taj Mahal is closed to regular visitors on Fridays.
              Check official opening information and ticket availability
              before choosing your date.
            </p>
          </div>
        </section>

        <nav
          aria-label="Table of contents"
          style={{
            background: "#f8f9fb",
            padding: "24px",
            borderRadius: "12px",
            marginTop: "36px",
          }}
        >
          <h2 style={{ ...headingStyle, fontSize: "23px", marginTop: 0 }}>
            In This Guide
          </h2>

          <ul style={{ lineHeight: 2, paddingLeft: "22px", marginBottom: 0 }}>
            {tocLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} style={{ color: "#173c78" }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="best-season" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            Best Season to Visit the Taj Mahal
          </h2>

          <p style={paragraphStyle}>
            Agra experiences hot summers, a monsoon season and cooler
            winters. Your experience at the Taj Mahal can change
            considerably with the season, so consider both comfort
            and the type of photographs you hope to take.
          </p>

          <div style={{ overflowX: "auto", marginTop: "24px" }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ background: "#08142d", color: "#fff" }}>
                  <th style={cellStyle}>Period</th>
                  <th style={cellStyle}>Typical conditions</th>
                  <th style={cellStyle}>Planning advice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>October–November</td>
                  <td style={cellStyle}>Generally more comfortable</td>
                  <td style={cellStyle}>A good period for sightseeing</td>
                </tr>
                <tr style={{ background: "#f8f9fb" }}>
                  <td style={cellStyle}>December–January</td>
                  <td style={cellStyle}>Cool mornings; possible fog</td>
                  <td style={cellStyle}>Carry warm clothing and allow flexibility</td>
                </tr>
                <tr>
                  <td style={cellStyle}>February–March</td>
                  <td style={cellStyle}>Often pleasant for outdoor visits</td>
                  <td style={cellStyle}>Good months to explore Agra</td>
                </tr>
                <tr style={{ background: "#f8f9fb" }}>
                  <td style={cellStyle}>April–June</td>
                  <td style={cellStyle}>Very hot weather</td>
                  <td style={cellStyle}>Prefer early sightseeing and take breaks</td>
                </tr>
                <tr>
                  <td style={cellStyle}>July–September</td>
                  <td style={cellStyle}>Rain and humidity are possible</td>
                  <td style={cellStyle}>Bring rain protection and keep plans flexible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={paragraphStyle}>
            These are general seasonal patterns, not a daily forecast.
            Check the weather close to your travel date, particularly
            during winter fog or periods of heavy rain.
          </p>
        </section>

        <section id="sunrise-sunset" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            Taj Mahal at Sunrise or Sunset: Which Is Better?
          </h2>

          <p style={paragraphStyle}>
            Sunrise is popular for cooler temperatures and soft light.
            Sunset can create warmer tones across the marble. Both can
            be beautiful, but haze, cloud cover and the number of
            visitors affect the experience.
          </p>

          <div style={{ overflowX: "auto", marginTop: "24px" }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ background: "#08142d", color: "#fff" }}>
                  <th style={cellStyle}>What matters</th>
                  <th style={cellStyle}>Sunrise</th>
                  <th style={cellStyle}>Sunset</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>Temperature</td>
                  <td style={cellStyle}>Usually cooler</td>
                  <td style={cellStyle}>Depends on the season</td>
                </tr>
                <tr style={{ background: "#f8f9fb" }}>
                  <td style={cellStyle}>Light</td>
                  <td style={cellStyle}>Soft early-morning light</td>
                  <td style={cellStyle}>Potentially warm evening tones</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Photography</td>
                  <td style={cellStyle}>Good for morning scenes</td>
                  <td style={cellStyle}>Good for warm-colour scenes</td>
                </tr>
                <tr style={{ background: "#f8f9fb" }}>
                  <td style={cellStyle}>Best suited to</td>
                  <td style={cellStyle}>Early risers and morning itineraries</td>
                  <td style={cellStyle}>Travellers with afternoon flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={paragraphStyle}>
            Remember that a sunset viewpoint outside the main complex
            is not the same as entering the Taj Mahal at sunset. Check
            the current official visiting hours and access rules for
            the experience you want.
          </p>
        </section>

        <section id="month-guide" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            Month-by-Month Guide to Visiting Agra
          </h2>

          <h3 style={{ ...headingStyle, fontSize: "23px", marginTop: "28px" }}>
            October and November
          </h3>
          <p style={paragraphStyle}>
            These months are often suitable for exploring the Taj
            Mahal, Agra Fort and other outdoor attractions. Conditions
            can vary, so check the forecast before travelling.
          </p>

          <h3 style={{ ...headingStyle, fontSize: "23px", marginTop: "28px" }}>
            December and January
          </h3>
          <p style={paragraphStyle}>
            Winter mornings can be cold and foggy. Reduced visibility
            may affect distant views and photographs. Keep some
            flexibility in your schedule and bring a warm layer.
          </p>

          <h3 style={{ ...headingStyle, fontSize: "23px", marginTop: "28px" }}>
            February and March
          </h3>
          <p style={paragraphStyle}>
            These months are often comfortable for sightseeing before
            the stronger summer heat arrives. They can work well for
            combining the Taj Mahal with other Agra monuments.
          </p>

          <h3 style={{ ...headingStyle, fontSize: "23px", marginTop: "28px" }}>
            April, May and June
          </h3>
          <p style={paragraphStyle}>
            Temperatures can become very high. If you visit during
            summer, plan outdoor activities early, wear suitable
            clothing, drink water and take breaks in the shade.
          </p>

          <h3 style={{ ...headingStyle, fontSize: "23px", marginTop: "28px" }}>
            July, August and September
          </h3>
          <p style={paragraphStyle}>
            Monsoon weather can bring rain and humidity. The landscape
            may look greener, but showers can affect travel plans.
            Carry rain protection and leave time between activities.
          </p>
        </section>

        <section id="crowds" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            Crowds, Opening Days and Entry Tips
          </h2>

          <p style={paragraphStyle}>
            Weekdays can sometimes feel less busy than weekends or
            public holidays, although visitor numbers vary throughout
            the year. Arriving early can help you make the most of
            your visit, but it does not guarantee an empty monument.
          </p>

          <ul style={{ ...paragraphStyle, paddingLeft: "24px" }}>
            <li>Check official opening information before departure.</li>
            <li>Remember that regular visits are closed on Fridays.</li>
            <li>Buy tickets through the official booking channel where available.</li>
            <li>Allow time for security checks and entry procedures.</li>
            <li>Check current rules about permitted items and photography.</li>
            <li>Keep your ticket and identification details accessible as required.</li>
          </ul>

          <p style={paragraphStyle}>
            For current ticket prices, entry conditions and visiting
            hours, consult the official
            {" "}
            <a
              href="https://www.tajmahal.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taj Mahal website
            </a>
            {" "}before your visit.
          </p>
        </section>

        <section id="photography" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            Taj Mahal Photography Tips
          </h2>

          <ul style={{ ...paragraphStyle, paddingLeft: "24px" }}>
            <li>Arrive early if you want softer morning light.</li>
            <li>Use the central water channel for a classic symmetrical view.</li>
            <li>Explore different viewpoints instead of taking only one front-facing photo.</li>
            <li>Keep your phone or camera lens clean.</li>
            <li>Be patient when other visitors are in your frame.</li>
            <li>Check the current photography rules before bringing equipment.</li>
          </ul>

          <p style={paragraphStyle}>
            Fog can soften the monument&apos;s outline in winter, while
            clear conditions may reveal more detail. Neither effect is
            guaranteed, so plan your visit around the overall experience
            rather than expecting one perfect photograph.
          </p>
        </section>

        <section id="planning" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            How to Plan Your Taj Mahal Visit
          </h2>

          <p style={paragraphStyle}>
            If you are staying in Agra, plan enough time for the Taj
            Mahal and consider visiting Agra Fort as well. If you are
            travelling from Delhi, an early start is useful because
            road conditions and journey times can vary.
          </p>

          <p style={paragraphStyle}>
            A private tour may be convenient if you prefer transport
            arranged around your schedule. Compare the itinerary,
            vehicle, guide arrangements, inclusions and total cost
            before booking.
          </p>

          <p style={paragraphStyle}>
            Explore our{" "}
            <Link href="/tours/same-day-taj-mahal-tour">
              Same Day Taj Mahal Tour from Delhi
            </Link>{" "}
            if you want to visit Agra and return to Delhi on the same day.
          </p>

          <p style={paragraphStyle}>
            You can also read our guides to{" "}
            <Link href="/blog/best-places-to-visit-in-agra">
              the best places to visit in Agra
            </Link>
            {" "}and{" "}
            <Link href="/blog/taj-mahal-sunrise-vs-sunset">
              Taj Mahal sunrise versus sunset
            </Link>
            {" "}to plan the rest of your visit.
          </p>
        </section>

        <section id="faq" style={sectionStyle}>
          <h2 style={{ ...headingStyle, fontSize: "32px" }}>
            Frequently Asked Questions
          </h2>

          <div style={{ marginTop: "26px" }}>
            {faqs.map((faq) => (
              <section
                key={faq.question}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  padding: "20px 0",
                }}
              >
                <h3
                  style={{
                    ...headingStyle,
                    fontSize: "20px",
                    margin: 0,
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ ...paragraphStyle, marginBottom: 0 }}>
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "64px",
            background: "#08142d",
            padding: "40px 24px",
            borderRadius: "16px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ fontSize: "30px", lineHeight: 1.3, marginTop: 0 }}>
            Planning a Taj Mahal Trip?
          </h2>

          <p
            style={{
              maxWidth: "680px",
              margin: "16px auto 26px",
              lineHeight: 1.8,
              color: "#e5e7eb",
            }}
          >
            Explore Agra with Taj Wonder Heritage Tours. Review our
            tour details and contact us to discuss your travel plans.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tours/same-day-taj-mahal-tour"
              style={{
                background: "#d4af37",
                color: "#08142d",
                padding: "14px 22px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Same-Day Tour
            </Link>

            <Link
              href="/contact"
              style={{
                background: "#fff",
                color: "#08142d",
                padding: "14px 22px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </article>

      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: "960px",
          margin: "0 auto 40px",
          padding: "0 20px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <Link href="/" style={{ color: "#173c78" }}>
          Home
        </Link>
        {" / "}
        <Link href="/blog" style={{ color: "#173c78" }}>
          Blog
        </Link>
        {" / "}
        <span aria-current="page">Best Time to Visit the Taj Mahal</span>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
