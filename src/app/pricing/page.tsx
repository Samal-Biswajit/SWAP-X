import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Pricing – SwapX Battery Swap Plans",
  description:
    "Transparent pricing for SwapX battery swapping. Monthly subscriptions from ₹4500/month. Per-swap pricing from ₹120. No hidden costs.",
};

const plans = [
  {
    name: "Pay Per Swap",
    tagline: "Flexibility first",
    price: "₹120",
    priceLabel: "per swap",
    highlight: false,
    features: [
      "No commitment required",
      "Pay only when you swap",
      "Quality-tested batteries",
      "WhatsApp support",
      "Ideal for occasional use",
    ],
    cta: "Book a Swap",
    href: "/book-swap",
  },
  {
    name: "Basic Plan",
    tagline: "Most popular",
    price: "₹4,500",
    priceLabel: "/month",
    highlight: true,
    badge: "POPULAR",
    features: [
      "Up to 2 swaps per day",
      "Priority service at station",
      "Quality-tested batteries",
      "WhatsApp + phone support",
      "No per-swap charges",
      "Save ₹2,000+/month",
    ],
    cta: "Sign Up Now",
    href: "/signup",
  },
  {
    name: "Pro Plan",
    tagline: "Maximum earnings",
    price: "₹5,500",
    priceLabel: "/month",
    highlight: false,
    features: [
      "Unlimited swaps per day",
      "First-priority service",
      "Premium tested batteries",
      "24/7 WhatsApp support",
      "Free battery health check",
      "Save ₹4,000+/month",
    ],
    cta: "Sign Up Now",
    href: "/signup",
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-label mx-auto">Clear & Transparent</div>
              <h1 className="section-title mt-4 !text-5xl md:!text-6xl">
                Simple <span className="gradient-text">Pricing</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                No hidden fees. No surprises. Choose the plan that fits your driving needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Plans */}
      <section className="section !pt-4 !pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`card relative h-full flex flex-col ${
                    plan.highlight
                      ? "border-accent/30 bg-gradient-to-b from-accent/5 to-transparent"
                      : ""
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="badge badge-green text-xs px-4 py-1.5">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-sm text-muted uppercase tracking-wider font-bold">
                      {plan.tagline}
                    </p>
                    <h3 className="text-xl font-bold mt-1">{plan.name}</h3>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-secondary text-sm ml-1">
                      {plan.priceLabel}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <BsCheckCircleFill className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`w-full text-center ${
                      plan.highlight ? "btn-primary" : "btn-secondary"
                    }`}
                    id={`pricing-${plan.name.toLowerCase().replace(/\s/g, "-")}-btn`}
                  >
                    {plan.cta}
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section className="section bg-[var(--sw-bg-secondary)] border-y border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Why SwapX is <span className="text-accent">smarter</span> than charging
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card border-[var(--sw-error)]/20">
                  <h4 className="font-bold text-[var(--sw-error)] mb-4">
                    ❌ Traditional Charging
                  </h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li>• 4-6 hours charging time</li>
                    <li>• ₹100-150 electricity cost per charge</li>
                    <li>• ₹3,000-4,500/month on electricity</li>
                    <li>• 5-6 hours of lost earning time</li>
                    <li>• Battery damage from overcharging</li>
                  </ul>
                  <p className="mt-4 text-sm font-bold text-[var(--sw-error)]">
                    Total cost: ₹8,000+/month
                  </p>
                </div>

                <div className="card border-accent/20">
                  <h4 className="font-bold text-accent mb-4">
                    ✅ SwapX Subscription
                  </h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li>• 5 minute swap time</li>
                    <li>• ₹0 electricity cost</li>
                    <li>• ₹4,500-5,500/month flat</li>
                    <li>• Zero downtime for earning</li>
                    <li>• Professionally maintained batteries</li>
                  </ul>
                  <p className="mt-4 text-sm font-bold text-accent">
                    Total cost: ₹4,500/month + more earnings
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-title">Common Questions</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Are there any hidden charges?",
                a: "Absolutely not. The price you see is the price you pay. No registration fees, no joining fees, no surprises.",
              },
              {
                q: "Can I switch plans anytime?",
                a: "Yes! Upgrade or downgrade your plan anytime. Changes take effect from the next billing cycle.",
              },
              {
                q: "What battery types do you support?",
                a: "We support all major e-rickshaw battery types including 48V and 60V configurations. Contact us for specifics.",
              },
              {
                q: "How do I pay?",
                a: "We accept UPI, cash, and bank transfer for monthly subscriptions. Per-swap payments can be made via UPI or cash at the station.",
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card">
                  <h4 className="font-bold mb-2">{faq.q}</h4>
                  <p className="text-sm text-secondary">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--sw-bg-secondary)] border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black mb-4">Questions? Let&apos;s talk.</h2>
            <p className="text-secondary mb-8">
              Chat with us on WhatsApp for instant support.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20SwapX!%20I%20want%20to%20know%20about%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
              id="pricing-whatsapp-btn"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
