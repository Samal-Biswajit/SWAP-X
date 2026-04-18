import Link from "next/link";
import { BsLightningChargeFill, BsClock, BsCurrencyRupee, BsShieldCheck, BsGeoAlt, BsArrowRight } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import BatteryAnimation from "@/components/BatteryAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#7b2ff7]/5 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="animate-fade-in-up text-center lg:text-left">
              <div className="section-label mb-6">
                <BsGeoAlt className="text-sm" />
                Serving Bhubaneswar
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
                Swap battery
                <br />
                in{" "}
                <span className="gradient-text">minutes.</span>
                <br />
                <span className="text-secondary text-4xl md:text-5xl lg:text-5xl font-bold">
                  No downtime.
                </span>
              </h1>

              <p className="text-lg text-secondary max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
                Stop wasting hours charging. Swap your e-rickshaw battery at our 
                station, get a fully charged one, and get back on the road — 
                all in under 5 minutes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/signup" className="btn-primary text-base !py-4 !px-8" id="hero-signup-btn">
                  Get Started
                  <HiOutlineArrowRight className="text-lg" />
                </Link>
                <Link href="/book-swap" className="btn-secondary text-base !py-4 !px-8" id="hero-book-btn">
                  Book a Swap
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mt-20 pt-8 border-t border-[rgba(255,255,255,0.1)]">
                <div className="flex items-center gap-3 text-sm text-secondary">
                  <BsLightningChargeFill className="text-accent" />
                  <span>Under 5 min swap</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-secondary">
                  <BsCurrencyRupee className="text-accent" />
                  <span>From ₹4500/mo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-secondary">
                  <BsShieldCheck className="text-accent" />
                  <span>Safe & tested</span>
                </div>
              </div>
            </div>

            {/* Right - Battery Animation */}
            <div className="hidden lg:flex items-center justify-center">
              <BatteryAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="section border-y border-border bg-[var(--sw-bg-secondary)]" id="stats">
        <div className="container mx-auto px-6">
          <StatsCounter />
        </div>
      </section>

      {/* ========== PROBLEM → SOLUTION ========== */}
      <section className="section" id="problem-solution">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <ScrollReveal className="w-full flex justify-center">
              <div className="text-center mb-16 w-full flex flex-col items-center">
                <div className="section-label mx-auto">Why SwapX?</div>
                <h2 className="section-title mt-4">
                  Charging is <span className="text-[var(--sw-error)]">killing</span> your income
                </h2>
                <p className="section-subtitle mx-auto">
                  Every hour spent charging is money lost. SwapX gives you a fully charged battery in minutes.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* Problem */}
              <ScrollReveal direction="left" delay={100}>
                <div className="card border-[var(--sw-error)]/20 bg-gradient-to-br from-[var(--sw-error)]/5 to-transparent">
                  <div className="text-3xl mb-4">😫</div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--sw-error)]">The Problem</h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--sw-error)] mt-1">✕</span>
                      <span>4-6 hours charging time daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--sw-error)] mt-1">✕</span>
                      <span>₹500-800 lost income every day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--sw-error)] mt-1">✕</span>
                      <span>Unreliable battery performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--sw-error)] mt-1">✕</span>
                      <span>High electricity bills at home</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Solution */}
              <ScrollReveal direction="right" delay={200}>
                <div className="card border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3 text-accent">The Solution</h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Swap in under 5 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Get back to earning immediately</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Quality-tested batteries every time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Affordable subscription plans</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS PREVIEW ========== */}
      <section className="section bg-[var(--sw-bg-secondary)] border-y border-border" id="how-it-works-preview">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <ScrollReveal className="w-full flex justify-center">
              <div className="text-center mb-16 w-full flex flex-col items-center">
                <div className="section-label mx-auto">Simple Process</div>
                <h2 className="section-title mt-4">
                  How it <span className="gradient-text">works</span>
                </h2>
                <p className="section-subtitle mx-auto">
                  Three simple steps. That&apos;s it.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              {[
                {
                  step: "01",
                  icon: <BsGeoAlt className="text-3xl text-accent" />,
                  title: "Visit Our Station",
                  description: "Come to our swap station in Bhubaneswar with your e-rickshaw. No appointment needed.",
                },
                {
                  step: "02",
                  icon: <BsLightningChargeFill className="text-3xl text-accent" />,
                  title: "Swap Battery",
                  description: "Our team swaps your drained battery with a fully charged one in under 5 minutes.",
                },
                {
                  step: "03",
                  icon: <BsArrowRight className="text-3xl text-accent" />,
                  title: "Continue Earning",
                  description: "Get back on the road instantly. No downtime, no waiting. More trips, more income.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 150}>
                  <div className="card text-center relative group h-full">
                    {/* Step number */}
                    <div className="text-7xl font-black text-accent/5 absolute top-4 right-6 group-hover:text-accent/10 transition-colors">
                      {item.step}
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{item.description}</p>

                    {/* Connector line for desktop */}
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-border z-10" />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex justify-center w-full">
            <ScrollReveal delay={500} className="w-full">
              <div className="text-center mt-12 w-full flex justify-center">
                <Link href="/how-it-works" className="btn-secondary" id="learn-more-btn">
                  Learn More
                  <HiOutlineArrowRight />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section" id="testimonials">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <ScrollReveal className="w-full flex justify-center">
              <div className="text-center mb-16 w-full flex flex-col items-center">
                <div className="section-label mx-auto">Driver Stories</div>
                <h2 className="section-title mt-4">
                  Trusted by <span className="gradient-text">drivers</span>
                </h2>
                <p className="section-subtitle mx-auto">
                  Hear from e-rickshaw drivers who switched to SwapX.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center w-full">
            <ScrollReveal delay={200} className="w-full">
              <TestimonialCarousel />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section bg-[var(--sw-bg-secondary)] border-t border-border relative overflow-hidden" id="cta">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-center w-full">
            <ScrollReveal className="w-full px-4 flex justify-center">
              <div className="text-center w-full max-w-2xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Ready to stop waiting?
                  <br />
                  <span className="gradient-text">Start swapping today.</span>
                </h2>
                <p className="text-lg text-secondary mb-10">
                  Join hundreds of drivers who switched to SwapX and increased their daily earnings.
                </p>

                <div className="flex flex-wrap justify-center w-full gap-4">
                  <Link href="/signup" className="btn-primary text-lg !py-5 !px-10" id="cta-signup-btn">
                    Sign Up Now
                    <HiOutlineArrowRight className="text-xl" />
                  </Link>
                  <a
                    href="https://wa.me/916370736410?text=Hi%20SwapX!%20I%20want%20to%20know%20more%20about%20your%20plans."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-lg !py-5 !px-10"
                    id="cta-whatsapp-btn"
                  >
                    <FaWhatsapp className="text-xl text-[#25D366]" />
                    Chat on WhatsApp
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
