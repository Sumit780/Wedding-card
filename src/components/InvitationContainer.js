"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ClosedCard from "./ClosedCard";
import InvitationContent from "./InvitationContent";

export default function InvitationContainer({ config }) {
    const [isOpened, setIsOpened] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
        // Envelope animation triggers. Wait 1.5s before transitioning to the rest of the site.
        setTimeout(() => {
            setShowContent(true);
        }, 1500);
    };

    return (
        <div className="relative w-full h-full min-h-screen bg-ivory">
            <AnimatePresence>
                {!showContent && (
                    <ClosedCard config={config} isOpened={isOpened} onOpen={handleOpen} />
                )}
            </AnimatePresence>

            {showContent && (
                <InvitationContent config={config} />
            )}
        </div>
    );
}
