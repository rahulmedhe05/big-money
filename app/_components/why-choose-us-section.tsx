import { Shield, Clock, Award, TrendingUp, Users, Building2 } from "lucide-react"

const whyChooseUs = [
  { icon: Shield, title: "Single-Point Accountability", description: "One EPC contract, one team, one point of responsibility from concept to commissioning. No finger-pointing between multiple contractors." },
  { icon: Clock, title: "On-Time Delivery", description: "Advanced project controls, critical path management, and dedicated site teams ensure your project is delivered on schedule." },
  { icon: Award, title: "UAE Regulatory Expertise", description: "Deep knowledge of Dubai Municipality, Abu Dhabi DOT, Sharjah SEWA, and all UAE regulatory requirements for industrial projects." },
  { icon: TrendingUp, title: "Cost Certainty", description: "Fixed-price EPC contracts with transparent budgeting. No hidden costs, no surprise change orders. Your budget is protected." },
  { icon: Users, title: "Experienced Teams", description: "Seasoned project managers, engineers, and site supervisors with decades of UAE mega-project experience." },
  { icon: Building2, title: "Full-Spectrum Capability", description: "From 5 AED million industrial facilities to 100+ AED million mega projects — we have the capability and track record." },
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
            Why Leading Organizations Choose GoPlnr
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are not a general building contractor. We are a specialist EPC firm focused exclusively on
            large-scale industrial and infrastructure projects in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-10 h-10 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="h-5 w-5 text-[#f97316]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0c2340] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
