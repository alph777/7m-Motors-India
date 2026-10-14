import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Arjun Nambiar",
      location: "Kochi, Kerala",
      bike: "2010 Royal Enfield Standard 350",
      rating: 5,
      review: "Smooth documentation, great communication and the bike was exactly as described. The compression and beat of the engine were tuned to perfection. Took it on a 400km ride to Munnar the next weekend—flawless.",
    },
    {
      name: "Vivek Kurup",
      location: "Kozhikode, Kerala",
      bike: "1989 Yamaha RD350 HT",
      rating: 5,
      review: "Finding an authentic RD350 in Kerala with clean papers is near impossible. The 7M team not only verified the engine numbers and history, but also gave me complete peace of mind. True motorcycle enthusiasts.",
    },
    {
      name: "Roshini George",
      location: "Thrissur, Kerala",
      bike: "Continental GT 650 Cafe Build",
      rating: 5,
      review: "Got my GT 650 customized with custom clip-ons and exhaust through 7M Motors. The craft and attention to detail in their garage is unlike any generic showroom. Highly recommended!",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>COMMUNITY FEEDBACK</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            RIDERS SAY IT BETTER
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base">
            From vintage purists to daily highway commuters across Kerala.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121318] border border-white/10 hover:border-white/30 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic mb-6">
                  “{item.review}”
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    {item.name}
                  </div>
                  <div className="text-xs text-neutral-400 font-mono mt-0.5">
                    {item.location}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Acquired</span>
                  <span className="text-xs font-semibold text-neutral-300">{item.bike}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
