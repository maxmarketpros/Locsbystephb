import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

interface StarterPageHeroProps {
  title: string;
  description: string;
}

export default function StarterPageHero({
  title,
  description,
}: StarterPageHeroProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,177,138,0.06),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sage-light/60 text-xs tracking-[0.15em] uppercase hover:text-sage-light transition-colors mb-8"
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
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Home
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-ivory/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-12 lg:p-16 shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full bg-sage-muted flex items-center justify-center mb-8">
                <svg
                  className="w-8 h-8 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </div>

              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl font-semibold mb-4">
                Content Coming Soon
              </h2>

              <p className="text-charcoal/60 text-base leading-relaxed mb-8">
                We&apos;re crafting this page with the same care and attention we
                bring to every loc installation. Check back soon for the full
                experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-ivory rounded-full text-sm font-semibold tracking-[0.06em] uppercase hover:bg-navy transition-colors"
                >
                  Book a Consultation
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/20 text-charcoal rounded-full text-sm font-semibold tracking-[0.06em] uppercase hover:bg-charcoal/5 transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
