import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Transfer Clients | Locs By Steph B — Inglewood, CA",
  description:
    "Information for clients transitioning from another loctician to Locs By Steph B. Learn about our required transfer consultation and retightening process in Inglewood, CA.",
  keywords: [
    "loc transfer client",
    "transfer loctician",
    "loc retightening Inglewood",
    "microlocs transfer",
    "sisterlocks transfer consultant",
    "Inglewood CA loctician",
  ],
};

export default function TransferClientsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />

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
              Welcome to the Family
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Transfer Clients in <br className="hidden sm:block" />
              <span className="text-sage-light">Inglewood, CA</span>
            </h1>
          </AnimateOnScroll>

           <AnimateOnScroll delay={200}>
            <p className="text-ivory/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Transitioning from another loctician? Follow our 2-step transfer process focused on assessing the current health and condition of your locs to ensure we can provide the best ongoing care.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={300}>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Book Transfer Consultation
            </a>
          </AnimateOnScroll>

        </div>
        
        {/* Clean edge */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ REQUIREMENT NOTE ═══ */}
      <section className="py-12 bg-ivory-warm border-b border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <AnimateOnScroll>
            <div className="bg-sage-muted border-l-4 border-sage p-6 lg:p-8 rounded-r-2xl shadow-sm flex items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mt-1">
                 <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
                  Strict Requirement
                </h3>
                <p className="text-charcoal/80 text-base leading-relaxed">
                  A transfer consultation is <strong>REQUIRED</strong> before a retightening appointment can be made, <strong>no exceptions.</strong>
                </p>
              </div>
            </div>
           </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ 2-STEP PROCESS ═══ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24 lg:mb-32">
            {/* Image Side */}
            <div className="order-2 lg:order-1 relative">
              <AnimateOnScroll>
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[2].src} 
                    alt="Loc assessment during a transfer consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 448px"
                  />
                </div>
                {/* Step badge */}
                <div className="absolute top-8 left-8 lg:left-0 -translate-x-1/4 translate-y-4 bg-charcoal text-ivory w-16 h-16 flex items-center justify-center rounded-full shadow-xl border-4 border-white">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-2xl">01</span>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <AnimateOnScroll delay={100}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Transfer Consultation <span className="text-sage text-2xl lg:text-3xl">(1 hr)</span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="prose prose-lg prose-p:text-charcoal/70 prose-p:leading-relaxed prose-strong:text-charcoal space-y-6">
                  <p>
                    All transfer clients are required to undergo a comprehensive consultation prior to any services being completed. <strong>Consultations cannot take place on the same day as your retie</strong>, as I will need ample time to properly assess your hair and scalp&apos;s current condition.
                  </p>
                  <p>
                    This detailed consultation will include photos and videos of your hair when you arrive and throughout the diagnostic appointment. These are purely to document your hair&apos;s current condition and structural integrity before taking you on as a new client, guaranteeing complete transparency for both of us.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Content Side */}
            <div className="order-1">
              <AnimateOnScroll delay={100}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Retightening Appointment
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="prose prose-lg prose-p:text-charcoal/70 prose-p:leading-relaxed prose-strong:text-charcoal space-y-6">
                  <p>
                    Once your consultation is complete and you are approved as a transfer client, your retightening session will be scheduled on a <strong>separate day</strong>.
                  </p>
                  <p>
                    Because it is our first retightening session together, I will be meticulously navigating another loctician&apos;s previous grid and work. You can expect to be at your appointment anywhere from <strong>2–4 hours</strong> depending on the number of locs you have, the size of your locs, and their current state of maintenance.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Image Side */}
            <div className="order-2 relative">
              <AnimateOnScroll>
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[10].src} 
                    alt="Retightening session for a transfer client"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 448px"
                  />
                  {/* Decorative border */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full border border-sage/30 rounded-[2rem] -z-10 hidden sm:block" />
                </div>
                 {/* Step badge */}
                 <div className="absolute top-8 right-8 lg:right-0 translate-x-1/4 translate-y-4 bg-charcoal text-ivory w-16 h-16 flex items-center justify-center rounded-full shadow-xl border-4 border-white">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-2xl">02</span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.08),transparent_70%)]" />
        
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-8">
              Start Your Transfer Process <span className="text-sage-light">Today</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="text-ivory/60 text-lg lg:text-xl leading-relaxed mx-auto mb-12">
              Book your 1-hour consultation so we can assess your scalp, evaluate your loc health, and get you on the schedule.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
              >
                Book Transfer Consultation
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
