import { FileText, ClipboardCheck, HardHat, Handshake, Search, Cog } from "lucide-react"

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "Dubai Municipality Approved Contractor",
  "Abu Dhabi DOT Classified Contractor",
  "Sharjah Municipality Licensed",
  "DEWA Approved Contractor",
  "Civil Defense Certified",
]

const capabilities = [
  { icon: Search, title: "Feasibility Studies", desc: "Site assessments, market analysis, and technical feasibility for informed go/no-go decisions." },
  { icon: FileText, title: "Design Engineering", desc: "BIM-enabled design from concept through detailed engineering — architectural, structural, MEP." },
  { icon: Cog, title: "Procurement Management", desc: "Global sourcing, vendor qualification, expediting, and inspection for all materials and equipment." },
  { icon: HardHat, title: "Construction Management", desc: "Full-site management with quality control, HSE, schedule management, and progress reporting." },
  { icon: ClipboardCheck, title: "Commissioning & Testing", desc: "Systematic commissioning, integrated testing, and performance verification for all systems." },
  { icon: Handshake, title: "Post-Handover Support", desc: "Defects liability management, O&M support, and facility management advisory services." },
]

export function Capabilities() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
            Full-Spectrum EPC Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every capability required to deliver complex industrial projects — from the first feasibility study to post-handover support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-white rounded-xl p-6 border border-gray-200">
              <cap.icon className="h-8 w-8 text-[#f97316] mb-3" />
              <h3 className="font-bold text-[#0c2340] mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-600">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-[#0c2340] mb-6">Certifications & Approvals</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-[#0c2340] text-white text-xs font-medium px-4 py-2 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
