import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Pricing & Investment | Locs By Steph B",
  description:
    "Explore our transparent pricing, booking fees, and interactive loc cost calculator. Invest in the long-term health and beauty of your hair in Inglewood, CA.",
  keywords: [
    "locs pricing",
    "loctician cost",
    "sisterlocks price",
    "microlocs investment",
    "loc calculator",
    "salon fees Inglewood",
  ],
  openGraph: {
    title: "Transparent Pricing & Investment | Locs By Steph B",
    description:
      "Understand the investment behind your hair journey. View our pricing calculator, consultation fees, and deposit requirements.",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sage-light/50 text-xs tracking-[0.15em] uppercase hover:text-sage-light transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={50}>
            <p className="text-sage-light/80 text-[13px] tracking-[0.2em] uppercase font-medium mb-5 font-[family-name:var(--font-accent)]">
              Transparent Costs
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Pricing &amp; <span className="text-sage-light">Investment</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-ivory/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Great locs are a long-term investment in yourself. We believe in absolute transparency so you can plan with confidence and choose the path that fits your lifestyle.
            </p>
          </AnimateOnScroll>
        </div>
        
        {/* Clean edge */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ CALCULATOR SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <AnimateOnScroll>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Interactive Pricing Calculator
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <p className="text-charcoal/60 text-base leading-relaxed">
                Use our interactive tool below to estimate the cost of your desired loc services based on your hair length, density, and preferred method. Note that these are dynamic estimates; a formal quote will be provided during your consultation.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={100}>
            <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-charcoal/5">
              {/* Canva iframe wrapper */}
              <div className="relative w-full h-[1100px] sm:h-[1200px] md:h-[1300px] lg:h-[1400px]">
                <iframe
                  src="https://b8z01wxyny5232z7.canvacode.com/codelet/eyJhbGciOiJIUzI1NiJ9.eyJjIjoiYjh6MDF3eHlueTUyMzJ6NyIsImV4cCI6MTc3Mzk0ODIyOSwiZCI6IkRBR2trclRwOE04In0.Oy_ZzBIThSm6NPqSakhps3gJTBrg2mgF184O9dsUqB8/index.html"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  title="Locs By Steph B Pricing Calculator"
                ></iframe>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ STANDARD FEES & POLICIES ═══ */}
      <section className="py-20 lg:py-24 bg-white border-t border-charcoal/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)]">
                The Details
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight">
                Standard Fees &amp; Deposits
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Consultations */}
            <AnimateOnScroll delay={100}>
              <div className="bg-sage-muted/30 p-8 lg:p-10 rounded-3xl h-full border border-sage/10 hover:border-sage/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Consultation Fee</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  A non-refundable <strong>$50 fee</strong> is required for all consultations (both transfer and new establishment consults).
                </p>
                <p className="text-sm text-charcoal/60">
                  This covers a thorough hair &amp; scalp analysis, test locs, and an actionable, customized haircare plan.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Establishment Deposit */}
            <AnimateOnScroll delay={150}>
              <div className="bg-sage-muted/30 p-8 lg:p-10 rounded-3xl h-full border border-sage/10 hover:border-sage/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Establishment Deposit</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  A <strong>$200 deposit</strong> is required to reserve the dates for a Microlocs or Sisterlocks multi-day installation.
                </p>
                <div className="text-sm text-sage font-semibold bg-white px-3 py-2 rounded-lg inline-block shadow-sm">
                  Required: All establishment payments must be made via Zelle.
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ POLICY HIGHLIGHTS ═══ */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimateOnScroll delay={50}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-ivory font-semibold text-lg mb-3">Standard Booking Fees</h3>
                <p className="text-ivory/60 text-sm leading-relaxed mb-3">
                  A non-refundable booking fee of <strong>20%–50%</strong> is required to confirm standard hair appointments. 
                </p>
                <p className="text-ivory/50 text-xs italic">
                  Fee is deducted from total cost. Card on file required for all services.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-ivory font-semibold text-lg mb-3">Cancellations</h3>
                <p className="text-ivory/60 text-sm leading-relaxed mb-3">
                  <strong>48-hour notice</strong> required. Less than 48 hours incurs a charge of 50% of the cost.
                </p>
                <p className="text-red-400 text-xs font-semibold">
                  Same-day no-shows incur 100% of the appointment cost.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-ivory font-semibold text-lg mb-3">After-Hours Service</h3>
                <p className="text-ivory/60 text-sm leading-relaxed mb-3">
                  Services scheduled outside regular hours (excluding multi-day installations) are subject to a premium:
                </p>
                <ul className="text-ivory/50 text-xs space-y-1">
                  <li>• $25/hour up to 2 hours</li>
                  <li>• $50 flat rate beyond 2 hours</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.06),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-5 font-[family-name:var(--font-accent)]">
              Clear on Pricing?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Book Your Appointment Today
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Transform your look and step into hair freedom. Reserve your spot with Locs By Steph B.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Book Now
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
