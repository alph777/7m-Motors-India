import React from "react";
import { Award, Compass, ShieldCheck, Flame } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0C] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left 6 Cols: Large Atmospheric Garage Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-[#121318]">
              <img
                src="stc/bike-bg-cockpit.jpg"
                alt="7M Motors Kerala Master Garage Workshop"
                className="w-full h-[520px] object-cover object-center filter contrast-110 brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-90" />

              {/* Quote pill on image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A0A0C]/90 backdrop-blur-md rounded-sm border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Flame className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                      KERALA MOTORCYCLE ENTHUSIASTS
                    </div>
                    <div className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                      Preserving the Spirit of Motorcycling
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-white/20 pointer-events-none" />
          </div>

          {/* Right 6 Cols: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-[1px] bg-neutral-600" />
              <span>EDITORIAL ARCHIVE</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-[1.05]">
              BORN FROM THE
              <br />
              <span className="text-neutral-400">LOVE OF MACHINES.</span>
            </h2>

            <div className="mt-8 space-y-5 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p className="text-lg font-medium text-white italic border-l-2 border-amber-500/50 pl-5">
                “7M Motors was built around a simple idea — motorcycles should be more than transactions.”
              </p>

              <p>
                We source, buy, sell, restore and build motorcycles while preserving the character that makes each machine unique.
              </p>

              <p className="text-neutral-400">
                From everyday classics to ambitious project builds, we're here for the people who see something more in two wheels. In a world full of mass-produced plastic and soulless automated sales lots, 7M Motors stands as a sanctuary of honest steel, authentic carburettors, balanced crankshafts, and road-tested reliability.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-white">100+</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Rebuilds Completed</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-white">14</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Kerala Districts</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-white">100%</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Verified Papers</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
