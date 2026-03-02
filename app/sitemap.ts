import { MetadataRoute } from "next"
import { services } from "@/lib/services"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goplnr.com"
  const now = new Date("2026-03-03")

  // ── Service pages — high priority, rich with keywords ──
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // ── Location-based service pages (virtual — served by service pages) ──
  // These create crawlable paths for "service + city" keyword combos
  const cities = ["dubai", "abu-dhabi", "sharjah"]
  const locationServicePages: MetadataRoute.Sitemap = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/services/${service.slug}#${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  )

  return [
    // ── Homepage — highest priority ──
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },

    // ── Core pages ──
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },

    // ── Service pages ──
    ...servicePages,

    // ── Location-anchored service URLs ──
    ...locationServicePages,

    // ── Legal pages — low priority ──
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ]
}
