import React, { useState, useMemo } from "react";
import { Motorcycle, BikeStatus } from "../types";
import { Search, SlidersHorizontal, ArrowRight, Gauge, Calendar, Shield, Sparkles, RotateCcw } from "lucide-react";

interface InventoryGridProps {
  motorcycles: Motorcycle[];
  onSelectBike: (bike: Motorcycle) => void;
}

export const InventoryGrid: React.FC<InventoryGridProps> = ({ motorcycles, onSelectBike }) => {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const [selectedEngine, setSelectedEngine] = useState("ALL");
  const [selectedPriceRange, setSelectedPriceRange] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState<"ALL" | BikeStatus>("ALL");
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc" | "km-asc">("newest");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Available brands dynamically extracted + common ones
  const brands = useMemo(() => {
    const list = ["ALL", "Royal Enfield", "Yamaha", "Honda", "KTM", "Kawasaki", "BMW"];
    return list;
  }, []);

  // Filter logic
  const filteredBikes = useMemo(() => {
    return motorcycles.filter((bike) => {
      // Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesText =
          bike.brand.toLowerCase().includes(query) ||
          bike.model.toLowerCase().includes(query) ||
          bike.engine.toLowerCase().includes(query) ||
          bike.registration.toLowerCase().includes(query) ||
          bike.location.toLowerCase().includes(query);
        if (!matchesText) return false;
      }

      // Brand Filter
      if (selectedBrand !== "ALL" && bike.brand !== selectedBrand) {
        return false;
      }

      // Engine Category Filter
      if (selectedEngine !== "ALL" && bike.engineCategory !== selectedEngine) {
        return false;
      }

      // Status Filter
      if (selectedStatus !== "ALL" && bike.status !== selectedStatus) {
        return false;
      }

      // Price Range Filter
      if (selectedPriceRange !== "ALL") {
        if (selectedPriceRange === "under-1l" && bike.price >= 100000) return false;
        if (selectedPriceRange === "1l-2l" && (bike.price < 100000 || bike.price > 200000)) return false;
        if (selectedPriceRange === "2l-3l" && (bike.price < 200000 || bike.price > 300000)) return false;
        if (selectedPriceRange === "3l-plus" && bike.price <= 300000) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "km-asc") return a.kilometres - b.kilometres;
      return 0;
    });
  }, [motorcycles, searchQuery, selectedBrand, selectedEngine, selectedPriceRange, selectedStatus, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedBrand("ALL");
    setSelectedEngine("ALL");
    setSelectedPriceRange("ALL");
    setSelectedStatus("ALL");
    setSortBy("newest");
  };

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
        return <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-sm">AVAILABLE</span>;
      case "PRE-BOOKED":
        return <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-sm">PRE-BOOKED</span>;
      case "SOLD":
        return <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-neutral-700/60 text-neutral-400 border border-neutral-600 rounded-sm">SOLD</span>;
      case "PROJECT":
        return <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-sm">PROJECT</span>;
    }
  };

  return (
    <section id="inventory" className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>LIVE SHOWROOM & WORKSHOP INVENTORY</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              CURRENTLY IN THE GARAGE
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base italic">
              “Machines looking for their next chapter.”
            </p>
          </div>

          {/* Quick Stats or Reset Button */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              Showing <span className="text-white font-bold">{filteredBikes.length}</span> of {motorcycles.length} Machines
            </span>
            {(selectedBrand !== "ALL" || selectedEngine !== "ALL" || selectedPriceRange !== "ALL" || selectedStatus !== "ALL" || searchQuery) && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-sm border border-white/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-[#121318] border border-white/10 rounded-sm p-4 sm:p-5 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Live Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by brand, model, engine, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181A22] border border-white/10 rounded-sm pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            {/* Brand Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-[#181A22] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 font-mono"
              >
                <option value="ALL">All Brands</option>
                <option value="Royal Enfield">Royal Enfield</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Honda">Honda</option>
                <option value="KTM">KTM</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="BMW">BMW</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#181A22] border border-white/10 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 font-mono"
              >
                <option value="newest">Newest Year</option>
                <option value="price-asc">Price Low → High</option>
                <option value="price-desc">Price High → Low</option>
                <option value="km-asc">Lowest Kilometres</option>
              </select>
            </div>

            {/* Filter Toggle Button */}
            <div className="md:col-span-2">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`w-full py-2.5 px-3 border rounded-sm font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                  showAdvancedFilters ? "bg-white text-black border-white" : "bg-[#181A22] text-neutral-300 border-white/10 hover:border-white/30"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters {selectedEngine !== "ALL" || selectedPriceRange !== "ALL" || selectedStatus !== "ALL" ? "●" : ""}</span>
              </button>
            </div>

          </div>

          {/* Advanced Multi-Factor Filters Drawer */}
          {showAdvancedFilters && (
            <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 animate-fadeIn">
              
              {/* Engine Displacement Filter */}
              <div>
                <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Engine Displacement
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: "All", val: "ALL" },
                    { label: "100–200cc", val: "100-200cc" },
                    { label: "200–350cc", val: "200-350cc" },
                    { label: "350–500cc", val: "350-500cc" },
                    { label: "500–650cc", val: "500-650cc" },
                    { label: "650cc+", val: "650cc+" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      onClick={() => setSelectedEngine(item.val)}
                      className={`px-2.5 py-1 text-xs rounded-sm border transition-colors ${
                        selectedEngine === item.val
                          ? "bg-white text-[#0A0A0C] border-white font-bold"
                          : "bg-white/5 text-neutral-400 border-white/5 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Price Bracket
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: "All", val: "ALL" },
                    { label: "< ₹1 Lakh", val: "under-1l" },
                    { label: "₹1L – 2L", val: "1l-2l" },
                    { label: "₹2L – 3L", val: "2l-3l" },
                    { label: "₹3L+", val: "3l-plus" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      onClick={() => setSelectedPriceRange(item.val)}
                      className={`px-2.5 py-1 text-xs rounded-sm border transition-colors ${
                        selectedPriceRange === item.val
                          ? "bg-white text-[#0A0A0C] border-white font-bold"
                          : "bg-white/5 text-neutral-400 border-white/5 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Status
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: "All", val: "ALL" },
                    { label: "Available", val: "AVAILABLE" },
                    { label: "Pre-Booked", val: "PRE-BOOKED" },
                    { label: "Sold", val: "SOLD" },
                    { label: "Project", val: "PROJECT" }
                  ].map((item) => (
                    <button
                      key={item.val}
                      onClick={() => setSelectedStatus(item.val as any)}
                      className={`px-2.5 py-1 text-xs rounded-sm border transition-colors ${
                        selectedStatus === item.val
                          ? "bg-white text-[#0A0A0C] border-white font-bold"
                          : "bg-white/5 text-neutral-400 border-white/5 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Motorcycle Cards Grid */}
        {filteredBikes.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#121318] border border-white/5 rounded-sm">
            <h3 className="font-heading font-bold text-lg text-white uppercase">No Motorcycles Found</h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto">
              We couldn't find any machines matching your exact filters. Try broadening your criteria or request a source.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2.5 bg-white text-[#0A0A0C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-neutral-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBikes.map((bike) => (
              <article
                key={bike.id}
                className="group bg-[#121318] border border-white/10 hover:border-white/30 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                  <img
                    src={bike.images[0]}
                    alt={`${bike.brand} ${bike.model}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    {getStatusBadge(bike.status)}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#0A0A0C]/80 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-mono text-neutral-300 border border-white/10">
                    {bike.condition}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0A0A0C]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400">
                    {bike.registration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                      {bike.brand}
                    </div>
                    <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mt-1 group-hover:text-amber-400 transition-colors">
                      {bike.model}
                    </h3>

                    {/* Specs Line: Year · Engine · Kilometres */}
                    <div className="flex items-center gap-3 mt-3 text-xs text-neutral-400 font-mono">
                      <span>{bike.year}</span>
                      <span>•</span>
                      <span>{bike.engine}</span>
                      <span>•</span>
                      <span>{bike.kilometres.toLocaleString("en-IN")} KM</span>
                    </div>

                    <p className="mt-3 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {bike.description}
                    </p>
                  </div>

                  {/* Card Footer: Price & CTA Button */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 block uppercase">Asking Price</span>
                      <span className="font-heading font-black text-2xl text-white">
                        {formatPrice(bike.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectBike(bike)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white text-white hover:text-[#0A0A0C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

        {/* View All Inventory bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white text-white font-heading font-bold text-xs uppercase tracking-widest rounded-sm transition-colors"
          >
            <span>VIEW ALL INVENTORY →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
