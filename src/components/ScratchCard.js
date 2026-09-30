"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function ScratchCard({ dateText }) {
    const canvasRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);

    useEffect(() => {
        if (isRevealed) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        // Fill the mask (Rose/Champagne gradient)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#D4AF37"); // Gold
        gradient.addColorStop(1, "#F5EAE1"); // Champagne

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#800020"; // Burgundy text
        ctx.font = "24px Lora, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Scratch Here ✨", canvas.width / 2, canvas.height / 2);

        let isDrawing = false;

        function getMousePos(evt) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return {
                x: (evt.clientX - rect.left) * scaleX,
                y: (evt.clientY - rect.top) * scaleY
            };
        }

        function getTouchPos(evt) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return {
                x: (evt.touches[0].clientX - rect.left) * scaleX,
                y: (evt.touches[0].clientY - rect.top) * scaleY
            };
        }

        function startPosition(e) {
            isDrawing = true;
            e.preventDefault();
            draw(e);
        }

        function endPosition() {
            isDrawing = false;
            ctx.beginPath();
            checkProgress();
        }

        function draw(e) {
            if (!isDrawing) return;
            e.preventDefault();

            const pos = e.type.includes('mouse') ? getMousePos(e) : getTouchPos(e);

            ctx.globalCompositeOperation = "destination-out";
            ctx.lineWidth = 40;
            ctx.lineCap = "round";
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }

        // Throttle progress check
        let checkTimeout;
        function checkProgress() {
            if (checkTimeout) clearTimeout(checkTimeout);
            checkTimeout = setTimeout(() => {
                const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                let transparentPixels = 0;
                // Sample every 4th pixel to improve performance
                for (let i = 3; i < pixels.length; i += 16) {
                    if (pixels[i] === 0) {
                        transparentPixels++;
                    }
                }

                const totalSampledPixels = pixels.length / 16;
                const scratchedPercentage = (transparentPixels / totalSampledPixels) * 100;

                if (scratchedPercentage > 50) {
                    handleReveal(ctx, canvas);
                }
            }, 200);
        }

        function handleReveal(ctx, canvas) {
            canvas.style.transition = "opacity 0.6s ease";
            canvas.style.opacity = "0";

            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.5 },
                colors: ['#D4AF37', '#800020', '#F5EAE1', '#FFFFFF']
            });

            setTimeout(() => {
                setIsRevealed(true);
                setShowCelebration(true);
            }, 600);
        }

        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", endPosition);
        canvas.addEventListener("mousemove", draw);

        // Touch events
        canvas.addEventListener("touchstart", startPosition, { passive: false });
        canvas.addEventListener("touchend", endPosition);
        canvas.addEventListener("touchmove", draw, { passive: false });

        return () => {
            canvas.removeEventListener("mousedown", startPosition);
            canvas.removeEventListener("mouseup", endPosition);
            canvas.removeEventListener("mousemove", draw);
            canvas.removeEventListener("touchstart", startPosition);
            canvas.removeEventListener("touchend", endPosition);
            canvas.removeEventListener("touchmove", draw);
            if (checkTimeout) clearTimeout(checkTimeout);
        };
    }, [isRevealed]);

    return (
        <div className="flex flex-col items-center justify-center my-20 w-full px-4">
            <motion.p
                className="serif-font text-sm uppercase tracking-widest text-dark-green mb-8"
            >
                Scratch to reveal our special date ✨
            </motion.p>

            <div className="relative w-full max-w-sm h-48 mx-auto rounded-xl overflow-hidden shadow-2xl border border-gold bg-ivory">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-champagne">
                    <h2 className="heading-font text-5xl text-burgundy">{dateText}</h2>
                </div>

                {!isRevealed && (
                    <canvas
                        ref={canvasRef}
                        width={400}
                        height={200}
                        className="absolute inset-0 w-full h-full cursor-pointer"
                        style={{ touchAction: "none" }}
                    />
                )}
            </div>

            <AnimatePresence>
                {showCelebration && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 serif-font text-2xl text-burgundy"
                    >
                        Save the Date ❤️
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
