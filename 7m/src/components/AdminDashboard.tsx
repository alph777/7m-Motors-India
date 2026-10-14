import React, { useState } from "react";
import { Motorcycle, BikeStatus, SellBikeSubmission, ContactInquiry } from "../types";
import { X, Plus, Edit2, Trash2, Check, Shield, Inbox, Tag, AlertCircle, RefreshCw } from "lucide-react";

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  motorcycles: Motorcycle[];
  onUpdateMotorcycles: (updated: Motorcycle[]) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  motorcycles,
  onUpdateMotorcycles,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<"inventory" | "sell-requests" | "inquiries">("inventory");
  const [editingBike, setEditingBike] = useState<Motorcycle | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // New bike blank template
  const [newBikeForm, setNewBikeForm] = useState<Partial<Motorcycle>>({
    id: "7M-" + Date.now().toString().slice(-6),
    brand: "Royal Enfield",
    model: "",
    year: 2020,
    engine: "350cc",
    engineCategory: "200-350cc",
    kilometres: 15000,
    price: 150000,
    condition: "Mint",
    status: "AVAILABLE",
    registration: "KL-07 (Ernakulam)",
    ownership: "1st Owner",
    insurance: "Valid until 2027",
    location: "Kochi Garage, Kerala",
    images: ["pics/WhatsApp Image 2026-08-22 at 2.43.35 PM.jpeg"],
    description: "",
    highlights: [
      "45-point mechanical inspection passed",
      "Documentation verified with clear title",
      "Doorstep delivery available across Kerala"
    ],
    specs: {
      engineType: "Single Cylinder 4-Stroke",
      transmission: "5-Speed Manual",
      cooling: "Air Cooled",
      brakes: "Dual Disc ABS",
      fuelSystem: "Electronic Fuel Injection"
    }
  });

  // Load enquiries from localStorage
  const sellSubmissions: SellBikeSubmission[] = JSON.parse(
    localStorage.getItem("7m_sell_submissions") || "[]"
  );
  const contactInquiries: ContactInquiry[] = JSON.parse(
    localStorage.getItem("7m_contact_inquiries") || "[]"
  );

  // Status toggle helper
  const handleStatusChange = (bikeId: string, newStatus: BikeStatus) => {
    const updated = motorcycles.map((b) => (b.id === bikeId ? { ...b, status: newStatus } : b));
    onUpdateMotorcycles(updated);
  };

  // Price change helper
  const handlePriceChange = (bikeId: string, newPriceStr: string) => {
    const num = parseInt(newPriceStr.replace(/[^0-9]/g, ""), 10) || 0;
    const updated = motorcycles.map((b) => (b.id === bikeId ? { ...b, price: num } : b));
    onUpdateMotorcycles(updated);
  };

  // Delete bike helper
  const handleDeleteBike = (bikeId: string) => {
    if (confirm("Are you sure you want to remove this machine from the active inventory?")) {
      const updated = motorcycles.filter((b) => b.id !== bikeId);
      onUpdateMotorcycles(updated);
    }
  };

  // Save edited bike
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBike) return;
    const updated = motorcycles.map((b) => (b.id === editingBike.id ? editingBike : b));
    onUpdateMotorcycles(updated);
    setEditingBike(null);
  };

  // Add new bike
  const handleSaveNewBike = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBikeForm.model) {
      alert("Please enter a motorcycle model name.");
      return;
    }
    const fullBike: Motorcycle = {
      ...(newBikeForm as Motorcycle),
      id: newBikeForm.id || "7M-" + Date.now().toString().slice(-6),
    };
    onUpdateMotorcycles([fullBike, ...motorcycles]);
    setIsAddingNew(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-6xl bg-[#121318] border border-white/20 rounded-sm shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A0A0C] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h2 className="font-heading font-black text-lg text-white uppercase tracking-wider">
              7M MOTORS GARAGE INVENTORY & ENQUIRY MANAGER
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#181A22] border-b border-white/10 text-xs font-mono">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("inventory")}
              className={`px-4 py-2 rounded-sm uppercase tracking-wider transition-colors ${
                activeTab === "inventory"
                  ? "bg-white text-black font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Inventory ({motorcycles.length})
            </button>
            <button
              onClick={() => setActiveTab("sell-requests")}
              className={`px-4 py-2 rounded-sm uppercase tracking-wider transition-colors ${
                activeTab === "sell-requests"
                  ? "bg-white text-black font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Sell Submissions ({sellSubmissions.length})
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-4 py-2 rounded-sm uppercase tracking-wider transition-colors ${
                activeTab === "inquiries"
                  ? "bg-white text-black font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Contact Messages ({contactInquiries.length})
            </button>
          </div>

          {activeTab === "inventory" && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs rounded-sm transition-colors uppercase tracking-wider font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Motorcycle</span>
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar text-xs font-mono">
          
          {/* TAB 1: INVENTORY MANAGEMENT */}
          {activeTab === "inventory" && (
            <div>
              {/* Table of Motorcycles */}
              <div className="overflow-x-auto border border-white/10 rounded-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0A0A0C] border-b border-white/10 text-neutral-400 uppercase text-[10px] tracking-wider">
                      <th className="p-3">ID / Model</th>
                      <th className="p-3">Specs</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Price (₹)</th>
                      <th className="p-3">Location</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {motorcycles.map((bike) => (
                      <tr key={bike.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3">
                          <div className="font-heading font-bold text-white text-sm">
                            {bike.brand} {bike.model}
                          </div>
                          <div className="text-[10px] text-neutral-500">{bike.id}</div>
                        </td>
                        <td className="p-3 text-neutral-300">
                          <div>{bike.year} • {bike.engine}</div>
                          <div className="text-[10px] text-neutral-500">{bike.kilometres.toLocaleString("en-IN")} KM</div>
                        </td>
                        <td className="p-3">
                          <select
                            value={bike.status}
                            onChange={(e) => handleStatusChange(bike.id, e.target.value as BikeStatus)}
                            className="bg-[#181A22] border border-white/10 rounded px-2 py-1 text-[11px] text-white focus:outline-none"
                          >
                            <option value="AVAILABLE">AVAILABLE</option>
                            <option value="PRE-BOOKED">PRE-BOOKED</option>
                            <option value="SOLD">SOLD</option>
                            <option value="PROJECT">PROJECT</option>
                          </select>
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={bike.price}
                            onChange={(e) => handlePriceChange(bike.id, e.target.value)}
                            className="w-28 bg-[#181A22] border border-white/10 rounded px-2 py-1 text-white font-bold"
                          />
                        </td>
                        <td className="p-3 text-neutral-400">
                          {bike.location}
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingBike(bike)}
                              className="p-1.5 bg-white/5 hover:bg-white/10 text-white rounded"
                              title="Edit Details"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteBike(bike.id)}
                              className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: SELL SUBMISSIONS */}
          {activeTab === "sell-requests" && (
            <div className="space-y-4">
              {sellSubmissions.length === 0 ? (
                <div className="text-center py-12 text-neutral-500">
                  No motorcycle sale submissions received yet. When riders submit via the "GOT A BIKE TO SELL?" form, they will appear here.
                </div>
              ) : (
                sellSubmissions.map((sub) => (
                  <div key={sub.id} className="p-4 bg-[#181A22] border border-white/10 rounded-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-2">
                      <div>
                        <span className="font-heading font-bold text-white text-sm">
                          {sub.brand} {sub.model} ({sub.year})
                        </span>
                        <span className="ml-3 text-[10px] text-neutral-400">ID: {sub.id}</span>
                      </div>
                      <div className="text-emerald-400 font-bold">
                        Expected: ₹{sub.expectedPrice}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3 text-[11px] text-neutral-300">
                      <div><span className="text-neutral-500 block">Seller:</span> {sub.name}</div>
                      <div>
                        <span className="text-neutral-500 block">Phone:</span>
                        <a href={`tel:${sub.phone}`} className="text-white hover:underline">{sub.phone}</a>
                      </div>
                      <div><span className="text-neutral-500 block">Odometer:</span> {sub.kilometres} KM</div>
                      <div><span className="text-neutral-500 block">Location:</span> {sub.location}</div>
                    </div>

                    {sub.additionalInfo && (
                      <p className="text-[11px] text-neutral-400 italic bg-black/30 p-2 rounded">
                        Notes: {sub.additionalInfo}
                      </p>
                    )}

                    <div className="mt-3 pt-2 border-t border-white/5 flex justify-end gap-2">
                      <a
                        href={`https://wa.me/${sub.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hi ${sub.name}, this is 7M Motors regarding your ${sub.brand} ${sub.model}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] uppercase font-bold"
                      >
                        Reply on WhatsApp
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: CONTACT INQUIRIES */}
          {activeTab === "inquiries" && (
            <div className="space-y-4">
              {contactInquiries.length === 0 ? (
                <div className="text-center py-12 text-neutral-500">
                  No contact messages received yet.
                </div>
              ) : (
                contactInquiries.map((inq) => (
                  <div key={inq.id} className="p-4 bg-[#181A22] border border-white/10 rounded-sm">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <div>
                        <span className="font-heading font-bold text-white text-sm">{inq.name}</span>
                        <span className="ml-3 text-neutral-400 text-[10px]">{inq.interestedIn}</span>
                      </div>
                      <span className="text-neutral-500 text-[10px]">
                        {new Date(inq.submittedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="my-2 text-[11px] text-neutral-300">
                      "{inq.message}"
                    </p>

                    <div className="flex items-center gap-4 text-[10px] text-neutral-400 pt-2 border-t border-white/5">
                      <span>Phone: <a href={`tel:${inq.phone}`} className="text-white hover:underline">{inq.phone}</a></span>
                      {inq.email && <span>Email: <a href={`mailto:${inq.email}`} className="text-white hover:underline">{inq.email}</a></span>}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

        </div>

        {/* Footer info strip */}
        <div className="px-6 py-3 bg-[#0A0A0C] border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500">
          <span>Persisted locally. Ready for Supabase / PostgreSQL integration.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-black font-bold uppercase tracking-wider rounded-sm hover:bg-neutral-200"
          >
            Done
          </button>
        </div>

      </div>

      {/* Edit Bike Modal */}
      {editingBike && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85">
          <form
            onSubmit={handleSaveEdit}
            className="w-full max-w-xl bg-[#181A22] border border-white/20 p-6 rounded-sm text-xs font-mono space-y-4"
          >
            <h3 className="font-heading font-bold text-white text-base uppercase">Edit Motorcycle</h3>
            <div>
              <label className="text-neutral-400 block mb-1">Model Name</label>
              <input
                type="text"
                value={editingBike.model}
                onChange={(e) => setEditingBike({ ...editingBike, model: e.target.value })}
                className="w-full bg-[#121318] border border-white/10 p-2 text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-neutral-400 block mb-1">Price (₹)</label>
                <input
                  type="number"
                  value={editingBike.price}
                  onChange={(e) => setEditingBike({ ...editingBike, price: parseInt(e.target.value, 10) || 0 })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
              <div>
                <label className="text-neutral-400 block mb-1">Status</label>
                <select
                  value={editingBike.status}
                  onChange={(e) => setEditingBike({ ...editingBike, status: e.target.value as BikeStatus })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                >
                  <option value="AVAILABLE">AVAILABLE</option>
                  <option value="PRE-BOOKED">PRE-BOOKED</option>
                  <option value="SOLD">SOLD</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-neutral-400 block mb-1">Description</label>
              <textarea
                rows={3}
                value={editingBike.description}
                onChange={(e) => setEditingBike({ ...editingBike, description: e.target.value })}
                className="w-full bg-[#121318] border border-white/10 p-2 text-white"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setEditingBike(null)}
                className="px-4 py-2 bg-white/10 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-bold uppercase rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add New Bike Modal */}
      {isAddingNew && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85">
          <form
            onSubmit={handleSaveNewBike}
            className="w-full max-w-xl bg-[#181A22] border border-white/20 p-6 rounded-sm text-xs font-mono space-y-4 max-h-[85vh] overflow-y-auto"
          >
            <h3 className="font-heading font-bold text-white text-base uppercase">Add New Motorcycle</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-neutral-400 block mb-1">Brand</label>
                <input
                  type="text"
                  required
                  value={newBikeForm.brand}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, brand: e.target.value })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
              <div>
                <label className="text-neutral-400 block mb-1">Model *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Standard 350"
                  value={newBikeForm.model}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, model: e.target.value })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-neutral-400 block mb-1">Year</label>
                <input
                  type="number"
                  value={newBikeForm.year}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, year: parseInt(e.target.value, 10) || 2020 })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
              <div>
                <label className="text-neutral-400 block mb-1">Engine</label>
                <input
                  type="text"
                  value={newBikeForm.engine}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, engine: e.target.value })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
              <div>
                <label className="text-neutral-400 block mb-1">Price (₹)</label>
                <input
                  type="number"
                  value={newBikeForm.price}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, price: parseInt(e.target.value, 10) || 0 })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-neutral-400 block mb-1">Status</label>
                <select
                  value={newBikeForm.status}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, status: e.target.value as BikeStatus })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                >
                  <option value="AVAILABLE">AVAILABLE</option>
                  <option value="PRE-BOOKED">PRE-BOOKED</option>
                  <option value="SOLD">SOLD</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
              </div>
              <div>
                <label className="text-neutral-400 block mb-1">Registration</label>
                <input
                  type="text"
                  value={newBikeForm.registration}
                  onChange={(e) => setNewBikeForm({ ...newBikeForm, registration: e.target.value })}
                  className="w-full bg-[#121318] border border-white/10 p-2 text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-neutral-400 block mb-1">Description</label>
              <textarea
                rows={3}
                value={newBikeForm.description}
                onChange={(e) => setNewBikeForm({ ...newBikeForm, description: e.target.value })}
                className="w-full bg-[#121318] border border-white/10 p-2 text-white"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="px-4 py-2 bg-white/10 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase rounded"
              >
                Add to Live Inventory
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
