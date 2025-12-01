"use client"

import { motion } from "framer-motion"

export function TechLine({ className = "" }) {
    return (
        <div className={`relative w-[100px] h-[600px] pointer-events-none select-none ${className}`}>
            <motion.svg
                viewBox="0 0 100 600"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Main Vertical Line */}
                <motion.line
                    x1="50" y1="0" x2="50" y2="600"
                    stroke="white"
                    strokeWidth="1"
                    className="opacity-30"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Top Section */}
                <g>
                    <rect x="48" y="50" width="4" height="100" fill="white" className="opacity-80" />
                    <circle cx="50" cy="40" r="3" fill="white" className="opacity-60" />
                    <line x1="50" y1="40" x2="80" y2="20" stroke="white" strokeWidth="1" className="opacity-30" />
                    <circle cx="80" cy="20" r="2" fill="white" className="opacity-40" />
                </g>

                {/* Middle Hexagon Node */}
                <g transform="translate(50, 300)">
                    <motion.path
                        d="M 0,-20 L 17,-10 L 17,10 L 0,20 L -17,10 L -17,-10 Z"
                        fill="black"
                        stroke="white"
                        strokeWidth="2"
                        className="opacity-80"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <circle cx="0" cy="0" r="5" fill="white" className="opacity-90" />

                    {/* Branching Lines */}
                    <motion.path
                        d="M 0,0 L -30,30 L -30,80"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-40"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                    <circle cx="-30" cy="80" r="2" fill="white" className="opacity-50" />
                </g>

                {/* Bottom Section */}
                <g transform="translate(0, 500)">
                    <line x1="50" y1="0" x2="20" y2="30" stroke="white" strokeWidth="1" className="opacity-30" />
                    <line x1="20" y1="30" x2="20" y2="80" stroke="white" strokeWidth="1" className="opacity-30" />
                    <circle cx="20" cy="80" r="2" fill="white" className="opacity-40" />

                    <motion.rect
                        x="48" y="20" width="4" height="60"
                        fill="white"
                        className="opacity-60"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </g>

                {/* Moving Pulse on Main Line */}
                <motion.circle
                    cx="50" cy="0"
                    r="3"
                    fill="white"
                    className="opacity-80"
                    animate={{ cy: [0, 600], cx: 50 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

            </motion.svg>
        </div>
    )
}
