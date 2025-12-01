"use client"

import { motion } from "framer-motion"

export function TechRing({ className = "" }) {
    return (
        <div className={`relative w-[600px] h-[600px] pointer-events-none select-none ${className}`}>
            <motion.svg
                viewBox="0 0 600 600"
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#333" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#666" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#333" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Outer Ring with Ticks */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "300px", originY: "300px" }}
                >
                    {/* Main Arc */}
                    <path
                        d="M 100,300 A 200,200 0 1,1 500,300"
                        fill="none"
                        stroke="url(#ringGradient)"
                        strokeWidth="1"
                        className="opacity-80"
                    />

                    {/* Ticks */}
                    {Array.from({ length: 60 }).map((_, i) => {
                        const angle = (i * 6) * (Math.PI / 180)
                        const r1 = 280
                        const r2 = i % 5 === 0 ? 295 : 285
                        const x1 = 300 + r1 * Math.cos(angle)
                        const y1 = 300 + r1 * Math.sin(angle)
                        const x2 = 300 + r2 * Math.cos(angle)
                        const y2 = 300 + r2 * Math.sin(angle)

                        // Only draw ticks for a portion of the circle to match the image style
                        if (i > 15 && i < 45) return null

                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#444"
                                strokeWidth={i % 5 === 0 ? 2 : 1}
                                className="opacity-90"
                            />
                        )
                    })}
                </motion.g>

                {/* Inner Ring with Numbers */}
                <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "300px", originY: "300px" }}
                >
                    <circle cx="300" cy="300" r="240" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4 4" className="opacity-60" />

                    {/* Numbers */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
                        const angle = (i * 36) * (Math.PI / 180)
                        const r = 220
                        const x = 300 + r * Math.cos(angle)
                        const y = 300 + r * Math.sin(angle)
                        return (
                            <text
                                key={i}
                                x={x}
                                y={y}
                                fill="#666"
                                fontSize="10"
                                fontFamily="monospace"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                transform={`rotate(${i * 36 + 90}, ${x}, ${y})`}
                                className="opacity-100"
                            >
                                0.{num}48
                            </text>
                        )
                    })}
                </motion.g>

                {/* Triangles / Pointers */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "300px", originY: "300px" }}
                >
                    <polygon points="300,50 290,70 310,70" fill="#333" className="opacity-100" />
                    <polygon points="300,550 290,530 310,530" fill="#333" className="opacity-100" />
                    <polygon points="50,300 70,290 70,310" fill="#333" className="opacity-100" />
                    <polygon points="550,300 530,290 530,310" fill="#333" className="opacity-100" />
                </motion.g>

            </motion.svg>
        </div>
    )
}
