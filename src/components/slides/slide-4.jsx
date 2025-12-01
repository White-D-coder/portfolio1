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
  <motion.div variants={itemVariants} className="w-full relative pb-4">
    <label htmlFor={label} className="sr-only">
      {label}
    </label>
    <input
      id={label}
      type={type}
      // Added a large padding-y for the input area to match the design's spacing
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-gray-300 text-black placeholder-gray-500 py-3 focus:outline-none focus:border-black transition-colors"
    />
  </motion.div>
);

// Main Component
export default function Slide4() {
  return (
    <section className="relative h-screen w-full flex overflow-hidden bg-black text-white">
      {/* Background Image Container (Mimics the subtle map aesthetic on the dark background) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Use the dark, subtle photo aesthetic you wanted for the background map feel
          backgroundImage: "url('/c.png')",
          backgroundSize: "60% auto", // Subtler appearance
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          filter: "grayscale(100%) brightness(20%) contrast(150%)", // High-contrast dark filter
        }}
      />

      {/* Main Content Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col justify-between"
      >
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <motion.a
            variants={itemVariants}
            href="#"
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            Look at google maps
          </motion.a>
        </div>

        {/* Middle Section: Contact Title & Form */}
        {/* Adjusted items-center for better vertical alignment of the form card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-10 md:mt-0">
          {/* Left: Title */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-8xl font-light tracking-tight text-white max-w-lg mb-12 md:mb-0"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Get in <div><span className="font-bold text-9xl tracking-widest">Touch</span></div>
          </motion.h1>

          {/* Right: Floating Feedback Form Card */}
          <motion.div
            variants={containerVariants}
            // Increased max-width for better desktop proportions
            className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg border border-white/20"
          >
            <h2 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest border-b pb-2 border-gray-200">
              Feedback Form
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <InputField label="Name" placeholder="Name" />
              <InputField label="E-mail" placeholder="E-mail" type="email" />
              <InputField label="Phone" placeholder="Phone" type="tel" />
              {/* Message field needs a little height for the placeholder text */}
              <motion.div variants={itemVariants} className="w-full relative pb-4">
                <textarea
                  id="Message"
                  placeholder="Message"
                  rows="1" // Start with one row
                  className="w-full bg-transparent border-b border-gray-300 text-black placeholder-gray-500 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </motion.div>


              <div className="flex items-center justify-between pt-4">
                {/* Upload File Button */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center text-gray-600 cursor-pointer hover:text-black transition-colors"
                >
                  {/* <span className="text-sm font-medium">Upload file</span> */}
                </motion.div>

                {/* Send Message Button (Replicating the dark button with minimal text) */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  className="flex items-center text-white bg-black px-6 py-2 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-lg rounded-sm"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-3" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section: Address, Contacts, Socials & Page Number */}
        <div className="flex justify-between items-end w-full pt-16">
          {/* Left: Address and Contacts */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 text-gray-400 text-sm">
            <motion.div variants={itemVariants}>
              <h3 className="uppercase tracking-widest text-white mb-2 border-b border-gray-700 pb-1">Address</h3>
              <p>Pune, India</p>
              <p>Newton School of Technology</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="uppercase tracking-widest text-white mb-2 border-b border-gray-700 pb-1">Contacts</h3>
              <div className="flex items-center mt-1">
                <Mail className="w-4 h-4 mr-2" />
                <span>deeptanu.bhunia@adypu.edu.in</span>
              </div>
              <div className="flex items-center mt-1">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9821419780</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Social Media & Page Number */}
          <div className="flex flex-col items-end">
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-4 mb-4 items-center">
              <span className="text-sm uppercase tracking-wider text-gray-400">
                — Follow
              </span>
              {[
                { Icon: Github, url: "https://github.com/White-D-coder" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/deeptanu-bhunia-184426297/" },
                { Icon: Instagram, url: "https://www.instagram.com/iskybound_/" },
                { Icon: Twitter, url: "#" },
              ].map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 border border-gray-800 rounded-full hover:bg-white/10 hover:border-white/30"
                  aria-label={Icon.displayName}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Page Number */}
            {/* <motion.p variants={itemVariants} className="text-xs text-gray-500">
              1 / 28
              <span className="ml-2 text-white">Contact Us</span>
            </motion.p> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
