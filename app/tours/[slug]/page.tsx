import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { tours } from "@/lib/tours";

import Navbar from "@/components/layout/Navbar";

import TourHero from "@/components/Tour/TourHero";
import TourOverview from "@/components/Tour/TourOverview";
import TourHighlights from "@/components/Tour/TourHighlights";
import TourItinerary from "@/components/Tour/TourItinerary";
import TourIncludes from "@/components/Tour/TourIncludes";
import TourKnowBefore from "@/components/Tour/TourKnowBefore";
import TourFAQ from "@/components/Tour/TourFAQ";
import PremiumBookingSidebar from "@/components/Tour/PremiumBookingSidebar";
import TourInquiryForm from "@/components/Tour/TourInquiryForm";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.values(tours).map((tour) => ({
    slug: tour.slug,
  }));
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

            <TourOverview overview={tour.overview} />

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

          </div>

          {/* RIGHT SIDEBAR */}

          <PremiumBookingSidebar />

        </div>

      </div>
    </>
  );
}