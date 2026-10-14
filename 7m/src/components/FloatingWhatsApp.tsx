import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hi 7M Motors, I am interested in exploring pre-owned motorcycles and restorations from your garage."
  );
  const whatsappUrl = `https://wa.me/n917559917077?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-[#121318] border border-white/20 text-white text-xs px-3.5 py-2 rounded-sm shadow-2xl animate-bounce-subtle">
          <span className="font-mono">Chat with Garage Specialist</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.6)] transform hover:scale-110 transition-all duration-300 relative group"
        aria-label="Direct WhatsApp Concierge"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#0A0A0C] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        </span>
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};
