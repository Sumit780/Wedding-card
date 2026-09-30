"use client";
import { motion } from "framer-motion";

export default function EventTimeline({ events }) {
    return (
        <section className="py-20 px-6 w-full max-w-md mx-auto text-center">
            <h2 className="heading-font text-5xl md:text-6xl text-burgundy mb-16">Celebrations</h2>
            <div className="space-y-16 relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gold/50 transform -translate-x-1/2 z-0" />

                {events.map((event, i) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 bg-ivory bg-opacity-95 py-8 px-6 rounded-2xl border border-gold/30 shadow-md transform transition:hover hover:scale-105 duration-500"
                    >
                        <div className="text-4xl mb-4 bg-ivory inline-block rounded-full px-2 border border-ivory">{event.icon}</div>
                        <h3 className="serif-font text-3xl text-burgundy mb-3">{event.title}</h3>
                        <div className="sans-font text-sm text-text-dark/80 space-y-1">
                            <p className="uppercase tracking-widest text-dark-green text-xs mb-2">{event.date}</p>
                            <p>{event.time}</p>
                            <p className="font-bold text-gold pt-3 italic">{event.venue}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
