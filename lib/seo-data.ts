import { services } from "./services"

// ══════════════════════════════════════════════════════════════════════════════
// COMPREHENSIVE UAE AREA LISTS — For keyword density & local SEO
// ══════════════════════════════════════════════════════════════════════════════

export const dubaiAreasExpanded: string[] = [
  "Jebel Ali Free Zone (JAFZA)", "Dubai Industrial City", "Dubai Investment Park (DIP)",
  "Dubai South", "Al Quoz Industrial Area", "Dubai Silicon Oasis (DSO)",
  "Dubai Internet City", "Dubai Healthcare City", "Dubai Marina",
  "Business Bay", "Downtown Dubai", "Deira", "Bur Dubai",
  "Jumeirah Village Circle (JVC)", "Dubai Production City (IMPZ)",
  "Dubai Logistics City", "Dubai World Central (DWC)", "DAFZA",
  "Ras Al Khor Industrial", "Palm Jumeirah", "Jumeirah Lake Towers (JLT)",
  "Dubai International Financial Centre (DIFC)", "Al Barsha",
  "Dubai Design District (D3)", "International City Dubai",
  "Dubai Knowledge Park", "Dubai Media City", "Dubai Studio City",
  "Motor City", "Dubai Sports City", "Arabian Ranches",
  "Dubai Hills Estate", "Dubai Creek Harbour", "Al Jadaf",
  "Meydan", "Nad Al Sheba", "Warsan", "Al Awir",
  "Dubai Textile City", "Techno Hub Dubai", "Al Muhaisnah",
  "Hor Al Anz", "Umm Ramool", "Al Garhoud",
  "Port Rashid", "Dubai Maritime City", "Dubai Outsource City",
  "Al Mamzar", "Jumeirah Beach Residence (JBR)", "The Greens Dubai",
]

export const abuDhabiAreasExpanded: string[] = [
  "Khalifa Industrial Zone (KIZAD)", "ICAD I", "ICAD II", "ICAD III",
  "Musaffah Industrial Area", "Khalifa City", "Yas Island",
  "Saadiyat Island", "Al Ain Industrial Area", "Mohammed Bin Zayed City (MBZ)",
  "Al Reem Island", "Madinat Zayed", "Mussafah M-Area",
  "Al Shahama", "Al Falah", "Al Reef", "Al Raha Beach",
  "Tourist Club Area", "Corniche Area", "Hamdan Street",
  "Al Maryah Island", "Al Bateen", "Capital District Abu Dhabi",
  "Masdar City", "Al Shamkha", "Al Wathba",
  "Baniyas", "Al Dhafra Region", "Ghayathi",
  "Liwa", "Ruwais Industrial City", "Al Mirfa",
  "Mafraq Industrial Area", "Al Samha", "Khalifa Port Free Zone",
  "Abu Dhabi Airport Free Zone", "Zayed City", "Al Marina Abu Dhabi",
  "Al Hudayriyat Island", "Al Jubail Island", "Saadiyat Cultural District",
  "Electra Street", "Defence Street Abu Dhabi", "Al Nahyan",
  "Al Mushrif", "Al Karamah", "Airport Road Abu Dhabi",
  "Mina Zayed", "Abu Dhabi Global Market (ADGM)", "Sowwah Square",
]

export const sharjahAreasExpanded: string[] = [
  "Sharjah Industrial Area", "Hamriyah Free Zone", "Sharjah Airport Free Zone (SAIF Zone)",
  "Al Sajaa Industrial Area", "Industrial Area 1", "Industrial Area 2",
  "Industrial Area 3", "Industrial Area 4", "Industrial Area 5",
  "Industrial Area 6", "Industrial Area 10", "Industrial Area 11",
  "Industrial Area 12", "Industrial Area 13", "Industrial Area 15",
  "Industrial Area 17", "Industrial Area 18", "Al Dhaid",
  "Kalba", "Khorfakkan", "Al Nahda Sharjah", "Al Taawun",
  "University City Sharjah", "Sharjah Waterfront City", "Al Majaz",
  "Muwaileh Commercial", "Al Zahia", "Tilal City Sharjah",
  "Sharjah Media City (Shams)", "Al Khan Sharjah", "Al Qasimia",
  "Al Mareija", "Al Gharb Sharjah", "Al Yarmook",
  "Al Nabba", "Abu Shagara", "Al Wahda Sharjah",
  "Sharjah Sustainable City", "Aljada Sharjah", "Al Mamsha Sharjah",
  "Muwailah", "Al Rahmaniya Sharjah", "Al Khezamia",
  "Al Azra", "Sharjah Publishing City", "Al Ramla Sharjah",
  "Bu Tina", "Al Fisht", "Sharjah Investment Centre",
  "Sharjah Research Technology & Innovation Park",
]

// ══════════════════════════════════════════════════════════════════════════════
// AGGREGATE ALL SERVICE KEYWORDS — For homepage keyword density section
// ══════════════════════════════════════════════════════════════════════════════

/** All keywords from all 9 services combined (~468 keywords) */
export function getAllServiceKeywords(): string[] {
  return services.flatMap((s) => s.keywords)
}

/** Repeat every keyword N times for keyword density (returns flat array) */
export function getRepeatedKeywords(times: number = 3): string[] {
  const all = getAllServiceKeywords()
  const result: string[] = []
  for (let i = 0; i < times; i++) {
    result.push(...all)
  }
  return result
}

/** Get keywords for a single service repeated N times */
export function getServiceKeywordsRepeated(serviceKeywords: string[], times: number = 3): string[] {
  const result: string[] = []
  for (let i = 0; i < times; i++) {
    result.push(...serviceKeywords)
  }
  return result
}

// ══════════════════════════════════════════════════════════════════════════════
// 50 KEYWORDS PER SERVICE — Short & Long Tail Mix
// These are already stored in each service's `keywords` array in services.ts
// Below are the HOMEPAGE-LEVEL generic EPC keywords (50 total)
// ══════════════════════════════════════════════════════════════════════════════

export const homepageGenericKeywords: string[] = [
  // Short-tail
  "EPC contractor UAE", "turnkey contractor Dubai", "construction company UAE",
  "industrial construction Dubai", "MEP contractor UAE", "civil contractor Dubai",
  "building contractor UAE", "infrastructure company Dubai", "EPC company Abu Dhabi",
  "general contractor Sharjah", "construction firm UAE", "steel structure contractor",
  "fit-out contractor Dubai", "project management UAE", "design build contractor",
  // Long-tail
  "turnkey EPC contractor for mega projects UAE",
  "best industrial construction company in Dubai",
  "top rated EPC contractor Abu Dhabi Sharjah",
  "engineering procurement construction company UAE",
  "large scale industrial project contractor Dubai",
  "fixed price EPC contract construction UAE",
  "lump sum turnkey construction contractor Dubai",
  "single point accountability EPC contractor UAE",
  "government project construction contractor Dubai",
  "private sector industrial construction UAE",
  "BIM construction company Dubai Abu Dhabi",
  "green building construction contractor UAE",
  "LEED certified construction company Dubai",
  "sustainable industrial construction UAE",
  "pre-engineered building contractor Dubai",
  "industrial zone construction contractor UAE",
  "free zone construction company Dubai",
  "JAFZA construction contractor Dubai",
  "KIZAD construction contractor Abu Dhabi",
  "DIP construction company Dubai",
  "cost effective EPC contractor UAE",
  "experienced construction company Dubai",
  "ISO certified construction contractor UAE",
  "quality construction company Abu Dhabi",
  "reliable EPC contractor Dubai Sharjah",
  "affordable industrial construction UAE",
  "fast track construction contractor Dubai",
  "value engineering construction company UAE",
  "construction cost estimation Dubai",
  "industrial permit approval contractor UAE",
  "civil defense approved contractor Dubai",
  "municipality approved construction company UAE",
  "commercial building contractor Dubai",
  "mixed use development contractor UAE",
  "build operate transfer contractor Dubai",
]

// ══════════════════════════════════════════════════════════════════════════════
// SCHEMA GENERATORS — For structured data across all pages
// ══════════════════════════════════════════════════════════════════════════════

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GoPlnr Industrial Solutions UAE",
  alternateName: "GoPlnr",
  description:
    "Leading turnkey EPC contractor for mega industrial and infrastructure projects across the UAE including warehouses, data centers, solar farms, factories, water treatment plants, hotels, cold storage, industrial retrofits, EV charging stations, and healthcare facilities.",
  url: "https://goplnr.ae",
  logo: "https://goplnr.ae/logo.png",
  image: "https://goplnr.ae/images/hero/construction-site.jpg",
  foundingDate: "2010",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 200,
    maxValue: 500,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@goplnr.ae",
      areaServed: ["AE"],
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@goplnr.ae",
      areaServed: ["AE"],
      availableLanguage: ["English", "Arabic"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 1204, Bay Square Tower 1, Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "500001",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Fujairah" },
    { "@type": "City", name: "Umm Al Quwain" },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "EPC Construction Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `https://goplnr.ae/services/${s.slug}`,
      },
    })),
  },
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GoPlnr Industrial Solutions UAE",
  url: "https://goplnr.ae",
  description:
    "Leading turnkey EPC contractor in the UAE for warehouse, data center, solar, factory, water treatment, hotel, cold storage, retrofit, EV charging & healthcare construction. Projects AED 5M to 100M+.",
  publisher: {
    "@type": "Organization",
    name: "GoPlnr Industrial Solutions UAE",
    url: "https://goplnr.ae",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://goplnr.ae/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "GoPlnr Industrial Solutions UAE",
    image: "https://goplnr.ae/logo.png",
    url: "https://goplnr.ae",
    email: "info@goplnr.ae",
    description:
      "Turnkey EPC contractor for mega industrial & infrastructure projects across the UAE. Warehouse, data center, solar, factory, water treatment, hotel, cold storage, retrofit, EV charging & healthcare construction.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 1204, Bay Square Tower 1, Business Bay",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "500001",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1861,
      longitude: 55.2637,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "AED 5,000,000 - 100,000,000+",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
    ],
    knowsAbout: [
      "EPC Construction", "Turnkey Construction", "Industrial Construction",
      "Warehouse Construction", "Data Center Construction", "Solar Energy EPC",
      "Factory Construction", "Water Treatment Plants", "Hotel Construction",
      "Cold Storage Construction", "Industrial Retrofit", "EV Charging Infrastructure",
      "Healthcare Facility Construction",
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }
}

export function generateServiceSchema(service: {
  title: string
  slug: string
  description: string
  metaTitle: string
  features: string[]
  faqs: { question: string; answer: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://goplnr.ae/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "GoPlnr Industrial Solutions UAE",
      url: "https://goplnr.ae",
      logo: "https://goplnr.ae/logo.png",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f,
        },
      })),
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      lowPrice: "5000000",
      highPrice: "100000000",
      offerCount: "150+",
    },
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GoPlnr Industrial Solutions UAE",
    description:
      "Learn about GoPlnr Industrial Solutions — a leading turnkey EPC contractor with 15+ years delivering mega industrial projects across Dubai, Abu Dhabi & Sharjah.",
    url: "https://goplnr.ae/about",
    mainEntity: organizationSchema,
  }
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GoPlnr Industrial Solutions UAE",
    description:
      "Contact GoPlnr Industrial Solutions for free project consultations. Get quotes for warehouse, data center, solar, factory & industrial construction across UAE.",
    url: "https://goplnr.ae/contact",
    mainEntity: {
      "@type": "Organization",
      name: "GoPlnr Industrial Solutions UAE",
      email: "info@goplnr.ae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 1204, Bay Square Tower 1, Business Bay",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        postalCode: "500001",
        addressCountry: "AE",
      },
    },
  }
}

/** Homepage aggregated FAQ schema from top questions of all services */
export function generateHomepageFAQSchema() {
  const topFaqs = services
    .flatMap((s) => s.faqs.slice(0, 1))
    .slice(0, 10)
  return generateFAQSchema(topFaqs)
}
