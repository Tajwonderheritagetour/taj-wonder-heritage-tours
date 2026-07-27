interface TourSchemaProps {
  tour: any;
}

export default function TourSchema({ tour }: TourSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",

    "@id": `${tour.canonical}#tour`,

    name: tour.title,

    description: tour.seoDescription,

    image: [
      `https://www.tajwonderheritagetours.com${tour.image}`,
    ],

    url: tour.canonical,

    touristType: "International Travelers",

    provider: {
      "@type": "TravelAgency",
      name: "Taj Wonder Heritage Tours",
      url: "https://www.tajwonderheritagetours.com",
    },

    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: tour.canonical,
      priceCurrency: "USD",
      category: "Private Tour",
      seller: {
        "@type": "TravelAgency",
        name: "Taj Wonder Heritage Tours",
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