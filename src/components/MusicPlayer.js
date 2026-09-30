"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(e => console.log(e));
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <>
            <audio
                ref={audioRef}
                loop
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            />
            <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-ivory/90 backdrop-blur shadow-2xl border-2 border-gold rounded-full flex items-center justify-center text-burgundy hover:scale-110 transition-transform"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
            >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </motion.button>
        </>
    );
}
