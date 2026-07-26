export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",

    "@id": "https://www.tajwonderheritagetours.com/#organization",

    name: "Taj Wonder Heritage Tours",

    url: "https://www.tajwonderheritagetours.com",

    logo: "https://www.tajwonderheritagetours.com/images/logo.png",

    image: "https://www.tajwonderheritagetours.com/images/og-image.jpg",

    description:
      "Taj Wonder Heritage Tours is a trusted private India tour operator offering luxury Taj Mahal tours, Golden Triangle tours, Rajasthan tours, same-day trips, and customized travel experiences with experienced local guides.",

    telephone: "+91-7830716981",

    email: "info@tajwonderheritagetours.com",

    priceRange: "$$",

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Building No. 9, Deepika Vihar, Barauli Ahir, Shamsabad Road",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282001",
      addressCountry: "IN",
    },

    sameAs: []
  };

  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}