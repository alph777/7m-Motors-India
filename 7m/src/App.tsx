import React, { useState, useEffect } from "react";
import { initialMotorcycles } from "./data/inventoryData";
import { Motorcycle, SellBikeSubmission } from "./types";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandIntro } from "./components/BrandIntro";
import { InventoryGrid } from "./components/InventoryGrid";
import { BikeDetailModal } from "./components/BikeDetailModal";
import { ProjectBuilds } from "./components/ProjectBuilds";
import { ServicesSection } from "./components/ServicesSection";
import { SellBikeForm } from "./components/SellBikeForm";
import { Why7M } from "./components/Why7M";
import { DeliverySection } from "./components/DeliverySection";
import { InstagramGrid } from "./components/InstagramGrid";
import { AboutSection } from "./components/AboutSection";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AdminDashboard } from "./components/AdminDashboard";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileActionBar } from "./components/MobileActionBar";

export const App: React.FC = () => {
  // Load motorcycles from localStorage if modified by Admin, else use rich initial dataset
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>(() => {
    try {
      const stored = localStorage.getItem("7m_live_inventory");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn("Failed to load inventory from storage", e);
    }
    return initialMotorcycles;
  });

  const [selectedBike, setSelectedBike] = useState<Motorcycle | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync inventory changes to localStorage
  const handleUpdateMotorcycles = (updated: Motorcycle[]) => {
    setMotorcycles(updated);
    try {
      localStorage.setItem("7m_live_inventory", JSON.stringify(updated));
    } catch (e) {
      console.warn("Failed to save inventory to storage", e);
    }
  };

  const handleBikeSubmitted = (submission: SellBikeSubmission) => {
    console.log("New motorcycle submitted for valuation:", submission);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F1F5F9] selection:bg-white selection:text-black antialiased relative">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Hero Section */}
      <main>
        <Hero />

        {/* Brand Introduction */}
        <BrandIntro />

        {/* Featured Inventory & Search/Filter */}
        <InventoryGrid
          motorcycles={motorcycles}
          onSelectBike={(bike) => setSelectedBike(bike)}
        />

        {/* Project Builds with Before/After Slider */}
        <ProjectBuilds />

        {/* Services - What We Do */}
        <ServicesSection />

        {/* Sell Your Motorcycle */}
        <SellBikeForm onBikeSubmitted={handleBikeSubmitted} />

        {/* Why 7M Motors */}
        <Why7M />

        {/* Kerala-Wide Delivery */}
        <DeliverySection />

        {/* Instagram / Community Grid */}
        <InstagramGrid />

        {/* About 7M Motors */}
        <AboutSection />

        {/* Rider Testimonials */}
        <Testimonials />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Dedicated Motorcycle Detail Modal */}
      <BikeDetailModal
        bike={selectedBike}
        onClose={() => setSelectedBike(null)}
        onBookReserve={(bike) => {
          const msg = encodeURIComponent(
            `Hi 7M Motors, I would like to reserve the ${bike.brand} ${bike.model} (${bike.year}, ID: ${bike.id}). Please let me know the reservation process.`
          );
          window.open(`https://wa.me/919895000070?text=${msg}`, "_blank");
        }}
      />

      {/* Garage Admin System Dashboard */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        motorcycles={motorcycles}
        onUpdateMotorcycles={handleUpdateMotorcycles}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar />
    </div>
  );
};

export default App;
