import React, { useState } from "react";
import { Phone, MessageSquare, Mail, MapPin, Instagram, CheckCircle2, ArrowRight } from "lucide-react";
import { ContactInquiry } from "../types";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interestedIn: "Buying a Motorcycle",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inquiry: ContactInquiry = {
      id: "INQ-" + Date.now().toString().slice(-6),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      interestedIn: formData.interestedIn,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("7m_contact_inquiries") || "[]");
    localStorage.setItem("7m_contact_inquiries", JSON.stringify([inquiry, ...existing]));

    setSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/917559917077?text=${encodeURIComponent(
    `Hi 7M Motors, I'd like to get in touch regarding ${formData.interestedIn}.`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0A0A0C] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left 5 Cols: Brand Details & Direct Touchpoints */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>DIRECT ACCESS</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                LET'S TALK
                <br />
                <span className="text-neutral-400">MACHINES.</span>
              </h2>

              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                Whether you want to inspect a machine, commission a full ground-up build, or sell your current ride, our doors and lines are open.
              </p>

              {/* Direct Info List */}
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">Garage Headquarters</span>
                    <span className="font-heading font-bold text-white text-base">7M MOTORS</span>
                    <span className="block text-xs text-neutral-400 font-mono mt-0.5">Kerala, India 🇮🇳</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">Direct Phone</span>
                    <a href="tel:+919895000070" className="font-mono text-sm text-white hover:text-amber-400 transition-colors">
                      +91 98950 00070
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">WhatsApp Concierge</span>
                    <a
                      href="https://wa.me/919895000070"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-white hover:text-emerald-400 transition-colors"
                    >
                      +91 98950 00070
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">Instagram</span>
                    <a
                      href="https://www.instagram.com/7mmotors.india/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-white hover:text-pink-400 transition-colors"
                    >
                      @7mmotors.india
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">Email</span>
                    <a href="mailto:hello@7mmotors.in" className="font-mono text-sm text-white hover:text-white transition-colors">
                      hello@7mmotors.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Big CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-black text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP 7M MOTORS →</span>
              </a>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121318] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white uppercase">
                    ENQUIRY TRANSMITTED
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you. A 7M Motors specialist will review your request and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        interestedIn: "Buying a Motorcycle",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider rounded-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                    Send Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sreejith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98470 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rider@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Interested In *
                      </label>
                      <select
                        value={formData.interestedIn}
                        onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                        className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 font-mono"
                      >
                        <option value="Buying a Motorcycle">Buying a Motorcycle</option>
                        <option value="Selling my Motorcycle">Selling my Motorcycle</option>
                        <option value="Request a Motorcycle Source">Request a Motorcycle Source</option>
                        <option value="Commissioning Restoration">Commissioning Restoration</option>
                        <option value="Bespoke Project Build">Bespoke Project Build</option>
                        <option value="Kerala Delivery Inquiry">Kerala Delivery Inquiry</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Message / Specifications *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you have in mind or which motorcycle you are inquiring about..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181A22] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-white hover:bg-neutral-200 text-[#0A0A0C] font-heading font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                  >
                    <span>SEND ENQUIRY →</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
