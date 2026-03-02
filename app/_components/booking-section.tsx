import { BookingForm } from "@/components/industrial/booking-form"
import { CheckCircle, MessageCircle } from "lucide-react"

export function BookingSection() {
  return (
    <section className="bg-white py-16 lg:py-24" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you are in the early planning stages or ready to break ground, our team is ready to
              provide an expert assessment of your project requirements.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Free no-obligation project consultation",
                "Preliminary cost estimation within 48 hours",
                "Feasibility assessment and recommendations",
                "Direct access to senior project engineers",
                "NDA available for confidential projects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0c2340] mb-2">Prefer to chat?</h3>
              <p className="text-sm text-gray-600 mb-3">Message our project team directly:</p>
              <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-bold text-[#25d366] hover:text-[#20ba5a] transition-colors">
                <MessageCircle className="h-5 w-5" /> Send Message on WhatsApp
              </a>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
