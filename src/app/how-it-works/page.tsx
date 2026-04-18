import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  BsGeoAlt,
  BsLightningChargeFill,
  BsArrowRight,
  BsShieldCheck,
  BsClock,
  BsPeople,
  BsBatteryFull,
} from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "How It Works – SwapX Battery Swapping",
  description:
    "Learn how SwapX battery swapping works. Visit our station, swap in under 5 minutes, and continue earning. Simple, fast, reliable.",
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <BsGeoAlt className="text-4xl text-accent" />,
      title: "Visit Our Station",
      description:
        "Drive your e-rickshaw to our swap station in Bhubaneswar. We're conveniently located in the heart of the city. No appointment needed — just walk in during operating hours (6 AM – 10 PM).",
      details: [
        "Walk-in, no booking required",
        "Multiple station locations planned",
        "Easy to find, roadside access",
      ],
    },
    {
      number: "02",
      icon: <BsBatteryFull className="text-4xl text-accent" />,
      title: "Swap Your Battery",
      description:
        "Our trained crew removes your drained battery and installs a fully charged, quality-tested replacement. The entire process takes under 5 minutes.",
      details: [
        "Professional technicians",
        "Quality-tested batteries",
        "Complete swap in under 5 minutes",
      ],
    },
    {
      number: "03",
      icon: <BsArrowRight className="text-4xl text-accent" />,
      title: "Get Back on the Road",
      description:
        "With a fresh battery, you're ready to earn again. No downtime, no waiting, no charging worries. Just drive and earn.",
      details: [
        "Full range guaranteed",
        "Zero downtime",
        "Earn more, worry less",
      ],
    },
  ];

  const benefits = [
    {
      icon: <BsClock className="text-2xl text-accent" />,
      title: "Save 5+ Hours Daily",
      description: "No more sitting around waiting for your battery to charge.",
    },
    {
      icon: <BsLightningChargeFill className="text-2xl text-accent" />,
      title: "Always Fully Charged",
      description: "Every swapped battery is tested and charged to 100%.",
    },
    {
      icon: <BsShieldCheck className="text-2xl text-accent" />,
      title: "Safe & Reliable",
      description: "All batteries undergo rigorous quality and safety testing.",
    },
    {
      icon: <BsPeople className="text-2xl text-accent" />,
      title: "Expert Support",
      description: "Our trained staff handles everything. You just drive.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-label mx-auto">Simple Process</div>
              <h1 className="section-title mt-4 !text-5xl md:!text-6xl">
                How <span className="gradient-text">SwapX</span> Works
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Three simple steps to keep your e-rickshaw running all day. No complexity, no hassle.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section !pt-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start">
                  {/* Step number */}
                  <div className="flex md:flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-6xl font-black text-accent/10">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="card">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-secondary leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-sm text-secondary">
                          <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section bg-[var(--sw-bg-secondary)] border-y border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label mx-auto">Advantages</div>
              <h2 className="section-title mt-4">
                Why drivers <span className="gradient-text">love</span> SwapX
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div className="card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    {b.icon}
                  </div>
                  <h4 className="font-bold mb-2">{b.title}</h4>
                  <p className="text-sm text-secondary">{b.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ready to start?
              </h2>
              <p className="text-secondary mb-8">
                Sign up today and experience the fastest battery swap in Bhubaneswar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/signup" className="btn-primary" id="hiw-signup-btn">
                  Sign Up Now
                  <HiOutlineArrowRight />
                </Link>
                <Link href="/pricing" className="btn-secondary" id="hiw-pricing-btn">
                  View Pricing
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
