export interface Tour {
  slug: string;
  title: string;
  shortDescription: string;
  featured: boolean;

  seoTitle: string;
  seoDescription: string;
  canonical: string;
  keywords: string[];

  image: string;
  gallery: string[];

  duration: string;
  location: string;
  language: string;
  tourType: string;

  rating: number;
  reviewCount: number;

  price: string;

  overview: string;

  highlights: string[];

  itinerary: {
    title: string;
    description: string;
  }[];

  includes: string[];

  excludes: string[];

  knowBefore: string[];

  faqs: {
    question: string;
    answer: string;
  }[];
}