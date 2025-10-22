"use client"

export default function Slide2() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Timeline */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-white mb-12">About & Education</h2>

          <div className="space-y-6">
            {[
              { year: "2024", title: "Senior Designer", desc: "Leading design initiatives" },
              { year: "2023", title: "Full Stack Developer", desc: "Building scalable solutions" },
              { year: "2022", title: "UI/UX Specialist", desc: "Crafting user experiences" },
              { year: "2021", title: "Started Journey", desc: "Passion for design & code" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-copper mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="text-copper font-semibold">{item.year}</p>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bio with floating animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-copper-light/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-copper/20">
            <p className="text-gray-200 leading-relaxed mb-6">
              I'm a passionate designer and developer who believes in the power of thoughtful design combined with
              robust engineering. My journey spans across multiple disciplines, always seeking the intersection of
              aesthetics and functionality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not designing or coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the community.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              {["Design", "Development", "Motion", "Strategy"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-copper/20 text-copper rounded-full text-sm font-medium border border-copper/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
