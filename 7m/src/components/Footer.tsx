import React from "react";
import { Instagram, Youtube, Facebook, Shield, Wrench } from "lucide-react";

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#070709] border-t border-white/10 text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="7m-high-resolution-logo.png"
                  alt="7M Motors"
                  className="h-8 w-auto filter invert contrast-125"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
                <span className="font-heading font-black text-xl text-white tracking-[0.2em] uppercase">
                  7M MOTORS
                </span>
              </div>

              <div className="font-heading font-black text-lg text-white tracking-widest uppercase mb-3">
                “UNLEASH THE RAW.”
              </div>

              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
                A motorcycle garage & enthusiast community based in Kerala, India. Dedicated to curated pre-owned motorcycles, concours restorations, and bespoke project builds.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/7mmotors.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="7M Motors Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="7M Motors Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="7M Motors YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inventory" className="hover:text-white transition-colors">
                  Current Inventory
                </a>
              </li>
              <li>
                <a href="#garage-builds" className="hover:text-white transition-colors">
                  Our Garage Builds
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Workshop Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About 7M Motors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
              <li>
                <a href="#sell-bike" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Sell Your Bike →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Pillars */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Garage Operations
            </h4>
            <ul className="space-y-2.5">
              <li>Royal Enfield Standard 350 Sourcing</li>
              <li>Vintage 2-Stroke & Cast Iron Restorations</li>
              <li>Bespoke Cafe Racer & Scrambler Fabrication</li>
              <li>Engine Blueprinting & Dynamic Balancing</li>
              <li>Kerala Doorstep Transport & Verification</li>
            </ul>

            {/* Garage Admin Link */}
            {onOpenAdmin && (
              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-2 text-[11px] font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Garage Admin Panel</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 7M Motors. All Rights Reserved. Built for Riders.
          </div>
          <div className="flex items-center gap-2 font-mono text-neutral-400">
            <span>Crafted in</span>
            <span className="text-white font-bold">Kerala, India 🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
