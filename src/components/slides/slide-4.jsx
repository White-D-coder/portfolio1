import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";
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
const InputField = ({ label, placeholder, type = "text", name }) => (
  <motion.div variants={itemVariants} className="w-full relative">
    <label htmlFor={label} className="sr-only">
      {label}
    </label>
    <input
      id={label}
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-2 focus:outline-none focus:border-white transition-all font-mono text-sm"
    />
  </motion.div>
);

// Main Component
export default function Slide4({ isLoading }) {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // You can sign up at https://www.emailjs.com/
    const SERVICE_ID = "service_ypmmcfl";
    const TEMPLATE_ID = "template_xkv0aue";
    const PUBLIC_KEY = "PGEGc8jJVY_calDam";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="relative min-h-dvh w-full flex items-center justify-center bg-black overflow-hidden py-20 xl:py-0" id="contact">
      {/* Background Map Image */}
      {/* Background Map Image */}
      {/* Note: map-bg.png is missing in public folder. Keeping code but commenting out ensuring it doesn't break. 
          Uncomment and ensure file exists to restore. */}
      {/* <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/map-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1) grayscale(1)"
        }}
      /> */}

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
        className="absolute left-[-15%] md:left-[-5%] bottom-10 h-[50vh] md:h-[80vh] w-auto z-0 pointer-events-none mix-blend-screen hidden xl:block"
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
        whileInView={!isLoading ? "visible" : "hidden"}
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full h-full p-6 md:p-16 flex flex-col justify-between min-h-dvh xl:min-h-0"
      >
        {/* Top Section */}
        <div className="flex justify-between items-start mb-10 xl:mb-0">
          <ScrambleHover
            href="#"
            text="deeptanubhunia"
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors cursor-pointer"
          />
        </div>

        {/* Middle Section: Contact Title & Form */}
        {/* Adjusted items-center for better vertical alignment of the form card */}
        <div className="flex-grow flex flex-col justify-center w-full">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center w-full gap-12 xl:gap-0">
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
              className="relative w-full max-w-sm md:max-w-md xl:max-w-lg mx-auto xl:mx-0"
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

                <form ref={formRef} onSubmit={sendEmail} className="relative z-10 space-y-6 md:space-y-8">
                  <div className="space-y-4 md:space-y-6">
                    <InputField label="Name" name="user_name" placeholder="NAME" />
                    <InputField label="E-mail" name="user_email" placeholder="EMAIL" type="email" />
                    <InputField label="Phone" name="user_phone" placeholder="PHONE" type="tel" />

                    <motion.div variants={itemVariants} className="w-full relative">
                      <textarea
                        name="message"
                        placeholder="MESSAGE"
                        rows="2"
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-2 focus:outline-none focus:border-white transition-all resize-none font-mono text-sm"
                      />
                    </motion.div>
                  </div>

                  <div className="pt-4">
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black px-8 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Transmitting..." : "Send Signal"} <Send className="w-4 h-4" />
                    </motion.button>
                    {status === "success" && (
                      <p className="text-green-400 text-xs mt-2 font-mono">Signal received. Transmission complete.</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-400 text-xs mt-2 font-mono">Transmission failed. Retry.</p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Address, Contacts, Socials & Page Number */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full pt-16 gap-8 md:gap-0">
          {/* Left: Address and Contacts */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-20 text-gray-400 text-sm w-full md:w-auto">
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
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-4 mb-4 items-center">
              <span className="text-sm uppercase tracking-wider text-gray-400">
                — Follow
              </span>
              {[
                { Icon: Github, url: "https://github.com/White-D-coder" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/deeptanu-bhunia-184426297/" },
                { Icon: Instagram, url: "https://www.instagram.com/iskybound_/" }
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
