"use client";

import { useState } from "react";
import { weddingConfig } from "../config";
import InvitationContainer from "../components/InvitationContainer";

export default function Home() {
  return (
    <main className="min-h-screen relative w-full overflow-hidden bg-ivory">
      <InvitationContainer config={weddingConfig} />
    </main>
  );
}
