"use client";
import { motion } from "framer-motion";
import ScratchCard from "./ScratchCard";
import WeddingDetails from "./WeddingDetails";
import EventTimeline from "./EventTimeline";
import CoupleSection from "./CoupleSection";
import RSVPForm from "./RSVPForm";
import ThankYouMessage from "./ThankYouMessage";
import MusicPlayer from "./MusicPlayer";

export default function InvitationContent({ config }) {
    return (
        <div className="w-full flex flex-col items-center text-center relative z-10 overflow-hidden bg-ivory">

            {/* Intro Section */}
            <section className="min-h-[100vh] flex flex-col justify-center items-center px-4 pt-10 relative w-full max-w-4xl mx-auto">
                <motion.p
                    className="serif-font text-xs md:text-sm uppercase tracking-[0.3em] text-dark-green mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Together with their families
                </motion.p>
                <motion.h1
                    className="heading-font text-7xl md:text-[8rem] text-burgundy mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                >
                    {config.brideName}
                </motion.h1>
                <motion.div
                    className="serif-font text-3xl md:text-5xl text-gold my-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                >
                    &
                </motion.div>
                <motion.h1
                    className="heading-font text-7xl md:text-[8rem] text-burgundy mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 2.8 }}
                >
                    {config.groomName}
                </motion.h1>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-[1px] h-20 bg-gold mx-auto"
                    />
                </motion.div>
            </section>

            {/* Components flow */}
            <ScratchCard dateText={`${config.weddingDate} ${config.weddingMonthYear}`} />

            <div className="w-24 h-[1px] bg-gold/40 my-10" />
            <WeddingDetails config={config} />

            <div className="w-24 h-[1px] bg-gold/40 my-10" />
            <EventTimeline events={config.events} />

            <div className="w-24 h-[1px] bg-gold/40 my-10" />
            <CoupleSection config={config} />

            <div className="w-24 h-[1px] bg-gold/40 my-10" />
            <RSVPForm />

            <div className="w-full flex justify-center py-20 pb-40">
                <ThankYouMessage />
            </div>

            <MusicPlayer />
        </div>
    );
}
