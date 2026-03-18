import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,177,138,0.08),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-sage/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-navy-light/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <p className="text-sage-light text-xs tracking-[0.25em] uppercase font-semibold mb-6 font-[family-name:var(--font-accent)] text-base">
            Begin Your Journey
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
            Book Your Loc Consultation in{" "}
            <span className="text-sage-light">Inglewood, CA</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-ivory/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Your loc journey starts with a conversation. Book a consultation to
            discuss your hair goals, explore your options, and take the first
            step toward a style that lasts a lifetime.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Schedule a Consultation
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 text-ivory/70 hover:text-ivory transition-colors text-sm tracking-wide"
            >
              <svg
                className="w-5 h-5"
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
              Call {SITE.phone}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
