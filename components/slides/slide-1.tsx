"use client"

import { useEffect, useState } from "react"

export default function Slide1() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1A1A1A] via-[#4A4A4A] to-[#E8E8E8]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-copper rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-copper-light rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-copper via-copper-light to-white bg-clip-text text-transparent">
              Deeptanu Bhunia
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed">
            Crafting intelligent motion through design & code
          </p>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
