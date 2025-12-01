"use client"

import { motion } from "framer-motion"

export function SciFiBackground({ className = "" }) {
    return (
        <div className={`relative w-full h-full pointer-events-none select-none overflow-hidden ${className}`}>
            <motion.svg
                viewBox="0 0 1920 1080"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <defs>
                    <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#333" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#ef4444" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#333" stopOpacity="0.1" />
                    </linearGradient>
                    <pattern id="hex-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
                    </pattern>
                </defs>

                {/* Background Hex Grid */}
                <rect width="1920" height="1080" fill="url(#hex-grid)" className="opacity-20" />

                {/* --- CIRCUIT LAYER --- */}
                <g className="opacity-30">
                    {/* Top Left Circuit */}
                    <path d="M 0,100 L 200,100 L 250,150 L 400,150" fill="none" stroke="white" strokeWidth="1" className="opacity-20" />
                    <circle cx="400" cy="150" r="3" fill="#ef4444" className="opacity-50" />
                    <motion.circle
                        r="2" fill="white"
                        animate={{ offsetDistance: ["0%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <animateMotion path="M 0,100 L 200,100 L 250,150 L 400,150" dur="4s" repeatCount="indefinite" />
                    </motion.circle>

                    {/* Bottom Right Circuit */}
                    <path d="M 1920,900 L 1720,900 L 1670,850 L 1500,850" fill="none" stroke="white" strokeWidth="1" className="opacity-20" />
                    <circle cx="1500" cy="850" r="3" fill="#ef4444" className="opacity-50" />
                    <motion.circle
                        r="2" fill="white"
                        animate={{ offsetDistance: ["0%", "100%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        <animateMotion path="M 1920,900 L 1720,900 L 1670,850 L 1500,850" dur="5s" repeatCount="indefinite" />
                    </motion.circle>

                    {/* Random Vertical Lines */}
                    <line x1="300" y1="0" x2="300" y2="1080" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="10 20" />
                    <line x1="1620" y1="0" x2="1620" y2="1080" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="10 20" />
                </g>

                {/* --- ORBITAL LAYER (Center) --- */}
                <g transform="translate(960, 540)">
                    {/* Large Slow Ring */}
                    <motion.circle
                        cx="0" cy="0" r="400"
                        fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1"
                        strokeDasharray="20 40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Medium Counter-Rotating Ring */}
                    <motion.circle
                        cx="0" cy="0" r="300"
                        fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.15"
                        strokeDasharray="10 10"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Elliptical Orbits */}
                    <motion.ellipse
                        cx="0" cy="0" rx="500" ry="150"
                        fill="none" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.ellipse
                        cx="0" cy="0" rx="500" ry="150"
                        fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Central Core */}
                    <circle cx="0" cy="0" r="50" fill="url(#circuit-gradient)" className="opacity-20" />
                    <motion.circle
                        cx="0" cy="0" r="40"
                        fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.5"
                        strokeDasharray="60 100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                </g>

                {/* --- DATA FLOW & PARTICLES --- */}
                <g>
                    {/* Floating Particles */}
                    {[...Array(10)].map((_, i) => (
                        <motion.circle
                            key={i}
                            r={Math.random() * 2 + 1}
                            fill={i % 2 === 0 ? "#ef4444" : "white"}
                            opacity={0.4}
                            initial={{ x: Math.random() * 1920, y: Math.random() * 1080 }}
                            animate={{
                                y: [null, Math.random() * 1080],
                                opacity: [0.2, 0.6, 0.2]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </g>

            </motion.svg>
        </div>
    )
}
