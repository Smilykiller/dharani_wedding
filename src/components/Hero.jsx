import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

export default function Hero({ onExplore }) {
  const containerRef = useRef(null);
  const [showDoors, setShowDoors] = useState(true);
  const [particles, setParticles] = useState([]);

  // 3D Parallax & Tilt logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 25 });
  
  // 3D Transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);
  const shadowDrop = useTransform(smoothY, [-0.5, 0.5], ["0_40px_100px_rgba(20,14,17,0.8)", "0_10px_40px_rgba(20,14,17,0.4)"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // For parallax/tilt
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    
    // Add stardust particle
    if (Math.random() > 0.4) {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: mouseX + (Math.random() - 0.5) * 30,
        y: mouseY + (Math.random() - 0.5) * 30,
        size: Math.random() * 4 + 1.5,
      };
      setParticles(prev => [...prev.slice(-15), newParticle]);
    }
  };

  // Clean up particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 1000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Remove door elements from DOM after animation completes
  useEffect(() => {
    const timer = setTimeout(() => setShowDoors(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full min-h-[100dvh] flex flex-col items-center justify-center text-center relative z-10 overflow-hidden bg-[#0d0709]"
    >
      {/* 👑 GOLDEN DOOR REVEAL */}
      <AnimatePresence>
        {showDoors && (
          <div className="fixed inset-0 z-50 flex pointer-events-none">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.77, 0, 0.17, 1] }}
              className="w-1/2 h-full bg-gradient-to-r from-[#0d0709] via-[#1f0b13] to-[#3a0f1d] border-r-[2px] border-[#c5a059] shadow-[20px_0_50px_rgba(0,0,0,0.9)] relative"
            >
              <div className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-40 rounded-full border-[1.5px] border-[#c5a059]/50" />
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.77, 0, 0.17, 1] }}
              className="w-1/2 h-full bg-gradient-to-l from-[#0d0709] via-[#1f0b13] to-[#3a0f1d] border-l-[2px] border-[#c5a059] shadow-[-20px_0_50px_rgba(0,0,0,0.9)] relative"
            >
              <div className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-40 rounded-full border-[1.5px] border-[#c5a059]/50" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULL-SCREEN DIMMED PALACE (Background Layer) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          src="/images/cinematic_palace_bg.jpg"
          alt="Palace Background"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.2]"
        />
        {/* Rich Velvet Burgundy Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e11]/90 via-transparent to-[#140e11]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140e11]/80 via-transparent to-[#140e11]/80" />
      </div>

      {/* Volumetric Gold Spotlight Ray */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)" }}
      />

      {/* INTERACTIVE STARDUST CANVAS */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {particles.map(p => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{ opacity: 0, scale: 0, y: p.y - 50 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute rounded-full bg-[#fceebb] shadow-[0_0_12px_#c5a059]"
              style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* OUT-OF-FOCUS FOREGROUND PETALS (Cinematic Depth of Field) */}
      <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`fg-petal-${i}`}
            animate={{
              y: ["110vh", "-10vh"],
              x: [0, (i % 2 === 0 ? 80 : -80)],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 12 + (i * 2), 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2.5
            }}
            className="absolute bg-gradient-to-br from-[#d4af37] to-[#8a6628] rounded-bl-full rounded-tr-full opacity-50"
            style={{
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              left: `${10 + (i * 15)}%`,
              filter: `blur(${4 + i}px)`,
              boxShadow: "0 0 15px rgba(212,175,55,0.3)"
            }}
          />
        ))}
      </div>

      {/* 3D INTERACTIVE TILT CONTAINER - THE MAJESTIC GLASS ARCH */}
      <div style={{ perspective: 1200 }} className="w-full max-w-[28rem] px-5 py-20 z-30 flex justify-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, rotateY, boxShadow: shadowDrop, transformStyle: "preserve-3d" }}
          className="w-full bg-gradient-to-b from-[#ffffff]/95 via-[#fefcf9]/95 to-[#ffffff]/95 backdrop-blur-3xl border-[2px] border-[#c5a059] rounded-t-[12rem] rounded-b-[2rem] pt-14 pb-12 px-6 relative flex flex-col items-center"
        >
          {/* Inner Arch Filigree */}
          <div style={{ transform: "translateZ(10px)" }} className="absolute inset-3 rounded-t-[11rem] rounded-b-[1.5rem] border-[1px] border-[#decba8]/70 pointer-events-none" />
          <div style={{ transform: "translateZ(20px)" }} className="absolute inset-5 rounded-t-[10.5rem] rounded-b-[1rem] border-[0.5px] border-[#decba8]/45 border-dashed pointer-events-none" />
          
          {/* Top Decorative Signet Monogram Crest */}
          <motion.div
            style={{ transform: "translateZ(40px)" }}
            whileHover={{ scale: 1.08 }}
            className="w-24 h-24 flex items-center justify-center mb-6 relative z-10"
          >
            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </motion.div>

          {/* GROOM NAME */}
          <motion.div style={{ transform: "translateZ(50px)" }} className="relative z-10 my-2 w-full flex flex-col items-center">
            <span className="font-cinzel-dec text-[9px] tracking-[0.4em] uppercase font-bold text-[#735322] mb-2">
              THE GROOM
            </span>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#1c1917] via-[#5c4018] to-[#1c1917] drop-shadow-sm select-none animate-gold-shimmer pb-2 whitespace-nowrap">
              G. VENGAT
            </h1>
          </motion.div>

          {/* ORNATE CENTRAL GOLD MEDALLION & CONNECTOR */}
          <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-center gap-4 my-4 w-full max-w-[200px] relative z-10">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-[#decba8]" />
            <span className="font-serif text-2xl sm:text-3xl text-[#c5a059] tracking-[0.3em] lowercase italic font-medium select-none px-2 mt-1">
              weds
            </span>
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#c5a059] to-[#decba8]" />
          </div>

          {/* BRIDE NAME */}
          <motion.div style={{ transform: "translateZ(50px)" }} className="relative z-10 my-2 w-full flex flex-col items-center">
            <span className="font-cinzel-dec text-[9px] tracking-[0.4em] uppercase font-bold text-[#8a6628] mb-2">
              THE BRIDE
            </span>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#2b111c] via-[#6e223c] to-[#2b111c] drop-shadow-sm select-none animate-gold-shimmer pb-2 whitespace-nowrap">
              P. THARANI
            </h1>
          </motion.div>

          {/* Bottom Divider & Quote */}
          <div style={{ transform: "translateZ(20px)" }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent my-6 opacity-80" />
          
          <p style={{ transform: "translateZ(35px)" }} className="font-serif text-sm sm:text-base font-normal italic text-[#3f1d2b] max-w-[200px] leading-relaxed relative z-10">
            “Two Hearts. One Soul. An Eternal Promise.”
          </p>
        </motion.div>
      </div>

      {/* Cinematic Action Button (Positioned below the arch) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="relative z-50 mb-12 pointer-events-auto"
      >
        <button
          onClick={onExplore}
          className="px-10 py-4 bg-gradient-to-r from-[#0d0709]/80 via-[#1f0b13]/80 to-[#0d0709]/80 backdrop-blur-md text-[#decba8] rounded-full font-cinzel font-bold text-[10px] sm:text-xs tracking-[0.4em] uppercase shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.4)] transition-all duration-500 flex items-center gap-4 border-[1px] border-[#c5a059]/60 hover:border-[#d4af37] hover:bg-[#140e11]/90 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c5a059]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative z-10">ENTER OUR STORY</span>
          <span className="text-lg text-[#c5a059] group-hover:translate-y-1 transition-transform relative z-10">↓</span>
        </button>
      </motion.div>
      {/* SEAMLESS CURVED TRANSITION TO NEXT SECTION */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-40 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[40px] sm:h-[90px]"
        >
          <path 
            d="M0,120 Q600,0 1200,120 L1200,120 L0,120 Z" 
            className="fill-[#fdfbf7]"
          />
        </svg>
      </div>
    </section>
  );
}
