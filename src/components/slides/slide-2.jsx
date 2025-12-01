// "use client"

// export default function Slide2() {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left: Timeline */}
//         <div className="space-y-8">
//           <h2 className="text-5xl font-bold text-white mb-12">About & Education</h2>

//           <div className="space-y-6">
//             {[
//               { year: "2024", title: "Senior Designer", desc: "Leading design initiatives" },
//               { year: "2023", title: "Full Stack Developer", desc: "Building scalable solutions" },
//               { year: "2022", title: "UI/UX Specialist", desc: "Crafting user experiences" },
//               { year: "2021", title: "Started Journey", desc: "Passion for design & code" },
//             ].map((item, i) => (
//               <div key={i} className="flex gap-4 group cursor-pointer">
//                 <div className="w-2 h-2 rounded-full bg-copper mt-2 group-hover:scale-150 transition-transform"></div>
//                 <div>
//                   <p className="text-copper font-semibold">{item.year}</p>
//                   <p className="text-white font-semibold">{item.title}</p>
//                   <p className="text-gray-300 text-sm">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Bio with floating animation */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-copper-light/20 rounded-2xl blur-2xl"></div>
//           <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-copper/20">
//             <p className="text-gray-200 leading-relaxed mb-6">
//               I'm a passionate designer and developer who believes in the power of thoughtful design combined with
//               robust engineering. My journey spans across multiple disciplines, always seeking the intersection of
//               aesthetics and functionality.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               When I'm not designing or coding, you'll find me exploring new technologies, contributing to open-source
//               projects, or sharing knowledge with the community.
//             </p>
//             <div className="mt-8 flex gap-3 flex-wrap">
//               {["Design", "Development", "Motion", "Strategy"].map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-4 py-2 bg-copper/20 text-copper rounded-full text-sm font-medium border border-copper/30"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
"use client"

import { motion } from "framer-motion"
import { LogoLoop } from "../LogoLoop"
import { GraduationCap, Trophy, Code, Database, Wrench, Sparkles } from "lucide-react"

// Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

export default function Slide2() {
  const educationData = [
    {
      year: "2024 - 2028",
      title: "Bachelor of Engineering",
      institution: "Newton School of Technology (ADYPU), Pune",
      desc: "Computer Science. Grade: 6.67/10.0",
      type: "education",
    },
    {
      year: "2022 - 2023",
      title: "Intermediate (Class XII)",
      institution: "Raisina Bengali School",
      desc: "Grade: 65.3%",
      type: "education",
    },
  ]

  const achievementData = [
    {
      year: "2025",
      title: "Hackathon Achievements",
      desc: "Bharatiya Antariksh Hackathon (ISRO) & Agentic AI Day. Real-time detection & AI-driven support solutions.",
      type: "achievement",
    },
    {
      year: "2024",
      title: "Smart India Hackathon",
      desc: "Grand Finalist and Runner up in SIH'24. Developed AI-driven bus scheduling system.",
      type: "achievement",
    },
  ]

  const skills = {
    languages: ["JavaScript", "Python", "SQL", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Next.js", "Vue.js", "Electron"],
    tools: ["Git", "MongoDB", "MySQL", "Tailwind", "Framer Motion"],
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden py-20">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 w-full z-10">
        {/* Left Column: Education & Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Education Section */}
          <div className="relative">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-thin text-white tracking-wider">Education</h2>
            </motion.div>

            {/* Glowing Timeline Line */}
            <div className="absolute left-[27px] top-20 bottom-0 w-[2px] bg-gradient-to-b from-zinc-800 via-zinc-700 to-transparent" />

            <div className="space-y-12 ml-4 pl-10 relative">
              {educationData.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[49px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-zinc-600 group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 z-10" />

                  <span className="text-xs font-mono text-zinc-500 mb-2 block tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-medium mb-2">{item.institution}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="relative">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-thin text-white tracking-wider">Achievements</h2>
            </motion.div>

            {/* Glowing Timeline Line */}
            <div className="absolute left-[27px] top-20 bottom-0 w-[2px] bg-gradient-to-b from-zinc-800 via-zinc-700 to-transparent" />

            <div className="space-y-12 ml-4 pl-10 relative">
              {achievementData.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[49px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-zinc-600 group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 z-10" />

                  <span className="text-xs font-mono text-zinc-500 mb-2 block tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Skills (HUD Style) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="lg:pl-8 flex flex-col justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-zinc-950/80 p-10 rounded-3xl border border-zinc-900 overflow-hidden group"
          >
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-zinc-800 rounded-tl-3xl group-hover:border-zinc-600 transition-colors" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-zinc-800 rounded-br-3xl group-hover:border-zinc-600 transition-colors" />

            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-5 h-5 text-zinc-400" />
              <h2 className="text-3xl font-light text-white tracking-wide">About Me</h2>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6 text-lg font-light min-h-[84px]">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {"Full-stack developer skilled in JavaScript, React, Node.js, and scalable architecture. I combine technical expertise with a passion for design to build intelligent, high-performance applications.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01, delay: index * 0.01 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm mb-10 border-l-2 border-zinc-800 pl-4">
              Strong in automation, performance optimization, and DSA with additional expertise in engineering workflows
              like Arduino and CAD.
            </p>

            {/* Categorized Skills - Tech Pills */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4 text-zinc-400">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-zinc-900/50 text-zinc-300 rounded-full text-xs font-medium border border-zinc-800 hover:border-white/40 hover:text-white hover:bg-zinc-800 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-zinc-400">
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Frameworks</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-zinc-900/50 text-zinc-300 rounded-full text-xs font-medium border border-zinc-800 hover:border-white/40 hover:text-white hover:bg-zinc-800 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-zinc-400">
                  <Wrench className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Tools</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-zinc-900/50 text-zinc-300 rounded-full text-xs font-medium border border-zinc-800 hover:border-white/40 hover:text-white hover:bg-zinc-800 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full opacity-50">
        <LogoLoop />
      </div>
    </section>
  )
}