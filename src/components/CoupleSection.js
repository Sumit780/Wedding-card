"use client";
import { motion } from "framer-motion";

export default function CoupleSection({ config }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="py-24 px-6 w-full max-w-5xl mx-auto text-center" id="couple">
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                {/* Bride */}
                <motion.div variants={itemVariants} className="flex flex-col items-center">
                    <div className="w-56 h-56 rounded-full border-4 border-gold p-2 mb-6 shadow-xl transform transition hover:scale-105 duration-500">
                        <div className="w-full h-full rounded-full bg-champagne overflow-hidden flex items-center justify-center border border-gold border-dashed">
                            <span className="heading-font text-7xl text-burgundy opacity-50">{config.brideName[0]}</span>
                        </div>
                    </div>
                    <h3 className="heading-font text-5xl text-burgundy mb-2">{config.brideName}</h3>
                    <p className="sans-font text-xs text-text-dark/70 uppercase tracking-[0.2em] mb-2">Daughter of</p>
                    <p className="serif-font text-lg text-dark-green font-medium">{config.brideParents}</p>
                </motion.div>

                {/* Divider / Ampersand for Desktop */}
                <motion.div variants={itemVariants} className="hidden md:block serif-font text-6xl text-gold pb-16">
                    &
                </motion.div>

                {/* Ampersand for Mobile */}
                <motion.div variants={itemVariants} className="block md:hidden serif-font text-5xl text-gold py-4">
                    &
                </motion.div>

                {/* Groom */}
                <motion.div variants={itemVariants} className="flex flex-col items-center">
                    <div className="w-56 h-56 rounded-full border-4 border-gold p-2 mb-6 shadow-xl transform transition hover:scale-105 duration-500">
                        <div className="w-full h-full rounded-full bg-champagne overflow-hidden flex items-center justify-center border border-gold border-dashed">
                            <span className="heading-font text-7xl text-burgundy opacity-50">{config.groomName[0]}</span>
                        </div>
                    </div>
                    <h3 className="heading-font text-5xl text-burgundy mb-2">{config.groomName}</h3>
                    <p className="sans-font text-xs text-text-dark/70 uppercase tracking-[0.2em] mb-2">Son of</p>
                    <p className="serif-font text-lg text-dark-green font-medium">{config.groomParents}</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
