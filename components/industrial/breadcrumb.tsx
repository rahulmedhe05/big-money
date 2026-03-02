import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://goplnr.ae${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1.5 text-sm flex-wrap">
            <li>
              <Link href="/" className="text-gray-500 hover:text-[#0c2340] transition-colors flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>
            {items.slice(1).map((item, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="text-gray-500 hover:text-[#0c2340] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#0c2340] font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
