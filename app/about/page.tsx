import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/industrial/breadcrumb"
import { services, aboutHeroImages } from "@/lib/services"
import { HeroSlider } from "@/components/industrial/hero-slider"
import { HeroBookingForm } from "@/components/industrial/hero-booking-form"
import {
  generateAboutPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-data"
import {
  Building2, Target, Shield, Users, Award, Globe,
  CheckCircle, ArrowRight, Lightbulb, Cog
} from "lucide-react"

export const metadata: Metadata = {
  title: "About GoPlnr Industrial Solutions — #1 EPC Contractor UAE | 15+ Years | 150+ Projects | AED 2B+ Managed",
  description:
    "Learn about GoPlnr Industrial Solutions UAE — the #1 turnkey EPC contractor with 15+ years of experience, 150+ completed projects & AED 2B+ managed. Warehouse, data center, solar, factory & industrial construction across Dubai, Abu Dhabi & Sharjah.",
  keywords:
    "about GoPlnr Industrial Solutions, EPC contractor UAE, turnkey contractor Dubai, industrial construction company Abu Dhabi, construction firm Sharjah, EPC company UAE history, best EPC contractor Dubai, top construction company UAE, industrial solutions Abu Dhabi, mega project contractor Dubai",
  alternates: {
    canonical: "https://goplnr.com/about",
  },
  openGraph: {
    title: "About GoPlnr Industrial Solutions — #1 EPC Contractor UAE",
    description: "15+ years delivering mega industrial projects across UAE. 150+ projects. AED 2B+ managed. Free consultation.",
    url: "https://goplnr.com/about",
    type: "website",
    locale: "en_AE",
    siteName: "GoPlnr Industrial Solutions UAE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    },
  },
}

const aboutSchema = generateAboutPageSchema()
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://goplnr.com" },
  { name: "About Us", url: "https://goplnr.com/about" },
])

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <main className="min-h-screen">
        {/* Hero with Image Slider */}
        <HeroSlider images={aboutHeroImages} overlayOpacity={65}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/30 text-[#f97316] px-3 py-1 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                About Us
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Building the UAE&apos;s Industrial Backbone — One Mega Project at a Time
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                GoPlnr Industrial Solutions UAE is a specialist turnkey EPC contractor focused on
                large-scale industrial and infrastructure projects. We bring together world-class
                engineering, strategic procurement, and disciplined construction management to deliver
                projects that shape the UAE&apos;s industrial landscape.
              </p>
            </div>
            <div className="hidden lg:block">
              <HeroBookingForm />
            </div>
          </div>
        </HeroSlider>

        {/* Stats */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Years in the UAE" },
                { value: "150+", label: "Projects Completed" },
                { value: "AED 2B+", label: "Project Value Managed" },
                { value: "500+", label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#0c2340]">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded with a clear mission — to bring international EPC standards to the UAE industrial
                    construction market — GoPlnr Industrial Solutions has grown into one of the region&apos;s most
                    respected turnkey contractors for mega-scale projects.
                  </p>
                  <p>
                    From our early days delivering mid-scale warehouse projects to today&apos;s portfolio of
                    100+ AED million flagship facilities, our growth has been driven by a singular focus:
                    delivering complex industrial projects with uncompromising quality, on-time delivery,
                    and cost certainty.
                  </p>
                  <p>
                    Our team combines deep expertise in UAE regulatory environments with international
                    best practices in engineering, procurement, and construction management. This dual
                    capability allows us to navigate complex approval processes while maintaining the
                    technical excellence that world-class facilities demand.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {/* Mission */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-6 w-6 text-[#f97316]" />
                    <h3 className="text-lg font-bold text-[#0c2340]">Our Mission</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    To be the UAE&apos;s most trusted turnkey EPC contractor for industrial and
                    infrastructure projects — delivering engineering excellence, operational efficiency,
                    and lasting value for every client.
                  </p>
                </div>
                {/* Vision */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="h-6 w-6 text-[#f97316]" />
                    <h3 className="text-lg font-bold text-[#0c2340]">Our Vision</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    To build the infrastructure that powers the UAE&apos;s next era of industrial growth —
                    from smart factories and green energy to digital infrastructure and sustainable
                    facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-10 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Safety First", description: "Zero compromise on health, safety, and environment. Every project, every site, every day." },
                { icon: Award, title: "Engineering Excellence", description: "World-class engineering standards applied to every design, every calculation, every detail." },
                { icon: Users, title: "Client Partnership", description: "We succeed when our clients succeed. Long-term relationships built on trust and delivery." },
                { icon: Cog, title: "Operational Discipline", description: "Rigorous project controls, quality management, and schedule adherence as non-negotiables." },
                { icon: Globe, title: "Sustainability", description: "Responsible construction practices, energy-efficient designs, and environmental stewardship." },
                { icon: Building2, title: "Innovation", description: "Embracing BIM, modular construction, and smart technologies to deliver better outcomes." },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <value.icon className="h-8 w-8 text-[#f97316] mb-3" />
                  <h3 className="text-lg font-bold text-[#0c2340] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4 text-center">
              Our EPC Service Portfolio
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Comprehensive turnkey EPC capabilities spanning the full spectrum of industrial and infrastructure construction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-[#f97316]/50 transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-[#0c2340] group-hover:text-[#f97316] transition-colors text-sm">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#f97316] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="industrial-gradient text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you are planning a AED 5 million warehouse or a AED 100+ million mega facility,
              our team is ready to engineer your vision into reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
            >
              Get Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
