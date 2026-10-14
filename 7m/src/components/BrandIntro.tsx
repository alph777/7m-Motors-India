import React from "react";
import { Compass, Wrench, Gauge, Sparkles } from "lucide-react";

export const BrandIntro: React.FC = () => {
  return (
    <section id="brand-intro" className="relative py-28 bg-[#0A0A0C] border-b border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial & 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-[1px] bg-neutral-600" />
              <span>THE 7M PHILOSOPHY</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
              MORE THAN A
              <br />
              <span className="text-neutral-400">MOTORCYCLE.</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed border-l-2 border-neutral-700 pl-6 my-4 italic">
              “Every motorcycle has a story. At 7M Motors, we source, restore, customize and connect riders with machines worth riding.”
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
              We started 7M Motors in Kerala to break away from sterile, cookie-cutter vehicle dealerships. For us, motorcycles aren’t merely inventory—they are kinetic sculptures, mechanical legacies, and tickets to Kerala’s winding coastal roads and foggy Western Ghats.
            </p>

            {/* Three Feature Blocks */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* SOURCE */}
              <div className="p-5 rounded-sm bg-[#121318] border border-white/5 hover:border-white/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white">
                  SOURCE
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Carefully sourced pre-owned motorcycles with proven provenance and untouched engine integrity.
                </p>
              </div>

              {/* RESTORE */}
              <div className="p-5 rounded-sm bg-[#121318] border border-white/5 hover:border-white/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white">
                  RESTORE
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Bringing character and mechanical life back to vintage machines through meticulous handcraft.
                </p>
              </div>

              {/* RIDE */}
              <div className="p-5 rounded-sm bg-[#121318] border border-white/5 hover:border-white/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Gauge className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white">
                  RIDE
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Connecting motorcycles with passionate people who actually love riding, not just reselling.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Motorcycle Image beside text */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 group shadow-2xl bg-[#121318]">
              <img
                src="wdj.jpg"
                alt="7M Motors Garage Work"
                className="w-full h-[480px] object-cover object-center filter grayscale-[30%] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-[#0A0A0C]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                      KERALA ATELIER
                    </div>
                    <div className="font-heading font-bold text-sm text-white uppercase tracking-wider mt-0.5">
                      Handcrafted Precision & Raw Iron
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Accent industrial line */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-white/20 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
