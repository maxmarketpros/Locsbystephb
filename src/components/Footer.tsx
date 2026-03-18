import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Locs By Steph B"
              width={180}
              height={72}
              className="h-14 w-auto brightness-0 invert mb-6"
            />
            <p className="text-ivory/70 text-sm leading-relaxed max-w-md mb-6">
              Your hair journey becomes a healing journey. We specialize in
              Microlocs, Sisterlocks, starter locs, retightening, interlocking,
              loc repair, and loc detox—rooted in care and elevated by craft.
            </p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-sage-light hover:text-sage transition-colors text-sm tracking-wide"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {SITE.phone}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ivory/70 text-sm hover:text-sage-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Information
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.slice(5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ivory/70 text-sm hover:text-sage-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/privacy-policy"
                className="text-ivory/70 text-sm hover:text-sage-light transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>

            <div className="mt-8">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 bg-sage text-charcoal rounded-full text-xs font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Locs By Steph B LLC. All rights
            reserved.
          </p>
          <p className="text-ivory/30 text-xs font-[family-name:var(--font-accent)] italic tracking-wide">
            Rooted in Care. Elevated by Craft.
          </p>
        </div>
      </div>
    </footer>
  );
}
