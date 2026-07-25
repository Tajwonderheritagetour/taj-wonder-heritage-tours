import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tajwonderheritagetours.com";

  const pages = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/tours",
    "/destinations",

    // Destination Pages
    "/destinations/agra",
    "/destinations/jaipur",
    "/destinations/delhi",
    "/destinations/ranthambore",

    // Tour Pages
    "/tours/same-day-taj-mahal-tour",
    "/tours/agra-overnight-tour",
    "/tours/golden-triangle-tour",
    "/tours/golden-triangle-ranthambore-tour",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}