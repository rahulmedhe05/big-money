import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al Maktoum",
    role: "CEO, Gulf Logistics Group",
    company: "Gulf Logistics Group",
    text: "GoPlnr delivered our 25,000 sqm distribution center in JAFZA three weeks ahead of schedule. Their turnkey EPC approach eliminated the coordination issues we faced with previous contractors. The facility has been operating flawlessly since day one.",
    project: "Warehouse & Logistics — JAFZA, Dubai",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "VP Infrastructure, CloudFirst MENA",
    company: "CloudFirst MENA",
    text: "Building a Tier III data center requires zero tolerance for error. GoPlnr's engineering team demonstrated exceptional attention to detail — from the redundant power architecture to the precision cooling systems. We achieved our target PUE of 1.35.",
    project: "Data Center — Abu Dhabi",
    rating: 5,
  },
  {
    name: "Dr. Khalid Al Suwaidi",
    role: "Director of Operations, ADNOC Subsidiary",
    company: "ADNOC Subsidiary",
    text: "The water treatment plant GoPlnr constructed for our industrial facility exceeds all environmental compliance requirements. Their knowledge of UAE regulations and their proactive approach to design optimization saved us significant operational costs.",
    project: "Water Treatment Plant — ICAD, Abu Dhabi",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Development Director, Al Ain Hospitality",
    company: "Al Ain Hospitality",
    text: "Our 200-room luxury hotel was delivered as a complete turnkey project — structure, MEP, and interior fit-out. GoPlnr managed the entire process seamlessly, coordinating with our brand consultants and delivering a property that exceeded our expectations.",
    project: "Hotel Construction — Yas Island, Abu Dhabi",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#0c2340] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders Across the UAE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our clients include government entities, multinational corporations, and regional developers
            who demand engineering excellence and on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#f97316] text-[#f97316]" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-[#f97316]/50 mb-2" />
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t.text}
              </p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
                <div className="text-xs text-[#f97316] font-medium bg-[#f97316]/10 px-2 py-1 rounded">
                  {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
