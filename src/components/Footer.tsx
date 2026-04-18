import Link from "next/link";
import { BsBatteryCharging } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--sw-bg-secondary)]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <BsBatteryCharging className="text-accent text-xl" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Swap<span className="text-accent">X</span>
              </span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Fast battery swapping for e-rickshaw drivers in Bhubaneswar.
              No downtime. No waiting. Just swap and go.
            </p>
            <a
              href="https://wa.me/916370736410?text=Hi%20SwapX!%20I'm%20interested%20in%20learning%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
            >
              <FaWhatsapp className="text-lg" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Pricing", href: "/pricing" },
                { label: "Book a Swap", href: "/book-swap" },
                { label: "Sign Up", href: "/signup" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
              Info
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-secondary">
                <span className="text-accent font-semibold">Location:</span> Bhubaneswar, Odisha
              </li>
              <li className="text-sm text-secondary">
                <span className="text-accent font-semibold">Hours:</span> 6 AM – 10 PM Daily
              </li>
              <li className="text-sm text-secondary">
                <span className="text-accent font-semibold">Support:</span> +91 6370736410
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} SwapX. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            ⚡ Powering Bhubaneswar&apos;s E-Rickshaw Revolution
          </p>
        </div>
      </div>
    </footer>
  );
}
