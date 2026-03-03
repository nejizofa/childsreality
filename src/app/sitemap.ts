import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getMLSAdapter } from "@/lib/mls";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const adapter = getMLSAdapter();
  const { properties } = await adapter.searchProperties({ limit: 1000 });

  const propertyUrls = properties.map((property) => ({
    url: `${SITE_URL}/properties/${property.slug}`,
    lastModified: new Date(property.listDate),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/properties`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/sell`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...propertyUrls,
  ];
}
