import React from "react";
import { HeartHandshake, Eye, CheckCheck, Truck, Sparkles } from "lucide-react";

export const Why7M: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "RIDER FIRST",
      desc: "Built around motorcycle enthusiasts, not corporate quotas. We only sell machines we'd proudly ride ourselves.",
      icon: <HeartHandshake className="w-5 h-5" />,
    },
    {
      num: "02",
      title: "TRANSPARENT",
      desc: "Clear communication, verified RC transfers, zero hidden dealership fees or artificially inflated margins.",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      num: "03",
      title: "QUALITY CHECKED",
      desc: "Every motorcycle passes a rigorous 45-point mechanical inspection before entering the showroom floor.",
      icon: <CheckCheck className="w-5 h-5" />,
    },
    {
      num: "04",
      title: "KERALA-WIDE DELIVERY",
      desc: "Secure, weatherproof enclosed vehicle transport delivering your machine right to your doorstep across all 14 districts.",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      num: "05",
      title: "CUSTOM WORKS",
      desc: "In-house custom upgrades, exhaust tuning, brass embellishments, and bespoke leatherwork available on request.",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>UNCOMPROMISING STANDARDS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            WHY 7M?
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base">
            We are redefining how pre-owned and custom motorcycles are experienced in South India.
          </p>
        </div>

        {/* Minimal 5-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="bg-[#121318] border border-white/10 hover:border-white/30 rounded-sm p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading font-black text-4xl text-neutral-600 group-hover:text-white transition-colors duration-300">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-base text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                7M STANDARD
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
