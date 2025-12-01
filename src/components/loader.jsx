"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Central Mechanical Core */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Ring - Rotating */}
          <motion.div
            className="absolute inset-0 border-2 border-zinc-800 rounded-full border-t-white/50 border-r-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
          />

          {/* Inner Ring - Counter Rotating */}
          <motion.div
            className="absolute inset-2 border-2 border-zinc-800 rounded-full border-b-white/50 border-l-transparent"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          />

          {/* Core Pulse */}
          <motion.div
            className="w-12 h-12 bg-white rounded-full opacity-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />

          {/* Center Dot */}
          <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>

        {/* Compact Status Text */}
        <div className="mt-8 flex flex-col items-center gap-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span>SYSTEM_INIT</span>
          </div>
          <span className="text-white font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  )
}
