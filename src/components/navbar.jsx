import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null)

  const tabs = [
    { id: "home", label: "Home", href: "#home" },
    { id: "work", label: "Work", href: "#work" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md shadow-lg flex gap-2"
      onMouseLeave={() => setHoveredTab(null)}
    >
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.href}
          onMouseEnter={() => setHoveredTab(tab.id)}
          className="relative px-6 py-2 text-sm font-medium text-white transition-colors duration-300 z-10"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.1em" }}
        >
          {hoveredTab === tab.id && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-white/15 rounded-full -z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </nav>
  )
}
