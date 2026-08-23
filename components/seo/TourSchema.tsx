import type { Tour } from "@/lib/tours/types";

interface TourSchemaProps {
  tour: Tour;
}

export default function TourSchema({ tour }: TourSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",

    "@id": `${tour.canonical}#tour`,

    name: tour.title,

    description: tour.seoDescription,

    image: [`https://www.tajwonderheritagetours.com${tour.image}`],

    url: tour.canonical,

    provider: {
      "@type": "TravelAgency",
      name: "Taj Wonder Heritage Tours",
      url: "https://www.tajwonderheritagetours.com",
    },

    offers: {
      "@type": "Offer",
      url: tour.canonical,
      category: "Private Tour",
      seller: {
        "@type": "TravelAgency",
        name: "Taj Wonder Heritage Tours",
        url: "https://www.tajwonderheritagetours.com",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}