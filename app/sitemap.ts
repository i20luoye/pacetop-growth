import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pacetop.com",
      lastModified: new Date(),
    },
    {
      url: "https://pacetop.com/case-study/dyfab",
      lastModified: new Date(),
    },
    {
      url: "https://pacetop.com/audit-request",
      lastModified: new Date(),
    },
  ];
}
