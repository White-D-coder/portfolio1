"use client"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-white">
      <div className="flex flex-col items-center gap-8">
        {/* Glowing copper pulse animation */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-copper to-copper-light animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-copper-dark to-copper flex items-center justify-center">
            <div className="text-3xl font-bold text-white">D</div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-xl font-light text-white tracking-widest">Loading</h2>
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-1 h-1 rounded-full bg-copper animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-1 h-1 rounded-full bg-copper animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-1 h-1 rounded-full bg-copper animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
