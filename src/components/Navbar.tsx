"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ShoppingCart, Search, User, 
  Home, FolderGit2, Gamepad2, Briefcase, 
  FileText, RefreshCw, Mail, ChevronRight, 
  ExternalLink, Trash2, ArrowRight 
} from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  
  // Interactive Modals & Dropdown States
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);

  const lastScrollY = useRef(0);

  // Scroll direction & Glassmorphism morphing listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 40) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
      } else {
        setIsScrolled(false);
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Games list items specified by user
  const gameTitles = [
    { name: "ATSS2 Retribution iOS", type: "iOS Edition" },
    { name: "ATSS2 Retribution Android", type: "Android Edition" },
    { name: "Battle Ops", type: "Tactical FPS" },
    { name: "OPSS Battlezone Android", type: "Multiplayer Android" },
    { name: "OPSS Battlezone iOS", type: "Multiplayer iOS" },
  ];

  const navItems = [
    { name: "Home", icon: Home, hasDropdown: false },
    { name: "Portfolio", icon: FolderGit2, hasDropdown: false },
    { name: "Games", icon: Gamepad2, hasDropdown: true },
    { name: "Jobs", icon: Briefcase, hasDropdown: false },
    { name: "Blog", icon: FileText, hasDropdown: false },
    { name: "Update", icon: RefreshCw, hasDropdown: false },
    { name: "Contact Us", icon: Mail, hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transform-gpu select-none">
      
      {/* ========================================================
          1. THE TOP SHINY UTILITY STRIP (Black Glossy Bar)
          ======================================================== */}
      <div className={`w-full bg-black text-white border-b border-[#22223b] transition-all duration-300 overflow-hidden ${
        isScrolled && scrollDirection === 'down' ? 'h-0 opacity-0' : 'h-8 opacity-100'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between text-[11px] font-mono tracking-wider">
          
          {/* Left: Email Address */}
          <div className="flex items-center space-x-2 text-[#F7B000]">
            <span className="inline-block w-2 h-2 bg-[#FF003C] animate-pulse"></span>
            <a href="mailto:info@techhousegames.com" className="hover:underline text-gray-300 hover:text-white transition-colors">
              info@techhousegames.com
            </a>
          </div>

          {/* Right: Social Channels */}
          <div className="hidden sm:flex items-center space-x-6 text-gray-400">
            <span className="text-gray-600">// CONNECT:</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#F7B000] transition-colors">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F7B000] transition-colors">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#F7B000] transition-colors">PIN</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F7B000] transition-colors">IN</a>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. MAIN NAVBAR (Scroll Morph: Solid Brutalist ⇄ Glassmorphism)
          ======================================================== */}
      <nav className={`w-full transition-all duration-500 transform-gpu border-b-4 ${
        isScrolled && scrollDirection === 'down'
          ? "bg-[#110E1B]/70 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] translate-y-0"
          : isScrolled && scrollDirection === 'up'
          ? "bg-white/90 backdrop-blur-xl border-[#22223b] shadow-[0_8px_0px_0px_rgba(34,34,59,0.2)]"
          : "bg-white border-[#22223b] shadow-[0_8px_0px_0px_#22223b]"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
          
          {/* --- LEFT: Official Logo & Brand Name --- */}
          <div className="flex items-center cursor-pointer group">
            {/* Logo Wrapper with High-Contrast Dark Badge */}
            <div className="relative h-12 w-16 flex items-center justify-center bg-black transform -skew-x-12 shadow-[4px_4px_0px_0px_#F7B000] border-2 border-[#22223b] overflow-hidden p-1 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5">
              <img 
                src="/logo1.webp" 
                alt="TechHouse Gaming Official Logo" 
                className="h-full w-full object-contain transform skew-x-12"
              />
            </div>
            
            {/* Brand Title (TechHouse in Royal Gold, Gaming in Black) */}
            <div className="ml-4 flex flex-col justify-center">
              <div className="flex items-center space-x-1.5 leading-none">
                <span className="text-[#F7B000] font-black text-lg sm:text-xl tracking-tighter uppercase">
                  TECHHOUSE
                </span>
                <span className="text-[#22223b] font-black text-lg sm:text-xl tracking-tighter uppercase">
                  GAMES
                </span>
              </div>
              <span className="text-[10px] font-bold text-white bg-[#22223b] px-1.5 py-0.5 tracking-widest mt-1 uppercase w-max border border-black font-mono">
                // Core_Engine
              </span>
            </div>
          </div>

          {/* --- CENTER: Straight Nav Links with 3-Layer Brutalist Effect & Games Dropdown --- */}
          <div className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              const IconComponent = item.icon;

              return (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setGamesDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setGamesDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setActiveTab(item.name);
                      if (item.hasDropdown) setGamesDropdownOpen(!gamesDropdownOpen);
                    }}
                    className="relative px-4 py-2 group focus:outline-none block"
                  >
                    {/* MASTERSTROKE 3-LAYER BRUTALIST SHADOW WRAPPER */}
                    <div className={`absolute inset-0 border-2 transform -skew-x-12 transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#22223b] border-black shadow-[3px_3px_0px_0px_#22223b,6px_6px_0px_0px_#F7B000,9px_9px_0px_0px_#FF003C]' 
                        : 'bg-white border-[#22223b] group-hover:bg-[#F7B000] group-hover:shadow-[3px_3px_0px_0px_#22223b,6px_6px_0px_0px_#22223b]'
                    }`} />
                    
                    {/* Button Content */}
                    <div className="relative z-10 flex items-center space-x-2 transform skew-x-12">
                      <IconComponent className={`w-4 h-4 transition-colors duration-200 ${
                        isActive ? 'text-[#F7B000]' : 'text-[#22223b]'
                      }`} />
                      <span className={`text-xs font-black tracking-wider uppercase transition-colors duration-200 ${
                        isActive ? 'text-[#F7B000]' : 'text-[#22223b]'
                      }`}>
                        {item.name}
                      </span>
                    </div>
                  </button>

                  {/* --- GAMES MEGA DROPDOWN --- */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {gamesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-80 bg-white border-4 border-[#22223b] shadow-[10px_10px_0px_0px_#22223b] z-50 p-4 space-y-2"
                        >
                          <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest border-b-2 border-[#22223b]/20 pb-2 mb-2 flex justify-between">
                            <span>ACTIVE GAME REPOSITORIES</span>
                            <span className="text-[#FF003C] font-black">[5 LIVE]</span>
                          </div>

                          {gameTitles.map((game, idx) => (
                            <a
                              key={idx}
                              href="#game"
                              onClick={(e) => { e.preventDefault(); setGamesDropdownOpen(false); }}
                              className="group flex items-center justify-between p-2.5 bg-gray-50 hover:bg-[#22223b] hover:text-[#F7B000] border-2 border-transparent hover:border-[#F7B000] transition-all cursor-pointer"
                            >
                              <div>
                                <h4 className="font-bold text-xs text-[#22223b] group-hover:text-white transition-colors">
                                  {game.name}
                                </h4>
                                <span className="text-[10px] text-gray-400 group-hover:text-[#F7B000]">
                                  {game.type}
                                </span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F7B000] transform group-hover:translate-x-1 transition-all" />
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

          {/* --- RIGHT: Search, Cart & Profile Icons --- */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Search Toggle Button */}
            <button 
              onClick={() => setSearchOpen(true)}
              aria-label="Search" 
              className="relative h-11 w-11 flex items-center justify-center bg-white border-2 border-[#22223b] transform -skew-x-12 hover:bg-[#F7B000] transition-colors shadow-[4px_4px_0px_0px_#22223b] cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#22223b] transform skew-x-12" />
            </button>

            {/* Cart Dropdown / Hover Wrapper */}
            <div 
              className="relative"
              onMouseEnter={() => setCartOpen(true)}
              onMouseLeave={() => setCartOpen(false)}
            >
              <button 
                onClick={() => setCartOpen(!cartOpen)}
                aria-label="Cart" 
                className="relative h-11 px-4 bg-white border-2 border-[#22223b] transform -skew-x-12 hover:bg-[#22223b] group transition-colors shadow-[4px_4px_0px_0px_#F7B000] flex items-center space-x-2 cursor-pointer"
              >
                <div className="transform skew-x-12 flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4 text-[#22223b] group-hover:text-[#F7B000] transition-colors" />
                  <span className="text-xs font-black text-[#22223b] group-hover:text-[#F7B000]">1</span>
                </div>
              </button>

              {/* --- SHOPPING CART MINI-MODAL --- */}
              <AnimatePresence>
                {cartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-80 bg-white border-4 border-[#22223b] shadow-[10px_10px_0px_0px_#22223b] z-50 p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between border-b-2 border-[#22223b]/20 pb-3">
                      <span className="font-black text-xs uppercase tracking-widest text-[#22223b]">
                        TACTICAL CART [1 ITEM]
                      </span>
                      <span className="text-xs font-bold text-[#FF003C]">$49.99</span>
                    </div>

                    {/* Cart Item */}
                    <div className="flex items-center justify-between bg-gray-50 p-3 border-2 border-[#22223b]/20">
                      <div>
                        <h4 className="font-bold text-xs text-[#22223b]">ATSS2 Retribution Bundle</h4>
                        <p className="text-[10px] text-gray-500">iOS & Android License</p>
                      </div>
                      <span className="font-bold text-xs text-[#22223b]">$49.99</span>
                    </div>

                    {/* Checkout Footer */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between text-xs font-mono font-bold text-gray-600">
                        <span>SUBTOTAL:</span>
                        <span className="text-[#22223b]">$49.99 USD</span>
                      </div>
                      <button 
                        onClick={() => alert("Redirecting to secure checkout gateway...")}
                        className="w-full py-3 bg-[#F7B000] text-[#22223b] font-black uppercase text-xs border-2 border-[#22223b] shadow-[4px_4px_0px_0px_#22223b] hover:bg-[#FF003C] hover:text-white transition-all flex items-center justify-center space-x-2"
                      >
                        <span>PROCEED TO CHECKOUT</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile / Login Icon */}
            <button aria-label="Profile" className="relative h-11 w-11 flex items-center justify-center bg-[#22223b] border-2 border-black transform -skew-x-12 hover:bg-[#FF003C] transition-colors shadow-[4px_4px_0px_0px_#F7B000] cursor-pointer">
              <User className="w-4 h-4 text-[#F7B000] transform skew-x-12 group-hover:text-white" />
            </button>
          </div>

          {/* --- MOBILE: Menu Toggler --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative p-3 bg-white border-2 border-[#22223b] transform -skew-x-12 shadow-[4px_4px_0px_0px_#F7B000] active:translate-y-1 transition-all"
            aria-label="Toggle Menu"
          >
            <div className="transform skew-x-12">
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#22223b]" /> : <Menu className="w-6 h-6 text-[#22223b]" />}
            </div>
          </button>
        </div>

        {/* --- MOBILE: Full-Parity Responsive Drawer --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t-4 border-[#22223b] bg-white overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-6 space-y-3 bg-[#f4f4f6]">
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
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
                        className={`w-full flex items-center px-5 py-3.5 text-xs font-black uppercase tracking-widest border-2 transform -skew-x-6 transition-all ${
                          isActive 
                            ? "border-[#22223b] bg-[#22223b] text-[#F7B000] shadow-[3px_3px_0px_0px_#22223b,6px_6px_0px_0px_#F7B000]" 
                            : "border-[#22223b]/20 bg-white text-[#22223b] hover:border-[#22223b]"
                        }`}
                      >
                        <div className="transform skew-x-6 flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <item.icon className={`w-4 h-4 mr-3 ${isActive ? 'text-[#F7B000]' : 'text-[#22223b]'}`} />
                            {item.name}
                          </div>
                          <ChevronRight className={`w-4 h-4 transition-transform ${item.hasDropdown && mobileGamesOpen ? 'rotate-90' : ''}`} />
                        </div>
                      </button>

                      {/* Mobile Games Submenu Accordion */}
                      {item.hasDropdown && mobileGamesOpen && (
                        <div className="pl-4 space-y-2 pt-1 pb-2">
                          {gameTitles.map((g, idx) => (
                            <div key={idx} className="p-2.5 bg-white border-2 border-[#22223b]/30 text-xs font-bold text-[#22223b] flex justify-between items-center">
                              <span>{g.name}</span>
                              <span className="text-[9px] bg-[#F7B000] text-black px-1 font-mono">{g.type}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile Action Utilities */}
                <div className="pt-4 border-t-2 border-[#22223b]/20 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-gray-500">
                    STATUS: <span className="text-green-600 font-bold">ONLINE</span>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => setCartOpen(true)} className="p-2 bg-[#22223b] text-[#F7B000] text-xs font-bold border border-black">CART ($49.99)</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ========================================================
          3. FULLSCREEN INTERACTIVE SEARCH OVERLAY
          ======================================================== */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-32 px-4"
          >
            <motion.div
              initial={{ y: -50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -30, scale: 0.95 }}
              className="w-full max-w-2xl bg-white border-4 border-[#22223b] shadow-[15px_15px_0px_0px_#F7B000] p-6 sm:p-8 relative"
            >
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute top-4 right-4 p-2 bg-[#22223b] text-white hover:bg-[#FF003C] transition-colors"
                aria-label="Close Search"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-black uppercase tracking-widest text-[#22223b] mb-4">
                // SEARCH ENGINE DATABASE
              </h3>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games, modules, docs or jobs..."
                  autoFocus
                  className="w-full pl-14 pr-4 py-4 bg-gray-100 border-2 border-[#22223b] text-base font-bold text-[#22223b] focus:outline-none focus:bg-white focus:border-[#FF003C] transition-all"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs font-mono text-gray-500 self-center mr-2">Quick Tags:</span>
                {["ATSS2", "Battle Ops", "iOS", "Android", "Jobs"].map((tag, i) => (
                  <button key={i} className="px-3 py-1 bg-gray-200 hover:bg-[#F7B000] hover:text-[#22223b] text-xs font-bold border border-black transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}