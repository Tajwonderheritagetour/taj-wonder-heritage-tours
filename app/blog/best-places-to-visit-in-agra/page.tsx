import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const canonicalUrl =
  "https://www.tajwonderheritagetours.com/blog/best-places-to-visit-in-agra";

export const metadata: Metadata = {
  title: "10 Best Places to Visit in Agra in 2026 | Top Attractions",

  description:
    "Discover the 10 best places to visit in Agra in 2026, including the Taj Mahal, Agra Fort, Mehtab Bagh, Baby Taj and Fatehpur Sikri.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "10 Best Places to Visit in Agra in 2026 | Top Attractions",

    description:
      "Discover the 10 best places to visit in Agra in 2026, including the Taj Mahal, Agra Fort, Mehtab Bagh, Baby Taj and Fatehpur Sikri.",

    url: canonicalUrl,

    type: "article",

    images: [
      {
        url: `${canonicalUrl.replace(
          "/blog/best-places-to-visit-in-agra",
          ""
        )}/images/blog/best-places-to-visit-in-agra.jpg`,
        width: 1200,
        height: 630,
        alt: "10 Best Places to Visit in Agra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "10 Best Places to Visit in Agra in 2026 | Top Attractions",

    description:
      "Discover the 10 best places to visit in Agra in 2026, including the Taj Mahal, Agra Fort, Mehtab Bagh, Baby Taj and Fatehpur Sikri.",

    images: [
      `${canonicalUrl.replace(
        "/blog/best-places-to-visit-in-agra",
        ""
      )}/images/blog/best-places-to-visit-in-agra.jpg`,
    ],
  },
};

const faqs = [
  {
    question: "Is one day enough to visit Agra?",
    answer:
      "Yes. One day is enough to see Agra's main attractions, especially the Taj Mahal and Agra Fort. With an efficient itinerary, visitors can also include Mehtab Bagh or another nearby attraction.",
  },
  {
    question: "What is Agra famous for?",
    answer:
      "Agra is famous for the Taj Mahal, Agra Fort, Mughal architecture, historic monuments, marble handicrafts and its rich connection with India's Mughal history.",
  },
  {
    question: "What are the best places to visit in Agra?",
    answer:
      "The best places to visit in Agra include the Taj Mahal, Agra Fort, Mehtab Bagh, Itmad-ud-Daulah, Fatehpur Sikri, Akbar's Tomb, Jama Masjid, Kinari Bazaar and Chini Ka Rauza.",
  },
  {
    question: "Is Fatehpur Sikri worth visiting from Agra?",
    answer:
      "Yes. Fatehpur Sikri is an important Mughal-era UNESCO World Heritage Site located near Agra and is a popular addition to a Golden Triangle or Agra sightseeing itinerary.",
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

export default function BestPlacesAgra() {
  return (
    <>
      <Script
        id="agra-blog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        {/* Hero */}

        <section
          style={{
            background: "#08142d",
            color: "#fff",
            padding: "80px 20px",
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
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Agra Travel Guide
            </span>

            <h1
              style={{
                fontSize: "52px",
                marginTop: "20px",
                marginBottom: "20px",
                lineHeight: "1.15",
              }}
            >
              10 Best Places to Visit in Agra (2026 Guide)
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "34px",
                color: "#eee",
              }}
            >
              Discover Agra&apos;s most famous attractions, including the Taj
              Mahal, Agra Fort, Mehtab Bagh, Fatehpur Sikri and other historic
              places worth visiting.
            </p>
          </div>
        </section>

        {/* Article */}

        <div
          style={{
            maxWidth: "1100px",
            margin: "60px auto",
            padding: "0 20px",
          }}
        >
          <Image
            src="/images/blog/best-places-to-visit-in-agra.jpg"
            alt="10 Best Places to Visit in Agra"
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
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Looking for the best places to visit in Agra? The city is much
            more than the Taj Mahal. Agra is home to magnificent Mughal
            monuments, historic forts, beautiful gardens, colorful markets
            and UNESCO World Heritage Sites.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            From the world-famous Taj Mahal and Agra Fort to Mehtab Bagh, the
            Baby Taj and Fatehpur Sikri, there are many fascinating places to
            explore in and around Agra.
          </p>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Whether you are planning a{" "}
            <Link
              href="/tours/same-day-taj-mahal-tour"
              style={{
                color: "#b08d1e",
                fontWeight: 600,
              }}
            >
              Same Day Taj Mahal Tour
            </Link>{" "}
            from Delhi or exploring Agra as part of a{" "}
            <Link
              href="/tours/golden-triangle-tour"
              style={{
                color: "#b08d1e",
                fontWeight: 600,
              }}
            >
              Golden Triangle Tour
            </Link>
            , this Agra travel guide will help you decide which attractions to
            visit and how to plan your sightseeing.
          </p>

          <hr style={{ margin: "50px 0" }} />

          {/* 1 */}

          <h2>1. Taj Mahal</h2>

          <p>
            The Taj Mahal is Agra&apos;s most famous attraction and one of the
            world&apos;s best-known monuments. Built by Mughal Emperor Shah
            Jahan in memory of Mumtaz Mahal, the white marble mausoleum is
            admired for its symmetry, detailed craftsmanship and beautiful
            setting beside the Yamuna River.
          </p>

          <ul>
            <li>UNESCO World Heritage Site</li>
            <li>Best visited early in the morning</li>
            <li>Recommended visit: 2–3 hours</li>
          </ul>

          <hr style={{ margin: "50px 0" }} />

          {/* 2 */}

          <h2>2. Agra Fort</h2>

          <p>
            Agra Fort is one of India&apos;s most impressive Mughal
            architectural complexes. Built primarily in red sandstone during
            the reign of Emperor Akbar, the fort later became an important
            royal residence. Several areas inside the fort also provide views
            toward the Taj Mahal.
          </p>

          <ul>
            <li>UNESCO World Heritage Site</li>
            <li>Major Mughal-era landmark</li>
            <li>Recommended visit: about 2 hours</li>
          </ul>

          <hr style={{ margin: "50px 0" }} />

          {/* 3 */}

          <h2>3. Mehtab Bagh</h2>

          <p>
            Located across the Yamuna River from the Taj Mahal, Mehtab Bagh is
            a historic Mughal garden known for its views of the monument. The
            garden is particularly popular with visitors looking for a
            different perspective of the Taj Mahal and a peaceful place away
            from the busiest areas.
          </p>

          <ul>
            <li>Panoramic Taj Mahal views</li>
            <li>Historic Mughal garden</li>
            <li>Popular around sunset</li>
          </ul>

          <hr style={{ margin: "50px 0" }} />

          {/* 4 */}

          <h2>4. Itmad-ud-Daulah (Baby Taj)</h2>

          <p>
            Often called the Baby Taj, the Tomb of Itmad-ud-Daulah is an
            elegant marble mausoleum on the banks of the Yamuna. Its delicate
            inlay work, marble screens and detailed decoration make it one of
            the most beautiful smaller monuments in Agra.
          </p>

          <ul>
            <li>Beautiful marble inlay work</li>
            <li>Located beside the Yamuna River</li>
            <li>Recommended visit: about 1 hour</li>
          </ul>

          <hr style={{ margin: "50px 0" }} />
                    {/* 5 */}

          <h2>5. Fatehpur Sikri</h2>

          <p>
            Located about 40 km from Agra, Fatehpur Sikri is a remarkable
            historic city associated with Emperor Akbar. The complex includes
            impressive courtyards, palaces, gates and religious buildings and
            is recognized as a UNESCO World Heritage Site.
          </p>

          <ul>
            <li>UNESCO World Heritage Site</li>
            <li>Historic Mughal capital</li>
            <li>Excellent addition to an Agra itinerary</li>
          </ul>

          <hr style={{ margin: "50px 0" }} />

          {/* 6 */}

          <h2>6. Akbar&apos;s Tomb (Sikandra)</h2>

          <p>
            Akbar&apos;s Tomb at Sikandra is one of the finest examples of
            Mughal architecture in Agra. The monument is surrounded by
            landscaped gardens and features a distinctive combination of
            architectural influences that developed during the Mughal period.
          </p>

          <ul>
            <li>Peaceful landscaped gardens</li>
            <li>Detailed Mughal architecture</li>
            <li>Recommended visit: 1–2 hours</li>
          </ul>

          <hr style={{ margin: "50px 0" }} />

          {/* 7 */}

          <h2>7. Jama Masjid</h2>

          <p>
            Agra&apos;s Jama Masjid is a historic Mughal-era mosque located
            close to Agra Fort. Built during the reign of Shah Jahan, the
            mosque is known for its red sandstone and marble details and
            remains an important historical landmark in the old city.
          </p>

          <hr style={{ margin: "50px 0" }} />

          {/* 8 */}

          <h2>8. Kinari Bazaar</h2>

          <p>
            Kinari Bazaar is one of the traditional shopping areas in Agra.
            Visitors can explore local shops selling marble handicrafts,
            textiles, jewelry, leather products, decorations and souvenirs.
            It is a good place to experience the atmosphere of Agra&apos;s
            historic market district.
          </p>

          <hr style={{ margin: "50px 0" }} />

          {/* 9 */}

          <h2>9. Chini Ka Rauza</h2>

          <p>
            Chini Ka Rauza is a lesser-known Mughal-era monument on the eastern
            bank of the Yamuna. It is especially interesting for its glazed
            tile decoration and Persian-inspired architectural details, making
            it a worthwhile stop for travelers interested in Agra&apos;s
            lesser-known heritage.
          </p>

          <hr style={{ margin: "50px 0" }} />

          {/* 10 */}

          <h2>10. Wildlife SOS Elephant Conservation Center</h2>

          <p>
            Travelers interested in wildlife conservation can consider visiting
            the Wildlife SOS Elephant Conservation Center near Agra. The center
            focuses on the rescue, rehabilitation and care of elephants and
            provides educational experiences about elephant welfare and
            conservation.
          </p>

          <hr style={{ margin: "60px 0" }} />

          {/* Best Time */}

          <h2>Best Time to Visit Agra</h2>

          <p>
            The most comfortable time for sightseeing in Agra is generally
            between <strong>October and March</strong>, when temperatures are
            more pleasant for visiting outdoor monuments.
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "25px",
              marginBottom: "40px",
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
                    padding: "14px",
                    textAlign: "left",
                  }}
                >
                  Season
                </th>

                <th
                  style={{
                    padding: "14px",
                    textAlign: "left",
                  }}
                >
                  Weather
                </th>

                <th
                  style={{
                    padding: "14px",
                    textAlign: "left",
                  }}
                >
                  Recommendation
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "14px" }}>October – March</td>
                <td style={{ padding: "14px" }}>Pleasant</td>
                <td style={{ padding: "14px" }}>★★★★★</td>
              </tr>

              <tr>
                <td style={{ padding: "14px" }}>April – June</td>
                <td style={{ padding: "14px" }}>Very Hot</td>
                <td style={{ padding: "14px" }}>★★☆☆☆</td>
              </tr>

              <tr>
                <td style={{ padding: "14px" }}>July – September</td>
                <td style={{ padding: "14px" }}>Monsoon</td>
                <td style={{ padding: "14px" }}>★★★☆☆</td>
              </tr>
            </tbody>
          </table>

          <hr style={{ margin: "60px 0" }} />

          {/* FAQ */}

          <h2>Frequently Asked Questions</h2>

          <h3>Is one day enough to visit Agra?</h3>

          <p>
            Yes. A well-planned itinerary can cover the Taj Mahal and Agra
            Fort comfortably in one day. Depending on your schedule, you can
            also include Mehtab Bagh, the Baby Taj or another nearby
            attraction.
          </p>

          <h3>What is Agra famous for?</h3>

          <p>
            Agra is famous for the Taj Mahal, Mughal architecture, Agra Fort,
            historic monuments, marble handicrafts and its connection with the
            Mughal history of India.
          </p>

          <h3>What are the best places to visit in Agra?</h3>

          <p>
            Some of the best places to visit in Agra include the Taj Mahal,
            Agra Fort, Mehtab Bagh, Itmad-ud-Daulah, Fatehpur Sikri,
            Akbar&apos;s Tomb, Jama Masjid, Kinari Bazaar and Chini Ka Rauza.
          </p>

          <h3>Is Fatehpur Sikri worth visiting?</h3>

          <p>
            Absolutely. Fatehpur Sikri is an important UNESCO World Heritage
            Site and a fascinating example of Mughal architecture. It is a
            popular addition to Agra sightseeing and Golden Triangle
            itineraries.
          </p>

          <hr style={{ margin: "60px 0" }} />

          {/* CTA */}

          <section
            style={{
              background: "#08142d",
              color: "#fff",
              padding: "50px",
              borderRadius: "18px",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                color: "#fff",
              }}
            >
              Explore Agra with Local Experts
            </h2>

            <p
              style={{
                color: "#ddd",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Discover Agra with professional local guides, private vehicles
              and personalized itineraries from Taj Wonder Heritage Tours.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              <Link
                href="/tours/same-day-taj-mahal-tour"
                style={{
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
                  background: "#25D366",
                  color: "#fff",
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
        </div>
      </main>
    </>
  );
}