import { MapPin } from "lucide-react"

export function BudgetSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
            Projects Built for Scale
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize exclusively in large-scale industrial and infrastructure projects. Our minimum project value is AED 5 Million.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { range: "AED 5–10M", label: "Mid-Scale Industrial", desc: "Warehouse fit-outs, cold rooms, small factories, EV charging clusters" },
            { range: "AED 10–30M", label: "Large Industrial", desc: "Distribution centers, factory construction, treatment plants" },
            { range: "AED 30–50M", label: "Major Projects", desc: "Data centers, solar farms, hotel construction, hospital wings" },
            { range: "AED 50–100M", label: "Mega Projects", desc: "Hyperscale facilities, resort developments, Tier IV data centers" },
            { range: "AED 100M+", label: "Flagship Projects", desc: "Utility-scale solar, large hospitals, mega warehouse complexes" },
          ].map((item) => (
            <div key={item.range} className="bg-white rounded-xl p-5 border border-gray-200 text-center card-lift">
              <div className="text-xl font-bold text-[#f97316] mb-1">{item.range}</div>
              <div className="text-sm font-semibold text-[#0c2340] mb-2">{item.label}</div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AreasSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
            Serving the Entire UAE
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our project teams operate across all seven emirates with primary focus on Dubai, Abu Dhabi, and Sharjah —
            the industrial heartlands of the UAE.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { city: "Dubai", areas: "JAFZA, DIP, Industrial City, Dubai South, Al Quoz, Silicon Oasis, Business Bay, DAFZA" },
            { city: "Abu Dhabi", areas: "KIZAD, ICAD, Musaffah, Khalifa City, Yas Island, Saadiyat Island, Al Ain Industrial" },
            { city: "Sharjah", areas: "Hamriyah Free Zone, SAIF Zone, Al Sajaa, Industrial Areas 1-18, Kalba, Khorfakkan" },
          ].map((item) => (
            <div key={item.city} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-[#f97316]" />
                <h3 className="text-lg font-bold text-[#0c2340]">{item.city}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.areas}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep sector expertise across the industries that drive the UAE&apos;s economy.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Logistics & Supply Chain", "Technology & Data", "Renewable Energy", "Manufacturing",
            "Water & Utilities", "Hospitality & Tourism", "Food & Beverage", "Pharmaceuticals",
            "Automotive & EV", "Healthcare", "Oil & Gas Support", "Government & Public Sector",
            "Retail & E-Commerce", "Aviation & Aerospace", "Telecommunications"
          ].map((industry) => (
            <span key={industry} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-[#0c2340]">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SEOSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-sm md:prose-base max-w-none text-gray-600">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
            GoPlnr Industrial Solutions — Leading Turnkey EPC Contractor in the UAE
          </h2>
          <p>
            GoPlnr Industrial Solutions UAE is a premier turnkey EPC (Engineering, Procurement, and Construction)
            contractor delivering mega-scale industrial and infrastructure projects across Dubai, Abu Dhabi, Sharjah,
            and the wider United Arab Emirates. With over 15 years of hands-on experience and more than AED 2 billion
            in successfully managed project value, GoPlnr is the partner of choice for government entities, multinational
            corporations, institutional investors, and private developers who demand world-class industrial construction
            services executed on time, within budget, and to the most exacting international standards.
          </p>
          <p>
            From concept to commissioning, our fully integrated EPC model eliminates the coordination headaches of
            managing multiple vendors. Every project we undertake — whether it is a AED 5 million cold room or a AED 100
            million hyperscale data center — is delivered under a single contract, a single project manager, and a single
            line of accountability. That is the GoPlnr difference, and it is what has made us one of the fastest-growing
            industrial construction companies in the Middle East.
          </p>

          <h3 className="text-xl font-bold text-[#0c2340] mt-8">
            Comprehensive EPC Services Across 10 Industrial Sectors
          </h3>
          <p>
            Our service portfolio has been carefully built to cover the critical infrastructure sectors that drive the
            UAE&apos;s economic diversification agenda. Each service line is staffed with dedicated sector specialists — engineers,
            project managers, procurement officers, and construction superintendents — who bring deep domain expertise
            to every engagement.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">1. Warehouse & Logistics Facility Construction</h4>
          <p>
            The UAE is a global logistics hub, and GoPlnr has been at the forefront of building the physical infrastructure
            that keeps goods moving. We design and construct automated distribution centers, high-bay warehousing facilities,
            temperature-controlled logistics hubs, cross-docking terminals, and e-commerce fulfillment centers. Our warehouse
            construction projects in JAFZA, DIP, Dubai South, KIZAD, and Hamriyah Free Zone range from 5,000 sqm compact
            facilities to 100,000+ sqm mega distribution campuses. Every warehouse we build integrates advanced material handling
            systems, energy-efficient HVAC, fire protection, and smart building management technology.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">2. Data Center Design & Build (Tier III / IV)</h4>
          <p>
            As digital transformation accelerates across the Gulf region, the demand for mission-critical data center infrastructure
            has never been higher. GoPlnr designs and constructs Tier III and Tier IV data centers that deliver 99.982% to 99.995%
            uptime. Our data center construction capabilities include raised floor infrastructure, redundant power distribution
            (2N/2N+1 UPS configurations), precision cooling with hot/cold aisle containment, clean agent fire suppression, biometric
            access control, and comprehensive DCIM integration. We have successfully delivered hyperscale facilities, enterprise
            colocation centers, and edge data centers across Abu Dhabi, Dubai, and Sharjah, with PUE ratings as low as 1.25.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">3. Utility-Scale Solar & Energy Infrastructure</h4>
          <p>
            As a solar EPC contractor in the UAE, GoPlnr has built utility-scale photovoltaic power plants ranging from 5MW to
            over 200MW. Our solar energy infrastructure services encompass solar resource assessment, system design with single-axis
            and dual-axis trackers, inverter station and transformer yard construction, grid interconnection engineering, and Battery
            Energy Storage System (BESS) integration. We are fully compliant with DEWA, EWEC, and ADDC grid codes, and our designs
            achieve bankable energy yield guarantees that satisfy the most demanding international lenders and investors.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">4. Industrial Factory Setup</h4>
          <p>
            From greenfield site development to fully operational production facilities, GoPlnr provides end-to-end industrial
            factory setup services. We build manufacturing facilities for food and beverage, pharmaceuticals, automotive,
            electronics, plastics, chemicals, textiles, and FMCG sectors. Our factory construction expertise includes heavy
            industrial foundation engineering, overhead crane installation, process piping, compressed air and industrial gas
            systems, cleanroom construction, industrial ventilation, and complete PLC/automation integration. We operate across
            KIZAD, DIP, ICAD, Dubai Industrial City, and all major UAE industrial zones.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">5. Water & Wastewater Treatment Plant EPC</h4>
          <p>
            Water infrastructure is the backbone of sustainable development, and GoPlnr delivers complete EPC solutions for water
            and wastewater treatment plants across the UAE. Our projects include seawater reverse osmosis (RO) desalination plants,
            membrane bioreactor (MBR) sewage treatment plants, industrial effluent treatment systems, Treated Sewage Effluent (TSE)
            recycling facilities, and package treatment plants. We design, construct, and commission facilities ranging from 500
            m³/day to over 100,000 m³/day, fully compliant with UAE federal environmental regulations, ADSSC standards, and
            Dubai Municipality requirements.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">6. Hotel Construction & Luxury Fit-Out</h4>
          <p>
            The UAE&apos;s hospitality industry demands construction excellence, and GoPlnr delivers. We construct 5-star luxury
            hotels, boutique properties, beach resorts, serviced apartments, and apart-hotels across the emirates. Our hotel
            construction services cover everything from high-rise structural works and MEP systems to luxury interior fit-outs,
            swimming pool complexes, spa and wellness facilities, commercial kitchens, and smart room technology integration.
            We work closely with international hotel brands including Marriott, Hilton, Accor, and IHG to ensure full
            compliance with their technical and brand standards.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">7. Cold Storage & Temperature-Controlled Facilities</h4>
          <p>
            GoPlnr is a specialist cold storage construction contractor in the UAE, building facilities that maintain product
            integrity across the entire cold chain. We construct blast freezers (-40°C), multi-temperature cold rooms, controlled
            atmosphere (CA) storage for fresh produce, and pharmaceutical cold chain infrastructure meeting GDP and WHO guidelines.
            Our cold storage facilities feature insulated panel systems, ammonia and CO2 industrial refrigeration, 24/7 temperature
            monitoring, thermal dock barriers, and HACCP-compliant design. We serve FMCG, food, pharmaceutical, and vaccine
            storage sectors across the UAE.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">8. Industrial Retrofit & Plant Modernization</h4>
          <p>
            Aging industrial facilities require expert modernization to remain competitive, compliant, and efficient. GoPlnr
            specializes in industrial retrofit projects that upgrade structural systems, MEP infrastructure, production lines,
            automation and control systems, fire safety, and energy efficiency — all while minimizing production downtime through
            phased execution with night and weekend shifts. Our typical retrofit projects deliver 20-40% energy savings and
            extend facility life by 15-25 years, with ROI achieved within 2-5 years.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">9. EV Charging Infrastructure Rollouts</h4>
          <p>
            As the UAE transitions to electric mobility, GoPlnr is building the charging infrastructure that makes it possible.
            We deliver large-scale EV charging station rollouts including ultra-rapid 350kW+ DC fast chargers, highway charging
            stations, fleet depot electrification, and solar-integrated charging canopies with battery buffer storage. Our EV
            infrastructure services include transformer installation, grid connection coordination with DEWA/ADDC/FEWA/SEWA,
            smart charging management software integration, and OCPP-compliant network setup. We have deployed charging networks
            across commercial properties, hospitality venues, government facilities, and highway rest stops.
          </p>

          <h4 className="text-lg font-semibold text-[#0c2340]">10. Healthcare Facility Construction</h4>
          <p>
            Healthcare construction demands the highest standards of infection control, safety, and regulatory compliance. GoPlnr
            constructs hospitals (greenfield and expansion), medical centers, polyclinics, day surgery centers, and specialized
            facilities including operating theaters, ICUs, radiology suites with radiation shielding, pharmaceutical-grade
            cleanrooms, and medical gas pipeline systems (MGPS). All our healthcare facilities are designed for DHA, DOH, and
            MOH regulatory compliance, with JCI accreditation-ready design as standard.
          </p>

          <h3 className="text-xl font-bold text-[#0c2340] mt-8">
            Why UAE Organizations Choose GoPlnr Industrial Solutions
          </h3>
          <p>
            The decision to select an EPC contractor for a multi-million dirham industrial project is one of the most important
            business decisions any organization makes. Here is why over 150 clients — including government entities, sovereign
            wealth fund portfolio companies, multinational corporations, and regional conglomerates — have chosen GoPlnr
            Industrial Solutions as their turnkey EPC partner:
          </p>
          <ul>
            <li><strong>Single-Point Accountability:</strong> One contract, one project manager, one line of responsibility from design through commissioning. No finger-pointing between designers, contractors, and suppliers.</li>
            <li><strong>Fixed-Price EPC Contracts:</strong> Our lump-sum turnkey contracts give you cost certainty. No surprise variations, no scope creep, no hidden charges.</li>
            <li><strong>Proven Track Record:</strong> 150+ successfully delivered projects worth over AED 2 billion, spanning all 10 of our core service sectors.</li>
            <li><strong>UAE Regulatory Mastery:</strong> We navigate the complete regulatory landscape — municipality approvals, civil defense clearances, environmental permits, free zone authority requirements, and sector-specific compliance (DHA, DOH, DEWA, ADSSC, Uptime Institute) — so you don&apos;t have to.</li>
            <li><strong>Speed to Completion:</strong> Our integrated EPC approach eliminates traditional handoff delays between design and construction phases, reducing project timelines by up to 30% compared to conventional methods.</li>
            <li><strong>Engineering Excellence:</strong> Our team of 200+ engineers, project managers, and construction professionals brings deep technical expertise across structural, civil, mechanical, electrical, plumbing, fire safety, automation, and process engineering disciplines.</li>
            <li><strong>Quality Assurance:</strong> ISO 9001 quality management systems, rigorous inspection and testing protocols, and third-party quality audits ensure every project meets international standards.</li>
            <li><strong>Safety First:</strong> Zero-harm safety culture with comprehensive HSE programs, regular safety audits, and industry-leading incident rates across all our construction sites.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0c2340] mt-8">
            Our Proven EPC Project Delivery Model
          </h3>
          <p>
            Every GoPlnr project follows our rigorously tested four-phase EPC delivery model, refined over 15+ years and
            150+ projects. This systematic approach ensures predictable outcomes, transparent communication, and zero surprises:
          </p>
          <p>
            <strong>Phase 1 — Feasibility & Engineering:</strong> We begin every engagement with comprehensive feasibility
            analysis including site assessments, geotechnical investigations, environmental impact evaluations, and regulatory
            pre-qualification. Our engineering team then develops detailed architectural, structural, MEP, and process designs
            using BIM (Building Information Modeling) for clash-free coordination. This phase typically takes 4-8 weeks depending
            on project complexity.
          </p>
          <p>
            <strong>Phase 2 — Procurement & Pre-Construction:</strong> Leveraging our established supply chain relationships
            with over 500 vetted vendors across the GCC, Europe, and Asia, we strategically source all equipment, materials,
            and systems. Our procurement team negotiates the best quality-to-cost ratios while ensuring delivery schedules
            align with construction milestones. Long-lead items are identified and ordered early to prevent schedule delays.
          </p>
          <p>
            <strong>Phase 3 — Construction & Installation:</strong> Our experienced construction teams execute the physical
            build — from foundations and structural steel to MEP installation, interior finishing, and equipment commissioning.
            Daily progress reporting, weekly client updates, and monthly milestone reviews keep stakeholders informed throughout.
            All work follows strict quality control procedures with documented inspection and testing protocols (ITP).
          </p>
          <p>
            <strong>Phase 4 — Commissioning & Handover:</strong> The final phase includes integrated systems testing,
            performance verification, snagging resolution, documentation compilation (O&M manuals, as-built drawings,
            warranty certificates), operator training, and formal project handover. We also offer post-handover defects
            liability period support and optional long-term operation and maintenance contracts.
          </p>

          <h3 className="text-xl font-bold text-[#0c2340] mt-8">
            Serving Every Corner of the UAE
          </h3>
          <p>
            GoPlnr Industrial Solutions operates across all seven emirates of the UAE, with dedicated project offices and teams
            in Dubai, Abu Dhabi, and Sharjah. Our geographic reach covers every major industrial zone, free trade area, and
            development district in the country:
          </p>
          <p>
            <strong>Dubai:</strong> Jebel Ali Free Zone (JAFZA), Dubai Investment Park (DIP), Dubai Industrial City, Dubai
            South, Al Quoz Industrial Area, Dubai Silicon Oasis, Dubai Internet City, Business Bay, DAFZA, Dubai Production
            City, Dubai Logistics City, Ras Al Khor Industrial, and Palm Jumeirah.
          </p>
          <p>
            <strong>Abu Dhabi:</strong> Khalifa Industrial Zone (KIZAD), ICAD I/II/III, Musaffah Industrial Area, Khalifa City,
            Yas Island, Saadiyat Island, Al Ain Industrial Area, Mohammed Bin Zayed City, Al Reem Island, and Madinat Zayed.
          </p>
          <p>
            <strong>Sharjah:</strong> Hamriyah Free Zone, Sharjah Airport Free Zone (SAIF Zone), Al Sajaa Industrial Area,
            Industrial Areas 1-18, Kalba, Khorfakkan, Muwaileh Commercial, and Al Zahia.
          </p>
          <p>
            We also serve clients in Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, ensuring complete UAE coverage for
            all industrial construction requirements. Our logistics capabilities allow us to mobilize equipment and crews to
            any location in the UAE within 48 hours.
          </p>

          <h3 className="text-xl font-bold text-[#0c2340] mt-8">
            Industry Certifications & Compliance
          </h3>
          <p>
            GoPlnr Industrial Solutions maintains the highest levels of industry certification and regulatory compliance,
            ensuring our clients receive construction services that meet every local and international standard. Our certifications
            include ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), ISO 45001:2018 (Occupational
            Health and Safety), and we are fully licensed by the Dubai Municipality, Abu Dhabi Department of Municipalities and
            Transport, and all relevant emirate-level authorities. Our data center projects support Uptime Institute Tier
            certification, our healthcare facilities meet DHA/DOH/MOH standards, and our food-related facilities comply with
            HACCP, ISO 22000, and FSSC 22000 requirements.
          </p>

          <h3 className="text-xl font-bold text-[#0c2340] mt-8">
            Start Your Industrial Project Today
          </h3>
          <p>
            Whether you are planning a new warehouse in JAFZA, a Tier IV data center in Abu Dhabi, a solar farm in Al Dhafra,
            a pharmaceutical factory in KIZAD, a water treatment plant in Sharjah, a luxury hotel on Palm Jumeirah, a cold
            storage facility in DIP, a factory modernization in Al Quoz, an EV charging network across Dubai, or a hospital
            expansion in Healthcare City — GoPlnr Industrial Solutions has the expertise, the team, and the track record to
            deliver your project from concept to commissioning.
          </p>
          <p>
            Contact us today for a free, no-obligation project consultation. Our engineering team will provide a preliminary
            feasibility assessment and cost estimate within 48 hours. With GoPlnr, your next industrial project is in
            expert hands.
          </p>
        </div>
      </div>
    </section>
  )
}
