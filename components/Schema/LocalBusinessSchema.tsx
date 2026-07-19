export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",

    name: "Taj Wonder Heritage Tour",

    image: "https://www.tajwonderheritagetour.com/logo.png",

    url: "https://www.tajwonderheritagetour.com",

    telephone: "+91-7830716981",

    email: "info@tajwonderheritagetour.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Building No. 9, Deepika Vihar, Barauli Ahir",
      addressLocality: "Agra",
      postalCode: "282001",
      addressCountry: "IN",
    },

    areaServed: [
      "Agra",
      "Delhi",
      "Jaipur",
      "Ranthambore",
      "Rajasthan",
      "India",
    ],

    priceRange: "$$",

    openingHours: "Mo-Su 00:00-23:59",

    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
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