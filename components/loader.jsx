"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.h1
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-6, 0], opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="text-3xl md:text-5xl font-bold text-white tracking-widest"
        >
          LOADING
        </motion.h1>

        <motion.div
          className="flex gap-2 mt-2"
          initial="init"
          animate="anim"
          variants={{
            init: {},
            anim: { transition: { staggerChildren: 0.15, repeat: Infinity } },
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              variants={{
                init: { y: 0, opacity: 0.5 },
                anim: { y: [0, -8, 0], opacity: [0.6, 1, 0.6] },
              }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-white/80 inline-block"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
