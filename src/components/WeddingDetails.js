"use client";
import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";

export default function WeddingDetails({ config }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <motion.section
            className="py-20 px-6 w-full max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants} className="heading-font text-5xl md:text-6xl text-burgundy mb-12">
                Wedding Details
            </motion.h2>

            <div className="space-y-12">
                <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="serif-font text-xl text-gold uppercase tracking-widest">When</h3>
                    <p className="sans-font text-lg text-text-dark">{config.weddingDay}, {config.weddingDate} {config.weddingMonthYear}</p>
                    <p className="sans-font text-lg text-text-dark">{config.weddingTime}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="serif-font text-xl text-gold uppercase tracking-widest">Where</h3>
                    <p className="serif-font text-2xl font-bold text-burgundy">{config.venueName}</p>
                    <p className="sans-font text-sm text-text-dark/80 max-w-sm mx-auto uppercase tracking-wide">{config.venueAddress}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <a href={config.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-ivory border text-text-dark border-gold rounded-full hover:bg-gold hover:text-white transition-colors duration-300 w-full sm:w-auto justify-center shadow-sm">
                        <MapPin size={18} />
                        <span className="serif-font uppercase text-xs tracking-wider">View Location</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-8 py-4 bg-burgundy border border-burgundy text-text-light rounded-full hover:brightness-110 transition-colors duration-300 w-full sm:w-auto justify-center shadow-sm">
                        <CalendarDays size={18} />
                        <span className="serif-font uppercase text-xs tracking-wider">Add to Calendar</span>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
