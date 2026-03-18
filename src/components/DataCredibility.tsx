import AnimateOnScroll from "./AnimateOnScroll";

export default function DataCredibility() {
  return (
    <section className="py-16 lg:py-20 bg-ivory-warm border-t border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage-muted flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-lg font-semibold mb-3">
                  Our Commitment to Transparency
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  All service information, pricing context, and educational
                  content on this site is based on real-world experience,
                  industry-standard practices, and consultations with certified
                  locticians. We believe that informed clients make the best
                  decisions for their hair journey.
                </p>
                <p className="text-charcoal/40 text-xs leading-relaxed">
                  Individual results, timelines, and maintenance needs vary
                  based on hair texture, density, length, and lifestyle factors.
                  A personalized consultation is always recommended before
                  beginning any loc service.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-full bg-sage-muted flex items-center justify-center">
                  <span className="text-sage font-[family-name:var(--font-heading)] text-xl font-bold">
                    5+
                  </span>
                </div>
                <p className="text-charcoal/50 text-[11px] tracking-wide leading-tight">
                  Years of<br />Experience
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
