import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="w-full max-w-xl mx-auto px-5 py-16 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full bg-gradient-to-b from-[#ffffff]/98 via-[#fefcf9]/98 to-[#ffffff]/98 border-[2px] border-[#c5a059] rounded-[3.2rem] p-8 sm:p-12 shadow-[0_25px_75px_rgba(43,28,33,0.14)] relative overflow-hidden flex flex-col items-center text-center group"
      >
        {/* Inner Architectural Filigree Accents */}
        <div className="absolute inset-3.5 rounded-[2.8rem] border-[1px] border-[#decba8]/70 pointer-events-none" />
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#c5a059]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-gradient-to-tr from-[#4a1525]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Top Decorative Crest */}
        <div className="w-16 h-16 rounded-full bg-[#f9f5ed] border-[1.5px] border-[#c5a059] flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:scale-108 transition-transform">
          <span className="font-cinzel text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5c4018] via-[#a8823b] to-[#5c4018]">
            V&amp;T
          </span>
        </div>

        <span className="font-cinzel text-xs font-bold tracking-[0.4em] text-[#735322] uppercase mb-2 relative z-10">
          THE ROYAL INVITATION
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1c1917] via-[#5c4018] to-[#1c1917] mb-5 relative z-10">
          A Sacred Journey Begins
        </h2>

        <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-7 opacity-80" />

        <p className="font-sans text-xs sm:text-sm text-[#3f1d2b] leading-relaxed font-normal max-w-md mb-9 relative z-10 px-2">
          Every step of our divine journey has guided our hearts toward this profound union. As two souls merge into one eternal bond under the blessings of our parents and the almighty, we invite you to be part of our most treasured beginning. <br /><br />
          We request the honor of your presence, your warm wishes, and your blessings as we exchange eternal vows.
        </p>

        {/* Rich Sign-off Box */}
        <div className="flex flex-col items-center justify-center border-t-[1.5px] border-[#decba8]/80 pt-8 w-full relative z-10">
          <p className="font-cinzel text-[11px] font-bold tracking-[0.35em] uppercase text-[#735322] mb-2">
            WITH DIVINE BLESSINGS &amp; LOVE
          </p>
          <p className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#2b111c] via-[#6e223c] to-[#2b111c] font-normal italic tracking-wide">
            Venkat &amp; Tharani
          </p>
          <span className="font-cinzel text-[10px] text-[#8a6628] tracking-[0.2em] uppercase mt-1.5">
            &amp; Both Our Beloved Families
          </span>
        </div>
      </motion.div>
    </section>
  );
}
