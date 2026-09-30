"use client";
import { motion } from "framer-motion";

export default function ClosedCard({ config, isOpened, onOpen }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-champagne bg-opacity-95 text-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        >
            {/* Background Particles Placeholder */}
            <div className="absolute inset-0 pointer-events-none opacity-30 flex justify-center items-center">
                <motion.div className="w-[800px] h-[800px] bg-gold rounded-full blur-[120px] opacity-20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} />
            </div>

            <div className="relative w-full max-w-sm perspective-1500" onClick={!isOpened ? onOpen : undefined}>

                <motion.div
                    className="relative w-[300px] md:w-[360px] h-[420px] md:h-[500px] mx-auto cursor-pointer transform-style-3d"
                    initial={{ scale: 0.95, y: 10 }}
                    animate={
                        isOpened
                            ? { scale: 1.2, z: 100, transition: { duration: 1.5 } }
                            : { scale: [0.95, 1, 0.95], y: [10, 0, 10], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } }
                    }
                >
                    {/* Card Back / Envelope Back */}
                    <div className="absolute inset-0 bg-ivory rounded-md shadow-2xl flex items-center justify-center border border-gold">
                        <div className="text-center transition-opacity duration-1000 delay-500" style={{ opacity: isOpened ? 1 : 0 }}>
                            <p className="heading-font text-5xl text-burgundy mb-2">{config.brideName[0]} & {config.groomName[0]}</p>
                        </div>
                    </div>

                    {/* Card Front Cover */}
                    <motion.div
                        className="absolute inset-0 bg-[#fdfbf7] rounded-md shadow-xl flex items-center justify-center border-[6px] border-double border-gold backface-hidden z-10 p-6"
                        animate={
                            isOpened
                                ? { rotateY: -110, opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }
                                : { rotateY: 0 }
                        }
                        style={{ transformOrigin: "left center" }}
                    >
                        {/* Front Cover Design */}
                        <div className="border border-gold w-full h-full flex items-center justify-center p-4">
                            <div className="space-y-6 flex flex-col items-center">
                                <div className="w-12 h-12 mb-4 border border-gold rounded-full flex items-center justify-center text-burgundy font-serif">
                                    G&A
                                </div>
                                <div className="heading-font text-4xl md:text-5xl text-burgundy">{config.brideName} & {config.groomName}</div>
                                <div className="serif-font text-xs uppercase tracking-widest text-dark-green mt-8">You are cordially invited</div>
                                <div className="sans-font text-[10px] mt-6 px-4 py-2 bg-burgundy text-text-light rounded-full uppercase tracking-wider animate-pulse transition-transform hover:scale-105">
                                    Tap to Open
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
