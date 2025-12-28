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

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Card Container with Clip Path */}
      <div
        className="relative h-full bg-zinc-900/80 backdrop-blur-md border-l-2 border-r-2 border-zinc-800 transition-all duration-300 group-hover:border-white/50 group-hover:bg-zinc-900/90"
        style={{
          clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)"
        }}
      >
        {/* Animated Border Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Top Left Corner */}
          <div className="absolute top-0 left-0 w-[20px] h-[2px] bg-zinc-600 group-hover:bg-white transition-colors" />
          <div className="absolute top-0 left-0 w-[2px] h-[20px] bg-zinc-600 group-hover:bg-white transition-colors" />
          <div className="absolute top-0 left-0 w-[20px] h-[20px] border-l border-t border-transparent group-hover:border-white/30" />

          {/* Bottom Right Corner */}
          <div className="absolute bottom-0 right-0 w-[20px] h-[2px] bg-zinc-600 group-hover:bg-white transition-colors" />
          <div className="absolute bottom-0 right-0 w-[2px] h-[20px] bg-zinc-600 group-hover:bg-white transition-colors" />

          {/* Scanning Line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-white/50 shadow-[0_0_10px_white]"
            animate={{ top: isHovering ? ["0%", "100%"] : "0%", opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Content Container */}
        <div className="p-8 flex flex-col h-full relative z-10">

          {/* Header: Design Preview & Tech ID */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="relative w-full">
              <DesignPreview type={project.type} />
              {/* Decorative line connecting preview */}
              <div className="absolute top-1/2 left-full w-8 h-[1px] bg-zinc-800 group-hover:bg-white/30 transition-colors" />
              <div className="absolute top-1/2 left-[calc(100%+32px)] w-1 h-1 bg-zinc-600 group-hover:bg-white rounded-full transition-colors" />
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-white tracking-widest opacity-70">PRJ_0{i + 1}</span>
              <div className="flex gap-2 mt-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <button className="text-zinc-500 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-auto">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-wider group-hover:text-white transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {project.title}
            </h3>
            <div className="w-12 h-[2px] bg-zinc-800 mb-4 group-hover:w-full group-hover:bg-white/30 transition-all duration-500" />
            <p className="text-zinc-400 text-sm leading-relaxed font-mono" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              {project.desc}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-800 bg-black/30 group-hover:text-white group-hover:border-white/30 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-6 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            <span className="group-hover:text-white transition-colors">Status: Active</span>
            <div className="flex items-center gap-2 group-hover:text-white transition-colors cursor-pointer">
              <span>Initialize</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow on Hover */}
      <div className="absolute -inset-1 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  )
}

import { SciFiBackground } from "../SciFiBackground"

import { DesignPreview } from "../DesignPreview"

export default function Slide3({ isLoading }) {
  const projects = [
    {
      title: "Ground Station",
      desc: "Real-time telemetry dashboard for UAVs and robotics. Features live map tracking, system alerts, and data replay support.",
      type: "dashboard",
      tech: ["Electron", "React", "Node.js", "Google Maps", "MySQL"],
    },
    {
      title: "CanCure",
      desc: "Healthcare consultation platform connecting patients with verified cancer specialists. Includes medication tracking and scheduling.",
      type: "mobile",
      tech: ["React", "Node.js", "Prisma", "PostgreSQL", "Auth"],
      github: "https://github.com/White-D-coder/CAN-CURE",
    },
    {
      title: "DRACARYS",
      desc: "RoboWars analytics platform with interactive team profiles, CAD model viewers, and match history visualization.",
      type: "analytics",
      tech: ["HTML/CSS", "JavaScript", "AI Chatbot", "Data Viz"],
    },
    {
      title: "NavSmart",
      desc: "AI-driven automated bus scheduling system with route optimization and real-time tracking capabilities.",
      type: "map",
      tech: ["Vue.js", "Quasar", "Supabase", "Google Maps"],
    },
  ]

  return (
    <section className="relative min-h-dvh w-full flex items-center justify-center bg-black overflow-hidden py-10 md:py-20">
      {/* Sci-Fi Background */}
      <div className="absolute inset-0 z-0">
        <SciFiBackground />
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-zinc-900/30 rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Copper Asteroid Animation */}
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{
          x: ["0vw", "100vw"],
          y: ["0vh", "100vh"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white] z-0 pointer-events-none"
      >
        {/* Trail */}
        <div className="absolute top-1/2 right-full w-20 h-[1px] bg-gradient-to-l from-white to-transparent transform -translate-y-1/2 origin-right rotate-45" />
      </motion.div>

      {/* Second Asteroid (Delayed) */}
      <motion.div
        initial={{ x: "100vw", y: -100, opacity: 0 }}
        animate={{
          x: ["100vw", "0vw"],
          y: ["0vh", "100vh"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
        className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white] z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-full w-16 h-[1px] bg-gradient-to-r from-white to-transparent transform -translate-y-1/2 origin-left -rotate-45" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-thin text-white mb-6 tracking-tight"
          >
            Featured <span className="font-bold text-white">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={!isLoading ? { opacity: 1 } : { opacity: 0 }}
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
          whileInView={!isLoading ? "visible" : "hidden"}
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
