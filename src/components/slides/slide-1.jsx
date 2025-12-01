// "use client"

// import { useEffect, useState } from "react"

// export default function Slide1() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8]">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-copper rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
//         <div
//           className="absolute bottom-20 right-10 w-72 h-72 bg-copper-light rounded-full mix-blend-screen filter blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       <div className="relative z-10 text-center px-4 max-w-4xl">
//         <div
//           className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//           <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//             Welcome to{" "}
//             <span className="bg-gradient-to-r from-copper via-copper-light to-white bg-clip-text text-transparent">
//               Deeptanu Bhunia
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed">
//             Crafting intelligent motion through design & code
//           </p>

//           {/* Scroll indicator */}
//           <div className="flex justify-center mt-16 animate-bounce">
//             <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client";

// import { motion } from "framer-motion";

// // Framer Motion variant definitions for staggered entrance
// const textVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
//   },
// };

// // Parent container variants to coordinate the entrance of all children
// const containerVariants = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1, // Small delay between each child element's entrance
//     },
//   },
// };

// export default function Slide1() {
//   // NOTE: The 'isVisible' state is removed, replaced by Framer Motion's 'initial' and 'animate' props

//   return (
//     <section className="relative h-screen w-full flex overflow-hidden bg-black text-white">
//       {/* 1. Left Side: High-Contrast Profile Image Area (Matches Inspiration Image 2 Theme) */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="relative h-full w-2/5 md:w-1/2 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/c.png')"
//           // Apply filters for the moody, high-contrast B&W effect
//         }}
//       >
//         {/* Subtle Gradient Overlay for blending into the black background */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div> */}
//       </motion.div>

//       {/* 2. Right Side: Animated Text Content */}
//       <div className="relative z-10 w-3/5 md:w-1/2 flex items-center p-8 md:p-16">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="max-w-xl"
//         >
//           {/* Introductory Text */}
//           <motion.p
//             variants={textVariants}
//             className="text-xl md:text-2xl text-gray-400 font-light mb-4 tracking-widest"
//           >
//             Hello.
//           </motion.p>

//           {/* Main Title (Name) */}
//           <motion.h1
//             variants={textVariants}
//             className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tighter leading-none"
//           >
//             I'm <span className="font-semibold">Deeptanu Bhunia</span>
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             variants={textVariants}
//             className="text-xl md:text-2xl text-gray-300 font-thin mb-12 leading-snug"
//           >
//             Crafting **intelligent motion** through design & code
//           </motion.p>

//           {/* Main Call to Action Links */}
//           <motion.div variants={textVariants} className="flex space-x-6">
//             <motion.a
//               href="/portfolio"
//               className="text-lg font-semibold tracking-widest uppercase border-b-2 border-white pb-1 hover:text-gray-400 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               My Portfolio
//             </motion.a>

//             <motion.a
//               href="/contact"
//               className="text-lg font-semibold tracking-widest uppercase border-b-2 border-gray-500 pb-1 hover:border-white transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get In Touch
//             </motion.a>
//           </motion.div>

//           {/* Scroll indicator (Animated with Framer Motion) */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "easeInOut",
//             }}
//             className="flex justify-start mt-24"
//           >
//             <svg
//               className="w-8 h-8 text-gray-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function Slide1() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/30 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text / HUD Data */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-start space-y-8"
        >
          {/* System Status Header */}
          <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs tracking-[0.2em]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span>SYSTEM_ONLINE</span>
            <span className="w-px h-4 bg-zinc-800 mx-2" />
            <span>ID: DB_001</span>
          </div>

          {/* Main Title */}
          <div className="relative">
            <motion.h1
              className="text-6xl md:text-8xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            >
              DEEPTANU
              <br />
              BHUNIA
            </motion.h1>

            {/* Decorative Brackets */}
            <div className="absolute -left-6 -top-6 w-12 h-12 border-t-2 border-l-2 border-zinc-800" />
            <div className="absolute -right-6 -bottom-6 w-12 h-12 border-b-2 border-r-2 border-zinc-800" />
          </div>

          {/* Tagline / Role */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-zinc-300 tracking-[0.15em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              FULL STACK <span className="font-bold text-white">DEVELOPER</span>
            </h2>
            <p className="text-zinc-500 font-mono text-sm max-w-md leading-relaxed tracking-wider">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                &gt;{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {"INITIALIZING CREATIVE PROTOCOLS...".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.05, delay: 1 + index * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
              >
                &gt;{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {"CRAFTING INTELLIGENT MOTION & ROBUST ARCHITECTURE.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.05, delay: 3 + index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-6 pt-4">
            <motion.a
              href="/portfolio"
              className="relative px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-sm overflow-hidden clip-path-slant hover:bg-zinc-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
            >
              Initialize Projects
            </motion.a>

            <motion.a
              href="/contact"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono text-sm tracking-wider uppercase group"
            >
              <span className="w-8 h-px bg-zinc-700 group-hover:bg-white transition-colors" />
              Establish Comms
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Reactor Core / Profile Image */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center h-[500px] lg:h-[700px]">
          {/* Reactor Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1: Large Outer */}
            <motion.div
              className="w-[500px] h-[500px] border border-zinc-800 rounded-full border-dashed opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            />

            {/* Ring 2: Medium Tech */}
            <motion.div
              className="absolute w-[400px] h-[400px] border-2 border-zinc-800 rounded-full border-t-transparent border-b-transparent opacity-50"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            />

            {/* Ring 3: Fast Inner */}
            <motion.div
              className="absolute w-[320px] h-[320px] border border-zinc-700 rounded-full border-l-white/20 border-r-white/20"
              animate={{ rotate: 180 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />

            {/* Orbiting Elements */}
            <motion.div
              className="absolute w-[600px] h-[600px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]" />
            </motion.div>
          </div>

          {/* Central Profile Image Container */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-900 shadow-[0_0_50px_rgba(255,255,255,0.1)] z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/c.png')" }}
            />
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>

      </div>

      {/* Bottom HUD Bar */}
      <div className="absolute bottom-0 left-0 w-full h-16 border-t border-zinc-900 bg-black/50 backdrop-blur-sm flex items-center justify-between px-8 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
        <div className="flex gap-8">
          <span>COORD: 18.5204° N, 73.8567° E</span>
          <span className="hidden md:inline">SECTOR: 7G</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-24 h-1 bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-zinc-600"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span>SCANNING...</span>
        </div>
      </div>
    </section>
  );
}
