"use client"

export default function Slide3() {
  const projects = [
    {
      title: "Motion Design System",
      desc: "Comprehensive animation library",
      icon: "✨",
    },
    {
      title: "Interactive Dashboard",
      desc: "Real-time data visualization",
      icon: "📊",
    },
    {
      title: "E-Commerce Platform",
      desc: "Seamless shopping experience",
      icon: "🛍️",
    },
    {
      title: "AI Integration Suite",
      desc: "Intelligent automation tools",
      icon: "🤖",
    },
  ]

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          <span className="bg-gradient-to-r from-copper to-copper-light bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-300 mb-16">Showcasing innovative work across design and development</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-copper/20 hover:border-copper/50 transition-all duration-300 hover:shadow-lg hover:shadow-copper/20 cursor-pointer hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-copper/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-copper text-sm font-semibold group-hover:gap-3 transition-all">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
