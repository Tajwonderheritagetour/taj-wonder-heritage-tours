export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Taj Wonder Heritage Tours",
    url: "https://www.tajwonderheritagetours.com",
   logo: "https://www.tajwonderheritagetours.com/images/logo.png",
    image: "https://www.tajwonderheritagetours.com/images/og-image.jpg",
    description:
      "Taj Wonder Heritage Tours is a private India tour operator offering Taj Mahal tours, Golden Triangle tours, Rajasthan tours and customized travel experiences with local experts.",

    telephone: "+91-7830716981",

    email: "info@tajwonderheritagetours.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Building No. 9, Deepika Vihar, Barauli Ahir, Shamsabad Road",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282001",
      addressCountry: "IN",
    },

    areaServed: "India",

    priceRange: "$$",

  sameAs: [
  "https://www.tripadvisor.com/YourProfile",
  "https://www.viator.com/YourProfile"
]
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