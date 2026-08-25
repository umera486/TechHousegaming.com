"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import OurStory from "@/components/OurStory";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0f] selection:bg-[#FF003C] selection:text-white">
      {isLoading ? (
        <Header onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          
          {/* STACKING CONTAINER */}
          <div className="relative z-10 bg-[#0a0a0f] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <Hero />
            <MarqueeSection />
            
            {/* Scroll Indicator Marker before Our Story */}
            <div className="w-full py-6 bg-[#0a0a0f] border-y border-white/10 flex items-center justify-center">
              <span className="font-mono text-xs text-[#F7B000] tracking-[0.3em] uppercase animate-pulse">
                ↓ SCROLL TO LOAD ARCHIVES ↓
              </span>
            </div>

            <OurStory />
          </div>

          {/* Cinematic Parallax Footer */}
          <div className="relative z-0">
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}