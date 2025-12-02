import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CYPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const ScrambleHover = ({ text, href, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const startScramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYPHER_CHARS[Math.floor(Math.random() * CYPHER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current);
        setDisplayText(text);
    };

    return (
        <motion.a
            href={href}
            className={className}
            onMouseEnter={startScramble}
            onMouseLeave={stopScramble}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {displayText}
        </motion.a>
    );
};
