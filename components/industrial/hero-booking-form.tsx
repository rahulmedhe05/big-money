"use client"

import { useState } from "react"
import { services } from "@/lib/services"
import { Send, CheckCircle, MessageCircle } from "lucide-react"

const budgetRanges = [
  "AED 5 – 10 Million",
  "AED 10 – 30 Million",
  "AED 30 – 50 Million",
  "AED 50 – 100 Million",
  "AED 100+ Million",
]

export function HeroBookingForm({ preselectedService }: { preselectedService?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Hero form submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 lg:p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-sm text-gray-300">
          Our team will contact you within 24 hours with a preliminary assessment.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-5 lg:p-7"
    >
      <div className="mb-5">
        <h3 className="text-lg font-bold text-white mb-1">Get a Free Quote</h3>
        <p className="text-xs text-gray-300">Receive a project assessment within 48 hours</p>
      </div>

      <div className="space-y-3">
        {/* Name */}
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name *"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Business Email *"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
        />

        {/* Service */}
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all [&>option]:text-gray-900"
        >
          <option value="">Select Service *</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.shortTitle}</option>
          ))}
        </select>

        {/* Budget */}
        <select
          name="budget"
          required
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all [&>option]:text-gray-900"
        >
          <option value="">Project Budget *</option>
          {budgetRanges.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        {/* Message */}
        <textarea
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Brief project description (optional)"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors"
      >
        <Send className="h-4 w-4" />
        Request Free Consultation
      </button>

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400">
        <MessageCircle className="h-3 w-3 text-[#25d366]" />
        Or <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="text-[#25d366] font-semibold hover:underline">message us on WhatsApp</a>
      </div>
    </form>
  )
}
