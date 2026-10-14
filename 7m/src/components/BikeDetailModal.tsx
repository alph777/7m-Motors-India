import React, { useState } from "react";
import { Motorcycle } from "../types";
import { X, Check, Phone, MessageSquare, ShieldCheck, MapPin, Calendar, Gauge, Award, ArrowRight } from "lucide-react";

interface BikeDetailModalProps {
  bike: Motorcycle | null;
  onClose: () => void;
  onBookReserve?: (bike: Motorcycle) => void;
}

export const BikeDetailModal: React.FC<BikeDetailModalProps> = ({ bike, onClose, onBookReserve }) => {
  if (!bike) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusBadge = (status: Motorcycle["status"]) => {
    switch (status) {
      case "AVAILABLE":
        return <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm">● AVAILABLE</span>;
      case "PRE-BOOKED":
        return <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-sm">● PRE-BOOKED</span>;
      case "SOLD":
        return <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-neutral-600/30 text-neutral-400 border border-neutral-600/40 rounded-sm">● SOLD</span>;
      case "PROJECT":
        return <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-sm">● PROJECT BUILD</span>;
    }
  };

  // WhatsApp Pre-filled message according to prompt Section 19:
  // "Hi 7M Motors, I'm interested in the Royal Enfield Standard 350 listed on your website. Please share more details."
  // With motorcycle name, year, and listing ID
  const whatsappMessage = encodeURIComponent(
    `Hi 7M Motors, I'm interested in the ${bike.brand} ${bike.model} (${bike.year}, ID: ${bike.id}) listed on your website. Please share more details.`
  );
  const whatsappUrl = `https://wa.me/917559917077?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-bike-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#121318] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A0A0C] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-400 tracking-wider">LISTING ID: {bike.id}</span>
            {getStatusBadge(bike.status)}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close motorcycle details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[82vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Cinematic Image Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Main Active Image */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black/60 border border-white/10">
                <img
                  src={bike.images[activeImageIndex] || bike.images[0]}
                  alt={`${bike.brand} ${bike.model}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-[#0A0A0C]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white">
                  {bike.condition}
                </div>
              </div>

              {/* Thumbnails */}
              {bike.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {bike.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? "border-white scale-105 shadow-md" : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Highlights Checklist */}
              <div className="mt-4 p-5 rounded-sm bg-[#181A22] border border-white/5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>7M Verified Highlights</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {bike.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Vehicle Information & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  {bike.brand}
                </div>
                <h2 id="modal-bike-title" className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1">
                  {bike.model}
                </h2>

                {/* Price Display */}
                <div className="mt-4 pb-4 border-b border-white/10 flex items-baseline gap-3">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white">
                    {formatPrice(bike.price)}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">Kerala Handover Price</span>
                </div>

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-3 my-6 text-xs">
                  <div className="p-3 bg-[#181A22] rounded-sm border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase font-mono">Year</span>
                    <span className="font-heading font-bold text-white text-sm">{bike.year}</span>
                  </div>
                  <div className="p-3 bg-[#181A22] rounded-sm border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase font-mono">Odometer</span>
                    <span className="font-heading font-bold text-white text-sm">{bike.kilometres.toLocaleString("en-IN")} KM</span>
                  </div>
                  <div className="p-3 bg-[#181A22] rounded-sm border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase font-mono">Registration</span>
                    <span className="font-semibold text-white">{bike.registration}</span>
                  </div>
                  <div className="p-3 bg-[#181A22] rounded-sm border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase font-mono">Engine</span>
                    <span className="font-semibold text-white">{bike.engine}</span>
                  </div>
                  <div className="p-3 bg-[#181A22] rounded-sm border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase font-mono">Ownership</span>
                    <span className="font-semibold text-white">{bike.ownership}</span>
                  </div>
                  <div className="p-3 bg-[#181A22] rounded-sm border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase font-mono">Insurance</span>
                    <span className="font-semibold text-white truncate block">{bike.insurance}</span>
                  </div>
                  <div className="col-span-2 p-3 bg-[#181A22] rounded-sm border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-neutral-400 block text-[10px] uppercase font-mono">Location</span>
                      <span className="font-semibold text-white">{bike.location}</span>
                    </div>
                    <MapPin className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>

                {/* Narrative Description */}
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-300 mb-2">
                    Machine Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {bike.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons & Disclaimer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                {/* Enquire on WhatsApp button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>

                {/* Call & Reserve */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919895000070"
                    className="py-3 px-3 bg-neutral-800 hover:bg-neutral-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL 7M</span>
                  </a>

                  <button
                    onClick={() => {
                      if (onBookReserve) onBookReserve(bike);
                      else alert(`Thank you! Our garage team has received your interest in reserving the ${bike.brand} ${bike.model}. We will contact you immediately.`);
                    }}
                    className="py-3 px-3 bg-white hover:bg-neutral-200 text-[#0A0A0C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-colors text-center"
                  >
                    BOOK / RESERVE
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500 text-center leading-tight mt-1 font-mono">
                  * Availability and pricing should be confirmed with 7M Motors. Doorstep delivery available across Kerala.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
