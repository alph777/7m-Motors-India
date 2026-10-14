import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenAdmin?: () => void;
  onSelectBikeForDetails?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Inventory", href: "#inventory" },
    { label: "Our Garage", href: "#garage-builds" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0C]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-[#0A0A0C]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-white/40"
        >
          <img
            src="7m-high-resolution-logo.png"
            alt="7M Motors Kerala"
            className="h-8 md:h-10 w-auto object-contain filter invert contrast-125 transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Graceful fallback if logo fails
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
          <div className="flex flex-col">
            <span className="font-heading font-black tracking-[0.25em] text-lg md:text-xl text-white group-hover:text-neutral-200 transition-colors">
              7M MOTORS
            </span>
            <span className="text-[10px] tracking-[0.28em] text-neutral-400 font-mono -mt-1 hidden sm:block">
              KERALA • UNLEASH THE RAW
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="#inventory"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-100 hover:bg-white text-[#0A0A0C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span>View Bikes</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-[#0A0A0C]/98 border-b border-white/10 backdrop-blur-xl ${
          mobileMenuOpen ? "max-h-[450px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-heading font-bold uppercase tracking-widest text-neutral-300 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#inventory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-white text-[#0A0A0C] font-heading font-bold text-xs uppercase tracking-widest rounded-sm shadow-md"
            >
              View Bikes →
            </a>
            <a
              href="#sell-bike"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 border border-white/20 text-neutral-200 font-heading font-bold text-xs uppercase tracking-widest rounded-sm hover:border-white"
            >
              Sell Your Bike →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
