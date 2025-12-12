// "use client"

// import Link from "next/link"

// export default function Slide4() {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8] overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper rounded-full mix-blend-screen filter blur-3xl"></div>
//       </div>

//       <div className="relative z-10 text-center px-4 max-w-2xl">
//         <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Explore?</h2>

//         <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//           Dive deeper into my work, experiments, and creative explorations. Discover the stories behind each project.
//         </p>

//         <Link
//           href="/explore"
//           className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-copper to-copper-light text-black font-bold rounded-lg hover:shadow-lg hover:shadow-copper/50 transition-all duration-300 hover:scale-105 group"
//         >
//           Explore More
//           <svg
//             className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//           </svg>
//         </Link>

//         <div className="mt-16 flex justify-center gap-6">
//           {["GitHub", "LinkedIn", "Twitter", "Email"].map((social) => (
//             <a key={social} href="#" className="text-gray-400 hover:text-copper transition-colors text-sm font-medium">
//               {social}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



import { motion } from "framer-motion";
import { Send, UploadCloud, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { TechHUD } from "../TechHUD";
import { OrganicIris } from "../OrganicIris";
import { ScrambleHover } from "../ScrambleHover";

// Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// Custom Input Component
// Note: Input fields are designed to match the white card background.
const InputField = ({ label, placeholder, type = "text" }) => (
  <motion.div variants={itemVariants} className="w-full relative">
    <label htmlFor={label} className="sr-only">
      {label}
    </label>
    <input
      id={label}
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-2 focus:outline-none focus:border-white transition-all font-mono text-sm"
    />
  </motion.div>
);

// Main Component
export default function Slide4() {
  return (
    <section className="relative min-h-dvh w-full flex items-center justify-center bg-black overflow-hidden py-20 lg:py-0" id="contact">
      {/* Background Map Image */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/map-bg.png')", // Assuming you have a map background or similar
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1) grayscale(1)"
        }}
      />

      {/* Tech HUD Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <TechHUD />
      </div>

      {/* Organic Iris Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 mix-blend-screen scale-150 pointer-events-none">
        <OrganicIris />
      </div>

      {/* Animated Mecha Image - Holographic Style */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[-15%] md:left-[-5%] bottom-10 h-[50vh] md:h-[80vh] w-auto z-0 pointer-events-none mix-blend-screen hidden lg:block"
      >
        <motion.img
          src="/mecha.jpg"
          alt="Mecha Schematic"
          className="h-full w-auto object-contain opacity-50 grayscale invert contrast-125 brightness-110"
          style={{ scaleX: -1 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Scanning Line Overlay */}
        <motion.div
          className="absolute inset-0 w-full h-[2px] bg-white/50 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Holographic Flicker */}
        <motion.div
          className="absolute inset-0 bg-white/5 mix-blend-overlay"
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 5 }}
        />
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full h-full p-6 md:p-16 flex flex-col justify-between min-h-dvh lg:min-h-0"
      >
        {/* Top Section */}
        <div className="flex justify-between items-start mb-10 lg:mb-0">
          <ScrambleHover
            href="#"
            text="deeptanubhunia"
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors cursor-pointer"
          />
        </div>

        {/* Middle Section: Contact Title & Form */}
        {/* Adjusted items-center for better vertical alignment of the form card */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mt-0 gap-12 lg:gap-0">
          {/* Left: Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white max-w-lg"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Get in <div><span className="font-bold text-6xl sm:text-8xl tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>Touch</span></div>
          </motion.h1>

          {/* Right: Floating Feedback Form Card */}
          <motion.div
            variants={containerVariants}
            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0"
          >
            {/* Sleek Glass Container */}
            <div className="relative bg-white/5 backdrop-blur-2xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden group">

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 mb-8">
                <h2 className="text-xl md:text-2xl font-light text-white tracking-widest uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Transmission
                </h2>
                <div className="w-12 h-[1px] bg-white/50 mt-4" />
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="relative z-10 space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <InputField label="Name" placeholder="NAME" />
                  <InputField label="E-mail" placeholder="EMAIL" type="email" />
                  <InputField label="Phone" placeholder="PHONE" type="tel" />

                  <motion.div variants={itemVariants} className="w-full relative">
                    <textarea
                      id="Message"
                      placeholder="MESSAGE"
                      rows="2"
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-2 focus:outline-none focus:border-white transition-all resize-none font-mono text-sm"
                    />
                  </motion.div>
                </div>

                <div className="pt-4">
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    className="w-full bg-white text-black px-8 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3"
                  >
                    Send Signal <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section Removed - Moved to Footer */}
      </motion.div>
    </section>
  );
}
