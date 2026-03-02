"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Building2, MessageCircle } from "lucide-react"
import { services } from "@/lib/services"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0c2340] border-b border-[#1e3a5f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-[#f97316]" />
            <div>
              <span className="text-xl font-bold text-white tracking-tight">GoPlnr</span>
              <span className="hidden sm:inline text-xs text-[#94a3b8] block leading-none">Industrial Solutions UAE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-white hover:text-[#f97316] transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-[#f97316] transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-80 max-h-96 overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f97316]/10 hover:text-[#0c2340] transition-colors"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="px-3 py-2 text-sm font-medium text-white hover:text-[#f97316] transition-colors">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-white hover:text-[#f97316] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#25d366] hover:text-[#20ba5a] transition-colors font-medium">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0c2340] border-t border-[#1e3a5f]">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-white hover:text-[#f97316]">
              Home
            </Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-white hover:text-[#f97316]"
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-[#94a3b8] hover:text-[#f97316]"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-white hover:text-[#f97316]">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-white hover:text-[#f97316]">
              Contact
            </Link>

            <div className="pt-4 border-t border-[#1e3a5f]">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-3 rounded-md text-sm font-semibold"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
