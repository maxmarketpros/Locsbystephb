import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://locsbystephb.com";

  const routes = [
    "",
    "/install-requirements",
    "/loc-coloring",
    "/loc-install-process",
    "/loc-installation",
    "/loc-repair",
    "/loc-retie",
    "/loc-stages",
    "/locations-and-parking",
    "/my-loc-journey",
    "/policies",
    "/pricing",
    "/privacy-policy",
    "/reviews",
    "/transfer-clients",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
