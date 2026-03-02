import Link from "next/link"
import { Building2, MessageCircle, Mail, MapPin } from "lucide-react"
import { services } from "@/lib/services"
import {
  dubaiAreasExpanded,
  abuDhabiAreasExpanded,
  sharjahAreasExpanded,
  getAllServiceKeywords,
  homepageGenericKeywords,
} from "@/lib/seo-data"

export function Footer() {
  // Aggregate all service keywords + generic keywords
  const allServiceKeywords = getAllServiceKeywords()
  const allKeywords = [...homepageGenericKeywords, ...allServiceKeywords]

  // Repeat every keyword 3 times for maximum keyword density (500+ × 3 = 1500+)
  const repeatedKeywords: string[] = []
  for (let round = 0; round < 3; round++) {
    repeatedKeywords.push(...allKeywords)
  }

  return (
    <footer className="bg-[#020617] text-gray-300">
      {/* ═══ Areas We Serve — Expanded UAE Coverage (50 areas per emirate) ═══ */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 text-center">
            Areas We Serve Across the UAE — Dubai, Abu Dhabi &amp; Sharjah
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dubai — 50 Areas */}
            <div>
              <h4 className="text-[#f97316] font-semibold text-sm mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Dubai — All Areas We Serve
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {dubaiAreasExpanded.map((area) => (
                  <span key={area} className="text-[10px] text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Abu Dhabi — 50 Areas */}
            <div>
              <h4 className="text-[#f97316] font-semibold text-sm mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Abu Dhabi — All Areas We Serve
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {abuDhabiAreasExpanded.map((area) => (
                  <span key={area} className="text-[10px] text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Sharjah — 50 Areas */}
            <div>
              <h4 className="text-[#f97316] font-semibold text-sm mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Sharjah — All Areas We Serve
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {sharjahAreasExpanded.map((area) => (
                  <span key={area} className="text-[10px] text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Main Footer ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-[#f97316]" />
              <div>
                <span className="text-xl font-bold text-white">GoPlnr</span>
                <span className="text-xs text-gray-400 block leading-none">Industrial Solutions UAE</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Leading turnkey EPC contractor delivering mega industrial and infrastructure projects
              across Dubai, Abu Dhabi &amp; Sharjah. From concept to commissioning — projects ranging
              from AED 5 Million to 100 Million+.
            </p>
            <div className="space-y-3">
              <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#25d366] transition-colors">
                <MessageCircle className="h-4 w-4 text-[#25d366]" /> Message on WhatsApp
              </a>
              <a href="mailto:info@goplnr.ae" className="flex items-center gap-2 text-sm hover:text-[#f97316] transition-colors">
                <Mail className="h-4 w-4 text-[#f97316]" /> info@goplnr.ae
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-[#f97316] mt-0.5" />
                <span>Office 1204, Bay Square Tower 1,<br />Business Bay, Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-[#f97316] transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-[#f97316] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-[#f97316] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-[#f97316] transition-colors">Contact / Book Consultation</Link></li>
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-gray-400 hover:text-[#f97316] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Budget & Scale */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Project Scale</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>◆ AED 5 – 10 Million Projects</li>
              <li>◆ AED 10 – 30 Million Projects</li>
              <li>◆ AED 30 – 50 Million Projects</li>
              <li>◆ AED 50 – 100 Million Projects</li>
              <li>◆ AED 100+ Million Mega Projects</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
              >
                Request Project Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SEO Keyword Density Cloud — All 500+ keywords × 3 repeats = 1500+ ═══ */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h3 className="text-gray-700 font-semibold text-[8px] uppercase tracking-wider mb-3 text-center">
            EPC &amp; Industrial Construction Services — UAE Dubai Abu Dhabi Sharjah
          </h3>
          <p className="text-[6px] text-gray-800 leading-tight text-center break-words">
            {repeatedKeywords.join(" · ")}
          </p>
        </div>
      </div>

      {/* ═══ Per-Service Keyword Density — 50 keywords × 3 each per service ═══ */}
      <div className="border-t border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {services.map((service) => {
            const repeated: string[] = []
            for (let r = 0; r < 3; r++) {
              repeated.push(...service.keywords)
            }
            return (
              <div key={service.slug} className="mb-1">
                <span className="text-[6px] text-gray-800 font-semibold">{service.shortTitle}: </span>
                <span className="text-[6px] text-gray-800 leading-tight">
                  {repeated.join(" · ")}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ═══ Copyright ═══ */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} GoPlnr Industrial Solutions UAE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
