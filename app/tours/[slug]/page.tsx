import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { tours } from "@/lib/tours";

import Navbar from "@/components/layout/Navbar";
import RelatedTours from "@/components/Tour/RelatedTours";
import TourHero from "@/components/Tour/TourHero";
import TourOverview from "@/components/Tour/TourOverview";
import TourHighlights from "@/components/Tour/TourHighlights";
import TourItinerary from "@/components/Tour/TourItinerary";
import TourIncludes from "@/components/Tour/TourIncludes";
import TourKnowBefore from "@/components/Tour/TourKnowBefore";
import TourFAQ from "@/components/Tour/TourFAQ";
import PremiumBookingSidebar from "@/components/Tour/PremiumBookingSidebar";
import TourInquiryForm from "@/components/Tour/TourInquiryForm";
import Script from "next/script";
import TourSchema from "@/components/seo/TourSchema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const tour = Object.values(tours).find(
    (item) => item.slug === slug
  );

  if (!tour) {
    return {};
  }

  return {
    title: tour.seoTitle,
    description: tour.seoDescription,

    keywords: tour.keywords,

    alternates: {
      canonical: tour.canonical,
    },

    openGraph: {
      title: tour.seoTitle,
      description: tour.seoDescription,
      url: tour.canonical,
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: tour.seoTitle,
      description: tour.seoDescription,
      images: [tour.image],
    },
  };
}

export default async function TourPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tour = Object.values(tours).find(
    (item) => item.slug === slug
  );

  if (!tour) {
    notFound();
  }

  return (
    <>

     <TourSchema tour={tour} />

  <Script
    id="faq-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tour.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }),
    }}
  />
      <Navbar />

      <TourHero
        title={tour.title}
        image={tour.image}
        duration={tour.duration}
        location={tour.location}
      />

      <div className="container mx-auto px-4 py-12">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}

          <div className="lg:col-span-2 space-y-10">

          <TourOverview
  overview={tour.overview}
  image={tour.image}
  title={tour.title}
/>

            <TourHighlights
              highlights={tour.highlights}
            />

            <TourItinerary
              itinerary={tour.itinerary}
            />

            <TourIncludes
              includes={tour.includes}
              excludes={tour.excludes}
            />

            <TourKnowBefore
              items={tour.knowBefore}
            />

            <TourFAQ
              faqs={tour.faqs}
            />

            {/* Inquiry Form */}

            <TourInquiryForm />
           <RelatedTours currentSlug={tour.slug} />
           
          </div>

          {/* RIGHT SIDEBAR */}

          <PremiumBookingSidebar />

        </div>

      </div>
    </>
  );
}