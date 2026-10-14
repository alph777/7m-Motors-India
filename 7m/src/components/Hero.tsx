import React from "react";
import { ArrowRight, ChevronDown, Flame } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0C]"
    >
      {/* Background Image Layer: Classic Royal Enfield Bullet Landing Centerpiece */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="hero-bullet-landing.jpg"
          alt="7M Motors Classic Royal Enfield Bullet"
          className="w-full h-full object-cover object-[center_45%] sm:object-[center_40%] filter brightness-[0.80] contrast-[1.16] saturate-[0.92] transform scale-[1.03] transition-transform duration-1000"
          fetchPriority="high"
        />

        {/* Cinematic Scrims: Dark gradient on the left for text contrast, bike fully visible in center & right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/92 via-[#0A0A0C]/65 to-transparent via-45% pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/85 via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle Dark Garage Mood Tint */}
        <div className="absolute inset-0 bg-[#0A0A0C]/20 pointer-events-none mix-blend-darken" />

        {/* Subtle Industrial Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center md:text-left flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Brand Tag Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-300 uppercase">
              Kerala's Premier Motorcycle Garage
            </span>
          </div>

          {/* Primary Bold Mechanical Heading */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white drop-shadow-2xl">
            UNLEASH
            <br />
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              THE RAW.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-2xl">
            Pre-owned motorcycles. Project builds. Custom machines.
            <br className="hidden sm:inline" />
            <span className="text-white font-medium"> Built for riders, not just buyers.</span>
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="#inventory"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-[#0A0A0C] font-heading font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5"
            >
              <span>EXPLORE MOTORCYCLES</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#sell-bike"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <span>SELL YOUR BIKE</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
            </a>
          </div>

          {/* Minimal credibility markers */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">100%</div>
              <div className="text-xs text-neutral-400 font-mono tracking-wider mt-0.5">Rider Verified</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">14</div>
              <div className="text-xs text-neutral-400 font-mono tracking-wider mt-0.5">Kerala Districts</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">45-Pt</div>
              <div className="text-xs text-neutral-400 font-mono tracking-wider mt-0.5">Inspection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <a
        href="#brand-intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        aria-label="Scroll to explore 7M Motors"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase group-hover:tracking-[0.35em] transition-all">
          SCROLL TO EXPLORE ↓
        </span>
        <div className="w-5 h-8 rounded-full border border-neutral-600 flex items-start justify-center p-1 group-hover:border-white transition-colors">
          <div className="w-1 h-2 bg-neutral-300 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
