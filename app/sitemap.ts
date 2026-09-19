import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? ["/", "/privacy", "/terms"].map((path) => ({
        url: new URL(path, siteUrl).href,
      }))
    : [];
}
