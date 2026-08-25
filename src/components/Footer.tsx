"use client";

import { ArrowRight, ArrowUpRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full border-t-8 border-[#F7B000] bg-black select-none overflow-hidden flex flex-col justify-end">
      
      {/* ========================================================
          TOP SECTION: EXTREME SPLIT CTA BANNER
          ======================================================== */}
      <div className="flex flex-col lg:flex-row w-full border-b-4 border-black">
        
        {/* Left Massive Banner (Dark) */}
        <div className="flex-1 bg-[#0a0a0f] p-8 sm:p-12 lg:p-20 relative overflow-hidden group">
          {/* Animated Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          
          <div className="relative z-10 flex items-center gap-2 text-[#F7B000] font-mono text-xs font-black tracking-[0.3em] uppercase mb-6">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>// INITIATE PARTNERSHIP</span>
          </div>
          
          <h2 className="text-[12vw] sm:text-[9vw] lg:text-[6vw] font-black uppercase tracking-tighter text-white leading-[0.85] transition-all duration-700 transform-gpu group-hover:tracking-[-0.02em]">
            LET'S <br className="hidden sm:block" />
            <span className="text-transparent [-webkit-text-stroke:2px_#FF003C] group-hover:text-[#FF003C] transition-colors duration-500">
              COLLABORATE
            </span>
          </h2>
        </div>

        {/* Right Action Box (Brutalist Yellow) */}
        <div className="w-full lg:w-[450px] bg-[#F7B000] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-t-4 lg:border-t-0 lg:border-l-4 border-black">
          <div>
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">
              Ready to deploy?
            </h3>
            <p className="text-sm font-mono text-black/80 font-bold leading-relaxed">
              Game co-development, publisher licensing, and next-gen tech integration. Let's talk.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-12 lg:mt-0 flex items-center justify-between w-full px-6 py-5 bg-black text-white font-black uppercase text-sm tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_#FF003C] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#FF003C] transition-all duration-300 transform-gpu group cursor-pointer"
          >
            <span>PARTNER WITH US</span>
            <ArrowRight className="w-5 h-5 transform-gpu group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      {/* ========================================================
          MIDDLE SECTION: EXTREME COLOR BLOCKING GRID
          ======================================================== */}
      {/* 
          Mobile: 1 Column
          Tablet: 2 Columns
          Desktop: 5 Columns
          Har column ka apna unique background color hai (The Awwwards Effect)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full bg-black gap-1 lg:gap-0 border-b-4 border-black">
        
        {/* Block 1: Dark Mode (Org) */}
        <div className="bg-[#110E1B] p-8 sm:p-10 lg:border-r-4 border-black flex flex-col justify-between space-y-12">
          <div>
            <span className="text-[10px] font-black text-[#F7B000] tracking-[0.2em] block mb-6">
              // ORG
            </span>
            <div className="h-12 w-32 bg-[#0a0a0f] border-2 border-[#F7B000] flex items-center justify-center p-2 transform-gpu hover:scale-105 transition-transform cursor-pointer">
              <img src="/logo1.webp" alt="THG Logo" className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
          <p className="text-xs font-mono text-neutral-400 leading-relaxed font-bold">
            Tech House Games Inc.<br />
            Lahore, Punjab, PK
          </p>
        </div>

        {/* Block 2: Pitch Black (Navigation) */}
        <div className="bg-[#0a0a0f] p-8 sm:p-10 lg:border-r-4 border-black">
          <span className="text-[10px] font-black text-white tracking-[0.2em] block mb-6 border-b-2 border-white/20 pb-2">
            // INDEX
          </span>
          <ul className="space-y-4 font-mono text-sm font-bold">
            {["About", "Portfolio", "Games", "Careers", "Contact"].map((item, idx) => (
              <li key={idx}>
                <Link href={`#${item.toLowerCase()}`} className="text-neutral-500 hover:text-[#F7B000] transition-colors flex items-center justify-between group">
                  <span className="transform-gpu group-hover:translate-x-2 transition-transform">{item}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#FF003C] transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Block 3: Brutalist White (Legal) */}
        <div className="bg-white p-8 sm:p-10 lg:border-r-4 border-black">
          <span className="text-[10px] font-black text-[#FF003C] tracking-[0.2em] block mb-6 border-b-2 border-black/10 pb-2">
            // LEGAL
          </span>
          <ul className="space-y-4 font-mono text-sm font-bold">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((item, idx) => (
              <li key={idx}>
                <a href="#legal" className="text-black/60 hover:text-black transition-colors block transform-gpu hover:translate-x-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Block 4: Cyberpunk Red (Stats/Identity) */}
        <div className="bg-[#FF003C] p-8 sm:p-10 lg:border-r-4 border-black flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black text-black tracking-[0.2em] block mb-6 border-b-2 border-black/20 pb-2">
              // IDENTITY
            </span>
            <p className="text-xs font-mono font-bold text-white/90">
              ART · PHYSICS · ENGINE
            </p>
          </div>
          <div className="mt-8 transform-gpu hover:scale-105 transition-transform cursor-default">
            <div className="text-5xl font-black text-black tracking-tighter leading-none">
              05
            </div>
            <span className="text-sm font-black text-white uppercase tracking-widest block mt-1">
              Years Active
            </span>
          </div>
        </div>

        {/* Block 5: Core Black & Yellow (Newsletter) */}
        <div className="bg-[#0a0a0f] p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black text-[#F7B000] tracking-[0.2em] block mb-6">
              // COMM LINK
            </span>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="ENTER EMAIL..." 
                className="w-full bg-[#110E1B] border-2 border-white/20 p-4 text-xs font-mono text-white font-bold focus:outline-none focus:border-[#F7B000] transition-colors placeholder:text-neutral-600"
              />
              <button className="mt-4 w-full py-4 bg-[#F7B000] text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors transform-gpu active:scale-95">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================
          BOTTOM COPYRIGHT BAR (Minimal & Secure)
          ======================================================== */}
      <div className="w-full bg-[#0a0a0f] px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono font-bold text-neutral-500 gap-4">
        <div className="uppercase tracking-widest text-center sm:text-left">
          © 2026 TECH HOUSE GAMES INC. <br className="sm:hidden" /> ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link href="/login" className="hover:text-white transition-colors tracking-widest uppercase">
            Login Gateway
          </Link>
          <span className="text-neutral-800">|</span>
          <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3 h-3" />
            <span className="tracking-widest uppercase">SYSTEMS SECURE</span>
          </div>
        </div>
      </div>

    </footer>
  );
}