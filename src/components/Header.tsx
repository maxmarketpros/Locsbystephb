"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, HEADER_LINKS } from "@/data/siteContent";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="bg-charcoal text-ivory text-center py-2 px-4">
          <p className="text-xs tracking-[0.15em] font-[family-name:var(--font-accent)]">
            {SITE.tagline} &nbsp;·&nbsp;{" "}
            <a
              href={SITE.phoneHref}
              className="underline underline-offset-2 hover:text-sage-light transition-colors"
            >
              {SITE.phone}
            </a>
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-50" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Locs By Steph B"
              width={140}
              height={56}
              className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              } ${isOpen ? "brightness-0" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden xl:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {HEADER_LINKS.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-[13px] tracking-[0.04em] font-medium transition-colors duration-200 rounded-lg hover:bg-charcoal/5 ${
                      isScrolled
                        ? "text-charcoal"
                        : "text-ivory hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`px-3 py-2 text-[13px] tracking-[0.04em] font-medium transition-colors duration-200 rounded-lg hover:bg-charcoal/5 flex items-center gap-1.5 ${
                        isScrolled
                          ? "text-charcoal"
                          : "text-ivory hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-xl py-3 min-w-[220px] border border-charcoal/5 flex flex-col">
                        {item.subLinks?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="px-5 py-2.5 text-[14px] text-charcoal/80 hover:text-charcoal hover:bg-sage-muted transition-colors text-left font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href={SITE.phoneHref}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-[0.06em] transition-all duration-300 border ${
                isScrolled
                  ? "border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40"
                  : "border-ivory/20 text-ivory hover:bg-ivory/10 hover:border-ivory/40"
              }`}
            >
              <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {SITE.phone}
            </a>

            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-charcoal text-ivory hover:bg-navy"
                  : "bg-ivory text-charcoal hover:bg-white"
              }`}
            >
              Start Your Journey
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-1 bg-charcoal"
                    : isScrolled
                    ? "bg-charcoal"
                    : "bg-ivory"
                }`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 -translate-y-1 bg-charcoal"
                    : isScrolled
                    ? "bg-charcoal"
                    : "bg-ivory"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-ivory z-40 transition-all duration-500 xl:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-8 py-24">
          <nav className="flex flex-col items-center gap-1 w-full max-w-sm">
            {HEADER_LINKS.map((item, i) => (
              <div key={item.label} className="w-full text-center" style={{ transitionDelay: `${i * 50}ms` }}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-charcoal text-lg font-[family-name:var(--font-heading)] tracking-wide py-3 px-4 w-full rounded-xl hover:bg-sage-muted transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <details className="w-full group">
                    <summary className="list-none cursor-pointer flex items-center justify-center gap-2 text-charcoal text-lg font-[family-name:var(--font-heading)] tracking-wide py-3 px-4 w-full rounded-xl hover:bg-sage-muted transition-colors">
                      {item.label}
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="py-2 flex flex-col gap-1 bg-sage-muted/50 rounded-xl mt-1 mx-4">
                      {item.subLinks?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-charcoal/80 text-base py-2.5 px-4 hover:text-charcoal transition-colors hover:bg-sage/10 rounded-lg"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3.5 bg-charcoal text-ivory rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-navy transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </a>
            <a
              href={SITE.phoneHref}
              className="text-charcoal/60 text-sm tracking-wide hover:text-charcoal transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
