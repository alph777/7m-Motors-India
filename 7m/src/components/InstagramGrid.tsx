import React from "react";
import { Instagram, ArrowUpRight, Heart, MessageCircle } from "lucide-react";

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      img: "pics/WhatsApp Image 2026-08-22 at 2.43.35 PM.jpeg",
      tag: "NEW ARRIVAL",
      caption: "Pristine Standard 350 just rolled into the Kochi showroom bay.",
      likes: 428,
      comments: 34,
    },
    {
      img: "pics/WhatsApp Image 2026-08-22 at 2.43.36 PM.jpeg",
      tag: "GARAGE WORK",
      caption: "Carburettor sonic cleaning & Mikuni blueprint overhaul.",
      likes: 512,
      comments: 48,
    },
    {
      img: "pics/WhatsApp Image 2026-08-22 at 2.43.38 PM.jpeg",
      tag: "RESTORATION",
      caption: "Nut-and-bolt vintage Bullet assembly in progress.",
      likes: 689,
      comments: 62,
    },
    {
      img: "pics/WhatsApp Image 2026-08-22 at 2.43.40 PM.jpeg",
      tag: "DELIVERY",
      caption: "Handover day! Heading to its new rider in Calicut.",
      likes: 745,
      comments: 53,
    },
    {
      img: "pics/WhatsApp Image 2026-08-28 at 12.24.50 PM.jpeg",
      tag: "RIDER COMMUNITY",
      caption: "Sunday morning coastal throttle therapy across Vypin.",
      likes: 890,
      comments: 71,
    },
    {
      img: "pics/WhatsApp Image 2026-08-28 at 12.24.51 PM.jpeg",
      tag: "PHOTOGRAPHY",
      caption: "Raw steel, chrome reflections, and early morning fog.",
      likes: 614,
      comments: 39,
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <Instagram className="w-3.5 h-3.5 text-neutral-300" />
              <span>COMMUNITY & DISPATCHES</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              FROM THE 7M GARAGE
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base">
              Follow <span className="text-white font-mono font-semibold">@7mmotors.india</span> for daily workshop updates, barn finds, and delivery dispatches.
            </p>
          </div>

          <a
            href="https://www.instagram.com/7mmotors.india/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#181A22] hover:bg-white text-white hover:text-black border border-white/15 rounded-sm font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM →</span>
          </a>
        </div>

        {/* 6-Image Instagram Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/7mmotors.india/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden bg-[#181A22] border border-white/10 block"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Tag Pill */}
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-neutral-300 uppercase tracking-widest pointer-events-none">
                {post.tag}
              </div>

              {/* Hover Overlay with Likes & Caption */}
              <div className="absolute inset-0 bg-[#0A0A0C]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-left">
                <div className="flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <MessageCircle className="w-3.5 h-3.5 text-neutral-300" />
                    {post.comments}
                  </span>
                </div>

                <div>
                  <p className="text-[11px] text-neutral-300 line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                    <span>@7mmotors.india</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
