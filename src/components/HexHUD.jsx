"use client"

import { motion } from "framer-motion"

export function HexHUD({ className = "" }) {
    return (
        <div className={`relative w-[400px] h-[400px] pointer-events-none select-none ${className}`}>
            <motion.svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Center Group */}
                <g transform="translate(200, 200)">

                    {/* Outer Hexagon Frame */}
                    <motion.path
                        d="M 0,-180 L 156,-90 L 156,90 L 0,180 L -156,90 L -156,-90 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        className="opacity-60"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Inner Rotating Hexagon */}
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <path
                            d="M 0,-140 L 121,-70 L 121,70 L 0,140 L -121,70 L -121,-70 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                            className="opacity-40"
                            strokeDasharray="10 5"
                        />
                    </motion.g>

                    {/* Three Rotating Blades/Triangles */}
                    <motion.g
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        <path d="M 0,-100 L 20,-20 L -20,-20 Z" fill="white" className="opacity-20" transform="translate(0, -20)" />
                        <path d="M 0,-100 L 20,-20 L -20,-20 Z" fill="white" className="opacity-20" transform="rotate(120) translate(0, -20)" />
                        <path d="M 0,-100 L 20,-20 L -20,-20 Z" fill="white" className="opacity-20" transform="rotate(240) translate(0, -20)" />

                        {/* Central Triangle */}
                        <path d="M 0,-40 L 35,20 L -35,20 Z" fill="none" stroke="white" strokeWidth="1" className="opacity-80" />
                    </motion.g>

                    {/* Decorative Tech Lines */}
                    <g className="opacity-50">
                        <line x1="-160" y1="-90" x2="-180" y2="-90" stroke="white" strokeWidth="2" />
                        <line x1="160" y1="90" x2="180" y2="90" stroke="white" strokeWidth="2" />
                        <circle cx="-185" cy="-90" r="2" fill="white" />
                        <circle cx="185" cy="90" r="2" fill="white" />
                    </g>

                    {/* Data Text */}
                    <motion.text
                        x="0" y="195"
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        fontFamily="monospace"
                        className="opacity-70"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        SYS.HEX.01
                    </motion.text>

                </g>
            </motion.svg>
        </div>
    )
}
