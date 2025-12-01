"use client"

import { motion } from "framer-motion"

export function OrganicIris({ className = "" }) {
    // Generate random fibrous paths
    const fibers = [...Array(60)].map((_, i) => {
        const angle = (i / 60) * 360
        const length = 100 + Math.random() * 100
        const control1 = 50 + Math.random() * 50
        const control2 = 80 + Math.random() * 50

        // Create a curved path radiating from center
        return {
            d: `M 0,0 Q ${control1},${Math.random() * 20 - 10} ${length},${Math.random() * 40 - 20}`,
            rotation: angle,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2
        }
    })

    return (
        <div className={`relative w-[600px] h-[600px] pointer-events-none select-none ${className}`}>
            <motion.svg
                viewBox="-250 -250 500 500"
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <defs>
                    <radialGradient id="iris-glow" cx="0" cy="0" r="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="white" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Background Glow */}
                <circle r="250" fill="url(#iris-glow)" />

                {/* Rotating Container for Fibers */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    {fibers.map((fiber, i) => (
                        <motion.g key={i} rotation={fiber.rotation}>
                            <motion.path
                                d={fiber.d}
                                fill="none"
                                stroke="white"
                                strokeWidth={Math.random() * 1 + 0.2}
                                strokeOpacity={0.3}
                                transform={`rotate(${fiber.rotation})`}
                                initial={{ pathLength: 0 }}
                                animate={{
                                    pathLength: [0.5, 1, 0.5],
                                    strokeOpacity: [0.1, 0.4, 0.1]
                                }}
                                transition={{
                                    duration: fiber.duration * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: fiber.delay
                                }}
                            />
                        </motion.g>
                    ))}
                </motion.g>

                {/* Inner Complex Ring */}
                <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(40)].map((_, i) => (
                        <path
                            key={`inner-${i}`}
                            d={`M 80,0 L 120,0`}
                            stroke="white"
                            strokeWidth="0.5"
                            strokeOpacity="0.2"
                            transform={`rotate(${i * 9})`}
                        />
                    ))}
                </motion.g>

                {/* Central Void (Pupil) */}
                <circle r="70" fill="black" />

                {/* Pupil Rim */}
                <motion.circle
                    r="70"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    strokeDasharray="4 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

            </motion.svg>
        </div>
    )
}
