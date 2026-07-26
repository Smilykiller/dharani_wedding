import React from "react";
import RomanticBackground from "./components/RomanticBackground";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import ScratchReveal from "./components/ScratchReveal";
import EventSchedule from "./components/EventSchedule";
import RomanticCountdown from "./components/RomanticCountdown";
import RomanticFooter from "./components/RomanticFooter";

export default function App() {
  const scrollToReveal = () => {
    const datesEl = document.getElementById("reveal");
    if (datesEl) {
      datesEl.scrollIntoView({ behavior: "smooth" });
    } else {
      const storyEl = document.getElementById("story");
      if (storyEl) storyEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-800 flex justify-center selection:bg-rose-200 selection:text-neutral-950 overflow-x-hidden relative">
      {/* Mobile-first App Shell container (Centered on desktop, full-screen on mobile) */}
      <div className="mobile-app-shell relative z-10 flex flex-col justify-between">
        <RomanticBackground />

        <main className="flex flex-col gap-4 sm:gap-6 pb-10 relative z-10">
          <Hero onExplore={scrollToReveal} />

          <div id="story">
            <OurStory />
          </div>

          <div id="reveal">
            <ScratchReveal />
          </div>

          <div id="schedule">
            <EventSchedule />
          </div>

          <div id="countdown">
            <RomanticCountdown />
          </div>
        </main>

        <RomanticFooter />
      </div>
    </div>
  );
}
