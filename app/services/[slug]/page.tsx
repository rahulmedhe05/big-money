import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services, getServiceBySlug } from "@/lib/services"
import {
  dubaiAreasExpanded,
  abuDhabiAreasExpanded,
  sharjahAreasExpanded,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-data"
import { Breadcrumb } from "@/components/industrial/breadcrumb"
import { HeroSlider } from "@/components/industrial/hero-slider"
import { Gallery } from "@/components/industrial/gallery"
import { HeroBookingForm } from "@/components/industrial/hero-booking-form"
import {
  FeaturesSection,
  ProcessSection,
  BenefitsSection,
  FAQSection,
  ServiceBookingSection,
  RelatedServicesSection,
  ServiceKeywordsSection,
  ServiceAreasSection,
} from "./_components/service-sections"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: {
      canonical: `https://goplnr.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://goplnr.com/services/${service.slug}`,
      type: "website",
      locale: "en_AE",
      siteName: "GoPlnr Industrial Solutions UAE",
      images: service.heroImages.map((img) => ({
        url: `https://goplnr.com${img.src}`,
        alt: img.alt,
        width: 1200,
        height: 630,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
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
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema(service)
  const faqSchema = generateFAQSchema(service.faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://goplnr.com" },
    { name: "Services", url: "https://goplnr.com/#services" },
    { name: service.shortTitle, url: `https://goplnr.com/services/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.shortTitle },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero with Image Slider */}
        <HeroSlider images={service.heroImages} overlayOpacity={65}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/30 text-[#f97316] px-3 py-1 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                GoPlnr Industrial Solutions UAE
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
                {service.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Free Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://wa.me/916353583148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5" /> Send Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroBookingForm preselectedService={service.slug} />
            </div>
          </div>
        </HeroSlider>

        {/* Extracted Section Components */}
        <FeaturesSection service={service} />
        <ProcessSection service={service} />
        <BenefitsSection service={service} />

        {/* Project Gallery */}
        <Gallery
          images={service.galleryImages}
          title={`${service.shortTitle} Project Gallery`}
          subtitle={`Explore our portfolio of completed ${service.shortTitle.toLowerCase()} projects across the UAE — showcasing our end-to-end EPC capabilities.`}
        />

        <FAQSection service={service} />
        <ServiceBookingSection service={service} />
        <RelatedServicesSection services={services} currentSlug={service.slug} />
        <ServiceKeywordsSection service={service} />
        <ServiceAreasSection
          service={service}
          dubaiAreas={dubaiAreasExpanded}
          abuDhabiAreas={abuDhabiAreasExpanded}
          sharjahAreas={sharjahAreasExpanded}
        />
      </main>
    </>
  )
}
