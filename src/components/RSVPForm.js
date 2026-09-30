"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitted");
    };

    return (
        <section className="py-24 px-4 sm:px-6 w-full max-w-xl mx-auto text-center relative z-20" id="rsvp">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="bg-ivory/90 backdrop-blur-sm border border-gold/40 rounded-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-burgundy/10 rounded-full blur-3xl" />

                <h2 className="heading-font text-5xl md:text-6xl text-burgundy mb-2 relative z-10">Will you join us?</h2>
                <p className="serif-font text-dark-green mb-10 relative z-10 uppercase tracking-widest text-xs">Please reply by Dec 1st</p>

                {status === "submitted" ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8 relative z-10">
                        <div className="text-6xl mb-4">✨</div>
                        <h3 className="serif-font text-2xl text-burgundy uppercase tracking-widest">Thank You!</h3>
                        <p className="sans-font text-text-dark mt-2">Your response has been received.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                        <div>
                            <label className="block sans-font text-xs uppercase tracking-widest text-text-dark mb-2">Guest Name(s)</label>
                            <input required type="text" className="w-full px-4 py-3 bg-transparent border-b border-gold/50 focus:border-gold outline-none serif-font transition-colors" placeholder="e.g. John & Jane" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block sans-font text-xs uppercase tracking-widest text-text-dark mb-2">Total Guests</label>
                                <select className="w-full px-4 py-3 bg-transparent border-b border-gold/50 focus:border-gold outline-none serif-font appearance-none">
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block sans-font text-xs uppercase tracking-widest text-text-dark mb-2">Phone</label>
                                <input required type="tel" className="w-full px-4 py-3 bg-transparent border-b border-gold/50 focus:border-gold outline-none serif-font" placeholder="+1..." />
                            </div>
                        </div>

                        <div>
                            <label className="block sans-font text-xs uppercase tracking-widest text-text-dark mb-2">Message (Optional)</label>
                            <input type="text" className="w-full px-4 py-3 bg-transparent border-b border-gold/50 focus:border-gold outline-none serif-font transition-colors" placeholder="Any dietary requirements?" />
                        </div>

                        <div className="pt-6 flex flex-col gap-3">
                            <button type="submit" className="w-full py-4 bg-burgundy text-ivory rounded-full sans-font uppercase tracking-widest text-xs hover:bg-opacity-90 transition shadow-lg">
                                Yes, I'll be there ❤️
                            </button>
                            <button type="button" onClick={() => setStatus("declined")} className="w-full py-4 bg-transparent border border-gold text-text-dark rounded-full sans-font uppercase tracking-widest text-xs hover:bg-champagne transition shadow-md">
                                Sorry, can't make it
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </section>
    );
}
