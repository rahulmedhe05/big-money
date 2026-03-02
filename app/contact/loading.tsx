export default function ContactLoading() {
  return (
    <main className="min-h-screen animate-pulse">
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="bg-[#0c2340] h-[420px] relative">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-full bg-white/10 rounded-lg" />
              <div className="h-5 w-full bg-white/10 rounded-lg" />
              <div className="h-5 w-2/3 bg-white/10 rounded-lg" />
            </div>
            <div className="hidden lg:block">
              <div className="h-[320px] bg-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                <div className="space-y-1 flex-1">
                  <div className="h-3 w-16 bg-gray-100 rounded" />
                  <div className="h-5 w-40 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="h-[500px] bg-gray-50 rounded-xl border border-gray-200" />
          </div>
        </div>
      </div>
    </main>
  )
}
