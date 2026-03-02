import Link from "next/link"
import { BookingForm } from "@/components/industrial/booking-form"
import { CheckCircle, ArrowRight, MessageCircle, MapPin, HelpCircle, ChevronDown } from "lucide-react"
import type { ServiceData } from "@/lib/services"

export function FeaturesSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4">
          What We Deliver
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Comprehensive {service.shortTitle.toLowerCase()} capabilities delivered through our integrated EPC approach — from initial concept to final commissioning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <CheckCircle className="h-5 w-5 text-[#f97316] flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-[#0c2340]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4">
          Our EPC Process for {service.shortTitle}
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          A systematic, proven approach that ensures your project is delivered on time, within budget, and to the highest quality standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.process.map((step, index) => (
            <div key={step.step} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#f97316]/30 mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-[#0c2340] mb-2">{step.step}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BenefitsSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4">
              Why Choose GoPlnr for {service.shortTitle}
            </h2>
            <p className="text-gray-600 mb-6">
              Our deep expertise in {service.shortTitle.toLowerCase()} combined with our turnkey EPC approach
              ensures your project benefits from single-point accountability, proven processes, and UAE regulatory expertise.
            </p>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="industrial-gradient rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Project Budget Range</h3>
            <p className="text-gray-300 mb-6 text-sm">
              We handle {service.shortTitle.toLowerCase()} projects across all scales:
            </p>
            <ul className="space-y-2">
              {[
                "AED 5 – 10 Million",
                "AED 10 – 30 Million",
                "AED 30 – 50 Million",
                "AED 50 – 100 Million",
                "AED 100+ Million",
              ].map((range) => (
                <li key={range} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#f97316] rounded-full" />
                  {range}
                </li>
              ))}
            </ul>
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold mt-6 transition-colors"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FAQSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-[#f97316] flex-shrink-0" />
                  <span className="font-semibold text-[#0c2340] text-sm">{faq.question}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceBookingSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-16 lg:py-24" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4">
              Start Your {service.shortTitle} Project
            </h2>
            <p className="text-gray-600 mb-6">
              Request a free consultation for your {service.shortTitle.toLowerCase()} project.
              Our expert team will provide a preliminary assessment within 48 hours.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-bold text-[#0c2340] mb-2">What happens next?</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="font-bold text-[#f97316]">1.</span> Our team reviews your project requirements</li>
                <li className="flex gap-2"><span className="font-bold text-[#f97316]">2.</span> We schedule a discovery call with a senior engineer</li>
                <li className="flex gap-2"><span className="font-bold text-[#f97316]">3.</span> You receive a preliminary feasibility & cost assessment</li>
                <li className="flex gap-2"><span className="font-bold text-[#f97316]">4.</span> We present a detailed EPC proposal</li>
              </ol>
            </div>
            <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-bold text-[#25d366] hover:text-[#20ba5a] transition-colors">
              <MessageCircle className="h-5 w-5" /> Send Message on WhatsApp
            </a>
          </div>
          <BookingForm preselectedService={service.slug} />
        </div>
      </div>
    </section>
  )
}

export function RelatedServicesSection({ services, currentSlug }: { services: ServiceData[], currentSlug: string }) {
  const otherServices = services.filter((s) => s.slug !== currentSlug)
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-8">
          Other EPC Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-white rounded-lg p-5 border border-gray-200 hover:border-[#f97316]/50 transition-colors"
            >
              <h3 className="font-bold text-[#0c2340] mb-1 group-hover:text-[#f97316] transition-colors text-sm">
                {s.shortTitle}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceKeywordsSection({ service }: { service: ServiceData }) {
  // Repeat keywords 3x for keyword density (50 × 3 = 150 keyword instances)
  const repeatedKeywords: string[] = []
  for (let i = 0; i < 3; i++) {
    repeatedKeywords.push(...service.keywords)
  }

  return (
    <section className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
          {service.shortTitle} — Related Services &amp; Keywords
        </h3>
        {/* Visible keyword tags */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {service.keywords.map((kw) => (
            <span key={kw} className="text-[10px] text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
              {kw}
            </span>
          ))}
        </div>
        {/* Keyword density section — 50 × 3 in very small font */}
        <p className="text-[6px] text-gray-300 leading-tight text-center mt-4">
          {repeatedKeywords.join(" · ")}
        </p>
      </div>
    </section>
  )
}

export function ServiceAreasSection({ service, dubaiAreas, abuDhabiAreas, sharjahAreas }: { service: ServiceData, dubaiAreas: string[], abuDhabiAreas: string[], sharjahAreas: string[] }) {
  return (
    <section className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
          {service.shortTitle} — Service Areas Across UAE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xs font-semibold text-[#f97316] mb-2 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {service.shortTitle} in Dubai
            </h4>
            <div className="flex flex-wrap gap-1">
              {dubaiAreas.map((a) => (
                <span key={a} className="text-[10px] text-gray-500 bg-white border border-gray-200 px-1.5 py-0.5 rounded">{a}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#f97316] mb-2 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {service.shortTitle} in Abu Dhabi
            </h4>
            <div className="flex flex-wrap gap-1">
              {abuDhabiAreas.map((a) => (
                <span key={a} className="text-[10px] text-gray-500 bg-white border border-gray-200 px-1.5 py-0.5 rounded">{a}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#f97316] mb-2 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {service.shortTitle} in Sharjah
            </h4>
            <div className="flex flex-wrap gap-1">
              {sharjahAreas.map((a) => (
                <span key={a} className="text-[10px] text-gray-500 bg-white border border-gray-200 px-1.5 py-0.5 rounded">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
