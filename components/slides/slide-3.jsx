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

import { motion } from "framer-motion"
import { useState } from "react"

// Variants for the main container to stagger the children's entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each project card's entrance
      delayChildren: 0.2,
    },
  },
}

// Variants for individual project cards to fade in and slide up slightly
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 },
  },
}


// Helper component to manage hover state for each individual card
const ProjectCard = ({ project, i }) => {
    // 1. Define state to track if the card is being hovered
    const [isHovering, setIsHovering] = useState(false)

    return (
        <motion.div
            key={i}
            variants={cardVariants}
            className="group relative bg-gray-950/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer hover:-translate-y-1"
            onMouseEnter={() => setIsHovering(true)} // 2. Set state on mouse enter
            onMouseLeave={() => setIsHovering(false)} // 2. Reset state on mouse leave
        >
            {/* Subtle Monochrome Glow/Border on Hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ 
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)' 
                }}>
            </div>

            <div className="relative z-10">
                <div className="text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{project.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>

                {/* View Project Link - High Contrast */}
                <div className="mt-6 flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    View Project
                    <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        // 3. Use the defined state (isHovering) to drive the animation
                        animate={{ x: isHovering ? 5 : 0 }} 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                </div>
            </div>
        </motion.div>
    )
}

export default function Slide3() {
  const projects = [
    {
      title: "Motion Design System",
      desc: "Comprehensive animation library built for seamless Next.js integration.",
      icon: "✨",
    },
    {
      title: "Interactive Dashboard",
      desc: "Real-time data visualization with dynamic, high-performance charts.",
      icon: "📊",
    },
    {
      title: "E-Commerce Platform",
      desc: "Designed and engineered a scalable, headless shopping experience.",
      icon: "🛍️",
    },
    {
      title: "AI Integration Suite",
      desc: "Intelligent automation tools leveraging modern LLM and vision APIs.",
      icon: "🤖",
    },
  ]

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-8 w-full">
        {/* Section Header */}
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light text-white text-center mb-4"
        >
          Featured **Projects**
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-500 mb-16 max-w-2xl mx-auto"
        >
            Showcasing innovative work across dynamic interface design and robust full-stack development.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
