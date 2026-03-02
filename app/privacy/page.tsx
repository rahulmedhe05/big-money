import type { Metadata } from "next"
import { Breadcrumb } from "@/components/industrial/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for GoPlnr Industrial Solutions UAE. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <main className="min-h-screen bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#0c2340] mb-8">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-400">Last updated: March 2, 2026</p>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">1. Information We Collect</h2>
              <p>GoPlnr Industrial Solutions UAE (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects information you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Submit a consultation request or booking form</li>
                <li>Contact us via phone, email, or our website</li>
                <li>Request a project quote or feasibility assessment</li>
              </ul>
              <p>This information may include your name, company name, email address, phone number, project details, and budget range.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">2. How We Use Your Information</h2>
              <p>We use the collected information exclusively for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responding to your project consultation requests</li>
                <li>Providing cost estimates, feasibility assessments, and proposals</li>
                <li>Communicating about your project requirements</li>
                <li>Improving our services and website experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">3. Data Protection</h2>
              <p>We implement industry-standard security measures to protect your personal information. Your project details and commercial information are treated as strictly confidential. We offer Non-Disclosure Agreements (NDAs) for sensitive projects upon request.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. Information may be shared only with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Our internal project teams for consultation purposes</li>
                <li>Legal authorities when required by UAE law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">5. Cookies & Analytics</h2>
              <p>Our website uses essential cookies and analytics tools to improve user experience and understand site usage. We use Vercel Analytics for anonymous, privacy-focused usage statistics.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information held by us. To exercise these rights, contact us at info@goplnr.com.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#0c2340] mt-8 mb-3">7. Contact</h2>
              <p>For privacy-related inquiries, contact:</p>
              <p>GoPlnr Industrial Solutions UAE<br />Business Bay, Dubai, UAE<br />Email: info@goplnr.com<br />WhatsApp: <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer" className="text-[#25d366] hover:underline">Message us</a></p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
