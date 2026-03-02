import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Calendar, Banknote } from "lucide-react"

const projects = [
  {
    title: "Mega Distribution Center — JAFZA",
    category: "Warehouse & Logistics",
    location: "Jebel Ali Free Zone, Dubai",
    value: "AED 45 Million",
    duration: "11 Months",
    size: "25,000 sqm",
    image: "/images/warehouse/hero-1.jpg",
    description: "Turnkey EPC delivery of a fully automated distribution center with high-bay racking, cross-docking facilities, and integrated cold chain logistics.",
    slug: "warehouse-logistics-facility-construction",
  },
  {
    title: "Tier III Colocation Data Center",
    category: "Data Center",
    location: "Khalifa City, Abu Dhabi",
    value: "AED 85 Million",
    duration: "16 Months",
    size: "3,600 sqm IT Hall",
    image: "/images/datacenter/hero-1.jpg",
    description: "Design and build of a Tier III certified colocation facility with 2N+1 power redundancy, precision cooling, and Uptime Institute TCCF certification.",
    slug: "data-center-design-build",
  },
  {
    title: "50MW Solar Power Plant",
    category: "Solar & Energy",
    location: "Al Dhafra, Abu Dhabi",
    value: "AED 120 Million",
    duration: "14 Months",
    size: "50 MW-DC",
    image: "/images/solar/hero-1.jpg",
    description: "Utility-scale ground-mounted PV plant with single-axis trackers, 33kV substation, and grid interconnection to EWEC transmission network.",
    slug: "utility-scale-solar-energy-infrastructure",
  },
  {
    title: "Pharmaceutical Manufacturing Facility",
    category: "Factory Setup",
    location: "KIZAD, Abu Dhabi",
    value: "AED 68 Million",
    duration: "18 Months",
    size: "12,000 sqm",
    image: "/images/factory/hero-1.jpg",
    description: "End-to-end factory construction with ISO Class 7 cleanrooms, GMP-compliant production lines, and automated packaging facility.",
    slug: "industrial-factory-setup",
  },
  {
    title: "20,000 m³/day Sewage Treatment Plant",
    category: "Water Treatment",
    location: "Al Sajaa, Sharjah",
    value: "AED 55 Million",
    duration: "15 Months",
    size: "20,000 m³/day",
    image: "/images/water/hero-1.jpg",
    description: "MBR-based STP with tertiary treatment for TSE reuse, sludge dewatering, and fully automated SCADA control system.",
    slug: "water-wastewater-treatment-plant",
  },
  {
    title: "5-Star Beach Resort Hotel",
    category: "Hotel Construction",
    location: "Saadiyat Island, Abu Dhabi",
    value: "AED 95 Million",
    duration: "28 Months",
    size: "250 Rooms",
    image: "/images/hotel/hero-1.jpg",
    description: "Full hotel construction including structure, MEP, luxury interior fit-out, swimming pool complex, spa, and commercial kitchen facilities.",
    slug: "hotel-construction-luxury-fit-out",
  },
]

export function ProjectPortfolio() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of recently completed mega projects across the UAE — each delivered turnkey from concept to commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden card-lift"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-medium text-[#f97316] bg-[#0c2340]/80 px-2 py-1 rounded backdrop-blur-sm">{project.category}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-[#0c2340] mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-[#f97316]" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Banknote className="h-3.5 w-3.5 text-[#f97316]" />
                    {project.value}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar className="h-3.5 w-3.5 text-[#f97316]" />
                    {project.duration}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {project.size}
                  </div>
                </div>

                <Link
                  href={`/services/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#f97316] hover:text-[#ea580c] transition-colors"
                >
                  View Service <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
