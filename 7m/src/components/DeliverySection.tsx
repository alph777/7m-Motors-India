import React from "react";
import { Truck, MapPin, ShieldCheck, ArrowRight, Clock } from "lucide-react";

export const DeliverySection: React.FC = () => {
  const districts = [
    "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam",
    "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram",
    "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
  ];

  return (
    <section className="py-24 bg-[#0A0A0C] border-b border-white/5 relative overflow-hidden">
      {/* Background Subtle Map / Industrial Ambient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#181A22] to-[#121318] border border-white/15 rounded-sm p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Accent Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Cols: Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300 uppercase tracking-widest mb-6">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>STATEWIDE DOORSTEP TRANSPORT</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1]">
                YOUR BIKE.
                <br />
                <span className="text-neutral-400">YOUR DOORSTEP.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl">
                “From our garage to your home. We arrange doorstep delivery across Kerala.”
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-400 font-mono">
                <div className="flex items-center gap-2 bg-[#0A0A0C] px-3.5 py-2 rounded border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Enclosed Weatherproof Carriers</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0A0A0C] px-3.5 py-2 rounded border border-white/5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>24–48 Hr Dispatch</span>
                </div>
              </div>

              {/* Delivery districts badge list */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
                  DELIVERY AVAILABLE ACROSS KERALA (14 DISTRICTS)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {districts.map((d) => (
                    <span
                      key={d}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-10">
                <a
                  href={`https://wa.me/919895000070?text=${encodeURIComponent(
                    "Hi 7M Motors, I would like to enquire about motorcycle doorstep delivery across Kerala."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-neutral-200 text-[#0A0A0C] font-heading font-black text-xs uppercase tracking-widest rounded-sm transition-all shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5"
                >
                  <span>ENQUIRE ABOUT DELIVERY →</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Cinematic Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="djs.jpg"
                  alt="7M Motors Motorcycle Handover & Delivery"
                  className="w-full h-80 sm:h-96 object-cover object-center filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/75 backdrop-blur-md rounded border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-neutral-300">Live Handover & Transit Inspection</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">100% Insured</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
