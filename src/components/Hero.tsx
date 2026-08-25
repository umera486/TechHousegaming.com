"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Added 'Variants' import
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const techWords = [
    "AR, VR & AI",
    "HYPERSONIC PHYSICS",
    "NEXT-GEN GRAPHICS",
    "UX ENGINEERING"
  ];
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [techWords.length]);

  // Framer Motion Variants for Staggered Reveal (Strictly Typed)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.7 }
    }
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // TypeScript Fix: Explicitly typing the array as a 4-number tuple
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0f] overflow-hidden flex items-center justify-center select-none">
      
      {/* ========================================================
          LAYER 0: SMOOTH LINEAR WAVE BACKGROUND
          ======================================================== */}
      <div className="absolute inset-0 z-0 transform-gpu overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)", filter: "brightness(1.5) blur(10px)" }}
          animate={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)", filter: "brightness(0.7) blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.15, 1] as [number, number, number, number] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/background1.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/80" />
      </div>

      {/* ========================================================
          LAYER 1: TYPOGRAPHY & MOBILE HUD (Under Heading)
          ======================================================== */}
      <div className="absolute top-[12vh] sm:top-[15vh] inset-x-0 z-10 flex flex-col items-center text-center pointer-events-none transform-gpu px-4 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={textItemVariants} className="mb-2 sm:mb-4">
            <span className="text-[#F7B000] font-black uppercase tracking-[0.25em] text-[9px] sm:text-xs md:text-sm drop-shadow-md">
              PAKISTAN'S LEADING
            </span>
          </motion.div>
          
          <motion.h1 variants={textItemVariants} className="text-[11vw] sm:text-[8.5vw] md:text-[5.5vw] lg:text-[4.5vw] font-black uppercase tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] leading-[0.95]">
            MOBILE <span className="text-[#F7B000]">GAMES</span>
          </motion.h1>
          
          <motion.h1 variants={textItemVariants} className="text-[11vw] sm:text-[8.5vw] md:text-[5.5vw] lg:text-[4.5vw] font-black uppercase tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] leading-[0.95]">
            DEVELOPERS &
          </motion.h1>
          
          <motion.h1 variants={textItemVariants} className="text-[11vw] sm:text-[8.5vw] md:text-[5.5vw] lg:text-[4.5vw] font-black uppercase tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] leading-[0.95]">
            PUBLISHERS
          </motion.h1>

          {/* --- MOBILE ONLY HUD: Shows under heading on mobile, hidden on desktop --- */}
          <motion.div variants={textItemVariants} className="flex md:hidden flex-col items-center mt-6 w-full max-w-[280px] pointer-events-auto z-50 text-left">
            <div className="bg-black/50 p-3 sm:p-4 border-l-[2px] border-[#F7B000] backdrop-blur-md w-full">
              <h3 className="text-[#F7B000] font-black uppercase text-[8px] sm:text-[9px] tracking-widest mb-1.5 opacity-90">
                CORE DIRECTIVE
              </h3>
              <p className="text-[9px] sm:text-[10px] text-gray-200 font-mono leading-relaxed tracking-wider">
                We are passionate to find new & innovative technologies and implement them in our games. We are Exploring
                <br className="my-1" />
                
                <span className="inline-block min-w-[130px] h-[18px] text-white font-bold bg-black/60 px-1.5 py-0 border border-white/5 overflow-hidden align-middle relative my-0.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTechIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-start px-1.5 text-[#F7B000]"
                    >
                      {techWords[currentTechIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                
                <br className="my-1" />
                and continuously working on UX to engage our players for a long period of time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================
          LAYER 2: ABSOLUTE CENTER-ANCHORED MASSIVE CHARACTERS
          ======================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: "15vh" }}
          animate={{ opacity: 1, y: "0vh" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.8 }}
          className="absolute bottom-0 right-1/2 translate-x-[45%] sm:translate-x-[35%] md:translate-x-[15%] h-[52vh] sm:h-[60vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] z-20 pointer-events-auto filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.95)]"
        >
          <img 
            src="/chr1.png" 
            alt="Tactical Operative 1" 
            className="h-full w-auto max-w-none object-contain object-bottom"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "15vh" }}
          animate={{ opacity: 1, y: "0vh" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.9 }}
          className="absolute bottom-0 left-1/2 -translate-x-[45%] sm:-translate-x-[35%] md:-translate-x-[15%] h-[52vh] sm:h-[60vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] z-30 pointer-events-auto filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.95)]"
        >
          <img 
            src="/chr2.png" 
            alt="Tactical Operative 2" 
            className="h-full w-auto max-w-none object-contain object-bottom"
          />
        </motion.div>
      </div>

      {/* ========================================================
          LAYER 3: SIDE HUD (Desktop) & CENTERED CTA BUTTONS
          ======================================================== */}
      <div className="absolute inset-0 z-30 pointer-events-none transform-gpu w-full max-w-[1440px] mx-auto">
        
        {/* --- DESKTOP ONLY HUD --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="absolute top-[50%] sm:top-1/2 -translate-y-1/2 left-4 xl:left-8 flex-col max-w-[240px] xl:max-w-[280px] pointer-events-auto hidden md:flex"
        >
          <div className="bg-black/40 p-4 xl:p-5 border-l-[3px] border-[#F7B000] backdrop-blur-md">
            <h3 className="text-[#F7B000] font-black uppercase text-[9px] xl:text-[10px] tracking-widest mb-3 opacity-90">
              CORE DIRECTIVE
            </h3>
            <p className="text-[10px] xl:text-[11px] text-gray-200 font-mono leading-relaxed tracking-wider">
              We are passionate to find new & innovative technologies and implement them in our games. We are Exploring
              <br className="my-1.5" />
              
              <span className="inline-block min-w-[145px] xl:min-w-[160px] h-[22px] text-white font-bold bg-black/60 px-2 py-0.5 border border-white/5 overflow-hidden align-middle relative my-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTechIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-start px-2 text-[#F7B000]"
                  >
                    {techWords[currentTechIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              
              <br className="my-1.5" />
              and continuously working on UX to engage our players for a long period of time.
            </p>
          </div>
        </motion.div>

        {/* --- CENTERED BUTTONS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="absolute bottom-12 sm:bottom-24 lg:bottom-28 inset-x-0 flex justify-center items-center space-x-2 sm:space-x-8 pointer-events-none px-2 z-50 w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto relative px-4 py-3 sm:px-8 sm:py-4 bg-[#F7B000] border-2 border-[#0a0a0f] transform -skew-x-12 shadow-[4px_4px_0px_0px_#0a0a0f,6px_6px_0px_0px_#FF003C] hover:bg-[#FF003C] hover:text-white transition-colors duration-200 group cursor-pointer"
          >
            <div className="transform skew-x-12 flex items-center space-x-2">
              <span className="text-[10px] sm:text-sm font-black text-[#0a0a0f] group-hover:text-white tracking-widest uppercase">
                CONTACT US
              </span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto relative px-4 py-3 sm:px-8 sm:py-4 bg-white border-2 border-[#0a0a0f] transform -skew-x-12 shadow-[4px_4px_0px_0px_#F7B000] hover:bg-[#0a0a0f] group transition-colors duration-200 cursor-pointer"
          >
            <div className="transform skew-x-12 flex items-center space-x-2">
              <span className="text-[10px] sm:text-sm font-black text-[#0a0a0f] group-hover:text-[#F7B000] tracking-widest uppercase">
                EXPLORE GAMES
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0a0a0f] group-hover:text-[#F7B000] transition-colors" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* ========================================================
          LAYER 4: BRUTALIST V-CUT DIVIDER
          ======================================================== */}
      <div className="absolute bottom-[-1px] left-0 w-full z-40 pointer-events-none drop-shadow-[0_-10px_25px_rgba(247,176,0,0.15)]">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-10 sm:h-16 md:h-24 lg:h-28"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L720 120 L1440 0 L1440 120 L0 120 Z" fill="#110E1B" />
          <path d="M0 0 L720 120 L1440 0" stroke="#F7B000" strokeWidth="4" fill="none" />
          <path d="M0 10 L720 130 L1440 10" stroke="#FF003C" strokeWidth="2" strokeDasharray="12 12" fill="none" opacity="0.6" />
        </svg>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48 h-48 bg-[#F7B000]/20 blur-3xl rounded-full" />
      </div>

    </section>
  );
}