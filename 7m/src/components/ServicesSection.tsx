import React from "react";
import { servicesData } from "../data/servicesData";
import { ShoppingBag, Tag, Search, Wrench, Sliders, Flame, ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const getIcon = (key: string) => {
    switch (key) {
      case "buy":
        return <Tag className="w-6 h-6" />;
      case "sell":
        return <ShoppingBag className="w-6 h-6" />;
      case "source":
        return <Search className="w-6 h-6" />;
      case "restore":
        return <Wrench className="w-6 h-6" />;
      case "customize":
        return <Sliders className="w-6 h-6" />;
      case "project":
        return <Flame className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>FULL-SPECTRUM MOTORCYCLE ATELIER</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            WHAT WE DO
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            From sourcing rare collector machines and facilitating transparent sales to ground-up restorations and radical bespoke builds.
          </p>
        </div>

        {/* Six Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#121318] border border-white/10 hover:border-white/30 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {getIcon(service.key)}
                  </div>
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-3 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.summary}
                </p>

                {/* Features checklist */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-white/5">
                  {service.features.map((feat, i) => (
                    <li key={i} className="text-xs text-neutral-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA */}
              <a
                href={`#${service.targetId}`}
                className="inline-flex items-center justify-between pt-4 border-t border-white/10 text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 hover:text-white group-hover:text-white transition-colors"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
