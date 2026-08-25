"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// Import MarqueeSection (Ready for the new design)
import MarqueeSection from "@/components/MarqueeSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0f]">
      {isLoading ? (
        <Header onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          
          {/* =========================================
              THE STACKING PARALLAX ENGINE STARTS HERE
              ========================================= */}
          
          {/* Component 1: Hero (Normal Flow) */}
          <Hero />
          
          {/* Component 2: 1/3rd Height Marquee */}
          <MarqueeSection />

          {/* Component 3: (Future Color Shifting Tiles will go here) */}
          
        </>
      )}
    </main>
  );
}