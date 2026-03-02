import type { Metadata } from "next"
import { Breadcrumb } from "@/components/industrial/breadcrumb"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for GoPlnr Industrial Solutions UAE. Read our terms and conditions for EPC project consultations and services.",
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
      <main className="min-h-screen bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#0c2340] mb-8">Terms of Service</h1>
          <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-400">Last updated: March 2, 2026</p>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the GoPlnr Industrial Solutions UAE website (&quot;goplnr.ae&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">2. Services Description</h2>
              <p>GoPlnr Industrial Solutions UAE provides turnkey EPC (Engineering, Procurement, and Construction) services for industrial and infrastructure projects across the United Arab Emirates. Our website provides information about our services and allows potential clients to request project consultations.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">3. Consultation Requests</h2>
              <p>Consultation requests submitted through our website are non-binding expressions of interest. They do not constitute a contractual obligation on either party. Formal project agreements are governed by separate EPC contracts negotiated on a project-by-project basis.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">4. Project Estimates</h2>
              <p>Any cost estimates, timelines, or budget ranges mentioned on our website are indicative only and do not constitute binding quotations. Actual project costs and timelines are determined through detailed engineering and procurement assessments and are formalized in written EPC proposals.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">5. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, design, and layout — is the intellectual property of GoPlnr Industrial Solutions UAE and is protected by UAE and international copyright laws. No content may be reproduced without prior written consent.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">6. Confidentiality</h2>
              <p>We treat all project information shared through our website forms as confidential. For projects requiring enhanced confidentiality protections, we offer formal Non-Disclosure Agreements (NDAs) upon request.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">7. Limitation of Liability</h2>
              <p>GoPlnr Industrial Solutions UAE makes no warranties regarding the accuracy or completeness of information presented on this website. We shall not be liable for any damages arising from the use of or inability to use this website.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">8. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">9. Contact</h2>
              <p>For any questions regarding these terms, contact:</p>
              <p>GoPlnr Industrial Solutions UAE<br />Business Bay, Dubai, UAE<br />Email: info@goplnr.ae<br />WhatsApp: <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="text-[#25d366] hover:underline">Message us</a></p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
