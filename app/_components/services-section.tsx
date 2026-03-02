import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services"
import {
  ArrowRight, Warehouse, Server, Sun, Factory, Droplets,
  Hotel, Thermometer, Wrench, Zap, Heart
} from "lucide-react"

const serviceIcons = [Warehouse, Server, Sun, Factory, Droplets, Hotel, Thermometer, Wrench, Zap, Heart]

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
            Our Turnkey EPC Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From initial concept to final commissioning — we deliver complete engineering, procurement, and
            construction solutions for mega industrial and infrastructure projects across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#f97316]/50 card-lift"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.heroImages[0]?.src || ""}
                    alt={service.heroImages[0]?.alt || service.shortTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={70}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/70 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-[#f97316] transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#f97316]">
                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
