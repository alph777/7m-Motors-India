import React from "react";
import { Phone, MessageSquare, Compass, ArrowUpRight } from "lucide-react";

export const MobileActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0C]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href="tel:+919895000070"
        className="flex-1 py-2.5 bg-neutral-900 text-neutral-200 border border-white/15 rounded-sm font-heading font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
      >
        <Phone className="w-3.5 h-3.5 text-neutral-400" />
        <span>Call</span>
      </a>

      <a
        href="#inventory"
        className="flex-1 py-2.5 bg-white text-[#0A0A0C] rounded-sm font-heading font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
      >
        <span>View Bikes</span>
        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </a>

      <a
        href="https://wa.me/917559917077?text=Hi%207M%20Motors,%20I'm%20interested%20in%20your%20motorcycle%20inventory."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 bg-emerald-600 text-white rounded-sm font-heading font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
