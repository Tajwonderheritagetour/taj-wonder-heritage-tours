import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 10 Things to Do in Agra Beyond the Taj Mahal (2026 Guide)",
  description:
    "Discover the best places to visit in Agra including the Taj Mahal, Agra Fort, Mehtab Bagh, Fatehpur Sikri, Baby Taj and more with expert travel tips.",

  alternates: {
    canonical:
      "https://www.tajwonderheritagetours.com/blog/best-places-to-visit-in-agra",
  },

  openGraph: {
    title: "Top 10 Things to Do in Agra Beyond the Taj Mahal(2026 Travel Guide)",
    description:
      "Complete Agra Travel Guide with the city's top tourist attractions.",
    images: [
      {
        url: "/images/blog/things-to-do-in-agra.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BestPlacesAgra() {
  return (
    <main>

      <section
        style={{
          background: "#08142d",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            Discover Agra's most famous attractions including the Taj Mahal,
            Agra Fort, Mehtab Bagh, Fatehpur Sikri and many more unforgettable
            destinations.
          </p>
        </div>
      </section>

      <div
        style={{
          maxWidth: "1100px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <Image
         src="/images/blog/best-places-to-visit-in-agra.jpg"
          alt="Best Places to Visit in Agra"
          width={1200}
          height={630}
          style={{
            width: "100%",
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
          Agra is one of India's most visited cities and home to one of the
          world's greatest architectural masterpieces, the Taj Mahal.
          Beyond this iconic monument, Agra offers magnificent Mughal forts,
          peaceful gardens, colorful markets and UNESCO World Heritage Sites
          that attract millions of travelers every year.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "34px",
            color: "#555",
          }}
        >
          Whether you're planning a{" "}
          <Link href="/tours/same-day-taj-mahal-tour">
            Same Day Taj Mahal Tour
          </Link>{" "}
          or a complete{" "}
          <Link href="/tours/golden-triangle-tour">
            Golden Triangle Tour
          </Link>
          , these are the places you shouldn't miss.
        </p>

        <hr style={{ margin: "50px 0" }} />

        <h2>1. Taj Mahal</h2>

        <p>
          The Taj Mahal is the most famous attraction in India and one of the
          Seven Wonders of the World. Built by Emperor Shah Jahan in memory of
          Mumtaz Mahal, this white marble masterpiece is admired for its perfect
          symmetry and breathtaking beauty.
        </p>

        <ul>
          <li>UNESCO World Heritage Site</li>
          <li>Best visited at sunrise</li>
          <li>Recommended visit: 2–3 hours</li>
        </ul>

        <hr style={{ margin: "50px 0" }} />

        <h2>2. Agra Fort</h2>

        <p>
          Agra Fort is one of India's most impressive Mughal forts. Built from
          red sandstone, it once served as the royal residence of Mughal
          emperors and offers spectacular views of the Taj Mahal.
        </p>

        <ul>
          <li>UNESCO World Heritage Site</li>
          <li>Built by Emperor Akbar</li>
          <li>Time Required: 2 Hours</li>
        </ul>

        <hr style={{ margin: "50px 0" }} />

        <h2>3. Mehtab Bagh</h2>

        <p>
          Located across the Yamuna River, Mehtab Bagh offers one of the best
          panoramic views of the Taj Mahal. It is especially popular during
          sunset.
        </p>

        <hr style={{ margin: "50px 0" }} />

        <h2>4. Itmad-ud-Daulah (Baby Taj)</h2>

        <p>
          Often called the Baby Taj, this beautiful marble mausoleum inspired
          many design elements later used in the Taj Mahal.
        </p>

        <hr style={{ margin: "50px 0" }} />

        <h2>5. Fatehpur Sikri</h2>

        <p>
          Located about 40 km from Agra, Fatehpur Sikri is a UNESCO World
          Heritage Site and one of Emperor Akbar's greatest architectural
          achievements.
        </p>
                <hr style={{ margin: "50px 0" }} />

        <h2>6. Akbar's Tomb (Sikandra)</h2>

        <p>
          Akbar's Tomb is one of the finest examples of Mughal architecture.
          Surrounded by beautiful gardens, this peaceful monument showcases the
          resting place of Emperor Akbar and combines Persian, Islamic and Hindu
          architectural styles.
        </p>

        <ul>
          <li>Peaceful gardens</li>
          <li>Excellent architecture</li>
          <li>Time Required: 1–2 Hours</li>
        </ul>

        <hr style={{ margin: "50px 0" }} />

        <h2>7. Jama Masjid</h2>

        <p>
          Jama Masjid is one of the largest mosques in India. Built during the
          Mughal period, it remains an important religious and historical
          landmark located near Agra Fort.
        </p>

        <hr style={{ margin: "50px 0" }} />

        <h2>8. Kinari Bazaar</h2>

        <p>
          If you love shopping, Kinari Bazaar is the perfect place to explore.
          You'll find marble handicrafts, leather goods, jewelry, textiles,
          spices and authentic local souvenirs.
        </p>

        <hr style={{ margin: "50px 0" }} />

        <h2>9. Chini Ka Rauza</h2>

        <p>
          Chini Ka Rauza is one of Agra's hidden gems, famous for its colorful
          glazed tiles and unique Persian-style architecture.
        </p>

        <hr style={{ margin: "50px 0" }} />

        <h2>10. Wildlife SOS Elephant Conservation Center</h2>

        <p>
          This ethical elephant rescue center offers visitors an opportunity to
          learn about elephant conservation while supporting rescued elephants.
          It is one of Agra's most meaningful experiences.
        </p>

        <hr style={{ margin: "60px 0" }} />

        <h2>Best Time to Visit Agra</h2>

        <p>
          The ideal time to visit Agra is between <strong>October and March</strong>.
          The weather is pleasant, making sightseeing comfortable and enjoyable.
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
            <tr style={{ background: "#08142d", color: "#fff" }}>
              <th style={{ padding: "14px", textAlign: "left" }}>Season</th>
              <th style={{ padding: "14px", textAlign: "left" }}>Weather</th>
              <th style={{ padding: "14px", textAlign: "left" }}>Recommendation</th>
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

        <h2>Frequently Asked Questions</h2>

        <h3>Is one day enough for Agra?</h3>

        <p>
          Yes. A well-planned itinerary allows you to visit the Taj Mahal,
          Agra Fort and Mehtab Bagh comfortably in one day.
        </p>

        <h3>What is Agra famous for?</h3>

        <p>
          Agra is famous for the Taj Mahal, Mughal architecture,
          Agra Fort and beautiful marble handicrafts.
        </p>

        <h3>Is Fatehpur Sikri worth visiting?</h3>

        <p>
          Absolutely. It is one of India's finest UNESCO World Heritage Sites
          and an essential part of any Agra itinerary.
        </p>

        <hr style={{ margin: "60px 0" }} />

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
          <h2 style={{ color: "#fff" }}>
            Explore Agra with Local Experts
          </h2>

          <p
            style={{
              color: "#ddd",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            Discover Agra with professional local guides, private vehicles and
            personalized itineraries from Taj Wonder Heritage Tours.
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
  );
}