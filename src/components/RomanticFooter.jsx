import React from "react";
import { motion } from "framer-motion";

export default function RomanticFooter() {
  return (
    <footer className="w-full max-w-xl mx-auto px-5 pt-14 pb-20 flex flex-col items-center text-center relative z-10 border-t border-[#c5a059]/40">
      <div className="w-24 h-24 flex items-center justify-center mb-6">
        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
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
          Vengat <span className="font-sans px-1">♥</span> Tharani
        </p>
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto my-3 opacity-80" />
        <p className="font-cinzel text-xs font-bold text-[#5c4018] tracking-[0.25em] uppercase">
          &amp; Both Our Beloved Families
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-3 mt-4 w-full">
        <p className="font-sans text-[11px] text-[#735322] font-medium tracking-wider uppercase">
          © 2026 • DESIGNED WITH ETERNAL LOVE <span className="text-[#c5a059] px-0.5">♥</span> DEVOTION
        </p>

        {/* Creative Designer Tag with Contact Info */}
        <div className="bg-[#fcfaf7] border border-[#c5a059]/40 px-6 py-5 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-3 w-full max-w-sm mt-2">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-[#735322]">
            <span>Designed by</span>
            <a 
              href="https://zentry-hub.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-cinzel font-black text-[#6e223c] text-[12px] sm:text-[13px] tracking-widest px-1 underline decoration-[#c5a059] decoration-2 underline-offset-4 hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
            >
              Zentry Hub <span className="text-[10px]">↗</span>
            </a>
          </div>

          <div className="w-12 h-[1px] bg-[#c5a059]/40 my-1" />
          
          <div className="flex flex-col items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-widest font-sans text-[#8a6628] font-semibold w-full">
            <span className="opacity-80">For your own custom orders:</span>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-1 w-full justify-center">
              <a href="tel:+917904431650" className="hover:text-[#6e223c] transition-colors flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-xs border border-[#decba8]/30">
                📞 7904431650
              </a>
              
              <a href="mailto:zentryhub.official@gmail.com" className="hover:text-[#6e223c] transition-colors flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-xs border border-[#decba8]/30 lowercase tracking-wider">
                ✉️ zentryhub.official@gmail.com
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
