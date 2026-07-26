import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScratchReveal({ onExplore }) {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    // Rich Metallic Gold Foil Gradient Overlay
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#c5a059");
    gradient.addColorStop(0.3, "#fcf6ba");
    gradient.addColorStop(0.5, "#d4af37");
    gradient.addColorStop(0.8, "#aa771c");
    gradient.addColorStop(1, "#fcf6ba");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Foil Pattern
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 1.5;
    for (let i = -canvas.height; i < canvas.width; i += 24) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + canvas.height, canvas.height);
      ctx.stroke();
    }

    // Sacred Center Foil Seal & Text
    ctx.fillStyle = "#2b111c";
    ctx.font = "bold 13px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ SCRATCH OR TAP TO UNVEIL SACRED DATES ✦", canvas.width / 2, canvas.height / 2 - 12);
    ctx.font = "italic 16px 'Playfair Display', serif";
    ctx.fillText("The Sacred Wedding Schedule", canvas.width / 2, canvas.height / 2 + 16);

    let isDrawing = false;
    let lastPos = null;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const scratch = (e) => {
      if (!isDrawing) return;
      if (e.cancelable && (e.type === "touchmove" || e.type === "touchstart")) {
        e.preventDefault();
      }
      const pos = getPos(e);
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 96;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      if (lastPos) {
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(pos.x, pos.y);
      } else {
        ctx.arc(pos.x, pos.y, 48, 0, Math.PI * 2);
      }
      ctx.stroke();
      ctx.fill();
      lastPos = pos;
    };

    const start = (e) => {
      if (e.cancelable && (e.type === "touchmove" || e.type === "touchstart")) {
        e.preventDefault();
      }
      isDrawing = true;
      lastPos = getPos(e);
      scratch(e);
    };

    const end = () => {
      isDrawing = false;
      lastPos = null;
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", scratch);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", scratch, { passive: false });
    window.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", scratch);
      window.removeEventListener("mouseup", end);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", scratch);
      window.removeEventListener("touchend", end);
    };
  }, [isRevealed]);

  return (
    <section className="w-full max-w-xl mx-auto px-5 py-6 flex flex-col items-center relative z-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-[1.5px] bg-[#c5a059]" />
          <span className="font-cinzel text-xs font-bold tracking-[0.38em] text-[#735322] uppercase bg-[#fdfbf7] border-[1px] border-[#c5a059]/80 px-6 py-1.5 rounded-full shadow-2xs">
            EXCLUSIVE INTERACTIVE REVEAL
          </span>
          <div className="w-8 h-[1.5px] bg-[#c5a059]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1c1917] via-[#5c4018] to-[#1c1917] mt-3 tracking-tight">
          Unveil The Sacred Dates
        </h2>
        <p className="font-sans text-xs text-[#5c4018] mt-2 max-w-sm mx-auto">
          Swipe or tap across the metallic gold card below to discover the engagement and wedding dates.
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="w-full min-h-[22rem] sm:min-h-[24rem] rounded-[2.6rem] relative overflow-hidden shadow-[0_25px_70px_rgba(43,28,33,0.18)] bg-gradient-to-br from-[#ffffff] via-[#fefcf9] to-[#ffffff] border-[2px] border-[#c5a059] flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="absolute inset-3.5 rounded-[2.2rem] border-[1px] border-[#decba8]/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#c5a059]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Revealed Content Inside */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-sm relative z-10 py-4">
          <div className="w-20 h-20 flex items-center justify-center">
            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#2b111c] via-[#6e223c] to-[#2b111c]">
            Wedding: August 31, 2026
          </h3>
          <p className="font-cinzel text-[11px] font-bold text-[#735322] tracking-[0.22em] uppercase">
            MUHURTHAM: 06:00 AM - 07:30 AM
          </p>
          <p className="font-sans text-[10px] font-semibold text-[#5c4018] tracking-widest uppercase mt-1">
            Arulmigu Subramaniyaswamy Temple
          </p>

          <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent my-2" />

          <p className="font-serif text-base sm:text-lg text-[#1c1917] font-normal">
            Engagement: August 30, 2026
          </p>
          <p className="font-sans text-[10px] font-semibold text-[#5c4018] tracking-widest uppercase mt-1">
            Lakshmi Mahal • Thiruparankundram • Madurai
          </p>
        </div>

        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onClick={() => setIsRevealed(true)}
            style={{ touchAction: "none" }}
            className="absolute inset-0 z-20 w-full h-full cursor-pointer transition-opacity duration-700 rounded-[2.6rem] touch-none select-none"
            aria-label="Scratch foil overlay"
          />
        )}
      </motion.div>

      {!isRevealed ? (
        <motion.button
          onClick={() => setIsRevealed(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 px-9 py-4 bg-gradient-to-r from-[#2b111c] via-[#4a1525] to-[#2b111c] border-[1.5px] border-[#c5a059]/80 text-[#fefcf9] rounded-full font-cinzel text-xs font-bold tracking-[0.28em] uppercase shadow-[0_15px_35px_rgba(43,17,28,0.35)] hover:shadow-[0_20px_45px_rgba(43,17,28,0.45)] transition-all"
        >
          <span>TAP TO UNVEIL INSTANTLY</span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-7 font-cinzel text-xs font-bold tracking-[0.3em] uppercase text-[#735322] bg-[#f9f5ed] border-[1px] border-[#c5a059] px-7 py-2.5 rounded-full shadow-2xs"
        >
          ✦ THE SACRED DATES HAVE BEEN REVEALED ✦
        </motion.div>
      )}
    </section>
  );
}
