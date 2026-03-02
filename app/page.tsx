import Link from "next/link"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { homepageHeroImages, services } from "@/lib/services"
import {
  generateBreadcrumbSchema,
  generateHomepageFAQSchema,
  getAllServiceKeywords,
  homepageGenericKeywords,
} from "@/lib/seo-data"
import { HeroSlider } from "@/components/industrial/hero-slider"
import { HeroBookingForm } from "@/components/industrial/hero-booking-form"
import { ServicesSection } from "./_components/services-section"
import { WhyChooseUsSection } from "./_components/why-choose-us-section"
import { ProcessSection } from "./_components/process-section"
import { BudgetSection, AreasSection, IndustriesSection, SEOSection } from "./_components/info-sections"
import { BookingSection } from "./_components/booking-section"
import { ArrowRight, Building2, MessageCircle } from "lucide-react"

// Dynamic imports — heavy below-the-fold client components load separately
const Testimonials = dynamic(() => import("@/components/industrial/testimonials").then(m => ({ default: m.Testimonials })), {
  loading: () => <div className="bg-gray-50 py-16 animate-pulse"><div className="max-w-7xl mx-auto px-4"><div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-8" /><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-48 bg-gray-200 rounded-xl" />)}</div></div></div>,
})

const ProjectPortfolio = dynamic(() => import("@/components/industrial/project-portfolio").then(m => ({ default: m.ProjectPortfolio })), {
  loading: () => <div className="bg-white py-16 animate-pulse"><div className="max-w-7xl mx-auto px-4"><div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-8" /><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-64 bg-gray-100 rounded-xl" />)}</div></div></div>,
})

const CTABanner = dynamic(() => import("@/components/industrial/cta-banner").then(m => ({ default: m.CTABanner })), {
  loading: () => <div className="industrial-gradient py-12 animate-pulse"><div className="h-20 max-w-7xl mx-auto" /></div>,
})

const Capabilities = dynamic(() => import("@/components/industrial/capabilities").then(m => ({ default: m.Capabilities })), {
  loading: () => <div className="bg-gray-50 py-16 animate-pulse"><div className="max-w-7xl mx-auto px-4"><div className="h-8 w-64 bg-gray-200 rounded mx-auto" /></div></div>,
})

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "AED 2B+", label: "Project Value Managed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Permit Approval Rate" },
]

export default function HomePage() {
  // Aggregate all keywords for the homepage keyword density section
  const allServiceKeywords = getAllServiceKeywords()
  const allKeywords = [...homepageGenericKeywords, ...allServiceKeywords]

  // Homepage schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://goplnr.com" },
  ])
  const faqSchema = generateHomepageFAQSchema()

  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section with Image Slider */}
      <HeroSlider images={homepageHeroImages} overlayOpacity={65}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-last lg:order-first">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/30 text-[#f97316] px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Building2 className="h-4 w-4" />
              Turnkey EPC Contractor — Dubai · Abu Dhabi · Sharjah
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Engineering & Constructing
              <span className="text-[#f97316]"> UAE&apos;s Industrial Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              GoPlnr Industrial Solutions delivers turnkey EPC projects from AED 5 Million to 100 Million+ across the UAE.
              Warehouses, data centers, solar farms, factories, water treatment plants, hotels, cold storage, and more —
              all from a single, accountable contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
              >
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/916353583148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> Send Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <HeroBookingForm />
          </div>
        </div>
      </HeroSlider>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0c2340]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracted Section Components */}
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />

      {/* Dynamically loaded heavy components */}
      <Suspense fallback={<div className="h-32" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <ProjectPortfolio />
      </Suspense>

      <Suspense fallback={<div className="h-16" />}>
        <CTABanner />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <Capabilities />
      </Suspense>

      <BudgetSection />
      <AreasSection />
      <IndustriesSection />
      <BookingSection />
      <SEOSection />

      {/* ═══ Homepage Keyword Cloud — All 500+ service keywords × 3 = 1500+ ═══ */}
      <section className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[8px] text-gray-400 uppercase tracking-wider font-semibold text-center mb-3">
            GoPlnr Industrial Solutions — EPC Construction Keywords — Dubai Abu Dhabi Sharjah UAE
          </h3>
          {/* Visible keyword tags — all services */}
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {allKeywords.slice(0, 100).map((kw) => (
              <span key={kw} className="text-[9px] text-gray-500 bg-white border border-gray-200 px-1.5 py-0.5 rounded">
                {kw}
              </span>
            ))}
          </div>
          {/* Per-service keyword blocks — 50 keywords × 3 repeats each in tiny font */}
          {services.map((service) => {
            const repeated: string[] = []
            for (let r = 0; r < 3; r++) {
              repeated.push(...service.keywords)
            }
            return (
              <div key={service.slug} className="mb-1">
                <span className="text-[6px] text-gray-400 font-semibold">{service.shortTitle}: </span>
                <span className="text-[6px] text-gray-400 leading-tight">
                  {repeated.join(" · ")}
                </span>
              </div>
            )
          })}
          {/* Generic EPC keywords × 3 */}
          <div className="mt-2">
            <span className="text-[6px] text-gray-400 font-semibold">General EPC: </span>
            <span className="text-[6px] text-gray-400 leading-tight">
              {[...homepageGenericKeywords, ...homepageGenericKeywords, ...homepageGenericKeywords].join(" · ")}
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
