"use client";

export default function MarqueeSection() {
  // Balanced items with perfect breathing space (Strictly game1, game2, game3)
  const galleryItems = [
    { id: 1, img: "/game1.webp", title: "CYBER PROTOCOL", genre: "ACTION // RPG" },
    { id: 2, img: "/game2.webp", title: "NEON HORIZON", genre: "OPEN WORLD" },
    { id: 3, img: "/game3.webp", title: "KINETIC ASSAULT", genre: "TACTICAL" },
  ];

  // Doubled for a seamless, unbreakable infinite loop
  const marqueeData = [...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <section className="relative w-full py-8 sm:py-12 bg-white text-black overflow-hidden border-y-2 border-black z-10 select-none">
      
      {/* ==========================================
          PURE GPU COMPOSITOR ENGINE (60FPS LOCKED)
          ========================================== */}
      <style dangerouslySetInnerHTML={{__html: `
        .gpu-marquee-track {
          display: flex;
          width: max-content;
          animation: gpuScroll 35s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        @keyframes gpuScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .gallery-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />

      {/* Clean White Edge Vignettes for smooth fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />

      {/* ==========================================
          MARQUEE STREAM CONTAINER (BALANCED & SPACIOUS)
          ========================================== */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        <div className="gpu-marquee-track flex items-center gap-8 sm:gap-16">
          
          {/* Half 1 */}
          <div className="flex items-center gap-8 sm:gap-16 pr-8 sm:pr-16">
            {marqueeData.map((item, index) => (
              <div 
                key={`gallery-1-${index}`}
                className="gallery-card group relative bg-white border-2 border-black p-2.5 sm:p-3.5 shadow-[5px_5px_0px_0px_#0a0a0f] hover:shadow-[5px_5px_0px_0px_#FF003C] hover:-translate-y-1.5 cursor-pointer flex-shrink-0 w-52 sm:w-64"
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="w-full h-32 sm:h-40 border border-black overflow-hidden bg-neutral-100 relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle badge inside image */}
                  <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider">
                    REL. 0{item.id}
                  </div>
                </div>

                {/* Aesthetic Typography Details */}
                <div className="mt-3 flex flex-col font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider">
                      {item.genre}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600">
                      ● LIVE
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black uppercase text-black tracking-tight mt-0.5 group-hover:text-[#FF003C] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Half 2 (Exact Clone for Seamless Infinite Loop) */}
          <div className="flex items-center gap-8 sm:gap-16 pr-8 sm:pr-16">
            {marqueeData.map((item, index) => (
              <div 
                key={`gallery-2-${index}`}
                className="gallery-card group relative bg-white border-2 border-black p-2.5 sm:p-3.5 shadow-[5px_5px_0px_0px_#0a0a0f] hover:shadow-[5px_5px_0px_0px_#FF003C] hover:-translate-y-1.5 cursor-pointer flex-shrink-0 w-52 sm:w-64"
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="w-full h-32 sm:h-40 border border-black overflow-hidden bg-neutral-100 relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider">
                    REL. 0{item.id}
                  </div>
                </div>

                {/* Aesthetic Typography Details */}
                <div className="mt-3 flex flex-col font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider">
                      {item.genre}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600">
                      ● LIVE
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black uppercase text-black tracking-tight mt-0.5 group-hover:text-[#FF003C] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}