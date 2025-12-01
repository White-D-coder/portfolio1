"use client"

import { motion } from "framer-motion"

export function TechHUD({ className = "" }) {
    return (
        <div className={`relative w-full h-full pointer-events-none select-none ${className}`}>
            <motion.svg
                viewBox="0 0 1600 900"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <defs>
                    <linearGradient id="hudGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.0" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0.15" />
                    </linearGradient>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
                    </pattern>
                </defs>

                {/* Background Grid - Drifting */}
                <motion.rect
                    width="1600" height="900"
                    fill="url(#grid)"
                    className="opacity-30"
                    animate={{ x: [0, -40], y: [0, -40] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* --- CORNER ELEMENTS --- */}

                {/* Top Left Corner */}
                <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                    <path d="M 50,150 L 50,50 L 250,50" fill="none" stroke="white" strokeWidth="2" className="opacity-60" />
                    <motion.rect
                        x="50" y="40" width="10" height="10" fill="white" className="opacity-80"
                        animate={{ opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <text x="60" y="70" fill="white" fontSize="10" fontFamily="monospace" className="opacity-50">CAM.01</text>
                    <motion.text
                        x="60" y="85" fill="white" fontSize="10" fontFamily="monospace" className="opacity-50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        REC: ON
                    </motion.text>
                </motion.g>

                {/* Top Right Corner */}
                <motion.g initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                    <path d="M 1350,50 L 1550,50 L 1550,150" fill="none" stroke="white" strokeWidth="2" className="opacity-60" />
                    <motion.rect
                        x="1540" y="40" width="10" height="10" fill="white" className="opacity-80"
                        animate={{ opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <text x="1450" y="70" fill="white" fontSize="10" fontFamily="monospace" textAnchor="end" className="opacity-50">SYS.STATUS</text>
                    <motion.text
                        x="1450" y="85" fill="white" fontSize="10" fontFamily="monospace" textAnchor="end" className="opacity-50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        OPTIMAL
                    </motion.text>
                </motion.g>

                {/* Bottom Left Corner */}
                <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                    <path d="M 50,750 L 50,850 L 250,850" fill="none" stroke="white" strokeWidth="2" className="opacity-60" />
                    <motion.rect
                        x="50" y="850" width="10" height="10" fill="white" className="opacity-80"
                        animate={{ opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    {/* Data Lines */}
                    <motion.line
                        x1="60" y1="840" x2="200" y2="840" stroke="white" strokeWidth="1" className="opacity-30"
                        animate={{ scaleX: [1, 0.8, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.line
                        x1="60" y1="830" x2="150" y2="830" stroke="white" strokeWidth="1" className="opacity-30"
                        animate={{ scaleX: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.g>

                {/* Bottom Right Corner */}
                <motion.g initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                    <path d="M 1350,850 L 1550,850 L 1550,750" fill="none" stroke="white" strokeWidth="2" className="opacity-60" />
                    <motion.rect
                        x="1540" y="850" width="10" height="10" fill="white" className="opacity-80"
                        animate={{ opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />
                    <text x="1530" y="830" fill="white" fontSize="14" fontFamily="monospace" textAnchor="end" className="opacity-70">v.2.0.4</text>
                </motion.g>


                {/* --- CENTER ELEMENTS (Scaled & Positioned) --- */}
                <g transform="translate(400, 300)"> {/* Centering the core HUD */}

                    {/* Left Circle Group (Segmented) */}
                    <motion.g
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Outer Scale Ring */}
                        <circle cx="150" cy="150" r="120" fill="none" stroke="white" strokeWidth="1" className="opacity-20" strokeDasharray="2 4" />

                        {/* Segmented Rings */}
                        <path d="M 150,30 A 120,120 0 0,1 270,150" fill="none" stroke="white" strokeWidth="2" className="opacity-60" />
                        <path d="M 150,270 A 120,120 0 0,1 30,150" fill="none" stroke="white" strokeWidth="2" className="opacity-60" />

                        {/* Rotating Inner Ring */}
                        <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ originX: "150px", originY: "150px" }}>
                            <path d="M 150,60 A 90,90 0 0,1 240,150" fill="none" stroke="white" strokeWidth="3" className="opacity-70" />
                            <path d="M 150,240 A 90,90 0 0,1 60,150" fill="none" stroke="white" strokeWidth="3" className="opacity-70" />
                        </motion.g>

                        {/* Inner Target & Crosshair */}
                        <circle cx="150" cy="150" r="50" fill="none" stroke="white" strokeWidth="1" className="opacity-40" />
                        <line x1="130" y1="150" x2="170" y2="150" stroke="white" strokeWidth="1" />
                        <line x1="150" y1="130" x2="150" y2="170" stroke="white" strokeWidth="1" />

                        {/* Data Block */}
                        <text x="50" y="300" fill="white" fontSize="10" fontFamily="monospace" className="opacity-50">SYS.LFT.01</text>
                        <motion.text
                            x="50" y="315" fill="white" fontSize="10" fontFamily="monospace" className="opacity-50"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                        >
                            COORD: 45.22.1
                        </motion.text>
                    </motion.g>

                    {/* Center Complex */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        transform="translate(0, -20)"
                    >
                        {/* Top Bar */}
                        <path d="M 300,50 L 320,30 L 480,30 L 500,50" fill="none" stroke="white" strokeWidth="1" className="opacity-50" />
                        <text x="400" y="45" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace" letterSpacing="6" className="opacity-80">SYSTEM READY</text>

                        <text x="350" y="90" fill="white" fontSize="14" fontFamily="monospace" letterSpacing="4" className="opacity-70">WORLD</text>
                        {/* <text x="450" y="70" fill="white" fontSize="32" fontFamily="Impact, sans-serif" letterSpacing="4" className="opacity-90">SKY</text> */}

                        {/* Animated Frequency Bars */}
                        <g transform="translate(360, 180)">
                            {[0, 15, 30, 45, 60, 75, 90, 105].map((x, i) => (
                                <motion.rect
                                    key={i}
                                    x={x}
                                    y="0"
                                    width="8"
                                    height="30"
                                    fill="white"
                                    className="opacity-60"
                                    animate={{ height: [15, 40, 15] }}
                                    transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                                />
                            ))}
                        </g>

                        <text x="360" y="240" fill="white" fontSize="12" fontFamily="monospace" letterSpacing="4" className="opacity-60">PLANETARIUM</text>

                        {/* Hex Data Stream */}
                        <motion.text
                            x="420" y="270" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace" className="opacity-40"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                        >
                            0x4F 0xA2 0x11 0x9B 0xC4 0xD2
                        </motion.text>
                    </motion.g>

                    {/* Right Circle Group (Radar) */}
                    <motion.g
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        {/* Concentric Rings */}
                        <circle cx="650" cy="180" r="100" fill="none" stroke="white" strokeWidth="1" className="opacity-30" />
                        <circle cx="650" cy="180" r="80" fill="none" stroke="white" strokeWidth="1" className="opacity-50" />
                        <circle cx="650" cy="180" r="50" fill="none" stroke="white" strokeWidth="2" className="opacity-70" />

                        {/* Radar Sweep */}
                        <motion.path
                            d="M 650,180 L 650,80 A 100,100 0 0,1 750,180 Z"
                            fill="url(#hudGradient)"
                            className="opacity-20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ originX: "650px", originY: "180px" }}
                        />

                        {/* Orbiting Dot */}
                        <motion.circle
                            cx="650" cy="80" r="5" fill="white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ originX: "650px", originY: "180px" }}
                        />

                        {/* Brackets */}
                        <path d="M 580,150 L 570,150 L 570,210 L 580,210" fill="none" stroke="white" strokeWidth="2" className="opacity-80" />
                        <path d="M 720,150 L 730,150 L 730,210 L 720,210" fill="none" stroke="white" strokeWidth="2" className="opacity-80" />

                        {/* Data Block */}
                        <motion.text
                            x="690" y="300" fill="white" fontSize="10" fontFamily="monospace" className="opacity-50"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                            TRGT.LCK
                        </motion.text>
                    </motion.g>

                    {/* Connecting Lines with Nodes */}
                    <motion.g
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        style={{ originX: "400px" }}
                    >
                        <line x1="270" y1="150" x2="350" y2="150" stroke="white" strokeWidth="1" className="opacity-30" />
                        <circle cx="310" cy="150" r="3" fill="white" className="opacity-50" />

                        <line x1="550" y1="180" x2="570" y2="180" stroke="white" strokeWidth="1" className="opacity-30" />
                        <circle cx="560" cy="180" r="3" fill="white" className="opacity-50" />
                    </motion.g>
                </g>

                {/* --- EXTRA DECORATIONS --- */}
                {/* Vertical Side Bars */}
                <motion.rect
                    x="20" y="300" width="2" height="300" fill="white" className="opacity-20"
                    animate={{ height: [300, 200, 300], y: [300, 350, 300] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                    x="1578" y="300" width="2" height="300" fill="white" className="opacity-20"
                    animate={{ height: [300, 200, 300], y: [300, 350, 300] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Random Floating Nodes */}
                <motion.circle
                    cx="200" cy="600" r="2" fill="white" className="opacity-40"
                    animate={{ cx: [200, 220, 200], cy: [600, 580, 600] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="1400" cy="200" r="2" fill="white" className="opacity-40"
                    animate={{ cx: [1400, 1380, 1400], cy: [200, 220, 200] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <line x1="190" y1="600" x2="210" y2="600" stroke="white" strokeWidth="0.5" className="opacity-30" />
                <line x1="1400" y1="190" x2="1400" y2="210" stroke="white" strokeWidth="0.5" className="opacity-30" />

            </motion.svg>
        </div>
    )
}
