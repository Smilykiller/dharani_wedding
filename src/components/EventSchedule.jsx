import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EventSchedule() {
  const [activeEvent, setActiveEvent] = useState("engagement");

  const eventsData = {
    engagement: {
      id: "engagement",
      title: "ENGAGEMENT CEREMONY",
      date: "AUGUST 30, 2026",
      day: "SUNDAY",
      time: "7:00 PM ONWARDS",
      venue: "LAKSHMI MAHAL",
      location: "Thiruparankundram, Madurai",
      mapLink: "https://maps.app.goo.gl/5LyxCatMhf9vV1PY9",
      description:
        "The sacred betrothal where two families unite in joy, exchanging rings and traditional blessings under the holy auspices of Lord Murugan.",
      highlights: ["Sacred Ring Exchange", "Traditional Mangala Isai", "Grand Festive Feast"],
    },
    wedding: {
      id: "wedding",
      title: "WEDDING CEREMONY",
      date: "AUGUST 31, 2026",
      day: "MONDAY",
      time: "06:00 AM - 07:30 AM (MUHURTHAM)",
      venue: "Arulmigu Subramaniyaswamy Temple",
      location: "Thiruparankundram, Madurai",
      mapLink: "https://maps.app.goo.gl/QEvKGsprt5amZGBz7",
      description:
        "The divine tying of the Mangalyam during the auspicious morning Muhurtham, forever binding two souls in eternal love and companionship.",
      highlights: ["Mangalya Dharanam", "Divine Temple Blessings", "Celebratory Wedding Feast"],
    },
  };

  const current = eventsData[activeEvent];

  return (
    <section className="w-full max-w-xl mx-auto px-5 py-6 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        {/* Ornate Header Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#c5a059]" />
          <span className="font-cinzel text-[11px] sm:text-xs font-bold tracking-[0.38em] text-[#735322] uppercase bg-[#fdfbf7] border-[1px] border-[#c5a059]/80 px-6 py-1.5 rounded-full shadow-2xs">
            THE CELEBRATION SCHEDULE
          </span>
          <div className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-[#c5a059]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1c1917] tracking-tight mb-8 text-center drop-shadow-2xs">
          Sacred Ceremonies
        </h2>

        {/* DRAMATIC UNMISTAKABLE TAB SWITCHER */}
        <div className="grid grid-cols-2 gap-3 p-2 bg-[#f4ebe0] rounded-2xl w-full max-w-lg mb-10 border-[1.5px] border-[#c5a059] shadow-inner">
          {Object.values(eventsData).map((ev) => {
            const isSelected = activeEvent === ev.id;
            return (
              <button
                key={ev.id}
                onClick={() => setActiveEvent(ev.id)}
                className={`py-4 px-3 rounded-xl font-cinzel text-[11px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-400 flex items-center justify-center gap-2.5 relative select-none ${
                  isSelected
                    ? "bg-gradient-to-r from-[#2b111c] via-[#4a1525] to-[#2b111c] text-[#fefcf9] font-bold border-[1.5px] border-[#c5a059] shadow-[0_12px_28px_rgba(43,17,28,0.45)] scale-[1.02]"
                    : "bg-[#fefcf9]/90 text-[#735322] font-semibold border-[1px] border-[#decba8]/60 hover:bg-[#ffffff] hover:text-[#2b111c]"
                }`}
              >
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse shadow-[0_0_8px_#d4af37] shrink-0" />
                )}
                <span>{ev.title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE CEREMONY CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full bg-gradient-to-b from-[#ffffff]/98 via-[#fefcf9]/98 to-[#ffffff]/98 border-[2px] border-[#c5a059] rounded-[3rem] p-8 sm:p-11 shadow-[0_25px_70px_rgba(43,28,33,0.14)] relative overflow-hidden flex flex-col items-center text-center"
          >
            {/* Inner Architectural Filigree Border */}
            <div className="absolute inset-3.5 rounded-[2.6rem] border-[1px] border-[#decba8]/60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#c5a059]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Date & Time Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#f9f5ed] border-[1px] border-[#c5a059] px-6 py-2 rounded-full mb-6 relative z-10 shadow-xs">
              <span className="font-cinzel text-xs font-bold text-[#2b111c] tracking-[0.25em] uppercase">
                {current.date} • {current.day}
              </span>
            </div>

            {/* Ceremony Title */}
            <h3 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#1c1917] via-[#5c4018] to-[#1c1917] font-normal mb-2 relative z-10">
              {current.title}
            </h3>

            {/* Muhurtham / Time Highlight */}
            <div className="bg-[#2b111c] text-[#fefcf9] px-5 py-1.5 rounded-full font-cinzel text-xs font-bold tracking-widest my-3 relative z-10 border-[1px] border-[#c5a059]/70 shadow-xs">
              ⏱ {current.time}
            </div>

            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent my-5 opacity-80" />

            {/* Venue & Location */}
            <div className="mb-6 relative z-10">
              <p className="font-cinzel text-sm sm:text-base font-bold text-[#5c4018] tracking-[0.25em] uppercase mb-1">
                📍 {current.venue}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#4a3b40] font-medium tracking-wide">
                {current.location}
              </p>
            </div>

            {/* Description */}
            <p className="font-serif text-sm sm:text-base text-[#3f1d2b] italic leading-relaxed max-w-md mb-8 px-2 relative z-10">
              “{current.description}”
            </p>

            {/* Ceremony Highlights Box */}
            <div className="w-full bg-[#fcfaf7] border-[1px] border-[#decba8] rounded-2xl p-5 mb-7 relative z-10 text-left flex flex-col gap-3 shadow-2xs">
              <div>
                <span className="font-cinzel text-[10px] font-bold text-[#735322] tracking-[0.25em] uppercase block mb-2">
                  CEREMONY HIGHLIGHTS
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.highlights.map((h, idx) => (
                    <span key={idx} className="bg-[#ffffff] border-[1px] border-[#c5a059]/50 text-[#2b111c] font-sans text-xs px-3.5 py-1 rounded-full font-medium shadow-2xs">
                      ✨ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps / Sanctuary Guidance Button */}
            <motion.a
              href={current.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#2b111c] to-[#4a1525] border-[1.5px] border-[#c5a059] text-[#decba8] rounded-full font-cinzel font-bold text-[11px] tracking-[0.25em] uppercase shadow-md hover:shadow-lg hover:from-[#3f1d2b] hover:to-[#5e1c31] transition-all relative z-10"
            >
              🗺️ GET DIRECTIONS TO VENUE →
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
