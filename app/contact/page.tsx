import type { Metadata } from "next"
import { Breadcrumb } from "@/components/industrial/breadcrumb"
import { BookingForm } from "@/components/industrial/booking-form"
import { HeroSlider } from "@/components/industrial/hero-slider"
import { HeroBookingForm } from "@/components/industrial/hero-booking-form"
import { contactHeroImages } from "@/lib/services"
import {
  generateContactPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-data"
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact GoPlnr — Free Project Consultation | EPC Contractor Dubai, Abu Dhabi, Sharjah",
  description:
    "Contact GoPlnr Industrial Solutions UAE for a free project consultation. Get quotes for warehouse construction, data center build, solar EPC, factory setup, water treatment, hotel construction, cold storage, EV charging & healthcare facility projects in Dubai, Abu Dhabi & Sharjah. Response within 48 hours.",
  keywords:
    "contact EPC contractor UAE, free construction consultation Dubai, project quote Abu Dhabi, industrial construction inquiry Sharjah, EPC project consultation UAE, request quote warehouse Dubai, data center quote Abu Dhabi, construction estimate UAE, free site assessment Dubai, industrial project inquiry",
  alternates: {
    canonical: "https://goplnr.com/contact",
  },
  openGraph: {
    title: "Contact GoPlnr — Free Project Consultation | EPC Contractor UAE",
    description: "Get free consultation for industrial EPC projects. Warehouse, data center, solar, factory & more. Dubai, Abu Dhabi, Sharjah.",
    url: "https://goplnr.com/contact",
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

const contactSchema = generateContactPageSchema()
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://goplnr.com" },
  { name: "Contact", url: "https://goplnr.com/contact" },
])

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <main className="min-h-screen">
        {/* Hero with Image Slider */}
        <HeroSlider images={contactHeroImages} overlayOpacity={70}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-last lg:order-first">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Contact GoPlnr Industrial Solutions
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl">
                Ready to discuss your next mega project? Our engineering team is standing by to provide
                expert guidance and no-obligation project assessments.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <HeroBookingForm />
            </div>
          </div>
        </HeroSlider>

        {/* Contact Info + Form */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-[#0c2340] mb-4">Get In Touch</h2>
                  <div className="space-y-4">
                    <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#25d366] transition-colors">
                      <div className="w-10 h-10 bg-[#25d366]/10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-[#25d366]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">WhatsApp</div>
                        <div className="font-semibold">Send Message on WhatsApp</div>
                      </div>
                    </a>
                    <a href="mailto:info@goplnr.com" className="flex items-center gap-3 text-gray-600 hover:text-[#f97316] transition-colors">
                      <div className="w-10 h-10 bg-[#f97316]/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Email</div>
                        <div className="font-semibold">info@goplnr.com</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-[#f97316]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Head Office</div>
                        <div className="font-semibold">Office 1204, Bay Square Tower 1<br />Business Bay, Dubai, UAE</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-[#f97316]/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Working Hours</div>
                        <div className="font-semibold">Sun - Thu: 8:00 AM - 6:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#0c2340] mb-3">Emergency / After-Hours</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    For urgent project matters or active construction site emergencies, our on-call project manager is available 24/7.
                  </p>
                  <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="text-[#25d366] font-bold">
                    Message on WhatsApp (24/7)
                  </a>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
