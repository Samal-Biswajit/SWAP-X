"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { BsBatteryCharging } from "react-icons/bs";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a Swap", href: "/book-swap" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" id="navbar-logo">
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <BsBatteryCharging className="text-accent text-xl" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Swap<span className="text-accent">X</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.href.replace("/", "")}`}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/signup" className="btn-primary text-sm !py-2.5 !px-6" id="nav-signup-btn">
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-secondary hover:text-accent transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-secondary hover:text-accent transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
