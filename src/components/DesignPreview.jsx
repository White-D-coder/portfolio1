import { motion } from "framer-motion";

export const DesignPreview = ({ type }) => {
    const variants = {
        hover: { scale: 1.02, transition: { duration: 0.3 } }
    };

    const renderPreview = () => {
        switch (type) {
            case "dashboard": // Ground Station (Satellite/Radar)
                return (
                    <svg viewBox="0 0 300 100" className="w-full h-full opacity-80">
                        {/* Radar Sweep Background */}
                        <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <circle cx="150" cy="150" r="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <circle cx="150" cy="150" r="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />

                        {/* Rotating Radar Line */}
                        <motion.line
                            x1="150" y1="150" x2="150" y2="10"
                            stroke="url(#radarGradient)"
                            strokeWidth="2"
                            animate={{ rotate: 360 }}
                            style={{ originX: "150px", originY: "150px" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        <defs>
                            <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Satellite Icon */}
                        <g transform="translate(130, 30)">
                            <path d="M 10 20 Q 20 30 30 20" stroke="white" fill="none" />
                            <line x1="20" y1="25" x2="20" y2="10" stroke="white" />
                            <circle cx="20" cy="10" r="2" fill="#ef4444" />
                            <motion.circle cx="20" cy="10" r="10" stroke="#ef4444" strokeWidth="1" fill="none"
                                animate={{ r: [2, 15], opacity: [1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </g>

                        {/* Data Text */}
                        <text x="10" y="20" fill="#3b82f6" fontSize="8" fontFamily="monospace">SIGNAL: ACQUIRED</text>
                        <text x="240" y="20" fill="white" fontSize="8" fontFamily="monospace">SAT_01</text>
                    </svg>
                );

            case "mobile": // CanCure (Medical DNA)
                return (
                    <svg viewBox="0 0 300 100" className="w-full h-full opacity-80">
                        {/* DNA Helix Animation */}
                        <g transform="translate(0, 30)">
                            <motion.path
                                d="M 0 20 Q 75 60 150 20 T 300 20"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="2"
                                animate={{ d: ["M 0 20 Q 75 60 150 20 T 300 20", "M 0 20 Q 75 -20 150 20 T 300 20"] }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 0 20 Q 75 -20 150 20 T 300 20"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                animate={{ d: ["M 0 20 Q 75 -20 150 20 T 300 20", "M 0 20 Q 75 60 150 20 T 300 20"] }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                        </g>

                        {/* Medical Cross Pulse */}
                        <g transform="translate(140, 40)">
                            <rect x="8" y="0" width="4" height="20" fill="white" />
                            <rect x="0" y="8" width="20" height="4" fill="white" />
                            <motion.rect x="-5" y="-5" width="30" height="30" stroke="white" strokeWidth="1" fill="none"
                                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </g>

                        <text x="10" y="90" fill="white" fontSize="8" fontFamily="monospace">GENOME_SEQ</text>
                        <text x="250" y="90" fill="#ef4444" fontSize="8" fontFamily="monospace">MATCH</text>
                    </svg>
                );

            case "analytics": // DRACARYS (Target Lock)
                return (
                    <svg viewBox="0 0 300 100" className="w-full h-full opacity-80">
                        {/* Target Reticle */}
                        <g transform="translate(150, 50)">
                            <circle cx="0" cy="0" r="30" stroke="#ef4444" strokeWidth="1" fill="none" strokeDasharray="10,5" />
                            <line x1="-40" y1="0" x2="-20" y2="0" stroke="#ef4444" strokeWidth="2" />
                            <line x1="20" y1="0" x2="40" y2="0" stroke="#ef4444" strokeWidth="2" />
                            <line x1="0" y1="-40" x2="0" y2="-20" stroke="#ef4444" strokeWidth="2" />
                            <line x1="0" y1="20" x2="0" y2="40" stroke="#ef4444" strokeWidth="2" />

                            {/* Locking Animation */}
                            <motion.circle cx="0" cy="0" r="40" stroke="#ef4444" strokeWidth="1" fill="none"
                                animate={{ rotate: 90, scale: [1.2, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                            />
                            <circle cx="0" cy="0" r="2" fill="#ef4444" />
                        </g>

                        {/* Scrolling Data */}
                        <g transform="translate(10, 20)">
                            {[0, 1, 2].map(i => (
                                <motion.rect
                                    key={i}
                                    x="0" y={i * 10} width={20 + Math.random() * 40} height="4" fill="#ef4444" opacity="0.5"
                                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                                    transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                                />
                            ))}
                        </g>

                        <text x="230" y="90" fill="#ef4444" fontSize="8" fontFamily="monospace">TARGET_LOCKED</text>
                    </svg>
                );

            case "map": // NavSmart (Path Trace)
                return (
                    <svg viewBox="0 0 300 100" className="w-full h-full opacity-80">
                        {/* Grid */}
                        <defs>
                            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.1)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />

                        {/* Route Path */}
                        <motion.path
                            d="M 20 50 L 80 50 L 120 20 L 200 20 L 240 80 L 280 80"
                            fill="none"
                            stroke="#eab308"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Moving Node */}
                        <motion.circle r="4" fill="white"
                            animate={{ offsetDistance: "100%" }}
                            style={{ offsetPath: "path('M 20 50 L 80 50 L 120 20 L 200 20 L 240 80 L 280 80')" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Waypoints */}
                        <circle cx="20" cy="50" r="2" fill="#eab308" />
                        <circle cx="120" cy="20" r="2" fill="#eab308" />
                        <circle cx="240" cy="80" r="2" fill="#eab308" />
                        <circle cx="280" cy="80" r="2" fill="#eab308" />

                        <text x="10" y="90" fill="#eab308" fontSize="8" fontFamily="monospace">ROUTE_OPT</text>
                    </svg>
                );

            default:
                return <div className="w-full h-full bg-zinc-800" />;
        }
    };

    return (
        <motion.div
            className="w-full h-24 bg-zinc-900/40 border border-zinc-800 rounded-lg overflow-hidden relative group-hover:border-white/30 transition-colors"
            variants={variants}
        >
            {renderPreview()}

            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px] opacity-10 pointer-events-none" />
        </motion.div>
    );
};
