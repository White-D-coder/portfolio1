// "use client"

// export default function Slide3() {
//   const projects = [
//     {
//       title: "Motion Design System",
//       desc: "Comprehensive animation library",
//       icon: "✨",
//     },
//     {
//       title: "Interactive Dashboard",
//       desc: "Real-time data visualization",
//       icon: "📊",
//     },
//     {
//       title: "E-Commerce Platform",
//       desc: "Seamless shopping experience",
//       icon: "🛍️",
//     },
//     {
//       title: "AI Integration Suite",
//       desc: "Intelligent automation tools",
//       icon: "🤖",
//     },
//   ]

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-8 w-full">
//         <h2 className="text-5xl font-bold text-white text-center mb-4">
//           <span className="bg-gradient-to-r from-copper to-copper-light bg-clip-text text-transparent">Projects</span>
//         </h2>
//         <p className="text-center text-gray-300 mb-16">Showcasing innovative work across design and development</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, i) => (
//             <div
//               key={i}
//               className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-copper/20 hover:border-copper/50 transition-all duration-300 hover:shadow-lg hover:shadow-copper/20 cursor-pointer hover:-translate-y-2"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-copper/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

//               <div className="relative z-10">
//                 <div className="text-4xl mb-4">{project.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-400 text-sm">{project.desc}</p>

//                 <div className="mt-6 flex items-center gap-2 text-copper text-sm font-semibold group-hover:gap-3 transition-all">
//                   View Project
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useState } from "react"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"

// Variants for the main container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Variants for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const ProjectCard = ({ project, i }) => {
  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-zinc-950 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-500 overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 text-3xl group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 shadow-lg">
            {project.icon}
          </div>
          <div className="flex gap-2">
            {/* Action Buttons */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <button className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mb-auto">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors">{project.desc}</p>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 pt-6 border-t border-zinc-900 group-hover:border-zinc-800 transition-colors">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-900/50 rounded-md border border-zinc-800 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Link */}
        <div className="mt-6 flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Slide3() {
  const projects = [
    {
      title: "Ground Station",
      desc: "Real-time telemetry dashboard for UAVs and robotics. Features live map tracking, system alerts, and data replay support.",
      icon: "📡",
      tech: ["Electron", "React", "Node.js", "Google Maps", "MySQL"],
    },
    {
      title: "CanCure",
      desc: "Healthcare consultation platform connecting patients with verified cancer specialists. Includes medication tracking and scheduling.",
      icon: "🏥",
      tech: ["React", "Node.js", "Prisma", "PostgreSQL", "Auth"],
      github: "https://github.com/White-D-coder/CAN-CURE",
    },
    {
      title: "DRACARYS",
      desc: "RoboWars analytics platform with interactive team profiles, CAD model viewers, and match history visualization.",
      icon: "🤖",
      tech: ["HTML/CSS", "JavaScript", "AI Chatbot", "Data Viz"],
    },
    {
      title: "NavSmart",
      desc: "AI-driven automated bus scheduling system with route optimization and real-time tracking capabilities.",
      icon: "🚌",
      tech: ["Vue.js", "Quasar", "Supabase", "Google Maps"],
    },
  ]

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-zinc-900/30 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight"
          >
            Featured <span className="font-bold">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 max-w-2xl mx-auto text-lg"
          >
            Showcasing innovative work across dynamic interface design and robust full-stack development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
