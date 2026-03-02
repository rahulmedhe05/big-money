import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 industrial-gradient" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Have a Mega Project in Mind?
            </h2>
            <p className="text-gray-300 max-w-xl">
              From AED 5 million industrial facilities to AED 100+ million flagship projects —
              get a free engineering assessment and cost estimate within 48 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              Book Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/916353583148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              <MessageCircle className="h-5 w-5" /> Send Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
