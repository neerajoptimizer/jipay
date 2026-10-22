import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { policies } from "@/lib/policies";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...policies.map((p) => ({ url: `${site.url}/policies/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
