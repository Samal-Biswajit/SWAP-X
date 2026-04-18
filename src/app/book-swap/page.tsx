"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

interface FormData {
  phone: string;
  station: string;
  preferredTime: string;
  batteryType: string;
}

export default function BookSwap() {
  const [form, setForm] = useState<FormData>({
    phone: "",
    station: "",
    preferredTime: "",
    batteryType: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/book-swap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <BsLightningChargeFill className="text-accent text-4xl" />
            </div>
            <h1 className="text-3xl font-black mb-4">Booking Received! ⚡</h1>
            <p className="text-secondary text-lg mb-8">
              We&apos;ll confirm your swap via WhatsApp shortly. Keep your phone handy!
            </p>
            <div className="card bg-accent/5 border-accent/20 mb-6">
              <p className="text-sm text-secondary">
                <span className="font-bold text-accent">Preferred time:</span>{" "}
                {form.preferredTime || "As soon as possible"}
              </p>
              <p className="text-sm text-secondary mt-2">
                <span className="font-bold text-accent">Station:</span>{" "}
                {form.station}
              </p>
            </div>
            <a
              href={`https://wa.me/919876543210?text=Hi%20SwapX!%20I%20just%20booked%20a%20swap.%20Phone:%20${form.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="booking-confirm-whatsapp"
            >
              <FaWhatsapp className="text-xl" />
              Confirm on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-label mx-auto">
                <BsLightningChargeFill />
                Quick Booking
              </div>
              <h1 className="section-title mt-4 !text-5xl md:!text-6xl">
                Book a <span className="gradient-text">Swap</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Submit your swap request and we&apos;ll confirm via WhatsApp. No real-time booking — just a simple request.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="section !pt-8">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="card space-y-6" id="book-swap-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    pattern="[0-9+\s]{10,15}"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="station">
                    Station / Location *
                  </label>
                  <select
                    id="station"
                    className="form-select"
                    value={form.station}
                    onChange={(e) => setForm({ ...form, station: e.target.value })}
                    required
                  >
                    <option value="">Select a station</option>
                    <option value="Nayapalli Station">Nayapalli Station</option>
                    <option value="Patia Station">Patia Station</option>
                    <option value="Rasulgarh Station">Rasulgarh Station</option>
                    <option value="Mancheswar Station">Mancheswar Station</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="preferredTime">
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    className="form-input"
                    placeholder="e.g. Tomorrow 8 AM, Today evening"
                    value={form.preferredTime}
                    onChange={(e) =>
                      setForm({ ...form, preferredTime: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="batteryType">
                    Battery Type *
                  </label>
                  <select
                    id="batteryType"
                    className="form-select"
                    value={form.batteryType}
                    onChange={(e) =>
                      setForm({ ...form, batteryType: e.target.value })
                    }
                    required
                  >
                    <option value="">Select battery type</option>
                    <option value="48V Lead Acid">48V Lead Acid</option>
                    <option value="60V Lead Acid">60V Lead Acid</option>
                    <option value="48V Lithium">48V Lithium</option>
                    <option value="60V Lithium">60V Lithium</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                {error && (
                  <div className="text-sm text-[var(--sw-error)] bg-[var(--sw-error)]/10 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  id="submit-booking-btn"
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Booking Request
                      <HiOutlineArrowRight />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted">
                  We&apos;ll confirm your swap via WhatsApp within 30 minutes.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
