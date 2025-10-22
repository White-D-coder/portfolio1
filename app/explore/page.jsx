"use client"

import Link from "next/link"

export default function ExplorePage() {
  const explorations = [
    {
      title: "Deep Dive: Motion Design",
      desc: "Exploring the principles of fluid animations and micro-interactions",
      date: "2024",
    },
    {
      title: "Experiment: AI-Powered UI",
      desc: "Building interfaces that adapt to user behavior in real-time",
      date: "2024",
    },
    {
      title: "Case Study: Redesign",
      desc: "Complete redesign of a legacy platform with modern UX principles",
      date: "2023",
    },
    {
      title: "Research: Accessibility",
      desc: "Comprehensive study on inclusive design practices",
      date: "2023",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      {/* Header */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-copper rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-copper to-copper-light bg-clip-text text-transparent">
              Explorations
            </span>
          </h1>
          <p className="text-xl text-gray-300">Deep dives, experiments, and beyond</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="space-y-8">
          {explorations.map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-copper/20 hover:border-copper/50 transition-all duration-300 hover:shadow-lg hover:shadow-copper/20 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-copper transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                <span className="text-copper font-semibold whitespace-nowrap ml-4">{item.date}</span>
              </div>

              <div className="flex items-center gap-2 text-copper text-sm font-semibold group-hover:gap-3 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-copper hover:text-copper-light transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
