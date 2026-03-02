export default function ServiceLoading() {
  return (
    <main className="min-h-screen animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-4 w-64 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="bg-[#0c2340] h-[520px] relative">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-6 w-48 bg-white/10 rounded-full" />
              <div className="h-12 w-full bg-white/10 rounded-lg" />
              <div className="h-12 w-2/3 bg-white/10 rounded-lg" />
              <div className="h-5 w-full bg-white/10 rounded-lg" />
              <div className="h-5 w-3/4 bg-white/10 rounded-lg" />
              <div className="flex gap-4 mt-6">
                <div className="h-14 w-48 bg-[#f97316]/30 rounded-lg" />
                <div className="h-14 w-40 bg-white/10 rounded-lg" />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="h-[380px] bg-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Features skeleton */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4" />
          <div className="h-5 w-96 bg-gray-100 rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="h-4 w-full bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-72 bg-gray-200 rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 space-y-3">
                <div className="h-10 w-12 bg-gray-100 rounded" />
                <div className="h-5 w-2/3 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
