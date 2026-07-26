import React from "react";
import { motion } from "framer-motion";

export default function RomanticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Rich Royal Champagne Base Light */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7] via-[#faf4ea] to-[#f2e6d6] opacity-100" />

      {/* Subtle Rotating Ornate Architectural Sacred Mandala Watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full border-[1px] border-[#c5a059]/15 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[32rem] h-[32rem] rounded-full border-[1px] border-[#decba8]/20 border-dashed" />
        <div className="w-[22rem] h-[22rem] rounded-full border-[1px] border-[#c5a059]/15" />
      </motion.div>

      {/* Cinematic Ambient Gold Light Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 80%)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(74,21,37,0.22) 0%, transparent 80%)" }}
      />

      {/* Floating Shimmering Royal Champagne Sparkle Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: (i % 3) + 2 + "px",
            height: (i % 3) + 2 + "px",
            background: i % 2 === 0 ? "#d4af37" : "#8a6628",
            boxShadow: "0 0 10px rgba(212,175,55,0.6)",
            top: `${(i * 17 + 11) % 92}%`,
            left: `${(i * 23 + 7) % 90}%`,
          }}
          animate={{
            y: [0, -45, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: (i % 4) * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fine Architectural Gilded Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #c5a059 1px, transparent 1px), linear-gradient(to bottom, #c5a059 1px, transparent 1px)`,
          backgroundSize: '3.5rem 3.5rem'
        }}
      />
    </div>
  );
}
