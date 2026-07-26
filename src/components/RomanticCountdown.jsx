import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RomanticCountdown() {
  const targetDate = new Date("2026-08-31T06:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
      const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, "0");
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="w-full max-w-xl mx-auto px-5 py-6 flex flex-col items-center text-center relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#c5a059]" />
        <span className="font-cinzel text-xs font-bold tracking-[0.38em] text-[#735322] uppercase bg-[#fdfbf7] border-[1px] border-[#c5a059]/80 px-6 py-1.5 rounded-full shadow-2xs">
          COUNTING DOWN TO THE MUHURTHAM
        </span>
        <div className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-[#c5a059]" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1c1917] via-[#5c4018] to-[#1c1917] tracking-tight mb-8">
        The Sacred Clock
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-lg">
        {units.map((unit, index) => (
          <motion.div
            key={unit.label}
            whileHover={{ scale: 1.04, y: -3 }}
            className="bg-gradient-to-b from-[#ffffff]/98 via-[#fefcf9]/98 to-[#ffffff]/98 border-[1.5px] border-[#c5a059] rounded-[2.2rem] py-7 px-4 shadow-[0_18px_45px_rgba(43,28,33,0.12)] flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300 hover:border-[#a8823b]"
          >
            <div className="absolute inset-2.5 rounded-[1.8rem] border-[1px] border-[#decba8]/60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c5a059]/20 to-transparent rounded-full blur-xl pointer-events-none" />
            
            <motion.span
              key={unit.value}
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-serif text-4xl sm:text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2b111c] via-[#5c4018] to-[#2b111c] mb-1 tracking-tight select-none"
            >
              {unit.value}
            </motion.span>
            <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.32em] text-[#735322] uppercase select-none">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
