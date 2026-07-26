import React from "react";
import { motion } from "framer-motion";

export default function RomanticFooter() {
  return (
    <footer className="w-full max-w-xl mx-auto px-5 pt-14 pb-20 flex flex-col items-center text-center relative z-10 border-t border-[#c5a059]/40">
      <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#ffffff] to-[#f9f5ed] border-[1.5px] border-[#c5a059] flex items-center justify-center mb-6 shadow-sm">
        <span className="font-cinzel text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5c4018] via-[#a8823b] to-[#5c4018]">
          V&amp;T
        </span>
      </div>

      <p className="font-cinzel text-xs font-bold tracking-[0.35em] text-[#735322] uppercase mb-4">
        SACRED UNION OF SOULS
      </p>

      <blockquote className="font-serif text-base sm:text-lg text-[#3f1d2b] italic max-w-md leading-relaxed mb-8 px-2">
        “Together with the divine blessings of our beloved parents and families, we joyfully step into our sacred future as one eternal heart.”
      </blockquote>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-b from-[#ffffff]/98 via-[#fefcf9]/98 to-[#ffffff]/98 border-[1.5px] border-[#c5a059] px-9 py-7 rounded-[2.5rem] shadow-[0_20px_55px_rgba(43,28,33,0.12)] mb-10 max-w-md w-full relative overflow-hidden group"
      >
        <div className="absolute inset-3 rounded-[2rem] border-[1px] border-[#decba8]/60 pointer-events-none" />
        <p className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.38em] uppercase font-bold text-[#735322] mb-2.5">
          WITH THE WARMEST BLESSINGS OF
        </p>
        <p className="font-serif text-3xl sm:text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2b111c] via-[#6e223c] to-[#2b111c] tracking-tight">
          Venkat &amp; Tharani
        </p>
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto my-3 opacity-80" />
        <p className="font-cinzel text-xs font-bold text-[#5c4018] tracking-[0.25em] uppercase">
          &amp; Both Our Beloved Families
        </p>
      </motion.div>

      <p className="font-sans text-[11px] text-[#735322] font-medium tracking-wider uppercase">
        © 2026 • DESIGNED WITH ETERNAL LOVE &amp; DEVOTION
      </p>
    </footer>
  );
}
