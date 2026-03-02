export default function AboutLoading() {
  return (
    <main className="min-h-screen animate-pulse">
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="bg-[#0c2340] h-[520px] relative">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-6 w-24 bg-white/10 rounded-full" />
              <div className="h-12 w-full bg-white/10 rounded-lg" />
              <div className="h-12 w-3/4 bg-white/10 rounded-lg" />
              <div className="h-5 w-full bg-white/10 rounded-lg" />
              <div className="h-5 w-2/3 bg-white/10 rounded-lg" />
            </div>
            <div className="hidden lg:block">
              <div className="h-[380px] bg-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="h-10 w-20 bg-gray-200 rounded mx-auto" />
              <div className="h-4 w-28 bg-gray-100 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-8 w-40 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
          </div>
          <div className="space-y-6">
            <div className="h-36 bg-gray-50 rounded-xl border border-gray-200" />
            <div className="h-36 bg-gray-50 rounded-xl border border-gray-200" />
          </div>
        </div>
      </div>
    </main>
  )
}
