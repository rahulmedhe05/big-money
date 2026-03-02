export interface ServiceImage {
  src: string
  alt: string
  caption?: string
}

export interface ServiceData {
  slug: string
  title: string
  shortTitle: string
  description: string
  heroDescription: string
  metaTitle: string
  metaDescription: string
  heroImages: ServiceImage[]
  galleryImages: ServiceImage[]
  features: string[]
  process: { step: string; description: string }[]
  benefits: string[]
  keywords: string[]
  faqs: { question: string; answer: string }[]
  /** Long-form SEO content sections rendered below the fold (~2000+ words) */
  detailedContent: { heading: string; body: string }[]
}

// ── Shared hero images for homepage slider ──
export const homepageHeroImages: ServiceImage[] = [
  { src: "/images/hero/construction-site.jpg", alt: "Industrial construction site in the UAE with cranes and steel structures", caption: "Mega-Scale Industrial Construction" },
  { src: "/images/hero/warehouse-aerial.jpg", alt: "Aerial view of a large warehouse facility under construction", caption: "Turnkey EPC Delivery" },
  { src: "/images/hero/solar-farm.jpg", alt: "Utility-scale solar farm in desert environment", caption: "Renewable Energy Infrastructure" },
  { src: "/images/hero/data-center.jpg", alt: "Modern data center server room with blue lighting", caption: "Mission-Critical Facilities" },
  { src: "/images/hero/construction-workers.jpg", alt: "Construction workers on an industrial site with safety equipment", caption: "Expert Engineering Teams" },
]

// ── About page hero images ──
export const aboutHeroImages: ServiceImage[] = [
  { src: "/images/about/team-work.jpg", alt: "GoPlnr Industrial Solutions construction team at work site" },
  { src: "/images/about/engineering-team.jpg", alt: "Engineering team collaborating on industrial project" },
  { src: "/images/about/mega-project.jpg", alt: "Completed industrial mega project in UAE" },
]

// ── Contact page hero images ──
export const contactHeroImages: ServiceImage[] = [
  { src: "/images/contact/office-building.jpg", alt: "Modern office building in UAE" },
  { src: "/images/contact/meeting-room.jpg", alt: "Professional meeting room for project consultations" },
]

export const services: ServiceData[] = [
  {
    slug: "warehouse-logistics-facility-construction",
    title: "Warehouse & Logistics Facility Construction (Turnkey EPC)",
    shortTitle: "Warehouse & Logistics",
    description: "End-to-end turnkey EPC solutions for warehouse and logistics facility construction across the UAE. From design to handover, we deliver world-class warehousing infrastructure for Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions delivers turnkey EPC warehouse and logistics facility construction across the UAE. We engineer, procure, and construct state-of-the-art warehousing infrastructure — from automated distribution centers to temperature-controlled logistics hubs — built for scale, speed, and operational excellence.",
    metaTitle: "Warehouse & Logistics Facility Construction UAE | Turnkey EPC Contractor Dubai",
    metaDescription: "Leading turnkey EPC contractor for warehouse & logistics facility construction in UAE. Design-build warehouses, distribution centers & logistics hubs in Dubai, Abu Dhabi & Sharjah. Get a free consultation.",
    heroImages: [
      { src: "/images/warehouse/hero-1.jpg", alt: "Modern warehouse facility with high-bay racking in the UAE" },
      { src: "/images/warehouse/hero-2.jpg", alt: "Large-scale logistics distribution center interior" },
      { src: "/images/warehouse/hero-3.jpg", alt: "Warehouse construction with steel structure erection" }
    ],
    galleryImages: [
      { src: "/images/warehouse/gallery-1.jpg", alt: "Completed warehouse interior with racking", caption: "High-Bay Warehouse — JAFZA, Dubai" },
      { src: "/images/warehouse/gallery-2.jpg", alt: "Distribution center operations", caption: "Automated Distribution Center" },
      { src: "/images/warehouse/gallery-3.jpg", alt: "Warehouse steel structure", caption: "Steel Erection Phase" },
      { src: "/images/warehouse/gallery-4.jpg", alt: "Loading dock area", caption: "Loading Dock Construction" },
      { src: "/images/warehouse/gallery-5.jpg", alt: "Warehouse automation systems", caption: "Smart Automation Integration" },
      { src: "/images/warehouse/gallery-6.jpg", alt: "Warehouse exterior view", caption: "Facility Exterior — DIP" },
      { src: "/images/warehouse/gallery-7.jpg", alt: "Cold chain logistics area", caption: "Cold Chain Integration" },
      { src: "/images/warehouse/gallery-8.jpg", alt: "Warehouse construction progress", caption: "Foundation & Slab Works" }
    ],
    features: [
      "Automated warehouse design & construction",
      "High-bay racking system integration",
      "Loading dock & cross-docking facility design",
      "Cold chain logistics infrastructure",
      "MEP systems for warehouse environments",
      "Fire protection & safety compliance",
      "Smart warehouse technology integration",
      "Last-mile distribution center construction",
      "Free trade zone warehouse development",
      "Mezzanine & multi-level warehouse solutions"
    ],
    process: [
      { step: "Feasibility & Site Assessment", description: "Comprehensive site evaluation, soil testing, and feasibility analysis for optimal warehouse placement and design." },
      { step: "Engineering & Design", description: "Detailed architectural and structural engineering, including MEP design, fire safety, and automation integration." },
      { step: "Procurement & Pre-Construction", description: "Strategic sourcing of steel structures, cladding, MEP equipment, and all construction materials." },
      { step: "Construction & Erection", description: "Full-scale construction including foundations, steel erection, cladding, flooring, and interior fit-out." },
      { step: "Systems Integration & Testing", description: "Installation of material handling systems, automation, HVAC, fire protection, and commissioning." },
      { step: "Handover & Operational Support", description: "Final inspection, documentation, training, and post-handover maintenance support." }
    ],
    benefits: [
      "Single-point accountability from design to delivery",
      "Reduced project timelines by up to 30%",
      "Cost certainty with fixed-price EPC contracts",
      "UAE building code & civil defense compliance",
      "Scalable designs for future expansion",
      "Energy-efficient warehouse solutions"
    ],
    keywords: [
      "warehouse construction UAE", "logistics facility construction Dubai", "turnkey EPC warehouse contractor",
      "warehouse construction company Abu Dhabi", "distribution center construction UAE", "logistics hub construction Dubai",
      "warehouse building contractor Sharjah", "cold storage warehouse construction UAE",
      "automated warehouse construction Dubai", "high-bay warehouse builder UAE",
      "free zone warehouse construction Dubai", "industrial warehouse contractor Abu Dhabi",
      "warehouse EPC contractor UAE", "logistics facility EPC Dubai", "pre-engineered warehouse UAE",
      "steel structure warehouse construction Dubai", "warehouse fit-out contractor UAE",
      "cross-docking facility construction UAE", "warehouse MEP contractor Dubai",
      "smart warehouse construction UAE", "last mile distribution center UAE",
      "warehouse fire safety systems Dubai", "loading dock construction UAE",
      "mezzanine warehouse construction Abu Dhabi", "multi-story warehouse builder Dubai",
      "warehouse project management UAE", "industrial logistics construction Sharjah",
      "warehouse civil works contractor Dubai", "warehouse cladding contractor UAE",
      "temperature controlled warehouse UAE", "warehouse flooring specialist Dubai",
      "bonded warehouse construction UAE", "warehouse expansion contractor Abu Dhabi",
      "modular warehouse construction Dubai", "warehouse ventilation systems UAE",
      "warehouse lighting design Dubai", "e-commerce fulfillment center construction UAE",
      "3PL warehouse construction Dubai", "pharmaceutical warehouse UAE",
      "FMCG warehouse construction Dubai", "automotive parts warehouse UAE",
      "warehouse insulation contractor Dubai", "warehouse drainage systems UAE",
      "warehouse structural engineering Dubai", "warehouse foundation contractor Abu Dhabi",
      "bulk storage facility construction UAE", "warehouse security systems Dubai",
      "warehouse sprinkler system installation UAE", "pallet racking warehouse UAE",
      "warehouse conveyor system installation Dubai", "hazardous material warehouse UAE",
      "warehouse office fit-out Dubai", "duty free warehouse construction UAE",
      "warehouse construction cost UAE", "best warehouse contractor Dubai"
    ],
    faqs: [
      { question: "How long does it take to build a warehouse in the UAE?", answer: "Typical warehouse construction timelines range from 6-14 months depending on size, complexity, and permitting. Our turnkey EPC approach can reduce timelines by up to 30% compared to traditional methods." },
      { question: "What is the cost of warehouse construction in Dubai?", answer: "Warehouse construction costs in Dubai typically range from AED 800-2,500 per sqm depending on specifications, automation level, and finishes. We provide detailed cost estimates during the feasibility phase." },
      { question: "Do you handle all permits and approvals?", answer: "Yes, our turnkey EPC service includes all municipality approvals, civil defense clearances, environmental permits, and free zone authority coordination." },
      { question: "Can you build warehouses in UAE free zones?", answer: "Absolutely. We have extensive experience building in JAFZA, DAFZA, Khalifa Industrial Zone, and other UAE free zones with full compliance to their specific requirements." }
    ]
  },
  {
    slug: "data-center-design-build",
    title: "Data Center Design & Build (Tier III / IV)",
    shortTitle: "Data Center Design & Build",
    description: "Tier III and Tier IV data center design and build services across the UAE. Mission-critical facility construction with redundant power, cooling, and security systems for Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions engineers and constructs Tier III & Tier IV data centers across the UAE. We deliver mission-critical digital infrastructure — from hyperscale facilities to edge data centers — with uncompromising uptime, redundancy, and energy efficiency standards.",
    metaTitle: "Data Center Design & Build UAE | Tier III & IV Construction Dubai",
    metaDescription: "Expert Tier III & Tier IV data center design and build contractor in UAE. Mission-critical facility construction with redundant systems in Dubai, Abu Dhabi & Sharjah. Request a proposal today.",
    heroImages: [
      { src: "/images/datacenter/hero-1.jpg", alt: "Data center server room with blue lighting and modern infrastructure" },
      { src: "/images/datacenter/hero-2.jpg", alt: "Tier IV data center cooling infrastructure" },
      { src: "/images/datacenter/hero-3.jpg", alt: "Data center construction with raised floor installation" }
    ],
    galleryImages: [
      { src: "/images/datacenter/gallery-1.jpg", alt: "Server room racks with blue LED lighting", caption: "Tier IV Server Hall" },
      { src: "/images/datacenter/gallery-2.jpg", alt: "Data center cooling systems", caption: "Precision Cooling Systems" },
      { src: "/images/datacenter/gallery-3.jpg", alt: "Raised floor installation", caption: "Raised Floor Infrastructure" },
      { src: "/images/datacenter/gallery-4.jpg", alt: "UPS and power systems", caption: "Redundant Power Distribution" },
      { src: "/images/datacenter/gallery-5.jpg", alt: "Network cabling infrastructure", caption: "Fiber Optic Backbone" },
      { src: "/images/datacenter/gallery-6.jpg", alt: "Generator room", caption: "Backup Generator Systems" },
      { src: "/images/datacenter/gallery-7.jpg", alt: "Security and access control", caption: "Biometric Access Control" },
      { src: "/images/datacenter/gallery-8.jpg", alt: "Data center exterior", caption: "Facility Exterior — Abu Dhabi" }
    ],
    features: [
      "Tier III & Tier IV certified facility design",
      "Redundant power distribution systems (2N/2N+1)",
      "Precision cooling & hot/cold aisle containment",
      "Raised floor & cable management infrastructure",
      "Fire suppression (clean agent / inert gas)",
      "Physical security & biometric access control",
      "UPS & diesel generator backup systems",
      "Building Management System (BMS) integration",
      "Fiber optic backbone & network infrastructure",
      "Environmental monitoring & DCIM integration"
    ],
    process: [
      { step: "Requirements & Capacity Planning", description: "Detailed power, cooling, and space capacity planning aligned with current and future IT load projections." },
      { step: "Conceptual & Detailed Design", description: "Full architectural, structural, electrical, and mechanical engineering for Tier III/IV compliance." },
      { step: "Equipment Procurement", description: "Sourcing of UPS systems, generators, precision cooling units, switchgear, and all critical infrastructure." },
      { step: "Construction & Installation", description: "Building shell construction, raised floor installation, MEP fit-out, and critical infrastructure deployment." },
      { step: "Testing & Commissioning", description: "Integrated systems testing, load bank testing, failover simulation, and Tier certification support." },
      { step: "Handover & Operations Support", description: "Documentation, operator training, and ongoing maintenance support contracts." }
    ],
    benefits: [
      "99.995%+ uptime design (Tier IV)",
      "Energy-efficient PUE optimization",
      "Concurrent maintainability built-in",
      "Scalable modular expansion capability",
      "UAE telecom regulatory compliance",
      "Uptime Institute certification support"
    ],
    keywords: [
      "data center construction UAE", "data center design build Dubai", "Tier III data center UAE",
      "Tier IV data center construction Dubai", "data center EPC contractor Abu Dhabi",
      "hyperscale data center construction UAE", "colocation data center builder Dubai",
      "edge data center construction UAE", "data center MEP contractor Dubai",
      "data center cooling systems UAE", "data center power systems Dubai",
      "UPS installation data center UAE", "generator installation data center Dubai",
      "raised floor installation UAE", "data center fire suppression Dubai",
      "data center security systems UAE", "BMS integration data center Dubai",
      "DCIM implementation UAE", "data center fiber optic installation Dubai",
      "modular data center construction UAE", "container data center UAE",
      "data center retrofit Dubai", "data center expansion Abu Dhabi",
      "mission critical facility construction UAE", "data center project management Dubai",
      "clean room construction data center UAE", "data center structural engineering Dubai",
      "hot cold aisle containment UAE", "precision cooling installation Dubai",
      "data center cable management UAE", "data center monitoring systems Dubai",
      "data center compliance UAE", "Uptime Institute certification UAE",
      "data center PUE optimization Dubai", "green data center construction UAE",
      "data center backup power Dubai", "data center switchgear installation UAE",
      "data center grounding systems Dubai", "data center waterproofing UAE",
      "cloud data center infrastructure Dubai", "AI data center construction UAE",
      "cryptocurrency mining facility UAE", "data center cabling contractor Dubai",
      "data center HVAC specialist UAE", "data center electrical contractor Dubai",
      "data center commissioning UAE", "data center testing Dubai",
      "data center consultant UAE", "data center cost estimation Dubai",
      "best data center contractor UAE", "data center construction company Sharjah",
      "enterprise data center UAE", "telecom data center construction Dubai"
    ],
    faqs: [
      { question: "What is the difference between Tier III and Tier IV data centers?", answer: "Tier III provides concurrent maintainability with 99.982% uptime (N+1 redundancy), while Tier IV provides fault tolerance with 99.995% uptime (2N+1 redundancy). Tier IV ensures no single point of failure." },
      { question: "How long does it take to build a data center in Dubai?", answer: "A typical Tier III data center takes 12-18 months from design to commissioning. Tier IV facilities may take 18-24 months. Modular approaches can significantly reduce these timelines." },
      { question: "What PUE can we expect?", answer: "Our designs target PUE of 1.3-1.5 for conventional facilities and below 1.25 for optimized designs using free cooling and energy recovery systems suited to UAE climate." },
      { question: "Do you handle Uptime Institute certification?", answer: "Yes, we provide full support for Uptime Institute TCDD (Tier Certification of Design Documents) and TCCF (Tier Certification of Constructed Facility)." }
    ]
  },
  {
    slug: "utility-scale-solar-energy-infrastructure",
    title: "Utility-Scale Solar & Energy Infrastructure EPC",
    shortTitle: "Solar & Energy EPC",
    description: "Utility-scale solar power plant and energy infrastructure EPC services across the UAE. Ground-mounted PV systems, solar farms, and renewable energy solutions for Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions is a premier EPC contractor for utility-scale solar and energy infrastructure in the UAE. We design, procure, and construct solar power plants — from 5MW to 500MW+ — delivering clean energy solutions that power the UAE's sustainable future.",
    metaTitle: "Utility-Scale Solar & Energy Infrastructure EPC UAE | Solar Farm Construction Dubai",
    metaDescription: "Leading utility-scale solar EPC contractor in UAE. Ground-mounted PV solar farm construction, energy infrastructure & renewable energy projects in Dubai, Abu Dhabi & Sharjah.",
    heroImages: [
      { src: "/images/solar/hero-1.jpg", alt: "Utility-scale solar farm with rows of PV panels in desert" },
      { src: "/images/solar/hero-2.jpg", alt: "Solar panel array at sunset with orange sky" },
      { src: "/images/solar/hero-3.jpg", alt: "Solar energy infrastructure installation in progress" }
    ],
    galleryImages: [
      { src: "/images/solar/gallery-1.jpg", alt: "Large solar farm aerial view", caption: "100MW Solar Farm — Abu Dhabi" },
      { src: "/images/solar/gallery-2.jpg", alt: "Solar panels at golden hour", caption: "Ground-Mounted PV Array" },
      { src: "/images/solar/gallery-3.jpg", alt: "Solar installation workers", caption: "Module Installation Phase" },
      { src: "/images/solar/gallery-4.jpg", alt: "Solar tracker systems", caption: "Single-Axis Tracker System" },
      { src: "/images/solar/gallery-5.jpg", alt: "Inverter station", caption: "Inverter & Transformer Station" },
      { src: "/images/solar/gallery-6.jpg", alt: "Electrical substation for solar", caption: "Grid Interconnection" },
      { src: "/images/solar/gallery-7.jpg", alt: "Battery energy storage system", caption: "BESS Installation" },
      { src: "/images/solar/gallery-8.jpg", alt: "Solar construction progress", caption: "Pile Driving & Civil Works" }
    ],
    features: [
      "Ground-mounted PV solar power plant construction",
      "Single-axis & dual-axis tracker installation",
      "Inverter station & transformer yard construction",
      "Grid interconnection & substation engineering",
      "Battery Energy Storage Systems (BESS)",
      "Solar resource assessment & yield analysis",
      "High voltage transmission line construction",
      "SCADA & remote monitoring systems",
      "O&M facility & access road construction",
      "Environmental impact assessment & compliance"
    ],
    process: [
      { step: "Solar Resource Assessment", description: "Detailed irradiance analysis, site topology mapping, and energy yield modeling for optimal plant design." },
      { step: "System Design & Engineering", description: "PV layout optimization, electrical system design, grid study, and structural engineering for tracker/fixed-tilt systems." },
      { step: "Equipment Procurement", description: "Strategic sourcing of PV modules, inverters, trackers, transformers, cables, and balance of system components." },
      { step: "Site Preparation & Civil Works", description: "Land clearing, grading, pile driving, cable trenching, and access road construction." },
      { step: "Installation & Grid Connection", description: "Module mounting, DC/AC wiring, inverter installation, transformer commissioning, and grid synchronization." },
      { step: "Testing & Commercial Operation", description: "Performance testing, grid compliance verification, and commercial operation date (COD) achievement." }
    ],
    benefits: [
      "Bankable energy yield guarantees",
      "IEC/IEEE compliant designs",
      "DEWA/EWEC/ADDC grid code compliance",
      "Proven track record in desert environments",
      "Lifecycle cost optimization",
      "Carbon offset documentation support"
    ],
    keywords: [
      "solar EPC contractor UAE", "utility scale solar construction Dubai",
      "solar farm construction Abu Dhabi", "solar power plant EPC UAE",
      "ground mounted solar installation Dubai", "solar tracker installation UAE",
      "renewable energy EPC contractor Dubai", "solar panel installation UAE",
      "photovoltaic plant construction Dubai", "solar energy infrastructure Abu Dhabi",
      "battery energy storage UAE", "BESS installation contractor Dubai",
      "grid connected solar plant UAE", "solar substation construction Dubai",
      "high voltage solar infrastructure UAE", "solar inverter installation Dubai",
      "solar O&M contractor UAE", "SCADA system solar plant Dubai",
      "solar farm developer UAE", "clean energy EPC contractor Dubai",
      "solar power generation UAE", "MW scale solar installation Abu Dhabi",
      "solar project management UAE", "solar civil works contractor Dubai",
      "pile driving solar installation UAE", "cable trenching solar farm Dubai",
      "solar module mounting UAE", "DC AC wiring solar plant Dubai",
      "transformer yard construction UAE", "transmission line construction Dubai",
      "DEWA approved solar contractor", "EWEC solar project UAE",
      "net zero energy infrastructure UAE", "carbon neutral construction Dubai",
      "solar carport construction UAE", "floating solar installation Dubai",
      "agrivoltaic solar farm UAE", "rooftop solar large scale Dubai",
      "solar engineering procurement construction UAE", "solar EPC company Sharjah",
      "solar power purchase agreement UAE", "solar feasibility study Dubai",
      "solar resource assessment UAE", "energy yield analysis Dubai",
      "desert solar plant construction UAE", "concentrated solar power Dubai",
      "hybrid solar wind energy UAE", "solar street lighting contractor Dubai",
      "industrial solar installation UAE", "commercial solar EPC Dubai",
      "solar monitoring systems UAE", "best solar EPC contractor Dubai"
    ],
    faqs: [
      { question: "What size solar plants do you build?", answer: "We specialize in utility-scale projects from 5MW to 500MW+, though we also handle large commercial installations above 1MW. Our sweet spot is the 20-200MW range." },
      { question: "How long does a solar farm take to build?", answer: "A typical 50MW solar farm takes 12-18 months from notice to proceed to COD. Larger plants may take 18-24 months. We have achieved aggressive schedules of under 12 months for certain projects." },
      { question: "Do you handle grid interconnection?", answer: "Yes, we manage the complete grid connection process including substation construction, protection relay coordination, and compliance with DEWA/EWEC/ADDC grid codes." },
      { question: "What about battery storage integration?", answer: "We offer integrated BESS solutions using lithium-ion and other technologies, designed to optimize solar energy dispatch, provide grid services, and maximize revenue." }
    ]
  },
  {
    slug: "industrial-factory-setup",
    title: "Industrial Factory Setup (End-to-End)",
    shortTitle: "Industrial Factory Setup",
    description: "Complete end-to-end industrial factory setup and manufacturing facility construction across the UAE. From greenfield to operational facility in Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions provides end-to-end industrial factory setup services across the UAE. We transform greenfield sites into fully operational manufacturing facilities — handling everything from design engineering and building construction to production line installation and commissioning.",
    metaTitle: "Industrial Factory Setup UAE | Manufacturing Facility Construction Dubai",
    metaDescription: "End-to-end industrial factory setup and manufacturing facility construction in UAE. Greenfield to operational factory in Dubai, Abu Dhabi & Sharjah. Complete EPC solutions.",
    heroImages: [
      { src: "/images/factory/hero-1.jpg", alt: "Modern industrial factory interior with production equipment" },
      { src: "/images/factory/hero-2.jpg", alt: "Factory production line in a manufacturing facility" },
      { src: "/images/factory/hero-3.jpg", alt: "Industrial manufacturing plant construction" }
    ],
    galleryImages: [
      { src: "/images/factory/gallery-1.jpg", alt: "Factory interior with equipment", caption: "Completed Factory Floor — KIZAD" },
      { src: "/images/factory/gallery-2.jpg", alt: "Production line running", caption: "Production Line Installation" },
      { src: "/images/factory/gallery-3.jpg", alt: "Factory construction site", caption: "Steel Structure Erection" },
      { src: "/images/factory/gallery-4.jpg", alt: "Industrial crane systems", caption: "Overhead Crane Installation" },
      { src: "/images/factory/gallery-5.jpg", alt: "Factory automation", caption: "PLC & Automation Systems" },
      { src: "/images/factory/gallery-6.jpg", alt: "Clean room environment", caption: "Cleanroom Construction" },
      { src: "/images/factory/gallery-7.jpg", alt: "Industrial electrical panel", caption: "MV/LV Electrical Systems" },
      { src: "/images/factory/gallery-8.jpg", alt: "Factory exterior", caption: "Facility Exterior — DIP" }
    ],
    features: [
      "Greenfield factory design & construction",
      "Production line layout & optimization",
      "Heavy industrial foundation engineering",
      "Crane runway & overhead crane installation",
      "Industrial electrical systems (MV/LV)",
      "Compressed air & industrial gas systems",
      "Process piping & utility networks",
      "Cleanroom & controlled environment construction",
      "Industrial ventilation & dust extraction",
      "Factory automation & PLC integration"
    ],
    process: [
      { step: "Master Planning & Feasibility", description: "Production flow analysis, site master planning, and feasibility study including utility requirements and regulatory compliance." },
      { step: "Detailed Engineering Design", description: "Architectural, structural, MEP, and process engineering with BIM coordination for clash-free construction." },
      { step: "Procurement & Supply Chain", description: "Global sourcing of structural steel, equipment, machinery foundations, and all industrial systems." },
      { step: "Building Construction", description: "Civil works, steel structure erection, cladding, roofing, industrial flooring, and building services installation." },
      { step: "Equipment & Line Installation", description: "Machinery installation, production line setup, utility connections, and process piping." },
      { step: "Commissioning & Production Start", description: "Integrated commissioning, trial runs, operator training, and handover for production start." }
    ],
    benefits: [
      "Single EPC contractor — no coordination headaches",
      "BIM-enabled clash-free design",
      "Optimized production flow layouts",
      "UAE industrial zone compliance",
      "Expedited time-to-production",
      "Scalable designs for phased expansion"
    ],
    keywords: [
      "industrial factory construction UAE", "factory setup Dubai", "manufacturing facility construction Abu Dhabi",
      "factory building contractor UAE", "industrial plant construction Dubai",
      "production facility EPC UAE", "factory design build Dubai",
      "greenfield factory construction UAE", "brownfield factory renovation Dubai",
      "heavy industry construction UAE", "light manufacturing factory Dubai",
      "food factory construction UAE", "pharmaceutical factory setup Dubai",
      "automotive factory construction UAE", "plastics factory builder Dubai",
      "metal fabrication workshop UAE", "chemical plant construction Dubai",
      "textile factory setup UAE", "packaging facility construction Dubai",
      "electronics manufacturing facility UAE", "FMCG factory construction Dubai",
      "industrial zone factory UAE", "KIZAD factory construction Abu Dhabi",
      "DIP factory setup Dubai", "factory MEP contractor UAE",
      "crane installation factory Dubai", "compressed air system installation UAE",
      "industrial flooring contractor Dubai", "factory electrical contractor UAE",
      "cleanroom construction UAE", "dust extraction system Dubai",
      "factory ventilation contractor UAE", "process piping contractor Dubai",
      "factory automation contractor UAE", "PLC integration factory Dubai",
      "factory civil works UAE", "factory steel structure Dubai",
      "factory cladding contractor UAE", "factory roofing Dubai",
      "factory fire safety systems UAE", "factory project management Dubai",
      "industrial facility setup Sharjah", "factory expansion contractor UAE",
      "factory commissioning services Dubai", "factory building cost UAE",
      "best factory construction company Dubai", "factory turnkey contractor UAE",
      "manufacturing plant builder Abu Dhabi", "factory fit-out contractor Dubai",
      "GMP factory construction UAE", "ISO cleanroom factory Dubai",
      "smart factory construction UAE", "Industry 4.0 factory setup Dubai"
    ],
    faqs: [
      { question: "How long does it take to set up a factory in the UAE?", answer: "Factory construction timelines range from 8-20 months depending on size and complexity. A standard manufacturing facility of 5,000-10,000 sqm typically takes 10-14 months." },
      { question: "Can you handle production line installation?", answer: "Yes, our end-to-end service includes production line layout design, equipment foundations, machinery installation, utility connections, and commissioning." },
      { question: "Do you work in UAE industrial zones?", answer: "Yes, we work across all major UAE industrial zones including KIZAD, DIP, ICAD, SHJ Industrial Areas, and others, with full compliance to their specific requirements." },
      { question: "What types of factories do you build?", answer: "We build all types — food & beverage, pharmaceutical, automotive, electronics, plastics, chemical, metal fabrication, FMCG, and more. Each with industry-specific compliance." }
    ]
  },
  {
    slug: "water-wastewater-treatment-plant",
    title: "Water & Wastewater Treatment Plant EPC",
    shortTitle: "Water Treatment Plants",
    description: "Water and wastewater treatment plant EPC construction services across the UAE. Desalination, sewage treatment, and industrial water treatment solutions for Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions delivers turnkey EPC solutions for water and wastewater treatment plants across the UAE. From seawater desalination to industrial effluent treatment, we engineer and construct facilities that ensure clean water supply and environmental compliance.",
    metaTitle: "Water & Wastewater Treatment Plant EPC UAE | Construction Contractor Dubai",
    metaDescription: "Turnkey water & wastewater treatment plant EPC contractor in UAE. Desalination, sewage treatment, industrial water treatment in Dubai, Abu Dhabi & Sharjah. Request a consultation.",
    heroImages: [
      { src: "/images/water/hero-1.jpg", alt: "Water treatment plant with filtration systems" },
      { src: "/images/water/hero-2.jpg", alt: "Wastewater treatment facility aerial view" },
      { src: "/images/water/hero-3.jpg", alt: "Industrial water processing equipment" }
    ],
    galleryImages: [
      { src: "/images/water/gallery-1.jpg", alt: "Water treatment equipment", caption: "RO Desalination Plant" },
      { src: "/images/water/gallery-2.jpg", alt: "Treatment plant aerial view", caption: "STP Facility — Abu Dhabi" },
      { src: "/images/water/gallery-3.jpg", alt: "Water processing systems", caption: "Membrane Filtration Systems" },
      { src: "/images/water/gallery-4.jpg", alt: "Water storage tanks", caption: "Treated Water Storage" },
      { src: "/images/water/gallery-5.jpg", alt: "Pipeline infrastructure", caption: "Distribution Pipeline Network" },
      { src: "/images/water/gallery-6.jpg", alt: "SCADA control room", caption: "SCADA & Remote Monitoring" },
      { src: "/images/water/gallery-7.jpg", alt: "Chemical dosing systems", caption: "Chemical Dosing Station" },
      { src: "/images/water/gallery-8.jpg", alt: "Water treatment construction", caption: "Civil Works & Tank Construction" }
    ],
    features: [
      "Seawater desalination plant construction (RO/MED)",
      "Sewage Treatment Plant (STP) construction",
      "Industrial effluent treatment systems",
      "Treated Sewage Effluent (TSE) recycling plants",
      "Package water treatment plant installation",
      "Chemical dosing & disinfection systems",
      "SCADA & remote monitoring for water facilities",
      "Intake & outfall structure construction",
      "Membrane bioreactor (MBR) systems",
      "Sludge handling & dewatering systems"
    ],
    process: [
      { step: "Water Quality Assessment", description: "Source water characterization, effluent quality requirements, and treatment process selection." },
      { step: "Process & Detailed Design", description: "Hydraulic design, process flow diagrams, P&ID development, and detailed engineering." },
      { step: "Equipment Procurement", description: "Sourcing of membranes, pumps, blowers, chemical systems, instrumentation, and control panels." },
      { step: "Civil & Structural Construction", description: "Tank construction, building works, pipe galleries, and infrastructure development." },
      { step: "Mechanical & Electrical Installation", description: "Equipment installation, piping, electrical systems, and instrumentation." },
      { step: "Commissioning & Performance Testing", description: "Process startup, optimization, performance guarantee testing, and operator training." }
    ],
    benefits: [
      "Compliance with UAE environmental regulations",
      "Energy-efficient treatment processes",
      "Modular designs for rapid deployment",
      "Remote monitoring & automated operation",
      "Water recovery rate optimization",
      "Long-term O&M support available"
    ],
    keywords: [
      "water treatment plant construction UAE", "wastewater treatment EPC Dubai",
      "desalination plant contractor Abu Dhabi", "STP construction UAE",
      "sewage treatment plant builder Dubai", "industrial water treatment UAE",
      "RO desalination plant UAE", "MED desalination construction Dubai",
      "TSE recycling plant UAE", "water recycling facility Dubai",
      "effluent treatment plant UAE", "ETP construction Dubai",
      "package treatment plant UAE", "MBR wastewater treatment Dubai",
      "sludge dewatering system UAE", "water treatment EPC contractor Dubai",
      "SCADA water treatment UAE", "chemical dosing system Dubai",
      "water disinfection system UAE", "UV treatment plant Dubai",
      "ozone treatment system UAE", "filtration plant construction Dubai",
      "water intake structure UAE", "outfall construction Dubai",
      "pump station construction UAE", "water pipeline construction Dubai",
      "stormwater treatment UAE", "greywater recycling system Dubai",
      "zero liquid discharge UAE", "brine treatment system Dubai",
      "DAF system installation UAE", "clarifier construction Dubai",
      "aeration system installation UAE", "biological treatment plant Dubai",
      "tertiary treatment plant UAE", "potable water treatment Dubai",
      "brackish water treatment UAE", "groundwater treatment plant Dubai",
      "water treatment consultant UAE", "water treatment project management Dubai",
      "water treatment civil works UAE", "water treatment electrical contractor Dubai",
      "water treatment piping contractor UAE", "water treatment instrumentation Dubai",
      "municipality approved water contractor UAE", "ADSSC compliant contractor Dubai",
      "Dubai Municipality water treatment", "water treatment cost UAE",
      "best water treatment contractor Dubai", "water treatment company Sharjah",
      "industrial water recycling UAE", "cooling tower water treatment Dubai"
    ],
    faqs: [
      { question: "What types of water treatment plants do you build?", answer: "We build seawater desalination (RO/MED), sewage treatment plants (STP), industrial effluent treatment plants (ETP), TSE recycling, and potable water treatment facilities." },
      { question: "What capacity treatment plants can you construct?", answer: "We handle projects from 500 m³/day package plants to 100,000+ m³/day large-scale facilities. Our expertise covers the full spectrum of municipal and industrial applications." },
      { question: "Do you ensure regulatory compliance?", answer: "Yes, all our facilities are designed to meet UAE federal and local environmental regulations, including ADSSC, Dubai Municipality, and Ministry of Climate Change requirements." },
      { question: "Can you upgrade existing treatment plants?", answer: "Absolutely. We specialize in capacity upgrades, process optimization, and technology retrofits for existing water and wastewater treatment facilities." }
    ]
  },
  {
    slug: "hotel-construction-luxury-fit-out",
    title: "Hotel Construction & Luxury Fit-Out",
    shortTitle: "Hotel Construction",
    description: "Full-scale hotel construction and luxury interior fit-out services across the UAE. From 5-star resorts to boutique hotels in Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions constructs world-class hotels and luxury hospitality facilities across the UAE. From iconic high-rise towers to beachfront resorts, we deliver exceptional construction quality and stunning luxury fit-outs that define the region's hospitality landmark projects.",
    metaTitle: "Hotel Construction & Luxury Fit-Out UAE | 5-Star Hotel Builder Dubai",
    metaDescription: "Premier hotel construction & luxury fit-out contractor in UAE. 5-star hotel building, resort construction & hospitality interior fit-out in Dubai, Abu Dhabi & Sharjah.",
    heroImages: [
      { src: "/images/hotel/hero-1.jpg", alt: "Luxury hotel resort with pool and modern architecture" },
      { src: "/images/hotel/hero-2.jpg", alt: "5-star hotel lobby with elegant interior design" },
      { src: "/images/hotel/hero-3.jpg", alt: "Hotel construction and high-rise tower development" }
    ],
    galleryImages: [
      { src: "/images/hotel/gallery-1.jpg", alt: "Luxury resort exterior", caption: "5-Star Beach Resort — Dubai" },
      { src: "/images/hotel/gallery-2.jpg", alt: "Hotel grand lobby", caption: "Grand Lobby Fit-Out" },
      { src: "/images/hotel/gallery-3.jpg", alt: "Hotel construction progress", caption: "Tower Superstructure" },
      { src: "/images/hotel/gallery-4.jpg", alt: "Luxury hotel suite", caption: "Presidential Suite Fit-Out" },
      { src: "/images/hotel/gallery-5.jpg", alt: "Hotel pool area", caption: "Swimming Pool & Leisure Area" },
      { src: "/images/hotel/gallery-6.jpg", alt: "Hotel ballroom", caption: "Ballroom & Conference Center" },
      { src: "/images/hotel/gallery-7.jpg", alt: "Hotel spa area", caption: "Spa & Wellness Facility" },
      { src: "/images/hotel/gallery-8.jpg", alt: "Hotel restaurant", caption: "Restaurant & Kitchen Fit-Out" }
    ],
    features: [
      "High-rise hotel tower construction",
      "Beach resort & villa development",
      "Luxury interior fit-out & FF&E installation",
      "Hotel MEP systems (HVAC, plumbing, electrical)",
      "Swimming pool & leisure facility construction",
      "Commercial kitchen & laundry facility fit-out",
      "Ballroom & conference center construction",
      "Spa & wellness facility fit-out",
      "Landscaping & hardscaping",
      "Smart room technology integration"
    ],
    process: [
      { step: "Concept Development & Design", description: "Architectural concept aligned with brand standards, interior design, and detailed engineering." },
      { step: "Approvals & Permitting", description: "Municipality approvals, environmental clearances, and tourism authority coordination." },
      { step: "Structural Construction", description: "Foundation, superstructure, facade, and building envelope construction." },
      { step: "MEP Installation", description: "Complete mechanical, electrical, and plumbing systems including BMS integration." },
      { step: "Interior Fit-Out & FF&E", description: "Luxury interior finishing, furniture, fixtures, equipment, and artwork installation." },
      { step: "Pre-Opening & Handover", description: "Snagging, final inspections, staff training areas, and operational readiness handover." }
    ],
    benefits: [
      "International brand standard compliance",
      "On-time delivery for opening schedules",
      "Luxury finish quality guarantees",
      "Integrated design-build approach",
      "Value engineering without compromising quality",
      "Post-handover defects liability support"
    ],
    keywords: [
      "hotel construction UAE", "hotel building contractor Dubai", "luxury hotel construction Abu Dhabi",
      "5 star hotel builder UAE", "resort construction Dubai", "hotel fit-out contractor UAE",
      "hospitality construction company Dubai", "boutique hotel construction UAE",
      "hotel interior fit-out Dubai", "hotel MEP contractor UAE",
      "hotel renovation contractor Dubai", "hotel refurbishment UAE",
      "beach resort construction Dubai", "hotel tower construction UAE",
      "hotel electrical contractor Dubai", "hotel HVAC installation UAE",
      "hotel plumbing contractor Dubai", "hotel fire safety systems UAE",
      "commercial kitchen fit-out hotel Dubai", "hotel laundry facility UAE",
      "swimming pool construction hotel Dubai", "spa construction hotel UAE",
      "ballroom construction hotel Dubai", "conference center hotel UAE",
      "hotel landscaping contractor Dubai", "hotel smart room systems UAE",
      "FF&E installation hotel Dubai", "hotel furniture installation UAE",
      "hotel lobby fit-out Dubai", "hotel room fit-out contractor UAE",
      "serviced apartment construction Dubai", "apart-hotel construction UAE",
      "hotel project management Dubai", "hotel design build UAE",
      "hotel structural engineering Dubai", "hotel facade construction UAE",
      "hotel waterproofing contractor Dubai", "hotel flooring contractor UAE",
      "hotel ceiling contractor Dubai", "hotel painting contractor UAE",
      "hotel joinery contractor Dubai", "marble installation hotel UAE",
      "hotel back of house fit-out Dubai", "hotel restaurant fit-out UAE",
      "hotel bar construction Dubai", "hotel guest room fit-out UAE",
      "hotel corridor fit-out Dubai", "hotel rooftop construction UAE",
      "hotel parking structure Dubai", "hotel expansion contractor UAE",
      "best hotel construction company Dubai", "hotel turnkey contractor UAE",
      "luxury resort builder Abu Dhabi", "hotel construction cost Dubai"
    ],
    faqs: [
      { question: "What types of hotels do you build?", answer: "We construct all types — 5-star luxury hotels, boutique hotels, resort developments, serviced apartments, and apart-hotels. We work with international brands and independent operators." },
      { question: "How long does it take to build a hotel in Dubai?", answer: "A typical mid-rise hotel (150-300 rooms) takes 24-36 months. High-rise hotel towers may take 36-48 months. Fit-out-only projects typically take 8-14 months." },
      { question: "Do you handle brand standard compliance?", answer: "Yes, we work closely with international hotel operators (Marriott, Hilton, Accor, IHG, etc.) to ensure full compliance with their technical and brand standards." },
      { question: "Can you do fit-out only for existing buildings?", answer: "Absolutely. We specialize in hotel fit-out and renovation projects, transforming existing buildings into hospitality properties or upgrading existing hotels." }
    ]
  },
  {
    slug: "cold-storage-temperature-controlled-facilities",
    title: "Cold Storage & Temperature-Controlled Facilities",
    shortTitle: "Cold Storage Facilities",
    description: "Cold storage and temperature-controlled facility construction across the UAE. Blast freezers, cold rooms, and controlled atmosphere storage for Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions designs and constructs state-of-the-art cold storage and temperature-controlled facilities across the UAE. From blast freezers to pharmaceutical cold chain infrastructure, we deliver precision-engineered facilities that maintain product integrity from -40°C to +25°C.",
    metaTitle: "Cold Storage Construction UAE | Temperature-Controlled Facility Builder Dubai",
    metaDescription: "Expert cold storage & temperature-controlled facility construction in UAE. Blast freezers, cold rooms, pharma cold chain in Dubai, Abu Dhabi & Sharjah. Get a free quote.",
    heroImages: [
      { src: "/images/coldstorage/hero-1.jpg", alt: "Cold storage facility interior with temperature-controlled racks" },
      { src: "/images/coldstorage/hero-2.jpg", alt: "Industrial refrigeration systems and insulated panels" },
      { src: "/images/coldstorage/hero-3.jpg", alt: "Temperature-controlled logistics facility" }
    ],
    galleryImages: [
      { src: "/images/coldstorage/gallery-1.jpg", alt: "Cold storage interior", caption: "Multi-Temperature Cold Store" },
      { src: "/images/coldstorage/gallery-2.jpg", alt: "Refrigeration equipment", caption: "Industrial Refrigeration Systems" },
      { src: "/images/coldstorage/gallery-3.jpg", alt: "Controlled storage facility", caption: "Blast Freezer (-40°C)" },
      { src: "/images/coldstorage/gallery-4.jpg", alt: "Cold storage racking", caption: "Pallet Racking System" },
      { src: "/images/coldstorage/gallery-5.jpg", alt: "Insulated panel installation", caption: "Panel Erection Phase" },
      { src: "/images/coldstorage/gallery-6.jpg", alt: "Loading dock thermal barriers", caption: "Thermal Dock Seals" },
      { src: "/images/coldstorage/gallery-7.jpg", alt: "Temperature monitoring", caption: "24/7 Temperature Monitoring" },
      { src: "/images/coldstorage/gallery-8.jpg", alt: "Facility construction", caption: "Civil Works & Foundation" }
    ],
    features: [
      "Blast freezer construction (-40°C)",
      "Cold room & chiller room construction",
      "Controlled atmosphere (CA) storage",
      "Pharmaceutical cold chain facilities",
      "Insulated panel system installation",
      "Industrial refrigeration system design",
      "Cold storage racking & automation",
      "Temperature monitoring & alarm systems",
      "Loading dock thermal barriers",
      "Ammonia & CO2 refrigeration systems"
    ],
    process: [
      { step: "Temperature Mapping & Design", description: "Product-specific temperature requirements, capacity planning, and facility layout design." },
      { step: "Insulation & Panel Engineering", description: "Selection of insulation systems, vapor barriers, and panel specifications for thermal performance." },
      { step: "Refrigeration System Design", description: "Refrigerant selection, compressor sizing, evaporator/condenser specification, and piping design." },
      { step: "Construction & Panel Erection", description: "Building construction, insulated panel installation, floor insulation, and dock construction." },
      { step: "Refrigeration & Controls Installation", description: "Refrigeration equipment installation, piping, electrical, and controls/monitoring systems." },
      { step: "Commissioning & Validation", description: "Temperature mapping validation, performance testing, and cold chain documentation." }
    ],
    benefits: [
      "HACCP & food safety compliant design",
      "Energy-efficient refrigeration solutions",
      "Multi-temperature zone capability",
      "24/7 temperature monitoring systems",
      "UAE food safety authority compliance",
      "Rapid deployment modular options"
    ],
    keywords: [
      "cold storage construction UAE", "cold room construction Dubai",
      "temperature controlled facility Abu Dhabi", "blast freezer construction UAE",
      "cold storage warehouse Dubai", "frozen storage facility UAE",
      "pharmaceutical cold storage Dubai", "cold chain facility construction UAE",
      "chiller room construction Dubai", "insulated panel installation UAE",
      "cold storage insulation contractor Dubai", "refrigeration system installation UAE",
      "ammonia refrigeration system Dubai", "CO2 refrigeration system UAE",
      "cold storage racking Dubai", "cold storage automation UAE",
      "cold storage door installation Dubai", "thermal barrier installation UAE",
      "cold storage flooring Dubai", "anti-frost heater installation UAE",
      "controlled atmosphere storage Dubai", "CA storage construction UAE",
      "multi-temperature warehouse Dubai", "cold storage MEP contractor UAE",
      "cold storage electrical contractor Dubai", "cold storage project management UAE",
      "HACCP compliant cold storage Dubai", "food grade cold storage UAE",
      "meat processing cold storage Dubai", "dairy cold storage UAE",
      "seafood cold storage Dubai", "fruit vegetable cold storage UAE",
      "ice cream cold storage Dubai", "frozen food warehouse UAE",
      "cold storage expansion contractor Dubai", "cold storage retrofit UAE",
      "cold storage monitoring system Dubai", "cold storage alarm system UAE",
      "cold storage contractor Sharjah", "industrial freezer room UAE",
      "cold storage dock leveler Dubai", "cold storage curtain installation UAE",
      "modular cold room UAE", "prefab cold storage Dubai",
      "cold storage ventilation UAE", "cold storage drainage Dubai",
      "cold storage condensation control UAE", "cold storage cost Dubai",
      "best cold storage contractor UAE", "cold storage company Dubai",
      "temperature mapping cold storage UAE", "cold storage validation Dubai",
      "vaccine cold storage UAE", "floral cold storage Dubai"
    ],
    faqs: [
      { question: "What temperature ranges can you achieve?", answer: "Our facilities cover the full range: frozen storage (-40°C to -18°C), chilled storage (0°C to +5°C), controlled atmosphere (+8°C to +15°C), and pharmaceutical storage (+2°C to +8°C)." },
      { question: "How long does cold storage construction take?", answer: "A standard cold storage facility takes 6-12 months depending on size and complexity. Modular/prefab solutions can be deployed in 3-6 months." },
      { question: "What food safety certifications do your facilities support?", answer: "Our facilities are designed for HACCP, ISO 22000, FSSC 22000, and UAE food safety authority compliance. We ensure all food contact surfaces and processes meet international standards." },
      { question: "Can you build multi-temperature facilities?", answer: "Yes, we specialize in multi-temperature facilities with separate zones for frozen, chilled, and ambient storage, all within a single building footprint." }
    ]
  },
  {
    slug: "industrial-retrofit-plant-modernization",
    title: "Industrial Retrofit & Plant Modernization",
    shortTitle: "Retrofit & Modernization",
    description: "Industrial retrofit and plant modernization services across the UAE. Upgrade aging facilities with modern technology, improved efficiency, and regulatory compliance in Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions transforms aging industrial facilities into modern, efficient, and compliant operations. Our retrofit and modernization services upgrade every aspect — from structural reinforcement and MEP systems to automation and energy efficiency — extending facility life and boosting productivity.",
    metaTitle: "Industrial Retrofit & Plant Modernization UAE | Factory Upgrade Contractor Dubai",
    metaDescription: "Expert industrial retrofit & plant modernization contractor in UAE. Factory upgrades, facility modernization & equipment replacement in Dubai, Abu Dhabi & Sharjah.",
    heroImages: [
      { src: "/images/retrofit/hero-1.jpg", alt: "Industrial plant modernization with new automation equipment" },
      { src: "/images/retrofit/hero-2.jpg", alt: "Factory retrofit and equipment upgrade in progress" },
      { src: "/images/retrofit/hero-3.jpg", alt: "Plant modernization construction works" }
    ],
    galleryImages: [
      { src: "/images/retrofit/gallery-1.jpg", alt: "Automation upgrade", caption: "Industry 4.0 Automation Upgrade" },
      { src: "/images/retrofit/gallery-2.jpg", alt: "Modernized factory floor", caption: "Modernized Production Floor" },
      { src: "/images/retrofit/gallery-3.jpg", alt: "Structural retrofit", caption: "Structural Reinforcement" },
      { src: "/images/retrofit/gallery-4.jpg", alt: "Electrical panel upgrade", caption: "MV/LV Electrical Upgrade" },
      { src: "/images/retrofit/gallery-5.jpg", alt: "HVAC systems", caption: "HVAC Replacement & Optimization" },
      { src: "/images/retrofit/gallery-6.jpg", alt: "Crane upgrade", caption: "Crane & Conveyor Upgrades" },
      { src: "/images/retrofit/gallery-7.jpg", alt: "Roof replacement", caption: "Cladding & Roof Replacement" },
      { src: "/images/retrofit/gallery-8.jpg", alt: "Safety upgrade", caption: "Fire Safety System Upgrade" }
    ],
    features: [
      "Structural assessment & reinforcement",
      "MEP system upgrades & replacement",
      "Energy efficiency retrofits",
      "Production line modernization",
      "Automation & Industry 4.0 upgrades",
      "Fire safety system upgrades",
      "Electrical system modernization (MV/LV)",
      "HVAC replacement & optimization",
      "Roof & cladding replacement",
      "Environmental compliance upgrades"
    ],
    process: [
      { step: "Condition Assessment", description: "Comprehensive facility audit covering structural integrity, MEP systems, safety compliance, and operational efficiency." },
      { step: "Modernization Planning", description: "Prioritized upgrade roadmap balancing operational continuity, budget, and compliance requirements." },
      { step: "Engineering & Design", description: "Detailed engineering for all retrofit works, including temporary works design for live facility upgrades." },
      { step: "Phased Construction", description: "Staged execution to minimize production disruption, with night/weekend shift options." },
      { step: "Systems Integration", description: "New system integration with existing infrastructure, including controls migration and testing." },
      { step: "Recommissioning", description: "Performance verification, operator training on new systems, and documentation updates." }
    ],
    benefits: [
      "Minimal production downtime",
      "Extended facility lifespan",
      "Improved energy efficiency (20-40% savings)",
      "Updated regulatory compliance",
      "Enhanced safety & working conditions",
      "Phased investment options"
    ],
    keywords: [
      "industrial retrofit UAE", "plant modernization Dubai", "factory upgrade contractor Abu Dhabi",
      "facility renovation UAE", "industrial refurbishment Dubai", "plant expansion UAE",
      "factory electrical upgrade Dubai", "HVAC retrofit industrial UAE",
      "fire safety upgrade factory Dubai", "structural reinforcement UAE",
      "roof replacement industrial Dubai", "cladding replacement UAE",
      "MEP upgrade industrial Dubai", "plant automation upgrade UAE",
      "Industry 4.0 retrofit Dubai", "smart factory upgrade UAE",
      "production line upgrade Dubai", "machinery replacement contractor UAE",
      "energy efficiency retrofit Dubai", "LED lighting upgrade industrial UAE",
      "power distribution upgrade Dubai", "transformer replacement UAE",
      "process optimization Dubai", "plant turnaround contractor UAE",
      "shutdown maintenance UAE", "plant life extension Dubai",
      "industrial painting contractor UAE", "epoxy flooring industrial Dubai",
      "crane upgrade UAE", "conveyor system upgrade Dubai",
      "compressed air system upgrade UAE", "steam system modernization Dubai",
      "boiler replacement UAE", "cooling tower replacement Dubai",
      "pump replacement industrial UAE", "motor replacement program Dubai",
      "electrical panel upgrade UAE", "PLC migration Dubai",
      "SCADA upgrade industrial UAE", "instrumentation upgrade Dubai",
      "safety system upgrade UAE", "explosion proof upgrade Dubai",
      "environmental compliance upgrade UAE", "waste management system Dubai",
      "dust collection system upgrade UAE", "ventilation upgrade industrial Dubai",
      "factory floor renovation UAE", "industrial insulation upgrade Dubai",
      "plant modernization cost UAE", "best retrofit contractor Dubai",
      "industrial upgrade company Sharjah", "facility improvement contractor UAE"
    ],
    faqs: [
      { question: "Can you work while our plant is still operating?", answer: "Yes, we specialize in live facility retrofits with phased execution, temporary works, and night/weekend shifts to minimize production disruption." },
      { question: "How much can energy retrofits save?", answer: "Typical energy efficiency retrofits deliver 20-40% reduction in energy consumption through HVAC optimization, LED lighting, VFDs, power factor correction, and insulation upgrades." },
      { question: "Do you handle regulatory compliance upgrades?", answer: "Yes, we bring facilities up to current UAE civil defense, environmental, and industrial safety standards, including fire protection, electrical codes, and emissions requirements." },
      { question: "What is the typical ROI for plant modernization?", answer: "Most modernization investments achieve ROI within 2-5 years through energy savings, increased production efficiency, reduced maintenance costs, and extended facility life." }
    ]
  },
  {
    slug: "ev-charging-infrastructure-rollouts",
    title: "EV Charging Infrastructure Rollouts",
    shortTitle: "EV Charging Infrastructure",
    description: "Large-scale EV charging infrastructure rollout and construction services across the UAE. Fast chargers, ultra-rapid stations, and fleet charging depots for Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions delivers large-scale EV charging infrastructure rollouts across the UAE. From highway fast-charging stations to fleet depot electrification, we design, build, and commission the charging networks that power the UAE's electric mobility future.",
    metaTitle: "EV Charging Infrastructure Rollouts UAE | Charging Station Construction Dubai",
    metaDescription: "Large-scale EV charging infrastructure construction in UAE. Fast chargers, ultra-rapid stations & fleet depot electrification in Dubai, Abu Dhabi & Sharjah. Get started today.",
    heroImages: [
      { src: "/images/ev/hero-1.jpg", alt: "EV charging station with electric vehicles plugged in" },
      { src: "/images/ev/hero-2.jpg", alt: "Ultra-rapid DC fast charging infrastructure" },
      { src: "/images/ev/hero-3.jpg", alt: "Solar-integrated EV charging canopy" }
    ],
    galleryImages: [
      { src: "/images/ev/gallery-1.jpg", alt: "EV charging hub", caption: "Ultra-Rapid Charging Hub — Dubai" },
      { src: "/images/ev/gallery-2.jpg", alt: "DC fast chargers", caption: "350kW DC Fast Chargers" },
      { src: "/images/ev/gallery-3.jpg", alt: "Solar canopy charging", caption: "Solar Canopy Station" },
      { src: "/images/ev/gallery-4.jpg", alt: "Electrical infrastructure", caption: "Transformer & Grid Connection" },
      { src: "/images/ev/gallery-5.jpg", alt: "Battery storage", caption: "Battery Buffer Storage" },
      { src: "/images/ev/gallery-6.jpg", alt: "Cable installation", caption: "Power Cable Installation" },
      { src: "/images/ev/gallery-7.jpg", alt: "Civil works", caption: "Foundation & Canopy Works" },
      { src: "/images/ev/gallery-8.jpg", alt: "Charging management", caption: "Smart Charging Management" }
    ],
    features: [
      "Ultra-rapid charging station construction (350kW+)",
      "DC fast charger installation (50-150kW)",
      "Fleet charging depot design & build",
      "Electrical infrastructure upgrades for EV",
      "Solar-integrated EV charging stations",
      "Battery buffer storage for charging",
      "Charging management software integration",
      "Canopy & civil works construction",
      "Grid connection & transformer installation",
      "Payment system & user interface setup"
    ],
    process: [
      { step: "Site Assessment & Planning", description: "Location analysis, power availability assessment, demand modeling, and site layout optimization." },
      { step: "Electrical Engineering & Design", description: "Power distribution design, transformer sizing, cable routing, and protection system engineering." },
      { step: "Equipment Procurement", description: "Sourcing of chargers, transformers, switchgear, cables, and ancillary equipment." },
      { step: "Civil & Electrical Construction", description: "Foundation works, canopy construction, cable installation, transformer commissioning, and charger mounting." },
      { step: "System Integration & Testing", description: "Charger commissioning, network connectivity, payment system testing, and load management verification." },
      { step: "Go-Live & Operations Support", description: "Public launch, monitoring setup, and ongoing technical support." }
    ],
    benefits: [
      "Scalable network architecture",
      "DEWA/ADDC utility coordination",
      "Future-proof power infrastructure",
      "Smart load management capabilities",
      "Solar + battery hybrid options",
      "Compliance with UAE EV standards"
    ],
    keywords: [
      "EV charging station construction UAE", "EV charger installation Dubai",
      "electric vehicle infrastructure Abu Dhabi", "fast charger installation UAE",
      "DC fast charging station Dubai", "ultra rapid charger UAE",
      "fleet charging depot construction Dubai", "EV charging network UAE",
      "EV charging contractor Dubai", "electric vehicle charging Sharjah",
      "Tesla charger installation UAE", "CCS charger installation Dubai",
      "CHAdeMO charger UAE", "Type 2 charger installation Dubai",
      "EV charging electrical contractor UAE", "transformer installation EV charging Dubai",
      "solar EV charging station UAE", "green EV charging Dubai",
      "battery storage EV charging UAE", "smart charging installation Dubai",
      "EV charging management system UAE", "OCPP charger installation Dubai",
      "charging station canopy construction UAE", "EV parking facility Dubai",
      "commercial EV charging UAE", "workplace EV charging Dubai",
      "residential EV charging infrastructure UAE", "hotel EV charging Dubai",
      "shopping mall EV charging UAE", "highway EV charging station Dubai",
      "rest stop EV charger UAE", "petrol station EV charging Dubai",
      "bus depot electrification UAE", "taxi fleet charging Dubai",
      "logistics fleet EV charging UAE", "delivery van charging Dubai",
      "EV charging grid connection UAE", "EV infrastructure project management Dubai",
      "DEWA approved EV contractor", "FEWA EV charging installation",
      "SEWA EV charger contractor", "EV charging civil works UAE",
      "EV charging station cost Dubai", "best EV charging contractor UAE",
      "EV infrastructure company Dubai", "EV charging rollout Sharjah",
      "electric mobility infrastructure UAE", "V2G installation Dubai",
      "vehicle to grid UAE", "EV charging hub construction Dubai",
      "multi-charger station UAE", "EV charging cluster installation Dubai"
    ],
    faqs: [
      { question: "What types of EV chargers do you install?", answer: "We install all types — from 7kW AC wallbox chargers to 350kW+ ultra-rapid DC chargers. We work with all major brands including ABB, Siemens, Tritium, Delta, and others." },
      { question: "How long does it take to build a charging station?", answer: "A single-site installation takes 4-8 weeks. Large-scale network rollouts of 50-100+ sites typically take 6-12 months with phased deployment." },
      { question: "Do you handle the utility connection?", answer: "Yes, we manage the complete process from DEWA/ADDC/FEWA/SEWA applications to transformer installation, grid connection, and metering." },
      { question: "Can you integrate solar power with charging stations?", answer: "Absolutely. We offer solar canopy designs with battery buffer storage for reduced grid dependency and green energy charging." }
    ]
  },
  {
    slug: "healthcare-facility-construction",
    title: "Healthcare Facility Construction & Expansion",
    shortTitle: "Healthcare Construction",
    description: "Healthcare facility construction and hospital expansion services across the UAE. Hospitals, clinics, medical centers, and specialized healthcare infrastructure in Dubai, Abu Dhabi, and Sharjah.",
    heroDescription: "GoPlnr Industrial Solutions constructs world-class healthcare facilities across the UAE. From greenfield hospitals to medical center expansions, we deliver compliant, patient-centered environments built to the highest standards of infection control, safety, and operational efficiency.",
    metaTitle: "Healthcare Facility Construction UAE | Hospital Builder & Expansion Dubai",
    metaDescription: "Expert healthcare facility construction & hospital expansion contractor in UAE. Hospitals, clinics, medical centers in Dubai, Abu Dhabi & Sharjah. DHA/HAAD compliant.",
    heroImages: [
      { src: "/images/healthcare/hero-1.jpg", alt: "Modern hospital building with glass facade" },
      { src: "/images/healthcare/hero-2.jpg", alt: "Hospital interior corridor with modern medical equipment" },
      { src: "/images/healthcare/hero-3.jpg", alt: "Healthcare facility construction and expansion" }
    ],
    galleryImages: [
      { src: "/images/healthcare/gallery-1.jpg", alt: "Hospital exterior", caption: "200-Bed Hospital — Abu Dhabi" },
      { src: "/images/healthcare/gallery-2.jpg", alt: "Hospital corridor", caption: "Modern Healthcare Interiors" },
      { src: "/images/healthcare/gallery-3.jpg", alt: "Medical facility", caption: "Medical Center Construction" },
      { src: "/images/healthcare/gallery-4.jpg", alt: "Operating theater", caption: "Operating Theater Fit-Out" },
      { src: "/images/healthcare/gallery-5.jpg", alt: "ICU ward", caption: "ICU & Critical Care Wing" },
      { src: "/images/healthcare/gallery-6.jpg", alt: "Diagnostic imaging", caption: "Radiology Suite with Shielding" },
      { src: "/images/healthcare/gallery-7.jpg", alt: "Medical gas systems", caption: "MGPS Installation" },
      { src: "/images/healthcare/gallery-8.jpg", alt: "Healthcare HVAC", caption: "Healthcare HVAC & Clean Rooms" }
    ],
    features: [
      "Hospital construction (greenfield & expansion)",
      "Medical center & polyclinic construction",
      "Operating theater & ICU fit-out",
      "Medical gas pipeline systems (MGPS)",
      "Cleanroom & sterile environment construction",
      "Radiology & imaging suite shielding",
      "Healthcare HVAC & pressure management",
      "Nurse call & patient monitoring integration",
      "Infection control compliant design",
      "Healthcare IT & smart hospital systems"
    ],
    process: [
      { step: "Healthcare Planning & Programming", description: "Departmental planning, patient flow analysis, and functional brief development aligned with healthcare standards." },
      { step: "Design & Regulatory Approval", description: "Architectural and engineering design compliant with DHA/DOH/MOH requirements and international healthcare standards." },
      { step: "Specialized Procurement", description: "Sourcing of medical gas systems, healthcare HVAC, radiation shielding, and specialized building materials." },
      { step: "Construction & MEP", description: "Building construction with stringent quality control for healthcare environments, including clean room protocols." },
      { step: "Medical Systems Installation", description: "Medical gas, nurse call, patient monitoring, healthcare IT, and medical equipment infrastructure." },
      { step: "Commissioning & Licensing", description: "DHA/DOH facility licensing support, infection control validation, and operational readiness." }
    ],
    benefits: [
      "DHA/DOH/MOH regulatory compliance",
      "JCI accreditation-ready design",
      "Infection control optimized construction",
      "Energy-efficient healthcare HVAC",
      "Patient-centered design approach",
      "Phased expansion capability"
    ],
    keywords: [
      "hospital construction UAE", "healthcare facility builder Dubai",
      "medical center construction Abu Dhabi", "clinic construction UAE",
      "hospital expansion contractor Dubai", "healthcare EPC UAE",
      "polyclinic construction Dubai", "day surgery center UAE",
      "operating theater construction Dubai", "ICU construction UAE",
      "hospital fit-out contractor Dubai", "medical gas installation UAE",
      "MGPS installation hospital Dubai", "cleanroom hospital construction UAE",
      "radiology suite construction Dubai", "MRI room shielding UAE",
      "CT room construction Dubai", "laboratory construction UAE",
      "pharmacy fit-out hospital Dubai", "hospital HVAC contractor UAE",
      "healthcare ventilation Dubai", "negative pressure room UAE",
      "isolation room construction Dubai", "nurse call system installation UAE",
      "patient monitoring system Dubai", "hospital IT infrastructure UAE",
      "smart hospital construction Dubai", "hospital electrical contractor UAE",
      "hospital plumbing contractor Dubai", "hospital fire safety UAE",
      "DHA approved contractor Dubai", "DOH approved contractor Abu Dhabi",
      "MOH healthcare construction UAE", "JCI compliant hospital UAE",
      "hospital renovation contractor Dubai", "emergency department construction UAE",
      "dental clinic construction Dubai", "dialysis center UAE",
      "rehabilitation center construction Dubai", "mental health facility UAE",
      "fertility clinic construction Dubai", "veterinary hospital UAE",
      "hospital kitchen fit-out Dubai", "hospital laundry facility UAE",
      "hospital parking structure Dubai", "ambulance bay construction UAE",
      "hospital helipad construction Dubai", "medical storage facility UAE",
      "hospital waste management Dubai", "healthcare project management UAE",
      "best hospital contractor Dubai", "healthcare construction company Sharjah",
      "hospital construction cost UAE", "medical facility turnkey Dubai"
    ],
    faqs: [
      { question: "Do you build hospitals in compliance with DHA/DOH standards?", answer: "Yes, all our healthcare construction projects are designed and built in full compliance with DHA (Dubai), DOH (Abu Dhabi), and MOH (Federal) requirements, as well as international standards like JCI." },
      { question: "How long does hospital construction take?", answer: "A typical 100-200 bed hospital takes 24-36 months. Medical centers and clinics take 8-14 months. Expansion projects vary based on scope and operational constraints." },
      { question: "Can you build specialized medical facilities?", answer: "Yes, we build operating theaters, ICUs, radiology suites with shielding, laboratories, cleanrooms, catheterization labs, and all types of specialized medical environments." },
      { question: "Do you handle medical gas and specialized systems?", answer: "Yes, our scope includes medical gas pipeline systems (MGPS), nurse call systems, patient monitoring, healthcare IT infrastructure, and all specialized hospital systems." }
    ]
  }
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

export const abuDhabiAreas = [
  "Al Reem Island", "Saadiyat Island", "Yas Island", "Al Maryah Island", "Khalifa City",
  "Mohammed Bin Zayed City", "Musaffah Industrial Area", "ICAD", "KIZAD",
  "Al Shamkha", "Al Falah", "Al Rahba", "Baniyas", "Al Wathba",
  "Madinat Zayed", "Al Ain Industrial Area", "Mussafah", "Hamdan Street Area",
  "Tourist Club Area", "Corniche Area"
]

export const dubaiAreas = [
  "Jebel Ali Free Zone (JAFZA)", "Dubai Industrial City", "Dubai Investment Park (DIP)",
  "Dubai South", "Al Quoz Industrial Area", "Dubai Silicon Oasis",
  "Dubai Internet City", "Dubai Healthcare City", "Dubai Marina",
  "Business Bay", "Downtown Dubai", "Deira", "Bur Dubai",
  "Jumeirah Village", "Dubai Production City", "Dubai Logistics City",
  "Dubai World Central", "DAFZA", "Ras Al Khor Industrial",
  "Palm Jumeirah"
]

export const sharjahAreas = [
  "Sharjah Industrial Area", "Hamriyah Free Zone", "Sharjah Airport Free Zone (SAIF Zone)",
  "Al Sajaa Industrial Area", "Industrial Area 1-18", "Al Dhaid",
  "Kalba", "Khorfakkan", "Al Nahda Sharjah", "Al Taawun",
  "University City Sharjah", "Sharjah Waterfront", "Al Majaz",
  "Muwaileh Commercial", "Al Zahia", "Tilal City"
]
