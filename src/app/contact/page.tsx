import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa";
import { BsGeoAlt, BsTelephone, BsClock } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Contact & Support – SwapX",
  description:
    "Need help? Chat with SwapX on WhatsApp for instant support. We're here for Bhubaneswar's e-rickshaw drivers.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-label mx-auto">We&apos;re Here to Help</div>
              <h1 className="section-title mt-4 !text-5xl md:!text-6xl">
                Contact <span className="gradient-text">SwapX</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Need help? Chat with us instantly on WhatsApp. We respond in minutes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main contact section */}
      <section className="section !pt-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* WhatsApp CTA - hero style */}
            <ScrollReveal>
              <div className="card bg-gradient-to-br from-[#25D366]/10 to-transparent border-[#25D366]/20 text-center mb-12 p-12">
                <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp className="text-[#25D366] text-4xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-4">
                  Chat with us on WhatsApp
                </h2>
                <p className="text-secondary max-w-md mx-auto mb-8">
                  Quick questions? Need help signing up? Want to know about plans?
                  Just message us — we reply fast.
                </p>
                <a
                  href="https://wa.me/916370736410?text=Hi%20SwapX!%20I%20need%20some%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg !py-5 !px-10 !bg-[#25D366] hover:!bg-[#20bd5a]"
                  id="contact-whatsapp-btn"
                >
                  <FaWhatsapp className="text-2xl" />
                  Open WhatsApp
                </a>
                <p className="text-xs text-muted mt-4">
                  Average response time: under 10 minutes
                </p>
              </div>
            </ScrollReveal>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollReveal delay={100}>
                <div className="card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <BsGeoAlt className="text-accent text-2xl" />
                  </div>
                  <h3 className="font-bold mb-2">Our Location</h3>
                  <p className="text-sm text-secondary">
                    Bhubaneswar, Odisha
                    <br />
                    Multiple stations across the city
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <BsTelephone className="text-accent text-2xl" />
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-sm text-secondary">
                    +91 6370736410
                    <br />
                    Call or WhatsApp
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <BsClock className="text-accent text-2xl" />
                  </div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-sm text-secondary">
                    6:00 AM – 10:00 PM
                    <br />
                    7 days a week
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
