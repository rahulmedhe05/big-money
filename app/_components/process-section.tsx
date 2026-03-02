export function ProcessSection() {
  return (
    <section className="industrial-gradient text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our EPC Project Delivery Process
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A proven, systematic approach to delivering complex industrial projects — on time, within budget, and to specification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Feasibility & Design", desc: "Site assessment, master planning, detailed engineering, and BIM-enabled design development." },
            { step: "02", title: "Procurement", desc: "Strategic global sourcing, vendor qualification, and supply chain management for all materials and equipment." },
            { step: "03", title: "Construction", desc: "Full-scale construction with rigorous quality control, HSE management, and schedule adherence." },
            { step: "04", title: "Commissioning", desc: "Integrated systems testing, performance verification, training, and operational handover." },
          ].map((item) => (
            <div key={item.step} className="relative bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="text-5xl font-bold text-[#f97316]/30 mb-2">{item.step}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
