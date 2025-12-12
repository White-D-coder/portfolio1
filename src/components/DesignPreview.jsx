import { motion } from "framer-motion";

export const DesignPreview = ({ type }) => {
    const variants = {
        hover: { scale: 1.02, transition: { duration: 0.3 } }
    };

    const renderPreview = () => {
        switch (type) {
            case "dashboard": // Ground Station
                return (
                    <svg viewBox="0 0 400 250" className="w-full h-full opacity-80">
                        {/* Grid Background */}
                        <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Sidebar */}
                        <rect x="10" y="10" width="60" height="230" rx="2" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                        <line x1="20" y1="30" x2="60" y2="30" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                        <line x1="20" y1="50" x2="50" y2="50" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                        <line x1="20" y1="70" x2="55" y2="70" stroke="white" strokeWidth="2" strokeOpacity="0.3" />

                        {/* Main Map Area */}
                        <rect x="80" y="10" width="310" height="150" rx="2" fill="rgba(255,255,255,0.02)" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                        {/* Map Path Animation */}
                        <motion.path
                            d="M 100 100 L 150 50 L 220 80 L 300 40"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <circle cx="100" cy="100" r="3" fill="white" />
                        <circle cx="300" cy="40" r="3" fill="white" />

                        {/* Bottom Data Panels */}
                        <rect x="80" y="170" width="90" height="70" rx="2" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                        <rect x="180" y="170" width="90" height="70" rx="2" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                        <rect x="280" y="170" width="110" height="70" rx="2" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="1" strokeOpacity="0.3" />

                        {/* Graph Lines */}
                        <polyline points="90,220 110,200 130,210 160,190" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                    </svg>
                );

            case "mobile": // CanCure
                return (
                    <div className="w-full h-full flex justify-center items-center p-4">
                        <svg viewBox="0 0 150 280" className="h-full w-auto opacity-90">
                            {/* Phone Frame */}
                            <rect x="10" y="10" width="130" height="260" rx="15" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                            {/* Notch */}
                            <path d="M 50 10 L 100 10 L 100 25 L 50 25 Z" fill="black" />

                            {/* App Header */}
                            <rect x="15" y="35" width="120" height="40" rx="5" fill="rgba(255,255,255,0.1)" />
                            <circle cx="35" cy="55" r="10" fill="rgba(255,255,255,0.3)" />
                            <rect x="55" y="45" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
                            <rect x="55" y="58" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)" />

                            {/* List Items */}
                            {[0, 1, 2, 3].map((i) => (
                                <g key={i} transform={`translate(0, ${i * 45})`}>
                                    <rect x="20" y="90" width="110" height="35" rx="5" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                                    <rect x="30" y="100" width="20" height="15" rx="2" fill="#3b82f6" fillOpacity="0.5" />
                                    <rect x="60" y="100" width="60" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                                    <rect x="60" y="110" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
                                </g>
                            ))}

                            {/* Floating Action Button */}
                            <circle cx="120" cy="240" r="15" fill="#3b82f6" />
                            <line x1="120" y1="232" x2="120" y2="248" stroke="white" strokeWidth="2" />
                            <line x1="112" y1="240" x2="128" y2="240" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                );

            case "analytics": // DRACARYS
                return (
                    <svg viewBox="0 0 400 250" className="w-full h-full opacity-80">
                        {/* Background Grid */}
                        <line x1="40" y1="210" x2="380" y2="210" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                        <line x1="40" y1="210" x2="40" y2="20" stroke="white" strokeWidth="1" strokeOpacity="0.5" />

                        {/* Bar Chart */}
                        {[0.6, 0.8, 0.5, 0.9, 0.7, 0.4, 0.85].map((h, i) => (
                            <motion.rect
                                key={i}
                                x={60 + i * 45}
                                y={210 - (180 * h)}
                                width="30"
                                height={180 * h}
                                fill="url(#barGradient)"
                                initial={{ height: 0, y: 210 }}
                                animate={{ height: 180 * h, y: 210 - (180 * h) }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                            />
                        ))}

                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>

                        {/* Overlay Line Graph */}
                        <motion.polyline
                            points="60,150 105,100 150,160 195,80 240,120 285,180 330,90"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                        />

                        {/* Data Points */}
                        {[
                            { cx: 60, cy: 150 }, { cx: 105, cy: 100 }, { cx: 150, cy: 160 },
                            { cx: 195, cy: 80 }, { cx: 240, cy: 120 }, { cx: 285, cy: 180 }, { cx: 330, cy: 90 }
                        ].map((p, i) => (
                            <motion.circle
                                key={i}
                                cx={p.cx}
                                cy={p.cy}
                                r="3"
                                fill="white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 + (i * 0.2) }}
                            />
                        ))}
                    </svg>
                );

            case "map": // NavSmart
                return (
                    <svg viewBox="0 0 400 250" className="w-full h-full opacity-80">
                        {/* Map Grid */}
                        <defs>
                            <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mapGrid)" />

                        {/* Roads */}
                        <path d="M 0 100 Q 100 100 150 150 T 300 150 T 400 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                        <path d="M 100 0 L 100 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                        <path d="M 250 0 L 250 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />

                        {/* Route */}
                        <motion.path
                            d="M 100 50 L 100 120 L 250 120 L 250 200"
                            fill="none"
                            stroke="#eab308"
                            strokeWidth="3"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Waypoints */}
                        <circle cx="100" cy="50" r="4" fill="#ef4444" />
                        <circle cx="250" cy="200" r="4" fill="#22c55e" />

                        {/* Moving Vehicle */}
                        <motion.circle
                            r="6"
                            fill="white"
                            animate={{
                                cx: [100, 100, 250, 250],
                                cy: [50, 120, 120, 200]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* UI Overlay */}
                        <rect x="10" y="10" width="120" height="40" rx="4" fill="rgba(0,0,0,0.6)" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                        <text x="20" y="35" fill="white" fontSize="12" fontFamily="monospace">ETA: 12 MIN</text>
                    </svg>
                );

            default:
                return <div className="w-full h-full bg-zinc-800" />;
        }
    };

    return (
        <motion.div
            className="w-full h-28 bg-zinc-900/40 border border-zinc-800 rounded-lg overflow-hidden relative group-hover:border-white/30 transition-colors"
            variants={variants}
        >
            {renderPreview()}

            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px] opacity-10 pointer-events-none" />
        </motion.div>
    );
};
