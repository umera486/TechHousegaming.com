"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface HeaderProps {
  onComplete?: () => void;
}

export default function Header({ onComplete }: HeaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const topDoorRef = useRef<HTMLDivElement>(null);
  const bottomDoorRef = useRef<HTMLDivElement>(null);
  
  const shutterWrapperRef = useRef<HTMLDivElement>(null);
  const glowingLineRef = useRef<HTMLDivElement>(null);
  
  const topStripeRef = useRef<HTMLDivElement>(null);
  const bottomStripeRef = useRef<HTMLDivElement>(null);
  
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // 1. 100% GPU-ACCELERATED INFINITE STRIPES (No Repaint Lag)
    gsap.to([topStripeRef.current, bottomStripeRef.current], {
      x: -84.85, 
      duration: 0.35, 
      repeat: -1,
      ease: "none"
    });

    const tl = gsap.timeline({
      onComplete: () => {
        if (preloaderRef.current) preloaderRef.current.style.display = "none";
        if (onComplete) onComplete(); 
      }
    });

    // 2. THE GLOWING SLIT (Laser Line)
    tl.to(glowingLineRef.current, {
      scaleX: 1,
      opacity: 1,
      duration: 0.25,
      ease: "expo.out"
    });

    // 3. EXPLOSIVE SHUTTER OPEN
    const shutterVal = { val: 50 };
    tl.to(shutterVal, {
      val: 0,
      duration: 0.3, 
      ease: "power4.out", 
      onUpdate: () => {
        if (shutterWrapperRef.current) {
          shutterWrapperRef.current.style.clipPath = `inset(${shutterVal.val}% 0% ${shutterVal.val}% 0%)`;
        }
      }
    }, "-=0.1");
    
    tl.to(glowingLineRef.current, { opacity: 0, duration: 0.1 }, "<");

    // 4. ULTRA-FAST 3-SECOND LOADING
    const progressObj = { val: 0 };
    tl.to(progressObj, {
      val: 100,
      duration: 2.8, 
      ease: "none", 
      onUpdate: () => {
        setDisplayProgress(Math.floor(progressObj.val));
      }
    }, "-=0.1"); 

    // 5. BULLETPROOF PERFECT SYNC SHUTTER CLOSE
    tl.to(shutterVal, {
      val: 50,
      duration: 0.3,
      ease: "expo.in",
      onUpdate: () => {
        if (shutterWrapperRef.current) {
          shutterWrapperRef.current.style.clipPath = `inset(${shutterVal.val}% 0% ${shutterVal.val}% 0%)`;
        }
      }
    });

    // 6. MAIN DOORS BLAST OPEN
    tl.to(topDoorRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "expo.inOut"
    }, "-=0.1"); 

    tl.to(bottomDoorRef.current, {
      yPercent: 100,
      duration: 0.8,
      ease: "expo.inOut"
    }, "<"); 

  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 overflow-hidden select-none transform-gpu"
      style={{ fontFamily: "'Satoshi', sans-serif" }} 
    >
      {/* ==============================================
          TOP MAIN DOOR
          ============================================== */}
      <div 
        ref={topDoorRef} 
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#110E1B] transform-gpu"
        style={{ willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#2a2a35_0%,_transparent_100%)] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 border-b-4 border-[#22223b] shadow-2xl z-20 overflow-hidden">
          <div
            ref={topStripeRef}
            className="w-[calc(100%+100px)] h-full transform-gpu"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #22223b, #22223b 30px, #F7B000 30px, #F7B000 60px)`,
              backgroundSize: "84.85px 84.85px",
              willChange: "transform"
            }}
          />
        </div>
      </div>

      {/* ==============================================
          BOTTOM MAIN DOOR
          ============================================== */}
      <div 
        ref={bottomDoorRef} 
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#110E1B] transform-gpu"
        style={{ willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2a2a35_0%,_transparent_100%)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-4 sm:h-6 border-t-4 border-[#22223b] shadow-2xl z-20 overflow-hidden">
          <div
            ref={bottomStripeRef}
            className="w-[calc(100%+100px)] h-full transform-gpu"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #22223b, #22223b 30px, #F7B000 30px, #F7B000 60px)`,
              backgroundSize: "84.85px 84.85px",
              willChange: "transform"
            }}
          />
        </div>
      </div>

      {/* ==============================================
          THE SHUTTER WRAPPER (Center UI)
          ============================================== */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none p-4 transform-gpu">
        
        {/* Glowing Laser Slit */}
        <div 
          ref={glowingLineRef}
          className="absolute w-full max-w-2xl h-[2px] bg-[#FF003C] opacity-0 shadow-[0_0_20px_5px_#FF003C] transform-gpu"
          style={{ transform: "scaleX(0) translateZ(0)", willChange: "transform, opacity" }}
        ></div>

        {/* Shutter Reveal Container (GPU Hardware Accelerated) */}
        <div 
          ref={shutterWrapperRef}
          style={{ 
            clipPath: "inset(50% 0% 50% 0%)",
            filter: "drop-shadow(15px 15px 0px #FF003C)",
            willChange: "clip-path",
            transform: "translateZ(0)", 
            backfaceVisibility: "hidden" 
          }}
          className="w-full max-w-md transform-gpu"
        >
          {/* Main Glass Box with Cyberpunk Cut Corners */}
          <div 
            className="relative flex flex-col items-center justify-center space-y-5 w-full p-8 md:p-10 bg-[#22223b]/95 backdrop-blur-2xl border-[4px] border-[#F7B000]"
            style={{ clipPath: "polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px)" }}
          >
            {/* OFFICIAL LOGO INTEGRATION (Prominent & Clear) */}
            <div className="relative h-16 w-36 sm:h-20 sm:w-44 flex items-center justify-center bg-black p-2 border-2 border-[#F7B000] shadow-[4px_4px_0px_0px_#FF003C]">
              <img 
                src="/logo1.webp" 
                alt="Tech House Games Logo" 
                className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(247,176,0,0.5)]"
              />
            </div>

            {/* Sharp Cut Badge with Lethal Satoshi Typography */}
            <div 
              className="px-5 py-1.5 bg-[#F7B000] text-[#22223b] uppercase tracking-[0.35em] text-[10px] md:text-xs font-black font-mono"
              style={{ clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
            >
              TECH HOUSE <span className="text-[#FF003C]">GAMES</span> // KERNEL
            </div>

            {/* Scaled-down Balanced Counter with Cyber Glow */}
            <div className="flex justify-center items-end leading-none py-1">
              <span className="text-6xl sm:text-7xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                {displayProgress}
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black italic text-[#FF003C] mb-2 sm:mb-3 ml-1">
                %
              </span>
            </div>

            {/* Smooth Loading Bar Line */}
            <div className="w-full max-w-xs h-1.5 bg-[#110E1B] overflow-hidden skew-x-[-20deg] border border-white/10">
               <div 
                 className="h-full bg-gradient-to-r from-[#F7B000] to-[#FF003C]"
                 style={{ width: `${displayProgress}%`, transition: 'width 0.1s linear' }}
               ></div>
            </div>

            {/* Terminal Style Initializing Text */}
            <div className="text-[9px] sm:text-[10px] text-gray-300 font-mono font-bold tracking-[0.3em] uppercase mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF003C] animate-pulse"></span>
              SYSTEM INITIALIZING...
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}