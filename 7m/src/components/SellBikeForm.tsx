import React, { useState } from "react";
import { UploadCloud, CheckCircle2, MessageSquare, ArrowRight, X, Sparkles } from "lucide-react";
import { SellBikeSubmission } from "../types";

interface SellBikeFormProps {
  onBikeSubmitted?: (submission: SellBikeSubmission) => void;
}

export const SellBikeForm: React.FC<SellBikeFormProps> = ({ onBikeSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    kilometres: "",
    registration: "",
    expectedPrice: "",
    location: "Kochi (Ernakulam)",
    additionalInfo: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SellBikeSubmission | null>(null);

  // Handle Photo Upload Simulation (stores data URL preview)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setUploadedPhotos((prev) => [...prev, event.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submission: SellBikeSubmission = {
      id: "SELL-" + Date.now().toString().slice(-6),
      name: formData.name,
      phone: formData.phone,
      brand: formData.brand,
      model: formData.model,
      year: formData.year,
      kilometres: formData.kilometres,
      registration: formData.registration,
      expectedPrice: formData.expectedPrice,
      location: formData.location,
      photos: uploadedPhotos,
      additionalInfo: formData.additionalInfo,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage for admin management
    const existing = JSON.parse(localStorage.getItem("7m_sell_submissions") || "[]");
    localStorage.setItem("7m_sell_submissions", JSON.stringify([submission, ...existing]));

    if (onBikeSubmitted) {
      onBikeSubmitted(submission);
    }

    setSubmittedData(submission);
    setIsSubmitted(true);
  };

  // WhatsApp Pre-fill for Sell submission
  const getWhatsAppForwardUrl = () => {
    if (!submittedData) return "#";
    const text = encodeURIComponent(
      `Hi 7M Motors, I submitted my bike for sale on your website.\n\n*Bike Details:*\n- Brand/Model: ${submittedData.brand} ${submittedData.model}\n- Year: ${submittedData.year}\n- KM: ${submittedData.kilometres}\n- Registration: ${submittedData.registration}\n- Expected Price: ₹${submittedData.expectedPrice}\n- Location: ${submittedData.location}\n- Seller Name: ${submittedData.name}\n- Contact: ${submittedData.phone}\n\nPlease let me know your valuation.`
    );
    return `https://wa.me/919895000070?text=${text}`;
  };

  return (
    <section id="sell-bike" className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>DIRECT CONSIGNMENT & CASH PURCHASE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            GOT A BIKE TO SELL?
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            “Turn your motorcycle into your next opportunity. 7M Motors helps riders sell their motorcycles through a smooth and transparent process.”
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#121318] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Success confirmation */
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-heading font-black text-2xl text-white uppercase">
                SUBMISSION RECEIVED
              </h3>

              <p className="mt-3 text-neutral-300 text-base max-w-lg mx-auto leading-relaxed">
                “Thanks. The 7M Motors team will review your motorcycle and get back to you.”
              </p>

              <div className="mt-8 p-4 bg-[#181A22] border border-white/10 rounded-sm max-w-md mx-auto text-left text-xs font-mono text-neutral-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Submission ID:</span>
                  <span className="text-white font-bold">{submittedData?.id}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">Motorcycle:</span>
                  <span className="text-white">{submittedData?.brand} {submittedData?.model} ({submittedData?.year})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Expected:</span>
                  <span className="text-emerald-400 font-bold">₹{submittedData?.expectedPrice}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppForwardUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details to WhatsApp →</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      brand: "",
                      model: "",
                      year: "",
                      kilometres: "",
                      registration: "",
                      expectedPrice: "",
                      location: "Kochi (Ernakulam)",
                      additionalInfo: "",
                    });
                    setUploadedPhotos([]);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-sm uppercase tracking-wider"
                >
                  Submit Another Motorcycle
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Intake Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Seller Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98470 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                  />
                </div>
              </div>

              {/* Row 2: Motorcycle Brand & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Motorcycle Brand *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Enfield, Yamaha, Honda, KTM"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Model & Variant *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Standard 350 / Continental GT 650"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              {/* Row 3: Year, Kilometres, Registration */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Manufacture Year *
                  </label>
                  <input
                    type="number"
                    required
                    min="1950"
                    max="2026"
                    placeholder="e.g. 2018"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Odometer (KM) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 28500"
                    value={formData.kilometres}
                    onChange={(e) => setFormData({ ...formData, kilometres: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Registration RTO *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. KL-07 (Ernakulam)"
                    value={formData.registration}
                    onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                  />
                </div>
              </div>

              {/* Row 4: Expected Price & Location in Kerala */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Expected Price (₹) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1,45,000"
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Location in Kerala *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 font-mono"
                  >
                    <option value="Kochi (Ernakulam)">Kochi (Ernakulam)</option>
                    <option value="Calicut (Kozhikode)">Calicut (Kozhikode)</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Trivandrum (Thiruvananthapuram)">Trivandrum (Thiruvananthapuram)</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Alappuzha">Alappuzha</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kasaragod">Kasaragod</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Wayanad">Wayanad</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Upload Motorcycle Photos */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Upload Motorcycle Photos
                </label>
                <div className="relative border-2 border-dashed border-white/15 hover:border-white/40 rounded-sm p-6 text-center bg-[#181A22]/50 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                  <p className="text-xs text-neutral-300 font-mono">
                    Drag and drop or <span className="text-white underline">Browse Files</span>
                  </p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-1">
                    Upload right side, left side, engine closeup & meter photos
                  </p>
                </div>

                {/* Photo Previews */}
                {uploadedPhotos.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {uploadedPhotos.map((photo, index) => (
                      <div key={index} className="relative w-20 h-20 rounded overflow-hidden border border-white/20 group">
                        <img src={photo} alt="Uploaded preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute top-1 right-1 p-1 bg-black/80 rounded-full text-white hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 6: Additional Information */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Additional Information / History
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention modifications, service history, tyre condition, reason for selling, or custom parts..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-white hover:bg-neutral-200 text-[#0A0A0C] font-heading font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5"
                >
                  <span>SUBMIT YOUR BIKE →</span>
                </button>
                <p className="text-center text-[11px] text-neutral-500 font-mono mt-3">
                  7M Motors guarantees strict privacy & zero marketing spam.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
