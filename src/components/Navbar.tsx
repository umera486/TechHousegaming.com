"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, ShoppingCart, Cpu, Zap, FolderGit2, Briefcase, ChevronRight, Crosshair } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hardcore Gaming Nav Items with Dropdown Content
  const navItems = [
    { name: "Dashboard", icon: Crosshair, hasDropdown: false },
    { name: "Armory", icon: Shield, hasDropdown: false },
    {
      name: "Modules",
      icon: Cpu,
      hasDropdown: true,
      content: (
        <div className="grid grid-cols-2 gap-4 p-6 bg-white border-4 border-[#22223b] shadow-[8px_8px_0px_0px_#F7B000]">
          <div className="space-y-3">
            <h3 className="text-[#22223b] font-black tracking-widest uppercase border-b-2 border-gray-200 pb-2">Core Systems</h3>
            <div className="group cursor-pointer p-2 hover:bg-[#22223b] hover:text-[#F7B000] transition-colors border-2 border-transparent hover:border-[#F7B000]">
              <h4 className="font-bold text-sm">Physics Engine v4.9</h4>
              <p className="text-xs text-gray-500 group-hover:text-gray-300">Hypersonic particle rendering.</p>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-[#22223b] font-black tracking-widest uppercase border-b-2 border-gray-200 pb-2">UI Elements</h3>
            <div className="group cursor-pointer p-2 hover:bg-[#22223b] hover:text-[#F7B000] transition-colors border-2 border-transparent hover:border-[#F7B000]">
              <h4 className="font-bold text-sm">HUD Overlays</h4>
              <p className="text-xs text-gray-500 group-hover:text-gray-300">Tactical crosshairs & telemetry.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Careers",
      icon: Briefcase,
      hasDropdown: true,
      content: (
        <div className="p-6 bg-[#22223b] text-white border-4 border-black shadow-[8px_8px_0px_0px_#F7B000] w-full min-w-[300px]">
          <h3 className="text-[#F7B000] font-black tracking-widest uppercase mb-4 border-b-2 border-white/20 pb-2">
            Active Deployments (Jobs)
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between group cursor-pointer hover:bg-white/10 p-3 border-2 border-transparent hover:border-[#F7B000] transition-all">
              <div>
                <h4 className="font-bold text-sm text-white">Unreal Engine Dev</h4>
                <p className="text-xs text-gray-400">Remote • Full-Time</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#F7B000] transform group-hover:translate-x-1 transition-all" />
            </div>
            <div className="flex items-center justify-between group cursor-pointer hover:bg-white/10 p-3 border-2 border-transparent hover:border-[#F7B000] transition-all">
              <div>
                <h4 className="font-bold text-sm text-white">React Architect</h4>
                <p className="text-xs text-gray-400">Lahore, PK • Full-Time</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#F7B000] transform group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      ),
    },
    { name: "Archives", icon: FolderGit2, hasDropdown: false },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b-4 border-[#22223b] shadow-[0_8px_0px_0px_rgba(34,34,59,0.15)] transform-gpu">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        
        {/* --- LEFT: Futuristic Slanted Logo --- */}
        <div className="flex items-center cursor-pointer group">
          <div className="relative h-12 w-16 flex items-center justify-center bg-[#22223b] transform -skew-x-12 shadow-[4px_4px_0px_0px_#F7B000] border-2 border-black transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5">
            <Zap className="w-6 h-6 text-[#F7B000] transform skew-x-12" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <span className="text-[#22223b] font-black text-xl tracking-tighter uppercase leading-none">
              TECHHOUSE
            </span>
            <span className="text-[10px] font-bold text-[#F7B000] bg-[#22223b] px-1 tracking-widest mt-1 uppercase w-max border border-black">
              // Core_Engine
            </span>
          </div>
        </div>

        {/* --- CENTER: Extreme Animated Slanted Nav Links & Mega Dropdowns --- */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            return (
              <div 
                key={item.name}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative"
              >
                <button
                  onClick={() => setActiveTab(item.name)}
                  className="relative px-6 py-2.5 group focus:outline-none block"
                >
                  {/* Skewed Background Wrapper */}
                  <div className={`absolute inset-0 border-2 transform -skew-x-12 transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#22223b] border-black shadow-[4px_4px_0px_0px_#F7B000]' 
                      : 'border-transparent group-hover:bg-[#F7B000] group-hover:border-[#22223b] group-hover:shadow-[4px_4px_0px_0px_#22223b]'
                  }`} />
                  
                  {/* Button Content (Un-skewed) */}
                  <div className="relative z-10 flex items-center space-x-2 transform skew-x-12">
                    <IconComponent className={`w-4 h-4 transition-colors duration-300 ${
                      isActive ? 'text-[#F7B000]' : 'text-[#22223b]'
                    }`} />
                    <span className={`text-sm font-black tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? 'text-[#F7B000]' : 'text-[#22223b]'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                </button>

                {/* Dropdown Menu (Mega Menu) */}
                <AnimatePresence>
                  {item.hasDropdown && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, rotateX: -10 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: 15, rotateX: -10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute top-full left-0 mt-4 origin-top z-40 min-w-[300px]"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* --- RIGHT: Tactical Action Button --- */}
        <div className="hidden lg:flex items-center">
          <button className="relative h-12 px-6 bg-white border-2 border-[#22223b] transform -skew-x-12 group hover:bg-[#22223b] transition-colors duration-300 shadow-[4px_4px_0px_0px_#F7B000]">
            <div className="transform skew-x-12 flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5 text-[#22223b] group-hover:text-[#F7B000] transition-colors duration-300" />
              <span className="text-xs font-black text-[#22223b] group-hover:text-[#F7B000] tracking-widest transition-colors duration-300">
                CART (0)
              </span>
            </div>
          </button>
        </div>

        {/* --- MOBILE: Menu Toggler --- */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative p-3 bg-white border-2 border-[#22223b] transform -skew-x-12 shadow-[4px_4px_0px_0px_#F7B000] active:translate-y-1 active:shadow-[0px_0px_0px_0px_#F7B000] transition-all"
        >
          <div className="transform skew-x-12">
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#22223b]" /> : <Menu className="w-6 h-6 text-[#22223b]" />}
          </div>
        </button>
      </div>

      {/* --- MOBILE: Dropdown Drawer --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t-4 border-[#22223b] bg-white overflow-hidden shadow-2xl absolute w-full"
          >
            <div className="px-6 py-6 space-y-3 bg-[#f4f4f6]">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => { setActiveTab(item.name); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center px-5 py-4 text-sm font-black uppercase tracking-widest border-2 transform -skew-x-6 transition-colors ${
                      isActive 
                        ? "border-[#22223b] bg-[#22223b] text-[#F7B000] shadow-[4px_4px_0px_0px_#F7B000]" 
                        : "border-[#22223b]/20 bg-white text-[#22223b] hover:border-[#22223b]"
                    }`}
                  >
                    <div className="transform skew-x-6 flex items-center">
                      <item.icon className={`w-5 h-5 mr-4 ${isActive ? 'text-[#F7B000]' : 'text-[#22223b]'}`} />
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
