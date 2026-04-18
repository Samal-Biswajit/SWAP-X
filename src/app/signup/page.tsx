"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { BsPersonPlus, BsCheckCircleFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

interface SignupData {
  name: string;
  phone: string;
  vehicleType: string;
  area: string;
  dailyUsage: string;
  preferredStation: string;
}

export default function Signup() {
  const [form, setForm] = useState<SignupData>({
    name: "",
    phone: "",
    vehicleType: "",
    area: "",
    dailyUsage: "",
    preferredStation: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/signup", {
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
              <BsCheckCircleFill className="text-accent text-4xl" />
            </div>
            <h1 className="text-3xl font-black mb-4">
              Welcome to SwapX! 🎉
            </h1>
            <p className="text-secondary text-lg mb-4">
              Your registration is received, <span className="text-accent font-semibold">{form.name}</span>.
            </p>
            <p className="text-secondary mb-8">
              Our team will reach out to you on WhatsApp to get you started. You can also message us directly:
            </p>
            <a
              href={`https://wa.me/916370736410?text=Hi%20SwapX!%20I%20just%20signed%20up.%20My%20name%20is%20${encodeURIComponent(form.name)}.%20Phone:%20${form.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg !py-5 !px-10"
              id="signup-success-whatsapp"
            >
              <FaWhatsapp className="text-2xl" />
              Start Chat on WhatsApp
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
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-label mx-auto">
                <BsPersonPlus />
                Join SwapX
              </div>
              <h1 className="section-title mt-4 !text-5xl md:!text-6xl">
                Driver <span className="gradient-text">Sign Up</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Fill in your details and start swapping. We&apos;ll set you up in no time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="section !pt-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="card space-y-6" id="driver-signup-form">
                <h2 className="text-xl font-bold mb-2">Your Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Raju Sahoo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="signup-phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="signup-phone"
                      className="form-input"
                      placeholder="+91 6370736410"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      pattern="[0-9+\s]{10,15}"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="vehicleType">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicleType"
                    className="form-select"
                    value={form.vehicleType}
                    onChange={(e) =>
                      setForm({ ...form, vehicleType: e.target.value })
                    }
                    required
                  >
                    <option value="">Select vehicle type</option>
                    <option value="E-Rickshaw (Passenger)">
                      E-Rickshaw (Passenger)
                    </option>
                    <option value="E-Rickshaw (Cargo)">
                      E-Rickshaw (Cargo)
                    </option>
                    <option value="E-Auto">E-Auto</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="area">
                      Area of Operation *
                    </label>
                    <input
                      type="text"
                      id="area"
                      className="form-input"
                      placeholder="Nayapalli, Patia..."
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="dailyUsage">
                      Daily Usage (km) *
                    </label>
                    <select
                      id="dailyUsage"
                      className="form-select"
                      value={form.dailyUsage}
                      onChange={(e) =>
                        setForm({ ...form, dailyUsage: e.target.value })
                      }
                      required
                    >
                      <option value="">Select range</option>
                      <option value="20-40 km">20-40 km</option>
                      <option value="40-60 km">40-60 km</option>
                      <option value="60-80 km">60-80 km</option>
                      <option value="80+ km">80+ km</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="preferredStation">
                    Preferred Swap Station *
                  </label>
                  <select
                    id="preferredStation"
                    className="form-select"
                    value={form.preferredStation}
                    onChange={(e) =>
                      setForm({ ...form, preferredStation: e.target.value })
                    }
                    required
                  >
                    <option value="">Select station</option>
                    <option value="Nayapalli Station">Nayapalli Station</option>
                    <option value="Patia Station">Patia Station</option>
                    <option value="Rasulgarh Station">Rasulgarh Station</option>
                    <option value="Mancheswar Station">Mancheswar Station</option>
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
                  id="submit-signup-btn"
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Sign Up as Driver
                      <HiOutlineArrowRight />
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>

            {/* Side info */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="card bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
                  <h3 className="font-bold mb-4 text-accent">What you get</h3>
                  <ul className="space-y-3">
                    {[
                      "Instant access to swap stations",
                      "Affordable monthly plans",
                      "Quality-tested batteries",
                      "Priority WhatsApp support",
                      "Zero setup cost",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                        <BsCheckCircleFill className="text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h3 className="font-bold mb-3">Need help signing up?</h3>
                  <p className="text-sm text-secondary mb-4">
                    Chat with us on WhatsApp. We&apos;ll guide you through everything.
                  </p>
                  <a
                    href="https://wa.me/916370736410?text=Hi%20SwapX!%20I%20need%20help%20signing%20up."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center text-sm"
                    id="signup-help-whatsapp"
                  >
                    <FaWhatsapp className="text-[#25D366]" />
                    Chat with us
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
