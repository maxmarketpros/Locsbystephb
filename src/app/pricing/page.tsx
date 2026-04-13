import type { Metadata } from "next";
import Link from "next/link";
import { SITE, LOC_EXTENSIONS_DISCLAIMER } from "@/data/siteContent";
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
      "Understand the investment behind your hair journey. View our pricing calculator, consultation fees, and non-refundable fee requirements.",
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

      {/* ═══ VALUE STORY SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)]">
                Why It Matters
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-5">
                More Than a Hairstyle &mdash; It&apos;s a <span className="text-sage">Lifestyle Upgrade</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed">
                Locs are one of the smartest investments you can make in your daily life. Here&apos;s what changes when you commit to your loc journey.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Time Savings */}
            <AnimateOnScroll delay={100}>
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-charcoal/5 hover:border-sage/30 transition-colors shadow-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                  Reclaim Your Mornings
                </h3>
                <p className="text-charcoal/65 leading-relaxed">
                  Imagine 5&ndash;10 minute mornings instead of 45+ minutes of detangling, washing, drying, and styling. Locs give you back the hours you&apos;ve been losing to your hair.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Cost Savings */}
            <AnimateOnScroll delay={200}>
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-charcoal/5 hover:border-sage/30 transition-colors shadow-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                  Save More Over Time
                </h3>
                <p className="text-charcoal/65 leading-relaxed">
                  When you factor in salon visits, products, heat tools, and the hours lost to styling, locs can save you thousands over time. Your investment pays for itself.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Lifestyle Freedom */}
            <AnimateOnScroll delay={300}>
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-charcoal/5 hover:border-sage/30 transition-colors shadow-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                  Live Without Limits
                </h3>
                <p className="text-charcoal/65 leading-relaxed">
                  Exercise, swim, travel &mdash; without planning your life around your hair. Locs free you to move through the world on your own terms.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOUR INVESTMENT COVERS ═══ */}
      <section className="py-20 lg:py-24 bg-white border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)]">
                Full-Service Care
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-5">
                What Your <span className="text-sage">Investment</span> Covers
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed">
                Your pricing covers far more than just the initial installation. We support your entire loc journey from day one through every stage of growth and maintenance.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Installation Services */}
            <AnimateOnScroll delay={100}>
              <div className="bg-sage-muted/20 p-7 rounded-2xl border border-sage/10 hover:border-sage/25 transition-colors h-full">
                <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-lg font-bold mb-2">Installation</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Full installation services including Sisterlocks&#8482;, Microlocs, and Traditional loc methods tailored to your hair.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Maintenance & Retie */}
            <AnimateOnScroll delay={200}>
              <div className="bg-sage-muted/20 p-7 rounded-2xl border border-sage/10 hover:border-sage/25 transition-colors h-full">
                <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-lg font-bold mb-2">Maintenance &amp; Retie</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Ongoing retightening, interlocking, and maintenance sessions to keep your locs healthy and polished as they mature.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Repair & Restoration */}
            <AnimateOnScroll delay={300}>
              <div className="bg-sage-muted/20 p-7 rounded-2xl border border-sage/10 hover:border-sage/25 transition-colors h-full">
                <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.12 2.12 0 113-3l5.1 5.1m0 0l2.83 2.83m-2.83-2.83l5.1-5.1a2.12 2.12 0 113 3l-5.1 5.1m-2.83-2.83L8.59 18a2.12 2.12 0 01-3-3l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-lg font-bold mb-2">Repair &amp; Restoration</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Expert loc repair for thinning, breakage, or damage. Restore strength and structure to locs that need a second chance.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Wash & Care */}
            <AnimateOnScroll delay={400}>
              <div className="bg-sage-muted/20 p-7 rounded-2xl border border-sage/10 hover:border-sage/25 transition-colors h-full">
                <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-lg font-bold mb-2">Wash &amp; Care</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Professional wash, detox, and deep-cleanse services to remove buildup and keep your scalp and locs refreshed.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
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
                  src="/calculator.html"
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
                Standard Fees &amp; Non-Refundable Fees
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

            {/* Establishment Non-Refundable Fee */}
            <AnimateOnScroll delay={150}>
              <div className="bg-sage-muted/30 p-8 lg:p-10 rounded-3xl h-full border border-sage/10 hover:border-sage/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">Establishment Non-Refundable Fee</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  A <strong>$200 non-refundable fee</strong> is required to reserve the dates for a Microlocs or Sisterlocks&#8482; multi-day installation.
                </p>
                <div className="text-sm text-sage font-semibold bg-white px-3 py-2 rounded-lg inline-block shadow-sm">
                  Required: All establishment payments must be made via Zelle.
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ LOC EXTENSIONS DISCLAIMER ═══ */}
      <section className="py-14 lg:py-16 bg-ivory border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-charcoal/[0.03] border border-charcoal/10 rounded-2xl p-8 lg:p-10 flex gap-6 items-start">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-charcoal/10 items-center justify-center shrink-0 mt-1">
                <svg className="w-6 h-6 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
                  {LOC_EXTENSIONS_DISCLAIMER.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed">
                  {LOC_EXTENSIONS_DISCLAIMER.text}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
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
                  A non-refundable booking fee of <strong>20%&ndash;50%</strong> is required to confirm standard hair appointments.
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
                  <li>&bull; $25/hour up to 2 hours</li>
                  <li>&bull; $50 flat rate beyond 2 hours</li>
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
              Reclaim Your Mornings
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Step into hair freedom and get back the time you deserve. Reserve your spot with {SITE.name} and start your loc journey today.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Start Your Loc Journey
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
