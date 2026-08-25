"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const storyItems = [
    {
      id: "01",
      title: "THE FOUNDATION",
      desc: "Established in Lahore, engineered to break international mobile gaming benchmarks.",
      img: "/game1.webp",
    },
    {
      id: "02",
      title: "HYPERSONIC TECH",
      desc: "Custom rendering architecture delivering uncompromising, locked 60FPS combat.",
      img: "/game2.webp",
    },
    {
      id: "03",
      title: "GLOBAL DOMINATION",
      desc: "Scaling into a cross-platform publisher with millions of active global operators.",
      img: "/game3.webp",
    },
  ];

  return (
    // Fixed h-screen for Snap Scrolling. Solid Brutalist Yellow Background.
    <section 
      ref={containerRef}
      className="relative w-full h-screen bg-[#F7B000] text-[#0a0a0f] flex flex-col justify-center overflow-hidden"
    >
      
      {/* ========================================================
          ENHANCEMENT 1: BACKGROUND INFINITE TICKER (GPU Optimized)
          ======================================================== */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-20 flex">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap text-8xl font-black uppercase tracking-tighter"
        >
          <span className="mx-8">TECH HOUSE GAMES — EST. 2021 —</span>
          <span className="mx-8">TECH HOUSE GAMES — EST. 2021 —</span>
          <span className="mx-8">TECH HOUSE্বা GAMES — EST. 2021 —</span>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mt-12 md:mt-0">
        
        {/* ========================================================
            HEADER & MOBILE SWIPE INDICATOR
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[#0a0a0f] pb-4 md:pb-6 mb-8 md:mb-12">
          <div>
            <h2 className="text-5xl sm:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-none text-[#0a0a0f]">
              OUR STORY
            </h2>
          </div>
          
          {/* Mobile indicator for swiping (Hidden on Desktop) */}
          <div className="mt-4 md:hidden flex items-center gap-2 text-sm font-black uppercase animate-pulse">
            <span>Swipe to explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          
          {/* Desktop small detail (Hidden on Mobile) */}
          <div className="hidden md:block">
            <p className="font-bold text-sm tracking-widest uppercase bg-[#0a0a0f] text-[#F7B000] px-4 py-2">
              LAHAORE // PK
            </p>
          </div>
        </div>

        {/* ========================================================
            ENHANCEMENT 2: SUPER MOBILE RESPONSIVE GRID / CAROUSEL
            ======================================================== */}
        {/* 
            Desktop: grid-cols-3 (Normal side-by-side)
            Mobile: flex & overflow-x-auto (Horizontal Swipe without breaking vertical snap)
            [&::-webkit-scrollbar]:hidden hides the ugly scrollbar on mobile
        */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {storyItems.map((item) => (
            <div
              key={item.id}
              // min-w-[85vw] makes it take up almost full screen width on mobile for swiping
              className="group relative bg-[#0a0a0f] text-white flex flex-col justify-between border-4 border-[#0a0a0f] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#FF003C] transition-all duration-300 transform-gpu md:hover:-translate-y-3 cursor-pointer h-[50vh] sm:h-[55vh] min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0"
            >
              
              {/* Image Frame */}
              <div className="relative w-full h-[55%] border-b-4 border-[#0a0a0f] overflow-hidden bg-black">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform-gpu transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Massive Number Tag */}
                <div className="absolute top-0 left-0 bg-[#F7B000] text-[#0a0a0f] text-2xl md:text-3xl font-black px-4 py-2 border-r-4 border-b-4 border-[#0a0a0f] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {item.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 md:p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-[#110E1B] to-[#0a0a0f]">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white group-hover:text-[#F7B000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 mt-2 md:mt-3 font-mono leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                
                {/* Action Arrow */}
                <div className="flex justify-between items-end mt-4">
                  <span className="text-[10px] text-neutral-500 font-mono font-bold tracking-widest hidden md:block">
                    // SECURE ARCHIVE
                  </span>
                  <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white text-white flex items-center justify-center group-hover:bg-[#FF003C] group-hover:border-[#FF003C] group-hover:text-white transition-all transform-gpu group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}