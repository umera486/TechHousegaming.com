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
    // Hum background position ki bajaye element ko X-axis par translate kar rahe hain
    gsap.to([topStripeRef.current, bottomStripeRef.current], {
      x: -84.85, // Exact width of one repeating pattern
      duration: 0.35, // Bohat fast aur smooth
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
      duration: 0.25, // Quick strike
      ease: "expo.out"
    });

    // 3. EXPLOSIVE SHUTTER OPEN
    const shutterVal = { val: 50 };
    tl.to(shutterVal, {
      val: 0,
      duration: 0.3, // Bohat tezi se khulega
      ease: "power4.out", // Ek dam se snap open hoga
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
      ease: "none", // Linear speed, no getting stuck
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
      className="fixed inset-0 z-60 overflow-hidden"
      style={{ fontFamily: "'Satoshi', sans-serif" }} 
    >
      {/* ==============================================
          TOP MAIN DOOR
          ============================================== */}
      <div 
        ref={topDoorRef} 
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#110E1B]"
        style={{ willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#2a2a35_0%,_transparent_100%)] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 border-b-4 border-[#22223b] shadow-2xl z-20 overflow-hidden">
          {/* Note the extra width `w-[calc(100%+100px)]` to allow translation without cutting off */}
          <div
            ref={topStripeRef}
            className="w-[calc(100%+100px)] h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #22223b, #22223b 30px, #F7B000 30px, #F7B000 60px)`,
              backgroundSize: "84.85px 84.85px",
              willChange: "transform" // 100% GPU optimization
            }}
          />
        </div>
      </div>

      {/* ==============================================
          BOTTOM MAIN DOOR
          ============================================== */}
      <div 
        ref={bottomDoorRef} 
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#110E1B]"
        style={{ willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2a2a35_0%,_transparent_100%)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-4 sm:h-6 border-t-4 border-[#22223b] shadow-2xl z-20 overflow-hidden">
          <div
            ref={bottomStripeRef}
            className="w-[calc(100%+100px)] h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #22223b, #22223b 30px, #F7B000 30px, #F7B000 60px)`,
              backgroundSize: "84.85px 84.85px",
              willChange: "transform" // 100% GPU optimization
            }}
          />
        </div>
      </div>

      {/* ==============================================
          THE SHUTTER WRAPPER (Center UI)
          ============================================== */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none p-4">
        
        {/* Glowing Laser Slit */}
        <div 
          ref={glowingLineRef}
          className="absolute w-full max-w-2xl h-[2px] bg-[#FF003C] opacity-0 shadow-[0_0_20px_5px_#FF003C]"
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
          className="w-full max-w-3xl"
        >
          {/* Main Glass Box with Cyberpunk Cut Corners */}
          <div 
            className="relative flex flex-col items-center justify-center space-y-6 w-full p-10 md:p-16 bg-[#22223b]/80 backdrop-blur-xl border-[4px] border-[#F7B000]"
            style={{ clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)" }}
          >
            {/* Sharp Cut Badge */}
            <div 
              className="px-8 py-2 bg-[#F7B000] text-[#22223b] uppercase tracking-[0.4em] text-[10px] md:text-sm font-black"
              style={{ clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
            >
              TECHHOUSE ENGINE KERNEL
            </div>

            {/* Massive Aggressive Counter (Italic + Text Clipping for AAA look) */}
            <div className="flex justify-center items-end leading-none py-4">
              <span 
                className="text-[7.5rem] sm:text-[11rem] md:text-[14rem] font-black italic tracking-tighter drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
              >
                {displayProgress}
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-black italic text-[#FF003C] mb-4 md:mb-8 ml-2">
                %
              </span>
            </div>

            {/* Smooth Loading Bar Line */}
            <div className="w-full max-w-sm h-1.5 bg-[#110E1B] overflow-hidden skew-x-[-20deg]">
               <div 
                 className="h-full bg-[#F7B000]"
                 style={{ width: `${displayProgress}%`, transition: 'width 0.1s linear' }}
               ></div>
            </div>

            <div className="text-[10px] sm:text-xs md:text-sm text-[#F7B000] font-bold tracking-[0.3em] uppercase mt-2">
              SYSTEM INITIALIZING...
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}