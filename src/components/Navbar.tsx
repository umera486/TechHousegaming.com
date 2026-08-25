"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ShoppingCart, Search, User, 
  ChevronRight, ArrowRight 
} from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Interactive Modals & Dropdown States
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);

  const lastScrollY = useRef(0);

  // Smart Scroll Direction Listener (GPU Optimized)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false); // Hide on scroll down
          setGamesDropdownOpen(false);
        } else {
          setIsVisible(true);  // Show on scroll up
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gameTitles = [
    { name: "ATSS2 Retribution iOS", type: "iOS Edition" },
    { name: "ATSS2 Retribution Android", type: "Android Edition" },
    { name: "Battle Ops", type: "Tactical FPS" },
    { name: "OPSS Battlezone Android", type: "Multiplayer Android" },
    { name: "OPSS Battlezone iOS", type: "Multiplayer iOS" },
  ];

  const navItems = [
    { name: "Home", hasDropdown: false },
    { name: "Portfolio", hasDropdown: false },
    { name: "Games", hasDropdown: true },
    { name: "Jobs", hasDropdown: false },
    { name: "Blog", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transform-gpu transition-transform duration-300 ease-in-out select-none ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      
      {/* ========================================================
          MAIN ULTRA-CLEAN RESPONSIVE NAVBAR
          ======================================================== */}
      <nav className={`w-full transition-all duration-300 border-b-2 border-black ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.06)]" 
          : "bg-white"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
          
          {/* --- LEFT: Official Logo & Full Brand Name --- */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative h-9 w-12 sm:h-10 sm:w-14 flex items-center justify-center bg-black border border-black shadow-[3px_3px_0px_0px_#F7B000] overflow-hidden p-1 transition-transform group-hover:scale-105 flex-shrink-0">
              <img 
                src="/logo1.webp" 
                alt="Tech House Games Official Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            
            <div className="flex items-center">
              <span className="text-black font-black text-sm sm:text-lg lg:text-xl tracking-tighter uppercase whitespace-nowrap">
                TECH HOUSE <span className="text-[#FF003C]">GAMES</span>
              </span>
            </div>
          </div>

          {/* --- CENTER: Un-Crowded, Spaced Navigation Links --- */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;

              return (
                <div 
                  key={item.name} 
                  className="relative py-2"
                  onMouseEnter={() => item.hasDropdown && setGamesDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setGamesDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setActiveTab(item.name);
                      if (item.hasDropdown) setGamesDropdownOpen(!gamesDropdownOpen);
                    }}
                    className={`relative text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-1.5 py-1 cursor-pointer ${
                      isActive ? "text-[#FF003C]" : "text-black hover:text-[#FF003C]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${gamesDropdownOpen ? 'rotate-90' : ''}`} />
                    )}
                  </button>

                  {/* Clean Active Indicator Bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF003C]" 
                    />
                  )}

                  {/* --- GAMES DROPDOWN --- */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {gamesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-72 bg-white border-2 border-black shadow-[8px_8px_0px_0px_#0a0a0f] z-50 p-3 space-y-1"
                        >
                          <div className="text-[9px] font-mono font-bold text-neutral-400 tracking-widest pb-2 border-b border-neutral-200 mb-1">
                            // ACTIVE REPOSITORIES
                          </div>

                          {gameTitles.map((game, idx) => (
                            <a
                              key={idx}
                              href="#game"
                              onClick={(e) => { e.preventDefault(); setGamesDropdownOpen(false); }}
                              className="group flex items-center justify-between p-2.5 hover:bg-black hover:text-white transition-colors cursor-pointer"
                            >
                              <div>
                                <h4 className="font-bold text-xs group-hover:text-white text-black">
                                  {game.name}
                                </h4>
                                <span className="text-[9px] text-neutral-400 group-hover:text-[#F7B000] font-mono">
                                  {game.type}
                                </span>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF003C]" />
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* --- RIGHT: Minimalist Action Utilities --- */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            
            {/* Search Trigger */}
            <button 
              onClick={() => setSearchOpen(true)}
              aria-label="Search" 
              className="p-2 text-black hover:text-[#FF003C] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Button */}
            <div 
              className="relative"
              onMouseEnter={() => setCartOpen(true)}
              onMouseLeave={() => setCartOpen(false)}
            >
              <button 
                onClick={() => setCartOpen(!cartOpen)}
                aria-label="Cart" 
                className="flex items-center gap-1.5 p-2 text-black hover:text-[#FF003C] transition-colors cursor-pointer font-mono text-xs font-bold"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>[1]</span>
              </button>

              {/* Mini Cart Modal */}
              <AnimatePresence>
                {cartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-72 bg-white border-2 border-black shadow-[8px_8px_0px_0px_#0a0a0f] z-50 p-4 space-y-3 font-mono"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2 text-[10px] font-bold">
                      <span>CART SUMMARY</span>
                      <span className="text-[#FF003C]">$49.99</span>
                    </div>

                    <div className="bg-neutral-50 p-2.5 border border-neutral-200 text-xs">
                      <div className="font-bold text-black">ATSS2 Bundle</div>
                      <div className="text-[10px] text-neutral-500">iOS & Android License</div>
                    </div>

                    <button 
                      onClick={() => alert("Redirecting to checkout...")}
                      className="w-full py-2.5 bg-black text-white hover:bg-[#FF003C] font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>CHECKOUT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Access */}
            <button aria-label="Profile" className="p-2 text-black hover:text-[#FF003C] transition-colors cursor-pointer">
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* --- MOBILE: Menu Toggler --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* --- MOBILE DRAWER --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t-2 border-black bg-white overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-6 space-y-4 font-mono">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => {
                        setActiveTab(item.name);
                        if (item.hasDropdown) {
                          setMobileGamesOpen(!mobileGamesOpen);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="w-full flex items-center justify-between py-2.5 text-xs font-black uppercase tracking-wider text-black border-b border-neutral-100"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronRight className={`w-4 h-4 transition-transform ${mobileGamesOpen ? 'rotate-90' : ''}`} />}
                    </button>

                    {item.hasDropdown && mobileGamesOpen && (
                      <div className="pl-4 space-y-2 py-2 bg-neutral-50 border-l-2 border-black">
                        {gameTitles.map((g, idx) => (
                          <div key={idx} className="text-xs font-bold text-neutral-700 py-1">
                            {g.name} <span className="text-[9px] text-[#FF003C] ml-1">[{g.type}]</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-neutral-200 flex justify-between items-center text-xs">
                  <span className="text-neutral-500">SYSTEM: <span className="text-emerald-600 font-bold">ONLINE</span></span>
                  <button onClick={() => { setCartOpen(true); setMobileMenuOpen(false); }} className="bg-black text-white px-4 py-2 font-bold uppercase cursor-pointer">
                    Cart ($49.99)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ========================================================
          FULLSCREEN SEARCH OVERLAY
          ======================================================== */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-32 px-4"
          >
            <motion.div
              initial={{ y: -30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -20, scale: 0.95 }}
              className="w-full max-w-xl bg-white border-2 border-black shadow-[10px_10px_0px_0px_#0a0a0f] p-6 relative"
            >
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-black hover:text-[#FF003C] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-sm font-mono font-black uppercase text-black mb-4">
                // SEARCH REPOSITORY
              </h3>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search games, documents..."
                  autoFocus
                  className="w-full pl-11 pr-4 py-3 bg-neutral-50 border-2 border-black text-sm font-bold text-black focus:outline-none focus:bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}