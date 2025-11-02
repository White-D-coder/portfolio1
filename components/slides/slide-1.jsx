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


// Framer Motion variant definitions for staggered entrance
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
  },
};

// Parent container variants to coordinate the entrance of all children
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // Small delay between each child element's entrance
    },
  },
};

export default function Slide1() {
  return (
    <section className="relative h-screen w-full flex overflow-hidden bg-black text-white">
      {/* 1. Left Side: High-Contrast Profile Image Area */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-full w-2/5 md:w-1/2 bg-cover bg-center" // Restored original width
        style={{
          backgroundImage: "url('/c.png')", 
          // CHANGED: Only resize the image within its container
          backgroundSize: '80% auto', // Make image 80% of container width, maintaining aspect ratio
          backgroundRepeat: 'no-repeat', // Prevent repetition if image is smaller
          backgroundPosition: 'center', // Center the smaller image
        }}
      >
        {/* Subtle Gradient Overlay for blending into the black background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
      </motion.div>

      {/* 2. Right Side: Animated Text Content */}
      <div className="relative z-10 w-3/5 md:w-1/2 flex items-center p-8 md:p-16"> {/* Restored original width */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-xl"
        >
          {/* Introductory Text */}
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-400 font-light mb-4 tracking-widest"
          >
            Hello.
          </motion.p>

          {/* Main Title (Name) */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tighter leading-none"
          >
            I'm <span className="font-semibold">Deeptanu Bhunia</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 font-thin mb-12 leading-snug"
          >
            Crafting **intelligent motion** through design & code
          </motion.p>

          {/* Main Call to Action Links */}
          <motion.div variants={textVariants} className="flex space-x-6">
            <motion.a
              href="/portfolio"
              className="text-lg font-semibold tracking-widest uppercase border-b-2 border-white pb-1 hover:text-gray-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Portfolio
            </motion.a>

            <motion.a
              href="/contact"
              className="text-lg font-semibold tracking-widest uppercase border-b-2 border-gray-500 pb-1 hover:border-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll indicator (Animated with Framer Motion) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex justify-start mt-24"
          >
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
