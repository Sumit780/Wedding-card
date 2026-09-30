"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThankYouMessage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-32 px-6 w-full text-center relative flex flex-col items-center">
            <motion.div
                className="cursor-pointer relative z-40 p-8 inline-block group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className="heading-font text-6xl md:text-7xl text-burgundy transition-transform duration-500 group-hover:scale-110 group-hover:text-gold">
                    With Love ❤️
                </p>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="absolute top-[85%] left-1/2 w-[85vw] max-w-sm md:w-96 bg-champagne text-burgundy border border-gold p-6 rounded-xl shadow-2xl pointer-events-none"
                            initial={{ opacity: 0, y: -20, scale: 0.9, x: "-50%" }}
                            animate={{ opacity: 1, y: 10, scale: 1, x: "-50%" }}
                            exit={{ opacity: 0, y: -20, scale: 0.9, x: "-50%" }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="serif-font text-lg italic leading-relaxed">
                                "Thank you for being a part of our special day. Your presence, blessings, and love mean the world to us."
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
