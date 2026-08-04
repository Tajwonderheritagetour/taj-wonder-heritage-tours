import Link from "next/link";
import Image from "next/image";

import { tours } from "@/lib/tours";

interface Props {
  currentSlug: string;
}

export default function RelatedTours({
  currentSlug,
}: Props) {
  const currentTour = Object.values(tours).find(
    (tour) => tour.slug === currentSlug
  );

  if (!currentTour) return null;

  const keywords = [
    ...currentTour.location
      .toLowerCase()
      .split(/[,&/-]/)
      .map((k) => k.trim()),
    ...currentTour.title
      .toLowerCase()
      .split(" ")
      .filter((w) => w.length > 4),
  ];

  const relatedTours = Object.values(tours)
    .filter((tour) => tour.slug !== currentSlug)
    .map((tour) => {
      const text = (
        tour.title +
        " " +
        tour.location
      ).toLowerCase();

      let score = 0;

      keywords.forEach((k) => {
        if (text.includes(k)) score++;
      });

      return {
        ...tour,
        score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  return (
    <section
      style={{
        marginTop: "90px",
      }}
    >
      <h2
        style={{
          fontSize: "44px",
          color: "#08142d",
          marginBottom: "18px",
        }}
      >
        You May Also Like
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          lineHeight: "30px",
          marginBottom: "40px",
        }}
      >
        Discover more unforgettable private journeys across India.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px",
        }}
      >
        {relatedTours.map((tour) => (
          <div
            key={tour.slug}
            style={{
              background: "#fff",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow:
                "0 15px 40px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "220px",
              }}
            >
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                padding: "26px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "15px",
                  color: "#666",
                  fontSize: "15px",
                }}
              >
                <span>
                  ⭐ {tour.rating}
                </span>

                <span>
                  {tour.duration}
                </span>
              </div>

              <h3
                style={{
                  color: "#08142d",
                  fontSize: "28px",
                  marginBottom: "14px",
                }}
              >
                {tour.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "30px",
                  marginBottom: "20px",
                }}
              >
                {tour.shortDescription}
              </p>

              <Link
                href={`/tours/${tour.slug}`}
                style={{
                  display: "inline-block",
                  padding: "14px 30px",
                  background: "#08142d",
                  color: "#fff",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Explore Tour →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}