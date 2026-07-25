import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: {
  default:
    "Private India Tours | Taj Mahal Tours & Golden Triangle Tours | Taj Wonder Heritage Tours",
  template: "%s | Taj Wonder Heritage Tours",
},

  description:
  "Book private India tours with Taj Wonder Heritage Tours. Explore the Taj Mahal, Golden Triangle, Rajasthan, Agra, Jaipur and Delhi with expert local guides, luxury transport and personalized itineraries.",

  keywords: [
    "Taj Mahal Tour",
    "Golden Triangle Tour",
    "India Private Tours",
    "Agra Tour",
    "Delhi Agra Jaipur Tour",
    "Luxury India Tours",
    "Same Day Taj Mahal Tour",
    "Rajasthan Tour",
    "Private Driver India",
    "Taj Wonder Heritage Tours",
  ],

  authors: [
    {
      name: "Taj Wonder Heritage Tours",
    },
  ],

  creator: "Taj Wonder Heritage Tours",

  publisher: "Taj Wonder Heritage Tours",

metadataBase: new URL("https://tajwonderheritagetours.com"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Taj Wonder Heritage Tours",

    description:
      "Luxury Private India Tours | Taj Mahal | Golden Triangle | Rajasthan | Same Day Tours",

url: "https://tajwonderheritagetours.com",

    siteName: "Taj Wonder Heritage Tours",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taj Wonder Heritage Tours",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Taj Wonder Heritage Tours",

    description:
      "Luxury Private India Tours | Taj Mahal | Golden Triangle | Rajasthan",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <BackToTop />

        <WhatsAppButton />

        <Footer />
      </body>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",

      name: "Taj Wonder Heritage Tours",

      url: "https://www.tajwonderheritagetours.com",

      logo: "https://www.tajwonderheritagetours.com/logo.png",

      image: "https://www.tajwonderheritagetours.com/images/hero/taj-mahal-hero.jpg",

      description:
        "Luxury private India tours including Taj Mahal Tours, Golden Triangle Tours, Rajasthan Tours and customized holidays across India.",

      telephone: "+91-7830716981",

      email: "info@tajwonderheritagetours.com",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Building No. 9, Deepika Vihar, Barauli Ahir",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282001",
        addressCountry: "IN",
      },

      areaServed: "India",

      priceRange: "$$",

      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.tripadvisor.com/",
        "https://www.viator.com/",
      ],
    }),
  }}
/>
    </html>
  );
}