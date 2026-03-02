export default function TermsLoading() {
  return (
    <main className="min-h-screen bg-white animate-pulse">
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-4 w-48 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="h-10 w-56 bg-gray-200 rounded" />
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-6 w-40 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
