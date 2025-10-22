"use client"

import Link from "next/link"

export default function Slide4() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Explore?</h2>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Dive deeper into my work, experiments, and creative explorations. Discover the stories behind each project.
        </p>

        <Link
          href="/explore"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-copper to-copper-light text-black font-bold rounded-lg hover:shadow-lg hover:shadow-copper/50 transition-all duration-300 hover:scale-105 group"
        >
          Explore More
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        <div className="mt-16 flex justify-center gap-6">
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-copper transition-colors text-sm font-medium">
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
