"use client"

import { useState } from "react"
import { services } from "@/lib/services"
import { Send, CheckCircle } from "lucide-react"

const budgetRanges = [
  "AED 5 – 10 Million",
  "AED 10 – 30 Million",
  "AED 30 – 50 Million",
  "AED 50 – 100 Million",
  "AED 100+ Million",
]

const projectTimelines = [
  "Within 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12 – 24 months",
  "24+ months",
]

export function BookingForm({ preselectedService }: { preselectedService?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    budget: "",
    timeline: "",
    location: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to API endpoint
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 lg:p-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#0c2340] mb-2">Consultation Request Received</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for your interest. Our project team will review your requirements and contact you within 24 business hours with a preliminary assessment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-10">
      <h3 className="text-2xl font-bold text-[#0c2340] mb-2">Book a Free Project Consultation</h3>
      <p className="text-gray-500 text-sm mb-8">
        Tell us about your project. Our engineering team will provide a no-obligation feasibility assessment and preliminary cost estimate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
            placeholder="Your company"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
            placeholder="you@company.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all"
            placeholder="+971 XX XXX XXXX"
          />
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Required *</label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range (AED) *</label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Project Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">Desired Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select timeline</option>
            {projectTimelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">Project Location</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select emirate</option>
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Ajman">Ajman</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            <option value="Fujairah">Fujairah</option>
            <option value="Umm Al Quwain">Umm Al Quwain</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all resize-none"
          placeholder="Describe your project: site location, approximate size, special requirements, etc."
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full md:w-auto flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors"
      >
        <Send className="h-4 w-4" />
        Submit Consultation Request
      </button>

      <p className="mt-3 text-xs text-gray-400">
        By submitting, you agree to our privacy policy. We will never share your information with third parties.
      </p>
    </form>
  )
}
