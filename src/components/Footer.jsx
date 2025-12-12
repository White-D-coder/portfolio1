"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 },
    },
};

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-12 px-6 md:px-16 border-t border-zinc-900">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0"
            >
                {/* Left: Address and Contacts */}
                <div className="flex flex-col sm:flex-row gap-8 md:gap-20 text-gray-400 text-sm w-full md:w-auto">
                    <motion.div variants={itemVariants}>
                        <h3 className="uppercase tracking-widest text-white mb-2 border-b border-gray-700 pb-1">Address</h3>
                        <p>Pune, India</p>
                        <p>Newton School of Technology</p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="uppercase tracking-widest text-white mb-2 border-b border-gray-700 pb-1">Contacts</h3>
                        <div className="flex items-center mt-1">
                            <Mail className="w-4 h-4 mr-2" />
                            <span>deeptanu.bhunia@adypu.edu.in</span>
                        </div>
                        <div className="flex items-center mt-1">
                            <Phone className="w-4 h-4 mr-2" />
                            <span>+91 9821419780</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Social Media */}
                <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                    <motion.div variants={itemVariants} className="flex space-x-4 mb-4 items-center">
                        <span className="text-sm uppercase tracking-wider text-gray-400">
                            — Follow
                        </span>
                        {[
                            { Icon: Github, url: "https://github.com/White-D-coder" },
                            { Icon: Linkedin, url: "https://www.linkedin.com/in/deeptanu-bhunia-184426297/" },
                            { Icon: Instagram, url: "https://www.instagram.com/iskybound_/" },
                            { Icon: Twitter, url: "#" },
                        ].map(({ Icon, url }, index) => (
                            <motion.a
                                key={index}
                                variants={itemVariants}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 border border-gray-800 rounded-full hover:bg-white/10 hover:border-white/30"
                                aria-label={Icon.displayName}
                            >
                                <Icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
}
