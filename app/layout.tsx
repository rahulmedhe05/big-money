import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/industrial/navbar"
import { Footer } from "@/components/industrial/footer"
import {
  organizationSchema,
  websiteSchema,
  generateLocalBusinessSchema,
} from "@/lib/seo-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "GoPlnr Industrial Solutions UAE — #1 Turnkey EPC Contractor Dubai, Abu Dhabi, Sharjah | Warehouse, Data Center, Solar, Factory Construction",
    template: "%s | GoPlnr Industrial Solutions UAE — EPC Contractor",
  },
  description:
    "GoPlnr Industrial Solutions is the #1 turnkey EPC contractor in the UAE specializing in warehouse construction, data center build, solar energy EPC, factory setup, water treatment plants, hotel construction, cold storage, industrial retrofit, EV charging infrastructure & healthcare facility construction across Dubai, Abu Dhabi & Sharjah. Projects from AED 5M to 100M+. Get free consultation today.",
  keywords:
    "EPC contractor UAE, turnkey construction Dubai, industrial construction Abu Dhabi, warehouse construction UAE, data center construction Dubai, solar EPC UAE, factory setup Dubai, water treatment plant UAE, hotel construction Dubai, cold storage UAE, industrial retrofit Dubai, EV charging infrastructure UAE, healthcare facility construction Dubai, industrial solutions Sharjah, mega project contractor UAE, best EPC contractor Dubai, top construction company Abu Dhabi, industrial EPC solutions UAE, design build contractor Dubai, construction management Sharjah",
  authors: [{ name: "GoPlnr Industrial Solutions UAE" }],
  creator: "GoPlnr Industrial Solutions UAE",
  publisher: "GoPlnr Industrial Solutions UAE",
  metadataBase: new URL("https://goplnr.ae"),
  alternates: {
    canonical: "https://goplnr.ae",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "GoPlnr Industrial Solutions UAE — #1 Turnkey EPC Contractor in Dubai",
    description:
      "Leading EPC contractor for mega industrial projects across UAE. Warehouse, data center, solar, factory, water treatment, hotel, cold storage, retrofit, EV charging & healthcare construction. AED 5M-100M+ projects. Free consultation.",
    siteName: "GoPlnr Industrial Solutions UAE",
    locale: "en_AE",
    type: "website",
    url: "https://goplnr.ae",
    images: [
      {
        url: "https://goplnr.ae/images/hero/construction-site.jpg",
        width: 1200,
        height: 630,
        alt: "GoPlnr Industrial Solutions — Turnkey EPC Contractor UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoPlnr Industrial Solutions UAE — #1 EPC Contractor",
    description: "Turnkey EPC contractor for warehouse, data center, solar, factory & industrial construction in Dubai, Abu Dhabi & Sharjah.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
