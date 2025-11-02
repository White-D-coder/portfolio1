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
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import {LogoLoop} from "../LogoLoop";

// Variants for the main container to stagger the children's entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
}

// Variants for individual items to slide up and fade in
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
  },
}

// Variants for the skill tags (now staggered with a quick scale-up)
const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.3 } // Faster, snappier transition
      },
    }
    
    export default function Slide2() {
      const timelineData = [
        { year: "2024", title: "Senior Designer", desc: "Leading high-impact design initiatives for a global platform, focusing on scalability." },
        { year: "2023", title: "Full Stack Developer", desc: "Delivered performant, full-stack solutions with Next.js and serverless architectures." },
        { year: "2022", title: "UI/UX Specialist", desc: "Defined core user flows and crafted intuitive, accessible user experiences." },
        { year: "2021", title: "Foundation & Code", desc: "Started the professional journey, mastering core development principles and design passion." },
      ]
      
      const skillTags = ["Design Strategy", "Next.js", "Framer Motion", "Tailwind CSS", "Aesthetics", "Performance", "React", "UX Engineering"]
      
      return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden py-32 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} 
        variants={containerVariants}
        className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
        {/* Left: Timeline - HIGH CONTRAST */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 tracking-wide">
            My **Timeline** & Journey
          </h2>

          {/* Staggered Timeline Items */}
          <motion.div 
            className="space-y-10 pl-4 border-l-2 border-gray-700" // Thicker border
            variants={containerVariants}
          >
            {timelineData.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex gap-6 group cursor-pointer relative -left-4" // Increased gap and left shift
              >
                {/* Timeline Visual Marker (Enhanced) */}
                <div className="w-4 h-4 mt-1.5 transition-all duration-300 transform rotate-45 group-hover:bg-white bg-gray-700 absolute -left-2.5 top-0.5 shadow-md group-hover:shadow-white/50"></div>
                <div>
                  <p className="text-gray-400 font-medium tracking-wider">{item.year}</p>
                  <p className="text-white font-semibold text-xl group-hover:text-gray-200 transition-colors">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
            
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Bio with Skills - DARKER & MORE PRONOUNCED */}
        <motion.div variants={itemVariants} className="relative pt-10 md:pt-0">
          <motion.div 
            className="relative bg-gray-950/90 backdrop-blur-sm p-10 rounded-xl border border-gray-700 shadow-2xl shadow-gray-900/70"
            whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.05)', transition: { duration: 0.4 } }} // More dramatic hover
          >
            <p className="text-gray-100 text-xl leading-relaxed mb-6">
              I'm a passionate designer and developer who believes in the power of thoughtful design combined with
              robust engineering. My journey spans across multiple disciplines, always seeking the intersection of
              **aesthetics and functionality**.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              When I'm not designing or coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the community. I focus on creating **smooth, dynamic, and professional** user interfaces.
            </p>
            
            {/* Skill Tags - Framer Motion Staggered */}
            <motion.div 
                className="mt-12 flex gap-3 flex-wrap"
                variants={containerVariants}
            >
              {skillTags.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  className="px-4 py-1.5 bg-white/10 text-gray-200 rounded-full text-sm font-medium border border-gray-700/80 tracking-wide hover:bg-white hover:text-black transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    <LogoLoop></LogoLoop>

    </section>
  )
}