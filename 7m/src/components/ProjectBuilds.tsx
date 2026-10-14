import React, { useState, useRef, useCallback } from "react";
import { projectBuilds } from "../data/projectBuilds";
import { ProjectBuild } from "../types";
import { Wrench, Clock, ArrowRight, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export const ProjectBuilds: React.FC = () => {
  const [selectedBuildIndex, setSelectedBuildIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectBuild | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentBuild = projectBuilds[selectedBuildIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="garage-builds" className="py-24 bg-[#0A0A0C] border-b border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>BESPOKE FABRICATION & RESTORATION</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              BUILT IN THE GARAGE
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base italic">
              “From forgotten machine to road-ready character.”
            </p>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {projectBuilds.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedBuildIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-sm text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedBuildIndex === idx
                    ? "bg-white text-[#0A0A0C] shadow-lg"
                    : "bg-[#181A22] text-neutral-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {proj.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Main Project Showcase Card with Before/After Slider */}
        <div className="bg-[#121318] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left 7 Cols: Interactive Before / After Image Slider */}
            <div className="lg:col-span-7 relative select-none bg-black">
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                onTouchMove={handleTouchMove}
                className="relative h-[380px] sm:h-[480px] w-full overflow-hidden cursor-ew-resize group"
              >
                {/* AFTER IMAGE (Full Base Layer) */}
                <img
                  src={currentBuild.afterImage}
                  alt={`${currentBuild.title} Restored State`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono font-bold text-black uppercase tracking-wider pointer-events-none">
                  RESTORED (AFTER)
                </div>

                {/* BEFORE IMAGE (Clipped Layer on Top) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentBuild.beforeImage}
                    alt={`${currentBuild.title} Barn Find State`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                      height: "100%",
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider border border-white/20">
                    RAW BARN FIND (BEFORE)
                  </div>
                </div>

                {/* SLIDER DIVIDER LINE & HANDLE */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div
                    onMouseDown={handleMouseDown}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border-2 border-black group-hover:scale-110 transition-transform"
                  >
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                {/* Drag Hint on Bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-neutral-300 pointer-events-none">
                  DRAG SLIDER TO REVEAL BEFORE / AFTER
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Build Story & Specs */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#121318] border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span className="tracking-widest">{currentBuild.tag}</span>
                  <span className="flex items-center gap-1 text-neutral-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentBuild.hours} WORKSHOP HOURS</span>
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {currentBuild.title}
                </h3>

                <p className="mt-2 text-xs font-mono text-neutral-400">
                  Donor: <span className="text-white">{currentBuild.donorBike}</span>
                </p>

                <p className="mt-4 text-sm text-neutral-300 leading-relaxed italic border-l-2 border-amber-500/40 pl-4">
                  “{currentBuild.subtitle}”
                </p>

                <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {currentBuild.description}
                </p>

                {/* Key mods checklist */}
                <div className="mt-6 space-y-2">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    Workshop Engineering Notes
                  </h4>
                  {currentBuild.mods.slice(0, 3).map((mod, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(currentBuild)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0A0A0C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-colors"
                >
                  <span>VIEW PROJECT →</span>
                </button>

                <a
                  href="#contact"
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors hidden sm:block"
                >
                  Commission a Build →
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#121318] border border-white/20 rounded-sm p-6 sm:p-8 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs font-mono text-amber-400">{activeProjectModal.tag}</span>
                <h3 className="font-heading font-black text-2xl text-white uppercase">{activeProjectModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="text-neutral-400 hover:text-white p-2"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-neutral-300 mb-4">{activeProjectModal.description}</p>
            <div className="space-y-2 mb-6">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">Full Build Modifications</h4>
              {activeProjectModal.mods.map((mod, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                  <span className="text-amber-400 font-bold">●</span>
                  <span>{mod}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/917559917077?text=${encodeURIComponent(
                  `Hi 7M Motors, I would like to inquire about commissioning a project build similar to ${activeProjectModal.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Inquire on WhatsApp
              </a>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
